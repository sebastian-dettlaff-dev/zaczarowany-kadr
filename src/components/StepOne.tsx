

import React from 'react';
import { FormData } from './MultiStepForm';

interface StepOneProps {
    nextStep: (field: keyof FormData, value: string) => void;
    formData: FormData;
}
// Plener , studio w domu , w  domu u klienta 

export default function StepOne({ nextStep, formData }
   : StepOneProps) {
  const options = ['Rodzinna', 'Kobieca', 'Okolicznosciowa', 'Wizerunkowa', "Ciazowa i noworodkowa","Narzeczenska", 'Inna (napisz w wiadomości)'];

  return (
    <div className="space-y-4">
      <h2 className="uppercase p-4 text-center">Jaki rodzaj sesji Cię interesuje?</h2>
      <div className="flex flex-col gap-3">
        {options.map((option) => (
          <button
            key={option}
            onClick={() => nextStep('sessionType', option)} // Zapisuje pod 'type' i idzie dalej
            className="flex-1 border border-white/20 bg-white/5 py-6 px-4 rounded-xl text-white text-[10px] tracking-[0.3em] uppercase hover:bg-white/10 hover:border-white/40 transition-all duration-300 group"
          >
            {option}
        
          </button>
        ))}
      
      </div>
    </div>
  );
}

// p-4 text-center transition-all rounded-lg duration-300  bg-white/70 backdrop-blur-xl border border-white/30 rounded-2xl p-8 shadow-2xl
        // bg-[linear-gradient(to_right,rgba(255,255,255,0.12)_1px,transparent_1px),linear-gradient(to_bottom,rgba(255,255,255,0.12)_1px,transparent_1px)] bg-[size:32px_32px]