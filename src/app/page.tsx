"use client";

import { useMutation, useQuery } from "convex/react";
import { api } from "../../convex/_generated/api";
import { DocumentCard } from "./document-card";
import { CreateDocumentButton } from "./create-document-button";

export default function Home() {
  const createDocument = useMutation(api.documents.createDocument);
  const documents = useQuery(api.documents.getDocuments);
  return (
    <main className="p-24 space-y-8">
      <div className="flex justify-between items-center">
        <h1 className="text-4xl font-bold">My Documents</h1>
        <CreateDocumentButton/>
      </div>

     
      <div className="grid grid-cols-4 gap-8">
        {documents?.map((document) => <DocumentCard document={document} />)}
      </div>
    </main>
  );
}
