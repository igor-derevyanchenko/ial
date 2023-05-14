"use client";

import { signIn } from "next-auth/react";

export default function SignInButton({ provider }: any) {
  return (
    <button onClick={() => signIn(provider.id, { callbackUrl: "/" })}>
      Sign in with {provider.name}
    </button>
  );
}
