import { motion } from "framer-motion";

export default function SuccessScreen() {
  return (
    <div className="flex flex-col items-center justify-center py-10 text-center space-y-6">
      {/* Animowane kółko z ptaszkiem */}
      <motion.div 
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ type: "spring", stiffness: 260, damping: 20 }}
        className="w-20 h-20 bg-cyan-500 rounded-full flex items-center justify-center shadow-[0_0_30px_#22d3ee]"
      >
        <svg className="w-10 h-10 text-[#1e1646]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" d="M5 13l4 4L19 7" />
        </svg>
      </motion.div>

      <div className="space-y-2">
        <h2 className="text-2xl text-white font-bold tracking-widest uppercase">Zgłoszenie wysłane!</h2>
        <p className="text-white/60 text-[10px] tracking-[0.2em] uppercase">
          System odebrał Twoje dane. <br /> Odezwę się wkrótce!
        </p>
      </div>

      <button 
      aria-label="Powrót do strony głównej"
        onClick={() => window.location.reload()} // Odświeża stronę, by zresetować formularz
        className="mt-4 text-cyan-400 border border-cyan-400/30 px-6 py-2 rounded-full text-[9px] tracking-widest hover:bg-cyan-400 hover:text-black transition-all"
      >
        POWRÓT DO STRONY
      </button>
    </div>
  );
}