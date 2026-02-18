'use client'
import {useState, useEffect} from 'react'
import { setCookie,hasCookie} from 'cookies-next'

export default function  CookieBanner() {
const [showBanner, setShowBanner] = useState(false);

    useEffect(() => {
        requestAnimationFrame(() => {
            const consent = hasCookie("user-consent");
            if (!consent) {
                setShowBanner(true);
            }
        });
    }, []);

    const acceptCookies = () => {
        setCookie("user-consent", true, { maxAge: 60 * 60 * 24 * 365 });
        setShowBanner(false);
    };

    if (!showBanner) return null;
 
return ( 
  <div className="fixed bottom-0 left-0 w-full bg-retro-beige text-retro-black z-[100] border-t border-retro-black/10 shadow-[0_-10px_30px_rgba(0,0,0,0.05)]">
    
    <div className="max-w-5xl mx-auto px-4 py-4 md:py-6 flex flex-col md:flex-row items-center justify-between gap-4 md:gap-6">
      
      <div className="flex items-center gap-3">
        
        <span className="text-xl md:text-2xl" aria-label='cookie'>🍪</span>
        
        <p className="text-xs md:text-sm leading-tight md:leading-relaxed max-w-2xl font-sans text-center md:text-left">
          Cenimy Twoją prywatność. Ta strona używa ciasteczek, aby zapewnić Ci jak najlepsze doświadczenia.
        </p>
      </div>

      <button
      aria-label='Zaakceptuj polityke prywatnosci'
        onClick={acceptCookies}
        
        className="shrink-0 w-fit whitespace-nowrap bg-retro-black text-retro-beige px-5 py-2 md:px-8 md:py-3 rounded-full font-mono text-[10px] md:text-xs tracking-widest uppercase transition-all hover:scale-105 active:scale-95 border border-retro-black"
      >
        Akceptuję
      </button>
    </div>
  </div>
);

}