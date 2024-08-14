'use client';
import { H1, H2, P, List } from "@/components/typography"
import { IconButton } from "@/components/button"
import { ArrowRight, ArrowLeft } from "lucide-react"
import { useRef } from "react"
import { heroCarouselImg } from "./data";
import Image from "next/image"

export const WhatWeProvide = () => {
    return (
        <div className=" p-section-padding bg-primary w-full text-left space-y-7">
            <div className=" md:flex md:justify-center">

                <H2 className=" font-normal " color={"text-primary-foreground"}>
                    We provide the best financial services for your business
                </H2>
                <P color={"text-primary-foreground"}>
                    Successfully audited and consulted for over 500 businesses across various industries.
                </P>
            </div>

            <Carosel imgList={heroCarouselImg} />
            <div>
                <P color={"text-primary-foreground"}>Here at VOG Tech:</P>
                <List color={"text-primary-foreground"}>
                    <li>We are utilizing the latest technologies and methodologies to ensure compliance and efficiency.</li>
                    <li>Ensuring your business meets all Nigerian tax laws and regulations.</li>
                    <li>Recognized by leading industry bodies and certified by [relevant authority].</li>
                    <li>Clear and transparent processes with regular updates and reports.</li>
                </List>
            </div>
        </div>
    )
}

type imgObj = { src: string, size: number }
export const Carosel = ({ imgList }: { imgList?: imgObj[] }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const imgSize = 300
    const scroll = (direction: "left" | "right") => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollAmount = direction === "left" ? -clientWidth : clientWidth;
            scrollRef.current.scrollTo({ left: scrollLeft + scrollAmount, behavior: "smooth" });
        }
    };

    const generateId =()=>{
        return Math.random().toString(36).substring(7);
    }

    return (
        <div className="flex flex-col gap-3">
            <div className="flex self-end gap-3">
                <IconButton
                    onClick={() => scroll("left")}
                    className="bg-primary text-primary-foreground border border-primary-foreground"
                >
                    <ArrowLeft size={24} />
                </IconButton>
                <IconButton
                    onClick={() => scroll("right")}
                    className="bg-primary text-primary-foreground border border-primary-foreground"
                >
                    <ArrowRight size={24} />
                </IconButton>
            </div>
            <div ref={scrollRef} className="overflow-x-scroll flex gap-3 no-scrollbar">
                {imgList?.length != 0 ? imgList?.map((item, i) => {
                    const id = generateId()
                    return (
                        <Image
                           key={id}
                            src={item.src}
                            height={item.size}
                            width={item.size}
                            className="rounded-lg"
                            alt={item.src}
                        />
                    )
                }) :
                    <>
                        <Image
                            src="/img/home/whatweprovide.svg"
                            width={imgSize}
                            height={imgSize}
                            className="rounded-lg"
                            alt="what we provide"
                        />
                        <Image
                            src="/img/home/whatweprovide.svg"
                            width={imgSize}
                            height={imgSize}
                            className="rounded-lg"
                            alt="what we provide"
                        />
                        
                    </>
                }
            </div>
        </div>
    );
};


