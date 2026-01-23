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
	title: `Fotograf na Kaszubach | Sesje`,
	description:
		'Profesjonalne usługi fotograficzne w Wejherowie i na Pomorzu. Sesje indywidualne i rodzinne. Uchwyć magię chwil z Zaczarowanym Kadrem.',
	//You don;t need openGraph here as it's inherited from layout.tsx
	//   You need only schema data JSON-LD if it's different from the main page - so only specific services offered on this page
};

export default function Home() {
	// schema JSON-LD specificlly for the offers provided by the photography business.
	const pageSchema = {
		'@context': 'https://schema.org',
		'@graph': [
			// Service Catalog (OfferCatalog) - list of photography services offered.
			{
				'@type': 'OfferCatalog',
				name: 'Usługi Fotograficzne Zaczarowany Kadr',
				itemListElement: [
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: 'Sesje Ślubne i Reportaże',
							description:
								'Naturalna fotografia ślubna w Wejherowie i na całym Pomorzu.',
						},
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: 'Sesje Lifestyle w domu klienta',
							description:
								'Autentyczne sesje rodzinne i noworodkowe w domowym zaciszu.',
						},
					},
					{
						'@type': 'Offer',
						itemOffered: {
							'@type': 'Service',
							name: 'Sesje w Studio Domowym',
							description:
								'Artystyczne portrety i sesje w klimacie retro w kameralnym studio.',
						},
					},
				],
			},
			//  (AggregateRating) - reviews and ratings from clients
			{
				'@type': 'Product',
				name: 'Usługi Fotograficzne - Zaczarowany Kadr',
				aggregateRating: {
					'@type': 'AggregateRating',
					ratingValue: '5',
					bestRating: '5',
					worstRating: '1',
					reviewCount: '12', // Tu wpisz realną liczbę swoich opinii
				},
				review: [
					{
						'@type': 'Review',
						author: { '@type': 'Person', name: 'Anna i Marek' },
						datePublished: '2025-10-15',
						reviewBody:
							'Klimat retro na zdjęciach z Wejherowskiego parku przeszedł nasze najśmielsze oczekiwania!',
						reviewRating: { '@type': 'Rating', ratingValue: '5' },
					},
					{
						'@type': 'Review',
						author: { '@type': 'Person', name: 'Karolina' },
						datePublished: '2025-08-20',
						reviewBody:
							'Najlepszy fotograf na Pomorzu! Czułam się bardzo swobodnie w studio.',
						reviewRating: { '@type': 'Rating', ratingValue: '5' },
					},
				],
			},
		],
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
