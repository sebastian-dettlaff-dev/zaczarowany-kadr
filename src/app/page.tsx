// import Image from "next/image";

import { Metadata } from 'next';
import { COMPANY_NAME } from '@/lib/constants';
import { COMPANY_PHONE } from '@/lib/constants';
import { STREET_ADDRESS } from '@/lib/constants';
import HeroCarousel from '@/components/HeroCarousel';
import AboutMeIntro from '@/components/AboutMeIntro';
import Introduction from '@/components/Introduction';
import Testimonials from '@/components/Testimonials';
import  ContactForm from '@/components/MultiStepForm';
import MultiStepForm from '@/components/MultiStepForm';
import WorkflowSteps from '@/components/WorkflowSteps';

// 1. OPEN GRAPH & METADATA (Dla mediów społecznościowych)

export const metadata: Metadata = {
    // Zmieniamy na dłuższą, bardziej opisową formę (ok. 55 znaków)
    title: 'Fotograf Wejherowo | Sesje Rodzinne, Lifestyle oraz Okolicznościowe | Kaszuby', 
    description:
        'Szukasz fotografa w Wejherowie? Zaczarowany Kadr to naturalne sesje rodzinne, kobiece i lifestyle na Kaszubach. Stwórzmy razem piękne wspomnienia!',
    alternates: {
        canonical: '/', 
    },
};

