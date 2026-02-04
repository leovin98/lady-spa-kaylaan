"use client";

import Image from "next/image";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className="min-h-screen w-full flex flex-col lg:flex-row items-center justify-between gap-10 px-[5%] lg:px-[12%]">
      {/* Left Content */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="lg:w-2/5 w-full lg:order-1 order-2"
      >
        <h1 className="text-4xl sm:text-5xl lg:text-6xl font-mono leading-tight mb-6">
          Ontspan & <span className="text-primary italic">Geniet</span> In Uw
          Privé Spa
        </h1>
        <p className="text-lg text-muted-foreground mb-8 max-w-lg leading-relaxed">
          Lady Spa Kalyaan is een exclusieve privé-wellness speciaal en
          uitsluitend voor dames. Kom tot rust in onze luxueuze lady spa in het
          hart van Soestduinen.
        </p>
        <Button variant="spa" size="lg" asChild>
          <a href="#">Reserveer Nu</a>
        </Button>
      </motion.div>

      {/* Right Content */}
      <motion.div
        initial={{ opacity: 0, x: 30 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
        className="lg:w-3/5 w-full lg:order-2 order-1"
      >
        <div className="relative w-full max-w-full aspect-[9/6]">
          <div className="absolute top-0 left-0 w-[70%] h-[70%]">
            <Image
              src="/images/spa.png"
              alt="Spa"
              fill
              className="object-cover rounded-lg"
              priority
            />
          </div>
          <div className="absolute bottom-0 right-0 w-[70%] h-[70%] border-1 border-border rounded-lg overflow-hidden">
            <Image
              src="/images/swimming.jpg"
              alt="Spa"
              fill
              className="object-cover"
            />
          </div>
        </div>
      </motion.div>
    </section>
  );
}
