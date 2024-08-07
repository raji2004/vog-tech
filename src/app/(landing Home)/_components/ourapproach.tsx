import { H1, P, } from "@/components/typography"
import { Card } from "@/components/card"
import { cardData } from "./data"

export const OurApproach = () => {
    return (
        <div className=" bg-primary p-10 space-y-8 text-center ">
            <H1 color="text-primary-foreground">Our Approach</H1>
            <P  color="text-primary-foreground">
                At VOG Global, our approach to financial assurance and business consulting is rooted in a commitment to excellence,
                integrity, and client-centric service. We understand that each business is unique, and we tailor our services to meet
                your specific needs and challenges.
            </P>

            <div className=" flex flex-row justify-center flex-wrap gap-x-3 gap-y-6  w-fit " >
                {
                    cardData.map((item, i) => {
                        return (
                            <Card key={i} title={item.title} description={item.description} icon={item.icon} />
                        )
                    })
                }
            </div>

        </div>
    )
}