import { H1, H2,H3,H4,P, UnderLine } from "@/components/typography";

import Image from "next/image";
import { FaqServices, } from "@/components/services";
import { services } from "./_components/data";

export default function Page() {
    return (
        <div className="flex p-section-padding-sm md:p-section-padding space-y-10">
            <div className="items-center  w-full ">
                <H4 color="text-secondary-foreground">Vog Global Consult</H4>
                <div className="space-y-8 md:space-y-5 mb-5">
                    <H1 color="text-primary">
                        Take Control Of Your 
                        
                        <UnderLine> Finances Today! </UnderLine>
                    </H1>
                 
                    
                </div>
                <div className="flex">
                    <div className="hidden lg:block w-4/12 p-section-padding-sm md:p-section-padding space-y-10">
                        <div className="w-full bg-service-green  rounded-lg">
                            <H4 className="text-secondary-foreground p-1">Our Services</H4>

                            <div className="flex flex-col">
                                <div className="flex flex-col  justify-between p-1  rounded-lg">
                                    {
                                        services.map((item, i) => {
                                            return (
                                                <FaqServices key={i} value={item.title} content={item.information} />
                                            )
                                        })
                                    }
                                    {/* <p className="text-white ms-1">Business Consulting</p>
                                <Image src={'/img/services/arrowright1.svg'} alt="contact" width={31.96} height={31.96} className=" md:block" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="max-w-80 bg-service-green p-3 rounded-lg">
                            <H4 className="text-secondary-foreground p-1">Our Services</H4>

                            <div className="flex flex-col">
                                <div className="flex flex-col  justify-between p-1  rounded-lg">
                                    {
                                        services.map((item, i) => {
                                            return (
                                                <FaqServices key={i} value={item.title} content={item.information} />
                                            )
                                        })
                                    }
                                    {/* <p className="text-white ms-1">Business Consulting</p>
                                <Image src={'/img/services/arrowright1.svg'} alt="contact" width={31.96} height={31.96} className=" md:block" /> */}
                                </div>
                            </div>
                        </div>
                        <div className="max-w-80 bg-service-green p-3 rounded-lg">
                            <H4 className="text-secondary-foreground p-1">Our Services</H4>

                            <div className="flex flex-col">
                                <div className="flex flex-col  justify-between p-1  rounded-lg">
                                    {
                                        services.map((item, i) => {
                                            return (
                                                <FaqServices key={i} value={item.title} content={item.information} />
                                            )
                                        })
                                    }
                                    {/* <p className="text-white ms-1">Business Consulting</p>
                                <Image src={'/img/services/arrowright1.svg'} alt="contact" width={31.96} height={31.96} className=" md:block" /> */}
                                </div>
                            </div>
                        </div>
                        <div>
                            <Image src={"/img/services/contact.svg"} width={252} height={50} className=" md:block w-full" alt="whychooseus"></Image>
                        </div>
                    </div>
                    <div className="w-full flex flex-col items-center lg:w-8/12 space-y-7 p-section-padding-sm md:p-section-padding ">
                        <Image src={"/img/services/service_main_image.svg"} width={881} height={731} className=" w-full " alt="whychooseus"></Image>
                        <div className="gap-2 " color="text-secondary-foreground">
                            <H2 className="p-2 font-bold" color="text-secondary-foreground">Strategic Planning and Execution</H2>
                            <P className="p-2 font-normal text-secondary-foreground" color="text-secondary-foreground">At Vog Consult, we believe that a robust strategic plan is the cornerstone of any successful business. Our expert consultants work closely with your leadership team to develop comprehensive strategies tailored to your unique business needs. We analyze market trends, competitive landscapes, and internal capabilities to formulate actionable plans that drive growth and enhance profitability. From setting clear objectives to defining measurable goals and executing actionable plans, we guide you through every step of the strategic planning process.</P>
                        </div>
                        <div className="gap-2 " color="text-secondary-foreground">
                            <H2 className="p-2 font-bold" color="text-secondary-foreground">Operational Excellence</H2>
                            <P className="p-2 font-normal text-secondary-foreground" color="text-secondary-foreground">Achieving operational excellence is crucial for maintaining a competitive edge in today's dynamic business environment. Our consulting services focus on optimizing your business processes to enhance efficiency, reduce costs, and improve overall performance. We conduct thorough assessments of your current operations, identify bottlenecks, and implement industry best practices to streamline workflows. By leveraging cutting-edge technologies and innovative methodologies, we help you achieve operational excellence and deliver superior value to your customers.</P>
                        </div>
                        <div className="flex md:flex-row flex-col-reverse p-2 items-center">
                            <div className="md:w-4/6 " color="text-secondary-foreground">
                                <H2 className="p-2 font-bold" color="text-secondary-foreground">Market Research and Analysis</H2>
                                <P className="p-2 font-normal text-secondary-foreground" color="text-secondary-foreground">Achieving operational excellence is crucial for maintaining a competitive edge in today's dynamic business environment. Our consulting services focus on optimizing your business processes to enhance efficiency, reduce costs, and improve overall performance. We conduct thorough assessments of your current operations, identify bottlenecks, and implement industry best practices to streamline workflows. By leveraging cutting-edge technologies and innovative methodologies, we help you achieve operational excellence and deliver superior value to your customers.</P>
                            </div>
                            <div className=" flex justify-center  md:w-2/6 items-center ">
                                <Image src={"/img/services/happy_customers.svg"} width={252} height={34.6} className="hidden md:block " alt="whychooseus"></Image>
                            </div>
                        </div>
                        <div className="gap-2 " color="text-secondary-foreground">
                            <H2 className="p-2 font-bold" color="text-secondary-foreground">Organisational Development</H2>
                            <P className="p-2 font-normal text-secondary-foreground" color="text-secondary-foreground">Building a strong organizational foundation is critical for achieving long-term success. Our organizational development services focus on enhancing your company's structure, culture, and capabilities.</P>
                        </div>
                        <div className="flex gap-6">
                            <Image src={"/img/services/services_mini_image.svg"} className="hidden md:block w-1/2" alt="whychooseus" width={252} height={34.6} ></Image>
                            <Image src={"/img/services/services_mini_image2.svg"} className="hidden md:block w-1/2" alt="whychooseus" width={252} height={34.6} ></Image>
                        </div>
                        <div className="w-full">
                            <Image src={"/img/services/card_uba.svg"} width={252} height={50} className=" md:block w-full" alt="whychooseus"></Image>
                        </div>
                    </div>
                </div>
                 
            </div>
                                    
            {/* <div className=" space-y-10 md:space-y-0" >
                <H2 className="text-center" color="text-popover">
                    Get A
                    <UnderLine>  Qoute!</UnderLine>
                </H2>
                <div className=" flex items-center  ">
                    <div className=" w-full md:w-1/2 space-y-5">
                        <Input placeholder="Enter your First Name" label=" First Name" />
                        <Input placeholder="Enter your Last Name" label=" Last Name" />
                        <Input placeholder="Enter your Number" label=" Mobile Number" />
                        <div className=" flex flex-col gap-2" >
                            <label> Message</label>
                            <textarea className=" rounded-md border h-52 border-black p-2" placeholder="Enter your message here" />
                        </div>
                        <Button className=" rounded-full">Send Message</Button>
                    </div>
                    <Image src={'/img/contact/contact2.svg'} alt="contact" width={500} height={500} className="hidden md:block" />
                </div>

            </div> */}

        </div>

                                 

    )
}