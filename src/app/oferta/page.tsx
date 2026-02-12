import React from 'react';
import { Cormorant_Garamond, Montserrat, Space_Mono } from 'next/font/google';
import { Metadata } from 'next';
import Link from 'next/link';
import Image from 'next/image';
import { COMPANY_NAME } from '@/lib/constants';


// Metadata for servises page
export const metadata: Metadata = {
  title: 'Oferta Sesji Fotograficznych', // Wynik: Oferta Sesji Fotograficznych | Zaczarowany Kadr
  description: 'Fotograf Wejherowo: sesje rodzinne, kobiece, okolicznościowe i inne na Kaszubach. Poznaj moją ofertę i zarezerwuj termin. Zapraszam do Zaczarowanego Kadru!',
  alternates: {
    canonical: '/oferta',
  },
};

// schema data JSON-LD for robots to understand the offers
export const offerSchema = {
  "@context": "schema.org",
  "@graph":[
    {
      "@type": "LocalBusiness",
      "@id":"https://zaczarowanykadr.pl/#business"
    },
    {
      "@type": "OfferCatalog",
      "name": `Pełna Oferta Sesji - ${COMPANY_NAME} Wejherowo`,
      "description": "Szczegółowa oferta usług fotograficznych w Wejherowie i okolicach.",
      "offerBy": {"@id":"https://zaczarowanykadr.pl/#business"},
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
          "@type": "Service",
          "name": "Sesja Rodzinna",
          "description": "Naturalna sesja rodzinna w Wejherowie. W domu lub plenerze uwiecznię Wasze autentyczne emocje.",
          "url": "https://zaczarowanykadr.pl/oferta"
    }
        },
        {
          "@type": "Offer",
          "itemOffered": {
          "@type": "Service",
          "name": "Sesja Kobieca",
          "description": "Zmysłowa sesja kobieca w Wejherowie. Nie musisz potrafić pozować – pomogę Ci poczuć się swobodnie przed obiektywem.", 
          "url": "https://zaczarowanykadr.pl/oferta"
    }
        },
        {
          "@type": "Offer",
          "itemOffered": {
          "@type": "Service",
          "name": "Sesja Okolicznościowa",
          "description": "Fotografia okolicznościowa w Małym Trójmieście i na Kaszubach. Reportaż z chrztu, komunii czy jubileuszu. Profesjonalna pamiątka rodzinna.Galeria zdjec online.",
          "url": "https://zaczarowanykadr.pl/oferta"
    }   
        },
        {
          "@type": "Offer",
          "itemOffered": {
          "@type": "Service",
          "name": "Sesja Narzeczeńska",
          "description": "Romantyczne sesje dla par i narzeczonych w plenerze lub studio.",
          "url": "https://zaczarowanykadr.pl/oferta"
    }   
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sesja Wizerunkowa",
            "description": "Zdjęcia biznesowe i wizerunkowe dla profesjonalistów i marek osobistych.",
            "url": "https://zaczarowanykadr.pl/oferta"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sesja Ciążowa i Noworodkowa",
            "description": "Czułe kadry brzuszkowe i pierwsze chwile maluszka w domowym studiu.",
            "url": "https://zaczarowanykadr.pl/oferta"
          }
        }
  ]
    }

  ]
}




  




