"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";

const treatments = [
  {
    category: "Massage",
    items: [
      { name: "Holistische Massage", duration: "60 min", price: "€85" },
      { name: "Hot Stone Massage", duration: "75 min", price: "€95" },
      { name: "Ontspanningsmassage", duration: "45 min", price: "€65" },
      { name: "Aromatherapie Massage", duration: "60 min", price: "€90" },
    ],
  },
  {
    category: "Gezichtsbehandelingen",
    items: [
      { name: "Luxe Facial Treatment", duration: "60 min", price: "€95" },
      { name: "Anti-Aging Behandeling", duration: "75 min", price: "€115" },
      {
        name: "Hydraterende Gezichtsbehandeling",
        duration: "45 min",
        price: "€75",
      },
      { name: "Glow & Radiance Facial", duration: "50 min", price: "€85" },
    ],
  },
  {
    category: "Lichaamsverzorging",
    items: [
      { name: "Body Scrub & Wrap", duration: "60 min", price: "€80" },
      { name: "Detox Behandeling", duration: "90 min", price: "€120" },
      { name: "Ayurvedische Behandeling", duration: "75 min", price: "€105" },
      { name: "Voetreflexologie", duration: "45 min", price: "€55" },
    ],
  },
];

const extraFacilities = [
  { name: "Stoomcabine", description: "Reinigende stoombehandeling" },
  { name: "Infrarood Cabine", description: "Diepwerkende warmtetherapie" },
  { name: "Jacuzzi", description: "Bubbelbad voor ultieme ontspanning" },
  { name: "Relaxruimte", description: "Rustige ruimte om te herstellen" },
  { name: "Theetuin", description: "Biologische thee en snacks" },
  { name: "Buitenterras", description: "Privé tuin met ligbedden" },
];

export default function Treatments() {
  return (
    <section className="w-full px-[5%] lg:px-[12%] py-32 bg-muted/50">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="lg:sticky lg:top-32"
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Behandelingen
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono mb-6 leading-tight">
            Premium <span className="text-primary italic">Beauty</span> &
            Wellness
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Onze ervaren therapeuten bieden een breed scala aan behandelingen,
            van ontspannende massages tot revitaliserende gezichtsbehandelingen.
            Elke behandeling is zorgvuldig samengesteld om u de beste resultaten
            te geven.
          </p>

          <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium mb-8">
            <img
              src="/images/facial.jpg"
              alt="Luxe gezichtsbehandeling"
              className="w-full h-full object-cover"
            />
          </div>

          <Button variant="spa" size="lg" asChild>
            <a href="#">Boek Uw Behandeling</a>
          </Button>
        </motion.div>

        <div className="space-y-8">
          {treatments.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: categoryIndex * 0.1 }}
              className="bg-card rounded-2xl p-6 md:p-8 border border-border"
            >
              <h3 className="text-2xl font-mono text-primary mb-6">
                {category.category}
              </h3>
              <div className="space-y-4">
                {category.items.map((item, index) => (
                  <div
                    key={item.name}
                    className="flex items-center justify-between py-3 border-b border-border last:border-0"
                  >
                    <div>
                      <h4 className="font-medium text-foreground">
                        {item.name}
                      </h4>
                      <p className="text-sm text-muted-foreground">
                        {item.duration}
                      </p>
                    </div>
                    <span className="text-lg font-mono text-primary font-medium">
                      {item.price}
                    </span>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
