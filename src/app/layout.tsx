import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Montserrat, Space_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import { COMPANY_NAME } from "@/lib/constants";

// FONTS
const serif = Cormorant_Garamond({
subsets: ["latin-ext"],
weight:["600"],
style:["normal", "italic"],
variable: "--font-serif", //CSS variable to use this font elsewhere
});
const sans = Montserrat({
  subsets: ["latin-ext"],
  weight:["300","400","600"],
  variable:"--font-sans", //CSS variable to use this font elsewhere
});
const mono = Space_Mono({
  subsets: ['latin-ext'],
  weight: ['400', '700'],
  variable: "--font-mono",
});
// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

export const metadata: Metadata = {  
  title: `${COMPANY_NAME} | Fotograf Wejherowo`,
  description: "Profesjonalne usługi fotograficzne: sesje zdjęciowe, fotografia portretowa, rodzinna, ślubna i biznesowa. Uchwyć wyjątkowe chwile z Zaczarowanym Kadrem..",
  // CHANGE IMAGE LATER,
  openGraph:{
    title: `${COMPANY_NAME} | Fotografia Wejherowo`,
    images: [
      {
      url: "https://zaczarowany-kadr.pl/og-image.jpg",
      width: 1200,
      height: 630,
      alt: `${COMPANY_NAME} Fotografia`,
      },
    ],
    description: "Profesjonalne usługi fotograficzne: sesje zdjęciowe, fotografia portretowa, rodzinna, ślubna i biznesowa. Uchwyć wyjątkowe chwile z Zaczarowanym Kadrem.",
    url: "https://zaczarowany-kadr.pl",
    siteName: `${COMPANY_NAME}`,
    locale: "pl_PL",
    type: "website",  
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) 
{
  return (
    <html lang="pl">
    <body className="min-h-screen flex flex-col antialiased">
        {/* 1. NAVIGATION */}
        <Navbar />
        {/* 2. MAIN - Wypychacz. flex-grow sprawi, że zajmie całe wolne miejsce, 
            nawet jeśli children będzie puste. pt-20 tworzy lukę na fixed navbar. */}
        <main className={`${serif.variable} ${sans.variable} ${mono.variable} flex-grow pt-17 pb-10 w-full overflow-x-hidden  bg-white md:pt-17.5 md:pb-10`}>
          {children}
        </main>
        {/* 3. FOOTER */}
        <Footer />
      </body>
    </html>
  );
}
