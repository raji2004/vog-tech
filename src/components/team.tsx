'use client';
import { cn } from "@/lib/utils";
import Image from "next/image";
import { H3, P } from '@/components/typography';
import { Button } from "./button";
import { TeamProps } from "@/lib/types";
import { useState } from "react";

export const TeamCard = ({ title, position, image, description = "" }: TeamProps) => {
    const dimension = 500;
    const [isExpanded, setIsExpanded] = useState(false);

    // Function to toggle the description
    const toggleDescription = () => {
        setIsExpanded(prev => !prev);
    };

    // Limit the description to a certain number of characters
    const maxLength = 200; // Adjust this value as needed
    const slicedDescription = description.length > maxLength
        ? `${description.slice(0, maxLength)}...`
        : description;

    return (
        <div className={cn("flex flex-col text-center items-center justify-between gap-5 md:flex-row md:text-left")}>
            <Image
                src={image}
                height={dimension}
                width={dimension}
                className="w-[220px] lg:w-[220px] h-[220px] object-cover"
                alt={title ?? ''}
            />
            <div className="space-y-5">
                <H3 className="font-light" color={'text-secondary-foreground'}>{title}</H3>
                <P className="hidden md:block md:text-xl" color={'text-popover'}>{position}</P>
                <P color={'text-secondary-foreground'}>
                    {isExpanded ? description : slicedDescription}
                </P>
                <Button className="my-5 rounded-full" onClick={toggleDescription}>
                    {isExpanded ? 'Show Less' : 'Read More'}
                </Button>
            </div>
        </div>
    );
};