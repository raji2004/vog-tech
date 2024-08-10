import { Input } from "@/components/input";
import { Button } from "@/components/button";
import { H3, P, List } from "@/components/typography";
import Image from "next/image";


export const Footer = () => {
    return (
        <div className=" bg-white p-4 space-y-36 flex flex-col items-center">
            <div className=" bg-primary w-11/12 md:w-3/4 md:flex md:flex-col md:items-center text-center rounded-3xl p-10 space-y-5">
                <H3 color="text-primary-foreground">Ready To Change Your Business</H3>
                <P className=" text-[10px] md:text-sm" color="text-primary-foreground">
                    Unlock your {"business’s "}full potential with VOG {"Global’s"} expert consulting,
                    tax audit, and assurance services. Our team of seasoned professionals is dedicated to
                    providing tailored solutions that drive growth, enhance efficiency,
                    and ensure compliance.
                </P>
                <div className="flex items-center md:w-4/5 rounded-lg overflow-hidden pr-1 bg-white">
                    <Input
                        className="flex-grow px-3 py-2 border-none focus:outline-none"
                        placeholder="Enter Your email"
                        noLabel
                    />
                    <Button className="bg-secondary text-white w-1/2 md:w-1/3 md:text-base  rounded-lg px-0 py-2 text-[12px]">
                        Get Started
                    </Button>
                </div>
            </div>

            <div className=" flex flex-col md:flex-row gap-10 items-center justify-evenly">
                <div className=" flex flex-col md:w-1/3 text-left gap-4">

                    <Image
                        src="/icon/logo.svg"
                        alt="logo"
                        width={100}
                        height={100}
                        className=" justify-self-start md:justify-self-center"
                    />
                    <P className=" text-[10px] md:text-sm" color="text-secondary-foreground">
                        VOG Global is a leading provider of consulting, tax audit, and assurance services.
                        Our team of seasoned professionals is dedicated to providing tailored solutions that drive growth, enhance efficiency, and ensure compliance.
                    </P>
                </div>

                <List className=" text-secondary-foreground  text-center  list-none">
                    <H3 color="text-secondary-foreground" className=" font-bold"> Our Services</H3>
                    <li>IT Audits</li>
                    <li>Internal Auditing</li>
                    <li>External Auditing</li>
                    <li>Financial Reviews</li>
                    <li>Financial Services</li>
                    <li>Tax Auditing Services</li>
                </List>
                <List className=" text-secondary-foreground  text-center  list-none">
                    <H3 color="text-secondary-foreground" className=" font-bold"> VOG Global</H3>
                    <li>VOG Finance </li>
                    <li>VOG GlobalTech</li>
                    <li>VOG Global Consult</li>
                </List>

                <div className=" flex flex-col items-center md:items-start gap-4">
                    <H3 color="text-secondary-foreground">Subscribe To Our Newsletters</H3>
                    <Input placeholder=" Enter your email" noLabel className=" border text-secondary-foreground" />
                    <Button className=" border border-secondary-foreground bg-white text-secondary-foreground"> Suscribe</Button>
                </div>


            </div>

        </div>
    )
}