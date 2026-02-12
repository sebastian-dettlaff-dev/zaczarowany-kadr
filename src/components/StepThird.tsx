import { div } from 'framer-motion/client';
import {FormData} from './MultiStepForm'; 
import {useState} from "react";
import { ChevronRight } from 'lucide-react';


interface StepThirdProps {
    nextStep:(field: keyof FormData, value: string) => void;
    formData: FormData;
}








export default function StepThird({ nextStep, formData }: StepThirdProps) {
   
  const [currentViewDate, setCurrentViewDate] = useState(new Date());
    
const month = currentViewDate
.getMonth();
const year  = currentViewDate.getFullYear();

const daysInMonth = new Date(year, month + 1, 0).getDate();
const firstDayOfMonth = new Date(year, month, 1 ).getDay();

const monthName = currentViewDate.toLocaleString('pl-PL', { month: 'long' });
const days = Array.from({ length: daysInMonth }, (_, i) => i + 1);
const blanks = Array.from({ length: firstDayOfMonth < 0 ? 6 : firstDayOfMonth }, (_, i) => i);


const nextMonth =() => {
    setCurrentViewDate(new Date(currentViewDate.getFullYear(), currentViewDate.getMonth() + 1, 1));
}
    return(

    
        <div className="space-y-9 animate-in fade-in slide-in-from-bottom-4 duration-500">
            <div className='flex flex-col justify-between items-center border-b border-white/10 p-4'>

                <div className='flex md:flex-row md:justify-around md:items-center gap-4 p-3'>
                    <h2 className="text-white text-xl font-light tracking-tight uppercase">{monthName} 
                    <span className='text-cyan-500/50 ml-1.5'>{year}</span>
                </h2>
                <p className="text-white  tracking-widest uppercase font-mono">Wybierz date sesji</p>
                <button aria-label="Przejdź do następnego miesiąca" onClick={nextMonth} className="text-white/60 hover:text-white tracking-widest uppercase font-mono transition-colors bg-transparent">
                <ChevronRight className="w-8 h-8" />
                </button>
                </div>
            </div>
            {/* <button
             onClick={prevStep}
             className="text-white/60 hover:text-white tracking-widest uppercase font-mono transition-colors bg-transparent">POWROT</button> */}
            <div className="grid grid-cols-7 gap-1">
                {['NIE', 'PON', 'WT', 'SR', 'CZW', 'PT', 'SO'].map((day) => (
                    <div key={day} className="text-white/60 text-center text-xs font-mono tracking-widest uppercase">{day}</div>
                ))}
                {blanks.map((blankDay) => (
                <div key={`blank-${blankDay}`} className="aspect-square" />
                ))}
                {days.map((day) => {
                    const dateString = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
                    const isSelected = formData.date_Of_Session === dateString;
                    return (
                        <button
                            key={day}
                            onClick={() => nextStep('date_Of_Session', dateString)}
                            aria-label={`Wybierz datę: ${dateString}`}
                            className={`
                                aspect-square flex items-center justify-center rounded-lg text-xs font-mono transition-all duration-300 bg-transparent
                                ${isSelected 
                                    ? 'bg-cyan-500 text-white shadow-[0_0_20px_rgba(34,211,238,0.4)] scale-110 z-10 font-bold' 
                                    : 'text-white/70 hover:bg-white/10 hover:text-white border border-transparent hover:border-white/20'}
                            `}
                        >
                            {day}
                        </button>
                    );
                })}
                
            </div>
            <div className="pt-4 flex justify-between items-end">
                <div className="text-[10px] font-mono text-white/40 italic">
                    * Wybór daty automatycznie przekierowuje do kolejnego kroku
                </div>
                {formData.date_Of_Session && (
                     <div className="text-[10px] font-mono text-cyan-400 animate-pulse">
                        SELECTED: {formData.date_Of_Session}
                     </div>
                )}
            </div>
            
        </div>
    );

}
