"use client";
import Clients from "@/components/Clients";
import Projects from "@/components/Projects";

export default function Home() {
  return (
    <main className="flex flex-col items-center justify-between">
      <Projects />
      <Clients />
      {/* <AddClientForm /> */}
     
    </main>
  );
}
