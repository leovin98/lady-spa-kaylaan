"use client";
import { motion } from "framer-motion";

const facilities = [
  {
    title: "Finse Sauna",
    description:
      "Ontspan in onze authentieke Finse sauna met perfecte temperatuur en luchtvochtigheid. Ideaal voor het ontgiften van uw lichaam.",
    image: "/images/sauna.jpg",
  },
  {
    title: "Verwarmd Zwembad",
    description:
      "Duik in ons verwarmde binnenzwembad met sfeervolle verlichting. Perfect voor een ontspannende zwemervaring.",
    image: "/images/swimming.jpg",
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

export default function Facilities() {
  return (
    <section className="w-full px-[5%] lg:px-[12%] py-32">
      {/* Section Header */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="text-center max-w-2xl mx-auto mb-16"
      >
        <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
          Onze Faciliteiten
        </span>
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono mb-6">
          Luxe <span className="text-primary italic">Wellness</span> Ervaring
        </h2>
        <p className="text-muted-foreground text-lg">
          Ontdek onze uitgebreide faciliteiten, allemaal ontworpen voor uw
          ultieme ontspanning en welzijn.
        </p>
      </motion.div>

      {/* Main Facilities */}
      <div className="grid md:grid-cols-2 gap-8 mb-16">
        {facilities.map((facility, index) => (
          <motion.div
            key={facility.title}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
            className="group relative overflow-hidden rounded-2xl"
          >
            <div className="aspect-[4/3] overflow-hidden">
              <img
                src={facility.image}
                alt={facility.title}
                className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
            <div className="absolute bottom-0 left-0 right-0 p-6 md:p-8">
              <h3 className="text-2xl font-mono text-primary-foreground mb-2">
                {facility.title}
              </h3>
              <p className="text-primary-foreground/80 leading-relaxed">
                {facility.description}
              </p>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Extra Facilities Grid */}
      <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {extraFacilities.map((facility, index) => (
          <motion.div
            key={facility.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.05 }}
            className="bg-card p-6 rounded-xl border border-border hover:shadow-soft transition-all duration-300"
          >
            <h4 className="font-mono text-lg font-medium mb-2">
              {facility.name}
            </h4>
            <p className="text-muted-foreground">{facility.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