export default function Offer() {
  return (
    <main aria-label='Oferta dla Was' className="py-20 px-2 md:px-6">
            	{/* Skrypt Schema JSON-LD for robots to understand the offers */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(offerSchema) }}
			/>
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
              <Link href="/cennik" className="hover:text-retro-orange transition-colors">ofertę cenowa</Link>
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
              src="/assets/images/Rodzinna-sesja-dzieci-bawia-sie-na-biwaku.webp" 
              alt="Sesja Rodzinna w plenerze.Dzieci biwakuja w parku , okolice Malego Trojmiasta." 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja Rodzinna
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1rem)]">
               Poczuj się swobodnie podczas <strong>naturalnej sesji rodzinnej w Wejherowie</strong>. W domu lub plenerze uwiecznię Wasze autentyczne emocje. Zamów zdjęcia, które zostaną z Wami na lata i odbierz je w wygodnej <strong>galerii online</strong>.
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
              src="/assets/images/kobieta_z_talia_kart_sesja_fotograficzna_fx6ecj.webp" 
              alt="Sesja Kobieca - kobieta w studio domowym na sesji fotograficznej , okolice Trojmiasta." 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja Kobieca
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1rem)]">
                <strong>Zmysłowa sesja kobieca w Wejherowie</strong>. Nie musisz potrafić pozować – pomogę Ci poczuć się swobodnie przed obiektywem. W studio lub plenerze stworzymy naturalne zdjęcia buduarowe, które podkreślą Twoje piękno i pewność siebie.
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
              alt="Sesja Okolicznosciowa jako pamiatka rodzinna dla twoich najblizszych." 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja Okolicznościowa
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1rem)]">
                <strong>Fotografia okolicznościowa</strong> w Małym Trójmieście i na Kaszubach. Reportaż z chrztu, komunii czy jubileuszu z wygodną <strong>galerią online</strong> dla gości. Zachowaj najważniejsze emocje na profesjonalnych zdjęciach, które staną się cenną pamiątką rodzinną.
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
              src="/assets/images/sesja-wizerunkowa.webp" 
              alt="Sesja Wizerunkowa do portfolio , w klasycznym studio domowym w Wejherowie." 
              fill 
              priority 
              className="object-cover object-top transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja Wizerunkowa
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1rem)]">
                Profesjonalna <strong>sesja wizerunkowa i biznesowa</strong> w Wejherowie i na Kaszubach. Tworzę nowoczesne portrety na LinkedIn i strony WWW, które budują markę osobistą. Zamów <strong>zdjęcia biznesowe w Małym Trójmieście</strong> i wyróżnij się na tle konkurencji.
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
              src="/assets/images/sesja_ciazowa_i_noworodkowa.webp" 
              alt="Sesja Ciążowa i Noworodkowa w profesjonalnm studio fotograficznym ZaczarowanyKadr" 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja Ciążowa i Noworodkowa
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1rem)]">
                <strong>Sesja ciążowa i noworodkowa</strong> w Wejherowie to niezapomniana pamiątka na lata. W moim <strong>studiu domowym</strong> stworzymy czułe kadry do albumu Twojego maluszka. Wybierz profesjonalną sesję brzuszkową, by uwiecznić ten magiczny stan w naturalny i ponadczasowy sposób.
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
              src="/assets/images/i_said_yes_powiedzialam_tak_sesja_narzeczenska_qzscr1.webp" 
              alt="Sesja narzeczeńska lub dla par w domowym studiu fotograficznym na terenie Trojmiasta." 
              fill 
              priority 
              className="object-cover object-center transition-transform duration-700 group-hover:scale-105"
            />

            {/* Mobile/Default Content Overlay (Gradient for readability) */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent md:via-transparent" />

            {/* Text Content */}
            <div className="absolute bottom-0 left-0 z-10 w-full p-6 md:p-12">
              <h2 className="mb-4 text-white text-[clamp(1.8rem,4vw,4rem)] md:text-4xl font-serif">
                Sesja Narzeczeńska
              </h2>
              <p className="mb-6 max-w-sm text-white/80 font-light leading-relaxed text-[clamp(0.9rem,1.1vw,1rem)]">
                <strong>Sesja narzeczeńska i dla par</strong> w Trójmieście lub okolicach Wejherowa. Wybierzcie romantyczny spacer w plenerze lub naturalne ujęcia w moim <strong>studiu domowym</strong>. Jako fotograf par, uchwycę Waszą bliskość i emocje na autentycznych fotografiach, które idealnie dopełnią zaproszenia ślubne lub domowy album.
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
          {/*  add more cards for sessions offermd:col-span-1 */}

        </div>
      </div>
    </main>
  );
}


