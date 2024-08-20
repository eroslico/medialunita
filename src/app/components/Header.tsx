"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot, faUser } from "@fortawesome/free-solid-svg-icons";
import { signIn, signOut } from "next-auth/react";
import { Session } from "next-auth";
import { parseFullName } from "parse-full-name";
import Image from "next/image";

export default function Header({ session }: { session: Session | null }) {
  const name = session?.user?.name || "";
  const { first: firstName } = parseFullName(name);
  return (
    <>
      <header className="mb-16">
        <div className="flex justify-between max-w-2xl mx-auto px-4 py-2">
          <Link href={"/"} className="inline-flex gap-1 items-center">
            <FontAwesomeIcon className="h-8" icon={faMugHot} />
            <span className="mt-2">Medialunita</span>
          </Link>
          <nav className="mt-2 flex gap-6 items-center">
            <Link href={"/about"}>About</Link>
            <Link href={"/about"}>FAQ</Link>
            <Link href={"/about"}>Contact</Link>
            <div className="flex gap-4">
              {session && (
                <div className="">
                  <button
                    onClick={() => signOut()}
                    className="flex items-center gap-2 bg-yellow-300 rounded-full p-1 pr-4"
                  >
                    <Image
                      src={session.user?.image as string}
                      alt={"avatar"}
                      width="30"
                      height="30"
                      className="rounded-full"
                    />
                    {firstName}
                  </button>
                </div>
              )}
              {!session && (
                <>
                  <button
                    onClick={() => signIn("google")}
                    className="border-2 rounded-full px-4 py-2 ml-4"
                  >
                    Login
                  </button>
                  <button className="bg-yellow-300 rounded-full px-4 py-2">
                    Sign up
                  </button>
                </>
              )}
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
