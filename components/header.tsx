"use client";

import Link from "next/link";
import Image from "next/image";
import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/faciliteiten", label: "Faciliteiten" }, //Facilities
  { href: "/behandelingen", label: "Behandelingen" }, //Treatments
  { href: "/over-ons", label: "Over Ons" }, //About Us
  { href: "/contact", label: "Contact" },
];

export default function Header() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const closeMenu = () => setOpen(false);

  // Lock scroll when open
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "auto";
  }, [open]);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/80 backdrop-blur-md border-b border-border px-[12%] max-[1000px]:px-[5%]">
      <div className="flex items-center justify-between h-16">
        {/* Logo */}
        <div className="flex items-center gap-3">
          <Image
            src="images/logo.svg"
            width={50}
            height={50}
            alt="Logo Picture"
          />
          <span className="font-mono text-xl font-medium text-foreground">
            Lady Spa <span className="text-primary">Kalyaan</span>
          </span>
        </div>

        {/* Desktop Navigation */}
        <nav className="hidden min-[1000px]:flex items-center gap-8">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={`transition-colors duration-300 font-medium ${
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Hamburger (below 1000px) */}
        <button
          onClick={() => setOpen(!open)}
          className="relative z-50 w-10 h-10 flex items-center justify-center min-[1000px]:hidden"
          aria-label="Toggle Menu"
        >
          <span
            className={`absolute h-1 w-8 bg-foreground rounded transition-all duration-300 ${
              open ? "rotate-45" : "-translate-y-3"
            }`}
          />
          <span
            className={`absolute h-1 w-8 bg-foreground rounded transition-all duration-300 ${
              open ? "opacity-0" : ""
            }`}
          />
          <span
            className={`absolute h-1 w-8 bg-foreground rounded transition-all duration-300 ${
              open ? "-rotate-45" : "translate-y-3"
            }`}
          />
        </button>
      </div>

      {/* Fullscreen Mobile Menu */}
      <div
        className={`fixed h-screen w-screen inset-0 bg-background flex flex-col items-center justify-center transition-all duration-300 ease-in-out min-[1000px]:hidden ${
          open ? "opacity-100 visible" : "opacity-0 invisible"
        }`}
      >
        <nav className="flex flex-col items-center gap-10 text-2xl font-semibold">
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={closeMenu}
              className={`transition-colors duration-300 ${
                pathname === item.href
                  ? "text-primary"
                  : "text-muted-foreground hover:text-primary"
              }`}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      </div>
    </header>
  );
}
