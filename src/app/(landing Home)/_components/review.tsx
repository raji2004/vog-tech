"use client";
import { P, H1 } from "@/components/typography";
import { motion, useMotionValueEvent, useScroll, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ReviewCardMotion } from "@/components/carousel";
import { IconButton } from "@/components/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { reviews } from "./data";
import { cn } from "@/lib/utils";
import '@/app/(landing Home)/_components/scroll.css'

export const Review = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [moveSlide2Left, setMoveSlide2Left] = useState(false);
    const [moveSlide3Left, setMoveSlide3Left] = useState(false);



    const { scrollYProgress,scrollXProgress } = useScroll({ target: ref });

    useMotionValueEvent(scrollXProgress, "change", (current) => {
        const scrollDirection = current - (scrollXProgress.getPrevious() ?? 0) > 0 ? "Left" : "Right";
        console.log(current,scrollDirection);
        console.log(scrollXProgress.getPrevious()),'running';
        if (current < 0.1) {
            setMoveSlide2Left(false);
            setMoveSlide3Left(false);
        }
        if (0.1 < current && current < 0.5) {
            if (scrollDirection === "Left") {
                setMoveSlide2Left(false);
            } else {
                setMoveSlide2Left(true);
            }

            setMoveSlide3Left(false);
        }

        if (current > 0.6) {
            if (scrollDirection === "Left") {
                setMoveSlide3Left(false);
            } else {
                setMoveSlide3Left(true);
            }
        }
    });

    const slideVariant: Variants = {
        moveLeft: {
            x: "0%",
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.6,
            },
        },
        moveRight: {
            x: "150%",
            transition: {
                type: "spring",
                bounce: 0.2,
                duration: 1.2,
            },
        },
        shift1step: {
            y: "2%",
            x: "-2%",
            transition: {
                type: "spring",
                duration: 0.4,
                stiffness:200,
            },
        },
        shift2step: {
            y: "3%",
            x: "-3%",
            transition: {
                type: "spring",
                duration: 0.4,
                stiffness:200,
            },
        },
        reverseShift: {
            x: 0,
            y: 0,
            transition: {
                type: "spring",
                duration: 0.4,
                stiffness:200,
            },
        },
    };




    return (
        <div 
        style={{ perspective: "1000px" }}
        ref={ref}    
        className={cn(
            "bg-white  p-10 text-center  ",
             "relative mx-auto w-full max-w-[1840px] h-fit min-h-[100dvh] py-4 lg:py-8 space-y-10 lg:space-y-20 after:content-[''] after:block after:w-full after:h-[100dvh]"
            ) } >   
            <div  className="sticky mx-auto w-full min-h-[600px] h-[75dvh] top-20 lg:top-28 space-y-20">
                <div className=" flex flex-row md:block ">

                    <H1 color="text-primary" className="text-center">
                        What Do Our Clients Say?
                    </H1>

                </div>
                <P>We serve and are trusted by numerous companies and small businesses across the country.</P>

            <div className=" overflow-x-auto">


                            <ReviewCardMotion
                                image={reviews[0].image}
                                review={reviews[0].review}
                                rating={reviews[0].rating}
                                name={reviews[0].name}
                                reviewertitle={reviews[0].reviewertitle}
                                animate={
                                    moveSlide3Left
                                        ? "shift2step"
                                        : moveSlide2Left
                                            ? "shift1step"
                                            : "reverseShift"
                                }
                                variants={slideVariant}
                                className="absolute z-0 top-0 left-0 mx-auto h-full"
                            />

                            <ReviewCardMotion
                                image={reviews[1].image}
                                review={reviews[1].review}
                                rating={reviews[1].rating}
                                name={reviews[1].name}
                                reviewertitle={reviews[1].reviewertitle}
                                animate={
                                    moveSlide3Left ? "shift1step" : moveSlide2Left ? "moveLeft" : "moveRight"
                                  }
                                variants={slideVariant}
                                className="absolute z-10 top-0 left-0 h-full"
                            />
                            <ReviewCardMotion
                                image={reviews[2].image}
                                review={reviews[2].review}
                                rating={reviews[2].rating}
                                name={reviews[2].name}
                                reviewertitle={reviews[2].reviewertitle}
                                animate={
                                    moveSlide3Left? "shift1step" : moveSlide2Left ? "moveLeft" : "moveRight"
                                  }
                                variants={slideVariant}
                                className="absolute z-10 top-0 left-0 h-full"
                            />
            </div>
                    


                   
                
            </div>
        </div>
    );
};