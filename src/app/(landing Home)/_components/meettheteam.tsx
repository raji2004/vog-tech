import { TeamCard } from "@/components/team";
import { H1, P, } from "@/components/typography";
import { teamData } from "./data";
import Image from "next/image";
import { Button } from "@/components/button";

export const MeetTheTeam = () => {
    return (
        <div className=" bg-white p-section-padding-sm md:p-section-padding text-center space-y-10 ">
            <H1 color="text-primary">Meet Our Team Of Innovative Problem Solvers</H1>
            <div className="  space-y-10">
                {
                    teamData.map((item, i) => {
                        return (
                            <TeamCard
                                key={i}
                                title={item.title}
                                position={item.position}
                                image={item.image}
                                description={item.description}
                            />
                        )
                    })
                }
            </div>
            <div className=" md:flex md:gap-4 space-y-6">
                <Image src="/img/home/meettheteamb.svg" alt="team" className=" md:w-3/6" width={500} height={500} />
                <div className=" md:w-1/2 space-y-5 text-left">
                    <H1 color="text-primary">We Lead Your Business To Success!</H1>
                    <P color="text-secondary-foreground">Our {"Team’s "}goal is to drive your team
                        to success with the right finances and financial practices.
                    </P>
                    <div className=" flex gap-9">
                        <Button size="sm">Mission Statement</Button>
                        <Button size="sm" className=" border-primary border-2 text-primary bg-primary-foreground text-sm">Vision Statement</Button>
                    </div>
                    <div className=" w-full p-2 bg-popover-foreground text-left">
                        <P color="text-primary">To create professional rewarding services for all our clients through
                            relentless pursuit of perfection with necessary technological aids.</P>
                    </div>
                </div>
            </div>
        </div>
    )
}