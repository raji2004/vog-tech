"use client";
import { motion } from "framer-motion";
import { P, H4, H1 } from "@/components/typography";
import Image from "next/image";
import { teamMembers } from "./data";

const Team = ({ img, title, pos }: { img: string; title: string; pos: string }) => {
  return (
    <motion.div
      initial={{ opacity: 0, translateY: 50 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="flex flex-col items-center text-center"
    >
      <Image
        src={img}
        alt={title}
        width={200}
        height={200}
        className=" rounded-tl-3xl rounded-tr-3xl"
      />
      <H4 className="text-sm md:text-sm" color="text-secondary-foreground">
        {title}
      </H4>
      <P color="text-popover">{pos}</P>
    </motion.div>
  );
};

export const CoreTeam = () => {
  

  return (
    <div className="bg-white space-y-5 p-section-padding-sm md:p-section-padding">
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
      >
        <H1 color="text-primary" className="text-center">
          Our Core Team
        </H1>
      </motion.div>
      <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center md:gap-5 md:overflow-x-auto no-scrollbar">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-shrink-0 w-40">
            <Team
              img={member.img}
              title={member.title}
              pos={member.pos}
            />
          </div>
        ))}
      </div>
    </div>
  );
};