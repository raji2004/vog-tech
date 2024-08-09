"use client";
import { P, H1 } from "@/components/typography";
import { motion, useMotionValueEvent, useScroll, Variants } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ReviewCardMotion } from "@/components/carousel";
import { IconButton } from "@/components/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { reviews } from "./data";
import '@/app/(landing Home)/_components/scroll.css'

export const Review = () => {
    const ref = useRef<HTMLDivElement>(null);
    const [activeIndex, setActiveIndex] = useState(0);
    const { scrollXProgress } = useScroll({ container: ref });

    useMotionValueEvent(scrollXProgress, "change", (latest) => {
        const newIndex = Math.floor(latest * (reviews.length - 1));
        if (newIndex !== activeIndex) {
            setActiveIndex(newIndex);
        }
    });

    const slideVariant: Variants = {
        hidden: (direction: number) => ({
            x: direction > 0 ? "100%" : "-100%",
            opacity: 0,
            zIndex: 1,
            transition: { duration: 0.4 },
        }),
        visible: {
            x: "0%",
            opacity: 1,
            zIndex: 2,
            transition: { duration: 0.4 },
        },
        exit: (direction: number) => ({
            x: direction < 0 ? "100%" : "-100%",
            opacity: 0,
            zIndex: 1,
            transition: { duration: 0.4 },
        }),
    };

    

    return (
        <div className="bg-white space-y-7 p-10 text-center">
            <div className=" flex flex-row md:block">

                <H1 color="text-primary" className="text-center">
                    What Do Our Clients Say?
                </H1>
                
            </div>
                <P>We serve and are trusted by numerous companies and small businesses across the country.</P>

            <div
                ref={ref}
                className="relative flex overflow-x-scroll snap-x snap-mandatory no-scrollbar pb-14"
                style={{ minHeight: '300px', width: '100%' }}
            >
                {reviews.map((review, index) => {
                    const isActive = activeIndex === index;
                    const direction = index > activeIndex ? 1 : -1; // Determine exit direction

                    return (
                        <motion.div
                            key={index}
                            className={`flex-shrink-0  w-full snap-start ${isActive ? 'z-10' : 'z-0'}`} // Adjust z-index based on active
                            initial={{ opacity: 0, x: direction > 0 ? '100%' : '-100%' }}
                            animate={{ opacity: isActive ? 1 : 0, x: 0 }}
                            exit={{ opacity: 0, x: direction > 0 ? '-100%' : '100%' }}
                            transition={{ duration: 0.4 }}
                        >
                            <ReviewCardMotion
                                image={review.image}
                                review={review.review}
                                rating={review.rating}
                                name={review.name}
                                reviewertitle={review.reviewertitle}
                                className="w-full "
                            />
                        </motion.div>
                    );
                })}
            </div>
        </div>
    );
};