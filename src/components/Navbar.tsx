'use client';
// src/components/Navbar.tsx
import { useState } from 'react';
import Link from 'next/link';

export default function Navbar() {
	//   return (
	//     <nav className="w-full bg-retro-beige border-b border-retro-orange/20 px-6 py-4 fixed top-0 z-50 shadow-sm">
	//       <div className="max-w-6xl mx-auto flex justify-between items-center">

	//         {/* LOGO - Możesz tu wstawić swój tekst lub obrazek */}
	//         <Link href="/" className="text-2xl font-serif text-retro-black hover:text-retro-orange transition">
	//           Zaczarowany <span className="italic font-light text-retro-orange">Kadr</span>
	//         </Link>

	//         {/* LINKI - Tutaj sterujesz nawigacją */}
	//         <div className="hidden md:flex gap-8 items-center font-medium text-retro-black">
	//           <Link href="/Portfolio" className="hover:text-retro-orange transition-colors">
	//             Portfolio
	//           </Link>
	//            <Link href="/Portfolio" className="hover:text-retro-orange transition-colors">
	//             Blog
	//           </Link>
	//           <Link href="/uslugi" className="hover:text-retro-orange transition-colors">
	//             Usługi
	//           </Link>
	//           <Link href="/o-mnie" className="hover:text-retro-orange transition-colors">
	//             Cennik
	//           </Link>

	//           <Link
	//             href="/kontakt"
	//             className="bg-retro-orange text-white px-6 py-2 rounded-sm shadow-md hover:bg-orange-700 transition-all uppercase text-sm tracking-wider"
	//           >
	//             Kontakt
	//           </Link>
	//         </div>
	//       </div>
	//     </nav>
	//   );

	const [isOpen, setIsOpen] = useState(false);

	return (
		<nav className='w-full bg-retro-beige border-b border-retro-orange/20 px-6 py-4 fixed top-0 z-50 shadow-sm'>
			<div className='max-w-6xl mx-auto flex justify-between items-center'>
				{/* LOGO */}
				<Link
					href='/'
					className='text-3xl font-serif text-retro-black hover:text-retro-orange transition z-50'
				>
					Zaczarowany{' '}
					<span className='italic font-light text-retro-orange text-2xl'>Kadr</span>
				</Link>

				{/* PRZYCISK HAMBURGERA (tylko na mobile) */}
				<button
					className='md:hidden z-50 text-retro-black p-2 '
					onClick={() => setIsOpen(!isOpen)}
				>
					<div className='w-6 h-0.5 bg-current mb-1.5 transition-all'></div>
					<div className='w-6 h-0.5 bg-current mb-1.5 transition-all'></div>
					<div className='w-6 h-0.5 bg-current transition-all'></div>
				</button>

				{/* LINKI - DESKTOP (md:flex) */}
				<div className='hidden md:flex gap-8 items-center font-medium'>
					<Link
						href='/Portfolio'
						className='hover:text-retro-orange transition-colors'
					>
						Portfolio
					</Link>
					<Link
						href='/blog'
						className='hover:text-retro-orange transition-colors'
					>
						Blog
					</Link>
					<Link
						href='/uslugi'
						className='hover:text-retro-orange transition-colors'
					>
						Usługi
					</Link>
					<Link
						href='/o-mnie'
						className='hover:text-retro-orange transition-colors'
					>
						Cennik
					</Link>
					<Link
						href='/kontakt'
						className='bg-retro-orange text-white px-6 py-2 rounded-sm shadow-md hover:bg-orange-700 transition-all uppercase text-sm tracking-wider'
					>
						Kontakt
					</Link>
				</div>

				{/* MENU MOBILNE - ROZWIJANE */}
				<div
					className={`
          fixed inset-0 bg-retro-beige flex flex-col items-center justify-center gap-8 text-2xl transition-transform duration-300 md:hidden
          ${isOpen ? 'translate-x-0' : 'translate-x-full'}
        `}
				>
					<Link href='/Portfolio' onClick={() => setIsOpen(false)}>
						Portfolio
					</Link>
					<Link href='/blog' onClick={() => setIsOpen(false)}>
						Blog
					</Link>
					<Link href='/uslugi' onClick={() => setIsOpen(false)}>
						Usługi
					</Link>
					<Link href='/o-mnie' onClick={() => setIsOpen(false)}>
						Cennik
					</Link>
					<Link
						href='/kontakt'
						onClick={() => setIsOpen(false)}
						className='bg-retro-orange text-white px-10 py-3 rounded-sm'
					>
						Kontakt
					</Link>
				</div>
			</div>
		</nav>
	);
}
