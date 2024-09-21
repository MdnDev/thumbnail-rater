"use client";

import { SignInButton, UserButton } from "@clerk/nextjs";
import {
  Authenticated,
  Unauthenticated,
  useMutation,
  useQuery,
} from "convex/react";
import { api } from "../../convex/_generated/api";

export default function Home() {
  const createDocument = useMutation(api.documents.createDocument);
  const documents = useQuery(api.documents.getDocuments);
  return (
    <main className="flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <Unauthenticated>
        <SignInButton />
      </Unauthenticated>
      <Authenticated>
        <UserButton />

        <button
          onClick={() => {
            createDocument({ title: "street fighter" });
          }}
        >
          Click me
        </button>
        {documents?.map((document) => <p>{document.title}</p>)}
      </Authenticated>
    </main>
  );
}
