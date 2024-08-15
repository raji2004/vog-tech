'use client';
import { motion } from "framer-motion";
import { H1, P } from "@/components/typography";
import { Carosel } from "./whatweprovide";
import { Button } from "@/components/button";
import { serviceIntroImg } from "./data";

const AdjustableSVG = ({ width = 8, height = 90, strokeWidth = 0.8, circleRadius = 4, gap = 10 }) => {
    const lineStartY = circleRadius + strokeWidth + gap;
    const lineEndY = height - (circleRadius + strokeWidth + gap);

    return (
        <svg width={width} height={height} viewBox={`0 0 ${width} ${height}`} fill="none" xmlns="http://www.w3.org/2000/svg">
            <line
                x1={width / 2}
                y1={lineStartY}
                x2={width / 2}
                y2={lineEndY}
                stroke="#6E886E"
                strokeWidth={strokeWidth}
                strokeDasharray={`${strokeWidth * 4} ${strokeWidth * 4}`}
            />
            <circle cx={width / 2} cy={circleRadius + gap} r={circleRadius} fill="#264E26" />
            <circle cx={width / 2} cy={height - (circleRadius + gap)} r={circleRadius} fill="#264E26" />
        </svg>
    );
};

export const ServiceIntro = () => {
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
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        }
    };
    const textVariants = {
        hidden: { opacity: 0, x: -100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        }
    };
    const svgVariants = {
        hidden: { opacity: 0, x: 100 },
        visible: {
            opacity: 1,
            x: 0,
            transition: {
                duration: 0.6
            }
        }
    };
    const buttonVariants = {
        hidden: { opacity: 0, y: 100 },
        visible: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.6
            }
        }
    };

    return (
        <div className=" bg-white p-section-padding-sm md:p-section-padding ">
            <motion.div
                className="flex items-center gap-3"
                variants={containerVariants}
                initial="hidden"
                animate="visible"
            >
                <motion.div variants={headerVariants}>
                    <H1 color="text-secondary-foreground">
                        Enjoy The Ease That
                        Financial Assurance Brings!
                    </H1>
                </motion.div>
                <motion.div variants={svgVariants}>
                    <AdjustableSVG width={25} height={250} strokeWidth={1.8} circleRadius={12} gap={250} />
                </motion.div>
                <motion.div variants={textVariants}>
                    <P className=" text-[7px] w-5/6 text-left">
                        Secure your {"business's"} future with comprehensive financial assurance. Our expert assurance services provide
                        accurate and reliable financial insights, enhancing your credibility with stakeholders and ensuring compliance
                        with regulatory standards.
                    </P>
                </motion.div>
            </motion.div>
            <Carosel imgList={serviceIntroImg} />
            <motion.div
                variants={buttonVariants}
                initial="hidden"
                animate="visible"
            >
                <Button className=" mt-10 rounded-full">
                    See all our services
                </Button>
            </motion.div>
        </div>
    );
};