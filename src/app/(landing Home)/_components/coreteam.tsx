"use client";
import { motion } from "framer-motion";
import { P, H4, H1, UnderLine } from "@/components/typography";
import {
  Carousel,
  CarouselContent,
  CarouselItem,
  type CarouselApi
} from "@/components/ui/carousel";
import { teamMembers } from "./data";
import { TeamCard } from "@/components/card";


export const CoreTeam = () => {


  return (
    <div className="  my-10 space-y-5 p-section-padding-sm md:p-section-padding">
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <H1 color="text-primary" className="text-center">
          Our <UnderLine>Core Team</UnderLine>
        </H1>
      </motion.div>

      <Carousel
        opts={{ loop: true }}
        autoplay={true}
        autoplayInterval={5000}
      >
        <CarouselContent >
          {teamMembers.map((member, index) => (
            <CarouselItem className=" md:basis-1/3" key={index}>
              <TeamCard
                img={member.img}
                title={member.title}
                pos={member.pos}
              />
            </CarouselItem>
          ))}
        </CarouselContent>
      </Carousel>

    </div>
  );
};