"use client";

import { SignInButton, UserButton } from "@clerk/clerk-react";
import { Authenticated, AuthLoading, Unauthenticated } from "convex/react";

export function HeaderActions() {
  return (
    <>
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
          <UserButton />
      </Authenticated>
      <AuthLoading>Loading...</AuthLoading>
    </>
  );
}
