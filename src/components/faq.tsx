import {
    Accordion,
    AccordionContent,
    AccordionItem,
    AccordionTrigger,
} from "@/components/ui/accordion"

type faqProps = {
value:string,
content:string

}
export const Faq = ({value,content}:faqProps) => {
    return (
        <Accordion className=" border-t border-b border-primary" type="single" collapsible>
            <AccordionItem  value={value}>
                <AccordionTrigger className=" hover:no-underline">{value}</AccordionTrigger>
                <AccordionContent>
                    {content}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
    )

}