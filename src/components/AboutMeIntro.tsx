import Image from 'next/image';
export default function AboutMeIntro() {
	return (
		<>
			<section className='relative w-full h-auto py-16  md:py-24 flex flex-col items-center justify-center overflow-hidden'>
				{/* Obraz tła z fotografką */}
				<h1 className="sr-only">Lorem ipsum dolor, sit amet consectetur adipisicing elit.</h1>
				<div className='absolute inset-0 z-0'>
					<Image
						src='/assets/images/profesjonalny-aparat-fotograficzny-na-stoliku.webp' // Zmień na ścieżkę do Twojego zdjęcia
						alt='Fotografka robiąca zdjęcia'
						fill
						priority
						className='object-cover opacity-60 object-[40%_20%] md:object-20%_90%]'
						// style={{objectPosition: '70% 70%'}} // Niska przezroczystość, aby tekst był czytelny
					/>
				</div>

				<div
					className='relative z-10 max-w-6xl md:max-w-9xl  flex flex-col-reverse md:flex-row items-center 
                      gap-12 p-8 md:p-10
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
									src='/assets/images/fotograf-zaczarowanykadr.jpg' // Zmień na ścieżkę do Twojego zdjęcia
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
									src='/assets/images/fotograf__trojmiescie_klaudia_zaczarowany_kadr.webp' // Zmień na ścieżkę do Twojego zdjęcia
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
									src='/assets/images/fotograf_domowy_i_plenerowy_na_kaszubach.webp' // Zmień na ścieżkę do Twojego zdjęcia
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
						{/* <div className='relative bg-white p-3 pb-10 shadow-2xl border border-gray-100 rotate-12 -translate-y-4 hover:rotate-0 transition-transform duration-300'>
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
						</div> */}

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
					
						<h2 className='text-4xl md:text-3xl font-bold mt-4 p-2'>
							Cześć! Jestem Klaudia – fotografka z Wejherowa, działająca w całym Trójmieście.
						</h2>
							<div className='space-y-4 text-white/90 text-lg'>
                        <p className='leading-relaxed'>
                            Jestem fotografką z <strong>Wejherowa</strong>, działającą w całym Trójmieście. 
                            Towarzyszę Wam w najważniejszych chwilach – od sesji kobiecych i ciążowych, po rodzinne spotkania.
                        </p>
                        
                        <p className='leading-relaxed'>
                            Na sesji stawiam na luz i naturalność. Nie zmuszam do pozowania – łapię prawdziwe emocje, 
                            spojrzenia i małe gesty, które tworzą Waszą historię.
                        </p>

                        <p className='leading-relaxed font-medium'>
                            Dojazd na terenie Wejherowa i okolic masz u mnie w prezencie! 
                        </p>
                    </div>
						<button className='  px-8 py-3 rounded-full transition-colors cursor-pointer'>
							Poznaj moje portfolio
						</button>
					</div>
				</div>
			</section>
		</>
	);
}
