import Image from "next/image";
import { H1, H2, H4, P, List, UnderLine } from "@/components/typography"
import { FaqServices, } from "@/components/services";
import { services } from "./data";


export const Rightbar = () => {
    return (
        <div className="w-full flex flex-col items-center lg:w-8/12 space-y-7 p-section-padding-sm md:p-section-padding ">
            <Image src={"/img/services/service_main_image.svg"} width={881} height={731} className=" w-full " alt="whychooseus"></Image>
            <div className="gap-2 " color="text-secondary-foreground">
                <H2 className="p-2 font-bold" color="text-secondary-foreground">Strategic Planning and Execution</H2>
                <P className="p-2 font-normal text-secondary-foreground" color="text-secondary-foreground">{"At Vog Consult, we believe that a robust strategic plan is the cornerstone of any successful business. Our expert consultants work closely with your leadership team to develop comprehensive strategies tailored to your unique business needs. We analyze market trends, competitive landscapes, and internal capabilities to formulate actionable plans that drive growth and enhance profitability. From setting clear objectives to defining measurable goals and executing actionable plans, we guide you through every step of the strategic planning process."}</P>
            </div>
            <div className="gap-2 " color="text-secondary-foreground">
                <H2 className="p-2 font-bold" color="text-secondary-foreground">Operational Excellence</H2>
                <P className="p-2 font-normal text-secondary-foreground" color="text-secondary-foreground">{"Achieving operational excellence is crucial for maintaining a competitive edge in today's dynamic business environment. Our consulting services focus on optimizing your business processes to enhance efficiency, reduce costs, and improve overall performance. We conduct thorough assessments of your current operations, identify bottlenecks, and implement industry best practices to streamline workflows. By leveraging cutting-edge technologies and innovative methodologies, we help you achieve operational excellence and deliver superior value to your customers."}</P>
            </div>
            <div className="flex md:flex-row flex-col-reverse p-2 items-center">
                <div className="md:w-4/6 " color="text-secondary-foreground">
                    <H2 className="p-2 font-bold" color="text-secondary-foreground">Market Research and Analysis</H2>
                    <P className="p-2 font-normal text-secondary-foreground" color="text-secondary-foreground">{"Achieving operational excellence is crucial for maintaining a competitive edge in today's dynamic business environment. Our consulting services focus on optimizing your business processes to enhance efficiency, reduce costs, and improve overall performance. We conduct thorough assessments of your current operations, identify bottlenecks, and implement industry best practices to streamline workflows. By leveraging cutting-edge technologies and innovative methodologies, we help you achieve operational excellence and deliver superior value to your customers."}</P>
                </div>
                <div className=" flex justify-center  md:w-2/6 items-center ">
                    <Image src={"/img/services/happy_customers.svg"} width={252} height={34.6} className="hidden md:block " alt="whychooseus"></Image>
                </div>
            </div>
            <div className="gap-2 " color="text-secondary-foreground">
                <H2 className="p-2 font-bold" color="text-secondary-foreground">Organisational Development</H2>
                <P className="p-2 font-normal text-secondary-foreground" color="text-secondary-foreground">{"Building a strong organizational foundation is critical for achieving long-term success. Our organizational development services focus on enhancing your company's structure, culture, and capabilities."}</P>
            </div>
            <div className="flex gap-6">
                <Image src={"/img/services/services_mini_image.svg"} className="hidden md:block w-1/2" alt="whychooseus" width={252} height={34.6} ></Image>
                <Image src={"/img/services/services_mini_image2.svg"} className="hidden md:block w-1/2" alt="whychooseus" width={252} height={34.6} ></Image>
            </div>
            <div className="w-full">
                <Image src={"/img/services/card_uba.svg"} width={252} height={50} className=" md:block w-full" alt="whychooseus"></Image>
            </div>
        </div>
    )
}