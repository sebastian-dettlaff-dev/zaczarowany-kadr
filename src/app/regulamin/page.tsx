import React from 'react';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Regulamin Sesji Fotograficznych',
  description: 'Zapoznaj się z regulaminem sesji fotograficznych Zaczarowany Kadr by Klaudia. Dowiedz się o rezerwacji, terminach, prawach autorskich i klauzuli RODO.',
    openGraph: {    
    title: 'Regulamin Sesji Fotograficznych | Zaczarowany Kadr',
    description: 'Zapoznaj się z regulaminem sesji fotograficznych Zaczarowany Kadr by Klaudia. Dowiedz się o rezerwacji, terminach, prawach autorskich i klauzuli RODO.',
    url: '/regulamin',
    type: 'website',
  },
  alternates: {
    canonical: '/regulamin',
  },
}
const getRegulaminSchema = () => ({
  '@context': 'https://schema.org',
  '@type': 'WebPage',
  '@id': 'https://zaczarowanykadr.pl/regulamin/#webpage',
  url: 'https://zaczarowanykadr.pl/regulamin',
  name: 'Regulamin Sesji Fotograficznych | Zaczarowany Kadr',
  description: 'Zasady rezerwacji, płatności oraz prawa autorskie dotyczące sesji fotograficznych w Zaczarowany Kadr by Klaudia.',
  publisher: {
    '@id': 'https://zaczarowanykadr.pl/#business' // To łączy regulamin z Twoją firmą z layout.tsx
  },
  breadcrumb: {
    '@type': 'BreadcrumbList',
    'itemListElement': [
      {
        '@type': 'ListItem',
        'position': 1,
        'name': 'Strona Główna',
        'item': 'https://zaczarowanykadr.pl'
      },
      {
        '@type': 'ListItem',
        'position': 2,
        'name': 'Regulamin',
        'item': 'https://zaczarowanykadr.pl/regulamin'
      }
    ]
  }
});
// Dane regulaminu wyciągnięte do stałej, aby łatwo było je edytować w przyszłości
const points = [
  { id: 1, text: "Rezerwacja terminu sesji oznacza akceptację niniejszego regulaminu." },
  { id: 2, text: "Termin sesji ustalany jest indywidualnie. Klient ma możliwość <span class='font-bold text-slate-900 uppercase'>dwukrotnego przełożenia sesji</span> po wcześniejszym poinformowaniu Fotografa." },
  { id: 3, text: "Sesje odbywają się w studio domowym Fotografa, w plenerze lub w innym wcześniej ustalonym miejscu." },
  { id: 4, text: "Po sesji Klient otrzymuje galerię online do wyboru zdjęć zgodnie z wykupionym pakietem." },
  { id: 5, text: "Zdjęcia poddawane są autorskiej obróbce. <span class='text-rose-600 font-medium italic'>Surowe pliki nie są przekazywane.</span>" },
  { id: 6, text: "Czas realizacji zdjęć wynosi <span class='font-bold'>8–12 dni roboczych</span> od momentu wyboru zdjęć przez Klienta." },
  { id: 7, text: "Fotograf zachowuje prawa autorskie do wykonanych zdjęć. Klient otrzymuje licencję na ich użytkowanie do celów prywatnych." },
  { id: 8, text: "Zabrania się samodzielnej ingerencji w zdjęcia (filtry, zmiana kolorów, kadrowanie) bez zgody Fotografa." },
  { id: 9, text: "Fotograf ma prawo do publikacji zdjęć w portfolio oraz mediach społecznościowych, chyba że Klient zgłosi brak zgody przed sesją." },
  { id: 10, text: "Warunkiem rezerwacji terminu sesji jest wpłata <span class='font-bold underline decoration-purple-300 decoration-2'>zaliczki ( 50 PLN od ceny wybranego pakietu - przelewem bankowym (wszystkie informacje otrzymaja Panstwo po rezerwacji sesji))</span>. Zaliczka jest bezzwrotna w przypadku rezygnacji Klienta z sesji. W przypadku przełożenia sesji zaliczka przechodzi na nowy termin. Zaliczka jest odliczana od końcowej ceny sesji.", isSpecial: true },
  { id:11, text: "Usługi fotograficzne świadczone są w ramach działalności nierejestrowanej (art. 5 ust. 1 ustawy Prawo przedsiębiorców). Na życzenie Klienta wystawiany jest uproszczony rachunek (bez VAT)."}
  
];

export default function RegulaminPage() {
  return (
<section aria-label="Regulamin Sesji Fotograficznych" className='pt-22'>
    <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(getRegulaminSchema()) }}
      />
        <div className="min-h-screen bg-neutral-50 py-12 px-4 sm:px-6 lg:px-8 font-sans">
      <div className="max-w-5xl mx-auto">
        
        {/* Kontener Regulaminu */}
        <article  className="bg-white shadow-sm border border-neutral-100 rounded-3xl overflow-hidden">
          
          {/* Header */}
          <header className="bg-neutral-900 text-white py-14 px-8 text-center">
            <p className="text-purple-400 font-light tracking-[0.3em] uppercase text-sm mb-3">
              Zaczarowany Kadr by Klaudia
            </p>
            <h1 className="text-3xl md:text-4xl font-serif tracking-tight font-medium">
              Regulamin Sesji Fotograficznych
            </h1>
          </header>

          {/* Treść */}
          <div className="p-8 md:p-16">
            <div className="space-y-8">
              {points.map((point) => (
                <div 
                  key={point.id} 
                  className={`flex gap-6 group ${point.isSpecial ? 'bg-purple-50/50 -mx-4 p-6 rounded-2xl border border-purple-100' : ''}`}
                >
                  <span className="flex-none flex items-center justify-center w-8 h-8 rounded-full bg-neutral-100 text-neutral-500 text-sm font-medium group-hover:bg-purple-100 group-hover:text-purple-600 transition-colors">
                    {point.id}
                  </span>
                  <p 
                    className="text-neutral-700 leading-relaxed pt-1"
                    dangerouslySetInnerHTML={{ __html: point.text }}
                  />
                </div>
              ))}
            </div>

            {/* Klauzula RODO */}
            <section aria-label="Klauzula RODO" className="mt-20 p-8 bg-neutral-50 rounded-2xl border border-neutral-100">
              <h2 className="text-xs font-bold text-neutral-400 uppercase tracking-widest mb-4">
                Klauzula RODO
              </h2>
              <p className="text-sm text-neutral-600 leading-relaxed italic">
                Administratorem danych osobowych jest <span className="text-neutral-900 font-medium">Zaczarowany Kadr by Klaudia</span>. 
                Dane osobowe przetwarzane są wyłącznie w celu realizacji usługi fotograficznej, kontaktu z Klientem oraz archiwizacji zleceń, 
                zgodnie z obowiązującymi przepisami RODO. Klient ma prawo do wglądu, poprawiania oraz żądania usunięcia swoich danych.
              </p>
            </section>
          </div>
        </article>

      </div>
    </div>
</section>
  );
}