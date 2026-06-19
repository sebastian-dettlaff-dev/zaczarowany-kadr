import { SEO_KEYWORDS, SITE_URL } from "@/lib/constants";

export type LocationLandingSlug =
  | "wejherowo"
  | "reda"
  | "rumia"
  | "gdynia"
  | "gdansk"
  | "trojmiasto"
  | "puck"
  | "bolszewo"
  | "goscicino";

export interface LocationLandingContent {
  slug: LocationLandingSlug;
  pageSlug: string;
  placeName: string;
  breadcrumbLabel: string;
  footerLinkLabel: string;
  h1: string;
  metaTitle: string;
  metaDescription: string;
  keywordTags: string[];
  areaServed: string;
  paragraphs: string[];
}

export const LOCATION_LANDINGS: Record<LocationLandingSlug, LocationLandingContent> = {
  wejherowo: {
    slug: "wejherowo",
    pageSlug: "fotografia-wejherowo",
    placeName: "Wejherowie",
    breadcrumbLabel: "Fotografia Wejherowo",
    footerLinkLabel: "Fotografia Wejherowo",
    h1: "Fotograf w Wejherowie — naturalne sesje z duszą",
    metaTitle: "Fotograf Wejherowo | Sesje rodzinne, kobiece i ciążowe",
    metaDescription:
      "Profesjonalna fotografia w Wejherowie i na Kaszubach. Sesje rodzinne, kobiece, ciążowe i okolicznościowe w plenerze lub domowym studio. Zaczarowany Kadr — Klaudia.",
    keywordTags: [
      "fotograf wejherowo",
      "sesja zdjęciowa wejherowo",
      "fotografia rodzinna wejherowo",
      "sesja kobieca kaszuby",
    ],
    areaServed: "Wejherowo",
    paragraphs: [
      "Wejherowo to moje miejsce na mapie — tu mieszkam, tu pracuję i tu najlepiej znam światło, pory dnia oraz zakątki, które pięknie wyglądają na zdjęciach. Jako fotografka w Wejherowie realizuję sesje rodzinne, kobiece, ciążowe, noworodkowe, narzeczeńskie i okolicznościowe, stawiając na naturalność, emocje i swobodę przed obiektywem. Nie musisz umieć pozować — poprowadzę Cię krok po kroku, tak abyś czuła się komfortowo, a zdjęcia opowiadały Waszą prawdziwą historię.",
      "W ofercie Zaczarowanego Kadru znajdziesz sesje w plenerze — w parku miejskim, przy alejach lipowych, w okolicach Kalwarii Wejherowskiej czy na kaszubskich łąkach tuż za miastem — oraz w moim domowym studio, gdzie panuje spokojna, ciepła atmosfera idealna na sesje z maluszkiem lub kobiece portrety. Dojeżdżam też do klientów na terenie Wejherowa i okolic; do 30 kilometrów dojazd jest gratis, co dla wielu rodzin z okolicznych dzielnic jest wygodnym rozwiązaniem bez dodatkowych kosztów.",
      "Sesja rodzinna w Wejherowie to nie sztywna póza przy ścianie, lecz wspólny czas: spacer, zabawa z dziećmi, przytulenie na ławce, śmiech, który sam wchodzi w kadr. Lubię uchwycić te ulotne momenty, które po latach stają się najcenniejszą pamiątką. Pracuję zarówno z małymi dziećmi, jak i z dorosłymi rodzinami wielopokoleniowymi — każda sesja jest dopasowana do Waszego tempa i charakteru.",
      "Sesje kobiece w Wejherowie cieszą się ogromnym zainteresowaniem, bo to chwila tylko dla Ciebie — bez pośpiechu, bez oceniania sylwetki, z pełnym wsparciem w doborze stylizacji i miejsca. Mogą być delikatne i romantyczne albo pewne siebie i zmysłowe — zależy od Twojej wizji. Współpracuję z zaufaną wizażystką na życzenie, a przed sesją przeprowadzam krótką konsultację, żebyś wiedziała, czego się spodziewać i jak się przygotować.",
      "Fotografia ciążowa i noworodkowa w Wejherowie to moja szczególna pasja. Brzuszek w plenerze o złotej godzinie, czułe kadry we dwoje w domu, pierwsze dni maluszka w bezpiecznym, ciepłym otoczeniu — wszystko w rytmie, który szanuje Wasz komfort. Noworodki fotografuję najlepiej w pierwszych tygodniach życia, gdy sen i spokój sprzyjają delikatnym, naturalnym ujęciom.",
      "Sesje okolicznościowe — chrzty, komunie, rocznice, jubileusze — realizuję w formie luźnego reportażu. Nie ustawiam sztucznych scen, tylko towarzyszę wydarzeniu, łapiąc szczery uśmiech dziadków, wzruszenie rodziców i radość dzieci. Po sesji otrzymujesz starannie wyselekcjonowaną galerię online; obróbka zdjęć jest wliczona w cenę pakietu, a czas oczekiwania na gotowe fotografie wynosi zwykle do dwunastu dni od wyboru ujęć.",
      "Wejherowo i okolice Kaszub oferują różnorodne tła przez cały rok: wiosenne zielenie, letnie słońce nad polami, jesienne kolory liści i zimowa, miękka poświata, która świetnie sprawdza się w portretach. Dzięki temu sesja może być zaplanowana niezależnie od pory roku — doradzę termin i lokalizację, które pasują do charakteru Waszej historii.",
      "Wielu klientów z Wejherowa trafia do mnie z polecenia — cenią luźną atmosferę, jasną komunikację i to, że nie trzeba być „modelką”, żeby wyglądać pięknie na zdjęciach. To dla mnie największa nagroda. Jeśli szukasz fotografa w Wejherowie, który łączy profesjonalizm z ludzkim podejściem, zapraszam do kontaktu. Chętnie opowiem o pakietach MINI, STANDARD i PREMIUM oraz pomogę wybrać sesję dopasowaną do okazji.",
      "Sesje narzeczeńskie i wizerunkowe również realizuję na terenie Wejherowa — od romantycznych spacerów po plenery biznesowe pod kadr reklamowy lub LinkedIn. Dla par planujących ślub to świetny sposób, by oswoić się z obiektywem przed weselem, a dla przedsiębiorców — na odświeżenie wizerunku w sieci.",
      "Zaczarowany Kadr to nie tylko usługa, ale relacja: słucham, proponuję, szanuję Wasz czas i prywatność. Galeria online jest zabezpieczona hasłem, a wszystkie ustalenia — termin, miejsce, styl — ustalamy przed sesją mailowo lub telefonicznie. Jeśli marzysz o zdjęciach, które naprawdę przypominają Cię o tym, kim jesteś i z kim dzielisz życie, Wejherowo i okolice to idealna sceneria, a ja z przyjemnością pomogę Ci je stworzyć.",
      "Wielu moich klientów z Wejherowa pyta o różnicę między pakietami MINI, STANDARD i PREMIUM — chodzi przede wszystkim o czas trwania sesji oraz liczbę zdjęć po obróbce. Na stronie cennika znajdziesz przejrzyste zestawienie, a podczas konsultacji doradzę, który wariant najlepiej pasuje do rodzaju sesji i liczby osób w kadrze. Nie ma tu ukrytych kosztów: w cenie masz przygotowanie, samą sesję, dostęp do galerii online i profesjonalną obróbkę wybranych ujęć.",
      "Sezonowość ma znaczenie — wiosenne sesje w Wejherowie często odbywają się wśród kwitnących drzew w parku, letnie na złocistych łąkach, jesienne w ciepłych swetrach i liściach, zimowe w delikatnym, miękkim świetle, które nadaje zdjęciom intymny charakter. Nie musisz czekać na idealną pogodę — zawsze mamy plan awaryjny: sesja w domu, w moim studio albo pod daszkiem, gdy niebo na chwilę się zachmurzy.",
      "Fotografia okolicznościowa w Wejherowie i okolicznych miejscowościach — Luzino, Gniewino, Szemud — to dla mnie sposób na dokumentowanie ważnych momentów bez reżyserowania całego dnia. Chrzest, komunia, rocznica ślubu czy urodziny babci — każde wydarzenie zasługuje na pamiątkę, która oddaje atmosferę, a nie tylko listę gości w szeregu.",
      "Jeśli dopiero rozważasz pierwszą sesję zdjęciową i czujesz niepewność — to normalne. Większość osób, z którymi pracuję, mówi na początku „nie umiem stawać przed kamerą”. Po kilkunastu minutach okazuje się, że rozmowa, muzyka z telefonu albo wspólna zabawa z dziećmi całkowicie rozbrajają stres. Właśnie dlatego stawiam na naturalność, a nie na wymuszony uśmiech.",
      "Zapraszam do kontaktu mieszkańców Wejherowa i całych Kaszub — zarówno rodziny, kobiety szukające chwili dla siebie, pary przed ślubem, jak i przedsiębiorców potrzebujących odświeżenia wizerunku. Razem ustalimy termin, miejsce i rodzaj sesji, która zostanie z Wami na lata — w albumie, na ścianie w salonie albo w ramce na biurku.",
      "Kalwaria Wejherowska, park miejski z alejami lipowymi i okolice osiedli to miejsca, które fotografuję regularnie — znam je w różnych porach dnia i roku. Dzięki temu nie tracimy czasu na szukanie „idealnej łąki” podczas sesji; przychodzimy i od razu pracujemy nad emocjami, a nie nad logistyką. To szczególnie ważne przy sesjach z małymi dziećmi, które mają ograniczoną cierpliwość.",
      "Fotografia wizerunkowa w Wejherowie to propozycja dla osób budujących markę osobistą — trenerki, kosmetyczki, prawniczki, architektki wnętrz. Sesja może odbyć się w plenerze przy nowoczesnej architekturze miasta albo w Twoim biurze, jeśli wolisz kontekst zawodowy. Zdjęcia są naturalne, ale profesjonalne — bez sztywnego korporacyjnego uśmiechu.",
      "Niezależnie od tego, czy mieszkasz w centrum Wejherowa, na osiedlu czy w okolicznej wsi — sesja może odbyć się tam, gdzie czujesz się najlepiej. To właśnie lokalna fotografia ma sens: zdjęcia w miejscu, które jest częścią Twojej codzienności, a nie anonimowym tłem z innego końca Polski.",
    ],
  },

  reda: {
    slug: "reda",
    pageSlug: "sesje-zdjeciowe-reda",
    placeName: "Redzie",
    breadcrumbLabel: "Sesje zdjęciowe Reda",
    footerLinkLabel: "Sesje zdjęciowe Reda",
    h1: "Sesje zdjęciowe w Redzie — plener, rodzina i sesje kobiece",
    metaTitle: "Sesje zdjęciowe Reda | Fotograf Reda i okolice",
    metaDescription:
      "Sesje rodzinne, kobiece i ciążowe w Redzie i okolicy. Naturalna fotografia w plenerze nad rzeką i w kaszubskim krajobrazie. Dojazd do Redy gratis w promieniu 30 km.",
    keywordTags: [
      "sesje zdjęciowe reda",
      "fotograf reda",
      "fotografia rodzinna reda",
      "sesja plenerowa reda",
    ],
    areaServed: "Reda",
    paragraphs: [
      "Reda leży w samym sercu Małego Trójmiasta — między Wejherowem a aglomeracją nadmorską — i oferuje połączenie miejskiego komfortu z bliskością lasów, rzeki oraz spokojnych osiedlowych zakątków. Jako fotografka realizująca sesje zdjęciowe w Redzie chętnie wykorzystuję tę różnorodność: bulwary nad Redą, zielone ścieżki, nowoczesne osiedla z przestrzenią dla dzieci oraz okolice łąk, gdzie światło zachodu tworzy magiczny klimat.",
      "Sesje rodzinne w Redzie planuję tak, aby były przyjemnością, a nie obowiązkiem. Dzieci mogą biegać, bawić się, opowiadać historie — ja jestem obok i zapisuję to, co autentyczne. Rodzice często mówią, że bałi się, iż maluch nie wytrzyma przy obiektywie, a kończy się na uśmiechach i ulubionych kadrach z piaskiem na butach albo liściem na czapce. To właśnie takie zdjęcia najlepiej oddają charakter rodziny.",
      "Reda to także świetne miejsce na sesję kobiecą: spokojniejsze niż centrum dużego miasta, z łatwym dojazdem i wieloma miejscami, gdzie można poczuć się swobodnie. Sesja może odbyć się w plenerze — w sukience na tle zieleni — albo u Ciebie w domu, jeśli wolisz intymną atmosferę. Przed spotkaniem omawiamy styl, ubiór i oczekiwania, żebyś czuła się pewnie od pierwszej minuty.",
      "Fotografia ciążowa w Redzie i okolicach często łączy spacer z krótkimi przystankami w miejscach z ładnym światłem. Nie musisz stać sztywno — dotykasz brzucha, śmiejesz się z partnerem, patrzysz w dal. Tak powstają zdjęcia pełne emocji, które za kilka lat przypomną Ci, jak wyglądała ta wyjątkowa podróż do macierzyństwa.",
      "Dla mieszkańców Redy ważny jest czas i logistyka — rozumiem to doskonale. Dlatego oferuję dojazd do klienta bez dodatkowej opłaty w promieniu trzydziestu kilometrów od Wejherowa, co obejmuje całą Redę oraz sąsiednie miejscowości. Możemy zrobić sesję u Ciebie w salonie, na podwórku albo wyjść na wspólny spacer — Ty wybierasz, co jest wygodniejsze.",
      "Sesje okolicznościowe — chrzciny, komunie, rocznice — w Redzie i okolicznych kościołach oraz salach odbywają się przez cały sezon. Pracuję w stylu reportażowym: nie przerywam ceremonii, nie ustawiam gości na siłę, tylko dyskretnie dokumentuję przebieg uroczystości i spotkania rodzinnego. Efekt to album pełen życia, a nie sztywnych póz.",
      "Noworodkowe i niemowlęce sesje lifestyle w Redzie to kolejna część mojej oferty. Ciepłe światło z okna, kocyk, ulubiona zabawka, pierwsze uśmiechy — wszystko w rytmie maluszka. Sesje w domu klienta są szczególnie wygodne dla świeżo upieczonych rodziców, którzy nie chcą wychodzić z dzieckiem daleko.",
      "Reda szybko się rozwija, a wraz z nią rośnie liczba rodzin, które szukają lokalnego fotografa znającego okolicę. Nie musisz jechać do Gdańska ani rezerwować wielkiego studia — profesjonalną sesję możesz mieć na miejscu, z osobą, która zna światło nad kaszubskimi polami i wie, gdzie o poranku jest najmniej przechodniów.",
      "Współpraca ze mną to przejrzyste pakiety cenowe, konsultacja przed sesją, galeria online do wyboru zdjęć i termin obróbki jasno określony w regulaminie. Jeśli szukasz sesji zdjęciowych w Redzie — rodzinnych, kobiecych, ciążowych lub okolicznościowych — napisz lub zadzwoń. Razem zaplanujemy termin, który pasuje do Twojego kalendarza i pogody.",
      "Naturalna fotografia to mój styl: bez filtrów na siłę, bez sztucznego perfekcjonizmu, za to z dbałością o kolory, światło i emocje. Reda i jej okolice dają ku temu wspaniałe tło — a ja pomogę Ci je wykorzystać, żeby zdjęcia przez lata cieszyły oczy na ścianie, w albumie lub w ramce na komodzie.",
      "Mieszkańcy Redy często łączą sesję rodzinną z okazją — roczek dziecka, powrót do formy po ciąży, wspólne zdjęcia z dziadkami, którzy przyjeżdżają na weekend. Taki dzień może być lekki i bez presji: krótki spacer, ulubione lody po zdjęciach, a ja towarzyszę w tle i zapisuję to, co dzieje się naprawdę, a nie to, co wyreżyserowaliśmy na siłę.",
      "W Redzie i okolicach — Rekowie, Kazimierzu, Koleczkowie — znam plenery, gdzie światło jest miękkie o poranku i gdzie wieczorem widać piękne refleksy nad wodą. Dzięki temu nie tracimy czasu na błądzenie; od pierwszych minut sesji jesteśmy w miejscu, które współgra z Waszym charakterem i strojem.",
      "Sesje wizerunkowe dla lokalnych przedsiębiorczyń z Redy — kosmetyczek, fryzerek, trenerek fitness — realizuję w plenerze lub w domu, z naturalnym makijażem i światłem, które podkreśla autentyczność, a nie sztuczną perfekcję. Dobre zdjęcie to wizytówka, która buduje zaufanie jeszcze przed pierwszą wiadomością od klientki.",
      "Jeśli zastanawiasz się, czy sesja zdjęciowa w Redzie to dobry pomysł — napisz. Odpowiem na pytania o przygotowanie, ubiór, czas trwania i pakiety cenowe. Pierwszy krok to rozmowa, a dopiero potem rezerwacja terminu, który pasuje do Twojego kalendarza i pogody na Pomorzu.",
      "Reda jako część Małego Trójmiasta łączy wygodę komunikacji z Pomorską Koleją Metropolitalną z kameralnym charakterem. Wielu moich klientów dojeżdża na sesję pociągiem z Gdyni albo Gdańska, a ja czekam w ustalonym plenerze z gotowym planem na wypadek deszczu — wtedy przenosimy się pod daszek albo do kawiarni z dużymi oknami i pięknym światłem.",
      "Sesje narzeczeńskie w Redzie i okolicy cieszą się popularnością wśród par, które chcą uniknąć tłumów nad morzem, a jednak mieć zdjęcia pełne światła i zieleni. Spacer wzdłuż rzeki, most, trawa, zachód — proste elementy, które na zdjęciach wyglądają ponadczasowo i pasują do zaproszeń ślubnych oraz albumu weselnego.",
      "Dbam o to, by każda sesja w Redzie kończyła się doświadczeniem, z którego jesteście zadowoleni — nie tylko zdjęciami, ale też samym przebiegiem dnia. To filozofia Zaczarowanego Kadru: fotografia ma służyć ludziom, a nie odwrotnie.",
      "Reda to miasto, w którym rodzi się wiele pięknych rodzinnych historii — pierwsze kroki dziecka na osiedlowym placu zabaw, roczek urodzinowy w ogrodzie, babci i dziadkowie na wspólnym spacerze. Sesja zdjęciowa może być pretekstem, by na chwilę zwolnić i być razem — a ja zadbam o to, by te chwile trafiły na zdjęcia, które naprawdę coś znaczą.",
      "Zapraszam mieszkańców Redy i całego powiatu wejherowskiego — na sesje rodzinne, kobiece, ciążowe, narzeczeńskie i okolicznościowe. Napisz do mnie, a wspólnie zaplanujemy termin, miejsce i pakiet dopasowany do Waszej okazji i budżetu.",
      "W Redzie spotykam też wiele par, które po latach wracają na sesję rodzinną — z nowym dzieckiem, z nastolatkami albo z psami, które stały się częścią rodziny. To piękne, bo zdjęcia tworzą ciągłość historii, a nie jednorazowy „strzał do albumu”.",
      "Każda sesja w Redzie zaczyna się od rozmowy — chcę poznać Waszą historię, zanim włączę aparat. To podstawa naturalnych zdjęć i powód, dla którego klienci wracają na kolejne etapy życia: ciąża, noworodek, rodzina wielodzietna, rocznice.",
    ],
  },

  rumia: {
    slug: "rumia",
    pageSlug: "fotografia-profesjonalna-rumia",
    placeName: "Rumi",
    breadcrumbLabel: "Fotografia profesjonalna Rumia",
    footerLinkLabel: "Fotografia Rumia",
    h1: "Fotografia profesjonalna w Rumii — sesje rodzinne i kobiece",
    metaTitle: "Fotografia profesjonalna Rumia | Fotograf Rumia",
    metaDescription:
      "Profesjonalna fotografia w Rumii: sesje rodzinne, kobiece, ciążowe i wizerunkowe. Plener, dom i okolice Janowa. Zaczarowany Kadr — dojazd do Rumii w cenie.",
    keywordTags: [
      "fotografia profesjonalna rumia",
      "fotograf rumia",
      "sesja rodzinna rumia",
      "sesja kobieca rumia",
    ],
    areaServed: "Rumia",
    paragraphs: [
      "Rumia to dynamicznie rozwijające się miasto między Wejherowem a Gdynią — z łatwym dojazdem koleją i samochodem, z terenami zielonymi, osiedlami przyjaznymi rodzinom oraz bliskością Trójmiejskiego Parku Krajobrazowego. Profesjonalna fotografia w Rumii, którą oferuję w Zaczarowanym Kadrze, łączy to wszystko: wygodę spotkania na miejscu z jakością obrazu i podejściem nastawionym na relacje, a nie na sztywną produkcję.",
      "Sesje rodzinne w Rumii często zaczynamy od rozmowy o tym, kim jesteście jako rodzina — czy lubicie aktywność, czy spokojne spacery, czy może grę na podwórku. Na tej podstawie wybieram lokalizację: park, skwer, las w Janowie albo plener nad stawem. Dzieci nie muszą „współpracować” w sensie pozowania — wystarczy, że są sobą, a ja złapię te momenty, które chcecie zachować.",
      "Rumia jest świetnym punktem wyjścia także dla sesji narzeczeńskich — przed ślubem wiele par chce mieć wspólne zdjęcia bez presji dnia weselnego. Spacer po okolicy, kawa na ławce, przytulenie na tle zachodzącego słońca — to proste sceny, które na zdjęciach wyglądają ponadczasowo i naturalnie.",
      "Sesje kobiece w Rumii realizuję zarówno w plenerze, jak i w domowym studio w Wejherowie — dojazd dla mieszkańców Rumii jest wliczony w standardową ofertę do trzydziestu kilometrów. To ważne, bo wiele klientek ceni sobie możliwość sesji bez dalekich podróży i bez ukrytych kosztów. Przed sesją wysyłam wskazówki dotyczące ubioru, makijażu i przygotowania psychicznego — żeby dzień zdjęciowy był przyjemnością.",
      "Fotografia ciążowa i noworodkowa w Rumii cieszy się dużym zainteresowaniem wśród młodych rodzin, które osiedlają się tu ze względu na infrastrukturę i spokój. Sesje brzuszkowe w plenerze, lifestyle w domu, delikatne kadry z noworodkiem na łóżku rodziców — każda forma jest dostosowana do Waszego komfortu i etapu, na którym jesteście.",
      "Sesje wizerunkowe i biznesowe dla przedsiębiorców z Rumii to propozycja dla osób prowadzących firmy lokalne, pracujących zdalnie lub budujących markę osobistą. Neutralne tło, naturalne światło, kilka zmian stroju — i masz zdjęcia do strony, social mediów i wizytówki bez sztucznego korporacyjnego klimatu.",
      "Okolicznościowe reportaże — chrzty, komunie, urodziny — w Rumii i okolicznych parafiach fotografuję dyskretnie, z szacunkiem dla liturgii i gości. Nie używam agresywnego flasha tam, gdzie nie wolno, nie przeszkadzam kapłanowi ani rodzinie — po prostu jestem obecna, żeby później wrócić do wspomnień przez zdjęcia.",
      "Rumia łączy z miastami Trójmiasta — wielu klientów pyta, czy warto jechać nad morze na sesję. Odpowiedź brzmi: tak, jeśli marzycie o plaży, ale nie musicie — lokalne plenery w Rumii i Janowie dają piękne rezultaty bez tłumów turystów i z łatwiejszym parkowaniem. Doradzę, co ma sens przy Waszej wizji i porze roku.",
      "W Zaczarowanym Kadrze stawiam na przejrzystość: pakiety MINI, STANDARD i PREMIUM opisane w cenniku, zaliczka rezerwująca termin, możliwość dwukrotnego przełożenia sesji w razie losowych zdarzeń. Po sesji dostajesz dostęp do galerii online, wybierasz ulubione ujęcia, a ja zajmuję się obróbką w moim charakterystycznym, ciepłym stylu kolorystycznym.",
      "Jeśli szukasz fotografii profesjonalnej w Rumii — kogoś, kto łączy technikę z empatią — zapraszam do kontaktu. Chętnie opowiem o sesjach rodzinnych, kobiecych, ciążowych i okolicznościowych oraz zaproponuję termin i miejsce dopasowane do Waszej historii. Rumia to dobre miejsce na piękne zdjęcia — a ja pomogę Ci je zrealizować bez stresu.",
      "Rumia i Janowo oferują plenery, które sprawdzają się przez cały rok — od zielonych ścieżek leśnych po otwarte przestrzenie z widokiem na wzgórza. Dla sesji rodzinnej z dziećmi w wieku szkolnym to często lepszy wybór niż zatłoczona plaża: jest miejsce na bieg, skok i śmiech, a ja mam przestrzeń, by łapać te ulotne momenty bez walki z tłumem w tle.",
      "Wielu klientów z Rumii decyduje się na sesję kobiecą jako prezent dla siebie — urodzinowy, świąteczny albo „dlaczego nie” bez specjalnej okazji. To inwestycja w dobre wspomnienie i poczucie, że zasługujesz na chwilę tylko dla siebie. Pomagam dobrać sukienkę, kolor i miejsce tak, byś czuła się pewnie, a nie oceniana.",
      "Reportaże z chrztu i komunii w rumińskich parafiach prowadzę z dyskrecją — nie stoję przy samym ołtarzu w sposób, który przeszkadza, ale jestem tam, gdzie dzieją się emocje: uścisk rodziców, uśmiech dziecka, łzy wzruszenia. Po uroczystości często zostaję na krótką sesję rodzinną na zewnątrz kościoła, gdy światło jest jeszcze piękne.",
      "Zapraszam do współpracy mieszkańców Rumii i całego Małego Trójmiasta — sesje rodzinne, kobiece, ciążowe, narzeczeńskie i okolicznościowe w naturalnym stylu Zaczarowanego Kadru. Napisz lub zadzwoń — wspólnie zaplanujemy dzień, który zakończy się zdjęciami, do których będziesz chciała wracać.",
      "Rumia i Janowo to miejsca, gdzie łatwo połączyć sesję z codziennym rytmem życia — po zdjęciach wracasz do domu na obiad, dzieci nie są przemęczone długą podróżą, a Ty nie planujesz całego dnia pod fotografa. Taka wygoda ma ogromne znaczenie dla rodzin z małymi dziećmi i dla kobiet w ciąży.",
      "W moim portfolio znajdziesz sesje z Rumii w różnych porach roku — od wiosennych kwiatów po jesienne liście i zimowe swetry na tle mglistego poranka. Każda pora daje inny klimat, a ja pomagam wybrać termin, który współgra z charakterem Waszej sesji i planowanym strojem.",
      "Profesjonalna fotografia w Rumii nie wymaga wielkiego studia ani drogiej produkcji — wystarczy dobre światło, szczera relacja i miejsce, które coś dla Was znaczy. Resztą zajmę się ja: kadrem, techniką, obróbką i dostarczeniem galerii online gotowej do wyboru ulubionych ujęć.",
      "Rumia to miasto, w którym spotykam rodziny na każdym etapie życia — od sesji ciążowej, przez noworodkową, po rodzinną z kilkulatkiem biegającym po łące. Każdy etap wymaga innego tempa i innego podejścia, a ja dostosowuję się do Was, a nie odwrotnie.",
      "Jeśli szukasz fotografa w Rumii — naturalnego, ciepłego i profesjonalnego — Zaczarowany Kadr to odpowiedź. Odezwij się, a opowiem, jak możemy wspólnie stworzyć zdjęcia, które zostaną z Wami na długie lata.",
      "Sesje w Rumii często łączę z krótką konsultacją online — omawiamy ubiór, miejsce i oczekiwania, żeby dzień zdjęciowy był bez niespodzianek. Dla zapracowanych rodzin z Małego Trójmiasta to oszczędność czasu i pewność, że wiedzą, czego się spodziewać.",
      "Rumia zasługuje na lokalnego fotografa, który traktuje każdą sesję indywidualnie — nie szablonowo. Właśnie tak pracuję: słucham, proponuję i fotografuję Waszą prawdziwą historię, a nie gotowy scenariusz z internetu.",
      "Od pierwszej wiadomości do gotowej galerii jesteś pod opieką jednej osoby — bez pośredników i bez przekazywania sprawy asystentowi w dniu sesji. Dla mieszkańców Rumii to pewność, że ktoś, kto planował spotkanie, też je przeprowadzi.",
    ],
  },

  gdynia: {
    slug: "gdynia",
    pageSlug: "fotograf-gdynia",
    placeName: "Gdyni",
    breadcrumbLabel: "Fotograf Gdynia",
    footerLinkLabel: "Fotograf Gdynia",
    h1: "Fotograf Gdynia — sesje nad morzem i w miejskich plenerach",
    metaTitle: "Fotograf Gdynia | Sesje rodzinne i kobiece nad morzem",
    metaDescription:
      "Fotograf Gdynia — sesje rodzinne, narzeczeńskie i kobiece na Skwerze Kościuszki, klifie i w parkach. Naturalna fotografia z dojazdem z Wejherowa.",
    keywordTags: [
      "fotograf gdynia",
      "sesja zdjęciowa gdynia",
      "sesja nad morzem gdynia",
      "fotografia rodzinna gdynia",
    ],
    areaServed: "Gdynia",
    paragraphs: [
      "Gdynia to miasto, które zachwyca kontrastem — morskie panoramy, klif w Orłowie, modernistyczna zabudowa Śródmieścia, spokojne parki i tętniący życiem port. Jako fotografka realizująca sesje w Gdyni chętnie wykorzystuję tę różnorodność: romantyczne zdjęcia nad falochronem, rodzinne spacery po Kępie Redłowskiej, kobiece sesje w złotym świetle na skwerze albo biznesowe portrety w architektonicznych wnętrzach miasta.",
      "Sesje rodzinne w Gdyni planuję z uwzględnieniem wieku dzieci i pogody — nad morzem wiatr bywa kapryśny, ale daje piękne, żywe zdjęcia z rozwianymi włosami i śmiechem. Dla najmłodszych mam w zanadrzu parki i place zabaw, gdzie mogą się rozładować energię, a ja będę gotowa złapać szczery uśmiech. Nie chodzi o idealną kadrę za wszelką cenę, tylko o Waszą prawdziwą rozmowę i zabawę.",
      "Gdynia jest popularnym wyborem na sesje narzeczeńskie — para na tle morza, pierścień na pierwszym planie, spacer po molo w Orłowie. Taki klimat sprzedaje emocje, nie tylko widok. Pomagam w doborze stroju, który nie zlewa się z tłem, i w wyborze pory dnia, kiedy plaża nie jest zatłoczona.",
      "Sesje kobiece w Gdyni mogą być zmysłowe i morskie — sukienka na klifie, boso na piasku — albo miejskie i eleganckie przy modernistycznych fasadach. Wszystko zależy od Twojej wizji. Przed sesją rozmawiamy o tym, co chcesz poczuć patrząc na zdjęcia za rok — pewność siebie, lekkość, nostalgię — i do tego dobieram styl pracy.",
      "Fotografia ciążowa w Gdyni często łączy plener nad wodą z cieplejszymi ujęciami w parku lub w domu klienta. Brzuszek na tle morza to klasyk, ale nie jedyny wariant — równie pięknie wypada sesja w trawie na Kępie albo wśród drzew, gdy szukamy intymności z dala od wiatru.",
      "Dojazd z Wejherowa do Gdyni zajmuje krótko, a w ramach standardowej oferty do trzydziestu kilometrów nie doliczam opłaty za podróż — dla mieszkańców Gdyni to wygodna opcja współpracy z fotografką z Kaszub, która zna region i nie traktuje dojazdu jako dodatkowej „niespodzianki” na fakturze.",
      "Sesje okolicznościowe i reportażowe w Gdyni — chrzty w kościołach Śródmieścia, komunie, urodziny w restauracjach nad portem — realizuję w stylu dokumentalnym. Jestem dyskretna, używam sprzętu, który radzi sobie z trudnym światłem w kościołach i salach, a efekt to spójna opowieść z całego dnia.",
      "Gdynia przyciąga też osoby szukające sesji wizerunkowych — przedsiębiorcy z branży morskiej, IT, usług lokalnych. Neutralne tło, profesjonalne światło, kilka minut na rozluźnienie przed obiektywem — i zdjęcia, które budują zaufanie w internecie.",
      "W sezonie letnim terminy nad morzem rezerwuję z wyprzedzeniem, ale zima i jesień w Gdyni też dają wyjątkowe kadry — szare niebo, grube swetry, gorąca herbata w termosie na zdjęciach rodzinnych. Nie trzeba czekać na lipiec, żeby mieć piękną sesję w tym mieście.",
      "Jeśli szukasz fotografa w Gdyni — kogoś, kto łączy nadmorski klimat z naturalnym stylem pracy — zapraszam do Zaczarowanego Kadru. Napisz, jaka sesja Cię interesuje: rodzinna, kobieca, ciążowa, narzeczeńska czy okolicznościowa — wspólnie zaplanujemy miejsce i termin, który odda charakter Waszej historii.",
      "Gdynia przyciąga rodziny, które chcą połączyć miasto z morzem w jednym dniu zdjęciowym — rano spacer po Skwerze Kościuszki, popołudnie na Kępie Redłowskiej. Taki plan wymaga logistyki, ale efekt to różnorodny album z jednej wspólnej przygody. Pomagam rozłożyć tempo tak, by dzieci nie były przemęczone, a rodzice nie stresowali się parkowaniem.",
      "Sesje biznesowe w Gdyni realizuję dla osób z branży IT, logistyki, turystyki i usług — krótko, konkretnie, bez zbędnego patosu. Kilka minut rozgrzewki, naturalne światło, proste tło — i masz zdjęcia, które wyglądają profesjonalnie, ale nadal jak Ty, a nie jak stockowa modelka.",
      "Współpraca ze mną to jasne zasady: zaliczka rezerwuje termin, przełożenie sesji możliwe dwa razy w razie losowych zdarzeń, galeria online po spotkaniu, obróbka w ciepłym, naturalnym stylu kolorystycznym. Klienci z Gdyni doceniają, że nie muszą szukać fotografa w innym mieście — przyjeżdżam do nich lub spotykamy się w wybranym plenerze.",
      "Zapraszam do kontaktu — niezależnie od tego, czy marzysz o sesji nad morzem, w parku czy w domu. Gdynia daje niesamowite możliwości, a ja pomogę je wykorzystać tak, by zdjęcia opowiadały Waszą historię, a nie tylko pokazywały turystyczną pocztówkę.",
      "Orłowo z klifem i molo to jedno z moich ulubionych miejsc na sesje narzeczeńskie w Gdyni — para, morze, wiatr we włosach i szczery śmiech, gdy fala zaskoczy przy falochronie. Takie momenty są nie do wyreżyserowania i właśnie dlatego są bezcenne na zdjęciach.",
      "Rodziny z Gdyni często proszą o sesję „dokumentującą” ich codzienność — spacer z psem, rower z dzieckiem, kawa na tarasie. Lifestyle w czystej postaci: bez cukrowej idylli, za to z prawdziwym życiem, które za kilka lat będzie się wydawało bajką.",
      "Jeśli szukasz fotografa w Gdyni, który mówi po ludzku, tłumaczy proces bez żargonu i dostarcza zdjęcia w ustalonym terminie — odezwij się. Zaczarowany Kadr to mała firma z wielkim sercem do ludzkich historii, a Gdynia jedno z miast, w których te historie uwielbiam opowiadać kadrem po kadrze.",
      "Gdynia daje możliwość sesji przez cały rok — wiosną kwiaty w parkach, latem morze i piasek, jesienią ciepłe kolory na Kępie, zimą szaro-niebieskie niebo i grube swetry. Nie ma jednej „idealnej” pory — jest pora idealna dla Waszej wizji, a ja pomogę ją znaleźć.",
      "Zapraszam na sesje w Gdyni — rodzinne, kobiece, ciążowe, narzeczeńskie, okolicznościowe i wizerunkowe. Naturalna fotografia z dojazdem z Wejherowa i pełnym wsparciem na każdym etapie współpracy.",
      "Wielu klientów z Gdyni pyta o sesję zdjęciową jako prezent — dla mamy, dla żony, dla siostry. Voucher na sesję kobiecą to piękny gest, a ja pomagam obdarowanej osobie przejść przez cały proces bez stresu, od pierwszej wiadomości po gotowe zdjęcia.",
      "Gdynia to miasto, które daje tło na każdą porę roku — wystarczy wyjść poza najbardziej oblegane szlaki i odkryć własny kadr. Pomogę Ci go znaleźć i zamknąć w kadrze na lata.",
      "Bez względu na to, czy mieszkasz w Śródmieściu, Orłowie, Chyloni czy na obrzeżach — dojadę tam, gdzie ustalimy spotkanie, w standardowym promieniu bez dopłat. Gdynia to duże miasto, ale współpraca ze mną pozostaje osobista i kameralna.",
      "Sesje w Gdyni kończę zawsze galerią online i obróbką w moim ciepłym, naturalnym stylu — kolory oddają nastrój dnia, a nie sztuczną saturację z filtra. To detal, który klienci doceniają, gdy zdjęcia wiszą w domu przez lata.",
    ],
  },

  gdansk: {
    slug: "gdansk",
    pageSlug: "fotografia-gdansk",
    placeName: "Gdańsku",
    breadcrumbLabel: "Fotografia Gdańsk",
    footerLinkLabel: "Fotografia Gdańsk",
    h1: "Fotografia Gdańsk — sesje w plenerze i na Starym Mieście",
    metaTitle: "Fotografia Gdańsk | Sesje rodzinne i kobiece w Trójmieście",
    metaDescription:
      "Fotografia w Gdańsku: sesje rodzinne, narzeczeńskie i kobiece na Starym Mieście, w Oliwie i nad Motławą. Naturalny styl Zaczarowanego Kadru.",
    keywordTags: [
      "fotografia gdańsk",
      "fotograf gdańsk",
      "sesja zdjęciowa gdańsk",
      "sesja narzeczeńska gdańsk",
    ],
    areaServed: "Gdańsk",
    paragraphs: [
      "Gdańsk to jedno z najpiękniejszych miast w Polsce pod względem fotogeniczności — Motława, Żuraw, brukowane uliczki, Oliwa z parkiem i architektura, która opowiada historię. Fotografia w Gdańsku w moim wykonaniu to nie tylko „pocztówka” z miasta, ale przede wszystkim ludzie w tym krajobrazie: rodziny, pary, kobiety, które chcą poczuć się pięknie i swobodnie w otoczeniu, które je inspiruje.",
      "Sesje rodzinne w Gdańsku wymagają planu — centrum bywa tłoczne, więc często wybieramy godziny poranne albo miejsca nieco z dala od głównych szlaków turystycznych. Park Oliwski, okolice plaży w Brzeźnie, zielone trójmiejskie parki krajobrazowe albo kameralne uliczki na Starym Mieście — każda lokalizacja ma inny charakter, a ja pomagam dobrać tę właściwą do wieku dzieci i Waszego stylu.",
      "Sesje narzeczeńskie w Gdańsku to częsty wybór par z całego Trójmiasta — romantyczny spacer, przytulenie na moście, pierścień w kadrze, światło zachodu odbijające się w wodzie. Nie musicie znać póz — poprowadzę Was naturalnie, tak jakbyście szli na randkę, tylko z fotografką kilka kroków z tyłu.",
      "Sesje kobiece w Gdańsku mogą być eleganckie przy zabytkowych fasadach albo lekkie i zwiewne w parku. Ważne, żebyś czuła się sobą — nie wciskam w szablon, który nie pasuje do Twojej osobowości. Konsultacja przed sesją to moment, w którym ustalamy nastrój, stylizację i ewentualną współpracę z wizażystką.",
      "Fotografia ciążowa w Gdańsku łączy często plener z architekturą i zielenią — brzuszek na tle kolorowych kamienic, spacer wzdłuż wody, czułe ujęcia we dwoje w mniej uczęszczanych zakątkach. Szukam światła i spokoju, żebyś mogła się zrelaksować — to widać na zdjęciach.",
      "Dojazd z Wejherowa do Gdańska mieści się w standardowym promieniu podróży, który oferuję bez dodatkowej opłaty do trzydziestu kilometrów — dla wielu dzielnic Gdańska to wciąż komfortowa współpraca bez dopłat. Jeśli mieszkasz dalej, ustalamy koszt indywidualnie przed rezerwacją.",
      "Reportaże okolicznościowe — chrzty, komunie, wesela cywilne, jubileusze — w gdańskich kościołach i salach to kolejna część oferty. Pracuję dyskretnie, szanuję charakter uroczystości, a zdjęcia oddają emocje dnia bez sztucznego ustawiania gości godzinami.",
      "Gdańsk przyciąga turystów, ale też mieszkańców, którzy chcą mieć własną historię zapisaną w kadrach — nie widokówkę, lecz wspomnienie rodzinnej niedzieli na Długim Targu albo pierwszego spaceru z wózkiem w Oliwie. Taki dokument życia jest dla mnie równie ważny jak sesja studyjna.",
      "Sesje wizerunkowe w Gdańsku realizuję dla osób z branży kreatywnej, IT, turystyki i usług — neutralne tło, profesjonalne światło, szybka sesja bez zbędnego stresu. Dobre zdjęcie do profilu to inwestycja, która wraca w zaufaniu klientów.",
      "Jeśli marzysz o fotografii w Gdańsku w naturalnym, ciepłym stylu — bez sztywnych póz i z pełnym wsparciem przed obiektywem — zapraszam do kontaktu z Zaczarowanym Kadrem. Opowiem o pakietach, dostępnych terminach i miejscach, które najlepiej pasują do Twojej sesji rodzinnej, kobiecej, ciążowej lub narzeczeńskiej.",
      "Gdańsk wymaga od fotografa elastyczności — tłumy na Długim Targu, zmienne światło nad Motławą, wiatr na plaży w Brzeźnie. Znam te wyzwania i planuję sesję tak, by uniknąć największego pośpiechu i tłoku. Często wybieramy kameralne uliczki Oliwy albo zielone alejki parku zamiast głównych szlaków turystycznych.",
      "Sesje rodzinne w Gdańsku z dziećmi w wieku przedszkolnym i szkolnym prowadzę w formie zabawy — zadania, bieganie, szukanie „skarbów” — tak, by zapomniały o obiektywie. Rodzice mówią później, że to był miły dzień na mieście, a nie „obowiązkowa sesja z fotografem”.",
      "Dla par mieszkających w Gdańsku sesja narzeczeńska to często pierwszy krok przed weselem — bez presji, w swoim tempie, w miejscach, które mają dla Was znaczenie: pierwsza randka, ulubiona kawiarnia, spacer nad wodą. Takie zdjęcia potem wiszą w domu i przypominają, skąd zaczęła się Wasza wspólna droga.",
      "Napisz, jeśli szukasz fotografa w Gdańsku — chętnie odpowiem na pytania o przygotowanie, ceny i terminy. Trójmiasto to mój codzienny rejon pracy, a Gdańsk jedno z najpiękniejszych tła, jakie można sobie wymarzyć na rodzinne i kobiece kadry.",
      "Oliwa z Parkiem Oliwskim to mój sprawdzony wybór na rodzinne sesje w Gdańsku, gdy klientom zależy na zieleni i spokoju z dala od turystów Długiego Targu. Aleje drzew, fontanny, ławki — dzieci mają przestrzeń, a rodzice chwilę na oddech między ujęciami.",
      "Sesje kobiece w Gdańsku w historycznym centrum wymagają odwagi — przechodnie, turysty, zmienne światło. Dlatego planujemy je wcześnie rano albo w dni robocze, gdy miasto jeszcze śpi. Efekt: zdjęcia z charakterem Gdańska bez tłumu w tle.",
      "Fotografia okolicznościowa w gdańskich kościołach i salach to dla mnie szacunek do liturgii i emocji. Po ceremonii często robię krótką sesję rodzinną na zewnątrz — światło po południu bywa wtedy złote i miękkie, idealne na portrety w uroczystych strojach.",
      "Zapraszam do współpracy — Gdańsk zasługuje na zdjęcia, które są Wasze, a nie tylko widokówką z pocztówki. Pomogę je stworzyć w naturalnym, ciepłym stylu Zaczarowanego Kadru.",
      "Gdańsk to miasto, które każdy zna inaczej — dla jednych to Motława i Żuraw, dla innych Oliwa i park, dla rodzin z dziećmi — plaża w Brzeźnie albo zoo. Sesja może opowiadać Waszą wersję Gdańska, a nie turystyczny szablon z przewodnika.",
      "Współpraca ze mną to jasne ustalenia, brak ukrytych kosztów i galeria online po sesji. Jeśli szukasz fotografa w Gdańsku — na rodzinne, kobiece, ciążowe lub okolicznościowe zdjęcia — napisz. Czekam na Twoją wiadomość.",
      "Gdańsk bywa zatłoczony, ale zna też miejsca kameralne — uliczki, dziedzińce, parki z dala od Długiego Targu. Dzięki temu sesja może być intymna nawet w wielkim mieście, a zdjęcia nadal będą miały w sobie ducha Gdańska.",
      "Naturalna fotografia w Gdańsku to moja codzienność — zapraszam rodziny, kobiety, pary i klientów okolicznościowych na sesje, które opowiadają prawdziwe historie, a nie tylko pokazują turystyczną atrakcję.",
      "Gdańsk to także miasto studentów, młodych rodzin i par, które właśnie tu zaczęły wspólne życie — sesja może być pierwszą wielką pamiątką z nowego rozdziału. Chętnie pomogę Wam ją zaplanować bez presji i bez pośpiechu.",
      "Po sesji w Gdańsku otrzymujesz dostęp do prywatnej galerii online, wybierasz ulubione ujęcia, a ja zajmuję się obróbką w terminie opisanym w regulaminie. Cały proces jest przejrzysty — od zaliczki po gotowe pliki do pobrania.",
      "Gdańsk to miasto, które warto pokazać na zdjęciach po swojemu — nie tak, jak miliony turystów na Instagramie. Pomogę Wam znaleźć własny kadr i zamknąć w nim Waszą rodzinę, parę albo kobiecą historię. Zapraszam do kontaktu — chętnie zaplanuję sesję w Gdańsku dopasowaną do Waszej okazji.",
    ],
  },

  trojmiasto: {
    slug: "trojmiasto",
    pageSlug: "fotograf-trojmiasto",
    placeName: "Trójmieście",
    breadcrumbLabel: "Fotograf Trójmiasto",
    footerLinkLabel: "Fotograf Trójmiasto",
    h1: "Fotograf Trójmiasto — Gdańsk, Gdynia, Sopot i okolice",
    metaTitle: "Fotograf Trójmiasto | Sesje rodzinne i kobiece nad morzem",
    metaDescription:
      "Fotograf Trójmiasto — sesje w Gdańsku, Gdyni i Sopocie. Rodzinne, kobiece, ciążowe i narzeczeńskie sesje nad morzem i w plenerze. Zaczarowany Kadr.",
    keywordTags: [
      "fotograf trójmiasto",
      "sesja zdjęciowa trójmiasto",
      "fotografia rodzinna gdańsk gdynia sopot",
      "sesja nad morzem trójmiasto",
    ],
    areaServed: "Trójmiasto",
    paragraphs: [
      "Trójmiasto — Gdańsk, Gdynia i Sopot — to jeden z najbardziej fotogenicznych regionów w Polsce. Morze, klify, parki, zabytki i nowoczesna architektura dają nieskończone możliwości sesji rodzinnych, narzeczeńskich, kobiecych i ciążowych. Jako fotografka z Wejherowa, tuż obok aglomeracji, regularnie realizuję sesje w całym Trójmieście — znam światło nad Bałtykiem, wiem, kiedy plaża jest pusta, i pomagam klientom wybrać miasto oraz lokalizację pasującą do ich historii.",
      "Sesje rodzinne w Trójmieście często łączą elementy z dwóch światów — spacer po sopockim molo i zabawa dzieci na plaży w Brzeźnie albo rodzinny piknik w Parku Oliwskim z finałem nad wodą w Gdyni. Nie trzeba ograniczać się do jednego miejsca w jeden dzień — planujemy realistycznie, z przerwami i z uwzględnieniem energii najmłodszych.",
      "Sopot to klasyk na sesje narzeczeńskie i kobiece — molo, tętniąca ulicą, architektura kurortu. Gdynia daje klif i port, Gdańsk — historyczny klimat. Trójmiasto pozwala dopasować tło do charakteru pary lub rodziny bez jednego sztywnego schematu.",
      "Sesje kobiece w Trójmieście bywają letnie i lekkie albo jesienne w swetrach na tle szarego morza — oba warianty są piękne, jeśli światło i nastrój są spójne. Pomagam dobrać stroje, które nie giną w tle, i miejsca, gdzie poczujesz się swobodnie, nawet jeśli w pobliżu są przechodnie — doświadczenie w plenerze miejskim i nadmorskim uczy, jak znaleźć spokój w kadrze.",
      "Fotografia ciążowa w Trójmieście to często marzenie o zdjęciach z morzem w tle — realizuję je, gdy pogoda i wiatr pozwalają, ale proponuję też alternatywy w parkach i w domu, gdy warunki są kapryśne. Bezpieczeństwo i komfort przyszłej mamy są zawsze na pierwszym miejscu.",
      "Mieszkańcy Trójmiasta doceniają, że nie muszą szukać fotografa wyłącznie w centrum metropolii — współpraca ze mną to połączenie lokalnego podejścia z Kaszub z łatwym dojazdem do Gdańska, Gdyni i Sopotu. Do trzydziestu kilometrów od Wejherowa dojazd jest gratis; dla dalszych dzielnic ustalamy szczegóły indywidualnie.",
      "Sesje okolicznościowe w Trójmieście — chrzty, komunie, rocznice — obsługuję w kościołach i salach w całej aglomeracji. Styl reportażowy, dyskrecja, szacunek dla liturgii i gości. Zdjęcia mają oddać dzień takim, jakim go przeżyliście, nie takim, jak ustawił je reżyser.",
      "Noworodkowe i lifestyle’owe sesje w domach klientów w Trójmieście to wygodna opcja dla świeżo upieczonych rodziców — nie musicie pakować dziecka na drugi koniec miasta. Przyjeżdżam z sprzętem i tworzę spokojną atmosferę, w której maluszek może spać, jeść i być sobą.",
      "Trójmiasto w sezonie wymaga wcześniejszej rezerwacji terminów — szczególnie na weekendy i złotą godzinę nad morzem — ale poza szczytem też warto planować z wyprzedzeniem. Konsultacja przed sesją, przejrzyste pakiety i galeria online po spotkaniu to standard mojej pracy.",
      "Jeśli szukasz fotografa w Trójmieście, który łączy nadmorski klimat z naturalnym, emocjonalnym stylem — zapraszam do Zaczarowanego Kadru. Napisz, w którym mieście chcesz się spotkać i jaki rodzaj sesji Cię interesuje — wspólnie stworzymy plan, który zamieni się w zdjęcia na lata.",
      "Trójmiasto to jeden rynek, ale trzy różne charaktery — Gdańsk historyczny, Gdynia nowoczesna i morska, Sopot kuracyjny i lekki. Dzięki temu możemy dopasować tło do Waszej osobowości: rodzina energiczna wybierze plażę w Brzeźnie, para romantyczna molo w Sopocie, kobieta szukająca elegancji — kamienice Głównego Miasta.",
      "Klienci z całego Trójmiasta cenią, że nie muszą rezerwować studia w innym mieście — przyjeżdżam na miejsce, znam plenery i nie traktuję dojazdu jako luksusu za dodatkową opłatą w standardowym promieniu. To oszczędność czasu i pieniędzy, a przy tym pełna jakość usługi.",
      "Sesje ciążowe i noworodkowe w Trójmieście często łączą plener z sesją w domu klienta — najpierw brzuszek nad wodą, potem maluszek w znanym otoczeniu. Taki pakiet wspomnień sprawdza się u rodzin, które chcą mieć kompletną historię bez wielokrotnego organizowania logistyki.",
      "Zapraszam do kontaktu mieszkańców Gdańska, Gdyni, Sopotu i całej aglomeracji — sesje rodzinne, kobiece, okolicznościowe i wizerunkowe w stylu, który stawia na emocje i autentyczność, a nie na sztuczną perfekcję.",
      "Sopot z molo i sopocką plażą to klasyk na sesje letnie — lekki styl, biała sukienka, boso w piasku. Dla par i kobiet szukających „kurortowego” klimatu bez wyjazdu za granicę Sopot daje ten efekt w jedno popołudnie.",
      "Planując sesję w Trójmieście, bierzemy pod uwagę parking, dojazd komunikacją i pogodę nad morzem — ja znam te realia i nie zostawiam Was samych z logistyką. To szczególnie doceniają rodziny z dziećmi i osoby starsze, które nie chcą biegać między przystankami z torbami.",
      "Trójmiasto to region, w którym mieszkam i pracuję codziennie — nie jestem fotografką „przyjezdną na jeden dzień”. Znam światło, miejsca i rytm miast, a to przekłada się na spokój podczas sesji i lepsze zdjęcia bez zbędnego stresu.",
      "Jeśli marzysz o sesji w Trójmieście — od rodzinnej po kobiecą, ciążową lub okolicznościową — napisz. Razem wybierzemy miasto, plener i termin, które najlepiej oddadzą Waszą historię.",
      "Trójmiasto to region pełen kontrastów — morze i lasy, zabytki i nowoczesność, tłumy i kameralne zakątki. Dzięki temu sesja może być dokładnie taka, jakiej szukasz: dynamiczna albo spokojna, miejska albo nadmorska, z dziećmi albo tylko we dwoje.",
      "Zaczarowany Kadr obsługuje klientów z całego Trójmiasta — z pełnym zaangażowaniem, lokalną wiedzą o plenerach i naturalnym stylem pracy. Zapraszam do kontaktu — pierwszy krok to rozmowa, a potem wspólne planowanie dnia, który zakończy się zdjęciami na lata.",
      "Sesje w Trójmieście mogą być jednodniową przygodą albo krótkim spotkaniem godzinnym — dopasowuję formę do Waszego kalendarza i energii, szczególnie gdy fotografujemy z małymi dziećmi lub w zaawansowanej ciąży.",
      "Jeśli mieszkasz w Gdańsku, Gdyni lub Sopocie i szukasz fotografa, który łączy jakość z ludzkim podejściem — napisz. Trójmiasto to mój drugi dom obok Wejherowa, a Wasze historie chętnie zapiszę w kadrach pełnych światła i emocji.",
      "Wielu klientów z Trójmiasta łączy sesję z okazją — rocznica ślubu, urodziny dziecka, narodziny maluszka. Taki dzień może być lekki i radosny, a zdjęcia staną się materialnym śladem ważnego momentu w Waszym życiu.",
      "Trójmiasto to region, w którym łatwo zaplanować sesję „pod pogodę” — mamy plan B w parku, w kawiarni albo u klienta w domu. Dzięki temu nie rezygnujecie ze wspomnień tylko dlatego, że rano padało.",
      "Niezależnie od tego, czy wybierzecie Gdańsk, Gdynię czy Sopot — dostaniecie ode mnie to samo zaangażowanie, ten sam naturalny styl i tę samą dbałość o światło. Trójmiasto jest duże, ale współpraca ze mną pozostaje osobista.",
    ],
  },

  puck: {
    slug: "puck",
    pageSlug: "sesje-zdjeciowe-puck",
    placeName: "Pucku",
    breadcrumbLabel: "Sesje zdjęciowe Puck",
    footerLinkLabel: "Sesje zdjęciowe Puck",
    h1: "Sesje zdjęciowe w Pucku — nad Zatoką i na Kaszubach",
    metaTitle: "Sesje zdjęciowe Puck | Fotograf Puck i Zatoka Pucka",
    metaDescription:
      "Sesje rodzinne i kobiece w Pucku, nad Zatoką Pucką i na Półwyspie Helskim. Naturalna fotografia, plener, reportaże okolicznościowe. Zaczarowany Kadr.",
    keywordTags: [
      "sesje zdjęciowe puck",
      "fotograf puck",
      "fotografia rodzinna puck",
      "sesja nad zatoką puck",
    ],
    areaServed: "Puck",
    paragraphs: [
      "Puck i Zatoka Pucka to jedno z najpiękniejszych miejsc na mapie Pomorza — spokojniejsze niż otwarte morze, z rybackim klimatem, widokiem na Półwysep Helski i zachodami słońca, które fotografowie kochają od lat. Sesje zdjęciowe w Pucku realizuję dla rodzin, par, kobiet i klientów okolicznościowych, którzy chcą połączyć kaszubską tradycję z nadmorską scenerią bez tłumów dużych kurortów.",
      "Sesje rodzinne w Pucku często zaczynamy na plaży lub przy promenadzie — dzieci mogą bawić się w piasku, zbierać muszle, biegać — a ja zapisuję te naturalne gesty. Nie wymagam „uśmiechnij się do kamery” co minutę; wolę prawdziwy śmiech, gdy coś Was rozśmieszy. Tak powstają zdjęcia, do których chce się wracać.",
      "Puck to też świetne tło na sesje narzeczeńskie — spokojna woda, łodzie, drewniane pomosty i kaszubska atmosfera. Para może poczuć się jak na krótkim urlopie, a zdjęcia będą miały ten sam lekki nastrój.",
      "Sesje kobiece nad Zatoką Pucką bywają magiczne o wschodzie i zachodzie słońca — miękkie światło, pastelowe niebo, delikatny wiatr. Pomagam w doborze sukienki lub stylizacji, która współgra z otoczeniem, i prowadzę sesję tak, żebyś zapomniała o obiektywie.",
      "Fotografia ciążowa w Pucku i okolicach łączy często plener nad wodą z cieplejszymi ujęciami w trawie lub w domu klienta. Jeśli pogoda nie dopisze, mam plan B — kaszubskie lasy i łąki niedaleko Pucka dają piękne tło o każdej porze roku.",
      "Dojazd z Wejherowa do Pucka to krótka podróż, a w ramach standardowej oferty do trzydziestu kilometrów nie doliczam opłaty za podróż — dla mieszkańców Pucka i okolic to wygodna współpraca z fotografką, która zna region i nie traktuje dojazdu jako niespodzianki.",
      "Reportaże okolicznościowe — chrzty, komunie, wesela — w puckich kościołach i salach realizuję w stylu dokumentalnym. Jestem dyskretna, szanuję charakter uroczystości, a zdjęcia oddają emocje dnia bez sztucznego reżyserowania gości.",
      "Puck przyciąga turystów latem, ale jesień i wiosna dają jeszcze spokojniejsze plenery — mniej ludzi, więcej miejsca na rodzinny spacer i zabawę z dziećmi. Warto rozważyć sesję poza szczytem sezonu — światło bywa wtedy wyjątkowo miękkie.",
      "Noworodkowe sesje lifestyle w domach klientów z Pucka i okolic to opcja dla rodzin, które wolą nie wychodzić daleko z maluszkiem. Przyjeżdżam z sprzętem, tworzę ciepłą atmosferę i fotografuję w rytmie dziecka — karmienie, sen, pierwsze uśmiechy.",
      "Jeśli szukasz sesji zdjęciowych w Pucku — naturalnych, pełnych emocji i dopasowanych do Twojej rodziny — zapraszam do kontaktu. Opowiem o pakietach, terminach i miejscach nad Zatoką, które najlepiej pasują do Twojej wizji.",
      "Puck i okolice to raj dla sesji o zachodzie słońca — pastelowe niebo, spokojna woda, rybackie łodzie i Półwysep Helski w tle. Wiele par wybiera właśnie ten klimat na sesję narzeczeńską albo ciążową, bo zdjęcia mają wtedy coś z magii filmowego kadru, a nie sztywnej pocztówki.",
      "Rodziny z Pucka, Władysławowa i okolic często łączą sesję zdjęciową z weekendem nad morzem — ja dołączam na kilka godzin, a Wy zostajecie ze wspomnieniami i zdjęciami, które przypomną o wspólnym czasie, nie tylko o „obowiązku przed obiektywem”.",
      "Reportaże okolicznościowe w puckiej gminie prowadzę z szacunkiem dla tradycji i rodzinnego charakteru uroczystości — chrzty, komunie, rocznice w mniejszych kościołach, gdzie każdy gość jest ważny. Zdjęcia oddają tę kameralną atmosferę.",
      "Napisz lub zadzwoń — chętnie zaplanuję sesję w Pucku i na Kaszubach, z dojazdem z Wejherowa i bez ukrytych kosztów podróży w standardowym promieniu. Zatoka Pucka zasługuje na to, by Wasza historia została na niej zapisana.",
      "Puckie plaże i promenada bywają zatłoczone w lipcu, ale wczesny poranek w sezonie albo wrzesień dają spokój i piękne światło — wtedy sesje rodzinne nad Zatoką wyglądają jak z kalendarza, bez tłumów w kadrze.",
      "Dla mieszkańców Półwyspu Helskiego i okolic Pucka oferuję sesje, które łączą kaszubski charakter z nadmorskim klimatem — rybackie łodzie, wiatr, trawa, dzieci biegające po piasku. To zdjęcia pełne życia, nie studyjnej sztywności.",
      "Sesje ciążowe w Pucku często planujemy o zachodzie — przyszła mama w sukience, partner obok, Zatoka w tle. Ten spokojny rytm pomaga się zrelaksować i daje kadry pełne czułości, które za lata będą przypominać o oczekiwaniu na maluszka.",
      "Zapraszam do Pucka i okolicy — na sesje, które zostaną z Wami na lata. Naturalna fotografia, lokalna znajomość regionu i pełne wsparcie od pierwszej wiadomości po gotową galerię online.",
      "Puck to brama na Półwysep Helski — wielu moich klientów łączy sesję z wycieczką nad morze, a zdjęcia stają się pamiątką nie tylko z sesji, ale z całego rodzinnego weekendu. To piękny sposób na dokumentowanie życia, nie tylko „pózowanie do kamery”.",
      "Jeśli szukasz sesji zdjęciowych w Pucku — fotografa, który zna Zatokę, szanuje Wasz czas i dostarcza naturalne, emocjonalne kadry — odezwij się do Zaczarowanego Kadru. Chętnie zaplanuję termin i miejsce dopasowane do Waszej okazji.",
      "Puck to także świetne miejsce na sesję rodzinną z psami — plaża, trawa, wiatr i radość czworonoga w kadrze. Wielu moich klientów traktuje pupila jak pełnoprawnego członka rodziny i chce go mieć na zdjęciach — z przyjemnością to uwzględniam.",
      "Zimą Zatoka Pucka ma inny, surowy urok — grube swetry, szare niebo, spokój bez letnich tłumów. Sesje wtedy bywają jeszcze bardziej intymne i wyjątkowe na tle pustej plaży.",
      "Zapraszam do Pucka na sesje rodzinne, kobiece, ciążowe i okolicznościowe — z pełnym wsparciem, naturalnym stylem i znajomością lokalnych plenerów, które sprawdzają się o każdej porze roku.",
      "Puck to dla mnie miejsce, gdzie kaszubska gościnność spotyka się z morskim widokiem — i właśnie ten klimat chcę pokazać na Waszych zdjęciach: ciepło, bliskość, szacunek do tradycji i radość z bycia razem.",
      "Sesje okolicznościowe w puckiej gminie — chrzty, komunie, rocznice — to dla mnie szacunek do rodzinnego charakteru uroczystości. Zdjęcia mają oddać ludzi i emocje, nie tylko salę i tort.",
      "Jeśli mieszkasz w Pucku, Władysławowie, Jastarni lub na Półwyspie — zapraszam na współpracę. Znam region, dojadę bez problemu i pomogę zaplanować sesję dopasowaną do Waszej okazji i pory roku nad Zatoką.",
      "Puck na zdjęciach może być spokojny i rodzinny albo romantyczny i kobiecy — zależy od Was. Ważne, żebyście czuli się sobą, a ja zadbam o resztę: światło, kadr, obróbkę i termin oddania galerii.",
      "Nad Zatoką Pucką światło bywa wyjątkowe o wschodzie i zachodzie — wtedy sesje nabierają magii, której nie da się powtórzyć w studiu. Warto zaplanować termin z wyprzedzeniem, szczególnie w sezonie letnim.",
    ],
  },

  bolszewo: {
    slug: "bolszewo",
    pageSlug: "fotografia-bolszewo",
    placeName: "Bolszewie",
    breadcrumbLabel: "Fotografia Bolszewo",
    footerLinkLabel: "Fotografia Bolszewo",
    h1: "Fotografia Bolszewo — sesje rodzinne na Kaszubach",
    metaTitle: "Fotografia Bolszewo | Fotograf Bolszewo i okolice",
    metaDescription:
      "Fotografia w Bolszewie i okolicy Wejherowa. Sesje rodzinne, kobiece i ciążowe w plenerze, w domu i w kaszubskim krajobrazie. Zaczarowany Kadr.",
    keywordTags: [
      "fotografia bolszewo",
      "fotograf bolszewo",
      "sesja rodzinna bolszewo",
      "fotograf kaszuby bolszewo",
    ],
    areaServed: "Bolszewo",
    paragraphs: [
      "Bolszewo to kaszubska wieś tuż pod Wejherowem — z charakterem, zielenią, spokojem i bliskością do miasta, która sprawia, że wiele rodzin wybiera je jako miejsce do życia. Fotografia w Bolszewie w moim wykonaniu to sesje rodzinne, kobiece, ciążowe i okolicznościowe w plenerze, u klienta w domu lub w moim domowym studio w Wejherowie — kilka minut samochodem i jesteśmy w zupełnie innym, wiejskim klimacie.",
      "Sesje rodzinne w Bolszewie często odbywają się na łące, w lesie, na polnej drodze albo na podwórku — tam, gdzie dzieci czują się najswobodniej. Nie potrzeba wielkiej produkcji — wystarczy dobre światło, szczery śmiech i chwila zatrzymania. Takie zdjęcia najlepiej oddają życie na Kaszubach.",
      "Bolszewo i okolice to świetne miejsce na sesje kobiece w stylu boho i natural — sukienka w trawie, wianek, delikatne światło przed zachodem. Pomagam w doborze stylizacji i miejsca, żebyś czuła się pięknie bez presji perfekcji.",
      "Fotografia ciążowa w Bolszewie łączy spokój wsi z bliskością natury — brzuszek w polu, spacer z partnerem leśną ścieżką, czułe ujęcia w domu przy oknie. Tempo jest spokojne, bez pośpiechu — idealne dla przyszłych mam, które chcą się zrelaksować.",
      "Dojazd do Bolszewa jest wliczony w standardową ofertę do trzydziestu kilometrów od Wejherowa — dla mieszkańców wsi to oczywistość, ale warto podkreślić: nie płacisz dodatkowo za to, że fotografka przyjeżdża do Ciebie z aparatem i doświadczeniem plenerowym.",
      "Sesje okolicznościowe — chrzty, komunie, rocznice — w Bolszewie i okolicznych kościołach fotografuję reportażowo. Znam lokalne realia, parkingi, wejścia — detale, które ułatwiają dzień i pozwalają skupić się na uroczystości.",
      "Noworodkowe sesje w domach klientów z Bolszewa to częsty wybór — maluszek w znanym otoczeniu, rodzice bez dalekiego transportu, naturalne światło z okna. Pracuję cicho, delikatnie, w rytmie dziecka.",
      "Bolszewo łączy kaszubską tożsamość z bliskością Trójmiasta — wiele rodzin stąd korzysta z moich usług, bo znają mnie z polecenia i cenią ludzkie podejście. Nie jesteś „kolejnym klientem z kalendarza” — ustalamy szczegóły, słucham potrzeb i dopasowuję sesję.",
      "Sesje wizerunkowe dla lokalnych przedsiębiorców — fryzjerki, kosmetyczki, rzemieślnicy — realizuję też w Bolszewie i okolicy, z neutralnym tłem albo w plenerze pasującym do branży.",
      "Jeśli szukasz fotografii w Bolszewie — autentycznej, ciepłej i bez sztywnych póz — zapraszam do Zaczarowanego Kadru. Napisz, jaka sesja Cię interesuje, a wspólnie zaplanujemy termin i miejsce na Kaszubach.",
      "Bolszewo to idealna sceneria dla rodzin, które kochają naturę — polne drogi, lasy, zwierzęta na pastwiskach, dzieci biegające w gumowcach. Sesja w takim otoczeniu ma charakter prawdziwy i ciepły, a zdjęcia po latach przypominają lata dzieciństwa na wsi, nawet jeśli mieszkacie w bloku kilka kilometrów dalej.",
      "Sesje kobiece w Bolszewie i okolicy często wybierają klientki, które chcą uciec od miejskiego zgiełku — sukienka w trawie, wianek, światło filtrowane przez liście. To chwila oddechu i pamiątka, do której wraca się z uśmiechem.",
      "Dojazd do Bolszewa z Wejherowa to kilka minut — sesja może odbyć się u Ciebie w domu, w ogrodzie albo na wspólnym spacerze. Dla rodzin z małymi dziećmi to ogromna wygoda: nie trzeba pakować wózka na drugi koniec województwa.",
      "Zapraszam mieszkańców Bolszewa, Górczyc, Żelistrzewa i okolic — na sesje rodzinne, ciążowe, noworodkowe i okolicznościowe. Kaszuby to mój dom, a Bolszewo jedno z miejsc, gdzie światło i spokój współgrają z naturalną fotografią.",
      "Bolszewo i okoliczne wzgórza kaszubskie dają tło, którego nie zastąpi żadne sztuczne studio — łąki, lasy, polne drogi i wiejskie domy tworzą klimat ciepły i domowy. Sesje rodzinne w takim otoczeniu przypominają wakacje u dziadków, nawet jeśli fotografujemy w tygodniu po pracy.",
      "Wielu klientów z Bolszewa wybiera sesję jako prezent dla rodziców lub dziadków — wspólne zdjęcia trzech pokoleń na łące to pamiątka, której nie kupisz w sklepie. Pomagam zorganizować taki dzień bez pośpiechu, z przerwami na herbatę i rozmowę.",
      "Fotografia okolicznościowa w bolszewskiej gminie — chrzty, komunie, rocznice — to reportaż pełen emocji i kaszubskiego charakteru. Znam lokalne kościoły i sale, wiem gdzie stanąć, by nie przeszkadzać, a jednocześnie mieć dobry kadr.",
      "Jeśli szukasz fotografa w Bolszewie — kogoś blisko, znającego okolicę i pracującego w naturalnym stylu — odezwij się. Chętnie opowiem o ofercie i zaproponuję termin dopasowany do Waszej okazji i pogody na Kaszubach.",
      "Bolszewo to miejsce, gdzie kaszubska tradycja spotyka się z codziennością współczesnych rodzin — i właśnie takie zdjęcia lubię robić najbardziej: prawdziwe, ciepłe, bez udawania. Sesja może być pretekstem do wspólnego czasu, a fotografie zostaną na długo.",
      "Zapraszam na sesje w Bolszewie i okolicy — rodzinne, kobiece, ciążowe, noworodkowe i okolicznościowe. Zaczarowany Kadr to fotografia z sercem i z znajomością Kaszub, gdzie światło i ludzie tworzą najlepsze kadry.",
      "Bolszewo to miejsce, gdzie często fotografuję trzy pokolenia rodziny na jednej sesji — dziadkowie, rodzice, dzieci. Takie zdjęcia mają ogromną wartość emocjonalną, szczególnie gdy część rodziny mieszka dalej i spotkania są rzadkie.",
      "Jesienne i wiosenne sesje w Bolszewie zachwycają kolorami — polne drogi, lasy, łąki pełne kwiatów. To idealny moment na rodzinny spacer z aparatem, bez letniego upału i bez zimowego chłodu.",
      "Jeśli szukasz fotografa na Kaszubach — w Bolszewie i okolicy — Zaczarowany Kadr zaprasza na naturalne sesje pełne emocji. Napisz — chętnie odpowiem na pytania i zaproponuję termin.",
      "Bolszewo to dla wielu rodzin „blisko domu” — nie trzeba planować wielkiej wyprawy, żeby mieć profesjonalne zdjęcia. Wystarczy umówić termin, wyjść na łąkę albo zostać w ogrodzie, a resztą zajmę się ja.",
      "Na Kaszubach liczy się lokalność — fotograf, który zna okolicę, oszczędza Wam czas i nerwy. Nie szukamy miejsca godzinami; przychodzimy tam, gdzie światło i tło już na Was czekają.",
      "Zapraszam z Bolszewa i okolic na sesje, które zostaną w rodzinie na pokolenia — naturalne, ciepłe i pełne prawdziwych emocji, bez sztywnego pozowania i bez studia z katalogu.",
      "Bolszewo to miejsce, gdzie sesja może być przedłużeniem zwykłej niedzieli — spacer, herbata w termosie, zabawa z dziećmi. Ja tylko jestem obok z aparatem, żeby te chwile zostały z Wami na zawsze.",
      "Kaszuby to region, który kocham fotografować — Bolszewo i okolice dają tło pełne spokoju i autentyczności. Jeśli szukasz fotografa blisko domu, który rozumie ten klimat — odezwij się do Zaczarowanego Kadru. Chętnie zaplanuję sesję dopasowaną do Waszej rodziny i okazji.",
    ],
  },

  goscicino: {
    slug: "goscicino",
    pageSlug: "fotograf-goscicino",
    placeName: "Gościcinie",
    breadcrumbLabel: "Fotograf Gościcino",
    footerLinkLabel: "Fotograf Gościcino",
    h1: "Fotograf Gościcino — sesje rodzinne i kobiece w lesie i plenerze",
    metaTitle: "Fotograf Gościcino | Sesje zdjęciowe Gościcino",
    metaDescription:
      "Fotograf Gościcino — sesje rodzinne, kobiece i ciążowe w lesie, na osiedlach i w domu klienta. Naturalna fotografia, dojazd z Wejherowa. Zaczarowany Kadr.",
    keywordTags: [
      "fotograf gościcino",
      "sesja zdjęciowa gościcino",
      "fotografia rodzinna gościcino",
      "sesja kobieca gościcino",
    ],
    areaServed: "Gościcino",
    paragraphs: [
      "Gościcino to gmina położona między Wejherowem a Gdynią — z lasami, spokojnymi osiedlami i charakterem miejsca, które łączy bliskość miasta z zielenią. Jako fotografka realizująca sesje w Gościcinie chętnie wykorzystuję lokalne trasy leśne, polany i kameralne zakątki osiedli, gdzie rodziny i kobiety mogą poczuć się swobodnie bez tłumów i pośpiechu.",
      "Sesje rodzinne w Gościcinie często mają formę spaceru — dzieci zbierają szyszki, biegają po ścieżce, rodzice idą za rękę — a ja jestem obok, gotowa zatrzymać te ulotne chwile. Nie chodzi o perfekcyjną pozę, tylko o Waszą prawdziwą relację, która za lat będzie na zdjęciach najważniejsza.",
      "Gościcino to dobre miejsce na sesje kobiece w otoczeniu natury — miękkie światło między drzewami, sukienka w ruchu, spokój, który pomaga się rozluźnić. Przed sesją rozmawiamy o Twoich oczekiwaniach, stroju i nastroju — żeby dzień zdjęciowy był przyjemnością, nie egzaminem.",
      "Fotografia ciążowa w Gościcinie i okolicach łączy plener leśny z możliwością sesji w domu klienta — szczególnie wygodnie dla pań w późniejszej ciąży, które wolą krótki dojazd i znaną przestrzeń. Brzuszek w świetle między drzewami albo przy oknie w salonie — oba warianty mogą być piękne.",
      "Dojazd z Wejherowa do Gościcina mieści się w promieniu trzydziestu kilometrów, który oferuję bez dodatkowej opłaty — dla mieszkańców to prosta logistyka i brak ukrytych kosztów podróży.",
      "Sesje okolicznościowe — chrzty, komunie, urodziny — w Gościcinie i okolicznych kościołach realizuję reportażowo, z dyskrecją i szacunkiem dla uroczystości. Zdjęcia mają oddać emocje dnia, nie sztywną listę póz.",
      "Noworodkowe sesje lifestyle w domach klientów z Gościcina to opcja dla rodzin, które chcą zachować pierwsze tygodnie bez wychodzenia daleko z maluszkiem. Pracuję w cichym, spokojnym tempie, z poszanowaniem rytmu dziecka.",
      "Gościcino rozwija się dynamicznie — nowe osiedla, młode rodziny, osoby szukające lokalnego fotografa, który nie jest anonimową firmą z dużego miasta. Zaczarowany Kadr to osobiste podejście, konsultacja przed sesją i galeria online po spotkaniu.",
      "Sesje narzeczeńskie w lesie i na polanie w okolicy Gościcina to romantyczna alternatywa dla nadmorskich tłumów — spokój, zieleń, naturalne światło i przestrzeń tylko dla Was.",
      "Jeśli szukasz fotografa w Gościcinie — kogoś, kto łączy profesjonalizm z ciepłem i zna okolicę — zapraszam do kontaktu. Opowiem o pakietach MINI, STANDARD i PREMIUM, dostępnych terminach i miejscach, które najlepiej pasują do Twojej sesji rodzinnej, kobiecej lub ciążowej.",
      "Gościcino to świetny kompromis między miastem a lasem — mieszkasz blisko Gdyni, ale masz za oknem zieleń. Sesje rodzinne często zaczynamy na leśnej ścieżce, a kończymy na osiedlowym placu zabaw, gdzie dzieci mogą się wyszaleć, a rodzice odpocząć na ławce między ujęciami.",
      "Dla kobiet z Gościcina sesja kobieca bywa pierwszym krokiem do budowania lepszej relacji ze swoim ciałem i wizerunkiem — szczególnie po ciąży albo w okresie dużych zmian życiowych. Prowadzę ją delikatnie, bez oceniania, z naciskiem na to, co w Tobie piękne tu i teraz.",
      "Noworodkowe sesje lifestyle w Gościcinie to wygoda dla świeżo upieczonych rodziców — nie musicie jechać do centrum Gdyni z wózkiem i torbami. Przyjeżdżam do Was, ustawiam światło przy oknie i fotografuję maluszka w rytmie snu i karmienia.",
      "Zapraszam do współpracy — sesje zdjęciowe w Gościcinie i okolicy w naturalnym stylu Zaczarowanego Kadru. Napisz, jaka okazja Cię prowadzi: rodzina, ciąża, narzeczeństwo czy wizerunek — znajdziemy termin i miejsce, które zostaną z Wami na lata.",
      "Gościcino jako gmina leśna i osiedlowa daje plenery, które świetnie sprawdzają się jesienią i wiosną — kolorowe liście, mgliste poranki, ścieżki między drzewami. Sesje rodzinne wtedy mają głębię i klimat, którego nie da się odtworzyć w studiu.",
      "Dla par z Gościcina sesja narzeczeńska w lesie albo na polanie to spokojna alternatywa dla zatłoczonego Sopocu — romantycznie, naturalnie, bez presji „instagramowej” perfekcji. Liczy się para i emocje między Wami.",
      "Klienci z Gościcina doceniają krótki dojazd fotografki z Wejherowa i brak konieczności organizowania całego dnia pod sesję. Przyjeżdżam, pracujemy dwie–trzy godziny, a Wy wracacie do swojego rytmu z piękną pamiątką w telefonie i na dysku.",
      "Jeśli szukasz fotografa w Gościcinie — na sesję rodzinną, kobiecą, ciążową lub okolicznościową — zapraszam do kontaktu. Razem zaplanujemy dzień, który będzie przyjemnością, a nie stresem przed obiektywem.",
      "Gościcino to gmina, w której wielu moich klientów mieszka „między miastem a lasem” — i ten klimat świetnie widać na zdjęciach: zieleń, spokój, rodzinna bliskość. Sesja może odbyć się na leśnej ścieżce, na osiedlu albo u Was w domu — Ty decydujesz.",
      "Zaczarowany Kadr zaprasza mieszkańców Gościcina i okolic — na naturalną fotografię pełną emocji, z dojazdem z Wejherowa i pełnym wsparciem od pierwszej wiadomości po gotową galerię. Napisz — chętnie odpowiem na pytania i zaproponuję termin.",
      "Gościcino to częsty wybór młodych rodzin, które chcą mieć zdjęcia dzieci w otoczeniu natury, ale bez dalekiej podróży. Las, łąka, osiedlowy park — wszystko w zasięgu krótkiego spaceru od domu.",
      "Sesje kobiece i ciążowe w Gościcinie planuję z uwzględnieniem komfortu — krótsze przejścia, miejsca z ławką, możliwość przerwy. To szczególnie ważne, gdy brzuszek rośnie albo gdy wracasz do formy po porodzie.",
      "Zapraszam do Gościcina — na sesje, które zostaną z Wami na lata. Naturalna fotografia, lokalna obecność i pełne wsparcie na każdym etapie współpracy z Zaczarowanym Kadrem.",
      "Gościcino to gmina, w której łatwo poczuć się jak na wakacjach — nawet w zwykły weekend. Sesja zdjęciowa może być pretekstem, by ten weekend był wyjątkowy, a zdjęcia przypominały o nim przez lata.",
      "Dla mieszkańców Gościcina ważna jest prostota — umawiamy się, przyjeżdżam, fotografujemy bez skomplikowanej logistyki. To szczególnie doceniają rodziny z małymi dziećmi i osoby, które nie chcą tracić całego dnia na organizację.",
      "Zaczarowany Kadr w Gościcinie to sesje rodzinne, kobiece, ciążowe i okolicznościowe w stylu, który stawia na relację i emocje. Napisz — chętnie znajdziemy termin idealny dla Was.",
      "Gościcino to dla mnie przykład miejsca, gdzie nie trzeba jechać daleko, żeby mieć piękne zdjęcia — wystarczy wyjść za dom, wejść w las albo zostać w salonie przy dobrym świetle z okna.",
      "Mieszkańcy Gościcina i okolicznych wsi często wybierają sesję jako prezent dla rodziców lub dziadków — wspólne zdjęcia trzech pokoleń to pamiątka bezcenna. Pomogę Wam taki dzień zorganizować bez stresu i pośpiechu. Napisz — chętnie odpowiem na pytania o terminy i pakiety.",
    ],
  },
};

