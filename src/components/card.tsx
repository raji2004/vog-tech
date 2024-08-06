import { cn } from "@/lib/utils";
import { H3, P } from "./typography";

type cardProps = {
    className?: string;
    title?: string;
    description?: string;
    icon?: React.ReactNode;
};

export const Card = ({ className, title, description, icon }: cardProps) => {
    return (
        <div className={cn("flex flex-col max-w-xs w-fit items-center justify-between p-4 bg-card text-primary-foreground rounded-lg", className)}>
            <div className=" bg-white rounded-md p-2 text-primary w-fit flex justify-center items-center gap-4">
                {icon}
            </div>
            <H3 color={'primary-foreground'}>{title}</H3>
            <P color={'primary-foreground'}>{description}</P>
        </div>
    );
}

