import Image from 'next/image';
export default function AboutMeIntro() {
	return (
		<>
			<section className='relative w-full h-auto py-16  md:py-24 flex flex-col items-center justify-center overflow-hidden'>
				{/* Obraz tła z fotografką */}
				<h1 className="sr-only">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
				<div className='absolute inset-0 z-0'>
					<Image
						src='/assets/images/pexels-lukas-rodriguez-1845331-3680219.jpg' // Zmień na ścieżkę do Twojego zdjęcia
						alt='Fotografka robiąca zdjęcia'
						fill
						className='object-cover opacity-60' // Niska przezroczystość, aby tekst był czytelny
					/>
				</div>

				<div
					className='relative z-10 max-w-6xl md:max-w-9xl  flex flex-col-reverse md:flex-row items-center 
                      gap-12 p-8 md:p-16
                      bg-white/10 backdrop-blur-md  /* To tworzy efekt szkła */
                      border border-white/20        /* Delikatna krawędź szkła */
                      rounded-3xl shadow-2xl'
				>
					{/* LEWA STRONA: "POLAROIDY" Z PRZYKŁADAMI ZDJĘĆ */}
					<div className='hidden w-full md:w-2/3 md:grid md:grid-cols-2 gap-1 pt-10 pb-10'>
						{/* KARTA POLAROID 1 */}
						<div className='relative bg-white p-3 pb-10 shadow-2xl border border-gray-100 -rotate-6 translate-y-4 hover:rotate-0 transition-transform duration-300'>
							<div className='relative aspect-square w-full overflow-hidden bg-gray-200 flex items-center justify-center'>
								<Image
									src='/sesja-rodzinna.jpg' // Zmień na ścieżkę do Twojego zdjęcia
									alt='Sesja rodzinna'
									fill
									className='object-cover'
									priority
								/>
							</div>
							<p className='mt-4 text-center leading-snug'>
								Sesja rodzinna
							</p>
						</div>

						{/* KARTA POLAROID 2 */}
						<div className='relative bg-white p-3 pb-10 shadow-2xl border border-gray-100 rotate-12 -translate-y-4 hover:rotate-0 transition-transform duration-300'>
							<div className='relative aspect-square w-full overflow-hidden bg-gray-200 flex items-center justify-center'>
								<Image
									src='/chwile-piekne.jpg' // Zmień na ścieżkę do Twojego zdjęcia
									alt='Piękne chwile'
									fill
									className='object-cover'
									priority
								/>
							</div>
							<p className='mt-4 text-center  leading-snug'>
								Chwile piękne
							</p>
						</div>
						{/* KARTA POLAROID 3 */}
						<div className='relative bg-white p-3 pb-10 shadow-2xl border border-gray-100 rotate-12 -translate-y-4 hover:rotate-0 transition-transform duration-300'>
							<div className='relative aspect-square w-full overflow-hidden bg-gray-200 flex items-center justify-center'>
								<Image
									src='/chwile-piekne.jpg' // Zmień na ścieżkę do Twojego zdjęcia
									alt='Piękne chwile'
									fill
									className='object-cover'
									priority
								/>
							</div>
							<p className='mt-4 text-center  leading-snug'>
								Chwile piękne
							</p>
						</div>
						{/* KARTA POLAROID 2 */}
						<div className='relative bg-white p-3 pb-10 shadow-2xl border border-gray-100 rotate-12 -translate-y-4 hover:rotate-0 transition-transform duration-300'>
							<div className='relative aspect-square w-full overflow-hidden bg-gray-200 flex items-center justify-center'>
								<Image
									src='/chwile-piekne.jpg' // Zmień na ścieżkę do Twojego zdjęcia
									alt='Piękne chwile'
									fill
									className='object-cover'
									priority
								/>
							</div>
							<p className='mt-4 text-center   leading-snug'>
								Chwile piękne
							</p>
						</div>

						{/* Możesz dodać więcej polaroidów, kopiując powyższe bloki */}
					</div>
					{/* <div className='block md:hidden w-full'>
            <div className='relative aspect-[3/4] w-full max-w-[300px] mx-auto border-[12px] border-white shadow-lg rotate-2'>
                <Image 
                    src='/assets/images/twoje-glowne.jpg' 
                    fill 
                    className='object-cover' 
                    alt='Klaudia - fotograf'
                />
                <div className='absolute bottom-2 right-2 text-[10px] text-gray-400 font-mono'>FRAME #01</div>
            </div>
        </div> */}

					{/* PRAWA STRONA: TEKST "O MNIE" */}
					<div className='w-full md:w-1/2 space-y-6 text-center md:text-left'>
						<h2 className='text-4xl md:text-5xl font-bold mt-4 p-2'>
							O mnie
						</h2>
						<p className=' leading-relaxed'>
							Nazywam się Klaudia.
							Specjalizuję się w naturalnej fotografii rodzinnej, portretowej i
							lifestylowej. Uwielbiam łapać ulotne chwile, prawdziwe emocje i
							tworzyć piękne wspomnienia, które zostaną z Wami na zawsze. Moje
							sesje to nie tylko zdjęcia, to przede wszystkim opowieści.
						</p>
						<p className='leading-relaxed'>
							Dojazd do klienta na terenie Wejherowa i okolic gratis! Pracuję z
							naturalnym światłem, by podkreślić magię każdej chwili.
						</p>
						<button className='  px-8 py-3 rounded-full transition-colors cursor-pointer'>
							Poznaj moje portfolio
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
