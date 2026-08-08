import { motion } from "framer-motion";
import { Brain, Users, Clock, MessageSquare } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const softSkills = [
  {
    icon: Brain,
    title: "Problem Solving",
    description: "Breaking down complex challenges into structured, efficient solutions.",
  },
  {
    icon: Users,
    title: "Team Collaboration",
    description: "Working effectively in diverse teams using agile methodologies.",
  },
  {
    icon: Clock,
    title: "Time Management",
    description: "Prioritizing tasks and meeting deadlines with consistent delivery.",
  },
  {
    icon: MessageSquare,
    title: "Communication",
    description: "Clear technical and interpersonal communication across all levels.",
  },
];

const SoftSkillsSection = () => (
  <section className="py-20 px-6">
    <RevealOnScroll>
      <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display text-center mb-4">
        Soft Skills
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Beyond code — the interpersonal skills that drive impactful collaboration
      </p>
    </RevealOnScroll>
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
      {softSkills.map((skill, i) => (
        <RevealOnScroll key={skill.title} delay={i * 0.1}>
          <motion.div
            whileHover={{ y: -6, scale: 1.03, transition: { duration: 0.2 } }}
            className="glass-card p-6 text-center group cursor-default h-full"
          >
            <div className="w-14 h-14 rounded-full bg-accent/10 flex items-center justify-center mx-auto mb-4 group-hover:bg-accent/20 transition-colors">
              <skill.icon className="w-7 h-7 text-accent" />
            </div>
            <h3 className="text-foreground font-display font-semibold text-sm mb-2">
              {skill.title}
            </h3>
            <p className="text-muted-foreground text-xs leading-relaxed">
              {skill.description}
            </p>
          </motion.div>
        </RevealOnScroll>
      ))}
    </div>
  </section>
);

export default SoftSkillsSection;
