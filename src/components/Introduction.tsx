import RetroLens from '@/components/RetroLens';
import React from 'react';

export default function Introduction() {
    return(
        // <RetroLens  title="Zaczarowany Kadr" description="Witaj w świecie fotografii z przeszłości, gdzie każdy obraz ma swoją historię." />
        <>
        <div className=" bg-gradient-to-b from-white to-transparent z-10shadow-2xl -mt-10 p-20 flex flex-col md:flex-row gap-0 justify-center items-center">
  
  {/* Soczewka 1 - Wyżej */}
  <div className="relative w-72 h-72 hover:scale-110 transition-all duration-500 hover:z-5 -translate-y-8">
    <RetroLens title="Szybka realizacja" description="7 dni roboczych" />
  </div>

  {/* Soczewka 2 - Niżej i nachodzi na sąsiadów */}
  <div className="relative w-80 h-80 hover:scale-110 transition-all duration-500 hover:z-6 md:-ml-12 translate-y-12">
    <RetroLens title="Niski Budżet" description="Pakiety od 300zł" />
  </div>

  {/* Soczewka 3 - Średnio i lekko w lewo */}
  <div className="relative w-72 h-72 hover:scale-110 transition-all duration-500 hover:z-7 md:-ml-12 -translate-y-4">
    <RetroLens title="Pełna Pasja" description="Każdy kadr ma duszę" />
  </div>
      <div className="relative w-72 h-72 hover:scale-110 transition-all duration-500 hover:z-8 md:-ml-12 -translate-y-6">
    <RetroLens title="Pełna Pasja" description="Każdy kadr ma duszę" />
  </div>
  <div className="relative w-72 h-72 hover:scale-110 transition-all duration-500 hover:z-9 md:-ml-12 -translate-y-1">
    <RetroLens title="Pełna Pasja" description="Każdy kadr ma duszę" />
  </div>
</div>
        </>

        
    );
}