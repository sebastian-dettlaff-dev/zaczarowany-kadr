import React from 'react';

// Zmieniamy nazwę na dużą literę (PrivacyPolicy) - to ważne dla Reacta!
export default function PrivacyPolicy() {
  return (
    <main aria-label='Polityka Prywatnosci' className="max-w-4xl mx-auto px-6 py-32 text-zinc-800">
      <h1 className="text-3xl font-serif font-bold mb-8 italic">Polityka Prywatności</h1>
      <p className="text-sm text-zinc-500 mb-12">Ostatnia aktualizacja: 11.02.2026 r.</p>

      <section className="space-y-6 md:space-y-4">
        <div>
          <h2 className="text-2xl font-bold pb-10 text-retro-black text-center">1. Informacje ogólne</h2>
          <p className="leading-relaxed font-serif">
            Właścicielem strony zaczarowanykadr.pl oraz Administratorem Danych Osobowych jest 
            <span className="font-bold font-serif"> Klaudia Okoniewska</span>, prowadząca działalność nierejestrowaną 
            w rozumieniu ustawy Prawo przedsiębiorców, zamieszkała w Wejherowie (kod pocztowy 84-200). 
            Kontakt: <span className="text-retro-orange font-bold font-serif">kontakt@zaczarowanykadr.pl</span>.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">2. Jakie dane zbieram i w jakim celu?</h2>
          <ul className="list-disc ml-5 space-y-2">
            <li>
              <span className="leading-relaxed font-serif">Formularz kontaktowy:</span> Dobrowolnie podane imię, nazwisko oraz adres e-mail przetwarzane są 
              wyłącznie w celu odpowiedzi na Twoje zapytanie dotyczące sesji fotograficznej.
            </li>
            <li>
              <span className="leading-relaxed font-serif">Google Analytics:</span> Strona korzysta z narzędzia Google Analytics, 
              które zbiera anonimowe informacje na temat odwiedzin (np. czas spędzony na stronie, rodzaj przeglądarki).
            </li>
          </ul>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">3. Pliki Cookies (Ciasteczka)</h2>
          <p className='leading-relaxed font-serif'>
            Strona używa plików cookies, aby zapewnić Ci najlepszą jakość korzystania z serwisu. 
            Możesz w każdej chwili zmienić ustawienia dotyczące cookies w swojej przeglądarce.
          </p>
        </div>

        <div>
          <h2 className="text-xl font-bold mb-3">4. Twoje prawa</h2>
          <p className='leading-relaxed font-serif'>
            Masz prawo dostępu do swoich danych, ich poprawiania, ograniczenia przetwarzania lub usunięcia. 
            W razie pytań, napisz do mnie na adres e-mail podany w punkcie 1.
          </p>
        </div>
      </section>
    </main>
  );
}