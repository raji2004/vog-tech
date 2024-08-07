import Image from "next/image";
import { Hero } from "./_components/hero";
import { WhatWeProvide } from "./_components/whatweprovide";
import { ServiceIntro } from "./_components/serviceintro";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <WhatWeProvide />
      <ServiceIntro />
    </main>
  );
}
