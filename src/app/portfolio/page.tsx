// src/app/portfolio/page.tsx
import CategorySlider from '@/components/CategorySlider';
import { Metadata } from 'next';
import { title } from 'process';
import  CallToAction  from '@/components/CallToAction';

export const metadata:Metadata = {
title:"Portfolio",
description:"W moim portfolio znajda Panstwo zarowno sesje rodzinne, grupowe czy indywidualne.Wykonouje je zarowno w domowym studio jak i w plenerze.Zobacz efekty mojej pracy , moze jestem fotografem ktorego szukasz!"
};

const PORTFOLIO_DATA = [
  {
    title: "Sesje Rodzinne",
    images: ["/assets/images/cheapy.jpg", "/assets/images/pexels-samuel-walker-15032-569098.jpg","/assets/images/home-session.jpg",
        "/assets/images/home-session.jpg","/assets/images/home-session.jpg","/assets/images/home-session.jpg","/assets/images/home-session.jpg"


    ] // Upewnij się, że to tablica!
  },
   {
    title: "Sesje Rodzinne",
    images: ["/assets/images/cheapy.jpg", "/assets/images/pexels-samuel-walker-15032-569098.jpg","/assets/images/home-session.jpg",
        "/assets/images/home-session.jpg","/assets/images/home-session.jpg","/assets/images/home-session.jpg","/assets/images/home-session.jpg"


    ] // Upewnij się, że to tablica!
  }
];


export default function PortfolioPage() {
  return (
    <main className="py-30">
      <div className='flex flex-col items-center justify-center flex-wrap space-y-6'>
        <span className='font-serif text-4xl text-retro-black text-center'>Moze jestem twoim fotografem?</span>
        <h1 className='text-retro-accent text-3xl text-center italic'>Zobacz efekty mojej pracy i przekonaj sie
          
        </h1>
      </div>
      {PORTFOLIO_DATA.map((category) => (
        <section key={category.title} className="mt-12 mb-7 space-y-6">
          <h2 className="text-center px-6 text-4xl text-retro-black">{category.title}</h2>
          {/* KLUCZOWE: Sprawdź czy przekazujesz category.images */}
          <CategorySlider images={category.images} />
          <CallToAction></CallToAction>
        </section>
      ))}
      
    </main>
  );
}