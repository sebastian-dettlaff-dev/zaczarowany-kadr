'use client'

import React, { useCallback } from 'react'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import Image from 'next/image'
import Link from 'next/link'

// Typ dla naszych slajdów
interface Slide {
  id: number
  title: string
  description: string
  image: string
  buttonText: string
  link: string
}

const SLIDES: Slide[] = [
  {
    id: 1,
    title: "Sesje rodzinne w Twoim domu",
    description: "Komfortowa sesja lifestyle w Wejherowie i okolicach. Przyjadę do Was ( z całym sprzętem), by uchwycić naturalne chwile w domowym zaciszu.",
    image: "/assets/images/home-session.jpg", // upewnij się, że masz te pliki w public/images/
    buttonText: "Sprawdź ofertę",
    link: "/oferta"
  },
  {
    id: 2,
    title: "Naturalne Sesje Plenerowe",
    description: "Wyjątkowe sesje zdjęciowe w plenerach Trójmiasta. Uchwyćmy Wasze emocje w świetle zachodzącego słońca na plaży lub w lesie.",
    image: "/assets/images/plener.jpg",
    buttonText: "Zobacz portfolio",
    link: "/portfolio"
  },
  {
    id: 3,
    title: "Fotograf – Cennik i Pakiety",
    description: "Profesjonalne sesje rodzinne i prezentowe w przystępnej cenie. Sprawdź pakiety z dostępem do galerii online.",
    image: "/assets/images/cheapy.jpg",
    buttonText: "Cennik",
    link: "/cennik"
  }
]

export default function HeroCarousel() {
  // Inicjalizacja Embla z pluginem Autoplay (5 sekund odstępu)
  const [emblaRef] = useEmblaCarousel({ loop: true }, [Autoplay({ delay: 5000 })])

  return (
    <section className="relative w-full h-[80vh] md:h-[100vh] bg-gray-100 overflow-hidden" ref={emblaRef}>
      <div className="flex h-full">
        {SLIDES.map((slide, index) => (
          <div key={slide.id} className="relative flex-[0_0_100%] min-w-0 h-full">
            {/* Zdjęcie zoptymalizowane przez Next.js */}
            <Image
              src={slide.image}
              alt={slide.title}
              fill
              className="object-cover"
              // Priority dla pierwszego zdjęcia (SEO / LCP)
              priority={index === 0}
              sizes="100vw"
            />
            
            {/* Nakładka z tekstem (Overlay) */}
            <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-white px-4">
              <div className="max-w-3xl text-center space-y-4">
                <h1 className="text-3xl md:text-6xl font-bold tracking-tight">
                  {slide.title}
                </h1>
                <p className="md:text-xl font-light opacity-90 max-w-xl mx-auto">
                  {slide.description}
                </p>
                <div className="pt-4">
                  <Link
                    href={slide.link}
                    className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:bg-gray-200 transition-colors shadow-lg"
                  >
                    {slide.buttonText}
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}