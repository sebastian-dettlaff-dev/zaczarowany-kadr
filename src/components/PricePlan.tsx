import Image from 'next/image';
import Link from 'next/link';
import { COMPANY_NAME } from '@/lib/constants';
interface plan_Details{
    price:string;
    name: string;
    description:string;
    src_Image: string
    alt_title: string;

}
const price_Plans:plan_Details[] =[
    {price:"350 PLN",  name:"MINI",description:"Pakiet ten zawiera 15 zdjec do wybrou (Kazde dodatkowe ujecie 20 PLN).Czas trwania sesji to 45 minut - bez roznicy na rodzaj sesji.",src_Image:"/assets/images/pexels-octavio-j-garcia-n-703604-1538077.jpg",alt_title:"something"},
    {price:"470 PLN",  name:"STANDARD",description:"Pakiet ten zawiera 25 zdjec do wybrou (Kazde dodatkowe ujecie 20 PLN).Czas trwania sesji to 60 minut - bez roznicy na rodzaj sesji.",src_Image:"/assets/images/pexels-octavio-j-garcia-n-703604-1538077.jpg",alt_title:""},
    {price:"550 PLN",  name:"PREMIUM",description:"Pakiet ten zawiera 35 zdjec do wybrou (Kazde dodatkowe ujecie 20 PLN).Czas trwania sesji to 60 minut do maksymalnie 2 godzin - bez roznicy na rodzaj sesji.",src_Image:"/assets/images/pexels-octavio-j-garcia-n-703604-1538077.jpg",alt_title:""},
    ]

export const pricePlanPageSchemaData = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "LocalBusiness",
      "@id": "https://zaczarowanykadr.pl/#business",
      "name": `${COMPANY_NAME}`
    },
    {
      "@type": "BreadcrumbList",
      "@id": "https://zaczarowanykadr.pl/cennik/#breadcrumb",
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
          "name": "Cennik",
          "item": "https://zaczarowanykadr.pl/cennik" // upewnij się, że URL jest poprawny
        }
      ]
    },
    {
      "@type": "OfferCatalog",
      "name": "Pakiety Fotograficzne",
      "offeredBy": { "@id": "https://zaczarowanykadr.pl/#business" },
      "itemListElement": price_Plans.map((plan, index) => ({
        "@type": "Offer",
        "position": index + 1,
        "itemOffered": {
          "@type": "Service",
          "name": `Pakiet ${plan.name}`,
          "description": plan.description
        },
        "price": plan.price.replace(/[^0-9]/g, ""), // wyciągamy samą liczbę
        "priceCurrency": "PLN",
        "availability": "https://schema.org/PreOrder" // oznacza usługę na miejscu
      }))
    }
  ]
}
export default function PricePlan(){
    return(
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12 p-2 md:p-10">
      {price_Plans.map((price_Plan, index) => {
      const isMiddleCard = index === 1;
     return (
        <div key={index} className={`relative bg-stone-50 w-full mt-12 rounded-sm flex flex-col transition-all duration-700
    ${isMiddleCard
        ? 'md:scale-105 z-30 shadow-[0_20px_50px_rgba(212,175,55,0.3)]  ring-retro-accent' 
        : 'shadow-sm border border-stone-100 z-10 grayscale-[0.5] hover:grayscale-0'
    }`}>
          
          {/* 1. Obrazek na górze karty */}
          <div className="relative w-full h-64 overflow-hidden shadow-inner">
            {price_Plan.src_Image ? (
              <Image
                src={price_Plan.src_Image}
                alt={price_Plan.alt_title}
                fill
                className="object-cover grayscale hover:grayscale-0 transition-all duration-500"
              />
            ) : (
              <div className="w-full h-full bg-stone-200 flex items-center justify-center italic text-stone-400">{price_Plan.alt_title}</div>
            )}
          </div>

          
          <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 w-24 h-24 bg-stone-900 rounded-full z-20 flex items-center justify-center border-4 border-white shadow-xl">
            <span className="text-white font-light text-sm text-center px-2 font-serif">
              {price_Plan.price}
            </span>
          </div>

          {/* 3. Treść pod obrazkiem */}
          <div className="p-6 flex flex-col items-center h-full">
            <div className="bg-stone-800 px-4 py-1 mb-4">
               <h3 className="p-1 text-white text-xs tracking-widest uppercase font-sans">{price_Plan.name}</h3>
            </div>
            
            <p className="p-3 text-retro-grey text-center text-sm font-light leading-relaxed">
               {price_Plan.description}
            </p>
            <Link aria-label='Zarezerwuj sesje' href="/kontakt"className="mt-auto p-3 mt-4 bg-retro-accent text-white hover:bg-white hover:text-retro-accent shadow-sm hover:shadow-md hover:scale-95">Zarezerwuj
            </Link>
         
          </div>
          
        </div>
      )})}
    </div>
        
    );
}