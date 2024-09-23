'use client';
import { H1, H2, P, List } from "@/components/typography";
import { IconButton } from "@/components/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { useRef, useEffect } from "react";
import { heroCarouselImg } from "./data";
import Image from "next/image";
import { imgObj } from "@/lib/types";
import { motion, useAnimation } from "framer-motion";
import { useInView } from 'react-intersection-observer';
import { cn } from "@/lib/utils";

export const WhatWeProvide = () => {
    const controls = useAnimation();
    const [ref, inView] = useInView();

    useEffect(() => {
        if (inView) {
            controls.start({
                x: 0,
                opacity: 1,
                transition: { duration: 0.5, delay: 0.2 },
            });
        } else {
            controls.start({
                x: -100,
                opacity: 0,
            });
        }
    }, [controls, inView]);

    return (
        <div
            ref={ref}
            className=" p-section-padding-sm md:p-section-padding bg-primary w-full text-left space-y-10"
        >
            <div className=" md:flex space-y-4 items-center md:justify-center">
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                    className=" lg:w-1/2"
                >
                    <H2
                        
                        color={"text-primary-foreground"}
                    >
                        We provide the best financial services for your business
                    </H2>
                </motion.div>
                <Image
                src={"/img/home/whatweprovidestroke.svg"}
                alt="what we provide"
                width={300}
                height={300}
                className="hidden md:block relative top-10 left-3 w-28 h-auto"
                />
                <motion.div
                    initial={{ x: -100, opacity: 0 }}
                    animate={controls}
                    transition={{ duration: 0.5, delay: 1 }}
                    className="lg:w-2/5"
                >
                    <P
                        color={"text-primary-foreground"}
                    >
                        Successfully audited and consulted for over 500 businesses across
                        various industries.
                    </P>
                </motion.div>
            </div>

            <Carosel imgList={heroCarouselImg} size=" rounded-2xl ml-6" noButton />
            <motion.div
                initial={{ x: -100, opacity: 0 }}
                animate={controls}
                transition={{ delay: 0.6 }}
            >
                <P color={"text-primary-foreground"}>Here at VOG Global:</P>
                <List color={"text-primary-foreground"}>
                    <li>We are utilizing the latest technologies and methodologies to ensure compliance and efficiency.</li>
                    <li>Ensuring your business meets all Nigerian tax laws and regulations.</li>
                    <li>Recognized by leading industry bodies and certified by [relevant authority].</li>
                    <li>Clear and transparent processes with regular updates and reports.</li>
                </List>
            </motion.div>
        </div>
    );
};

export const Carosel = ({ imgList,size,noButton }: { imgList?: imgObj[],size?:string,noButton?:boolean }) => {
    const scrollRef = useRef<HTMLDivElement>(null);
    const imgSize = 300;

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
            {!noButton &&
            
            <div className="flex self-end gap-3">
                <IconButton
                    onClick={() => scroll("left")}
                   
                >
                    <ArrowLeft size={24} />
                </IconButton>
                <IconButton
                    onClick={() => scroll("right")}
                   
                >
                    <ArrowRight size={24} />
                </IconButton>
            </div>
            }
            <div ref={scrollRef} className="overflow-x-scroll flex gap-3 no-scrollbar">
                {imgList?.length != 0 ? imgList?.map((item, i) => {
                    const id = generateId()
                    return (
                        <Image
                           key={id}
                            src={item.src}
                            height={item.size}
                            width={item.size}
                            className={cn("rounded-lg",size,'h-auto')}
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