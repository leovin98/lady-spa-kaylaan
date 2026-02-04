"use client";

import { Button } from "./ui/button";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock } from "lucide-react";

const contactInfo = [
  {
    icon: MapPin,
    label: "Adres",
    value: "Soestduinen, Nederland",
    link: "https://maps.app.goo.gl/VcxMqfkCHXH2X49v7",
  },
  {
    icon: Phone,
    label: "Telefoon",
    value: "+31 6 53 94 85 34",
    link: "tel:+31653948534",
  },
  {
    icon: Mail,
    label: "E-mail",
    value: "info@ladyspakalyaan.nl",
    link: "mailto:info@ladyspakalyaan.nl",
  },
  {
    icon: Clock,
    label: "Openingstijden",
    value: "Ma-Zo: 10:00 - 21:00",
    link: null,
  },
];

export default function Contact() {
  return (
    <section className="w-full px-[5%] lg:px-[12%] py-32">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20">
        {/* Contact Info */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Contact
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono mb-6 leading-tight">
            Maak Een <span className="text-primary italic">Afspraak</span>
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-10">
            Klaar om te genieten van ultieme ontspanning? Neem contact met ons
            op om uw privé wellness ervaring te reserveren. Wij staan voor u
            klaar om al uw vragen te beantwoorden.
          </p>

          <div className="space-y-6">
            {contactInfo.map((item, index) => (
              <motion.div
                key={item.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex items-start gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <item.icon className="w-5 h-5 text-primary" />
                </div>
                <div>
                  <p className="text-sm text-muted-foreground mb-1">
                    {item.label}
                  </p>
                  {item.link ? (
                    <a
                      href={item.link}
                      target="_blank"
                      className="font-medium text-foreground hover:text-primary transition-colors"
                    >
                      {item.value}
                    </a>
                  ) : (
                    <p className="font-medium text-foreground">{item.value}</p>
                  )}
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        {/* Contact Form */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="bg-card rounded-2xl p-8 md:p-10 border border-border shadow-soft"
        >
          <h3 className="text-2xl font-mono mb-6">Reserveer Nu</h3>
          <form className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-4">
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="firstName"
                >
                  Voornaam
                </label>
                <input
                  type="text"
                  id="firstName"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Uw voornaam"
                />
              </div>
              <div>
                <label
                  className="block text-sm font-medium mb-2"
                  htmlFor="lastName"
                >
                  Achternaam
                </label>
                <input
                  type="text"
                  id="lastName"
                  className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                  placeholder="Uw achternaam"
                />
              </div>
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="email">
                E-mailadres
              </label>
              <input
                type="email"
                id="email"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="uw@email.nl"
              />
            </div>

            <div>
              <label className="block text-sm font-medium mb-2" htmlFor="phone">
                Telefoonnummer
              </label>
              <input
                type="tel"
                id="phone"
                className="w-full px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary/20 focus:border-primary transition-all"
                placeholder="+31 6 12345678"
              />
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
                <option value="massage">Massage</option>
                <option value="facial">Gezichtsbehandeling</option>
                <option value="body">Lichaamsverzorging</option>
                <option value="wellness">Wellness Dagje</option>
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
                placeholder="Heeft u speciale wensen of vragen?"
              />
            </div>

            <Button variant="spa" size="lg" asChild>
              <a href="#">Verstuur Reservering</a>
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
}
