"use client";

import { motion } from "framer-motion";
import { Heart, Shield, Sparkles } from "lucide-react";

const features = [
  {
    icon: Shield,
    title: "100% Privé",
    description: "Geniet van volledige privacy tijdens uw wellness ervaring.",
  },
  {
    icon: Heart,
    title: "Exclusief voor Dames",
    description: "Een veilige en ontspannen omgeving speciaal voor vrouwen.",
  },
  {
    icon: Sparkles,
    title: "Luxe Behandelingen",
    description: "Premium beauty en wellness behandelingen door experts.",
  },
];

export default function About() {
  return (
    <section className="w-full px-[5%] lg:px-[12%] py-32 bg-muted/50">
      <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image */}
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="relative"
        >
          <div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-medium">
            <img
              src="/images/massage.jpg"
              alt="Luxe massage behandeling bij Lady Spa Kalyaan"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 w-32 h-32 bg-primary/20 rounded-full blur-2xl" />
        </motion.div>

        {/* Content */}
        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-primary font-medium text-sm uppercase tracking-wider mb-4 block">
            Over Ons
          </span>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-mono mb-6 leading-tight">
            Uw <span className="text-primary italic">Oase</span> van Rust
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed mb-8">
            Welkom bij Lady Spa Kalyaan, uw exclusieve privé-wellness in
            Soestduinen. Wij bieden een unieke ervaring waar u als vrouw
            volledig tot rust kunt komen. Onze spa is speciaal ontworpen om u te
            laten ontsnappen aan de dagelijkse drukte en te genieten van ultieme
            ontspanning.
          </p>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div
                key={feature.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <feature.icon className="w-6 h-6 text-primary" />
                </div>
                <div>
                  <h3 className="font-mono text-lg font-medium mb-1">
                    {feature.title}
                  </h3>
                  <p className="text-muted-foreground">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
