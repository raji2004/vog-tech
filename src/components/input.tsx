'use client';
import { cn } from "@/lib/utils";
import { Mail, Lock, Eye, EyeOff } from 'lucide-react'
import { useState } from "react";
import { inputProps } from "@/lib/types";


export const Input = ({ className, type, placeholder, label,noLabel, onChange }: inputProps) => {
    const [showPassword, setShowPassword] = useState(false);
    function changeVisibility() {
        setShowPassword(!showPassword);
    }
    return (
        <div className={cn("flex flex-col w-full ", className)}>
            {!noLabel && <label className="text-primary font-semibold">{label}</label>}
            <div className=" relative w-full ">
                {type === 'email' && <Mail size={24} className="absolute top-2 left-4 text-primary" />}
                {type === 'password' && <Lock size={24} className="absolute top-2 left-4 text-primary" />}
                <input
                    type={type != 'password' ? type : showPassword ? 'text' : 'password'}
                    placeholder={placeholder}
                    name={label}
                    onChange={onChange}

                    className={cn(
                        "pl-12 py-2 font-semibold rounded-md placeholder:text-secondary-foreground  text-primary border border-black w-full",
                        "bg-transparent",
                        className
                    )}
                />
                {type === 'password'

                    && (showPassword ? <Eye size={24} onClick={changeVisibility} className="absolute top-2 right-4 text-primary" />
                        : <EyeOff size={24} onClick={changeVisibility} className="absolute top-2 right-4 text-primary" />)
                }
            </div>
        </div>
    );
}

export const CheckBox = ({ className, label, onChange }: inputProps) => {
    return (
        <div className={cn("flex flex-row items-center gap-2", className)}>
            <input
                type="checkbox"
                name={label}
                onChange={onChange}
                className={cn(
                    " relative peer shrink-0 appearance-none w-4 h-4 font-semibold rounded-sm text-primary border border-primary",
                    className,
                    "checked:bg-primary checked:border-transparent "
                )}
            />
            <label className="text-primary font-semibold">{label}</label>
            <svg
                className=" absolute w-4 h-4 mt-1 pointer-events-none hidden peer-checked:block text-white"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="4"
                stroke-linecap="round"
                stroke-linejoin="round"
            >
                <polyline points="20 6 9 17 4 12"></polyline>
            </svg>
        </div>
    );
}