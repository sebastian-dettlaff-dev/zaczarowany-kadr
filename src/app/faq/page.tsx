// "use client"; 

// import Image from 'next/image';
// import { useState } from 'react';
// import { ChevronDown } from 'lucide-react';
import { Metadata } from 'next';
import FaqList from '@/components/FaqList';
import { CategoryItem } from '@/components/FaqList';    


// interface FaqItem {
//     question: string;
//     answer: string;
// }

// interface CategoryItem {
//     title: string;
//     description: string;
//     image: string;
//     faq: FaqItem[];
// }



const CATEGORY: CategoryItem[] = [
    {
        title: "Sesja – wszystko co musisz wiedzieć",
        description: "Chwila oddechu tylko dla Ciebie.",
        image: "/assets/images/polaroidy-na-stoliku-fotografia-profesjonalna.jpg",
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
const allFaqItems = CATEGORY.flatMap(category => category.faq)


export const metadata: Metadata = {
  title: 'FAQ - Najczęstsze pytania | Zaczarowany Kadr',
  description: 'Masz pytania dotyczące sesji? Dowiedz się, jak się przygotować, ile trwa sesja, jak ubrać się oraz jak wyglądają płatności. Odpowiedzi od A do Z.',
//   for social media and SEO
  openGraph: {
    title: 'FAQ - Wszystko co musisz wiedzieć o sesji | Zaczarowany Kadr',
    description: 'Przygotowanie do sesji, cennik, terminy i logistyka. Sprawdź odpowiedzi na najczęściej zadawane pytania.',
    url: '/faq', // Warto dodać też tutaj pełny link
    type: 'website',
  },
  alternates: {
    canonical: '/faq', 
  },
};
export const  faqPageSchemaData = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": allFaqItems.map(item => ({
    "@type": "Question",
    "name": item.question,
    "acceptedAnswer": {
      "@type": "Answer",
      "text": item.answer
    }
  }))
};
export default function FaqPage() {
    // Stan przechowujący indeks rozwiniętej karty. Null oznacza, że żadna nie jest rozwinięta.
    // const [openIndex, setOpenIndex] = useState<number | null>(null);

    // const toggleOpen = (index: number) => {
    //     // Jeśli klikniemy w już otwartą, zamykamy ją (null). Jeśli w inną, otwieramy nową.
    //     setOpenIndex(openIndex === index ? null : index);
    // };

    return (
        
        <section aria-label='Najczesciej zadawane pytania' className="py-24 px-4">
              <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(faqPageSchemaData) }} />
            <div className="h-auto">
                <div>
                    <h1 className="text-center text-3xl text-retro-accent p-4 mb-8">
                        Pierwszy raz na sesji? Dowiedz się wszystkiego!
                    </h1>
                </div>
                <FaqList categories={CATEGORY} />
            </div>
        </section>
    );
}