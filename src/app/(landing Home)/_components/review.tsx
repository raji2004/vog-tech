"use client";
import { P, H1,UnderLine } from "@/components/typography";
import {
    Carousel,
    CarouselContent,
    CarouselItem,
    type CarouselApi
} from "@/components/ui/carousel";
import { ReviewCardMotion } from "@/components/carousel";
import { IconButton } from "@/components/button";
import { ArrowLeft, ArrowRight } from "lucide-react";
import { reviews } from "./data";
import { cn } from "@/lib/utils";
import '@/app/(landing Home)/_components/scroll.css';
import { useState } from "react";

export const Review = () => {
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
        <div
            className={cn(
                "   p-section-padding-sm my-10 md:p-section-padding text-center space-y-7 flex flex-col"
            )}
        >
            <div className="flex flex-row items-center justify-center ">
                <H1 color="text-primary" className="text-center flex-1">
                    What Do Our <UnderLine> Clients Say?</UnderLine>
                </H1>
                <div className=" hidden md:block space-x-7">
                    <IconButton onClick={handlePrevious} aria-label="Previous">
                        <ArrowLeft />
                    </IconButton>
                    <IconButton onClick={handleNext} aria-label="Next">
                        <ArrowRight />
                    </IconButton>
                </div>
            </div>
            <P>We serve and are trusted by numerous companies and small businesses across the country.</P>
            <div className=" md:hidden block  space-x-7 self-end">
                <IconButton onClick={handlePrevious} aria-label="Previous">
                    <ArrowLeft />
                </IconButton>
                <IconButton onClick={handleNext} aria-label="Next">
                    <ArrowRight />
                </IconButton>
            </div>

            <Carousel
                setApi={setApi}
                opts={{ loop: true }}
                autoplay={true}
                autoplayInterval={5000}
            >
                <CarouselContent>
                    {reviews.map((review, index) => (
                        <CarouselItem key={index}>
                            <ReviewCardMotion
                                image={review.image}
                                review={review.review}
                                rating={review.rating}
                                name={review.name}
                                reviewertitle={review.reviewertitle}
                            />
                        </CarouselItem>
                    ))}
                </CarouselContent>

                {/* Custom navigation buttons */}


            </Carousel>
        </div>
    );
};