"use client"
import Link from "next/link"


export default function CallToAction(){
    return (
       <div className="flex flex-col flex-wrap items-center justify-center">
            <Link href='/kontakt' className="rounded-full text-retro-black/80 p-3 border border-retro-black/80 bg-white/20 backdrop-blur-md transition-all active:scale-95">Skontaktuj sie</Link>
       </div>
    );
}