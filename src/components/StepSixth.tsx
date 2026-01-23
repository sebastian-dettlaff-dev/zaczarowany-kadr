import {FormData} from "./MultiStepForm";

interface StepFifthProps {
    nextStep:(field: keyof FormData, value: string) => void;
    formData: FormData;
    updateField: (field: keyof FormData, value: string) => void;
}
export default function StepFifth({ nextStep, formData, updateField }: StepFifthProps) {
     return (
        <div className="space-y-4">
      <h2 className=" uppercase p-4 text-center">EMAIL</h2>    
        <div className="flex flex-col gap-3">
        <input
          type="text"
          value={formData.email}
          onChange={(e) => updateField('email', e.target.value)}
          placeholder="EMAIL@"
          className="w-full p-4 border border-white/20 bg-white/5 rounded-xl text-white placeholder-white/60 text-[10px] tracking-[0.3em] uppercase focus:outline-none focus:ring-2 focus:ring-retro-orange focus:border-retro-orange transition-all duration-300"
        />
    
      </div>
      {formData.email.length > 4 && (
                    <button 
                        onClick={() => nextStep('email', formData.email)} 
                        className="p-4 bg-cyan-500 text-black font-bold rounded-xl animate-pulse text-[10px] tracking-[0.2em]"
                    >
                        POTWIERDŹ I KONTYNUUJ
                    </button>
                )}
      </div>
    );
    
}