export default function Home() {
	// schema JSON-LD specificlly for this website.
	const pageSchema = {
        '@context': 'https://schema.org',
        '@graph': [
            {
                '@type': 'LocalBusiness',
                '@id': 'https://zaczarowanykadr.pl/#business', 
                name: COMPANY_NAME || 'Zaczarowany Kadr',
                url: 'https://zaczarowanykadr.pl',
                address: {
                    '@type': 'PostalAddress',
                    streetAddress: STREET_ADDRESS || 'Wejherowo', 
                    addressLocality: 'Wejherowo',
                    addressRegion: 'Pomorskie',
                    postalCode: '84-200',
                    addressCountry: 'PL'
                },
                priceRange: '350-550 PLN',
                image: 'https://zaczarowanykadr.pl/og-image.jpg',
                // Schema clients reviews :type Review i AggregateRating
                aggregateRating: {
                    '@type': 'AggregateRating',
                    ratingValue: '5.0',
                    bestRating: '5',
                    worstRating: '1',
                    reviewCount: '12', // Liczba opinii z Testimonials.tsx
                },
                //List of individual reviews.
                review: [
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Bernadetta Bernadetta' },
                        datePublished: '2025-09-22',
                        reviewBody: 'Cudowna Pani fotograf. Przesympatyczna, atmosfera podczas sesji wyjątkowa i swobodna. Polecam z całego',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Laura Bandysz' },
                        datePublished: '2025-12-22',
                        reviewBody: 'Na sesji wspaniała, luźna atmosfera. Klaudia naprawdę stara się o małe szczegóły, daje poczucie że można być naprawdę sobą na fotkach.',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
                    {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Patrycja Schwann' },
                        datePublished: '2025-12-09',
                        reviewBody: 'Przemiła osoba, luźna i swobodna atmosfera, rodzinne i naturalne ujęcia, to składowe pięknej fotograficznej pamiątki na lata.',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
					     {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Weronika Bednarek' },
                        datePublished: '2025-12-08',
                        reviewBody: 'cudowna sesja.klimat o jakim tylko można pomarzyć zdjęcia wyszły piękne polecam z całego serca',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
					     {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Patrycja Ostaszewska' },
                        datePublished: '2025-11-30',
                        reviewBody: 'Sesja wyszła cudownie, przepiękna ścianka, przemiła Pani Klaudia, napewno wrócimy na kolejne sesje',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
					     {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Agnieszka Sirocka' },
                        datePublished: '2025-11-18',
                        reviewBody: 'sesja mega w mega dobrym towarzystwie. i tysiąc pomysłów.mega ! podoba mi się polecam ,!',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
					     {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Maria Gil-Krekora' },
                        datePublished: '2025-11-05',
                        reviewBody: 'Serdecznie polecam sesje u Klaudii. Utalentowana, pomysłowa i sympatyczna. Podczas sesji panuje bezstresowa atmosfera, a na koniec dostałam nawet upominek',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
					     {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Monika Mroczkowska' },
                        datePublished: '2026-02-07',
                        reviewBody: 'Polecam serdecznie, fajna, ciepła i kreatywna dziewczyna zdjęcia zrobione z pomysłem i sercem',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
					     {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Nina Sączek' },
                        datePublished: '2026-02-04',
                        reviewBody: 'Serdecznie polecam wszystkim sesje u Klaudii, ta dziewczyna jest przesympatyczna i otwarta na wszelkie pomysły. Zrealizujecie z nią każdy projekt. Dodatkowo ma szybkie tempo pracy, udziela wskazówek i porad co do pozowania. Atmosfera podczas sesji była przednia. Na pewno jeszcze nie raz się zobaczymy:)',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
					     {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Patrycja Bojarska' },
                        datePublished: '2026-01-22',
                        reviewBody: 'Miałam przyjemność uczestniczyć w sesji u Klaudii  Luźna, swobodna atmosfera sprawiła, że czułam się tak dobrze, jakbym była u koleżanki na kawie Klaudia potrafi stworzyć komfort i naturalność, co widać potem na zdjęciach.Super móc zobaczyć siebie czyimiś oczami i uchwycić momenty, których sama bym nie dostrzegła.Serdecznie polecam ',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
					     {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Julia Brzoza' },
                        datePublished: '2026-01-22',
                        reviewBody: 'Klaudia ma OKO jakiego może pozazdrościć każdy fotograf, tego wyczucia stylu zdjęć, stylu glamour! Ona wie co będzie dla Ciebie dobre i smaczne. Inni muszą się „tego czegoś” długo uczyć, a Ty to poprostu masz. Z tym trzeba się urodzić Przy Klaudii poczujesz się swobodnie, komfortowo i kobieco! nie musisz znać się na pozowaniu, ona się wszystkim zajmie ja Ci Klaudia wróżę dużą karierę fotografa! Na pewno wrócę, po piękne zdjęcia i dobrą energię! Jeszcze raz dziękuję za piękne foty !!!',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    },
					     {
                        '@type': 'Review',
                        author: { '@type': 'Person', name: 'Karolina Sadowska' },
                        datePublished: '2026-01-15',
                        reviewBody: 'Klimat super! Bez żadnego stresu. Klaudia ustawi, powie dokładnie co i jak, pokaże. Super dziewczyna, zdjęcia szybko dostarczone. Jestem zadowolona!',
                        reviewRating: { '@type': 'Rating', ratingValue: '5' }
                    }
                    
                ],
                //(OfferCatalog)
                hasOfferCatalog: {
                    '@type': 'OfferCatalog',
                    name: 'Usługi Fotograficzne Zaczarowany Kadr',
                    itemListElement: [
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Sesje Ślubne i Reportaże',
                                description: 'Naturalna fotografia ślubna w Wejherowie i na całym Pomorzu.',
                                areaServed: { '@type': 'Place', name: 'Pomorskie' }
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Sesje Lifestyle w domu',
                                description: 'Autentyczne sesje rodzinne i noworodkowe w domowym zaciszu klientów.',
                            }
                        },
                        {
                            '@type': 'Offer',
                            itemOffered: {
                                '@type': 'Service',
                                name: 'Sesje w Studio Domowym',
                                description: 'Domowe sesje w przyjaznej atmosferze, idealne dla par i rodzin.',
                            }
                        }
                    ]
                }
            },
            // ( WorkflowSteps)
            {
                '@type': 'HowTo',
                'publisher': { '@id': 'https://zaczarowanykadr.pl/#business' },
                name: 'Jak wygląda współpraca fotograficzna?',
                description: 'Proces umawiania i realizacji sesji zdjęciowej krok po kroku.',
                step: [
                    {
                        '@type': 'HowToStep',
                        position: 1,
                        name: 'Konsultacja i wizja',
                        text: 'Rozmowa o potrzebach, ustalenie klimatu sesji, moodboardu i lokalizacji w Wejherowie lub Trójmieście.'
                    },
                    {
                        '@type': 'HowToStep',
                        position: 2,
                        name: 'Przygotowanie do sesji',
                        text: 'Dobór stylizacji, dodatków i wskazówki jak przygotować się do zdjęć, aby uniknąć stresu.'
                    },
                    {
                        '@type': 'HowToStep',
                        position: 3,
                        name: 'Sesja zdjęciowa i wybór ujęć',
                        text: 'Realizacja zdjęć w luźnej atmosferze oraz późniejszy wybór ulubionych kadrów w galerii online.'
                    }
                ]
            }
        ]
    };

	return (
		<>
			{/* Skrypt Schema JSON-LD for robots to understand the offers */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(pageSchema) }}
			/>
			{/* Main content of the welcome page */}
			<main className='w-full flex flex-col animate-fade-up'>
				<section>
                    <h1 className="sr-only">Naturalna fotografia pełna emocji – Twoja fotografka w Wejherowie i Trójmieście</h1>
					<AboutMeIntro />
					<WorkflowSteps />
					<HeroCarousel />
				</section>

				{/* Hero Section */}
				<section className='max-w-4xl lg:max-w-7xl xl:max-w-[1640px] mx-auto px-4 text-center'>
					{/* <Introduction /> */}
				</section>
				<section>
					<Testimonials />
					<MultiStepForm />
				</section>
			</main>
		</>
	);
}
