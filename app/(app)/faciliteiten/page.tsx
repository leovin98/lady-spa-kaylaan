"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Droplets, Flame, Wind, Sparkles, Sun, TreePine } from "lucide-react";

const mainFacilities = [
  {
    title: "Finse Sauna",
    description:
      "Ontspan in onze authentieke Finse sauna met perfecte temperatuur tussen 80-90°C en optimale luchtvochtigheid. De traditionele houten interieur creëert een rustgevende sfeer terwijl u geniet van de vele gezondheidsvoordelen. Ideaal voor het ontgiften van uw lichaam, het verbeteren van de bloedcirculatie en het verlichten van spierspanning.",
    image: "images/sauna.jpg",
    features: [
      "Temperatuur 80-90°C",
      "Authentiek Fins dennenhout",
      "Aromatische opgieting",
      "Tot 6 personen",
    ],
  },
  {
    title: "Verwarmd Zwembad",
    description:
      "Duik in ons verwarmde binnenzwembad met sfeervolle onderwaterverlichting. Het water wordt constant op een aangename 30°C gehouden, perfect voor een ontspannende zwemervaring het hele jaar door. Geniet van de rust en sereniteit terwijl u uw baantjes trekt of gewoon drijft in het kristalheldere water.",
    image: "images/swimming.jpg",
    features: [
      "Watertemperatuur 30°C",
      "Onderwaterverlichting",
      "Tegenstroom installatie",
      "Privé setting",
    ],
  },
];

const allFacilities = [
  {
    icon: Flame,
    name: "Stoomcabine",
    description:
      "Onze stoomcabine biedt een vochtige warmte van 45°C die uw huid diep reinigt en uw luchtwegen opent. Perfect voor het verwijderen van toxines en het verkrijgen van een stralende huid.",
    benefits: [
      "Diepe huidreiniging",
      "Verbeterde ademhaling",
      "Ontspanning van spieren",
    ],
  },
  {
    icon: Sun,
    name: "Infrarood Cabine",
    description:
      "Ervaar de diepwerkende warmte van onze infraroodcabine. De stralen dringen diep in uw huid en spieren door, wat zorgt voor effectieve pijnverlichting en ontgifting.",
    benefits: [
      "Diepte-ontspanning",
      "Pijnverlichting",
      "Verbeterde stofwisseling",
    ],
  },
  {
    icon: Droplets,
    name: "Jacuzzi",
    description:
      "Laat u omarmen door de warme, bruisende stralen van onze luxe jacuzzi. De masserende waterstralen werken ontspannend op uw spieren en geest.",
    benefits: ["Hydrotherapie", "Spierontspanning", "Stress vermindering"],
  },
  {
    icon: Wind,
    name: "Relaxruimte",
    description:
      "Trek u terug in onze serene relaxruimte met comfortabele ligbedden, gedempte verlichting en rustgevende achtergrondmuziek. De perfecte plek om te herstellen tussen behandelingen.",
    benefits: ["Rustige sfeer", "Comfortabele ligbedden", "Thee & water"],
  },
  {
    icon: Sparkles,
    name: "Theetuin",
    description:
      "Geniet van een selectie biologische thee en gezonde snacks in onze sfeervolle theetuin. Een moment van rust met verse kruidenthee of een verkwikkende smoothie.",
    benefits: ["Biologische thee", "Gezonde snacks", "Ontspannen sfeer"],
  },
  {
    icon: TreePine,
    name: "Buitenterras",
    description:
      "Onze privé tuin met comfortabele ligbedden biedt u de mogelijkheid om te genieten van de frisse buitenlucht. Omringd door groen kunt u volledig tot rust komen.",
    benefits: ["Privé tuin", "Ligbedden", "Natuurlijke omgeving"],
  },
];

export default function FaciliteitenPage() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      {/* Hero Section */}
      <section className="w-full px-[5%] lg:px-[12%] py-32 bg-muted/50">
        <div className="container-spa">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Onze Faciliteiten
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6">
              Luxe <span className="text-primary italic">Wellness</span>{" "}
              Ervaring
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Ontdek onze uitgebreide faciliteiten, allemaal zorgvuldig
              ontworpen voor uw ultieme ontspanning en welzijn. Elke ruimte in
              Lady Spa Kalyaan is gecreëerd om u een onvergetelijke wellness
              ervaring te bieden.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Main Facilities */}
      <section className="w-full px-[5%] lg:px-[12%] py-32">
        <div className="container-spa">
          {mainFacilities.map((facility, index) => (
            <motion.div
              key={facility.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`grid lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24 last:mb-0 ${
                index % 2 === 1 ? "lg:flex-row-reverse" : ""
              }`}
            >
              <div className={index % 2 === 1 ? "lg:order-2" : ""}>
                <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium">
                  <img
                    src={facility.image}
                    alt={facility.title}
                    className="w-full h-full object-cover"
                  />
                </div>
              </div>
              <div className={index % 2 === 1 ? "lg:order-1" : ""}>
                <h2 className="text-3xl sm:text-4xl font-serif mb-6">
                  {facility.title}
                </h2>
                <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                  {facility.description}
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {facility.features.map((feature) => (
                    <div
                      key={feature}
                      className="flex items-center gap-3 text-foreground"
                    >
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* All Facilities Grid */}
      <section className="w-full px-[5%] lg:px-[12%] py-32 bg-muted/50">
        <div className="container-spa">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
              Alle <span className="text-primary italic">Voorzieningen</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Naast onze hoofdfaciliteiten bieden wij nog vele andere
              voorzieningen voor uw complete wellness ervaring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allFacilities.map((facility, index) => (
              <motion.div
                key={facility.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border hover:shadow-soft transition-all duration-300"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <facility.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">
                  {facility.name}
                </h3>
                <p className="text-muted-foreground mb-6 leading-relaxed">
                  {facility.description}
                </p>
                <ul className="space-y-2">
                  {facility.benefits.map((benefit) => (
                    <li
                      key={benefit}
                      className="flex items-center gap-2 text-sm text-foreground"
                    >
                      <div className="w-1.5 h-1.5 rounded-full bg-primary" />
                      {benefit}
                    </li>
                  ))}
                </ul>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="w-full px-[5%] lg:px-[12%] py-32">
        <div className="container-spa">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto"
          >
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
              Klaar om te{" "}
              <span className="text-primary italic">Ontspannen</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Reserveer vandaag nog uw privé wellness ervaring en ontdek alle
              faciliteiten van Lady Spa Kalyaan.
            </p>
            <Button variant="spa" size="xl" asChild>
              <Link href="/contact">Maak Een Afspraak</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
