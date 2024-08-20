"use client";

import Link from "next/link";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faMugHot } from "@fortawesome/free-solid-svg-icons";
import { signIn } from "next-auth/react";

export default function Header() {
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
              <button
                onClick={() => signIn("google")}
                className="border-2 rounded-full px-4 py-2 ml-4"
              >
                Login
              </button>
              <button className="bg-yellow-300 rounded-full px-4 py-2">
                Sign up
              </button>
            </div>
          </nav>
        </div>
      </header>
    </>
  );
}
