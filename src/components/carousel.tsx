'use client';
import { cn } from "@/lib/utils";
import { HTMLAttributes, forwardRef } from "react";
import Image from "next/image";
import { H3, H4, List, P } from "@/components/typography";
import { motion } from "framer-motion";
import { ReviewCardProps } from "@/lib/types";



const starArray = [1, 2, 3, 4, 5]
export const ReviewCard = forwardRef<HTMLDivElement, ReviewCardProps>(
    ({ image, review, rating, name, reviewertitle, className, ...props }, ref) => (
        <div
            className={cn(
                "flex flex-col md:flex-row items-center w-full h-full rounded-md",
                className
            )}
            {...props}
            ref={ref}
        >
            <div className="w-full md:w-1/2 h-60 md:h-full relative">
                <Image
                    src={image}
                    alt={image}
                    width={200}
                    height={200}
                    className="w-full h-full object-contain object-center rounded-md"
                />
            </div>
            <div className="w-full md:w-1/2 p-6 flex flex-col text-left m items-center justify-center text-secondary-foreground">
                <div className=" justify-self-start mb">

                    <Image
                        src={'/img/home/reviewquote.svg'}
                        alt="quote"
                        width={150}
                        height={150}
                        className=" self-start"
                    />
                    <P className="mb-4" >{review}</P>
                </div>
                <div className="flex items-center mb-2">
                    {/* Render stars based on rating */}
                    {starArray.map((_, i) => (
                        <span key={i} className={i < rating ? "text-yellow-500" : "text-gray-400"}>
                            ★
                        </span>
                    ))}
                </div>
                <H4 className="text-sm font-semibold">{name}</H4>
                <P className="text-xs xs:text-sm md:text-base">{reviewertitle}</P>
            </div>
        </div>
    )
);

ReviewCard.displayName = "ReviewCard";

export const ReviewCardMotion = motion(ReviewCard);
