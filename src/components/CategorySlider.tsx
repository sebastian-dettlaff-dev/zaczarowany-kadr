'use client'
import useEmblaCarousel from 'embla-carousel-react'
import { div } from 'framer-motion/client';
import Image from 'next/image'
import { useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'

export default function CategorySlider({ images }: { images: string[] }) {
  const [selectedImage ,setImage] = useState<string | null>(null);

  const [emblaRef] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps',
    dragFree: true // daje ten "lekki" efekt swipowania jak w Swiperze
  });


  return (
    <>
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4 px-6"> 
        {images.map((src, index) => (
          <div 
            key={index} 
            className="flex-[0_0_80%] md:flex-[0_0_30%] min-w-0 relative h-[300px] cursor-zoom-in"
            onClick={() => setImage(src)}
          >
            <Image
              src={src}
              alt="Fotografia"
              fill
              className="object-cover rounded-sm"
            />
          </div>
        ))}
      </div>
    </div>
        
        <AnimatePresence>
            {selectedImage && (
                <motion.div
                initial={{opacity: 0}}
                animate={{opacity:1}}
                exit={{opacity:0}}
                onClick={() => setImage(null)}
                className='fixed inset-0 flex justify-center items-center bg-black/30 backdrop-blur-md z-[100]'
                >    
                <button className="absolute top-10 right-10 text-4xl bg-transparent">&times;</button>
                <motion.div
                initial={{scale: 0.9, opacity:0}}
                animate={{scale:1,opacity:1}}
                transition={{type: "spring", damping: 25, stiffness:300}}
                className='relative w-[80vw] h-[70vh]'
                >
                    <Image src={selectedImage} fill className='object-contain' alt='' />

                    
                    
                </motion.div>
                </motion.div>
           
        )}
         </AnimatePresence>
        </>
  )
}
 {/* <div className='z-100 fixed inset-0 bg-black/30 backdrop-blur-md flex flex-col items-center justify-center p-4 animate-in fade-in duration-300'
            onClick={() => setImage(null)}>
                
                <div className='relative max-w-5xl w-full h-[80vh]'>
                    <Image
                    src={selectedImage}
                    fill
                    alt =""
                    className='object-contain'
                    />
                </div>
            </div> */}