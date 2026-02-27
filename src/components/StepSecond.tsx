import { FormData } from "./MultiStepForm";
interface StepSecondProps {
    nextStep: (field: keyof FormData, value: string) => void;
    formData: FormData;
}

export default function StepSecond({ nextStep, formData }: StepSecondProps) {
const plan = [
    "Pakiet Mini (15 zdjęć)",
    "Pakiet Standard (25 zdjęć)",
    "Pakiet Premium (35 zdjęć)"
];
return(
    <div className="space-y-4">
      <h2 className="uppercase p-4 text-center">Wybierz pakiet, który Cię interesuje:</h2>
      <div className="flex flex-col gap-3">
        {plan.map((plan) => (
          <button
            aria-label={`Wybierz pakiet: ${plan}`}
            key={plan}
            onClick={() => nextStep('plan', plan)}
             className="flex-1 border border-white/20 bg-white/5 py-6 px-4 rounded-xl text-white text-[10px] tracking-[0.3em] uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
          >
            {plan}
          </button>
        ))}
          <p className="text-[10px] font-mono text-white/40 italic">Oferujemy róznorodne pakiety zdjęć do wyboru. Jesli nie znaleziono odpowiedniego pakietu, napisz w wiadomości.</p>
      </div>
    </div>
  );
}