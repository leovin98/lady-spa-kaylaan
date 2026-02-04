"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { Clock, Star } from "lucide-react";
import { Button } from "@/components/ui/button";

const treatmentCategories = [
  {
    category: "Massage Therapie",
    description:
      "Onze ervaren therapeuten gebruiken traditionele en moderne massagetechnieken om spanning te verlichten en uw lichaam in balans te brengen.",
    items: [
      {
        name: "Holistische Massage",
        duration: "60 min",
        price: "€85",
        description:
          "Een volledig lichaamsmassage die geest, lichaam en ziel in balans brengt.",
      },
      {
        name: "Hot Stone Massage",
        duration: "75 min",
        price: "€95",
        description:
          "Warme basaltstenen worden gebruikt om diepe spierontspanning te bereiken.",
      },
      {
        name: "Ontspanningsmassage",
        duration: "45 min",
        price: "€65",
        description:
          "Een zachte massage gericht op het verlichten van alledaagse spanning.",
      },
      {
        name: "Aromatherapie Massage",
        duration: "60 min",
        price: "€90",
        description:
          "Combinatie van massage met etherische oliën voor totale ontspanning.",
      },
      {
        name: "Deep Tissue Massage",
        duration: "60 min",
        price: "€95",
        description:
          "Intensieve massage voor het verlichten van chronische spierspanning.",
      },
      {
        name: "Zwangerschapsmassage",
        duration: "45 min",
        price: "€75",
        description: "Speciaal ontworpen massage voor aanstaande moeders.",
      },
    ],
  },
  {
    category: "Gezichtsbehandelingen",
    description:
      "Premium gezichtsbehandelingen met hoogwaardige producten voor een stralende, jeugdige huid.",
    items: [
      {
        name: "Luxe Facial Treatment",
        duration: "60 min",
        price: "€95",
        description:
          "Complete gezichtsbehandeling inclusief reiniging, peeling, masker en massage.",
      },
      {
        name: "Anti-Aging Behandeling",
        duration: "75 min",
        price: "€115",
        description:
          "Geavanceerde behandeling met collageen boost voor een jeugdiger uitstraling.",
      },
      {
        name: "Hydraterende Gezichtsbehandeling",
        duration: "45 min",
        price: "€75",
        description:
          "Intensieve vochtinbrengende behandeling voor een gehydrateerde huid.",
      },
      {
        name: "Glow & Radiance Facial",
        duration: "50 min",
        price: "€85",
        description:
          "Verlichtende behandeling voor een stralende, glanzende huid.",
      },
      {
        name: "Sensitive Skin Facial",
        duration: "50 min",
        price: "€80",
        description: "Milde behandeling speciaal voor gevoelige huidtypes.",
      },
    ],
  },
  {
    category: "Lichaamsverzorging",
    description:
      "Verwennende lichaamsbehandelingen die uw huid zijdezacht maken en uw lichaam revitaliseren.",
    items: [
      {
        name: "Body Scrub & Wrap",
        duration: "60 min",
        price: "€80",
        description:
          "Exfoliërende scrub gevolgd door een voedende lichaamswrap.",
      },
      {
        name: "Detox Behandeling",
        duration: "90 min",
        price: "€120",
        description:
          "Intensieve ontgiftende behandeling voor een gezonder gevoel.",
      },
      {
        name: "Ayurvedische Behandeling",
        duration: "75 min",
        price: "€105",
        description: "Traditionele Indiase behandeling die balans herstelt.",
      },
      {
        name: "Voetreflexologie",
        duration: "45 min",
        price: "€55",
        description:
          "Therapeutische voetmassage die het hele lichaam beïnvloedt.",
      },
      {
        name: "Chocolade Body Treatment",
        duration: "60 min",
        price: "€90",
        description:
          "Luxueuze behandeling met pure cacao voor zachte, stralende huid.",
      },
    ],
  },
];

const packages = [
  {
    name: "Half Day Retreat",
    duration: "3 uur",
    price: "€175",
    description:
      "Een halve dag vol verwennerij inclusief toegang tot alle faciliteiten, een massage naar keuze en een lichte lunch.",
    includes: [
      "Toegang faciliteiten",
      "45 min massage",
      "Lichte lunch",
      "Thee & snacks",
    ],
    popular: false,
  },
  {
    name: "Full Day Spa",
    duration: "6 uur",
    price: "€295",
    description:
      "Een complete dag van ontspanning met meerdere behandelingen, volledige toegang tot alle faciliteiten en een heerlijke lunch.",
    includes: [
      "Toegang faciliteiten",
      "60 min massage",
      "Gezichtsbehandeling",
      "Lunch & dranken",
    ],
    popular: true,
  },
  {
    name: "Duo Wellness",
    duration: "4 uur",
    price: "€320",
    description:
      "Geniet samen met uw beste vriendin of moeder van een onvergetelijke wellness ervaring.",
    includes: [
      "Voor 2 personen",
      "Toegang faciliteiten",
      "45 min massage pp",
      "Thee & gebak",
    ],
    popular: false,
  },
];

