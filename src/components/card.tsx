'use client';
import { cn } from "@/lib/utils";
import { H4, P, H3, H2 } from "./typography";
import Image from "next/image";
import { cardProps, blogCardProps } from "@/lib/types";
import { motion } from "framer-motion";
import { Clock, ChevronRight } from 'lucide-react';
import { urlFor } from '@/sanity/lib/image';
import Link from "next/link";
import Markdown from 'markdown-to-jsx'

export const Card = ({ className, title, description, icon }: cardProps) => {
  return (
    <div className={cn("flex flex-col md:max-w-xs min-h-80 lg:max-w-sm w-fit items-center justify-between gap-6 p-4 bg-card text-primary-foreground rounded-lg", className)}>
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


export const ClientCard = ({ title, icon }: Omit<cardProps, "description" | 'className'>) => {

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
      <div className="bg-gray-200 pt-7 rounded-tr-xl w-64 md:w-[375px] rounded-bl-xl">
        <div className="relative w-full h-0 pb-[100%]"> {/* Maintains a consistent aspect ratio */}
          <Image
            src={img}
            alt={title}
            layout="fill"
            className="rounded-tr-2xl object-cover  rounded-bl-2xl"
          />
        </div>
      </div>
      <P className="md:text-sm" color="text-secondary-foreground">
        {title}
      </P>
      <P className="md:text-sm" color="text-popover">{pos}</P>
    </motion.div>

  );
};
export const BlogCard = ({ title, author, date, description, img, current }: blogCardProps) => {
  return (
    <Link href={`/blog/${current}`} >
      <div className="max-w-sm md:max-w-xl  rounded-2xl overflow-hidden bg-white shadow-[2px_2px_4px_0px_rgba(0,0,0,0.25),-2px_-2px_4px_0px_rgba(0,0,0,0.25)]">

        <div className="relative h-56 md:h-[350px]">
          <Image
            src={img ? urlFor(img).url() : "/img/home/review.svg"}
            alt="Blog Image"
            layout="fill"
            className="rounded-t-2xl object-cover"
          />
          <div className="absolute inset-0 bg-black opacity-50 rounded-t-lg"></div> {/* Overlay */}
          <div className="absolute bottom-0 left-0 p-4 space-y-4">
            <H2 color="text-primary-foreground" >{title ? title : "The Importance of Regular Financial Audits for Business Success"}</H2>
            <div className=" flex items-center gap-4">
              <Image
                src={author?.image ? urlFor(author.image).url() : '/img/home/review.svg'}
                alt="author img"

                width={300}
                height={300}
                className=" w-10 h-10 rounded-full"
              />
              <P color="text-primary-foreground">{author ? author.name : "vog"}</P>
            </div>
          </div>
        </div>
        <div className="p-4 flex flex-col   markdown-content-preview">
          <Markdown>{description ? description : "...."}</Markdown> {/* `blogInfo` should contain the blog information */}
          <div className="flex justify-between items-center">
            <div className=" flex items-center gap-3 text-gray-400">
              <Clock size={16} />
              <P className=" md:text-[15px]" color="text-gray-400">{date ? date : "2 min read"}</P>
            </div>
            <Link href={`/blog/${current}`} className="flex  items-center text-gray-400">Read More <ChevronRight className=" pt-1" size={27} /></Link>
          </div>
        </div>
      </div>
    </Link>

  )
}


