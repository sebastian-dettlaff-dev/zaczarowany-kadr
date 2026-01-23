import React from 'react';
import { Cormorant_Garamond, Montserrat, Space_Mono } from 'next/font/google';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';

// Metadata for servises page
export const metadata: Metadata = {
  title: 'Oferta Sesji', // Next automatycznie zamieni to na "Oferta Sesji | Zaczarowany Kadr"
  description: 'Sprawdź rodzaje sesji: plener, domowe studio , rodzinne oraz indywidualne , okolicznosciowe i narzeczenskie.A moze kobiece lub wizerunkowe.DDostosujemy sie do ciebie!',
  //You don;t need openGraph here as it's inherited from layout.tsx
//   You need only schema data JSON-LD if it's different from the main page - so only specific services offered on this page
};
export default function Offer() {
  return (
    <section className="py-20 px-2 md:px-6">
      <div className="max-w-6xl mx-auto">
          <div className="md:hidden block text-center mb-16 mt-16">
                    <span className="text-retro-orange uppercase tracking-[0.3em] text-xs font-bold">Twoja wymarzona sesja w miłej atmosferze.</span>
                    <h2 className="text-4xl md:text-5xl font-serif mt-4 text-retro-black italic">Wybierz rodzaj sesji</h2>
                </div>
        {/* Header Section */}
        <div className=" hidden md:block text-center leading-relaxed">
          <h1 className="pt-16 mb-4 text-2xl text-retro-black">
            Twoja wymarzona sesja w miłej atmosferze. Sprawdź{" "}
            <span className="font-bold">
              <Link href="/cennik" className="hover:text-retro-orange transition-colors">ofertę</Link>
            </span>{" "}
            i{" "}
            <span className="font-bold">
              <Link href="/" className="hover:text-retro-orange transition-colors">opinie</Link>
            </span>{" "}
            klientów. Skontaktuj się ze mną – wspólnie stworzymy piękne kadry!
          </h1>
          <p className="hidden md:block p-6 text-[clamp(1rem,1.1vw,1.125rem)] text-zinc-700 ">
            Zatrzymuję w kadrze emocje, których nie da się opisać słowami. Wybierz rodzaj sesji, 
            który najlepiej opowiada Twoją historię. Poniżej znajdziesz moją ofertę, 
            napij się kawy i zobacz, czy znajdziesz coś dla siebie!
          </p>
        </div>

        {/* Grid Container */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-2 items-stretch">
          
          {/* FIRST CARD - Featured Session */}
          <div className="group relative col-span-1 md:col-span-2 h-[600px] md:h-[500px] overflow-hidden rounded-sm">
            
            {/* Background Image */}
            <Image 
              src="/assets/images/pexels-octavio-j-garcia-n-703604-1538077.jpg" 
              alt="Sesja rodzinna" 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja rodzinna
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1.125rem)]">
                Odkryj swoją pewność siebie poprzez subtelne i eleganckie ujęcia w klimacie fine-art. 
                Naturalne kadry pełne miłości, uchwycone w swobodny sposób.
              </p>

              {/* Mobile Only Links */}
              <div className="flex flex-wrap gap-3 md:hidden">
                <Link href="/cennik" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-all active:scale-95">
                  Cennik
                </Link>
                <Link href="/portfolio" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-all active:scale-95">
                  Portfolio
                </Link>
                <Link href="/kontakt" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-all active:scale-95">
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Desktop Hover Overlay (Glassmorphism) */}
            <div className="absolute inset-0 z-20 hidden md:flex flex-col items-center justify-center bg-black/30 opacity-0 backdrop-blur-md transition-all duration-700 group-hover:opacity-100">
              <ul className="flex flex-col gap-6 translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                <li>
                  <Link href="/cennik" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                    Zobacz Cennik
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                    Portfolio
                  </Link>
                </li>
                  <li>
                   <Link href="/kontakt" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                  Kontakt
                </Link>
                </li>
              </ul>
            </div>
            
          </div>
          {/* SECOND CARD - Featured Session */}
          <div className="group relative col-span-1 md:col-span-1 h-[600px] md:h-[500px] overflow-hidden rounded-sm">
            
            {/* Background Image */}
            <Image 
              src="/assets/images/pexels-octavio-j-garcia-n-703604-1538077.jpg" 
              alt="Sesja rodzinna" 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja rodzinna
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1.125rem)]">
                Odkryj swoją pewność siebie poprzez subtelne i eleganckie ujęcia w klimacie fine-art. 
                Naturalne kadry pełne miłości, uchwycone w swobodny sposób.
              </p>

              {/* Mobile Only Links */}
              <div className="flex flex-wrap gap-3 md:hidden ">
                <Link href="/cennik" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm  text-white backdrop-blur-md transition-all active:scale-95">
                  Cennik
                </Link>
                <Link href="/portfolio" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm  text-white backdrop-blur-md transition-all active:scale-95">
                  Portfolio
                </Link>
                <Link href="/kontakt" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm  text-white backdrop-blur-md transition-all active:scale-95">
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Desktop Hover Overlay (Glassmorphism) */}
            <div className="absolute inset-0 z-20 hidden md:flex flex-col items-center justify-center bg-black/30 opacity-0 backdrop-blur-md transition-all duration-700 group-hover:opacity-100">
              <ul className="flex flex-col gap-6 translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                <li>
                  <Link href="/cennik" className="block rounded-full border-2 border-white px-10 py-3 text-lg text-white transition-all hover:bg-white hover:text-black">
                    Zobacz Cennik
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                    Portfolio
                  </Link>
                </li>
                <li>
                   <Link href="/kontakt" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                  Kontakt
                </Link>
                </li>
              </ul>
            </div>
            
          </div>
          {/* THIRD CARD - Featured Session */}
          <div className="group relative col-span-1 md:col-span-1 h-[600px] md:h-[500px] overflow-hidden rounded-sm">
            
            {/* Background Image */}
            <Image 
              src="/assets/images/pexels-octavio-j-garcia-n-703604-1538077.jpg" 
              alt="Sesja rodzinna" 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja rodzinna
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1.125rem)]">
                Odkryj swoją pewność siebie poprzez subtelne i eleganckie ujęcia w klimacie fine-art. 
                Naturalne kadry pełne miłości, uchwycone w swobodny sposób.
              </p>

              {/* Mobile Only Links */}
              <div className="flex flex-wrap gap-3 md:hidden ">
                <Link href="/cennik" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm  text-white backdrop-blur-md transition-all active:scale-95">
                  Cennik
                </Link>
                <Link href="/portfolio" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm  text-white backdrop-blur-md transition-all active:scale-95">
                  Portfolio
                </Link>
                <Link href="/kontakt" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm  text-white backdrop-blur-md transition-all active:scale-95">
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Desktop Hover Overlay (Glassmorphism) */}
            <div className="absolute inset-0 z-20 hidden md:flex flex-col items-center justify-center bg-black/30 opacity-0 backdrop-blur-md transition-all duration-700 group-hover:opacity-100">
              <ul className="flex flex-col gap-6 translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                <li>
                  <Link href="/cennik" className="block rounded-full border-2 border-white px-10 py-3 text-lg text-white transition-all hover:bg-white hover:text-black">
                    Zobacz Cennik
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                    Portfolio
                  </Link>
                </li>
                <li>
                   <Link href="/kontakt" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                  Kontakt
                </Link>
                </li>
              </ul>
            </div>
            
          </div>
           {/* FOURTH CARD - Featured Session */}
          <div className="group relative col-span-1 md:col-span-2 h-[600px] md:h-[500px] overflow-hidden rounded-sm">
            
            {/* Background Image */}
            <Image 
              src="/assets/images/pexels-octavio-j-garcia-n-703604-1538077.jpg" 
              alt="Sesja rodzinna" 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja rodzinna
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1.125rem)]">
                Odkryj swoją pewność siebie poprzez subtelne i eleganckie ujęcia w klimacie fine-art. 
                Naturalne kadry pełne miłości, uchwycone w swobodny sposób.
              </p>

              {/* Mobile Only Links */}
              <div className="flex flex-wrap gap-3 md:hidden">
                <Link href="/cennik" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-all active:scale-95">
                  Cennik
                </Link>
                <Link href="/portfolio" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-all active:scale-95">
                  Portfolio
                </Link>
                <Link href="/kontakt" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-all active:scale-95">
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Desktop Hover Overlay (Glassmorphism) */}
            <div className="absolute inset-0 z-20 hidden md:flex flex-col items-center justify-center bg-black/30 opacity-0 backdrop-blur-md transition-all duration-700 group-hover:opacity-100">
              <ul className="flex flex-col gap-6 translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                <li>
                  <Link href="/cennik" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                    Zobacz Cennik
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                    Portfolio
                  </Link>
                </li>
                  <li>
                   <Link href="/kontakt" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                  Kontakt
                </Link>
                </li>
              </ul>
            </div>
            
          </div>
          {/* FIFTH CARD - Featured Session */}
          <div className="group relative col-span-1 md:col-span-2 h-[600px] md:h-[500px] overflow-hidden rounded-sm">
            
            {/* Background Image */}
            <Image 
              src="/assets/images/pexels-octavio-j-garcia-n-703604-1538077.jpg" 
              alt="Sesja rodzinna" 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja rodzinna
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1.125rem)]">
                Odkryj swoją pewność siebie poprzez subtelne i eleganckie ujęcia w klimacie fine-art. 
                Naturalne kadry pełne miłości, uchwycone w swobodny sposób.
              </p>

              {/* Mobile Only Links */}
              <div className="flex flex-wrap gap-3 md:hidden">
                <Link href="/cennik" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-all active:scale-95">
                  Cennik
                </Link>
                <Link href="/portfolio" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-all active:scale-95">
                  Portfolio
                </Link>
                <Link href="/kontakt" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm text-white backdrop-blur-md transition-all active:scale-95">
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Desktop Hover Overlay (Glassmorphism) */}
            <div className="absolute inset-0 z-20 hidden md:flex flex-col items-center justify-center bg-black/30 opacity-0 backdrop-blur-md transition-all duration-700 group-hover:opacity-100">
              <ul className="flex flex-col gap-6 translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                <li>
                  <Link href="/cennik" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                    Zobacz Cennik
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                    Portfolio
                  </Link>
                </li>
                  <li>
                   <Link href="/kontakt" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                  Kontakt
                </Link>
                </li>
              </ul>
            </div>
            
          </div>
           {/* SIXTH CARD - Featured Session */}
          <div className="group relative col-span-1 md:col-span-1 h-[600px] md:h-[500px] overflow-hidden rounded-sm">
            
            {/* Background Image */}
            <Image 
              src="/assets/images/pexels-octavio-j-garcia-n-703604-1538077.jpg" 
              alt="Sesja rodzinna" 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja rodzinna
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1.125rem)]">
                Odkryj swoją pewność siebie poprzez subtelne i eleganckie ujęcia w klimacie fine-art. 
                Naturalne kadry pełne miłości, uchwycone w swobodny sposób.
              </p>

              {/* Mobile Only Links */}
              <div className="flex flex-wrap gap-3 md:hidden ">
                <Link href="/cennik" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm  text-white backdrop-blur-md transition-all active:scale-95">
                  Cennik
                </Link>
                <Link href="/portfolio" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm  text-white backdrop-blur-md transition-all active:scale-95">
                  Portfolio
                </Link>
                <Link href="/kontakt" className="rounded-full border border-white/30 bg-white/20 px-5 py-2 text-sm  text-white backdrop-blur-md transition-all active:scale-95">
                  Kontakt
                </Link>
              </div>
            </div>

            {/* Desktop Hover Overlay (Glassmorphism) */}
            <div className="absolute inset-0 z-20 hidden md:flex flex-col items-center justify-center bg-black/30 opacity-0 backdrop-blur-md transition-all duration-700 group-hover:opacity-100">
              <ul className="flex flex-col gap-6 translate-y-6 transition-transform duration-500 group-hover:translate-y-0">
                <li>
                  <Link href="/cennik" className="block rounded-full border-2 border-white px-10 py-3 text-lg text-white transition-all hover:bg-white hover:text-black">
                    Zobacz Cennik
                  </Link>
                </li>
                <li>
                  <Link href="/portfolio" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                    Portfolio
                  </Link>
                </li>
                <li>
                   <Link href="/kontakt" className="block rounded-full border-2 border-white px-10 py-3 text-lg font-medium text-white transition-all hover:bg-white hover:text-black">
                  Kontakt
                </Link>
                </li>
              </ul>
            </div>
            
          </div>
          {/* You can add more cards for sessions offermd:col-span-1 */}

        </div>
      </div>
    </section>
  );
}


