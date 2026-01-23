import { COMPANY_NAME, COMPANY_PHONE, STREET_ADDRESS } from "@/lib/constants";

// general structure of JSON-LD for a Zaczarowany-Kadr photography business.

export const getSchemaDataJSONLD = () => ({
  '@context': 'https://schema.org',
        '@type': 'PhotographyBusiness',
        name: `${COMPANY_NAME}`,
        image: 'https://zaczarowany-kadr.pl/logo.png',
        '@id': 'https://zaczarowany-kadr.pl/#business',
        url: 'https://zaczarowany-kadr.pl',
        telephone: `${COMPANY_PHONE}`, // WPISZ SWÓJ NUMER
        priceRange: 'PLN',
        address: {
            '@type': 'PostalAddress',
            streetAddress: `${STREET_ADDRESS}`, // WPISZ ULICĘ
            addressLocality: 'Wejherowo',
            postalCode: '84-200',
            addressRegion: 'Pomorskie',
            addressCountry: 'PL',
        },
        geo: {
            '@type': 'GeoCoordinates',
            latitude: '54.6033', // Koordynaty dla Wejherowa
            longitude: '18.2393',
        },
        areaServed: {
            '@type': 'State',
            name: 'Pomorskie',
        },
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday'],
                opens: '09:00',
                closes: '18:00',
            },
        ],
    }

);

//       const pageSchema = {     TUTAJ DODAJESZ URL PODSTRON  JAKO SCHEMA PODSTRON + CHARAKTERYSTYCZNE DLA NICH USLUGI ITP . PRZED PRODUKCJA USUN
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