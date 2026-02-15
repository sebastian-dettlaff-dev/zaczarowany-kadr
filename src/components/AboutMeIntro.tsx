import Image from 'next/image';
import Link from 'next/link';
export default function AboutMeIntro() {
	return (
		<>
			<section className='relative w-full h-auto py-16  md:py-24 flex flex-col items-center justify-center overflow-hidden'>
				{/* Obraz tła z fotografką */}
				<div className='absolute inset-0 z-0'>
					<Image
						src='/assets/images/profesjonalny-aparat-fotograficzny-na-stoliku.webp' // Zmień na ścieżkę do Twojego zdjęcia
						alt='Fotografka robiąca zdjęcia'
						fill
						priority
						className='object-cover opacity-90 object-[40%_20%] md:object-20%_90%]'
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
									src='/assets/images/fotograf-zaczarowanykadr.webp' 
									alt='Fotografka Klaudia z usmiechem zajmujaca sie swoja praca w domowym studio.'
									fill
									className='object-cover object-top'
									priority
								/>
							</div>
							<p className='pt-4'></p>
						</div>

						{/*  POLAROID 2 */}
						<div className='relative bg-white p-3 pb-10 shadow-2xl border border-gray-100 rotate-12 -translate-y-4 hover:rotate-0 transition-transform duration-300'>
							<div className='relative aspect-square w-full overflow-hidden bg-gray-200 flex items-center justify-center'>
								<Image
									src='/assets/images/fotograf__trojmiescie_klaudia_zaczarowany_kadr.webp' 
									alt='Zdjecie fotografki podczas sesji.'
									fill
									className='object-cover'
									priority
								/>
							</div>
							<p className='pt-4'></p>
						</div>
						{/*  POLAROID 3 */}
						<div className='relative bg-white p-3 pb-10 shadow-2xl border border-gray-100 rotate-12 -translate-y-4 hover:rotate-0 transition-transform duration-300'>
							<div className='relative aspect-square w-full overflow-hidden bg-gray-200 flex items-center justify-center'>
								<Image
									src='/assets/images/fotograf_wejherowo_i_okolice_profesjonalna_fotografia.webp' // Zmień na ścieżkę do Twojego zdjęcia
									alt='Zdjecie fotografki w czasie pracy z aparatem fotograficznym , w swoim profesjonalnym studio domowym w Wejherowie.'
									fill
									className='object-cover object-top'
									priority
								/>
							</div>
							<p className='pt-4'></p>
						</div>
						
					</div>
			

					
					<div className='w-full md:w-1/2 space-y-6 text-center md:text-left'>
					
						<h2 className='text-4xl md:text-3xl font-bold mt-4 p-2 leading-relaxed'>
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
						<p className='leading-relaxed font-medium'>
                            Do zobaczenia na Sesji! 
                        </p>
                    </div>
						
						<Link aria-label='Poznaj moje portfolio' href="/portfolio" className="inline-block bg-white text-black px-8 py-3 rounded-full font-medium hover:scale-95 
						hover:bg-gray-200 transition-colors shadow-lg">Poznaj moje portfolio</Link>
					</div>
				</div>
			</section>
		</>
	);
}
