import { cn } from "@/lib/utils";

type buttonProps = {
    className?: string;
    children: React.ReactNode,
    color?: 'primary' | 'secondary' | 'primary-foreground' | 'secondary-foreground',
    size?: 'sm' | 'md' | 'lg',
    active?: boolean,
    onClick?: () => void
};
export const Button = ({ children, className, color, size, onClick }: buttonProps) => {
    return (
        <button
            onClick={onClick}
            className={cn(
                "px-4 py-2 font-semibold rounded-md text-primary-foreground",
                size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base",
                color ? `bg-${color}` : "bg-primary",
               
                className
            )}
        >
            {children}
        </button>
    );
}

export const IconButton = ({ children, className, active, size, onClick }: buttonProps) => {   
    return (
        <button
            onClick={onClick}
            className={cn(
                "p-2 font-semibold rounded-full text-primary-foreground",
                size === "sm" ? "text-sm" : size === "lg" ? "text-lg" : "text-base",
               active ?
                "bg-primary hover:bg-primary-foreground hover:text-primary hover:border hover:border-primary " : 
                "bg-primary-foreground border border-primary text-primary hover:bg-primary hover:text-primary-foreground",
               
                className
            )}
        >
            {children}
        </button>
    );
}

