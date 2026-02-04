"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Heart, Shield, Sparkles, Users, Award, Leaf } from "lucide-react";
import Link from "next/link";

const values = [
  {
    icon: Shield,
    title: "100% Privé",
    description:
      "Uw privacy staat bij ons voorop. Onze spa is volledig afgeschermd en biedt u een veilige, intieme omgeving waar u zich volledig kunt ontspannen zonder zorgen.",
  },
  {
    icon: Heart,
    title: "Exclusief voor Dames",
    description:
      "Lady Spa Kalyaan is speciaal ontworpen voor vrouwen. Een plek waar u zich op uw gemak voelt, omringd door gelijkgestemde vrouwen die ook op zoek zijn naar rust.",
  },
  {
    icon: Sparkles,
    title: "Luxe Behandelingen",
    description:
      "Wij werken uitsluitend met hoogwaardige producten en ervaren therapeuten om u de beste behandelingen te bieden die de wellness industrie te bieden heeft.",
  },
  {
    icon: Users,
    title: "Persoonlijke Aandacht",
    description:
      "Elk bezoek aan onze spa is uniek. Onze therapeuten nemen de tijd om uw wensen te begrijpen en een op maat gemaakte ervaring te creëren.",
  },
  {
    icon: Award,
    title: "Ervaren Team",
    description:
      "Ons team bestaat uit gediplomeerde therapeuten met jarenlange ervaring in de wellness en beauty industrie.",
  },
  {
    icon: Leaf,
    title: "Natuurlijke Producten",
    description:
      "Wij geloven in de kracht van de natuur en gebruiken waar mogelijk biologische en natuurlijke ingrediënten in onze behandelingen.",
  },
];

const team = [
  {
    name: "Priya Sharma",
    role: "Oprichtster & Hoofd Therapeut",
    description:
      "Met meer dan 15 jaar ervaring in de wellness industrie richtte Priya Lady Spa Kalyaan op om vrouwen een unieke, luxueuze wellness ervaring te bieden.",
  },
  {
    name: "Lisa van den Berg",
    role: "Massage Therapeut",
    description:
      "Lisa is gespecialiseerd in holistische en deep tissue massage. Haar intuïtieve aanpak zorgt voor diepe ontspanning.",
  },
  {
    name: "Fatima El Amrani",
    role: "Beauty Specialist",
    description:
      "Fatima brengt haar expertise in gezichtsbehandelingen en huidverzorging om elke gast een stralende huid te geven.",
  },
];

const milestones = [
  {
    year: "2018",
    title: "De Droom Begint",
    description: "Lady Spa Kalyaan opent haar deuren in Soestduinen",
  },
  {
    year: "2019",
    title: "Uitbreiding Faciliteiten",
    description: "Toevoeging van de Finse sauna en jacuzzi",
  },
  {
    year: "2021",
    title: "Nieuwe Behandelingen",
    description: "Introductie van Ayurvedische behandelingen",
  },
  {
    year: "2023",
    title: "5 Jaar Jubileum",
    description: "Meer dan 5000 tevreden gasten verwelkomd",
  },
];

