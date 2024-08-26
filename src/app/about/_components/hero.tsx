'use client'
import { H1, P, List, UnderLine } from "@/components/typography"
import Image from "next/legacy/image"
import { Button } from "@/components/button"
import { icondata } from "./data"
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
    const variants = {
        hiddenLeft: {
            opacity: 0,
            x: -100,

        },
        hiddenUp: {
            opacity: 0,
            y: -100,

        },
        hiddenRight: {
            opacity: 0,
            x: 100
        },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                delay: 0.2,
            }
        },
        visibleContainer: {
            opacity: 1,
            y: 0,
            transition: {
                delayChildren: 0.3,
                staggerChildren: 0.2
            }
        }
    };
    return (
        <div className=" bg-white space-y-10  ">
            <div className=" flex flex-col md:flex-row  justify-center gap-6 p-section-padding-sm md:p-section-padding">
                <div className=" md:w-1/2 ">
                    <Image src="/img/about/hero.svg" className=" w-full  h-auto" width={500} height={500} alt="hero" />
                </div>
                <div className=" md:w-1/2 space-y-8">
                    
                        <H1>
                            Take Control Of Your
                            <UnderLine> Finances Today!</UnderLine>
                        </H1>
                        <P>
                            At VOG Global, we are more than just consultants; we are your
                            dedicated partners in success. With over two decades of industry experience,
                            our team of seasoned professionals is committed to delivering tailored solutions that drive growth,
                            ensure compliance, and foster long-term success
                            .
                        </P>
                        <Button className=" rounded-full">Learn More</Button>
                   
                </div>
            </div>
            <div className=" border-primary md:border-b-2 md:border-t-2 flex flex-col md:flex-row md:space-y-0 space-y-6 items-center justify-between p-section-padding-sm md:p-section-padding" >
                {icondata.map((icon, index) => {
                    return (
                        <motion.div variants={variants} key={index} >
                            <IconWithData key={index} {...icon} />
                        </motion.div>
                    )
                })}
            </div>
            <div className=" flex flex-col md:flex-row items-center justify-between p-section-padding-sm md:p-section-padding space-y-7 md:space-y-0 md:space-x-7 ">
                <div className=" md:w-1/2 space-y-7">
                    <H1 className=" text-xl md:text-2xl lg:text-4xl" color="text-secondary-foreground">
                        We Provide Multiple <br /><UnderLine>Services With Specialized</UnderLine> Departments To Help Your Business
                    </H1>

                    <div>
                        <P color="text-secondary-foreground">
                            Here at VOG Tech:
                        </P>
                        <List className=" mt-0 p-0" color="text-secondary-foreground">
                            <li>
                                we are utilizing the latest technologies and methodologies to ensure compliance and efficiency.
                            </li>
                            <li>
                                Ensuring your business meets all Nigerian tax laws and regulations.
                            </li>
                            <li>

                                Recognized by leading industry bodies and certified by [relevant authority]
                            </li>
                            <li>

                                Clear and transparent processes with regular updates and reports.
                            </li>
                        </List>

                    </div>
                    <Button className=" rounded-full">Get Started</Button>
                </div>
                <motion.div className=" md:w-1/2 " variants={variants} initial={"hiddenRight"} whileInView={'visible'}>

                    <Image src="/img/about/provide.svg" width={500} height={500} className=" w-fullh-auto" alt="mission" />
                </motion.div>

            </div>





        </div>
    )
}