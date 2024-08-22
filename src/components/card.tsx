'use client';
import { cn } from "@/lib/utils";
import { H4, P, H3 } from "./typography";
import Image from "next/image";
import { cardProps } from "@/lib/types";
import { motion } from "framer-motion";

export const Card = ({ className, title, description, icon }: cardProps) => {
    return (
        <div className={cn("flex flex-col md:max-w-xs lg:max-w-sm w-fit items-center justify-between gap-6 p-4 bg-card text-primary-foreground rounded-lg", className)}>
            <div className=" bg-white rounded-md p-2 text-primary w-fit flex justify-center items-center gap-4">
                <Image
                    src={icon}
                    alt={title ? title : "icon"}
                    width={40}
                    height={40}
                    className="h-auto"
                />
            </div>
            <H4 color={'text-primary-foreground'}>{title}</H4>
            <P className=" md:text-base text-center" color={'text-primary-foreground'}>{description}</P>
        </div>
    );
}


export const ClientCard = ({ title, icon }: Omit<cardProps,"description"| 'className'>) => {

    return (
        <div className=" border-2 border-secondary p-4 text-center  gap-3 max-w-md  flex flex-col items-center  rounded-2xl">
            <Image
                src={icon}
                alt={title ? title : "icon"}
                width={40}
                height={40}
                className=" w-28 h-auto"
            />
            <H3>{title}</H3>
        </div>
    )

}

export const TeamCard = ({ img, title, pos }: { img: string; title: string; pos: string }) => {
    return (
      <motion.div
        initial={{ opacity: 0, translateY: 50 }}
        whileInView={{ opacity: 1, translateY: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="flex flex-col items-center text-center"
      >
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
  

