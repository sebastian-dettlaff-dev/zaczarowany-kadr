'use client';
import React from 'react';
import { useState } from 'react';
import Link from 'next/link';
import {
  LOCATION_LANDINGS,
  LOCATION_SLUGS,
  getLocationPath,
} from "@/lib/locationLandings";
import { COMPANY_NAME, COMPANY_PHONE } from '@/lib/constants';
import { Phone, Mail, MapPin, X } from 'lucide-react';
import SocialMedia from './SocialMedia';

export default function Footer() {
	const [isMapOpen, setIsMapOpen] = useState(false);

	return (
		<footer className='w-full bg-retro-black text-retro-beige py-12 px-4 sm:px-6'>
			
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 flex-wrap md:gap-8'>
				{/* COLUMN 1 -  */}
				<div className='flex-1 min-w-[200px]'>
					<h3 className='text-3xl text-retro-orange mb-4 italic'>
						{COMPANY_NAME}
					</h3>
					<p className='opacity-80 leading-relaxed'>
						Twoja fotografka w Wejherowie i Trójmieście. Realizuję naturalne sesje kobiece, ciążowe oraz rodzinne, łapiąc Wasze najpiękniejsze emocje. Zapraszam na wspólne zdjęcia w Wejherowie, Gdyni, Gdańsku i Sopocie.
					</p>
				</div>

				{/* COLUMN 2 */}
				<div className='flex-1 min-w-[140px]'>
					<h4 className='font-bold mb-4 uppercase tracking-widest  text-retro-orange'>
						Nawigacja
					</h4>
					<ul className='flex flex-col gap-2'>
						<li>
							<Link 
								aria-label='Strona glowna'
								href='/'
								className='hover:text-retro-orange transition'
							>
								Home
							</Link>
						</li>
						<li>
							<Link
								aria-label='Zobacz moje portfolio'
								href='/portfolio'
								className='hover:text-retro-orange transition'
							>
								Portfolio
							</Link>
						</li>
					
						<li>
							<Link
								aria-label='Zobacz moja oferte'
								href='/oferta'
								className='hover:text-retro-orange transition '
							>
								Oferta
							</Link>
						</li>
						<li>
							<Link aria-label='Zobacz moj blog' href='/blog' className='hover:text-retro-orange transition'>
								Blog
							</Link>
						</li>
						<li>
							<Link aria-label='Zobacz FAQ' href='/faq' className='hover:text-retro-orange transition'>
								FAQ
							</Link>
						</li>
						<li>
							<Link
								aria-label='Zobacz cennik'
								href='/cennik'
								className='hover:text-retro-orange transition'
							>
								Cennik
							</Link>
						</li>
								<li>
							<Link
								aria-label='Zobacz polityke prywatnosci'
								href='/polityka'
								className='hover:text-retro-orange transition'
							>
								Polityka Prywatności
							</Link>
						</li>
						
					</ul>
				</div>

				{/* COLUMN — LOKALIZACJE SEO */}
				<div className='flex-1 min-w-[160px]'>
					<h4 className='font-bold mb-4 uppercase tracking-widest text-retro-orange'>
						Fotografia lokalnie
					</h4>
					<ul className='flex flex-col gap-2 text-sm'>
						{LOCATION_SLUGS.map((slug) => {
							const location = LOCATION_LANDINGS[slug];
							return (
								<li key={slug}>
									<Link
										aria-label={location.breadcrumbLabel}
										href={getLocationPath(slug)}
										className='hover:text-retro-orange transition'
									>
										{location.footerLinkLabel}
									</Link>
								</li>
							);
						})}
					</ul>
				</div>

				{/* COLUMN 3 */}
				<div className='flex-1 min-w-[140px] shrink-0'>
					<h4 className='font-bold mb-4 uppercase tracking-widest  text-retro-orange'>
						Kontakt
					</h4>
					<ul className='flex flex-col gap-2 text-sm italic'>
						<li>

							<button 
                                onClick={() => setIsMapOpen(true)}
                                className=' text-retro-beige bg-transparent inline-flex items-center hover:text-retro-orange transition group cursor-pointer'
							>
							<MapPin aria-label='Lokalizacja Wejherowo' size={20} className='text-retro-orange shrink-0 m-1' />
							<span className='underline decoration-retro-orange/30 underline-offset-4 md:text-left lg:text-left'>Augustyna Necla 10/92, 84-200 Wejherowo, Polska</span>
							</button>
							{/* <span className='inline-flex'>
								<MapPin aria-label='Lokalizacja Wejherowo' size={20} className='text-retro-orange shrink-0 m-1' />
								Wejherowo, Pomorskie
							</span> */}
						</li>
						<li className='whitespace-nowrap'>
							<span className='inline-flex'>
								<Phone aria-label='Numer kontaktowy' size={20} className='text-retro-orange shrink-0 m-1' />
								<a href='tel:+ 48 790 491 067'>{COMPANY_PHONE}</a>
							</span>
						</li>
						<li className='break-all text-xs sm:text-sm italic opacity-80'>
							<span className='inline-flex'>
								<Mail aria-label='Adres e-mail kontaktowy' size={20} className='text-retro-orange shrink-0 m-1' />
								<a href='mailto:kontakt@zaczarowanykadr.pl'>
									kontakt@zaczarowanykadr.pl
								</a>
							</span>
						</li>
					</ul>
				</div>

				{/* COLUMN 4 */}
				<div className='flex-1 min-w-[140px]'>
					<h4 className='font-bold mb-4 uppercase tracking-widest  text-retro-orange'>
						Social Media
						<SocialMedia aria-label='Linki do social mediów' />
					</h4>
				</div>
				<div className='flex-1 min-w-[140px]'>
					<h4 className='font-bold mb-4 uppercase tracking-widest text-retro-orange'>
						Godziny pracy
					</h4>
					<p >Pon - Sob: 09:00 - 20:00</p>
				</div>
			</div>

			<div className='max-w-6xl mx-auto mt-12 pt-6 border-t border-retro-grey/30 text-center text-xs opacity-50'>
				© {new Date().getFullYear()} {COMPANY_NAME}. Wszystkie prawa
				zastrzeżone.
				<div className="mt-2 tracking-widest uppercase">
        Designed & Developed by 
        <a 
			aria-label='Link do portfolio autora'
            href="https://github.com/sebastian-dettlaff-dev" 
            target="_blank" 
            rel="noopener noreferrer"
            className="hover:text-retro-orange transition-colors ml-1 underline-offset-4 font-bold text-sm"
        >
            Sebastian Dettlaff
        </a>
    </div>
			</div>
			{/* [ZMIANA 6: MODAL / PANEL MAPY] */}
            <div 
                className={`fixed inset-0 bg-black/70 z-[100] transition-opacity duration-500 ${isMapOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}
                onClick={() => setIsMapOpen(false)}
            />

            {/* container with iFramem */}
            <div className={`fixed top-0 right-0 h-full w-full max-w-lg bg-retro-black z-[101] shadow-2xl transform transition-transform duration-500 ease-in-out ${isMapOpen ? 'translate-x-0' : 'translate-x-full'}`}>
                <div className='p-8 h-full flex flex-col'>
                    <div className='flex justify-between items-center mb-6'>
                        <h3 className='text-xl text-retro-orange font-bold uppercase'>Nasza Lokalizacja</h3>
                        <button onClick={() => setIsMapOpen(false)} className='text-retro-beige hover:text-retro-orange bg-transparent'>
                            <X size={30} />
                        </button>
                    </div>
                    
                    {/*iFrame */}
                    <div className='flex-grow rounded-lg overflow-hidden border border-retro-orange/20'>
                        <iframe 
                            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d51994.33474969618!2d18.19974402431909!3d54.59804223607943!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x46fdbb025815d911%3A0xa64f77bb395d408f!2sZaczarowanyKadr%20By%20Klaudia%20-%20Fotograf%20na%20Kaszubach!5e1!3m2!1spl!2suk!4v1777737994083!5m2!1spl!2suk" 
                            width="100%" 
                            height="100%" 
                            style={{ border: 0 }}  
                            loading="lazy" 
                            referrerPolicy="no-referrer-when-downgrade"
                        ></iframe>
                    </div>
                </div>
            </div>
		</footer>
	);
}
