// components/FaqList.tsx
"use client";

import { useState } from 'react';
import Image from 'next/image';
import { ChevronDown } from 'lucide-react';

// Typy mogą być tutaj lub w osobnym pliku types.ts
export interface FaqItem {
    question: string;
    answer: string;
}

export interface CategoryItem {
    title: string;
    description: string;
    image: string;
    faq: FaqItem[];
}

interface FaqListProps {
    categories: CategoryItem[];
}

export default function FaqList({ categories }: FaqListProps) {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleOpen = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <div className="max-w-6xl mx-auto flex flex-col gap-6 justify-center items-center">
            {categories.map((category, index) => {
                const isOpen = openIndex === index;

                return (
                    <div
                        key={index}
                        onClick={() => toggleOpen(index)}
                        className={`
                            w-full border border-white/20 rounded-sm cursor-pointer overflow-hidden transition-all duration-300 ease-in-out
                            ${isOpen ? 'shadow-lg' : 'shadow-sm'}
                        `}
                    >
                        {/* Górna część: Obrazek + Tytuł */}
                        <div className="flex flex-col md:flex-row">
                            <div className="relative w-full md:w-1/3 h-[200px]">
                                <Image
                                    src={category.image}
                                    alt={category.title}
                                    fill
                                    sizes="(max-width: 768px) 100vw, 33vw"
                                    className="object-cover"
                                />
                            </div>

                            <div className="p-6 flex-1 flex flex-col justify-between relative bg-white/5 backdrop-blur-sm">
                                <div>
                                    <h3 className="font-bold text-2xl text-gray-800">{category.title}</h3>
                                    <p className="text-gray-600 mt-2">{category.description}</p>
                                </div>

                                <div className="flex justify-end items-center mt-4">
                                    <span className="text-sm font-semibold text-retro-accent mr-2">
                                        {isOpen ? "Zwiń" : "Zobacz pytania"}
                                    </span>
                                    <ChevronDown className={`w-6 h-6 text-retro-accent transition-transform duration-300 ${isOpen ? "rotate-180" : ""}`}>
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
                                    </ChevronDown>
                                </div>
                            </div>
                        </div>

                        {/* Rozwijana treść */}
                        <div
                            className={`
                                bg-white px-6 overflow-hidden transition-all duration-300 ease-in-out
                                ${isOpen ? "h-auto py-6 opacity-100" : "max-h-0 py-0 opacity-0"}
                            `}
                        >
                            <div className="space-y-6">
                                {category.faq.map((q, i) => (
                                    <div key={i} className="border-b border-gray-100 last:border-0 pb-2 last:pb-0">
                                        <p className="font-semibold text-gray-800 text-sm">{q.question}</p>
                                        <p className="text-gray-600 text-sm mt-1">{q.answer}</p>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                );
            })}
        </div>
    );
}