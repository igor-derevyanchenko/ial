import { homeProps } from "./types";
import NavBar from "./components/NavBar";
import FilterBar from "./components/FilterBar";
import AniGrid from "./components/AniGrid";
import PagingButtons from "./components/PagingButtons";

export default async function Home({ searchParams }: homeProps) {
  return (
    <>
      <NavBar />
      <FilterBar searchParams={searchParams} />
      {/* @ts-expect-error Server Component */}
      <AniGrid searchParams={searchParams} />
      <PagingButtons searchParams={searchParams} />
    </>
  );
}
