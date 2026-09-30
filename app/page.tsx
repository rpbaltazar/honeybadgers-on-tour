import { EditionPage } from "@/components/EditionPage";
import { getCurrentEdition } from "@/data/editions";

export default function Home() {
  return <EditionPage edition={getCurrentEdition()} isHomepage />;
}
