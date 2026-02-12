import { COMPANY_NAME, COMPANY_PHONE, STREET_ADDRESS } from "@/lib/constants";

// general structure of JSON-LD for a Zaczarowany-Kadr photography business.

// export const getSchemaDataJSONLD = () => ({
//   '@context': 'https://schema.org',
//         '@type': 'PhotographyService',
//         name: `${COMPANY_NAME}`,
//         image: 'https://zaczarowanykadr.pl/logo.png',
//         '@id': 'https://zaczarowanykadr.pl/#business',
//         url: 'https://zaczarowanykadr.pl',
//         telephone: `${COMPANY_PHONE}`, 
//         priceRange: '350-550 PLN',
//         address: {
//             '@type': 'PostalAddress',
//             streetAddress: `${STREET_ADDRESS}`,
//             addressLocality: 'Wejherowo',
//             postalCode: '84-200',
//             addressRegion: 'Pomorskie',
//             addressCountry: 'PL',
//         },
//         geo: {
//             '@type': 'GeoCoordinates',
//             latitude: '54.6033', 
//             longitude: '18.2393',
//         },
//         areaServed: {
//             '@type': 'State',
//             name: 'Pomorskie',
//         },
//         openingHoursSpecification: [
//             {
//                 '@type': 'OpeningHoursSpecification',
//                 dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday','Saturday'],
//                 opens: '09:00',
//                 closes: '20:00',
//             },
//         ],
//     }

// );
export const getSchemaDataJSONLD = () => ({
  '@context': 'https://schema.org',
  // Zmiana na LocalBusiness uciszy błędy "valid target type"
  '@type': 'LocalBusiness', 
  '@id': 'https://zaczarowanykadr.pl/#business',
  name: `${COMPANY_NAME}`,
  image: 'https://zaczarowanykadr.pl/logo.png',
  url: 'https://zaczarowanykadr.pl',
  telephone: `${COMPANY_PHONE}`,
  priceRange: '350-550 PLN',
  // Dodajemy konkretną kategorię działalności tutaj
  "keywords": "fotograf Wejherowo , profesjonalna fotografia, seje rodzinne, sesje kobiece , fotografia lifestyle, Sesje zdjęciowe w domu, sesje w studio domowym, fotografia ślubna, fotografia dziecięca, fotografia rodzinna,  sesje plenerowe, sesje noworodkowe, sesje ciążowe, Pamiątka rodzinna , Naturalne zdjęcia, Kreatywne sesje zdjęciowe, Fotografia z duszą, Wejherowo i okolice, Pomorskie",
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": "Usługi fotograficzne",
    "itemListElement": [
      {
        "@type": "Offer",
        "itemOffered": {
          "@type": "Service",
          "name": "Fotografia Rodzinna"
        }
      }
      // Możesz tu dodać resztę, ale LocalBusiness na górze to podstawa
    ]
  },
  address: {
    '@type': 'PostalAddress',
    streetAddress: `${STREET_ADDRESS}`,
    addressLocality: 'Wejherowo',
    postalCode: '84-200',
    addressRegion: 'Pomorskie',
    addressCountry: 'PL',
  },
  geo: {
    '@type': 'GeoCoordinates',
    latitude: '54.6033',
    longitude: '18.2393',
  },
  areaServed: {
    '@type': 'State',
    "name": "Pomorskie"
  },
  openingHoursSpecification: [
    {
      '@type': 'OpeningHoursSpecification',
      dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'],
      opens: '09:00',
      closes: '20:00',
    },
  ],
});

//       const schemaForEachPage= { 
//             // TUTAJ DODAJESZ URL PODSTRON  JAKO SCHEMA PODSTRON + CHARAKTERYSTYCZNE DLA NICH USLUGI ITP . PRZED PRODUKCJA USUN
//   '@context': 'https://schema.org',
//   '@graph': [
//     {
//       '@type': 'WebPage',
//       '@id': 'https://zaczarowany-kadr.pl/#webpage',
//       'url': 'https://zaczarowany-kadr.pl',
//       'name': 'Zaczarowany Kadr - Fotografia Retro i Rodzinna Wejherowo', 
//       'description': 'Profesjonalne usługi fotograficzne...',
//       'breadcrumb': { '@id': 'https://zaczarowany-kadr.pl/#breadcrumb' }
//     },
   
//   ]
// };

// import { COMPANY_NAME, COMPANY_PHONE, STREET_ADDRESS } from "@/lib/constants";

// const FB_LINK = "https://www.facebook.com/people/ZaczarowanyKadr-by-Klaudia/61553653131750/";

