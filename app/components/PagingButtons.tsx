import { homeProps } from "../types";
import Link from "next/link";

export default function PagingButtons({ searchParams }: homeProps) {
  const filter = searchParams.filter ?? "all";
  const page = Number(searchParams.page ?? 1);
  const offset = page < 6 ? page - 1 : 5;
  let buttons = [];

  for (let i = 0; i <= 12; i++) {
    let buttonText: string | number = i;
    let className = "btn";
    let destinationPage;

    if (i === 0) {
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
      <Link
        className={className}
        href={`/?filter=${filter}&page=${destinationPage}`}
      >
        {buttonText}
      </Link>
    );
    buttons.push(button);
  }

  return <div className="btn-group flex justify-center m-4">{buttons}</div>;
}
