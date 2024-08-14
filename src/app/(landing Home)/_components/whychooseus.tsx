import { H1, P, } from "@/components/typography"
import { Faq } from "@/components/faq"
import Image from "next/image";
import { faqData } from "./data";


export const WhyChooseUs = () => {
    return (
        <div className=" bg-white p-section-padding text-center space-y-10 ">
            <div className="  md:flex space-y-5">
                <H1 color="text-primary">Why Is Vog Global The Best Choice for Your Business?</H1>
                <P className=" text-[10px] md:w-1/2" color="text-secondary-foreground">
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
                    {
                        faqData.map((item, i) => {
                            return (
                                <Faq key={i} value={item.question} content={item.answer} />
                            )
                        })
                    }
                </div>
            </div>
            <Image src="/img/home/whychooseusqoute.svg" width={300} height={300} className=" w-full object-cover" alt="whychooseus" />
        </div>
    )
}