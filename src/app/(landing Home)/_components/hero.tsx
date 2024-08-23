'use client';
import { motion } from "framer-motion";
import { H1, H2, P ,UnderLine} from "@/components/typography"
import { Button } from "@/components/button"
import Image from "next/image"

export const Hero = () => {
    const imgDimensions: number = 500;

    // Define the animation variants
    const containerVariants = {
        hidden: { opacity: 0.2, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0.5, y: 20 },
        visible: { opacity: 1, y: 0 }
    };

    return (
        <motion.div
            className="   p-section-padding-sm md:p-section-padding  flex flex-col items-center md:flex-row"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
        >
            <motion.div
                className=" flex flex-col items-center gap-5 md:items-start md:gap-4 "
                variants={containerVariants}
            >
                <motion.div
                    className="flex flex-row basis-1/2 justify-between max-w-6xl"
                    variants={containerVariants}
                >
                    <motion.div
                        className=" text-center space-y-5  md:flex flex-col-reverse md:text-left md:gap-5"

                    >
                        <H1  >
                            Expert Tax Auditing and Business Consulting
                            <UnderLine> Services in Nigeria.</UnderLine>
                        </H1>
                        <P>
                            Ensuring Compliance, Maximizing Efficiency, Driving Success
                        </P>
                    </motion.div>
                    <Image
                        src={'/img/home/hero2.svg'}
                        alt="hero.svg"
                        width={imgDimensions}
                        height={imgDimensions}
                        className="hidden w-[400px] lg:w-[500px] h-auto  md:block"
                    />
                </motion.div>
                <motion.div
                    variants={itemVariants}
                >
                    <Button className=" rounded-full" >Get Started</Button>
                </motion.div>
                <Image
                    src={'/img/home/hero.svg'}
                    alt="hero.svg"
                    width={imgDimensions}
                    height={imgDimensions}
                />
            </motion.div>
        </motion.div>
    )
}