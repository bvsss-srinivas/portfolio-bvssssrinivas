import RevealOnScroll from "./RevealOnScroll";
import { Wrench, BookOpen, Users, Lightbulb } from "lucide-react";
import { motion } from "framer-motion";

const highlights = [
  {
    icon: Wrench,
    title: "Problem Solver",
    description: "I love breaking down complex problems into clean, efficient solutions.",
  },
  {
    icon: BookOpen,
    title: "Continuous Learner",
    description: "Always exploring new technologies, frameworks, and best practices.",
  },
  {
    icon: Users,
    title: "Team Player",
    description: "Experienced in collaborative development and agile methodologies.",
  },
  {
    icon: Lightbulb,
    title: "Creative Thinker",
    description: "Bringing innovative approaches to software architecture and design.",
  },
];

const WhatIDoSection = () => (
  <section className="py-20 px-6">
    <RevealOnScroll>
      <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display text-center mb-4">
        What I Do
      </h2>
      <p className="text-muted-foreground text-center max-w-2xl mx-auto mb-12">
        I build robust backend systems and cloud-native solutions that are scalable, maintainable, and performant.
      </p>
    </RevealOnScroll>
    <div className="container grid sm:grid-cols-2 lg:grid-cols-4 gap-6 max-w-5xl">
      {highlights.map((item, i) => (
        <RevealOnScroll key={item.title} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -8, transition: { duration: 0.2 } }}
            className="glass-card p-7 text-center group cursor-default h-full"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mx-auto mb-5 group-hover:bg-primary/20 transition-colors">
              <item.icon className="w-7 h-7 text-primary" />
            </div>
            <h3 className="text-foreground font-display font-semibold text-lg mb-3">
              {item.title}
            </h3>
            <p className="text-muted-foreground text-sm leading-relaxed">
              {item.description}
            </p>
          </motion.div>
        </RevealOnScroll>
      ))}
    </div>
  </section>
);

export default WhatIDoSection;
