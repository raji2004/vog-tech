'use client';
import { useState } from "react";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { cn } from "@/lib/utils";

const navigationMenuItems = [
    { title: "Home", href: "/" },
    { title: "About Us", href: "/about" },
    { title: "Our Approach", href: "/approach" },
    { title: "Our Services", href: "/services" },
    { title: "Contact Us", href: "/contact" },
];

export const NavBar = () => {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <nav className="bg-foreground shadow-md">
            <div className="w-full mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
                <Link href="/" className="flex-shrink-0">
                    <Image
                        src="/icon/logo.svg"
                        alt="logo"
                        width={60}
                        height={60}
                    />
                </Link>
                <div className="hidden md:flex ml-10 space-x-4">
                    {navigationMenuItems.map((item, index) => (
                        <NavItem key={index} href={item.href} title={item.title} />
                    ))}
                </div>
                <button
                    onClick={() => setIsOpen(!isOpen)}
                    className="md:hidden"
                >
                    {isOpen ? <X size={32} className="text-white" /> : <Menu size={32} className="text-white" />}
                </button>
            </div>
            <MobileMenu isOpen={isOpen} items={navigationMenuItems} setIsOpen={setIsOpen} />
        </nav>
    );
};

const NavItem = ({ href, title, isMobile, setIsOpen }: { href: string, title: string, isMobile?: boolean, setIsOpen?: (isOpen: boolean) => void }) => {
    const pathname = usePathname();

    return (
        <Link
            href={href}
            className={cn(
                "px-3 py-2 rounded-md text-sm font-medium",
                {
                    "text-white": !isMobile,
                    "text-secondary-foreground hover:text-primary": isMobile,
                    "bg-gray-300": isMobile && pathname === href,
                    " after:float-left after:bg-white after:w-full after:h-1 after:rounded-full ": pathname === href && !isMobile,
                }
            )}
            onClick={() => {
                if (isMobile && setIsOpen) {
                    setIsOpen(false); // Close the mobile menu when a link is clicked
                }
            }}
        >
            {title}
        </Link>
    );
};

type Item = {
    href: string,
    title: string
}

const MobileMenu = (
    { isOpen, items, setIsOpen }:
        {
            isOpen: boolean,
            items: Item[],
            setIsOpen: (isOpen: boolean) => void
        }
) => {
    return (
        <div className={`fixed  inset-0 z-50 transition-transform duration-300 ease-in-out  bg-white ${isOpen ? ' translate-x-0  ' : ' translate-x-full '}`}>
            <div className="flex justify-end p-4">
                <button
                    onClick={() => setIsOpen(false)}
                    className="text-gray-800 hover:text-gray-600 focus:outline-none"
                >
                    <X size={32} className="text-black" />
                </button>
            </div>
            <div className="flex flex-col items-center space-y-1 sm:px-3">
                {items.map((item, index) => (
                    <NavItem key={index} href={item.href} title={item.title} isMobile setIsOpen={setIsOpen} />
                ))}
            </div>
        </div>
    );
};
