import { ProcessedProps } from "../types";
import Link from "next/link";
import { showsPerPage } from "../constants";

type Anime = {
  node: {
    id: string;
    title: string;
    main_picture: {
      large: string;
      medium: string;
    };
  };
  ranking: { rank: string };
};

export default async function AniGrid({ searchParams }: ProcessedProps) {
  const { filter, page } = searchParams;
  const offset: number = (page - 1) * showsPerPage;

  const aniList: Anime[] = await fetch(
    `https://api.myanimelist.net/v2/anime/ranking?ranking_type=${filter}&limit=${showsPerPage}&offset=${offset}`,
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
    .then((parsedRes) => parsedRes.data);

  console.log(aniList);

  return (
    <div className="grid ani-grid gap-4 justify-center mt-4">
      {aniList.map((item, index) => {
        const anime = item.node;

        return (
          <Link
            className="relative"
            key={`anime-${index}`}
            href={`/anime/${anime.id}`}
          >
            <img
              className="rounded-xl w-[400px] h-[600px]"
              src={anime.main_picture.large}
              alt={`${anime.title} banner`}
            />
            <div className="absolute rounded-xl inset-0 flex justify-center items-center opacity-0 text-4xl text-secondary text-center transition duration-300 hover:bg-base-300 hover:bg-opacity-90 hover:opacity-100">
              {anime.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
}
