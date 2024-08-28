import { H1, H2, P, UnderLine } from "@/components/typography";
import { Button } from "@/components/button";
import { Input, CheckBox } from "@/components/input";
import Image from "next/image";

export default function Page() {
    return (
        <div className=" p-section-padding-sm md:p-section-padding space-y-10">
            <div className=" flex items-center ">
                <div className=" space-y-5">
                    <H2 color="text-popover">
                        Discover The Power of Financial Assurance
                        <UnderLine> In Your Business!</UnderLine>
                    </H2>
                    <P color="text-secondary-foreground">Talk to us today and get a response to you inquiries within hours!</P>
                    <Button className=" rounded-full">Start the Conversation</Button>
                </div>
                <Image src={'/img/contact/contact1.svg'} alt="contact" width={500} height={500} className="hiddem md:block" />
            </div>
            <div >
                <H2 className="text-center" color="text-popover">
                    Get A 
                    <UnderLine>  Qoute!</UnderLine>
                </H2>
                <div className=" flex items-center  ">
                    <div className=" md:w-1/2 space-y-5">
                        <Input placeholder="Enter your First Name" label=" First Name" />
                        <Input placeholder="Enter your Last Name" label=" Last Name" />
                        <Input placeholder="Enter your Number" label=" Mobile Number" />
                        <div className=" flex flex-col gap-2" >
                            <label> Message</label>
                            <textarea className=" rounded-md border h-52 border-black p-2" placeholder="Enter your message here" />
                        </div>
                        <Button className=" rounded-full">Send Message</Button>
                    </div>
                    <Image src={'/img/contact/contact2.svg'} alt="contact" width={500} height={500} className="hiddem md:block" />
                </div>

            </div>
        </div>
    )
}