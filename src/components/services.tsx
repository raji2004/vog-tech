import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion_serv"
import { faqProps } from "@/lib/types"
import Image from "next/image"

export const FaqServices = ({ value, content }: faqProps) => {
    return (
        <>
            <Accordion className="rounded-lg m-0 p-2" type="single" collapsible>
                <AccordionItem className="rounded-lg bg-white p-1" value={value}>
                    <AccordionTrigger className="hover:no-underline p-2 text-left  ">
                        <div className="flex items-center justify-start gap-5 pl-2 ">

                            {/* <Image src="/icon/check.svg" width={20} height={20} alt="plus" /> */}
                            {value}
                        </div> {/* Adjust padding */}
                    </AccordionTrigger>
                    <AccordionContent className="p-3"> {/* Adjust padding */}
                        {content}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            {/* <div className="bg-custom-gradient w-full h-[2px]"></div> */}
        </>
    )

}