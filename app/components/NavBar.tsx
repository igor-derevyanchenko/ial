"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useState } from "react";

export default function NavBar() {
  const authenticated: boolean = useSession().status === "authenticated";
  const router = useRouter();
  const [query, setQuery] = useState("");

  return (
    <div className="m-2">
      <div className="navbar gap-4 bg-base-300 rounded-xl">
        <div>
          <Link className="link-primary text-5xl m-2" href="/">
            Igor&apos;s Anime List
          </Link>
        </div>
        <div className="grow">
          <form
            className="w-full"
            onSubmit={(e) => {
              e.preventDefault();
              router.push(`/search?filter=${query}`);
            }}
          >
            <input
              type="text"
              placeholder="Search"
              className="input input-primary focus:outline-none w-full"
              onChange={(e) => {
                setQuery(e.target.value);
              }}
            />
          </form>
        </div>
        <div>
          {authenticated ? (
            <div className="flex gap-2">
              <button className="btn btn-primary">Profile</button>
              <button
                className="btn btn-primary mr-2"
                onClick={() => signOut()}
              >
                Sign out
              </button>
            </div>
          ) : (
            <button className="btn btn-primary mr-2" onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
