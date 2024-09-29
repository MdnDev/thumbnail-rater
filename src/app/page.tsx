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
        <div>
          <h1 className="ml-2 text-4xl font-bold text-[#005A4E] dark:text-[#DBF9FF] border-b-4 border-[#57E1C0]">
            My Documents
          </h1>
        </div>

        <CreateDocumentButton />
      </div>

      <div className="flex flex-wrap justify-center items-center p-4 space-y-4 md:space-y-0 md:space-x-4">
        <div className="bg-[#FAFCFC] dark:bg-[#05201D] border border-[#05201D] dark:border-[#57E1C0] backdrop-blur-md rounded-xl p-6 w-full md:w-1/3 shadow-lg dark:shadow-xl hover:bg-[rgba(241,255,253,0.86)] dark:hover:bg-[rgba(17,43,37,0.6)] hover:shadow-xl transition-all duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-[#005A4E] dark:text-[#DBF9FF]">
            Systèmes et templates light 2ddc
          </h2>
          <p className="text-[#004D4F] dark:text-[#B6D1D6]">
            Apprenez à créer et à implémenter des systèmes automatisés de vente,
            et à utiliser une approche de masse pour la vente de service.
          </p>
        </div>

        <div className="bg-gradient-to-br bg-[#FAFCFC] dark:bg-[#05201D] border border-[#05201D] dark:border-[#57E1C0] backdrop-blur-md rounded-xl p-6 w-full md:w-1/3 shadow-lg dark:shadow-xl hover:bg-[rgba(241,255,253,0.86)] dark:hover:bg-[rgba(17,43,37,0.6)] hover:shadow-xl transition-all duration-300 ease-in-out">
          <h2 className="text-2xl font-semibold mb-4 text-[#005A4E] dark:text-[#DBF9FF]">
            Systèmes et templates light 2ddcsss
          </h2>
          <p className="text-[#004D4F] dark:text-[#B6D1D6]">
            Apprenez à créer et à implémenter des systèmes automatisés de vente,
            et à utiliser une approche de masse pour la vente de service.
          </p>
        </div>
      </div>

      <div className="grid grid-cols-4 gap-8">
        {documents?.map((document) => <DocumentCard document={document} />)}
      </div>
    </main>
  );
}
