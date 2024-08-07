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
        <>
        <div className=" bg-custom-gradient w-full h-[2px] "></div>
        <Accordion  className=" m-0 p-0" type="single" collapsible>
            <AccordionItem  value={value}>
                <AccordionTrigger className=" hover:no-underline">{value}</AccordionTrigger>
                <AccordionContent>
                    {content}
                </AccordionContent>
            </AccordionItem>
        </Accordion>
        <div className=" bg-custom-gradient w-full h-[2px]"></div>
        </>
    )

}