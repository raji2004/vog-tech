import { cn } from "@/lib/utils";
import { H4, P, H1 } from "./typography";
import Image from "next/image";
import { cardProps } from "@/lib/types";


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


export const ClientCard = ({ className, title, icon }: cardProps) => {

    return (
        <div className={cn(" border border-3 rounded-2xl", className)}>
            <Image
                src={icon}
                alt={title ? title : "icon"}
                width={40}
                height={40}
                className="h-auto"
            />
            <H1>{title}</H1>
        </div>
    )

}

