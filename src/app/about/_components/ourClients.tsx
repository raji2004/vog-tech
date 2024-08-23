'use client';
import { H2, P } from "@/components/typography";
import { IconButton } from "@/components/button";
import { ArrowRight, ArrowLeft } from "lucide-react";
import { AdjustableSVG } from "@/components/svg";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";
import { ClientCard } from "@/components/card";
import { clientData } from "./data";
import { useState } from "react";


export const OurClients = () => {
    const [api, setApi] = useState<CarouselApi>();

    const handleNext = () => {
        if (api) {
            api.scrollNext();
        }
    };

    const handlePrevious = () => {
        if (api) {
            api.scrollPrev()
        }

    };

    return (
        <div className=" space-y-6 my-10 ">
            <div className="flex items-center p-section-padding-sm md:p-section-padding ">

                <H2 className=" text-base w-7/12 md:text-3xl md:w-1/2  lg:w-[41%]" color="text-secondary-foreground">
                    Who And What Kind of Clients Have We Serviced In The Past?
                </H2>


                <AdjustableSVG width={25} height={90} strokeWidth={1.4} circleRadius={5} gap={80} />


                <P className=" text-[6px] w-1/4 md:text-[10px] md:w-2/12 md:leading-snug text-left">
                    Our clientele base ranges from oil and gas, energy and electricity,
                    construction and contractual, banking and finance, agriculture, NGOs,
                    Government agencies, shipping, import and export, general commerce, e.t.c.
                </P>
                <div className=" hidden md:block space-x-7 ml-auto">
                    <IconButton onClick={handlePrevious} aria-label="Previous">
                        <ArrowLeft />
                    </IconButton>
                    <IconButton onClick={handleNext} aria-label="Next">
                        <ArrowRight />
                    </IconButton>
                </div>

            </div>
            <Carousel setApi={setApi} opts={{ loop: true }}
                autoplay={true}
                autoplayInterval={5000}
                className="w-full p-4  flex flex-col space-y-10 md:pl-4 md:block  "

            >
                 <div className="  md:hidden space-x-7 self-end ">
                    <IconButton onClick={handlePrevious} aria-label="Previous">
                        <ArrowLeft />
                    </IconButton>
                    <IconButton onClick={handleNext} aria-label="Next">
                        <ArrowRight />
                    </IconButton>
                </div>
              
                <CarouselContent >

                    {clientData.map((client, index) => (
                        <CarouselItem key={index} className=" md:basis-1/3"    >
                            <ClientCard title={client.title} icon={client.icon} />
                        </CarouselItem>
                    ))}
                </CarouselContent>


                
            </Carousel>

        </div>
    )
}
