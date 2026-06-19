import type { Metadata } from "next";
import { notFound } from "next/navigation";
import LocationLandingPage from "@/components/LocationLandingPage";
import {
  LOCATION_LANDINGS,
  getAllLocationPageSlugs,
  getLocationMetadata,
  parseLocationPageSlug,
} from "@/lib/locationLandings";

type PageProps = {
  params: Promise<{ slug: string }>;
};

export function generateStaticParams() {
  return getAllLocationPageSlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params;
  const locationSlug = parseLocationPageSlug(slug);
  if (!locationSlug) return {};
  return getLocationMetadata(LOCATION_LANDINGS[locationSlug]);
}

export default async function LocationLandingRoute({ params }: PageProps) {
  const { slug } = await params;
  const locationSlug = parseLocationPageSlug(slug);

  if (!locationSlug) {
    notFound();
  }

  return <LocationLandingPage content={LOCATION_LANDINGS[locationSlug]} />;
}
