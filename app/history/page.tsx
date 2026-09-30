import type { Metadata } from "next";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { editions } from "@/data/editions";

export const metadata: Metadata = {
  title: "History",
  description: "The Honeybadgers on Tour archive, from Bucharest to Coimbra.",
};

export default function HistoryPage() {
  return (
    <section className="history-page">
      <div className="page-shell">
        <p className="eyebrow">Honeybadgers on Tour</p>
        <h1>History</h1>
        <p className="lede">
          The full story will be added later. For now, this timeline gives every
          edition a permanent place in the archive.
        </p>
        <HistoryTimeline editions={editions} />
      </div>
    </section>
  );
}
