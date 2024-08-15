"use client";
import { P, H4, H1 } from "@/components/typography";
import Image from "next/image";


const Team = ({ img, title, pos }: { img: string; title: string; pos: string }) => {
  return (
    <div className="flex flex-col items-center text-center">
      <Image
        src={img}
        alt={title}
        width={200}
        height={200}
        className=" rounded-tl-3xl rounded-tr-3xl"
      />
      <H4 className="text-sm md:text-sm" color="text-secondary-foreground">
        {title}
      </H4>
      <P color="text-popover">{pos}</P>
    </div>
  );
};

export const CoreTeam = () => {
  const teamMembers = [
    {
      img: "/img/home/coreteam.svg",
      title: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK), PHD (USA), CNA, ACTI.",
      pos: "CEO",
    },
    {
      img: "/img/home/coreteam.svg",
      title: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK), PHD (USA), CNA, ACTI.",
      pos: "CEO",
    },
    {
      img: "/img/home/coreteam.svg",
      title: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK), PHD (USA), CNA, ACTI.",
      pos: "CEO",
    },
    {
      img: "/img/home/coreteam.svg",
      title: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK), PHD (USA), CNA, ACTI.",
      pos: "CEO",
    },
    {
      img: "/img/home/coreteam.svg",
      title: "UDO, OKEY OKORO CPA, MNIM, M.Sc.(UK), PHD (USA), CNA, ACTI.",
      pos: "CEO",
    },
    
    // Add more team members as needed...
  ];



  return (
    <div className="bg-white space-y-5 p-section-padding-sm md:p-section-padding">
      <H1 color="text-primary" className="text-center">
        Our Core Team
      </H1>
      <div className="flex flex-col md:flex-row md:flex-nowrap items-center justify-center md:gap-5 md:overflow-x-auto no-scrollbar">
        {teamMembers.map((member, index) => (
          <div key={index} className="flex-shrink-0 w-40"> {/* Set a fixed width */}
            <Team
              img={member.img}
              title={member.title}
              pos={member.pos}
            />
          </div>
        ))}
      </div>


    </div>
  );
};

// Assume ReviewCardMotion is already defined and exported as motion(ReviewCard)
