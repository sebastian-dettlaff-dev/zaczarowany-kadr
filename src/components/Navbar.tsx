'use client';
// src/components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
	

	const [isOpen, setIsOpen] = useState(false);
// bg-retro-beige
	return (
		<nav className={`w-full fixed top-0 z-100 px-6 py-4 transition-colors duration-300
		${isOpen ?'bg-[#faf9f6] border-b-transparent' : 'bg-black/20 backdrop-blur-md border-b border-white/10'}`}>
            <div className='max-w-6xl mx-auto flex justify-between items-center'>
                
                {/* LOGO */}
				<Link
				href='/'
				className='flex flex-col group z-[90]' 
				>
				
				<div className='text-3xl font-serif text-retro-beige group-hover:text-retro-orange transition leading-none'>
					Zaczarowany{' '}
					<span className='italic font-light text-retro-orange text-2xl'>Kadr</span>
				</div>

				<span className='text-[10px] font-mono uppercase tracking-[0.3em] text-retro-orange/80 mt-1 self-center md:self-end'>
					by Klaudia
				</span>
				</Link>

                {/* HAMBURGERA BUTTON*/}
                <button
                    className='md:hidden z-[100] text-retro-grey bg-transparent p-2 focus:outline-none'
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {/* Prosta animacja hamburgera */}
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isOpen ? 'rotate-45 translate-y-2' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-current mb-1.5 transition-all ${isOpen ? 'opacity-0' : ''}`}></div>
                    <div className={`w-6 h-0.5 bg-current transition-all ${isOpen ? '-rotate-45 -translate-y-2' : ''}`}></div>
                </button>

                {/* LINKI - DESKTOP */}
                <div className='hidden md:flex gap-8 items-center font-medium'>
					<Link aria-label='Strona glowna' href='/' className='text-white hover:text-retro-orange transition-colors'>Home</Link>
                    <Link aria-label='Poznaj moje portfolio' href='/portfolio' className='text-white hover:text-retro-orange transition-colors'>Portfolio</Link>
					<Link aria-label='Zobacz moje uslugi' href='/oferta' className='text-white hover:text-retro-orange transition-colors'>Oferta</Link>
                    <Link aria-label='Czytaj moje wpisy blogowe' href='/blog' className='text-white hover:text-retro-orange transition-colors'>Blog</Link>
                    <Link aria-label='Zobacz najczesciej zadawane pytania' href='/faq' className='text-white hover:text-retro-orange transition-colors'>FAQ</Link>
                    <Link aria-label='Zobacz moje cennik uslug' href='/cennik' className='text-white hover:text-retro-orange transition-colors'>Cennik</Link>
                    <Link
						aria-label='Skontaktuj sie ze mna'
                        href='/kontakt'
                        className='bg-retro-orange text-white px-6 py-2 rounded-sm shadow-md hover:bg-orange-700 transition-all uppercase text-sm tracking-wider'
                    >
                        Kontakt
                    </Link>
					<Link aria-label='Zobacz regulamin serwisu' href='/regulamin' className='text-black bg-retro-beige px-6 py-2 rounded-sm shadow-md hover:text-retro-beige uppercase text-sm tracking-wider hover:bg-black transition-all'>Regulamin</Link>
                </div>
            </div>

			{/* MENU MOBILNE */}
            <div
                className={`
                    fixed inset-0 h-screen w-full bg-[#faf9f6]  flex flex-col items-center justify-start gap-6 text-2xl text-retro-black transition-transform duration-500 ease-in-out md:hidden overflow-y-auto pb-10 pt-25 z-90
                    ${isOpen ? 'translate-x-0' : 'translate-x-full'}
                `}
            >
				<Link aria-label='Strona glowna' href='/' className='hover:text-retro-orange ' onClick={() => setIsOpen(false)}>Home</Link>
                <Link aria-label='Poznaj moje portfolio' href='/portfolio' className="hover:text-retro-orange" onClick={() => setIsOpen(false)}>Portfolio</Link>
				<Link aria-label='Zobacz moje uslugi' href='/oferta' className=' hover:text-retro-orange transition-colors' onClick={()=>setIsOpen(false)}>Oferta</Link>
                <Link aria-label='Czytaj moje wpisy blogowe' href='/blog' className="hover:text-retro-orange" onClick={() => setIsOpen(false)}>Blog</Link>
				<Link aria-label='Zobacz najczesciej zadawane pytania' href='/faq' className=' hover:text-retro-orange transition-colors' onClick={()=>setIsOpen(false)}>FAQ</Link>
                <Link aria-label='Zobacz moje cennik uslug' href='/cennik' className="hover:text-retro-orange" onClick={() => setIsOpen(false)}>Cennik</Link>
                <Link
					aria-label='Skontaktuj sie ze mna'
                    href='/kontakt'
                    onClick={() => setIsOpen(false)}
                    className='bg-retro-orange text-white px-10 py-3 rounded-sm'
                >
                    Kontakt
                </Link>
				<Link aria-label='Zobacz regulamin serwisu' href='/regulamin' className='text-black bg-retro-beige px-10  py-3 rounded-sm ' onClick={() => setIsOpen(false)}>Regulamin</Link>
            </div>
        </nav>
	);
}
