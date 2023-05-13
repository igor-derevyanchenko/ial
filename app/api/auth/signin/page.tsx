import { getProviders } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../util";
import { redirect } from "next/navigation";
import SignInButton from "@/app/components/SignInButton";

export default async function SignIn() {
  const session = await getServerSession(authOptions);
  const providers = await getProviders();

  if (session) {
    redirect("/");
  }

  if (providers === null) {
    return (
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-300 p-4 rounded-md drop-shadow-md">
        Something went wrong!
      </div>
    );
  }

  return (
    <>
      {Object.values(providers).map((provider) => (
        <div
          key={provider.name}
          className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 bg-base-300 p-4 rounded-md drop-shadow-md"
        >
          <SignInButton provider={provider} />
        </div>
      ))}
    </>
  );
}
