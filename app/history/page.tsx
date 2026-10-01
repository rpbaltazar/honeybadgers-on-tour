import type { Metadata } from "next";
import { HistoryTimeline } from "@/components/HistoryTimeline";
import { editions } from "@/data/editions";

export const metadata: Metadata = {
  title: "History",
  description:
    "The story of Honeybadgers on Tour, from a Singapore expat football team to an annual international away weekend.",
};

export default function HistoryPage() {
  return (
    <section className="history-page">
      <div className="page-shell">
        <p className="eyebrow">Honeybadgers on Tour</p>
        <h1>History</h1>
        <p className="lede">
          What started as a football team for people looking for somewhere to
          belong in Singapore became a roaming annual reunion: football first,
          beers close behind, and friends spread across the world.
        </p>

        <div className="history-story">
          <section className="story-block story-block-wide">
            <p className="eyebrow">How It Started</p>
            <h2>Built In Singapore</h2>
            <p>
              Honey Badgers was founded in 2014 by Dan Koh, who wanted to play
              football but could not find a team that felt like the right fit.
              So he made one. The name came from the honey badger itself:
              brave, tough and stubborn enough to keep going.
            </p>
            <p>
              The team was not created only for expats, but Singapore being
              Singapore, that is who found it. Over time, players from around
              fifteen nationalities joined. Some stayed for years, some moved
              away, but the team became the thing that turned strangers into
              actual friends.
            </p>
          </section>

          <section className="story-block">
            <h2>Football As The Excuse</h2>
            <p>
              The early football was not exactly glorious. There were heavy
              defeats, including the sort of 10-0 result that becomes funnier
              only after enough time has passed. Better players joined, the team
              improved, and eventually the training stopped mattering more than
              the match, the sideline chat and the post-game beer.
            </p>
          </section>

          <section className="story-block">
            <h2>The Rule That Matters</h2>
            <p>
              The group works because it stays intentionally international. The
              idea has always been to avoid little national cliques, speak
              English so everyone is included, and make sure every player feels
              part of the same team.
            </p>
          </section>

          <section className="story-block story-block-wide">
            <p className="eyebrow">On Tour</p>
            <h2>Home Countries, Away Weekends</h2>
            <p>
              As players left Singapore and scattered across countries, the
              Honey Badgers kept the connection alive by travelling each year to
              the home country of one of the players. The formula is simple:
              catch up, drink beers, play football and give each trip a place in
              the archive.
            </p>
            <p>
              The weekends have taken the group through Romania, Bulgaria,
              Ireland, the United Kingdom and the Netherlands, with Portugal
              next. Not everyone can make every year, but a solid core keeps
              showing up.
            </p>
          </section>
        </div>

        <div className="history-stats" aria-label="Honeybadgers history facts">
          <div>
            <strong>2014</strong>
            <span>Founded in Singapore</span>
          </div>
          <div>
            <strong>15</strong>
            <span>Nationalities represented</span>
          </div>
          <div>
            <strong>30</strong>
            <span>Players in the wider group</span>
          </div>
        </div>

        <section className="timeline-section">
          <h2>Badgers On Tour</h2>
          <HistoryTimeline editions={editions} />
        </section>
      </div>
    </section>
  );
}