export const LOCATION_SLUGS = Object.keys(LOCATION_LANDINGS) as LocationLandingSlug[];

const PAGE_SLUG_TO_LOCATION = Object.fromEntries(
  LOCATION_SLUGS.map((slug) => [LOCATION_LANDINGS[slug].pageSlug, slug])
) as Record<string, LocationLandingSlug>;

export function parseLocationPageSlug(pageSlug: string): LocationLandingSlug | null {
  return PAGE_SLUG_TO_LOCATION[pageSlug] ?? null;
}

export function isLocationLandingPageSlug(pageSlug: string): boolean {
  return parseLocationPageSlug(pageSlug) !== null;
}

export function getLocationPath(slug: LocationLandingSlug): string {
  return `/${LOCATION_LANDINGS[slug].pageSlug}`;
}

export function getAllLocationPageSlugs(): string[] {
  return LOCATION_SLUGS.map((slug) => LOCATION_LANDINGS[slug].pageSlug);
}

export function getLocationSchema(content: LocationLandingContent) {
  const path = getLocationPath(content.slug);
  const url = `${SITE_URL}${path}`;

  return {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "ProfessionalService",
        "@id": `${url}/#service`,
        name: content.h1,
        areaServed: content.areaServed,
        provider: { "@id": `${SITE_URL}/#business` },
        serviceType: "Fotografia portretowa i rodzinna",
        url,
        description: content.metaDescription,
      },
      {
        "@type": "WebPage",
        "@id": `${url}/#webpage`,
        url,
        name: content.metaTitle,
        description: content.metaDescription,
        isPartOf: { "@id": `${SITE_URL}/#website` },
        about: { "@type": "Place", name: content.placeName },
        breadcrumb: { "@id": `${url}/#breadcrumb` },
      },
      {
        "@type": "BreadcrumbList",
        "@id": `${url}/#breadcrumb`,
        itemListElement: [
          { "@type": "ListItem", position: 1, name: "Home", item: SITE_URL },
          { "@type": "ListItem", position: 2, name: content.breadcrumbLabel, item: url },
        ],
      },
    ],
  };
}

export function getLocationMetadata(content: LocationLandingContent) {
  return {
    title: content.metaTitle,
    description: content.metaDescription,
    alternates: { canonical: getLocationPath(content.slug) },
    keywords: [...SEO_KEYWORDS, ...content.keywordTags],
    openGraph: {
      title: content.metaTitle,
      description: content.metaDescription,
      url: getLocationPath(content.slug),
      type: "website" as const,
    },
  };
}

export function getArticleWordCount(content: LocationLandingContent): number {
  const text = content.paragraphs.join(" ");
  return text.split(/\s+/).filter(Boolean).length;
}
