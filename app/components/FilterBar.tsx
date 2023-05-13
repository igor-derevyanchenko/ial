import Link from "next/link";
import { homeProps } from "../types";
const FILTERS = ["All", "Airing", "Upcoming", "TV", "OVA", "Movie", "Special"];

export default function FilterBar({ searchParams }: homeProps) {
  const filter = searchParams.filter ?? "all";
  const page = Number(searchParams.page ?? 1);

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
