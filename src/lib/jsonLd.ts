import { COMPANY_NAME, COMPANY_PHONE, STREET_ADDRESS } from "@/lib/constants";

// general structure of JSON-LD for a Zaczarowany-Kadr photography business.

export const getSchemaDataJSONLD = () => ({
  '@context': 'https://schema.org',
  
  '@type': 'LocalBusiness', 
  '@id': 'https://zaczarowanykadr.pl/#business',
  name: `${COMPANY_NAME}`,
  image: 'https://zaczarowanykadr.pl/logo.png',
  url: 'https://zaczarowanykadr.pl',
  telephone: `${COMPANY_PHONE}`,
  priceRange: '350-550 PLN',
  
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

