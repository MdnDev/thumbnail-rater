"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import { SignInButton, UserButton } from "@clerk/nextjs";
import { Authenticated, Unauthenticated } from "convex/react";
import Image from "next/image";

export function Header() {
  return (
    <div className="bg-slate-900 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <div className="flex items-center gap-4 text-2xl">
          <Image
            src="/logo.png"
            height={40}
            width={40}
            alt="image of a brain"
            className="rounded"
          />
          Big Brain
        </div>

        <div>
          {" "}
          <Unauthenticated>
            <SignInButton />
          </Unauthenticated>
          <Authenticated>
            <div className="flex gap-4">
              <UserButton />

              <ModeToggle />
            </div>
          </Authenticated>
        </div>
      </div>
    </div>
  );
}
