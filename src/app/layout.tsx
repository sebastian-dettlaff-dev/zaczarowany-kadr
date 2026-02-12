import type { Metadata } from "next";
import { Geist, Geist_Mono, Cormorant_Garamond, Montserrat, Space_Mono } from "next/font/google";
import Navbar from "@/components/Navbar"; 
import Footer from "@/components/Footer"; 
import { COMPANY_NAME } from "@/lib/constants";
import { get } from "http";
import { getSchemaDataJSONLD } from "@/lib/jsonLd";
import FloatingActionButton from "@/components/FloatingActionButton";
import CookiesBanner from "@/components/CookiesBanner";
import "./globals.css";
import ReCaptchaWrapper from "@/components/ReCaptchaWrapper";
import { GoogleAnalytics } from '@next/third-parties/google'
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
  // 1. Kluczowe dla poprawnych linków do zdjęć i URL-i
  metadataBase: new URL('https://zaczarowanykadr.pl'),
  
  title: {
    default: `${COMPANY_NAME} | Fotograf Wejherowo`,
    template: `%s | ${COMPANY_NAME}`
  },
  description: "Profesjonalne usługi fotograficzne w Wejherowie: sesje rodzinne, kobiece i wiele innych. Uchwyć wyjątkowe chwile.",
  alternates: {
    canonical: '/',
  },
//  for social media and SEO
  openGraph: {
    title: `${COMPANY_NAME} | Fotografia Wejherowo`,
    description: "Profesjonalne usługi fotograficzne w Wejherowie. Sesje z duszą.",
    url: "https://zaczarowanykadr.pl",
    siteName: COMPANY_NAME,
    images: [
      {
        url: "/og-image.jpg", // Teraz dzięki metadataBase Next sam zrobi z tego https://...
        width: 1200,
        height: 630,
        alt: `${COMPANY_NAME} Fotografia`,
      },
    ],
    locale: "pl_PL",
    type: "website",
  },

  //Twitter
  twitter: {
    card: 'summary_large_image',
    title: `${COMPANY_NAME} | Fotografia Wejherowo`,
    description: "Profesjonalne usługi fotograficzne w Wejherowie. Sesje z duszą.",
    images: ['/og-image.jpg'],
  },

  //robots
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>)
{
  const businessSchema = getSchemaDataJSONLD();

  
  return (
    <html lang="pl">
      <head>
     <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(businessSchema) }} />
      </head>
    <body className="min-h-screen flex flex-col antialiased">
      <ReCaptchaWrapper>
        
        {/* 1. NAVIGATION */}
        <Navbar />
        {/* 2. MAIN - Wypychacz. flex-grow sprawi, że zajmie całe wolne miejsce, 
            nawet jeśli children będzie puste. pt-20 tworzy lukę na fixed navbar.  md:pt-17.5 pt-17*/}
        <main className={`${serif.variable} ${sans.variable} ${mono.variable} flex-grow  w-full overflow-x-hidden bg-white`}>
          {children}
        </main>
        <FloatingActionButton />
        {/* 3. FOOTER */}
        <Footer />
        <CookiesBanner />
      </ReCaptchaWrapper>
      </body>
      <GoogleAnalytics gaId="G-MQN9DMJDCQ" />
    </html>
  );
}
