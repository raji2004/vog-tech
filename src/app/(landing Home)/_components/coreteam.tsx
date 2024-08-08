import { P, H4, H1 } from "@/components/typography";
import Image from "next/image";

const Team = ({ img, title, pos }: { img: string, title: string, pos: string }) => {
    return (
        <div className="flex flex-col items-center text-center">
            <Image src={img} alt={title} width={200} height={200} className=" rounded-tl-sm rounded-tr-sm" />
            <H4 className=" text-sm md:text-sm " color="text-secondary-foreground">{title}</H4>
            <P color="text-popover">{pos}</P>
        </div>
    )
}
export const CoreTeam = () => {
    return (
        <div className=" bg-primary-foreground space-y-5 p-10">
            <H1 color="text-primary" className="text-center">Our Core Team</H1>
            <div className=" md:flex md:gap-5">
                <Team img="/img/home/coreteam.svg"
                    title="UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK),PHD (USA), CNA, ACTI."
                    pos="CEO" />
                <Team img="/img/home/coreteam.svg" title="Jane Doe" pos="COO" />
                <Team img="/img/home/coreteam.svg" title="John Doe" pos="CTO" />
            </div>
        </div>
    )
}