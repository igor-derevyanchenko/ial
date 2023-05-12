"use client";

import { SessionProvider } from "next-auth/react";

export default function IALProvider({ children }: React.PropsWithChildren) {
  return <SessionProvider>{children}</SessionProvider>;
}
