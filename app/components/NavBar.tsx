"use client";

import { signIn, signOut, useSession } from "next-auth/react";
import Link from "next/link";

export default function NavBar() {
  const authenticated = useSession().status === "authenticated";

  return (
    <div className="m-2">
      <div className="navbar bg-base-300 rounded-xl">
        <div className="navbar-start">
          <Link className="link-primary text-5xl m-2" href="/">
            Igor&apos;s Anime List
          </Link>
        </div>
        <div className="navbar-end">
          {authenticated ? (
            <div className="flex gap-4">
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
