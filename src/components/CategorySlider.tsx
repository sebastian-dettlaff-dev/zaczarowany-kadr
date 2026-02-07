'use client'
import useEmblaCarousel from 'embla-carousel-react'
import Image from 'next/image'
import { useEffect, useState} from 'react'
import {motion, AnimatePresence} from 'framer-motion'
import {CldImage} from 'next-cloudinary';
import { getCldImageUrl } from 'next-cloudinary'


interface PortfolioImage {
  id:string;
  alt:string;
}




export default function CategorySlider({ images }: { images: PortfolioImage[] }) {
  const [selectedImage ,setImage] = useState<PortfolioImage | null>(null);


 useEffect(()=>{
  if(selectedImage){
    document.body.style.overflow = "hidden";
  }else{
    document.body.style.overflow = "unset";
  }
  return () => {document.body.style.overflow = "unset";}
},[selectedImage]);

  const [emblaRef] = useEmblaCarousel({ 
    align: 'start', 
    containScroll: 'trimSnaps',
    dragFree: true // daje ten "lekki" efekt swipowania jak w Swiperze
  });


  return (
    <>
    <div className="overflow-hidden" ref={emblaRef}>
      <div className="flex gap-4 px-6"> 
        {images.map((imgObject, index) => (
          <div 
            key={index} 
            className="flex-[0_0_80%] md:flex-[0_0_30%] min-w-0 relative h-[300px] cursor-zoom-in"
            onClick={() => setImage(imgObject)}
          >
            <CldImage
            src={imgObject.id}
            alt={imgObject.alt}
            fill
            className='object-cover rounded-sm'
            sizes="(max-width: 768px) 80vw, 30vw"
            deliveryType='upload'
            crop="thumb"
            gravity='face'
            zoom="0.5"
            format="auto"
            quality='auto'
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
                className='fixed inset-0 w-screen h-screen flex justify-center items-center bg-black/30 backdrop-blur-md z-[100]'
                >    
                <button className="absolute top-10 right-10 text-4xl bg-transparent">&times;</button>
                <motion.div
                initial={{scale: 0.9, opacity:0}}
                animate={{scale:1,opacity:1}}
                transition={{type: "spring", damping: 25, stiffness:300}}
                className='relative w-[80vw] h-[70vh]'
                >

                  <CldImage 
                  priority
                  src={selectedImage.id}
                  fill
                  className='object-contain'
                  alt={selectedImage.alt}
                  sizes="80vw"
                  deliveryType='upload'
                  format='auto'
                  quality="auto"
                  crop="limit"
                  placeholder='blur'
                  blurDataURL={getCldImageUrl({
                    src: selectedImage.id,
                    width: 10,
                    blur: "1000",
                    quality:10
                    
                  })}
                  
                  />
                </motion.div>
                </motion.div>
           
        )}
         </AnimatePresence>
        </>
  )
}