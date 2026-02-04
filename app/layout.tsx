import "@/styles/globals.css";
import type { Metadata } from "next";
import { Lato, Playfair_Display } from "next/font/google";

const lato = Lato({
  variable: "--font-lato",
  subsets: ["latin"],
  weight: ["100", "300", "400", "700"],
});

const playfairDisplay = Playfair_Display({
  variable: "--font-playfair-display",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Private Lady Spa Soestduinen | Lady Spa Kaylaan",
  description:
    "Lady Spa Kalyaan is een beauty & wellness spa. Een exclusieve privé-wellness speciaal en uitsluitend voor dames. Kom tot rust in onze lady spa!",
  keywords: ["Private Lady Spa", "Rust & Wellness", "Lady Spa"],
  openGraph: {
    title: "Private Lady Spa Soestduinen | Rust & Wellness",
    description:
      "Lady Spa Kaylaan is een beauty & wellness spa. Een exclusieve prive-wellness speciaal.",
    url: "https://lady-spa-kalyaan.nl",
    siteName: "Lady Spa Kaylaan",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${lato.variable} ${playfairDisplay.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
