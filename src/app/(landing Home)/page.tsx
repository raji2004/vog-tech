import Image from "next/image";
import { Hero } from "./_components/hero";
import { WhatWeProvide } from "./_components/whatweprovide";
import { ServiceIntro } from "./_components/serviceintro";
import { OurApproach } from "./_components/ourapproach";
import { WhyChooseUs } from "./_components/whychooseus";

export default function Home() {
  return (
    <main className=" ">
      <Hero />
      <WhatWeProvide />
      <ServiceIntro />
      <OurApproach/>
      <WhyChooseUs/>

    </main>
  );
}
