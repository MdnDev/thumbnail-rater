"use client";

import { ModeToggle } from "@/components/ui/mode-toggle";
import Image from "next/image";
import { HeaderActions } from "./header-actions";

export function Header() {
  return (
    <div className="bg-[#11C99D] py-4">
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

        <div className="flex gap-4">
          <ModeToggle />
          <HeaderActions />
        </div>
      </div>
    </div>
  );
}
