import PricePlan from "@/components/PricePlan";
import TypingComponent from "@/components/TypingComponent";

export default function Charger(){
    return(
        <section className="py-30">
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