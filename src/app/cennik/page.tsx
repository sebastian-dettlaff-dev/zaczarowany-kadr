import PricePlan from "@/components/PricePlan";
import TypingComponent from "@/components/TypingComponent";
import { pricePlanPageSchemaData } from "@/components/PricePlan";
import { Metadata } from "next";


export const metadata: Metadata = {
  title: 'Cennik sesji fotograficznych Wejherowo | Zaczarowany Kadr',
  description: 'Sprawdź ceny sesji: pakiety mini, standard i premium. Transparentne ceny, profesjonalna obróbka i dojazd do 30km gratis. Wybierz pakiet dla siebie!',
//   for social media and SEO
  openGraph: {
    title: 'Ile kosztuje sesja zdjęciowa? Poznaj pakiety | Zaczarowany Kadr',
    description: 'Atrakcyjne ceny sesji zdjęciowych w Wejherowie i okolicy. Pakiety MINI, STANDARD i PREMIUM dopasowane do Twoich potrzeb.',
    url: '/cennik',
    type: 'website',
  },
  alternates: {
    canonical: '/cennik',
  }
};

export default function Charger(){
    return(
        <section aria-label="Cennik Sesji Fotograficznych" className="py-30">
            <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(pricePlanPageSchemaData) }} />
        <div className="mx-auto max-w-6xl space-y-6">
            <TypingComponent />
            {/* <div className="">
                <h1 className="text-4xl text-retro-accent italic p-4 text-center">Cennik</h1>
                <h2 className="text-3xl text-retro-black italic p-4 text-center">Profesjonalna fotografia na Kaszubach i w Trójmieście – Poznaj moją ofertę</h2>
            </div> */}
                <PricePlan />
        </div>
        </section>
       
       
    );
}