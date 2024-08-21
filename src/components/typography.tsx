import { cn } from "@/lib/utils";
import { typographyProps } from "@/lib/types";



export function H1({ className, children, color }: typographyProps) {
  return (
    <h1
      className={cn(
        " text-3xl  leading-normal lg:text-5xl font-semibold lg:leading-normal lg:tracking-widest ",
        className,
        color ? `${color}` : ' text-primary'
      )}
    >
      {children}
    </h1>
  );
}

export function H2({ className, children, color }: typographyProps) {
  return (
    <h2
      className={cn(
        " text-3xl lg:text-4xl font-normal md:leading-normal ",
        className,
        color ? `${color}` : 'text-primary'
      )}
    >
      {children}
    </h2>
  );
}

export function H3({ className, children, color }: typographyProps) {
  return (
    <h3
      className={cn(
        " text-lg sm:text-xl md:text-2xl font-semibold tracking-tight",
        className,
        color ? `${color}` : 'text-primary'
      )}
    >
      {children}
    </h3>
  );
}

export function H4({ className, children, color }: typographyProps) {
  return (
    <h4
      className={cn(
        " text-base sm:text-lg md:text-xl font-semibold tracking-tight",
        className,
        color ? `${color}` : 'text-primary'
      )}
    >
      {children}
    </h4>
  );
}

export function P({ className, children, color }: typographyProps) {
  return (
    <p
      className={cn(
        " text-sm md:text-2xl leading-4 ",
        className,
        color ? `${color}` : 'text-primary'
      )}
    >
      {children}
    </p>
  );
}

export function Quote({ className, children, color }: typographyProps) {
  return (
    <blockquote className={cn("mt-6 border-l-2 pl-6 italic", className, color ? `${color}` : 'text-primary')}>
      {children}
    </blockquote>
  );
}

export function List({ className, children, color }: typographyProps) {
  return (
    <ul className={cn("my-6 ml-6 list-disc [&>li]:mb-2", className, color ? `${color}` : 'text-primary')}>
      {children}
    </ul>
  );
}