export default function OverOnsPage() {
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
              Over Ons
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6">
              Uw <span className="text-primary italic">Oase</span> van Rust
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Welkom bij Lady Spa Kalyaan, uw exclusieve privé-wellness in het
              hart van Soestduinen. Wij bieden een unieke ervaring waar u als
              vrouw volledig tot rust kunt komen.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Story Section */}
      <section className="w-full px-[5%] lg:px-[12%] py-32">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif mb-6">
                Ons <span className="text-primary italic">Verhaal</span>
              </h2>
              <div className="space-y-6 text-muted-foreground text-lg leading-relaxed">
                <p>
                  Lady Spa Kalyaan werd geboren uit een passie voor wellness en
                  de overtuiging dat elke vrouw een plek verdient waar zij
                  volledig zichzelf kan zijn. In 2018 openden wij onze deuren in
                  de serene omgeving van Soestduinen.
                </p>
                <p>
                  Het woord "Kalyaan" komt uit het Sanskriet en betekent
                  "welzijn" of "geluk" - precies wat wij u willen bieden. Onze
                  spa is ontworpen als een oase van rust, weg van de hectiek van
                  het dagelijks leven.
                </p>
                <p>
                  Wat ons uniek maakt is onze focus op privacy en exclusiviteit.
                  Als privé-spa voor dames bieden wij een veilige omgeving waar
                  u zich volledig kunt ontspannen, zonder compromissen.
                </p>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
                <img
                  src="images/spa.png"
                  alt="Lady Spa Kalyaan interieur"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values Section */}
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
              Onze <span className="text-primary italic">Waarden</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Alles wat wij doen wordt gedreven door onze kernwaarden, die de
              basis vormen van de Lady Spa Kalyaan ervaring.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <motion.div
                key={value.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-8 rounded-2xl border border-border"
              >
                <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-6">
                  <value.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-serif text-xl font-medium mb-4">
                  {value.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {value.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="w-full px-[5%] lg:px-[12%] py-32">
        <div className="container-spa">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
              Ons <span className="text-primary italic">Team</span>
            </h2>
            <p className="text-muted-foreground text-lg">
              Maak kennis met de gepassioneerde professionals achter Lady Spa
              Kalyaan.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <motion.div
                key={member.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="text-center"
              >
                <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-4xl font-serif text-primary">
                    {member.name.charAt(0)}
                  </span>
                </div>
                <h3 className="font-serif text-xl font-medium mb-2">
                  {member.name}
                </h3>
                <p className="text-primary font-medium text-sm mb-4">
                  {member.role}
                </p>
                <p className="text-muted-foreground leading-relaxed">
                  {member.description}
                </p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Timeline Section */}
      {/* <section className="w-full px-[5%] lg:px-[12%] py-32 bg-muted/50">
        <div className="container-spa">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
              Onze <span className="text-primary italic">Reis</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto">
            {milestones.map((milestone, index) => (
              <motion.div
                key={milestone.year}
                initial={{ opacity: 0, x: index % 2 === 0 ? -20 : 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-6 mb-8 last:mb-0"
              >
                <div className="flex flex-col items-center">
                  <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center">
                    <span className="text-primary font-serif font-medium">
                      {milestone.year}
                    </span>
                  </div>
                  {index < milestones.length - 1 && (
                    <div className="w-0.5 h-full bg-primary/20 my-2" />
                  )}
                </div>
                <div className="pt-3">
                  <h3 className="font-serif text-xl font-medium mb-2">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground">
                    {milestone.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section> */}

      {/* CTA Section */}
      <section className="w-full px-[5%] lg:px-[12%] py-32 bg-muted/50">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="aspect-[4/3] rounded-2xl overflow-hidden shadow-medium"
            >
              <img
                src="images/massage.jpg"
                alt="Ontspanning bij Lady Spa Kalyaan"
                className="w-full h-full object-cover"
              />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl sm:text-4xl font-serif mb-6">
                Ervaar het <span className="text-primary italic">Zelf</span>
              </h2>
              <p className="text-muted-foreground text-lg leading-relaxed mb-8">
                Woorden kunnen de Lady Spa Kalyaan ervaring niet volledig
                beschrijven. Kom langs en ontdek zelf waarom onze gasten steeds
                terugkomen voor meer momenten van pure ontspanning.
              </p>
              <div className="flex flex-wrap gap-4">
                <Button variant="spa" size="xl" asChild>
                  <Link href="/contact">Maak Een Afspraak</Link>
                </Button>
                <Button variant="spa-outline" size="xl" asChild>
                  <Link href="/faciliteiten">Bekijk Faciliteiten</Link>
                </Button>
              </div>
            </motion.div>
          </div>
        </div>
      </section>
    </main>
  );
}
