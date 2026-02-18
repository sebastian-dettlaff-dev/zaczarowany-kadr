import React from "react";

interface RetroLensProps {
    title: string;
    description:string;
    icon?:React.ReactNode;
}
 export default function RetroLens({title, description, icon}:RetroLensProps) {
    return(
<div className="bg-gradient-to-br from-zinc-800 to-retro-grey-900 p-8 flex flex-col md:flex-row gap-8 justify-start items-center">
<div className="relative w-72 h-72 hover:scale-110 transition-transform duration-300">
  {/* (Glassmorphism) */}
  <div className="absolute inset-0 rounded-full bg-white/5 backdrop-blur-sm border border-white/20 shadow-inner"></div>
  
  {/* extra styles */}
  <div className="absolute inset-0 rounded-full shadow-[inset_0_0_30px_rgba(50,100,255,0.2),_inset_-10px_-10px_30px_rgba(255,100,50,0.2)]"></div>

  {/* Central point - description*/}
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