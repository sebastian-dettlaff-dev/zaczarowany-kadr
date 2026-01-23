import {FormData} from './MultiStepForm';

interface StepFourthProps {
    nextStep:(field: keyof FormData, value: string) => void;
    formData: FormData;
    
}
export default function StepFourth({ nextStep, formData}: StepFourthProps) {
  const slots = [
    "RANO (8:00 - 12:00)",
    "POPOŁUDNIE (12:00 - 16:00)",
    "WIECZÓR (16:00 - 20:00)",
    "INNA PORA (NAPISZ W WIADOMOŚCI) "
  ];
    return (
      <div className="space-y-4">
      <h2 className="uppercase p-4 text-center">WYBIERZ PREFEROWANĄ PORĘ DNIA</h2>
      <div className="flex flex-col gap-3">
        {slots.map((slot) => (
          <button
            key={slot}
            onClick={() => nextStep('timeSlot', slot)} 
            className="flex-1 border border-white/20 bg-white/5 py-6 px-4 rounded-xl text-white text-[10px] tracking-[0.3em] uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
            
          >
            {slot}
        
          </button>
        ))}
      </div>
    </div>
    );
}
