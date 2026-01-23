import { div } from "framer-motion/client";
import { FormData } from "./MultiStepForm";

interface StepFifthProps {
    nextStep: (field: keyof FormData, value: string) => void;
    formData: FormData;
    updateField: (field: keyof FormData, value: string) => void;
}
export default function StepFifth({ nextStep, formData, updateField }: StepFifthProps) {
    return (
                <div className="space-y-4">
      <h2 className=" uppercase p-4 text-center">Podaj swoje imię i nazwisko:</h2>    
        <div className="flex flex-col gap-3">
        <input
          type="text"
          value={formData.name}
          onChange={(e) => updateField('name', e.target.value)}
          placeholder="Imię i nazwisko"
          className="w-full p-4 border border-white/20 bg-white/5 rounded-xl text-white placeholder-white/60 text-[10px] tracking-[0.3em] uppercase focus:outline-none focus:ring-2 focus:ring-retro-orange focus:border-retro-orange transition-all duration-300"
        />
    
      </div>
      {formData.name.length > 4 && (
                    <button 
                        onClick={() => nextStep('name', formData.name)} 
                        className="p-4 bg-cyan-500 text-black font-bold rounded-xl animate-pulse text-[10px] tracking-[0.2em]"
                    >
                        POTWIERDŹ I KONTYNUUJ
                    </button>
                )}
      </div>
    );
    
}