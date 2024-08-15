'use client';
import { motion } from "framer-motion";
import { H1, P, } from "@/components/typography"
import { Card } from "@/components/card"
import { cardData } from "./data"

export const OurApproach = () => {
    // Define the animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1.2,
                staggerChildren: 0.2,
                delayChildren: 0.2
            }
        }
    };
    const headerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6
            }
        }
    };
    const textVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 1
            }
        }
    };
    const cardVariants = {
        hidden: { opacity: 0, y: 50 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className=" bg-primary p-section-padding-sm md:p-section-padding space-y-8 text-center ">
            <motion.div
                variants={headerVariants}
                initial="hidden"
                animate="visible"
            >
                <H1 color="text-primary-foreground">Our Approach</H1>
            </motion.div>
            <motion.div
                variants={textVariants}
                initial="hidden"
                animate="visible"
            >
                <P color="text-primary-foreground">
                    At VOG Global, our approach to financial assurance and business consulting is rooted in a commitment to excellence,
                    integrity, and client-centric service. We understand that each business is unique, and we tailor our services to meet
                    your specific needs and challenges.
                </P>
            </motion.div>

            <motion.div
                className=" flex flex-row justify-center flex-wrap gap-x-3 gap-y-10  w-fit "
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                {
                    cardData.map((item, i) => {
                        return (
                            <motion.div
                                key={i}
                                variants={cardVariants}
                            >
                                <Card title={item.title} description={item.description} icon={item.icon} />
                            </motion.div>
                        )
                    })
                }
            </motion.div>

        </div>
    )
}