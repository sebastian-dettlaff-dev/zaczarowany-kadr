import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar"; // Import Navbar component
import Footer from "@/components/Footer"; // Import Footer component
import { COMPANY_NAME } from "@/lib/constants";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        {/*  Navbar TUTAJ - będzie widoczny na każdej podstronie */}
        <Navbar />


        {/* Children to treść Twoich podstron (np. page.tsx) */}
        {children}
        <Footer />
      </body>
    </html>
  );
}
