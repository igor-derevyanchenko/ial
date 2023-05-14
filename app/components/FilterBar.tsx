import Link from "next/link";
const FILTERS = ["All", "Airing", "Upcoming", "TV", "OVA", "Movie", "Special"];

type FilterProps = {
  processedParams: {
    filter: string;
    page: number;
  };
};

export default function FilterBar({ processedParams }: FilterProps) {
  const { filter, page } = processedParams;

  return (
    <>
      <div className="flex gap-4 justify-center items-center text-xl">
        Filter by:{" "}
        {FILTERS.map((buttonLabel, index) => {
          let className = "btn btn-secondary btn-outline";

          if (buttonLabel.toLowerCase() === filter) {
            className += " btn-active";
          }

          return (
            <Link
              className={className}
              key={`filter-${index}`}
              href={`/?filter=${buttonLabel.toLowerCase()}&page=${page}`}
            >
              {buttonLabel}
            </Link>
          );
        })}
      </div>
    </>
  );
}
