import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

interface Skill {
  name: string;
  level: number;
}

const backendSkills: Skill[] = [
  { name: "Python", level: 85 },
  { name: "C", level: 75 },
  { name: "Django", level: 75 },
  { name: "MySQL", level: 80 },
];

const frontendSkills: Skill[] = [
  { name: "JavaScript", level: 75 },
  { name: "HTML & CSS", level: 90 },
  { name: "React", level: 70 },
  { name: "TypeScript", level: 65 },
];

const toolsSkills: Skill[] = [
  { name: "AWS Cloud", level: 65 },
  { name: "Git & GitHub", level: 85 },
  { name: "Docker", level: 55 },
  { name: "DevOps Fundamentals", level: 60 },
];

const SkillBar = ({ name, level }: Skill) => (
  <div className="mb-5">
    <div className="flex justify-between mb-2 text-sm">
      <span className="text-foreground font-medium">{name}</span>
      <span className="text-muted-foreground">{level}%</span>
    </div>
    <div className="w-full h-2 bg-secondary rounded-full overflow-hidden">
      <motion.div
        initial={{ width: 0 }}
        whileInView={{ width: `${level}%` }}
        viewport={{ once: true }}
        transition={{ duration: 1, ease: "easeOut", delay: 0.2 }}
        className="h-full rounded-full bg-gradient-primary"
      />
    </div>
  </div>
);

const SkillsSection = () => (
  <section id="skills" className="py-24 px-6">
    <RevealOnScroll>
      <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display text-center mb-4">
        Technical Skills
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Languages, frameworks, and tools I work with
      </p>
    </RevealOnScroll>
    <div className="container grid md:grid-cols-3 gap-8 max-w-5xl">
      <RevealOnScroll>
        <div className="glass-card p-8 h-full">
          <h3 className="text-foreground text-xl font-display font-semibold mb-6 pb-3 border-b border-border">
            Backend & Languages
          </h3>
          {backendSkills.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.1}>
        <div className="glass-card p-8 h-full">
          <h3 className="text-foreground text-xl font-display font-semibold mb-6 pb-3 border-b border-border">
            Frontend & Web
          </h3>
          {frontendSkills.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </div>
      </RevealOnScroll>
      <RevealOnScroll delay={0.2}>
        <div className="glass-card p-8 h-full">
          <h3 className="text-foreground text-xl font-display font-semibold mb-6 pb-3 border-b border-border">
            Cloud & Tools
          </h3>
          {toolsSkills.map((s) => (
            <SkillBar key={s.name} {...s} />
          ))}
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

export default SkillsSection;
