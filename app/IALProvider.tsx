"use client";

import { ClerkProvider } from "@clerk/nextjs";

export default function IALProvider({ children }: React.PropsWithChildren) {
  return <ClerkProvider>{children}</ClerkProvider>;
}
