import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqProps } from "@/lib/types"
import Image from "next/legacy/image"

export const Faq = ({ value, content }: faqProps) => {
    return (
        <>
            <Accordion className="border-none m-0 p-0" type="single" collapsible>
                <AccordionItem className="border-none" value={value}>
                    <AccordionTrigger className="hover:no-underline p-0 text-left  ">
                        <div className="flex items-center justify-start gap-5 pl-2 ">

                            <Image src="/icon/check.svg" width={20} height={20} alt="plus" />
                            {value}
                        </div> {/* Adjust padding */}
                    </AccordionTrigger>
                    <AccordionContent className="p-0"> {/* Adjust padding */}
                        {content}
                    </AccordionContent>
                </AccordionItem>
            </Accordion>
            <div className="bg-custom-gradient w-full h-[2px]"></div>
        </>
    )

}