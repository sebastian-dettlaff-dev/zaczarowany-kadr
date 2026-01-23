import React from 'react';
import { Star } from 'lucide-react';
import { FacebookIcon } from './icons/FacebookIcon';
import { InstagramIcon } from './icons/InstagramIcon';
import { Tiktok } from './icons/TiktokIcon';
import {GoogleIcon} from  './icons/GoogleIcon';
import { SOCIAL_MEDIA } from '@/lib/constants';
//  data structure for reviews;
interface Review {
	id: number;
	author: string;
	date: string;
	content: string;
	rating: number;
	source: 'Instagram' | 'Facebook' | 'Google' | 'Tiktok' | 'Email';
}
// Reviews data
const reviews: Review[] = [
	{ id: 1,
		 author: 'Bernadetta Bernadetta', 
		 date: '22 Września 2025', 
		 content: 'Cudowna Pani fotograf. Przesympatyczna, atmosfera podczas sesji wyjątkowa i swobodna. Polecam z całego', 
		 rating: 5, 
		 source: 'Facebook' },
	{
		id: 2,
		author: 'Laura Bandysz',
		date: '22 grudnia 2025',
		content:
			"Na sesji wspaniała, luźna atmosfera. Klaudia naprawdę stara się o małe szczegóły, daje poczucie że można być naprawdę sobą na fotkach. Jeśli ktoś potrzebuje małej pamiątki na lata, to śmiało można się zgłaszać ",
		rating: 5,
		source: 'Facebook',
	},
	{
		id: 3,
		author: 'Patrycja Schwann',
		date: '9 Grudnia 2025',
		content:
			"Przemiła osoba, luźna i swobodna atmosfera, rodzinne i naturalne ujęcia, to składowe pięknej fotograficznej pamiątki na lata.Bardzo polecam !",
		rating: 5,
		source: 'Facebook',
	},
	{
		id: 4,
		author: 'Weronika Bednarek',
		date: '8 Grudnia 2025',
		content:
			"cudowna sesja.klimat o jakim tylko można pomarzyć zdjęcia wyszły piękne polecam z całego serca",
		rating: 5,
		source: 'Facebook',
	},
	{
		id: 5,
		author: 'Patrycja Ostaszewska',
		date: '30 Listopada 2025',
		content:
			"Sesja wyszła cudownie, przepiękna ścianka, przemiła Pani Klaudia, napewno wrócimy na kolejne sesje",
		rating: 5,
		source: 'Facebook',
	},
	{
		id:6,
		author:"Agnieszka Sirocka",
		date: "18 Listopada 2025",
		content:"sesja mega w mega dobrym towarzystwie. i tysiąc pomysłów.mega ! podoba mi się polecam ,! ",
		rating:5,
		source:"Facebook"
	},
	{
		id:7,
		author:"Maria Gil-Krekora",
		date: "5 Listopada 2025",
		content:"Serdecznie polecam sesje u Klaudii. Utalentowana, pomysłowa i sympatyczna. Podczas sesji panuje bezstresowa atmosfera, a na koniec dostałam nawet upominek ",
		rating:5,
		source:"Facebook"
	},
	
];
// Testimonials Component
export default function Testimonials() {
	// : { source: Review['source'] }- describes the prop type for SourceIcon component
const SourceIcon = ({ source }: { source: Review['source'] }) => {
	// Return appropriate icon based on source
	// Instead of repeating props, we can define them once and reuse for each icon 
    const iconProps = { className: "w-6 h-6 text-white" };
    switch (source) {
        case 'Facebook': return FacebookIcon(iconProps);
        case 'Instagram': return InstagramIcon(iconProps);
		case 'Tiktok': return Tiktok(iconProps);
		case 'Google': return GoogleIcon(iconProps);
        // case 'Email': return <Mail {...iconProps} />;
    }
};
return (
        <section className="py-24 bg-[#FDFCFB]">
            <div className="max-w-6xl mx-auto px-6">
                <div className="text-center mb-16">
                    <span className="text-retro-orange uppercase tracking-[0.3em] text-xs font-bold">Opinie</span>
                    <h2 className="text-4xl md:text-5xl font-serif mt-4 text-retro-black italic">Waszymi słowami</h2>
                </div>

                {/* Grid of Testimonials */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {reviews.map((rev,index) => {
                        // Logika linku: jeśli Facebook/Insta to link do profilu, jeśli Email to brak linku
						// creating a wrapper component conditionally - if source is not Email, wrap in <a> else in <div>
                        const isLink = rev.source !== 'Email';
                        const Wrapper = isLink ? 'a' : 'div';
                        
                        return (
							// this wrapper will be either <a> or <div> based on isLink value;
                            <Wrapper
                                key={rev.id}
                              {...(isLink ? { 
                                    href: `${SOCIAL_MEDIA.facebook}`, 
                                    target: "_blank", // Open in new tab
                                    rel: "noopener noreferrer" // Security best practice
                                } : {})}
                                className={`
                                    group relative p-8 border border-stone-200 bg-white overflow-hidden
                                    transition-all duration-500 flex flex-col justify-between
                                    ${index === 0 ? 'md:col-span-2 lg:col-span-1' : ''}
                                `}
                            >
                                {/* TREŚĆ */}
                                <div className="transition-all duration-500 group-hover:blur-sm group-hover:opacity-20">
                                    <div className="flex gap-1 mb-4" aria-label={`Ocena ${rev.rating}} na 5 gwiazdek`}>
                                        {[...Array(rev.rating)].map((_, i) => (
                                           <Star key={i} size={14} className="fill-retro-orange text-retro-orange"aria-hidden="true" />
                                        ))}
                                    </div>
                                    <p className="font-serif leading-relaxed mb-6 italic">
                                        &bdquo;{rev.content}&rdquo;
                                    </p>
                                    <div className="flex flex-col">
                                        <span className="text-sm font-bold uppercase tracking-widest">
                                            {rev.author || "Klient"}
                                        </span>
                                        <span className="text-xs text-stone-400 mt-1">
                                            {rev.date}
                                        </span>
                                    </div>
                                </div>

                                {/* SZKLANA NAKŁADKA (tylko dla Social Media) */}
                                {isLink && (
                                    <div className="absolute inset-0 z-10 flex flex-col items-center justify-center 
                                                    opacity-0 group-hover:opacity-100 
                                                    bg-stone-900/40 backdrop-blur-md 
                                                    transition-all duration-500">
                                        <div className="bg-white/20 p-4 rounded-full mb-3 backdrop-blur-xl border border-white/30">
                                            <SourceIcon source={rev.source} />
                                        </div>
                                        <span className="text-white text-[10px] uppercase tracking-[0.2em] font-bold">
                                            Zobacz na {rev.source}
                                        </span>
                                    </div>
                                )}
                            </Wrapper>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
