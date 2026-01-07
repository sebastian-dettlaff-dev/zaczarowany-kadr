import React from "react";

interface RetroLensProps {
    title: string;
    description:string;
    icon?:React.ReactNode;
}
 export default function RetroLens({title, description, icon}:RetroLensProps) {
    return(
        // <div className="flex flex-col md:flex-row gap-1 items-center justify-center">
        //     <div className="relative w-72 h-72 mx-auto flex items-center justify-center">
        //         {/* Warstwa 1: Zewnętrzny pierścień obiektywu (mocniejszy) */}
        //         <div className="absolute inset-0 rounded-full bg-zinc-800 border-8 border-zinc-900 shadow-xl"></div>
                
        //         {/* Warstwa 2: Soczewka wewnętrzna (ciemniejsza, bardziej matowa) */}
        //         <div className="absolute inset-x-4 inset-y-4 rounded-full bg-zinc-700 flex flex-col items-center justify-center p-6 text-center z-10">
                    
        //             {/* Warstwa 3: Odblask soczewki (dla głębi) */}
        //             <div className="absolute top-8 left-8 w-2/3 h-2/3 bg-white/10 rounded-full blur-xl opacity-20 pointer-events-none"></div>

        //             {/* Treść wewnątrz obiektywu */}
        //             <h3 className="font-serif text-3xl font-bold text-retro-beige mb-3 relative z-20">
        //                 {title}
        //             </h3>
        //             <p className="text-sm text-gray-300 relative z-20 leading-snug">
        //                 {description}
        //             </p>
        //         </div>
        //     </div>
        // </div>
//         <div className="relative w-80 h-80 flex items-center justify-center group">
//   {/* Zewnętrzny pierścień z "ząbkami" (używamy border-dashed dla efektu nacięć) */}
//   <div className="absolute inset-0 rounded-full border-[12px] border-zinc-900 border-dashed opacity-40 animate-[spin_60s_linear_infinite]"></div>
  
//   {/* Główny tubus obiektywu */}
//   <div className="absolute inset-4 rounded-full bg-gradient-to-br from-zinc-800 to-black border-4 border-zinc-600 shadow-[0_0_50px_rgba(0,0,0,0.5)]"></div>
  
//   {/* Napisy techniczne wokół soczewki (imitacja parametrów) */}
//   <div className="absolute inset-0 rounded-full flex items-center justify-center italic text-[10px] text-zinc-500 uppercase tracking-[0.3em]">
//     <span className="absolute top-6">35mm f/1.4 ASPH</span>
//     <span className="absolute bottom-6">Custom Glass Made in Poland</span>
//   </div>

//   {/* Środek - tekstowa zaleta */}
//   <div className="relative z-10 p-10 text-center">
//     <span className="text-retro-orange text-xs font-mono mb-2 block tracking-widest uppercase">Zaleta #01</span>
//     <h3 className="text-white font-serif text-2xl leading-tight">Niski budżet, <br/>wysoka jakość</h3>
//   </div>
// </div>
<div className="bg-gradient-to-br from-zinc-800 to-retro-grey-900 p-8 flex flex-col md:flex-row gap-8 justify-start items-center">
<div className="relative w-72 h-72 hover:scale-110 transition-transform duration-300">
  {/* Efekt szklanej tafli (Glassmorphism) */}
  <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 shadow-inner"></div>
  
  {/* Tęczowa poświata na krawędzi (Aberracja chromatyczna) */}
  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(50,100,255,0.2),_inset_-10px_-10px_30px_rgba(255,100,50,0.2)]"></div>

  {/* Centralny punkt - treść */}
  <div className="absolute inset-0 flex flex-col items-center justify-center p-8 text-center">
    <div className="w-12 h-[1px] bg-retro-orange mb-4"></div>
    <h3 className="text-retro-black font-serif text-xl font-bold uppercase tracking-tighter">
      Szybka <br/> realizacja
    </h3>
    <p className="text-xs text-retro-grey mt-2">Zdjęcia gotowe w 7 dni</p>
    <div className="w-12 h-[1px] bg-retro-orange mt-4"></div>
  </div>
</div>

</div>

    );
}