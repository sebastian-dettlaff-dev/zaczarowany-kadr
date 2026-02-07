"use client"; 

import Image from 'next/image';
import { useState } from 'react';
import { ChevronDown } from 'lucide-react';


interface FaqItem {
    question: string;
    answer: string;
}

interface CategoryItem {
    title: string;
    description: string;
    image: string;
    faq: FaqItem[];
}



const CATEGORY: CategoryItem[] = [
    {
        title: "Sesja – wszystko co musisz wiedzieć",
        description: "Chwila oddechu tylko dla Ciebie.",
        image: "/assets/images/pexels-samuel-walker-15032-569098.jpg",
        faq: [
            { 
                question: "Ile trwa sesja?", 
                answer: "Czas trwania sesji zależy od wybranego pakietu. Szczegółowe informacje znajdziesz w zakładce Cennik." 
            },
            { 
                question: "Czy sesje odbywają się w studio?", 
                answer: "Nie posiadam stacjonarnego studia. Sesje realizuję w plenerze, w moim domowym studio lub u Ciebie w domu. Jeśli jednak marzy Ci się sesja w wynajętym studio, nie ma problemu – wszystko ogarniemy, a koszt wynajmu jest po stronie klienta. Dojazd do 30 km gratis."
            },
            { 
                question: "Jak się ubrać na sesję?", 
                answer: "Najważniejsze – czuj się sobą i komfortowo. Chętnie podpowiem stylizacje dopasowane do rodzaju sesji i klimatu zdjęć." 
            },
            { 
                question: "Czy muszę rezerwować termin z dużym wyprzedzeniem?", 
                answer: "Zimą terminy są zwykle łatwiej dostępne. W sezonie (wiosna-lato) warto rezerwować sesję z małym wyprzedzeniem, szczególnie przy wydarzeniach okolicznościowych (chrzty, wesela itp.)." 
            },
            {
                question: "Jak wygląda sesja?", 
                answer: "Na luzie, bez stresu i sztywnych poz. Im naturalniej, tym lepiej – śmiech, emocje i dobra energia są mile widziane. Ja poprowadzę Cię krok po kroku."
            },
            {
                question: "Kiedy otrzymam gotowe zdjęcia?",
                answer: "Gotowe fotografie przekazuję zazwyczaj do 12 dni od sesji. Dostęp do galerii online masz do 2 dni od zakończenia sesji. Czas obróbki liczony jest od momentu wyboru zdjęć. W wyjątkowych sytuacjach termin może się minimalnie wydłużyć – zawsze daję znać."
            },
            {
                question: "W jakiej formie otrzymam zdjęcia?", 
                answer: "Zdjęcia przekazuję elektronicznie. Jeśli marzy Ci się inna forma (np. odbitki), daj znać przed sesją."
            },
            {
                question: "Co zawiera cena sesji?", 
                answer: "Cena obejmuje: czas poświęcony na sesję, obróbkę zdjęć, konsultację przed sesją oraz dojazd do 30 km (gratis)."
            },
            {
                question: "Czy mogę przełożyć termin sesji?", 
                answer: "Jeśli zdarzy się coś losowego – oczywiście, znajdziemy inny termin. Proszę tylko, aby nie robić tego zbyt często. Sesję można przełożyć maksymalnie 2-krotnie. Jeśli nie zjawisz się na sesji, zaliczka nie jest zwracana."
            }
        ]
    },
    {
        title: "Płatności i rozliczenia – od A do Z",
        description: "Dostosuj budżet do swoich potrzeb.",
        image: "/assets/images/aparat-background.webp",
        faq: [
            { 
                question: "Czy makijaż jest w cenie?", 
                answer: "Makijaż nie jest wliczony w cenę sesji. Współpracuję z zaufaną wizażystką – jeśli chcesz, możesz skorzystać z tej opcji dodatkowo." 
            },
            { 
                question: "Ile zdjęć otrzymam?", 
                answer: "Liczba zdjęć zależy od wybranego pakietu. Do wyboru są trzy opcje: MINI, STANDARD i PREMIUM – szczegóły znajdziesz w zakładce Cennik." 
            },
            { 
                question: "Kiedy i jak się rozliczamy za sesję?", 
                answer: "Aby zarezerwować termin, potrzebna jest zaliczka w wysokości 50 zł. Resztę rozliczamy po sesji." 
            },
            {
                question: "Czy są jakieś rabaty?",
                answer: "Tak! Co jakiś czas pojawiają się promocje na wybrane sesje. Najlepiej zaglądać na moje social media – tam wrzucam wszystkie aktualności."
            },
            {
                question: "Co jeśli zdecyduję się na więcej zdjęć?",
                answer: "Jeśli podczas sesji złapiemy flow i będziesz mieć ochotę na więcej – super! Dodatkowe ujęcia można dokupić po sesji, wybierając je w galerii online."
            }
        ]
    }
];
export default function FaqPage() {
    // Stan przechowujący indeks rozwiniętej karty. Null oznacza, że żadna nie jest rozwinięta.
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        // Jeśli klikniemy w już otwartą, zamykamy ją (null). Jeśli w inną, otwieramy nową.
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="py-24 px-4">
            <div className="h-auto">
                <div>
                    <h1 className="text-center text-3xl text-retro-accent p-4 mb-8">
                        Pierwszy raz na sesji? Dowiedz się wszystkiego!
                    </h1>
                </div>

                <div className="max-w-6xl mx-auto flex flex-col gap-6 justify-center items-center">
                    {CATEGORY.map((category, index) => {
                        const isOpen = openIndex === index;

                        return (
                            <div
                                key={index}
                                onClick={() => toggleOpen(index)}
                                // ZMIANA: Zamiast sztywnego h-[300px], używamy min-h i h-auto.
                                // Dodajemy transition-all dla płynności.
                                className={`
                                    w-full border border-white/20 rounded-sm cursor-pointer overflow-hidden transition-all duration-300 ease-in-out
                                    ${isOpen ? 'shadow-lg  ' : 'shadow-sm'}
                                `}
                            >
                                {/* Górna część: Obrazek + Tytuł (zawsze widoczne) */}
                                <div className="flex flex-col md:flex-row">
                                    {/* Obrazek - na mobile góra, na desktopie po lewej */}
                                    <div className="relative w-full md:w-1/3 h-[200px]">
                                        <Image
                                            src={category.image}
                                            alt={category.title}
                                            fill
                                            sizes="(max-width: 768px) 100vw, 33vw"
                                            className="object-cover"
                                        />
                                    </div>

                                    
                                    <div className="p-6 flex-1 flex flex-col justify-between relative">
                                        <div>
                                            <h3 className="font-bold text-2xl text-gray-800">{category.title}</h3>
                                            <p className="text-gray-600 mt-2">{category.description}</p>
                                        </div>

                                        {/* IKONA STRZAŁKI */}
                                        <div className="flex justify-end items-center mt-4">
                                            <span className="text-sm font-semibold text-retro-accent mr-2">
                                                {isOpen ? "Zwiń" : "Zobacz pytania"}
                                            </span>
                                                <ChevronDown className={`w-6 h-6 text-retro-accent transition-transform duration-300 ${isOpen ? "rotate-180": ""}`}>
                                                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                                </ChevronDown>
                                            
                                        </div>
                                    </div>
                                </div>

                                
                                <div
                                    className={`
                                        bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out
                                        ${isOpen ? "h-auto py-6 opacity-100" : "max-h-0 py-0 opacity-0"}
                                    `}
                                >
                                    <div className="space-y-6">
                                        {category.faq.map((q, i) => (
                                            <div key={i} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                                                <p className="font-semibold text-gray-800 text-sm">{q.question}</p>
                                                <p className="text-gray-600 text-sm mt-1">{q.answer}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}