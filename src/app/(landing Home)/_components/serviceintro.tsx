import { H1,  P,  } from "@/components/typography"
import { Carosel } from "./whatweprovide"
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
        <div className=" bg-white p-10 ">
            <div className="flex items-center gap-3">
                <H1 color="text-secondary-foreground">
                    Enjoy The Ease That
                    Financial Assurance Brings!
                </H1>
                <AdjustableSVG width={25} height={250} strokeWidth={1.8} circleRadius={12} gap={250} />
                <P className=" text-[7px] w-5/6 text-left">
                    Secure your {"business's"} future with comprehensive financial assurance. Our expert assurance services provide
                    accurate and reliable financial insights, enhancing your credibility with stakeholders and ensuring compliance
                    with regulatory standards.
                </P>
            </div>
            <Carosel imgList={serviceIntroImg} />
            <Button className=" mt-10 rounded-full">
                See all our services
            </Button>
        </div>
    )
}