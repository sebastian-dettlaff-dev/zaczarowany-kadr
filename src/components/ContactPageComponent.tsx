'use client';
import MultiStepForm from "@/components/MultiStepForm";
import { COMPANY_NAME } from '@/lib/constants';
import { motion } from 'framer-motion';




export default function ContactPageComponent() {
    return(
        <>
        <div className="max-w-4xl mx-auto px-6 text-center mb-12">
    <motion.div
    initial={{opacity:0, scale:0.9}}
    animate={{opacity:1, scale:1}}
    className="inline-block px-3 py-1 border border-retro-accent/30 rounded-full text-retro-accent tracking-widest uppercase mb-4"
    >
    Zapraszam do Kontaktu!
    </motion.div>
    <h1 className="text-retro-black text-4xl md:text-5xl font-bold font-serif mb-6 leading-tight">
    Stwórzmy razem coś <span className="text-retro-accent italic">wyjątkowego</span>
  </h1>
  <p className="text-gray-500 text-lg max-w-xl mx-auto">
    Mój proces rezerwacji jest krótki i konkretny. Wybierz rodzaj sesji, a ja zajmę się resztą.
  </p>
     </div>
    <MultiStepForm></MultiStepForm>
    
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 py-20">
  <div className="space-y-4">
    <div className="text-retro-accent text-2xl font-mono">01.</div>
    <h3 className="text-xl font-bold uppercase tracking-tighter text-retro-black">Szybka Odpowiedź</h3>
    <p className="text-sm text-gray-500 leading-relaxed">
      Szanuję Twój czas. Na każde zapytanie odpowiadam osobiście w ciągu maksymalnie 24 godzin roboczych.
    </p>
  </div>
  
  <div className="space-y-4">
    <div className="text-retro-accent text-2xl font-mono">02.</div>
    <h3 className="text-xl font-bold uppercase tracking-tighter text-retro-black">Pełne Wsparcie</h3>
    <p className="text-sm text-gray-500 leading-relaxed">
      Nie wiesz jak się ubrać? Pomogę Ci dobrać stylizację i lokalizację, która najlepiej odda Twój charakter.
    </p>
  </div>

  <div className="space-y-4">
    <div className="text-retro-accent text-2xl font-mono">03.</div>
    <h3 className="text-xl font-bold uppercase tracking-tighter text-retro-black">Jasne Zasady</h3>
    <p className="text-sm text-gray-500 leading-relaxed">
      Bez ukrytych kosztów. Po wypełnieniu formularza otrzymasz pełny cennik i regulamin współpracy, jesli tego sobie zyczysz.
    </p>
  </div>
</div>
        </>
    )
}