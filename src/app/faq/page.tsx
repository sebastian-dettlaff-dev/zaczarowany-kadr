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
        title: "Sesja - wszystko co musisz wiedziec",
        description: "Chwila oddechu tylko dla Ciebie.",
        image: "/assets/images/pexels-samuel-walker-15032-569098.jpg",
        faq: [
            { question: "Ile zwykle trwa sesja?", answer: "Zazwyczaj około 2 godzin w plenerze." },
            { question: "Czy sesje odbywaja sie w studio?", answer:"Nie posiadam studia, sesje odbywaja sie glownie w moim domowym studio , plenerze lub u Panstwa w domu.Z checia dojade do Panstwa (do 30km dojazd GRATIS)"},
            { question: "Jak się ubrać?", answer: "Najlepiej w coś wygodnego, powininnas/powinienes dobrac ubrania do radzaju sesji na ile to mozliwe." },
            { question: "Czy na sesje musze umowic sie z duzym wyprzedzeniem?", answer: "W zimowe miesiace latwiej znajduje terminy dla Panstwa natomiast w pozostale prosze o rezerwacje sesji z najwiekszym mozliwym wyprzedzeniem , szczegolnie w przypadku sesji/imprez okolicznosciowych np. Chrzciny, Wesele itp" },
            {question:"Jak wyglada sesja?", answer:"Przede wszystkim jest to dobra zabawa.Im naturalniej , tym lepiej.Sesja to czas zebyscie pokazali siebie, swoj charakter , usmiech i dobra energie. Bawcie sie!"},
            {question:"Kiedy otrzymam zdjecia po obrobce?",answer:"Gotowe zdjecia , staram sie przekazac w ciagu 2 tygodni od terminu sesji,natomiast przy wielu zleceniach termin ten moze przedluzyc sie o kilka dni (rzadko) , o czym napewno Panstwa poinformuje."},
            {question:"W jakiej formie otrzymam zdjecia?" , answer:"Zjecia przekazuje wylacznie w formie elektronicznej , jezeli zycza sobie Panstwo inna forme prosze o informacje przed sesja."},
            {question:"Co zawiera cena sesji fotograficznej?" , answer:"czas spedzony na edycji zdjec , konsultacje przed sesja , dojazd do klienta (do 30km GRATIS)"},
            {question:"Czy moge przelozyc termin sesji ?", answer:"W przypadku sytuacji losowej ,  znajde Panstwu inny dogodny termin.Prosze jednak , o nie naduzywanie tego."}
           

        ]
    },
    {
        title: "Platnosci i rozliczenia - od A do Z",
        description:"Dostosuj budzet do swoich potrzeb.",
        image: "/assets/images/pexels-samuel-walker-15032-569098.jpg",
        faq: [
            { question: "Czy makijaż jest w cenie?", answer: "Współpracuję z wizażystką, to opcja dodatkowa." },
            { question: "Ile zdjęć otrzymam?", answer: "Ilosc zdjec ktora Panstwo otrzymacie zalezna jest od pakietu na ktory sie Panstwo zdecyduja.Oferuje trzy pakiety (MINI , STANDARD ORAZ PREMIUM).Szczegoly dostepne sa w sekcj '\cennik'." },
             { question: "Kiedy rozliczamy sie z zarezerwowanej sesji?", answer: "Przed sesja nalezy wplacic zaliczke na poczet zarezerwowanej sesji w wysokosci 50zl." },
             {question:"Czy dostepne sa jakies rabaty?",answer:"Co pare tygodni oferujemy cykliczne znizki na wybrane sesje. Prosze na biezaco sprawdzac moje Social Media."},
              {question:"Co jesli sesja sie przedluzy i zdecyduje sie na kilka dodatkowych zdjec?",answer:"Kazda dodatkowa rozpoczeta godzina o koszt 150zl."}
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