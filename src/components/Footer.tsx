import Link from 'next/link';
import { COMPANY_NAME, COMPANY_PHONE } from '@/lib/constants';
import { Phone, Mail, MapPin } from 'lucide-react';
import SocialMedia from './SocialMedia';

export default function Footer() {

	return (
		<footer className='w-full bg-retro-black text-retro-beige py-12 px-4 sm:px-6'>
			{/* Usuwamy kropkę przy flex-wrap i dodajemy min-w-0 */}
			<div className='max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-6 flex-wrap md:gap-8'>
				{/* KOLUMNA 1 - dodajemy min-w-[250px] aby na małych ekranach nie była zbyt wąska */}
				<div className='flex-1 min-w-[200px]'>
					<h3 className='text-3xl text-retro-orange mb-4 italic'>
						{COMPANY_NAME}
					</h3>
					<p className='opacity-80 leading-relaxed'>
						Fotografia retro w sercu Wejherowa. Uchwyćmy Twoje najważniejsze
						chwile w ponadczasowym stylu.
					</p>
				</div>

				{/* KOLUMNA 2 */}
				<div className='flex-1 min-w-[140px]'>
					<h4 className='font-bold mb-4 uppercase tracking-widest  text-retro-orange'>
						Nawigacja
					</h4>
					<ul className='flex flex-col gap-2'>
						<li>
							<Link
								href='/Portfolio'
								className='hover:text-retro-orange transition'
							>
								Portfolio
							</Link>
						</li>
						<li>
							<Link
								href='/uslugi'
								className='hover:text-retro-orange transition '
							>
								Usługi
							</Link>
						</li>
						<li>
							<Link
								href='/o-mnie'
								className='hover:text-retro-orange transition'
							>
								Cennik
							</Link>
						</li>
						<li>
							<Link href='/blog' className='hover:text-retro-orange transition'>
								Blog
							</Link>
						</li>
					</ul>
				</div>

				{/* KOLUMNA 3 - shrink-0 zapobiegnie ściskaniu numeru telefonu */}
				<div className='flex-1 min-w-[140px] shrink-0'>
					<h4 className='font-bold mb-4 uppercase tracking-widest  text-retro-orange'>
						Kontakt
					</h4>
					<ul className='flex flex-col gap-2 text-sm italic'>
						<li className='whitespace-nowrap'>
							<span className='inline-flex'>
								<MapPin size={20} className='text-retro-orange shrink-0 m-1' />
								Wejherowo, Pomorskie
							</span>
						</li>
						<li className='whitespace-nowrap'>
							<span className='inline-flex'>
								<Phone size={20} className='text-retro-orange shrink-0 m-1' />
								<a href='tel:+ 48 790 491 067'>{COMPANY_PHONE}</a>
							</span>
						</li>
						<li className='break-all text-xs sm:text-sm italic opacity-80'>
							<span className='inline-flex'>
								<Mail size={20} className='text-retro-orange shrink-0 m-1' />
								<a href='mailto:kontakt@zaczarowanykadr.pl'>
									kontakt@zaczarowanykadr.pl
								</a>
							</span>
						</li>
					</ul>
				</div>

				{/* KOLUMNA 4 */}
				<div className='flex-1 min-w-[140px]'>
					<h4 className='font-bold mb-4 uppercase tracking-widest  text-retro-orange'>
						Social Media
						<SocialMedia />
					</h4>
				</div>
				<div className='flex-1 min-w-[140px]'>
					<h4 className='font-bold mb-4 uppercase tracking-widest text-retro-orange'>
						Godziny pracy
					</h4>
					<p >Pon - Pt: 09:00 - 18:00</p>
					<p >Soboty: Na zapisy</p>
				</div>
			</div>

			<div className='max-w-6xl mx-auto mt-12 pt-6 border-t border-retro-grey/30 text-center text-xs opacity-50'>
				© {new Date().getFullYear()} {COMPANY_NAME}. Wszystkie prawa
				zastrzeżone.
			</div>
		</footer>
	);
}
