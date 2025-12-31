// src/components/Navbar.tsx
import Link from 'next/link';


export default function Navbar() {
  return (
    <nav className="w-full bg-retro-beige border-b border-retro-orange/20 px-6 py-4">
      <div className="max-w-6xl mx-auto flex justify-between items-center">
        
        {/* LOGO - Możesz tu wstawić swój tekst lub obrazek */}
        <Link href="/" className="text-2xl font-serif text-retro-black hover:text-retro-orange transition">
          Zaczarowany <span className="italic font-light text-retro-orange">Kadr</span>
        </Link>

        {/* LINKI - Tutaj sterujesz nawigacją */}
        <div className="hidden md:flex gap-8 items-center font-medium text-retro-black">
          <Link href="/galeria" className="hover:text-retro-orange transition-colors">
            Galeria
          </Link>
           <Link href="/galeria" className="hover:text-retro-orange transition-colors">
            Blog
          </Link>
          <Link href="/uslugi" className="hover:text-retro-orange transition-colors">
            Usługi
          </Link>
          <Link href="/o-mnie" className="hover:text-retro-orange transition-colors">
            O mnie
          </Link>
          
          <Link 
            href="/kontakt" 
            className="bg-retro-orange text-white px-6 py-2 rounded-sm shadow-md hover:bg-orange-700 transition-all uppercase text-sm tracking-wider"
          >
            Kontakt
          </Link>
        </div>
      </div>
    </nav>
  );
}