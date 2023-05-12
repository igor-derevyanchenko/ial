import { UserButton } from "@clerk/nextjs";
import Link from "next/link";

export default function Home() {
  return (
    <div className="m-2">
      <div className="navbar bg-base-300 rounded-xl">
        <div className="navbar-start">
          <Link className="link-primary text-4xl" href="/">
            Igor&apos;s Anime List
          </Link>
        </div>
        <div className="navbar-end">
          <button className="btn btn-primary">Sign In</button>
          {/* <UserButton /> */}
        </div>
      </div>
    </div>
  );
}
