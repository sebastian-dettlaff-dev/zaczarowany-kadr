import {useState} from "react"
import { FormData } from "./MultiStepForm";


interface StepEighthProps {
    nextStep:(field: keyof FormData, value: string) => void;
    formData: FormData;
    updateField: (field: keyof FormData, value: string) => void;
    onComplete: () => Promise<void>;
}
export default function StepEighth({formData,  updateField,onComplete }: StepEighthProps) {
    const [isSending , setIsSending] = useState(false);

    const handleFinalClick = async () => {
        setIsSending(true);
        await onComplete();
        setIsSending(false);
    };

 return (
          <div className="space-y-4">
      <h2 className=" uppercase p-4 text-center">Napisz wiadomosc</h2>    
        <div className="flex flex-col gap-3">
        <textarea
          value={formData.message}
          onChange={(e) => updateField('message', e.target.value)}
          placeholder="Tu wpisz swoja wiadomosc"
          rows={5}
          className="w-full p-4 border border-white/20 bg-white/5 rounded-xl text-white placeholder-white/60 text-[10px] tracking-[0.3em] uppercase focus:outline-none focus:ring-2 focus:ring-retro-orange focus:border-retro-orange transition-all duration-300"
        />
    
      </div>
      {formData.message.length > 4 && (
                    <button 
                    aria-label="Wyślij zapytanie"
                        onClick={handleFinalClick}
                        disabled={isSending}
                        className="p-4 bg-cyan-500 text-black font-bold rounded-xl animate-pulse text-[10px] tracking-[0.2em]"
                        
                    >
                       WYSLIJ ZAPYTANIE
                    </button>
                )}
      </div>
    );
}