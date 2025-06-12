"use client";
import AddClientForm from "@/components/AddClientForm";
import Clients from "@/components/Clients";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Clients />
      {/* <AddClientForm /> */}
     
    </main>
  );
}
