"use client";
import {useState} from "react";
import { motion, AnimatePresence } from "framer-motion";
import StepOne from "./StepOne";
import StepSecond from "./StepSecond";
import StepThird from "./StepThird";
import StepFourth from "./StepFourth";
import StepFifth from "./StepFifth";
import StepSixth from "./StepSixth";
import StepSeventh from "./StepSeventh";
import StepEighth from "./StepEighth";
import SuccessScreen from "./SuccessScreen"
import { submitContactForm } from "@/app/actions/sendEmail"; 
import { useGoogleReCaptcha } from "react-google-recaptcha-v3";

//  DEFINE THE FORM DATA STRUCTURE
export interface FormData {
    name: string;
    sessionType: string;
    plan: string;
    email: string;
    phone: string;
    date_Of_Session: string;
    timeSlot: string
    message: string;
}
// const totalSteps =8;
const totalSteps=9;


export default function MultiStepForm() {
  const {executeRecaptcha} = useGoogleReCaptcha();
    const [step, setStep] = useState(0);
   
    
// HOLD FORM DATA IN STATE
    const [formData, setFormData] =useState<FormData>({
       
        sessionType: "",
        plan:"",
        date_Of_Session: "",
        timeSlot:"",
        name: "",
        email: "",
        phone: "",
        message: ""
    });
    // keyof FormData ensures that only valid keys can be used : 
    const nextStep = (field:keyof FormData, value: string) => {
        setFormData(
            (prev) =>
            ({...prev, [field]: value})
        );
        // Automatically proceed to next step after updating a field
        setStep((prev) => prev +1);
    };

  

    // Back to previous step manually
    const prevStep = () => {
        setStep((prev) => Math.max(prev -1,0));
    }
    const updateField = (field:keyof FormData, value:string) => {
        setFormData(
            (prev) => ({...prev, [field]: value})
        );
    };



const handleFinalSubmit = async () => {
  if(!executeRecaptcha){
    alert("Ochrona reCAPTCHA jeszcze się ładuje. Spróbuj za sekundę.");
    return;
  }
  try {
    const token = await executeRecaptcha("contact_form");
    const result = await submitContactForm(formData,token);
    if (result.success) {
      
      setStep(8); 
    } else {
      alert(result.error|| "Błąd weryfikacji anty-botowej." );
    }
  } catch (error) {
    console.error("BŁĄD PODCZAS WYSYŁKI:", error);
    alert("Błąd połączenia z serwerem.");
  }
};
    return (
        





    <div className="relative bg-[#1e1646] h-auto flex flex-col items-center justify-center p-6">
        <div className="absolute inset-0  bg-[radial-gradient(circle_at_bottom,_rgba(40,40,40,0.8)_0%,_rgba(10,10,10,0.5)_40%,_rgba(0,0,0,1)_80%)]"></div>
        <div className="relative max-w-2xl w-full ">
         <div className="relative bg-white/00.7 backdrop-blur-xl border border-white/10  rounded-3xl p-10 shadow-2xl overflow-hidden shadow-black/50">
         <div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.05] to-transparent pointer-events-none"></div>

         
         <div className="mb-10">
             <div className="flex justify-between text-[10px] text-white/40 mb-2 uppercase tracking-widest">
            <span>Mode: Manual</span>
            <span>ETAP: 0{step + 1} / 0{totalSteps}</span>
          </div>
           
             <div className="relative h-[2px] bg-white/10">
             
    <div className="absolute inset-0 border-t border-white/20 flex justify-between px-1">
      {[...Array(25)].map((_, i) => (
        <div 
          key={i} 
          className={`w-[1px] transition-colors duration-500 ${
            
            (i / 25) * 100 <= ((step + 1) / totalSteps) * 100 
              ? 'bg-cyan-400/60' 
              : 'bg-white/20'
          } ${i % 5 === 0 ? 'h-4' : 'h-2'}`}
        ></div>
      ))}
    </div>
            <motion.div 
              className="absolute top-0 left-0 h-full bg-cyan-400 shadow-[0_0_15px_#22d3ee]"
              animate={{ width: `${((step + 1) / totalSteps) * 100}%` }}
            />
            
          </div>
          
            </div>
         </div>


           <div className="min-h-[300px]">
          <AnimatePresence mode="wait">
            <motion.div
              key={step}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
            >
              {step === 0 && <StepOne formData={formData} nextStep={nextStep} />}
              {step === 1 && <StepSecond formData={formData} nextStep={nextStep}  />}
               {step === 2 &&
                 (<StepThird formData={formData} nextStep={nextStep} />)}
                 {step === 3 &&
                 (<StepFourth formData={formData} nextStep={nextStep}  />)}
                 {step === 4 &&
                 (<StepFifth formData={formData} nextStep={nextStep} updateField={updateField} />)}
                 {step === 5 &&
                 (<StepSixth
                  formData={formData} nextStep={nextStep} updateField={updateField} />)}
                 {step === 6 &&
                 (<StepSeventh formData={formData} nextStep={nextStep} updateField={updateField} />)}
                 {step === 7 &&
                 (<StepEighth formData={formData} nextStep={nextStep} updateField={updateField} onComplete={handleFinalSubmit} />)}
                 {step === 8 && <SuccessScreen />}
              
            </motion.div>
          </AnimatePresence>

        </div>   
        
      

             <div className="mt-8 pt-6 border-t border-white/5 flex justify-between items-center text-[9px] text-white/30 tracking-[0.2em]">
           <div className="flex items-center gap-2">
             <span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
             SYSTEM READY
             
           </div>
           <button aria-label="Przejdź do poprzedniego kroku" onClick={prevStep} className="hover:text-red-600 transition-colors bg-transparent text-white text-lg">
            COFNIJ
           </button>
        </div>


        </div>
        
    </div>

        );
    }
   



