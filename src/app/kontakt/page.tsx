

import MultiStepForm from "@/components/MultiStepForm";
import { COMPANY_NAME } from '@/lib/constants';
// import { motion } from 'framer-motion';
import { Metadata } from "next";
import  ContactPageComponent  from "@/components/ContactPageComponent";

export const metadata: Metadata = {
  title: `Kontakt i Rezerwacja Sesji | Wejherowo`,
  description: 'Chcesz umówić się na sesję? Wypełnij krótki formularz rezerwacji. Odpowiadam w ciągu 24h. Sesje fotograficzne w Wejherowie, Trójmieście i na Kaszubach.',
  // for social media and SEO
  openGraph: {
    title: `Napisz do mnie - ${COMPANY_NAME}`,
    description: 'Stwórzmy razem coś wyjątkowego. Formularz kontaktowy i rezerwacja terminów online.',
    url: '/kontakt',
    type: 'website',
  },
  alternates: {
    canonical: '/kontakt',
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const contactPageSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    // 1. Łączymy się z Twoim biznesem zdefiniowanym w layout.tsx
    {
      "@type": "LocalBusiness",
      "@id": "https://zaczarowanykadr.pl/#business",
      "name": "Zaczarowany Kadr"
    },
    // 2. Definiujemy tę konkretną stronę jako ContactPage
    {
      "@type": "ContactPage",
      "@id": "https://zaczarowanykadr.pl/kontakt/#webpage",
      "url": "https://zaczarowanykadr.pl/kontakt",
      "name": "Kontakt i Rezerwacja Sesji - Zaczarowany Kadr",
      "description": "Skontaktuj się z Klaudią z Zaczarowanego Kadru. Rezerwacja sesji fotograficznych w Wejherowie i na Pomorzu.",
      "breadcrumb": { "@id": "https://zaczarowanykadr.pl/kontakt/#breadcrumb" },
      "mainEntity": { "@id": "https://zaczarowanykadr.pl/#business" }
    },

    {
      "@type": "BreadcrumbList",
      "@id": "https://zaczarowanykadr.pl/kontakt/#breadcrumb",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Strona Główna",
          "item": "https://zaczarowanykadr.pl"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Kontakt",
          "item": "https://zaczarowanykadr.pl/kontakt"
        }
      ]
    }
  ]
};


export default function Kontakt() {
return(
    <section aria-label="Kontakt i Rezerwacja Sesji" className="pt-32 md:pt-25">
       <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPageSchemaData) }} />
       <ContactPageComponent />
    </section>
);
} 