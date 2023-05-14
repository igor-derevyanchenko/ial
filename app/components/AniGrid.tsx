import { ProcessedProps, Paging } from "../types";
import Link from "next/link";
import { SHOWS_PER_PAGE } from "../constants";
import PagingButtons from "./PagingButtons";

type Anime = {
  node: {
    id: string;
    title: string;
    main_picture:
      | {
          large: string;
          medium: string;
        }
      | undefined;
  };
  ranking: { rank: string };
};

type MalResponse = {
  data?: Anime[];
  paging?: Paging;
};

export default async function AniGrid({
  processedParams,
  action,
}: ProcessedProps) {
  console.log(processedParams);
  const { filter, page } = processedParams;
  const offset: number = (page - 1) * SHOWS_PER_PAGE;

  const malResponse: MalResponse =
    action === "ranking"
      ? await fetchRanking(filter, offset)
      : action === "search"
      ? await fetchSearch(filter, offset)
      : {};

  const aniList: Anime[] = malResponse.data ?? [];
  const paging: Paging | undefined = malResponse.paging;

  if (aniList.length === 0) {
    return (
      <div className="text-center text-4xl absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
        No results found!
      </div>
    );
  }

  return (
    <>
      <div className="grid ani-grid gap-4 justify-center mt-4">
        {aniList.map((item, index) => {
          const anime = item.node;

          return (
            <Link
              className="relative"
              key={`anime-${index}`}
              href={`/anime/${anime.id}`}
            >
              {anime.main_picture && (
                <img
                  className="rounded-xl w-[400px] h-[600px]"
                  src={anime.main_picture.large}
                  alt={`${anime.title} banner`}
                />
              )}
              <div
                className={`${
                  anime.main_picture ? "opacity-0" : ""
                } absolute rounded-xl inset-0 flex justify-center items-center text-4xl text-secondary text-center transition duration-300 bg-base-300 bg-opacity-90 hover:opacity-100`}
              >
                {anime.title}
              </div>
            </Link>
          );
        })}
      </div>
      <PagingButtons
        processedParams={processedParams}
        action={action}
        paging={paging}
      />
    </>
  );
}

async function fetchRanking(
  filter: string,
  offset: number
): Promise<MalResponse> {
  return await fetch(
    `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${filter}&limit=${SHOWS_PER_PAGE}&offset=${offset}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID as string,
      },
    }
  )
    .then((res) => res.json())
    .then((parsedRes) => parsedRes);
}

async function fetchSearch(
  query: string,
  offset: number
): Promise<MalResponse> {
  return await fetch(
    `https://api.myanimelist.net/v2/anime?q=${query}&limit=${SHOWS_PER_PAGE}&offset=${offset}`,
    {
      cache: "no-store",
      method: "GET",
      headers: {
        "Content-Type": "application/json",
        "X-MAL-CLIENT-ID": process.env.MAL_CLIENT_ID as string,
      },
    }
  )
    .then((res) => res.json())
    .then((parsedRes) => {
      if (parsedRes.error) {
        return {};
      }

      return parsedRes;
    });
}
