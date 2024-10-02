import Image from "next/image";
import { H1,H3, H4, P, List, UnderLine } from "@/components/typography"
import { Button } from "@/components/button";
import { FaqServices, } from "@/components/services";
import { brochure, services } from "./data";
import { Input2, CheckBox } from "@/components/input";

export const Leftbar = () => {
    return (
        <div className="hidden lg:block w-4/12 p-section-padding-sm md:p-section-padding space-y-10">
            <div className="w-full bg-service-green p-4  rounded-lg">
                <H3 color="text-secondary-foreground" className="font-normal p-1">Our Services</H3>

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
            <div className="w-full bg-service-green p-4  rounded-lg">
                <H3 color="text-secondary-foreground" className="font-normal p-1">Brochure</H3>

                <div className="flex flex-col">
                    <div className="flex flex-col  justify-between p-1  rounded-lg">
                        {
                            brochure.map((item, i) => {
                                return (
                                    <FaqServices key={i} value={item.title} content={item.src} />
                                )
                            })
                        }
                        {/* <p className="text-white ms-1">Business Consulting</p>
                                <Image src={'/img/services/arrowright1.svg'} alt="contact" width={31.96} height={31.96} className=" md:block" /> */}
                    </div>

                </div>
            </div>
            <div className="w-full bg-service-green p-4  rounded-lg">
                <H3 color="text-secondary-foreground" className="font-normal p-1">Get A Free Quote</H3>

                <div className="flex flex-col">
                    <div className="flex flex-col  justify-between p-1  rounded-lg">
                        <div className=" w-full  space-y-5">
                            <Input2 placeholder="Enter your Name" />
                            <Input2 placeholder="Enter your Last Name"  />
                           
                            <div className=" flex flex-col gap-2" >
                                
                                <textarea className=" rounded-md border h-52 border-black p-2" placeholder="Type Your Message" />
                            </div>
                            <Button className=" rounded-full">Send Message</Button>
                        </div>   
                        {/* {
                            brochure.map((item, i) => {
                                return (
                                    <FaqServices key={i} value={item.title} content={item.src} />
                                )
                            })
                        } */}
                        {/* <p className="text-white ms-1">Business Consulting</p>
                                <Image src={'/img/services/arrowright1.svg'} alt="contact" width={31.96} height={31.96} className=" md:block" /> */}
                    </div>

                </div>
            </div>                
            <div>
                <Image src={"/img/services/contact.svg"} width={252} height={50} className=" md:block w-full" alt="whychooseus"></Image>
            </div>
        </div>
    )
}

