// src/app/portfolio/page.tsx
import CategorySlider from '@/components/CategorySlider';
import { COMPANY_NAME } from '@/lib/constants';
import { Metadata } from 'next';
import { title } from 'process';
import  CallToAction  from '@/components/CallToAction';
// JSON-LD DLA PORTFOLIO



export const metadata: Metadata = {
  title: 'Portfolio | Emocje i chwile, do których będziesz wracać',
  description: "Zobacz moje portfolio: magiczne sesje rodzinne, kobiece i ciążowe w Wejherowie. Sprawdź efekty moich prac w studio oraz plenerze. Zapraszam!",
  alternates: {
    canonical: "/portfolio", // Next.js sam doklei domenę dzięki metadataBase
  },
  openGraph: {
    title: `Portfolio - Zaczarowany Kadr`,
    description: "Galeria sesji fotograficznych: od pełnych emocji spotkań rodzinnych po zmysłowe sesje kobiece. Zapraszam do mojego świata fotografii.",
    url: "https://zaczarowanykadr.pl/portfolio",
    type: "website",
    images: [
      {
        url: "/portfolio-og.jpg", 
        width: 1200,
        height: 630,
        alt: "Portfolio Zaczarowany Kadr - Fotograf Wejherowo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Portfolio - Zaczarowany Kadr",
    description: "Galeria profesjonalnych sesji fotograficznych w Wejherowie.",
    images: ["/portfolio-og.jpg"],
  },
};

const PORTFOLIO_DATA = [
  {
    title: "Sesje Rodzinne",
    images: [
      {
        id:"portfolio/sesje_rodzinne/chlopak-bawiacy-sie-w-lesie_uvgpio", 
        alt:"Sesja rodzinna - chlopak bawiacy sie w lesie"
      },
      {
        id:"portfolio/sesje_rodzinne/dziewczynka-siedzaca-na-drzewie_v8ezua", 
        alt:"Sesja rodzinna - dziewczynka siedzaca na drzewie."
      },
        {
        id:"portfolio/sesje_rodzinne/mama-z-synem-serce-dlonie_kikzwy", 
        alt:"Matka z synkiem na sesji rodzinnej z sercem, pamiatka rodzinna."
      },
       {
        id:"portfolio/sesje_rodzinne/mama-z-synem_fsnfy7", 
        alt:"Sesja rodzinna w plenerze , matka z dzieckiem"
      },
        {
        id:"portfolio/sesje_rodzinne/mama-z-synkiem-na-sesji_ahoxmx", 
        alt:"Matka z dzieckiem na sesji rodzinnej w plenerze, pamiatka rodzinna."
      },
          {
        id:"portfolio/sesje_rodzinne/mama-z-synkiem-szukajac-w-lesie_xzahua", 
        alt:"Matka z dzieckiem podziwia nature w lesie"
      },
          {
        id:"portfolio/sesje_rodzinne/mama-z-synkiem-w-plenerze-na-spotkaniu-rodzinnym_j0hmhr", 
        alt:"Spotkanie rodzinne w plenerze , sesja rodzinna."
      },
          {
        id:"portfolio/sesje_rodzinne/mama_z_synem_przytulanie_fziyia", 
        alt:"Mama z dzieckiem przytula sie na plazy, sesja rodzinna."
      },
          {
        id:"portfolio/sesje_rodzinne/matka-z-synem-razem_vtm1l2", 
        alt:"Matka z synkiem w lesie , razem spedzajac czas.Pamiatka rodzinna."
      },
          {
        id:"portfolio/sesje_rodzinne/matka-z-synkiem-bawiaca-sie-w-lesie_mz9vfm", 
        alt:"Matka z synkiem , bawiaca sie w lesie. Sesja rodzinna."
      },
          {
        id:"portfolio/sesje_rodzinne/matka-z-synkiem-na-sesji-rodzinnej-w-lesie_qf2hve", 
        alt:"Matka z synkiem na sesji rodzinnej."
      },
          {
        id:"portfolio/sesje_rodzinne/matka-z-synkiem-razem_b1urmh", 
        alt:"Matka z dzieckiem spedzaja czas razem na sesji dla rodzin. "
      },
          {
        id:"portfolio/sesje_rodzinne/mtka-z-synem-w-lesie_z4c2k7", 
        alt:"Mama z synem w lesie , na sesji rodzinnej."
      },
          {
        id:"portfolio/sesje_rodzinne/rodzenstwo-na-biwaku_ukg72h", 
        alt:"Rodzenstwo na biwaku na sesji rodzinnej."
      },
          {
        id:"portfolio/sesje_rodzinne/rodzina-bawiaca-sie-na-plazy_tmo8aa", 
        alt:"Rodzina na plazy , na sesji rodzinnej."
      },
          {
        id:"portfolio/sesje_rodzinne/rodzina-na-plazy-dobra-zabawa_qcrlbd", 
        alt:"Rodzina spedzajaca czas na plazy , sesja rodzinna u fotografa."
      },
         {
        id:"portfolio/sesje_rodzinne/rodzina-na-plazy_zsldvo", 
        alt:"Rodzina na plazy , idaca brzegiem morza , na sesji u fotografa."
      },
         {
        id:"portfolio/sesje_rodzinne/rodzina-na-sesji_lzgkl4", 
        alt:"Rodzina na sesji , matka z dzieckiem , w plenerze u profesjonalnego fotografa."
      },
         {
        id:"portfolio/sesje_rodzinne/Rodzinna-sesja-dzieci-bawia-sie-na-biwaku_ssjsgp", 
        alt:"Rodzina na sesji , dzieci bawia sie na biwaku.Przygotowuja posilek w piekny sloneczny dzien."
      },
         {
        id:"portfolio/sesje_rodzinne/siostra-i-brat-na-biwaku_ayiwi4", 
        alt:"Siostra z bratem na sesji rodzinnej , usmiechnieci i pelni energi."
      },
         {
        id:"portfolio/sesje_rodzinne/synek-tulacy-mame_bwyixx", 
        alt:"Synek tulacy mame , na sesji rodzinnej.Razem idacy droga."
      },
    ] 
    
  },
   {
    title: "Sesje Kobiece",
    images: [
       {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_fotograficznej_profesjonalne_zdjecia_upvcs2",
        alt:"kobieta na sesji fotograficznej profesjonalne zdjecia"
      },
       {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_w_domowym_studio_zrelaksowana_u_fotografa_ma1gh7",
        alt:"kobieta na sesji w domowym studio fotograficzny, zrelaksowana i usmiechnieta."
      },
       {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_w_stusio_domowym_sesje_kobiece_x1vgay",
        alt:"Kobieta na sesji w studio domowym sesje kobiece"
      },
       {
        id:"portfolio/sesja_kobieca/kobieta_w_masce_na_sesji_pozuje_zmo4ie",
        alt:"kobieta w masce pozuje na profesjonalnej sesji fotograficznej."
      },
       {
        id:"portfolio/sesja_kobieca/kobieta_z_talia_kart_sesja_fotograficzna_fx6ecj",
        alt:"kobieta z talia kart sesja fotograficzna"
      },
       {
        id:"portfolio/sesja_kobieca/kobieta_z_maska_sesja_foto_trojmiasto_v00oyr",
        alt:"kobieta z maska sesja foto trojmiasto"
      },
      {
        id:"portfolio/sesja_kobieca/bialo_czarne_zdjecie_kobiety_pozujacej_w_lesie_usmiechnieta_m1aexa",
        alt:"Bialo-czarne zdjecie z sesji fotograficznej , kobieta pozuje w plenerze"
      },
      {
        id:"portfolio/sesja_kobieca/dziewczyna_nad_jeziorem_sesja_kobieca_yjxada",
        alt:"dziewczyna nad jeziorem sesja kobieca"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_w_masce_przebranie_sesja_kobieca_chap3j",
        alt:"kobieta w masce przebranie sesja kobieca"
      },
      {
        id:"portfolio/sesja_kobieca/dziewczyna_pozuje_na_sesji_foto_sc4yi4",
        alt:"Sesja kobieca - dziewczyna pozuje na sesji foto."
      },
      {
        id:"portfolio/sesja_kobieca/dziewczyna_w_plenerze_na_sesji_okolice_male_trojmiasto_l3kxhz",
        alt:"dziewczyna w plenerze na sesji okolice male trojmiasto"
      },
      {
        id:"portfolio/sesja_kobieca/kobieca_Sesja_w_plenerze_kobieta_idaca_po_ulicy_zabawa_zyezxh",
        alt:"Kobieca Sesja w plenerze kobieta idaca po ulicy zabawa w plenerze , profesjonalna fotografia na kaszubach!"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_lezaca_i_trzymajaca_bukiet_kwiatow_g4hcw6",
        alt:"Kobieta lezaca i trzymajaca bukiet kwiatow , studio fotograficzne w wejherowie"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_domowej_sfzldm",
        alt:"kobieta na sesji domowej, fotografia w trojmiescie."
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_domowej_pozuje_na_krzesle_rtjb08",
        alt:"Kobieta na sesji domowej pozuje na krzesle, profesjonalna fotografia na Kaszubach."
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_fotograficznej_bialo_czarne_ujecie_qh6px6",
        alt:"kobieta na sesji fotograficznej bialo-czarne ujecie."
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_fotograficznej_trzymajaca_kwiaty_eujypf",
        alt:"kobieta na sesji fotograficznej trzymajaca kwiaty,pewnosc siebie w obiektywie"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_u_fotografa_w_wejherowie_fha9ne",
        alt:"Kobieta na sesji u fotografa w wejherowie"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_u_profesjonalnego_fotografa_w_domowym_studio_ra5ttd",
        alt:"kobieta na sesji u profesjonalnego fotografa_w domowym studio"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_na_sesji_w_plenerze_b9kodp",
        alt:"kobieta_na_sesji_w_plenerze, okkolica trojmiasta."
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_nad_jeziorem_mokre_wlosy_wejherowo_asiqm7",
        alt:"kobieta nad jeziorem mokre wlosy wejherowo"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_pozuje_na_sesji_pomorskie_v2gscl",
        alt:"kobieta pozuje na sesji pomorskie"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_skupiona_na_obiektywie_przyblizony_obiektyw_s8crh3",
        alt:"kobieta skupiona na obiektywie przyblizony obiektyw"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_trzymajaca_kwiaty_na_spacerze_x7dhm5",
        alt:"kobieta trzymajaca kwiaty na spacerze"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_wianek_z_kwiatow_sesja_kobieca_ajb0mq",
        alt:"kobieta wianek z kwiatow sesja kobieca"
      },
      {
        id:"portfolio/sesja_kobieca/kobieta_z_kwiatami_na_polanie_na_sesji_kobiecej_cruhlw",
        alt:"kobieta z kwiatami na polanie na sesji kobiecej"
      },
      {
        id:"portfolio/sesja_kobieca/sesja_portret_w_jeziorze_natura_fotograf_xt6owp",
        alt:"sesja portret w jeziorze natura fotograf"
      },
     
    ]
    
  },
  {title: "Sesje narzeczeńskie",
    images: [
      {
        id:"portfolio/sesja_narzeczenska/i_said_yes_powiedzialam_tak_sesja_narzeczenska_qzscr1",
        alt:"I said yes powiedzialam tak sesja narzeczenska na Kaszubach."
      },
      {
        id:"portfolio/sesja_narzeczenska/narzeczeni_fotograf_uwobh0",
        alt:"Sesja fotograficzna w trojmiescie - narzeczeni"
      },
      {
        id:"portfolio/sesja_fotograficzna/narzeczeni_love_fotograf_kadr_x53qua",
        alt:"Narzeczeni - love story - milosc w kadrze"
      },
      {
        id:"portfolio/sesja_narzeczenska/pocalunek_sesja_fotograficzna_wejherowo_i_okolice_tfu0lw",
        alt:"Pocalunek sesja fotograficzna wejherowo i okolice"
      },
      {
        id:"portfolio/sejsa_narzeczenska_pierscionek_zareczynowy_w_kadrze_mlrxgm",
        alt:"Sejsa narzeczenska pierscionek zareczynowy w kadrze"
      },
      {
        id:"portfolio/sesja_narzeczenska_jcs9st",
        alt:"Sesja narzeczenska w domu u fotografa."
      },
      {
        id:"portfolio/sesja_narzeczenska_fajna_zabawa_pozowanie_n2fqar",
        alt:"sesja n0arzeczenska fajna zabawa pozowanie"
      },
      {
        id:"portfolio/sesja_narzeczenska_love_story_yi63n8",
        alt:"sesja_narzeczenska_love_story, historia milosna w obiektywie Zaczarowany Kadr"
      },
      {
        id:"portfolio/sesja_narzeczenska_taniec_sesja_w_domu_ipirm6",
        alt:"Sesja narzeczenska w domu . fotografia w trojmiescie."
      },
      {
        id:"portfolio/sesja_narzeczeska_w_domu_ta5gcb",
        alt:"Szczesliwi narzeczeni na sesji u fotografa w wejherowie. "
      },
      {
        id:"portfoliosesja_narzeczesnka_love_okulary_yqecbn",
        alt:"Sesja narzeczenska z okularami w stylu Love."
      }
    ]
  },
  {
    title:"Sesje ciążowe",
    images:[
      {
        id:"portfolio/sesja_ciazowa_i_noworodkowa/kobieta_w_ciazy_sesja_fotograficzna_q5pwo9",
        alt:"kobieta_w_ciazy_sesja_fotograficzna"
      },
      {
        id:"portfolio/sesja_ciazowa_i_noworodkowa/kobieta_w_ciazy_sesja_w_trojmiescie_mezu7w",
        alt:"kobieta_w_ciazy_sesja_w_trojmiescie."
      },
      {
        id:"portfolio/sesa_ciazowa_usmiechnieta_kobieta_w_ciazy_ah6kq8",
        alt:"sesa_ciazowa_usmiechnieta_kobieta_w_ciazy"
      },
      {
        id:"portfolio/sesja_ciazowa_t8590d",
        alt:"Sesja ciazowa w domowym studio. Kobieta w 9 miesiacu ciazy."
      },
      {
        id:"portfolio/sesja_ciazowa_fotograficzna_trojmiasto_pjb8ok",
        alt:"sesja_ciazowa_fotograficzna_trojmiasto"
      },
      {
        id:"portfolio/sesja_ciazowa_i_noworodkowa_lbva2i",
        alt:"Sesja w domowym studio. W  obiektywie kobieta w ciazy , pelna energii."
      },
      {
        id:"portfolio/sesja_ciazowa_w_domowym_studio_rnh7v2",
        alt:"Kobieta w ciazy. Sesja fotograficzna w Trojmiescie."
      },
      {
        id:"portfolio/sesja_ciazowa_w_wejherwie_i_okolicach_studio_domowe_ijs9up",
        alt:"sesja_ciazowa_w_wejherwie_i_okolicach_studio_domowe"
      }
      ]
  },
  // New session type
  {
    title: "Sesje wizerunkowe",
    images: [
      {
        id:"portfolio/sesja_wizerunkowa/kobieta_pozuje_u_fotografki_xbggww",
        alt:"Sesja wizerunkowa kobiety w kosztuli."
      },
      {
        id:"portfolio/sesja_biznesowa/rozmyslajaca_kobieta_u_foto_r4tgqa",
        alt:"Sesja wizerunkowa w domowym studio w Wejherowie. Fotograf- Zaczarowany Kadr"
      },
      {
        id:"portfolio/sesja-wizerunkowa_mx554s",
        alt:"Sesja wizerunkowa w domowym studio, kobieta pozujaca w studio domowym w Zaczarowany Kadr."
      },
      {
        id:"portfolio/sesja-wizerunkowa_linkedin_be8ui1",
        alt:"Kobieta w okularach na sesji biznesowej u fotografa w Trojmiescie i okolicach."
      },
      {
        id:"portfolio/sesja_wizerunkowa_fotograf_sbsxpl",
        alt:"Sesja wizerunkowa w obiektywie Zaczarowany Kadr."
      }
    ]
  },
  {
    title:"Sesje Okolicznościowe",
    images: [
      {
        id:"portfolio/sesja-okolicznosciowa-para-w-Swieta-Bozego-Narodzenia-studio-domowe_njvwbw",
        alt:"Sesja okolicznościowa w dniu Bożego Narodzenia w studio domowym."
      },
      {
        id:"portfolio/sesja-okolicznosciowa-para-studio-domowe-wejherowo_fpnyvv",
        alt:"Sesja okolicznościowa pary w studio domowym w Wejherowie."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/fotografia-studio-domowe-magiczne-chwile_pxtl9x",
        alt:"Sesja okolicznościowa w domowym studio. Magiczne chwile."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/para-przytula-sie-kadr_k5r749",
        alt:"Para przytulająca się na sesji okolicznościowej w domowym studio."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/calujaca-sie-para-christmas_jpvcxa",
        alt:"Para calujaca sie na sesji okolicznościowej w domowym studio."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/zakochani-w-swieta-studio-fotograficzne-pomorskie_axwr8f",
        alt:"Zakochani w dniu Bożego Narodzenia w studio fotograficznym na Pomorzu."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/usmiechnieta-dziewczyna-w-stroju-mikolajkowym-zaczarowanyKadr_owha70",
        alt:"Uśmiechnięta dziewczyna w stroju mikolajkowym w studio fotograficznym Zaczarowany Kadr."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/sesja-w-studio-domowym-serce-pocalunek_l8dbuu",
        alt:"Sesja okolicznościowa w domowym studio. Serce i pocalunek."
      },
      {
        id:"portfolio/sesja-fotograficzna/para-patrzaca-sobie-w-oczy-fotograf_dckhga",
        alt:"Para patrząca sobie w oczy na sesji fotograficznej w domowym studio."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/mama-z-synkiem-wspolne-chwile-zabawa_hftqnz",
        alt:"Mama z synkiem w wspolnych chwilach zabawy w domowym studio."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/mikolajkowa-sesja-w-studio-zabawa_g9xklj",
        alt:"Mikolajkowa sesja w studio zabawa."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/mama-z-synkiem-studio-domowe-choinka_tjf3mq",
        alt:"Mama z synkiem w studio domowym w dniu Bożego Narodzenia."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/mama-z-synem-dobrze-sie-bawia-studio-foto_aihrb1",
        alt:"Mama z synem dobrze się bawią w studio fotograficznym."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/cukierki-Bozonarodzeniowe-smaki-swiat-studio-fotograficzne_bbrdax",
        alt:"Cukierki Bożonarodzeniowe w smakach świata w studio fotograficznym Zaczarowany Kadr."
      }
      ,
      {
        id:"portfolio/sesja-okolicznosciowa/dziewczyna-w-stroju-mikolaja-studio-wejherowo_ovxu8p",
        alt:"Dziewczyna w stroju mikolaja w studio fotograficznym Wejherowo."
      },
      {
        id:"portfolio/sesja-fotograficzna/choinka-dziewczyna-w-swiatecznym-stroju_b14auq",
        alt:"Dziewczyna w stroju swiatecznym przy choince w studio fotograficznym Zaczarowany Kadr."
      },
      {
        id:"portfolio/sesja-okolicznosciowa/para-zakochanych-w-swieta-sesja-fotograficzna_spwcxs",
        alt:"Para zakochanych w dniu Bożego Narodzenia na sesji fotograficznej w studio Zaczarowany Kadr."
      }
    ]
  }
];

const allImagesSchema = PORTFOLIO_DATA.flatMap((category) =>
  category.images.map((img) => ({
    "@type": "ImageObject",
    "contentUrl": `https://res.cloudinary.com/dixpqoxzu/image/upload/${img.id}`,
    "description": img.alt,
    "caption": img.alt,
    "name": img.alt,
    // POPRAWKA 1: Pisownia przez "s"
    "acquireLicensePage": "https://zaczarowanykadr.pl/kontakt", 
    // POPRAWKA 2: Tylko ID, bez powielania całego obiektu firmy
    "creator": { "@id": "https://zaczarowanykadr.pl/#business" },
    "copyrightHolder": { "@id": "https://zaczarowanykadr.pl/#business" }
  }))
);
  const portfolioSchema = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ImageGallery",
        "@id": "https://zaczarowanykadr.pl/portfolio/#gallery",
        "name": `Portfolio - ${COMPANY_NAME}`,
        "description": "Kolekcja sesji fotograficznych: rodzinnych, kobiecych, narzeczeńskich, ciążowych i wizerunkowych realizowanych w Wejherowie i okolicach.",
        "url": "https://zaczarowanykadr.pl/portfolio",
        "publisher": { "@id": "https://zaczarowanykadr.pl/#business" },
        "about": PORTFOLIO_DATA.map((category) => ({
          "@type": "Thing",
          "name": category.title
        })),
        hasPart: allImagesSchema.flat()
      },
      {
        "@type": "WebPage",
        "@id": "https://zaczarowanykadr.pl/portfolio/#webpage",
        "url": "https://zaczarowanykadr.pl/portfolio",
        "name": `Portfolio - Fotograf Wejherowo - ${COMPANY_NAME}`,
        "isPartOf": { "@id": "https://zaczarowanykadr.pl/#website" },
        "description": "Galeria prac fotograficznych - Zaczarowany Kadr. Zobacz efekty sesji w studio domowym oraz w plenerze.",
        "breadcrumb": {
          "@type": "BreadcrumbList",
          "itemListElement": [
            {
              "@type": "ListItem",
              "position": 1,
              "name": "Strona Główna",
              "item": "https://zaczarowanykadr.pl"
            },
            {
              "@type": "ListItem",
              "position": 2,
              "name": "Portfolio",
              "item": "https://zaczarowanykadr.pl/portfolio"
            }
          ]
        }
      }
    ]
  };
export default function PortfolioPage() {
  return (
    
    <main className="py-30">
      	{/* Skrypt Schema JSON-LD for robots to understand the portfolio page */}
			<script
				type='application/ld+json'
				dangerouslySetInnerHTML={{ __html: JSON.stringify(portfolioSchema) }}
			/>
      <div className='flex flex-col items-center justify-center flex-wrap space-y-6'>
        <span className='font-serif text-4xl text-retro-black text-center'>Moze jestem twoim fotografem?</span>
        <h1 className='text-retro-accent text-3xl text-center italic'>Zobacz efekty mojej pracy i przekonaj sie sam/sama
          
        </h1>
      </div>
      {PORTFOLIO_DATA.map((category) => (
        <section aria-label={`Portfolio kategorii: ${category.title}`} key={category.title} className="mt-12 mb-7 space-y-6">
          <h2 className="text-center px-6 text-4xl text-retro-black">{category.title}</h2>
          {/* KLUCZOWE: Sprawdź czy przekazujesz category.images */}
          <CategorySlider images={category.images} />
          <CallToAction></CallToAction>
        </section>
      ))}
      
    </main>
  );
}