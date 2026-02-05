'use client'
import {AnimatePresence, motion} from 'framer-motion'
import { useState } from 'react';
import {MessageCircle, Phone, Facebook, MessageSquare,X} from 'lucide-react';
import { FacebookIcon } from './icons/FacebookIcon';

// Floating Action Button/ SpeedDial
export default function FloatingActionButton(){
    const [isOpen,setIsOpen] = useState(false);
    const contactOptions= [
        {
           id:1,
           icon: <MessageSquare size={24} />,
           color:"bg-green-500",
           label:"WhatsApp",
           href:'https://wa.me/48790491067' 
        },
        {
            id:2,
            icon:<FacebookIcon />,
            color:"bg-blue-600",
            label:"Facebook",
            href:'https://m.me/61579809503319'
        },
        {
            id:3,
            icon:<Phone size={24}/>,
            color:"bg-red-700",
            label:"Phone",
            href:'tel:+48790491067'
        },
    ];
    return(
        <div className='fixed bottom-6 right-6 flex flex-col items-center z-50'>
            <AnimatePresence>
                {/* { - beacouse i will create elements for rendering using some method} */}
                {
                isOpen && (
                    <div className='flex flex-col-reverse gap-4 mb-4 items-center'>
                        {contactOptions.map((option,index)=>(
                        <motion.a
                        key={option.id}
                        href={option.href}
                        target='_blank'
                        rel='noopener noreferrer'
                        initial={{opacity:0,scale:0,y:20}}
                        animate={{opacity:1,scale:1,y:0}}
                        exit={{opacity:0,scale:0,y:20}}
                        transition={{delay:index *0.1}}
                        className={`${option.color} text-white p-4 rounded-full shadow-lg hover:scale-110 transition-transform active:scale-95 group relative`}
                        // title={option.label}
                        >
                            <span className="absolute right-full mr-3 whitespace-nowrap bg-gray-800 text-white text-xs px-2 py-1 rounded shadow-md opacity-0 group-hover:opacity-100 transition-opacity duration-200 pointer-events-none">
                            {option.label}
                            </span>
                        {option.icon}
                        </motion.a>
                        ))}
                    </div>
                )
                }
            </AnimatePresence>
            {/* Main button */}
            <button 
            aria-label='Otwórz menu kontaktu'
            onClick={()=> setIsOpen(!isOpen)}
            className='bg-indigo-600 text-white p-5 rounded-full shadow-2xl hover:bg-indigo-700 transition-colors focus:outline-none'>
                <motion.div
                animate={{rotate:isOpen? 135: 0}}
                transition={{duration:0.3}}
                className='flex items-center  justify-center'>
                     {isOpen? <X size={28}></X>: <MessageCircle></MessageCircle>}
                </motion.div>
               
            </button>
        </div>
    );
}