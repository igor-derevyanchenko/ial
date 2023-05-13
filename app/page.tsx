"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function Home() {
  const authenticated = useSession().status === "authenticated";

  return (
    <div className="m-2">
      <div className="navbar bg-base-300 rounded-xl">
        <div className="navbar-start">
          <Link className="link-primary text-4xl" href="/">
            Igor&apos;s Anime List
          </Link>
        </div>
        <div className="navbar-end">
          {authenticated ? (
            <div className="flex gap-1">
              <button className="btn btn-primary">Profile</button>
              <button className="btn btn-primary" onClick={() => signOut()}>
                Sign out
              </button>
            </div>
          ) : (
            <button className="btn btn-primary" onClick={() => signIn()}>
              Sign In
            </button>
          )}
        </div>
      </div>
    </div>
  );
}
