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
      {/* <Image
        src={img}
        alt={title}
        width={800}
        height={800}
        className="  h-auto"
      /> */}
      <div className=" bg-gray-200 pt-7 rounded-tr-xl  w-64 md:w-[385px] rounded-bl-xl">
        <Image
          src={img}
          alt={title}
          width={800}
          height={800}
          className="w-full h-auto "
        />

      </div>
      <P className=" md:text-sm" color="text-secondary-foreground">
        {title}
      </P>
      <P color="text-popover">{pos}</P>
    </motion.div>
  );
};

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
          Our Core Team
        </H1>
      </motion.div>
      <div className="flex flex-col md:flex-row   items-center justify-start md:gap-5 md:overflow-x-scroll no-scrollbar">
        {teamMembers.map((member, index) => (

          <Team
            img={member.img}
            title={member.title}
            pos={member.pos}
          />

        ))}
      </div>
    </div>
  );
};