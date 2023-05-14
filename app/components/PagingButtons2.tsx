"use client";
import { useRouter } from "next/navigation";
import { ProcessedProps } from "../types";
import { AppRouterInstance } from "next/dist/shared/lib/app-router-context";

export default function PagingButtons({ processedParams }: ProcessedProps) {
  const router: AppRouterInstance = useRouter();
  const { filter, page } = processedParams;
  const offset: number = page < 6 ? page - 1 : 5;
  let buttons: JSX.Element[] = [];

  for (let i = 0; i <= 12; i++) {
    let buttonText: string | number = i;
    let className: string = "btn";
    let destinationPage: number;

    if (i === 0) {
      if (page === 1) {
        continue;
      }

      buttonText = "<";
      destinationPage = page - 1;
    } else if (i === 12) {
      buttonText = ">";
      destinationPage = page + 1;
    } else {
      buttonText = i - 1 + page - offset;
      destinationPage = buttonText;

      if (buttonText === page) {
        className += " btn-active";
      }
    }

    let button = (
      <button
        className={className}
        key={`page-${i}`}
        onClick={() => {
          window.scrollTo({ top: 0, behavior: "smooth" });

          router.push(`/?filter=${filter}&page=${destinationPage}`);
        }}
      >
        {buttonText}
      </button>
    );
    buttons.push(button);
  }

  return <div className="btn-group flex justify-center m-4">{buttons}</div>;
}
