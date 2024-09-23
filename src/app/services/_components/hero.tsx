'use client'
import { H1,H4,  P, List, UnderLine } from "@/components/typography"
import Image from "next/image"
import { Button } from "@/components/button"
// import { icondata } from "./data"
import CountUp from "react-countup"
import { easeInOut, motion } from "framer-motion"




const IconWithData = ({ src, title, desc, percent }: { src: string, title: number, desc: string, percent: boolean }) => {
    return (
        <div className=" flex flex-col md:flex-row items-center justify-center space-y-4 space-x-4">
            <div className=" border-2 border-primary rounded-full w-20 h-20 flex items-center justify-center">
                <Image src={src} width={100} height={100} className=" w-1/2 h-auto" alt={`${title}`} />
            </div>
            <div className=" text-center">
                <H1>
                    <CountUp end={title} duration={3} delay={2} />
                    {percent ? '%' : '+'}
                </H1>
                <P>{desc}</P>
            </div>
        </div>
    )
}
export const Hero = () => {
    // const variants = {
    //     hiddenLeft: {
    //         opacity: 0,
    //         x: -100,

    //     },
    //     hiddenUp: {
    //         opacity: 0,
    //         y: -100,

    //     },
    //     hiddenRight: {
    //         opacity: 0,
    //         x: 100
    //     },
    //     visible: {
    //         opacity: 1,
    //         x: 0,
    //         transition: {
    //             delay: 0.2,
    //         }
    //     },
    //     visibleContainer: {
    //         opacity: 1,
    //         y: 0,
    //         transition: {
    //             delayChildren: 0.3,
    //             staggerChildren: 0.2
    //         }
    //     }
    // };
    return (
        <div>
            <H4 color="text-secondary-foreground">Vog Global Consult</H4>
            <div className="space-y-8 md:space-y-5 mb-5">
                <H1 color="text-primary">
                    Take Control Of Your

                    <UnderLine> Finances Today! </UnderLine>
                </H1>


            </div>
        </div>
    )
}