"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Phone,
  Mail,
  Clock,
  Car,
  Train,
  MessageCircle,
} from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adres",
    value: "Amersfoortsestraat 123",
    subValue: "3764 AD Soestduinen",
    link: "https://maps.google.com/?q=Soestduinen",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "+31 6 53 94 85 34",
    subValue: "WhatsApp beschikbaar",
    link: "tel:+31653948534",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@ladyspakalyaan.nl",
    subValue: "Reactie binnen 24 uur",
    link: "mailto:info@ladyspakalyaan.nl",
  },
  {
    icon: Clock,
    label: "Openingstijden",
    value: "Maandag - Zondag",
    subValue: "10:00 - 21:00",
    link: null,
  },
];

const faq = [
  {
    question: "Moet ik van tevoren reserveren?",
    answer:
      "Ja, wij werken uitsluitend op afspraak om uw privacy en persoonlijke aandacht te garanderen. U kunt reserveren via telefoon, e-mail of ons contactformulier.",
  },
  {
    question: "Wat moet ik meenemen?",
    answer:
      "Wij voorzien u van badjas, slippers en handdoeken. U hoeft alleen uzelf en eventueel een badpak mee te nemen voor gebruik van het zwembad.",
  },
  {
    question: "Is de spa alleen toegankelijk voor vrouwen?",
    answer:
      "Ja, Lady Spa Kalyaan is exclusief voor dames. Dit geldt voor alle faciliteiten en behandelingen.",
  },
  {
    question: "Wat zijn de annuleringsvoorwaarden?",
    answer:
      "U kunt kosteloos annuleren tot 24 uur voor uw afspraak. Bij annulering binnen 24 uur brengen wij 50% van de behandelkosten in rekening.",
  },
  {
    question: "Zijn cadeaubonnen beschikbaar?",
    answer:
      "Ja! Onze cadeaubonnen zijn het perfecte cadeau voor elke gelegenheid. Verkrijgbaar in verschillende bedragen of voor specifieke behandelingen.",
  },
];

