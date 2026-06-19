import Link from "next/link";
import type { LocationLandingContent } from "@/lib/locationLandings";
import { getLocationPath, getLocationSchema } from "@/lib/locationLandings";
import { COMPANY_NAME } from "@/lib/constants";

type Props = {
  content: LocationLandingContent;
};

export default function LocationLandingPage({ content }: Props) {
  const schema = getLocationSchema(content);

  return (
    <article
      aria-label={content.h1}
      className="py-16 md:py-24 px-4 md:px-6 bg-white"
    >
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
      />

      <div className="max-w-3xl mx-auto">
        <nav aria-label="Breadcrumb" className="mb-8 text-sm font-mono uppercase tracking-widest text-retro-grey">
          <ol className="flex flex-wrap items-center gap-2">
            <li>
              <Link href="/" className="hover:text-retro-orange transition-colors">
                Home
              </Link>
            </li>
            <li aria-hidden="true" className="text-retro-orange">
              /
            </li>
            <li className="text-retro-black">{content.breadcrumbLabel}</li>
          </ol>
        </nav>

        <header className="mb-12 text-center md:text-left">
          <span className="text-retro-orange uppercase tracking-[0.3em] text-xs font-bold font-mono">
            {COMPANY_NAME} · {content.areaServed}
          </span>
          <h1 className="!text-retro-black text-3xl md:text-5xl font-serif mt-4 italic leading-tight">
            {content.h1}
          </h1>
        </header>

        <div className="prose prose-lg prose-neutral max-w-none prose-headings:!text-retro-black prose-headings:font-serif prose-headings:italic prose-p:text-retro-grey prose-p:font-light prose-p:leading-relaxed prose-p:text-base md:prose-p:text-lg">
          {content.paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-16 pt-10 border-t border-retro-grey/20 text-center">
          <p className="!text-retro-black text-xl font-serif italic mb-6">
            Chcesz zarezerwować sesję w {content.placeName} lub okolicy? Napisz — chętnie znajdziemy termin i miejsce idealne dla Was.
          </p>
          <Link
            href="/kontakt"
            aria-label={`Skontaktuj się w sprawie sesji w ${content.placeName}`}
            className="inline-block bg-retro-orange text-white px-10 py-4 rounded-sm shadow-md hover:bg-orange-700 transition-all uppercase text-sm tracking-wider font-mono"
          >
            Umów sesję — kontakt
          </Link>
          <p className="mt-6 text-sm text-retro-grey">
            Zobacz też{" "}
            <Link href="/oferta" className="text-retro-orange hover:underline underline-offset-4">
              pełną ofertę sesji
            </Link>{" "}
            oraz{" "}
            <Link href="/cennik" className="text-retro-orange hover:underline underline-offset-4">
              cennik
            </Link>
            .
          </p>
        </div>
      </div>
    </article>
  );
}
