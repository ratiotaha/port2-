import Image from "next/image";

import Hero from "../app/components/Hero";
import Aboutme from "../app/components/About";

export default function Home() {
  return (
    <main className="flex min-h-screen px-[auto] flex-col bg-[black] container mx-auto px-12 py-4">
      <Hero />
      <Aboutme />
    </main>
  );
}
