"use client"
import { useState, useEffect } from 'react';


const FULL_TEXT = "Profesjonalna fotografia na Kaszubach i w Trójmieście – Poznaj moją ofertę";

export default function TypingComponent() {
    const [displayedText, setDisplayedText] = useState("");
    const [ignition, setIgnition] = useState(false);

    useEffect(() => {
        const timer = setTimeout(() => setIgnition(true), 300);
        return () => clearTimeout(timer);
    }, []);

    useEffect(() => {
        if (ignition && displayedText.length < FULL_TEXT.length) {
            const timeout = setTimeout(() => {
                setDisplayedText(FULL_TEXT.slice(0, displayedText.length + 1));
            }, 40); 

            return () => clearTimeout(timeout);
        }
    }, [ignition, displayedText]); 

    return (
        <div className="flex flex-col items-center justify-center min-h-[160px]">
            <h1 className="text-4xl text-retro-accent italic p-4 text-center font-bold">
                Cennik
            </h1>
            
            <h2 className="text-2xl md:text-3xl text-retro-black italic p-4 text-center min-h-[4em] md:min-h-[3em] max-w-4xl">
                {displayedText}
            </h2>
        </div>
    );
}