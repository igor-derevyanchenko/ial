import { HomeProps } from "./types";
import NavBar from "./components/NavBar";
import FilterBar from "./components/FilterBar";
import AniGrid from "./components/AniGrid";
import PagingButtons from "./components/PagingButtons";

export default async function Home({ searchParams }: HomeProps) {
  const processedParams = {
    filter: searchParams.filter ?? "all",
    page: Number(searchParams.page ?? 1),
  };

  return (
    <>
      <NavBar />
      <FilterBar searchParams={processedParams} />
      {/* @ts-expect-error Server Component */}
      <AniGrid searchParams={processedParams} />
      <PagingButtons searchParams={processedParams} />
    </>
  );
}