export default function BehandelingenPage() {
  return (
    <main className="flex flex-col items-center justify-start w-full">
      {/* Hero Section */}
      <section className="pt-32 pb-16 bg-muted/50 w-full px-[5%] lg:px-[12%] py-32">
        <div className="container-spa">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Behandelingen
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6">
              Premium <span className="text-primary italic">Beauty</span> &
              Wellness
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Onze ervaren therapeuten bieden een uitgebreid scala aan
              behandelingen, van ontspannende massages tot revitaliserende
              gezichtsbehandelingen. Elke behandeling is zorgvuldig samengesteld
              met de hoogste kwaliteit producten.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Intro Images */}
      <section className="w-full px-[5%] lg:px-[12%] py-12">
        <div className="container-spa">
          <div className="grid md:grid-cols-2 gap-8">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium"
            >
              <img
                src="images/massage.jpg"
                alt="Massage behandeling"
                className="w-full h-full object-cover"
              />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium"
            >
              <img
                src="images/facial.jpg"
                alt="Gezichtsbehandeling"
                className="w-full h-full object-cover"
              />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Treatment Categories */}
      <section className="w-full px-[5%] lg:px-[12%] py-32">
        <div className="container-spa">
          {treatmentCategories.map((category, categoryIndex) => (
            <motion.div
              key={category.category}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="mb-20 last:mb-0"
            >
              <div className="text-center mb-12">
                <h2 className="text-3xl sm:text-4xl font-serif mb-4">
                  {category.category}
                </h2>
                <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
                  {category.description}
                </p>
              </div>

              <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
                {category.items.map((item, index) => (
                  <motion.div
                    key={item.name}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.05 }}
                    className="bg-card p-6 rounded-2xl border border-border hover:shadow-soft transition-all duration-300"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <h3 className="font-serif text-xl font-medium">
                        {item.name}
                      </h3>
                      <span className="text-xl font-serif text-primary font-medium">
                        {item.price}
                      </span>
                    </div>
                    <p className="text-muted-foreground mb-4 leading-relaxed">
                      {item.description}
                    </p>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Clock className="w-4 h-4" />
                      <span>{item.duration}</span>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Packages */}
      <section className="bg-muted/50 w-full px-[5%] lg:px-[12%] py-32">
        <div className="container-spa">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              Arrangementen
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
              Spa <span className="text-primary italic">Pakketten</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Kies voor een van onze complete spa arrangementen voor de ultieme
              wellness ervaring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {packages.map((pkg, index) => (
              <motion.div
                key={pkg.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className={`relative bg-card p-8 rounded-2xl border ${
                  pkg.popular ? "border-primary shadow-medium" : "border-border"
                }`}
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-medium flex items-center gap-1">
                      <Star className="w-4 h-4 fill-current" /> Populair
                    </span>
                  </div>
                )}
                <div className="text-center mb-6">
                  <h3 className="font-serif text-2xl mb-2">{pkg.name}</h3>
                  <p className="text-muted-foreground text-sm mb-4">
                    {pkg.duration}
                  </p>
                  <p className="text-4xl font-serif text-primary">
                    {pkg.price}
                  </p>
                </div>
                <p className="text-muted-foreground text-center mb-6 leading-relaxed">
                  {pkg.description}
                </p>
                <ul className="space-y-3 mb-8">
                  {pkg.includes.map((item) => (
                    <li key={item} className="flex items-center gap-3">
                      <div className="w-2 h-2 rounded-full bg-primary" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <Button
                  variant={pkg.popular ? "spa" : "spa-outline"}
                  size="lg"
                  className="w-full"
                  asChild
                >
                  <Link href="/contact">Reserveer</Link>
                </Button>
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
              Vragen over onze{" "}
              <span className="text-primary italic">Behandelingen</span>?
            </h2>
            <p className="text-muted-foreground text-lg mb-8">
              Neem gerust contact met ons op. Wij helpen u graag bij het kiezen
              van de perfecte behandeling voor uw wensen.
            </p>
            <Button variant="spa" size="xl" asChild>
              <Link href="/contact">Neem Contact Op</Link>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
