import { FormData } from "./MultiStepForm";

interface StepSeventhProps {
    nextStep:(field: keyof FormData, value: string) => void;
    formData: FormData;
    updateField: (field: keyof FormData, value: string) => void;
}
export default function StepSeventh({ nextStep, formData, updateField }: StepSeventhProps) {
 return (
         <div className="space-y-4">
      <h2 className=" uppercase p-4 text-center">Numer Telefonu do kontaktu</h2>    
        <div className="flex flex-col gap-3">
        <input
          type="text"
          value={formData.phone}
          onChange={(e) => updateField('phone', e.target.value)}
          placeholder="Numer Telefonu"
          className="w-full p-4 border border-white/20 bg-white/5 rounded-xl text-white placeholder-white/60 text-[10px] tracking-[0.3em] uppercase focus:outline-none focus:ring-2 focus:ring-retro-orange focus:border-retro-orange transition-all duration-300"
        />

      </div>
      {formData.name.length > 4 && (
                    <button 
                        onClick={() => nextStep('name', formData.name)} // Dopiero tu przeskakuje krok
                        className="p-4 bg-cyan-500 text-black font-bold rounded-xl animate-pulse text-[10px] tracking-[0.2em]"
                    >
                        POTWIERDŹ I KONTYNUUJ
                    </button>
                )}
                  <p className="text-[10px] font-mono text-white/40 italic">Jeśli preferują Państwo kontakt o konkretnej porze dnia, uprzejmie prosimy o taką informację w wiadomości.</p>
      </div>
    );
    
}