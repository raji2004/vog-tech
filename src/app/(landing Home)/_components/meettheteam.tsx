'use client';

import { motion, useInView } from "framer-motion";
import { TeamCard } from "@/components/team";
import { H1, P,H2 } from "@/components/typography";
import { teamData } from "./data";
import Image from "next/image";
import { Button } from "@/components/button";
import { useRef } from "react";

export const MeetTheTeam = () => {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true });

    // Define the animation variants
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                duration: 0.6,
                staggerChildren: 0.2
            }
        }
    };

    const itemVariantsLeft = {
        hidden: { opacity: 0, x: -50 },
        visible: { opacity: 1, x: 0 }
    };

    const itemVariantsRight = {
        hidden: { opacity: 0, x: 50 },
        visible: { opacity: 1, x: 0 }
    };

    return (
        <motion.div
            className=" my-10  p-section-padding-sm md:p-section-padding text-center space-y-10 "
            variants={containerVariants}
            initial="hidden"
            animate={isInView ? "visible" : "hidden"}
            ref={ref}
        >
            <motion.div variants={itemVariantsLeft}>
                <H1 className=" "  color="text-primary">Meet Our Team Of Innovative Problem Solvers</H1>
            </motion.div>
            <motion.div
                className="  space-y-10"
                variants={containerVariants}
            >
                {
                    teamData.map((item, i) => {
                        return (
                            <motion.div
                                key={i}
                                variants={i % 2 === 0 ? itemVariantsLeft : itemVariantsRight}
                            >
                                <TeamCard
                                    title={item.title}
                                    position={item.position}
                                    image={item.image}
                                    description={item.description}
                                />
                            </motion.div>
                        )
                    })
                }
            </motion.div>
            <motion.div
                className=" md:flex  md:gap-4 space-y-6"
                variants={containerVariants}
            >
                <motion.div
                    className=" md:w-3/6"
                    variants={itemVariantsLeft}
                >
                    <Image src="/img/home/meettheteamb.svg" alt="team" className=" md:w-full" width={500} height={500} />
                </motion.div>
                <motion.div
                    className=" md:w-1/2 space-y-5 md:text-left text-center"
                    variants={itemVariantsRight}
                >
                    <H2 className=" lg:text-5xl" color="text-primary">We Lead Your Business To Success!</H2>
                    <P color="text-secondary-foreground">Our {"Team's "}goal is to drive your team
                        to success with the right finances and financial practices.
                    </P>
                    <div className=" flex gap-9">
                        <Button size="sm">Mission Statement</Button>
                        <Button size="sm" className=" border-primary border-2 text-primary bg-primary-foreground text-sm">Vision Statement</Button>
                    </div>
                    <div className=" w-full p-2 bg-popover-foreground text-left">
                        <P className=" md:text-xl" color="text-secondary-foreground">To create professional rewarding services for all our clients through
                            relentless pursuit of perfection with necessary technological aids.</P>
                    </div>
                </motion.div>
            </motion.div>
        </motion.div>
    )
}