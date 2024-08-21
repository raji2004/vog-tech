'use client';
import { H1, P, H2 } from "@/components/typography";
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
    return (
        <div className=" space-y-6 p-section-padding-sm md:p-section-padding">
            <div className="flex items-center ">

                <H2 className=" text-xl w-7/12 md:text-3xl md:w-1/2  lg:w-[36%]" color="text-secondary-foreground">
                    Enjoy The Ease That Financial Assurance Brings!
                </H2>


                <AdjustableSVG width={25} height={90} strokeWidth={1.4} circleRadius={5} gap={80} />


                <P className=" text-[6px] w-1/4 md:text-[8px] md:w-2/12 md:leading-snug text-left">
                    Secure your {"business's"} future with comprehensive financial assurance. Our expert assurance services provide
                    accurate and reliable financial insights, enhancing your credibility with stakeholders and ensuring compliance
                    with regulatory standards.
                </P>

            </div>
            <Carosel imgList={serviceIntroImg} size=" w-[270px]" />

            <Button className="mt-10 rounded-full">
                See all our services
            </Button>

        </div>
    );
};
