'use client';
import { useState } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";

const navItems = [
  { title: "Home", href: "/" },
  { title: "About Us", href: "/about" },
  { title: "Our Services", href: "/services" },
  { title: "Blog", href: "/blog" },
  { title: "Contact Us", href: "/contact" },
];

export const NavBar = () => {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();
  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="nav">
      <div className="wrap nav-inner">
        <Link href="/" className="brand" onClick={() => setOpen(false)}>
          <img className="logo-img" src="/icon/logo.svg" alt="VOG Global" />
        </Link>
        <nav className={`nav-links${open ? " open" : ""}`}>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={isActive(item.href) ? "active" : ""}
              onClick={() => setOpen(false)}
            >
              {item.title}
            </Link>
          ))}
          <span className="nav-cta">
            <Link href="/contact" className="btn btn-gold" onClick={() => setOpen(false)}>
              Get Started
            </Link>
          </span>
        </nav>
        <button className="burger" onClick={() => setOpen((o) => !o)} aria-label="Menu">
          <svg width="26" height="26" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            <path d="M3 6h18M3 12h18M3 18h18" />
          </svg>
        </button>
      </div>
    </header>
  );
};
