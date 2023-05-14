import AniGrid from "../components/AniGrid";
import NavBar from "../components/NavBar";

type SearchProps = {
  searchParams: {
    filter: string | undefined;
    page: string | undefined;
  };
};

export default function Search({ searchParams }: SearchProps) {
  const processedParams = {
    filter: searchParams.filter ?? "",
    page: Number(searchParams.page ?? 1),
  };

  return (
    <>
      <NavBar />
      {/* @ts-expect-error Server Component */}
      <AniGrid processedParams={processedParams} action="search" />
    </>
  );
}
