
export default function WorkflowSteps() {
return (
    <>
    <section className="bg-zinc-950 py-20 px-6">
  <div className="max-w-4xl mx-auto">
    <h2 className="text-4xl mb-12 text-center">
      Jak wygląda <span className="text-retro-orange text-4xl">współpraca?</span>
    </h2>

    <div className="space-y-12">
      {/* KROK 1 */}
      <div className="relative flex flex-col items-center md:items-start gap-8 group md:flex-row ">
        {/* Element graficzny: Numer w pierścieniu obiektywu */}
        <div className="flex-shrink-0 relative w-20 h-20 flex items-center justify-center ">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-700 group-hover:rotate-90 transition-transform duration-700"></div>
          <div className="absolute inset-2 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
            <span className="text-retro-orange font-mono text-xl">01</span>
          </div>
        </div>

        {/* Treść pod SEO */}
        <div className="flex-grow pt-2">
          <h3 className="text-center md:text-left text-xl font-bold mb-2 uppercase tracking-tight">Rezerwacja i Konsultacja</h3>
          <p className="text-zinc-400 leading-relaxed max-w-2xl text-center md:text-left">
            Wybierz dogodny termin sesji zdjęciowej przez formularz lub telefonicznie. Omówimy Twoje potrzeby, 
            ustalimy moodboard oraz kluczowe cele wizualne, aby zdjęcia idealnie 
            oddawały charakter Twojej marki osobistej lub firmowej. <span className="text-retro-orange font-bold">Wolisz spotkania face-to-face? Spotkajmy sie na kawie! Zadzwon , i razem umowimy dogodny termin!</span>
          </p>
        </div>
      </div>

      {/* KROK 2 */}
      <div className="relative flex flex-col items-center gap-8 group md:flex-row md:items-start">
        <div className="flex-shrink-0 relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-700 group-hover:rotate-90 transition-transform duration-700"></div>
          <div className="absolute inset-2 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
            <span className="text-retro-orange font-mono text-xl">02</span>
          </div>
        </div>

        <div className="flex-grow pt-2">
          <h3 className=" text-center md:text-left text-xl font-bold mb-2 uppercase tracking-tight">Przygotowanie planu (Pre-production)</h3>
          <p className="text-zinc-400 text-center md:text-left leading-relaxed max-w-2xl">
            Pomagam w doborze stylizacji, rekwizytów i lokalizacji. Otrzymasz ode mnie 
            krótki poradnik, jak przygotować się fizycznie do sesji, by uniknąć stresu 
            i wyglądać naturalnie przed obiektywem.
          </p>
        </div>
      </div>

      {/* KROK 3 */}
      <div className="relative flex flex-col items-center md:items-start gap-8 group md:flex-row">
        <div className="flex-shrink-0 relative w-20 h-20 flex items-center justify-center">
          <div className="absolute inset-0 rounded-full border-2 border-dashed border-zinc-700 group-hover:rotate-90 transition-transform duration-700"></div>
          <div className="absolute inset-2 rounded-full bg-zinc-900 border border-zinc-700 flex items-center justify-center">
            <span className="text-retro-orange font-mono text-xl">03</span>
          </div>
        </div>

        <div className="flex-grow pt-2">
          <h3 className=" text-xl text-center md:text-left  font-bold mb-2 uppercase tracking-tight">Sesja i Selekcja materiału</h3>
          <p className="text-zinc-400 text-center md:text-left  leading-relaxed max-w-2xl">
            Spotykamy się na planie. Po sesji otrzymasz dostęp do galerii online, 
            gdzie samodzielnie wybierzesz najlepsze ujęcia do finalnego retuszu. 
            Gwarantuję szybki czas realizacji i najwyższą jakość ASPH.
          </p>
        </div>
      </div>
    </div>
  </div>
</section>
</>
);
}