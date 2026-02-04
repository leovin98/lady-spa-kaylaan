"use client";

import Link from "next/link";
import Image from "next/image";
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
        <nav className="hidden md:flex items-center gap-8">
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
      </div>
    </header>
  );
}
