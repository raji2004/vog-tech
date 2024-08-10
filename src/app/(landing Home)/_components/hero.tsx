import { H1, H2, P } from "@/components/typography"
import { Button } from "@/components/button"
import Image from "next/image"
export const Hero = () => {
    const imgDimensions: number = 500;
    return (
        <div className="p-4 flex flex-col items-center md:flex-row">
            <div className=" flex flex-col items-center gap-2 md:items-start md:gap-4 ">
                <div className="flex flex-row justify-between">
                    <div className=" text-center space-y-2 md:flex flex-col-reverse md:text-left md:gap-5">
                        <H1 >
                            Expert Tax Auditing and Business Consulting
                            Services in Nigeria.
                        </H1>
                        <P >
                            Ensuring Compliance, Maximizing Efficiency, Driving Success
                        </P>
                    </div>
                    <Image
                        src={'/img/home/hero2.svg'}
                        alt="hero.svg"
                        width={imgDimensions}
                        height={imgDimensions}
                        className="hidden md:block"
                    />
                </div>
                <Button className=" rounded-full" >Get Started</Button>
                <Image
                    src={'/img/home/hero.svg'}
                    alt="hero.svg"
                    width={imgDimensions}
                    height={imgDimensions}
                />

            </div>

        </div>
    )
}