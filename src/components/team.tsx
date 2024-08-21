import { cn } from "@/lib/utils";
import Image from "next/image";
import { H3, P, } from '@/components/typography'
import { Button } from "./button";
import { TeamProps } from "@/lib/types";

export const TeamCard = ({ title, position, image, description }: TeamProps) => {
    const dimension = 500
    return (
        <div className={cn("flex flex-col text-center items-center justify-between gap-5 md:flex-row md:text-left")}>

            <Image src={image} height={dimension} width={dimension} className=" w-[220px] lg:w-[1290px] h-auto" alt={title} />
            <div className=" space-y-5" >

                <H3 className=" font-light" color={'text-secondary-foreground'}>{title}</H3>
                <P className=" hidden md:block" color={'text-popover'}>{position}</P>
                <P color={'text-secondary-foreground'}>{description}</P>
                <Button className=" my-5 rounded-full">Read More</Button>
            </div>
        </div>
    )
}