export default function ContactPage() {
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
              Contact
            </span>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-serif mb-6">
              Maak Een <span className="text-primary italic">Afspraak</span>
            </h1>
            <p className="text-muted-foreground text-lg leading-relaxed">
              Klaar om te genieten van ultieme ontspanning? Neem contact met ons
              op om uw privé wellness ervaring te reserveren. Wij staan voor u
              klaar.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Contact Info & Form */}
      <section className="w-full px-[5%] lg:px-[12%] py-32">
        <div className="container-spa">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
            {/* Contact Info */}
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl font-serif mb-8">Contactgegevens</h2>

              <div className="space-y-6 mb-12">
                {contactInfo.map((item, index) => (
                  <motion.div
                    key={item.label}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                    className="flex items-start gap-4"
                  >
                    <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                      <item.icon className="w-6 h-6 text-primary" />
                    </div>
                    <div>
                      <p className="text-sm text-muted-foreground mb-1">
                        {item.label}
                      </p>
                      {item.link ? (
                        <a
                          href={item.link}
                          className="font-medium text-foreground hover:text-primary transition-colors block"
                        >
                          {item.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">
                          {item.value}
                        </p>
                      )}
                      {item.subValue && (
                        <p className="text-sm text-muted-foreground mt-0.5">
                          {item.subValue}
                        </p>
                      )}
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Directions */}
              {/* <div className="bg-muted/50 rounded-2xl p-8">
                <h3 className="text-xl font-serif mb-6">Bereikbaarheid</h3>
                <div className="space-y-4">
                  <div className="flex items-start gap-4">
                    <Car className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium mb-1">Met de auto</p>
                      <p className="text-muted-foreground text-sm">
                        Gratis parkeren direct voor de deur. Vanaf de A28 neemt
                        u afslag Soest.
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <Train className="w-5 h-5 text-primary mt-1" />
                    <div>
                      <p className="font-medium mb-1">
                        Met het openbaar vervoer
                      </p>
                      <p className="text-muted-foreground text-sm">
                        Station Soest is op 10 minuten rijden. Wij bieden gratis
                        ophaalservice.
                      </p>
                    </div>
                  </div>
                </div>
              </div> */}
            </motion.div>

            {/* Contact Form */}
            <motion.div
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8 }}
              className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-soft"
            >
              <h3 className="text-2xl font-serif mb-6">
                Reserveringsformulier
              </h3>
              <form className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="firstName"
                    >
                      Voornaam *
                    </label>
                    <input
                      type="text"
                      id="firstName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Uw voornaam"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="lastName"
                    >
                      Achternaam *
                    </label>
                    <input
                      type="text"
                      id="lastName"
                      required
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                      placeholder="Uw achternaam"
                    />
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="email"
                  >
                    E-mailadres *
                  </label>
                  <input
                    type="email"
                    id="email"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="uw@email.nl"
                  />
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="phone"
                  >
                    Telefoonnummer *
                  </label>
                  <input
                    type="tel"
                    id="phone"
                    required
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    placeholder="+31 6 12345678"
                  />
                </div>

                <div className="grid sm:grid-cols-2 gap-4">
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="date"
                    >
                      Gewenste datum
                    </label>
                    <input
                      type="date"
                      id="date"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    />
                  </div>
                  <div>
                    <label
                      className="block text-sm font-medium mb-2"
                      htmlFor="time"
                    >
                      Gewenste tijd
                    </label>
                    <select
                      id="time"
                      className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                    >
                      <option value="">Selecteer tijd</option>
                      <option value="10:00">10:00</option>
                      <option value="11:00">11:00</option>
                      <option value="12:00">12:00</option>
                      <option value="13:00">13:00</option>
                      <option value="14:00">14:00</option>
                      <option value="15:00">15:00</option>
                      <option value="16:00">16:00</option>
                      <option value="17:00">17:00</option>
                      <option value="18:00">18:00</option>
                      <option value="19:00">19:00</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="treatment"
                  >
                    Gewenste Behandeling
                  </label>
                  <select
                    id="treatment"
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  >
                    <option value="">Selecteer een behandeling</option>
                    <optgroup label="Massage">
                      <option value="holistic">
                        Holistische Massage - €85
                      </option>
                      <option value="hotstone">Hot Stone Massage - €95</option>
                      <option value="relaxing">
                        Ontspanningsmassage - €65
                      </option>
                      <option value="aroma">Aromatherapie Massage - €90</option>
                    </optgroup>
                    <optgroup label="Gezichtsbehandeling">
                      <option value="luxe-facial">
                        Luxe Facial Treatment - €95
                      </option>
                      <option value="anti-aging">
                        Anti-Aging Behandeling - €115
                      </option>
                      <option value="hydrating">
                        Hydraterende Behandeling - €75
                      </option>
                    </optgroup>
                    <optgroup label="Arrangementen">
                      <option value="half-day">Half Day Retreat - €175</option>
                      <option value="full-day">Full Day Spa - €295</option>
                      <option value="duo">Duo Wellness - €320</option>
                    </optgroup>
                  </select>
                </div>

                <div>
                  <label
                    className="block text-sm font-medium mb-2"
                    htmlFor="message"
                  >
                    Bericht (optioneel)
                  </label>
                  <textarea
                    id="message"
                    rows={4}
                    className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all resize-none"
                    placeholder="Heeft u speciale wensen of vragen? Laat het ons weten."
                  />
                </div>

                <Button variant="spa" size="xl" className="w-full">
                  Verstuur Reservering
                </Button>

                <p className="text-xs text-muted-foreground text-center">
                  Door dit formulier te versturen gaat u akkoord met onze
                  privacyvoorwaarden.
                </p>
              </form>
            </motion.div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="w-full px-[5%] lg:px-[12%] py-32 bg-muted/50">
        <div className="container-spa">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-2xl mx-auto mb-16"
          >
            <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
              FAQ
            </span>
            <h2 className="text-3xl sm:text-4xl font-serif mb-6">
              Veelgestelde <span className="text-primary italic">Vragen</span>
            </h2>
          </motion.div>

          <div className="max-w-3xl mx-auto space-y-6">
            {faq.map((item, index) => (
              <motion.div
                key={item.question}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="bg-card p-6 rounded-xl border border-border"
              >
                <div className="flex items-start gap-4">
                  <MessageCircle className="w-5 h-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h3 className="font-medium text-lg mb-2">
                      {item.question}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {item.answer}
                    </p>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="text-center mt-12"
          >
            <p className="text-muted-foreground mb-4">
              Heeft u een andere vraag?
            </p>
            <Button variant="spa-outline" size="lg" asChild>
              <a href="mailto:info@ladyspakalyaan.nl">Stuur Ons Een E-mail</a>
            </Button>
          </motion.div>
        </div>
      </section>
    </main>
  );
}
