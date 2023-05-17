"use client";
import { useRouter } from "next/navigation";
import { ProcessedProps, Paging } from "../types";

interface PagingProps extends ProcessedProps {
  paging?: Paging;
}

export default function PagingButtons({
  processedParams,
  action,
  paging,
}: PagingProps) {
  const router = useRouter();
  const { filter, page } = processedParams;
  const handleClick = (e: React.MouseEvent<HTMLButtonElement>): void => {
    window.scrollTo({ top: 0, behavior: "smooth" });
    let url: string = "/";

    if (action === "search") {
      url += "search";
    }

    let destinationPage: number = page;

    if (e.currentTarget.id === "prev") {
      destinationPage = page - 1;
    } else if (e.currentTarget.id === "next") {
      destinationPage = page + 1;
    }

    router.push(`${url}?filter=${filter}&page=${destinationPage}`);
  };

  return (
    <div className="btn-group flex justify-center m-4">
      <button
        className="btn"
        disabled={paging?.previous ? false : true}
        id="prev"
        onClick={handleClick}
      >
        &lt;&lt;
      </button>
      <button className="btn pointer-events-none" onClick={handleClick}>
        page {page}
      </button>
      <button
        className="btn"
        disabled={paging?.next ? false : true}
        id="next"
        onClick={handleClick}
      >
        &gt;&gt;
      </button>
    </div>
  );
}
