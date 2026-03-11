import { GraduationCap } from "lucide-react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const coursework = [
  "Database Management Systems",
  "Operating Systems",
  "Artificial Intelligence",
  "Machine Learning",
];

const EducationSection = () => (
  <section id="education" className="py-24 px-6">
    <RevealOnScroll>
      <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display text-center mb-12">
        Education
      </h2>
    </RevealOnScroll>
    <div className="container max-w-2xl">
      <RevealOnScroll>
        <div className="relative pl-8 border-l-2 border-primary/30">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-8 shadow-[0_0_12px_hsl(217_91%_60%/0.5)]" />
          <motion.div
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground text-xl font-display font-semibold mb-1">
                  Intermediate (MPC)
                </h3>
                <p className="text-primary font-medium">
                  Sri Chaitanya Junior College
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-muted-foreground text-sm">
                2021 – 2023
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                93%
              </span>
            </div>
            <p className="text-muted-foreground text-sm">
              Completed Intermediate education with a focus on Mathematics, Physics, and Chemistry.
            </p>
          </motion.div>
        </div>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="relative pl-8 border-l-2 border-primary/30 mt-8">
          <div className="absolute w-4 h-4 bg-primary rounded-full -left-[9px] top-8 shadow-[0_0_12px_hsl(217_91%_60%/0.5)]" />
          <motion.div
            whileHover={{ x: 4, transition: { duration: 0.2 } }}
            className="glass-card p-8"
          >
            <div className="flex items-start gap-4 mb-4">
              <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center shrink-0">
                <GraduationCap className="w-6 h-6 text-primary" />
              </div>
              <div>
                <h3 className="text-foreground text-xl font-display font-semibold mb-1">
                  B.Tech in Computer Science
                </h3>
                <p className="text-primary font-medium">
                  Koneru Lakshmaiah Education Foundation (KL University)
                </p>
              </div>
            </div>
            <div className="flex flex-wrap items-center gap-3 mb-4">
              <span className="text-muted-foreground text-sm">
                Sept 2023 – May 2027
              </span>
              <span className="px-3 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium border border-primary/20">
                CGPA: 9.1/10
              </span>
            </div>
            <p className="text-muted-foreground text-sm mb-4">
              Focusing on Core Computer Science subjects, Cloud Technologies, and Backend Architecture.
            </p>
            <div>
              <p className="text-foreground text-xs font-medium mb-2 uppercase tracking-wider">
                Relevant Coursework
              </p>
              <div className="flex flex-wrap gap-2">
                {coursework.map((c) => (
                  <span
                    key={c}
                    className="text-xs px-3 py-1 rounded-full bg-secondary text-muted-foreground border border-border"
                  >
                    {c}
                  </span>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

export default EducationSection;
