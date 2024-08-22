import { H1, P, } from "@/components/typography"
import { Faq } from "@/components/faq"
import Image from "next/image";
import { faqData } from "./data";


export const WhyChooseUs = () => {
    return (
        <div className=" my-10 p-section-padding-sm md:p-section-padding  text-center space-y-10 ">
            <div className="  md:flex md:items-center md:text-left space-y-5">
                <H1 color="text-primary" className=" md:after:w-4/12 md:after:h-5 md:after:bg-popover md:after:relative after:bottom-6 after:left-96 after:opacity-40 after:float-start">Why Is Vog Global The Best Choice for Your Business?</H1>
                <P className=" lg:text-sm md:w-1/2" color="text-secondary-foreground">
                    Choosing the right partner for your business consulting, tax audit, and assurance
                    needs is crucial to your success. At VOG Global, we stand out as the premier choice
                    for businesses seeking reliable, expert, and client-centric services.
                </P>
            </div>
            <div className=" md:flex md:gap-16 space-y-10">
                <div className=" md:w-1/2 ">
                    <Image src="/img/home/whychooseus.svg" width={300} height={300} className=" w-full object-cover" alt="whychooseus" />
                </div>
                <div className=" md:w-1/2 space-y-5">
                    <div className="bg-custom-gradient w-full h-[2px]"></div>
                    {
                        faqData.map((item, i) => {
                            return (
                                <Faq key={i} value={item.question} content={item.answer} />
                            )
                        })
                    }
                </div>
            </div>
            <Image src="/img/home/whychooseusqoute.svg" width={300} height={300} className=" mx-auto w-full md:w-11/12 h-auto " alt="whychooseus" />
        </div>
    )
}