import { cn } from "@/lib/utils";
import Image from "next/image";
import { H3, P, } from '@/components/typography'
import { Button } from "./button";

type TeamProps = {
    title: string,
    position: string,
    image: string,
    description: string
}

export const TeamCard = ({ title, position, image, description }: TeamProps) => {
    const dimension = 500
    return (
        <div className={cn("flex flex-col text-center items-center justify-between gap-5 md:flex-row md:text-left")}>

            <Image src={image} height={dimension} width={dimension} alt={title} />
            <div className=" space-y-2" >

                <H3 className=" font-light" color={'text-secondary-foreground'}>{title}</H3>
                <P className=" hidden md:block" color={'text-popover'}>{position}</P>
                <P color={'text-secondary-foreground'}>{description}</P>
                <Button className=" my-5 rounded-full">Read More</Button>
            </div>
        </div>
    )
}