// const getBaseBusiness = () => ({
//   "@type": "PhotographyBusiness",
//   "@id": "https://zaczarowanykadr.pl/#business",
//   "name": COMPANY_NAME,
//   "url": "https://zaczarowanykadr.pl",
//   "image": "https://zaczarowanykadr.pl/logo.png",
//   "telephone": COMPANY_PHONE,
//   "priceRange": "350-1500 PLN",
//   "address": {
//     "@type": "PostalAddress",
//     "streetAddress": STREET_ADDRESS,
//     "addressLocality": "Wejherowo",
//     "postalCode": "84-200",
//     "addressRegion": "Pomorskie",
//     "addressCountry": "PL",
//   },
//   "geo": {
//     "@type": "GeoCoordinates",
//     "latitude": "54.6033",
//     "longitude": "18.2393",
//   }
// });

// export const getHomeSchema = () => {
//   return {
//     "@context": "https://schema.org",
//     "@graph": [
//       {
//         ...getBaseBusiness(),
//         "aggregateRating": {
//           "@type": "AggregateRating",
//           "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//           "ratingValue": "5.0",
//           "bestRating": "5",
//           "worstRating": "1",
//           "reviewCount": "12"
//         },
//         "review": [
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Bernadetta Bernadetta", "sameAs": FB_LINK },
//             "datePublished": "2025-09-22",
//             "reviewBody": "Cudowna Pani fotograf. Przesympatyczna, atmosfera podczas sesji wyjątkowa i swobodna. Polecam z całego",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Laura Bandysz", "sameAs": FB_LINK },
//             "datePublished": "2025-12-22",
//             "reviewBody": "Na sesji wspaniała, luźna atmosfera. Klaudia naprawdę stara się o małe szczegóły, daje poczucie że można być naprawdę sobą na fotkach.",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Patrycja Schwann", "sameAs": FB_LINK },
//             "datePublished": "2025-12-09",
//             "reviewBody": "Przemiła osoba, luźna i swobodna atmosfera, rodzinne i naturalne ujęcia, to składowe pięknej fotograficznej pamiątki na lata.",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Weronika Bednarek", "sameAs": FB_LINK },
//             "datePublished": "2025-12-08",
//             "reviewBody": "cudowna sesja.klimat o jakim tylko można pomarzyć zdjęcia wyszły piękne polecam z całego serca",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Patrycja Ostaszewska", "sameAs": FB_LINK },
//             "datePublished": "2025-11-30",
//             "reviewBody": "Sesja wyszła cudownie, przepiękna ścianka, przemiła Pani Klaudia, napewno wrócimy na kolejne sesje",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Agnieszka Sirocka", "sameAs": FB_LINK },
//             "datePublished": "2025-11-18",
//             "reviewBody": "sesja mega w mega dobrym towarzystwie. i tysiąc pomysłów.mega ! podoba mi się polecam ,!",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Maria Gil-Krekora", "sameAs": FB_LINK },
//             "datePublished": "2025-11-05",
//             "reviewBody": "Serdecznie polecam sesje u Klaudii. Utalentowana, pomysłowa i sympatyczna. Podczas sesji panuje bezstresowa atmosfera, a na koniec dostałam nawet upominek",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Monika Mroczkowska", "sameAs": FB_LINK },
//             "datePublished": "2026-02-07",
//             "reviewBody": "Polecam serdecznie, fajna, ciepła i kreatywna dziewczyna zdjęcia zrobione z pomysłem i sercem",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Nina Sączek", "sameAs": FB_LINK },
//             "datePublished": "2026-02-04",
//             "reviewBody": "Serdecznie polecam wszystkim sesje u Klaudii, ta dziewczyna jest przesympatyczna i otwarta na wszelkie pomysły. Zrealizujecie z nią każdy projekt. Dodatkowo ma szybkie tempo pracy, udziela wskazówek i porad co do pozowania. Atmosfera podczas sesji była przednia. Na pewno jeszcze nie raz się zobaczymy:)",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Patrycja Bojarska", "sameAs": FB_LINK },
//             "datePublished": "2026-01-22",
//             "reviewBody": "Miałam przyjemność uczestniczyć w sesji u Klaudii Luźna, swobodna atmosfera sprawiła, że czułam się tak dobrze, jakbym była u koleżanki na kawie Klaudia potrafi stworzyć komfort i naturalność, co widać potem na zdjęciach. Serdecznie polecam ",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Julia Brzoza", "sameAs": FB_LINK },
//             "datePublished": "2026-01-22",
//             "reviewBody": "Klaudia ma OKO jakiego może pozazdrościć każdy fotograf, tego wyczucia stylu zdjęć, stylu glamour! Przy Klaudii poczujesz się swobodnie, komfortowo i kobieco!",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           },
//           {
//             "@type": "Review",
//             "itemReviewed": { "@id": "https://zaczarowanykadr.pl/#business" },
//             "author": { "@type": "Person", "name": "Karolina Sadowska", "sameAs": FB_LINK },
//             "datePublished": "2026-01-15",
//             "reviewBody": "Klimat super! Bez żadnego stresu. Klaudia ustawi, powie dokładnie co i jak, pokaże. Super dziewczyna, zdjęcia szybko dostarczone. Jestem zadowolona!",
//             "reviewRating": { "@type": "Rating", "ratingValue": "5", "bestRating": "5" },
//             "publisher": { "@type": "Organization", "name": "Facebook" }
//           }
//         ],
//         "hasOfferCatalog": {
//           "@type": "OfferCatalog",
//           "name": `Usługi Fotograficzne ${COMPANY_NAME}`,
//           "itemListElement": [
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "Sesje Ślubne i Reportaże",
//                 "description": "Naturalna fotografia ślubna w Wejherowie i na całym Pomorzu.",
//                 "areaServed": { "@type": "Place", "name": "Pomorskie" }
//               }
//             },
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "Sesje Lifestyle w domu",
//                 "description": "Autentyczne sesje rodzinne i noworodkowe w domowym zaciszu klientów.",
//                 "areaServed": { "@type": "Place", "name": "Pomorskie" }
//               }
//             },
//             {
//               "@type": "Offer",
//               "itemOffered": {
//                 "@type": "Service",
//                 "name": "Sesje w Studio Domowym",
//                 "description": "Domowe sesje w przyjaznej atmosferze, idealne dla par i rodzin.",
//                 "areaServed": { "@type": "Place", "name": "Wejherowo" }
//               }
//             }
//           ]
//         }
//       },
//       {
//         "@type": "WebPage",
//         "@id": "https://zaczarowanykadr.pl/#webpage",
//         "url": "https://zaczarowanykadr.pl",
//         "name": "Zaczarowany Kadr - Fotografia Retro i Rodzinna Wejherowo",
//         "description": "Profesjonalne usługi fotograficzne w Wejherowie.",
//         "about": { "@id": "https://zaczarowanykadr.pl/#business" } 
//       },
//       {
//         "@type": "HowTo",
//         "@id": "https://zaczarowanykadr.pl/#workflow",
//         "name": "Jak wygląda współpraca fotograficzna?",
//         "description": "Proces umawiania i realizacji sesji zdjęciowej krok po kroku.",
//         "mainEntityOfPage": { "@id": "https://zaczarowanykadr.pl/#webpage" }, 
//         "step": [
//           {
//             "@type": "HowToStep",
//             "position": 1,
//             "name": "Konsultacja i wizja",
//             "itemListElement": [{
//               "@type": "HowToDirection",
//               "text": "Rozmowa o potrzebach, ustalenie klimatu sesji, moodboardu i lokalizacji."
//             }]
//           },
//           {
//             "@type": "HowToStep",
//             "position": 2,
//             "name": "Przygotowanie do sesji",
//             "itemListElement": [{
//               "@type": "HowToDirection",
//               "text": "Dobór stylizacji, dodatków i wskazówki jak przygotować się do zdjęć."
//             }]
//           },
//           {
//             "@type": "HowToStep",
//             "position": 3,
//             "name": "Sesja zdjęciowa i wybór ujęć",
//             "itemListElement": [{
//               "@type": "HowToDirection",
//               "text": "Realizacja zdjęć w luźnej atmosferze oraz wybór kadrów w galerii online."
//             }]
//           }
//         ]
//       }
//     ]
//   };
// };



// // 3. SCHEMA DLA PODSTRON (np. Portfolio, Kontakt)
// export const getPageSchema = (path: string, title: string, description: string) => {
//   return {
//     "@context": "https://schema.org",
//     "@graph": [
//       // Podajemy tylko ID firmy, żeby połączyć podstronę z Twoim biznesem bez duplikowania danych
//       { "@id": "https://zaczarowanykadr.pl/#business" }, 
//       {
//         "@type": "WebPage",
//         "@id": `https://zaczarowanykadr.pl/${path}/#webpage`,
//         "url": `https://zaczarowanykadr.pl/${path}`,
//         "name": title,
//         "description": description,
//         "breadcrumb": {
//           "@type": "BreadcrumbList",
//           "itemListElement": [
//             { "@type": "ListItem", "position": 1, "name": "Home", "item": "https://zaczarowanykadr.pl" },
//             { "@type": "ListItem", "position": 2, "name": title }
//           ]
//         }
//       }
//     ]
//   };
// };