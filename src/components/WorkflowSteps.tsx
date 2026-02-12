
export default function WorkflowSteps() {
return (
    <>
    <section aria-label="Jak wyglada wspolpraca" className="bg-zinc-950 py-20 px-6">
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
          <h3 className="text-center md:text-left text-xl font-bold mb-2 uppercase tracking-tight">Konsultacja i wizja</h3>
          <p className="text-zinc-400 leading-relaxed max-w-2xl text-center md:text-left">
            Porozmawiamy o tym, czego potrzebujesz, jaki klimat Ci się podoba i jaki efekt chcesz osiągnąć. Jako <strong>fotograf działający w Wejherowie i Trójmieście</strong>, pomogę Ci dopasować wizję do najpiękniejszych lokalizacji w okolicy. Wspólnie stworzymy moodboard i ustalimy unikalny styl Twojej sesji. <span className="text-retro-orange font-bold">Wolisz spotkania face-to-face? Spotkajmy sie na kawie! Zadzwon , i razem umowimy dogodny termin!</span>
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
          <h3 className=" text-center md:text-left text-xl font-bold mb-2 uppercase tracking-tight">Przygotowanie do sesji bez stresu</h3>
          <p className="text-zinc-400 text-center md:text-left leading-relaxed max-w-2xl">
           Pomogę Ci dobrać stylizację, dodatki i idealne miejsce na mapie <strong>Trójmiasta lub okolic Wejherowa</strong>. Dostaniesz ode mnie proste wskazówki, jak się przygotować, żebyś przed obiektywem czuła się swobodnie i naturalnie – bez sztywnego pozowania i zbędnego stresu.
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
          <h3 className=" text-xl text-center md:text-left  font-bold mb-2 uppercase tracking-tight">Sesja zdjęciowa i wybór ujęć</h3>
          <p className="text-zinc-400 text-center md:text-left  leading-relaxed max-w-2xl">
            Spotkamy się na sesji i zrobimy zdjęcia w luźnej atmosferze. Baw się dobrze – to czas dla Ciebie. Po sesji dostaniesz dostęp do galerii online, gdzie sama wybierzesz swoje ulubione zdjęcia do autorskiej obróbki.
          </p>
          <div className="flex-grow pt-2">
          <p className="text-zinc-400 text-center md:text-left leading-relaxed max-w-2xl">Oddam gotowe zdjęcia w liczbie przewidzianej w pakiecie. Jeśli jednak uznasz, że trudno zdecydować się na tylko kilka ujęć, bez problemu możesz dokupić dodatkowe kadry z naszej wspólnej przygody w <strong>Gdyni, Gdańsku czy Sopocie</strong>.</p>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>
</>
);
}