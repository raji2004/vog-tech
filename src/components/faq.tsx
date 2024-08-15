import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"
import { faqProps } from "@/lib/types"

export const Faq = ({ value, content }: faqProps) => {
    return (
        <>
            <div className="bg-custom-gradient w-full h-[2px]"></div>
            <Accordion className="border-none m-0 p-0" type="single" collapsible>
                <AccordionItem className="border-none" value={value}>
                    <AccordionTrigger className="hover:no-underline p-0 "> {/* Adjust padding */}
                        {value}
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