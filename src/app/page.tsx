// import Image from "next/image";

import { Metadata } from "next";
import { COMPANY_NAME } from "@/lib/constants";
import { COMPANY_PHONE } from "@/lib/constants";
import {STREET_ADDRESS} from "@/lib/constants";


// 1. OPEN GRAPH & METADATA (Dla mediów społecznościowych)
export const metadata: Metadata = {
  title: `${COMPANY_NAME} | Fotograf Wejherowo | Sesje`,
  description: "Profesjonalne usługi fotograficzne w Wejherowie i na Pomorzu. Sesje indywidualne i rodzinne. Uchwyć magię chwil z Zaczarowanym Kadrem.",
  openGraph: {
    title: `${COMPANY_NAME} - Fotografia Wejherowo`,
    description: "Wyjątkowe sesje zdjęciowew sercu Kaszub.",
    url: "https://zaczarowany-kadr.pl",
    type: "website",
    locale: "pl_PL",
    images: [
      {
        url: "https://zaczarowany-kadr.pl/og-image.jpg",
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} - studio fotograficzne w Wejherowie`,
      },
    ],
  },
};

export default function Home() {
  // 2. SCHEMA.ORG (Dla robotów Google - lokalizacja Wejherowo)
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "PhotographyBusiness",
    "name": `${COMPANY_NAME}`,
    "image": "https://zaczarowany-kadr.pl/logo.png",
    "@id": "https://zaczarowany-kadr.pl/#business",
    "url": "https://zaczarowany-kadr.pl",
    "telephone": `${COMPANY_PHONE}`, // WPISZ SWÓJ NUMER
    "priceRange": "PLN",
    "address": {
      "@type": "PostalAddress",
      "streetAddress": `${STREET_ADDRESS}`, // WPISZ ULICĘ
      "addressLocality": "Wejherowo",
      "postalCode": "84-200",
      "addressRegion": "Pomorskie",
      "addressCountry": "PL"
    },
    "geo": {
      "@type": "GeoCoordinates",
      "latitude": "54.6033", // Koordynaty dla Wejherowa
      "longitude": "18.2393"
    },
    "areaServed": {
      "@type": "State",
      "name": "Pomorskie"
    },
    "openingHoursSpecification": [
      {
        "@type": "OpeningHoursSpecification",
        "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
        "opens": "09:00",
        "closes": "18:00"
      }
    ],
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": "Usługi fotograficzne w Wejherowie",
      "itemListElement": [
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Sesje Portretowe Retro Wejherowo"
          }
        },
        {
          "@type": "Offer",
          "itemOffered": {
            "@type": "Service",
            "name": "Fotografia Ślubna Pomorskie"
          }
        }
      ]
    }
  };

  return (
    <main className="min-h-screen bg-retro-beige">
      {/* Skrypt Schema JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* Hero Section */}
      <section className="max-w-4xl mx-auto py-20 px-4 text-center">
        <h1 className="text-6xl font-serif text-retro-black mb-6">
          Zaczarowany Kadr <br />
          <span className="text-retro-orange italic text-4xl">Fotograf Wejherowo</span>
        </h1>
        <p className="text-retro-grey text-xl font-medium">
          Uchwyćmy razem Twoje najważniejsze chwile w klimacie retro na terenie całego Pomorza.
        </p>
      </section>
     
      
      {/* Tutaj będą Twoje komponenty (Polaroidy, Usługi itd.) */}
    </main>
  );
}