import Link from 'next/link';
import { COMPANY_NAME, COMPANY_PHONE } from '@/lib/constants';

export default function Footer() {
	// return (
	// 	<footer className='w-full bg-retro-beige border-t border-retro-orange/20 px-6 py-4 mt-12'>
    //         <div className="w-full justify-center flex-row mb-4 bg-gray-600 text-white">
    //             <div className='w-full flex flex-col md:flex-row justify-between gap-10 '>
                    
    //             </div>

    //         </div>
	// 		<div className='max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center text-sm text-retro-black'>
	// 			<p className='mb-2 md:mb-0'>
	// 				&copy; {new Date().getFullYear()} {COMPANY_NAME}. Wszelkie prawa zastrzeżone.
	// 			</p>
	// 		</div>
	// 	</footer>
	// );
    return (
    <footer className="w-full bg-retro-black text-retro-beige py-12 px-6">
      {/* RODZIC: flex-row na dużych ekranach (md:), na telefonach flex-col (pod sobą) */}
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between gap-10">
        
        {/* KOLUMNA 1: O firmie */}
        <div className="flex-1">
          <h3 className="font-serif text-2xl text-retro-orange mb-4 italic">
            {COMPANY_NAME}
          </h3>
          <p className="text-sm opacity-80 leading-relaxed">
            Fotografia retro w sercu Wejherowa. Uchwyćmy Twoje najważniejsze chwile w ponadczasowym stylu.
          </p>
        </div>

        {/* KOLUMNA 2: Linki */}
        <div className="flex-1">
          <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-retro-orange">
            Nawigacja
          </h4>
          <ul className="flex flex-col gap-2 text-sm">
            <li><Link href="/galeria" className="hover:text-retro-orange transition">Galeria</Link></li>
            <li><Link href="/uslugi" className="hover:text-retro-orange transition">Usługi</Link></li>
            <li><Link href="/o-mnie" className="hover:text-retro-orange transition">O mnie</Link></li>
            <li><Link href="/o-mnie" className="hover:text-retro-orange transition">Blog</Link></li>
          </ul>
        </div>

        {/* KOLUMNA 3: Kontakt */}
        <div className="flex-1">
          <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-retro-orange">
            Kontakt
          </h4>
          <ul className="flex flex-col gap-2 text-sm italic">
            <li>Wejherowo, Pomorskie</li>
            <li>{COMPANY_PHONE}</li>
            <li>kontakt@zaczarowany-kadr.pl</li>
          </ul>
        </div>

        {/* KOLUMNA 4: Social Media / Godziny */}
        <div className="flex-1">
          <h4 className="font-bold mb-4 uppercase tracking-widest text-sm text-retro-orange">
            Godziny pracy
          </h4>
          <p className="text-sm">Pon - Pt: 09:00 - 18:00</p>
          <p className="text-sm">Soboty: Na zapisy</p>
        </div>

      </div>

      <div className="max-w-6xl mx-auto mt-12 pt-6 border-t border-retro-grey/30 text-center text-xs opacity-50">
        © {new Date().getFullYear()} {COMPANY_NAME}. Wszystkie prawa zastrzeżone.
      </div>
    </footer>
  );
}
