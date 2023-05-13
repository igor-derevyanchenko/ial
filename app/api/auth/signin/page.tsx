import type {
  GetServerSidePropsContext,
  InferGetServerSidePropsType,
} from "next";
import { getProviders, getSession, signIn } from "next-auth/react";
import { getServerSession } from "next-auth/next";
import { authOptions } from "../[...nextauth]/route";
import { redirect } from "next/navigation";
import SignInButton from "@/app/components/SignInButton";

export default async function SignIn() {
  const session = await getSession();
  const providers = (await getProviders()) as Object;

  if (session) {
    redirect("/");
  }

  console.log(providers);
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
