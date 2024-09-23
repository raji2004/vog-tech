import Image from "next/image";
import { H1, H4, P, List, UnderLine } from "@/components/typography"
import { FaqServices, } from "@/components/services";
import { services } from "./data";


export const Leftbar = () => {
    return (
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
    )
}

