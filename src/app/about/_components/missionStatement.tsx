import { H1 } from "@/components/typography";
import Image from "next/image";

export const MissionStatement = () => {
    return(
        <div className="relative p-section-padding-sm md:p-section-padding text-center flex flex-col items-center justify-center space-y-7">
        <H1>We Support Our Clients In Attaining Financial Security!</H1>
        <Image src="/img/about/mission.svg" alt="Mission Statement" className=" w-full md:w-4/5" width={300} height={200} />
        <div className="absolute bottom-6 md:bottom-10 left-0 w-full h-24 md:h-64 bg-secondary -z-30"></div>
      </div>
      
    )
}