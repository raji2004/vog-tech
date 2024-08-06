import Image from "next/image";
import { Hero } from "./_components/hero";
import { WhatWeProvide } from "./_components/whatweprovide";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <WhatWeProvide />
    </main>
  );
}
