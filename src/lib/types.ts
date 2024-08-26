import { JWTPayload } from "jose";
import { HTMLAttributes } from "react";


export type elementProps = {
    className?: string;
    children?: React.ReactNode;
};
export type titleDescriptionProps = {
    title?: string;
    description?: string;
};

export type typographyProps = elementProps & {
    color?: 'text-primary' | 'text-secondary' | 'text-primary-foreground' | 'text-secondary-foreground' | 'text-popover'|'text-gray-400';
};


export type inputProps = elementProps & {
    type?: 'text' | 'password' | 'email' | 'number';
    placeholder?: string;
    label?: string;
    noLabel?: boolean;
    onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
};

export type TeamProps = titleDescriptionProps & {
    position: string;
    image: string;
};

export type faqProps = {
    value: string;
    content: string;
};


export type reviewType = {
    image: string;
    review: string;
    rating: number; // 1 to 5
    name: string;
    reviewertitle: string;
};


export interface ReviewCardProps extends HTMLAttributes<HTMLDivElement>, reviewType { }


export type CardObj = titleDescriptionProps & {
    icon: string;
};
export type cardProps = elementProps & CardObj;

export type blogCardProps = titleDescriptionProps &{
    date?: string;
    author?: {
        name: string;
        image?:string;
    };
    img?: string;
    current?: string;
}


export type buttonProps = elementProps & {
    color?: 'primary' | 'secondary' | 'primary-foreground' | 'secondary-foreground';
    size?: 'sm' | 'md' | 'lg';
    active?: boolean;
    onClick?: () => void;
};


export type imgObj = {
    src: string;
    size: number;
};

export type FormState =
    | {
        errors?: {
            name?: string[]
            email?: string[]
            password?: string[]
        }
        message?: string
    }
    | undefined


export type State = {
                        errors: {
                            email?: string[] | undefined;
                            password?: string[] | undefined;
                        };
                        message?: undefined;
                    } | {
                        message: string;
                        errors?: undefined;
                    } | undefined

export type Action = (payload: FormData) => void

export type Pending = boolean;

export interface SessionPayload extends JWTPayload {
    userId: string;
    expiresAt: Date;
    [key: string]: string | string[] | number | boolean | Date | undefined;
}

export interface Admin {
    id: string;
    email: string;
    password: string;
    blogs?: Blog[];
    name: string;
  }
  
  export interface Blog {
    id: string;
    title: string;
    content: string;
    createdAt: Date;
    updatedAt: Date;
    published: boolean;
    author: Admin;
    authorId: string;
  }
  