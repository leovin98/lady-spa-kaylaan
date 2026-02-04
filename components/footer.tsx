import Link from "next/link";
import Image from "next/image";
import { Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-foreground text-primary-foreground px-[12%] max-[1000px]:px-[5%]">
      <div className="container-spa py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div className="lg:col-span-2">
            <Link href="/" className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 flex items-center justify-center">
                <Image
                  src="images/logo.svg"
                  width={50}
                  height={50}
                  alt="Logo Picture"
                />
              </div>
              <span className="font-mono text-xl">
                Lady Spa <span className="text-primary">Kalyaan</span>
              </span>
            </Link>
            <p className="text-primary-foreground/70 max-w-md leading-relaxed mb-6">
              Uw exclusieve privé-wellness in Soestduinen. Een oase van rust
              speciaal voor dames die op zoek zijn naar ultieme ontspanning en
              verjonging.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-mono text-lg mb-4">Snelle Links</h4>
            <ul className="space-y-3">
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Faciliteiten
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Behandelingen
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Over Ons
                </Link>
              </li>
              <li>
                <Link
                  href="/"
                  className="text-primary-foreground/70 hover:text-primary transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-mono text-lg mb-4">Contact</h4>
            <ul className="space-y-3 text-primary-foreground/70">
              <li>Soestduinen, Nederland</li>
              <li>
                <a
                  href="tel:+31653948534"
                  className="hover:text-primary transition-colors"
                >
                  +31 6 53 94 85 34
                </a>
              </li>
              <li>
                <a
                  href="mailto:info@ladyspakalyaan.nl"
                  className="hover:text-primary transition-colors"
                >
                  info@ladyspakalyaan.nl
                </a>
              </li>
              <li>Ma-Zo: 10:00 - 21:00</li>
            </ul>
          </div>
        </div>

        {/* Bottom */}
        <div className="border-t border-primary-foreground/10 mt-12 pt-8 flex flex-col sm:flex-row justify-between items-center gap-4">
          <p className="text-primary-foreground/60 text-sm">
            © 2025 Lady Spa Kalyaan. Alle rechten voorbehouden.
          </p>
          <p className="text-primary-foreground/60 text-sm flex items-center gap-1">
            Gemaakt met <Heart className="w-4 h-4 text-primary fill-primary" />{" "}
            in Nederland
          </p>
        </div>
      </div>
    </footer>
  );
}
