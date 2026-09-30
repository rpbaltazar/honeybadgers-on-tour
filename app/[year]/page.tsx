import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { EditionPage } from "@/components/EditionPage";
import { editions, getEdition } from "@/data/editions";

interface YearPageProps {
  params: Promise<{
    year: string;
  }>;
}

export const dynamicParams = false;

export function generateStaticParams() {
  return editions.map((edition) => ({
    year: String(edition.year),
  }));
}

export async function generateMetadata({ params }: YearPageProps): Promise<Metadata> {
  const { year } = await params;
  const edition = getEdition(Number(year));

  if (!edition) {
    return {};
  }

  return {
    title: `Honeybadgers on Tour — ${edition.city} ${edition.year}`,
    description:
      edition.introduction ??
      `Honeybadgers on Tour ${edition.year} in ${edition.city}, ${edition.country}.`,
  };
}

export default async function YearPage({ params }: YearPageProps) {
  const { year } = await params;
  const edition = getEdition(Number(year));

  if (!edition) {
    notFound();
  }

  return <EditionPage edition={edition} />;
}
