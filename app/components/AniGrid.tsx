import { homeProps } from "../types";
import Link from "next/link";
import { showsPerPage } from "../constants";

export default async function AniGrid({ searchParams }: homeProps) {
  const filter = searchParams.filter ?? "all";
  const page = Number(searchParams.page ?? 1);
  const offset = (page - 1) * showsPerPage;

  const aniList = await fetch(
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

  return <div>hello</div>;
}
