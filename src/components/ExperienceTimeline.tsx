import { motion } from "framer-motion";
import { Briefcase, Code, Award, BookOpen } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const timeline = [
  {
    icon: BookOpen,
    date: "2023 – 2027",
    title: "B.Tech in Computer Science",
    org: "KL University, Vijayawada",
    description: "Pursuing CSE with a 9.1 CGPA. Active in cloud computing clubs and hackathons.",
    color: "text-blue-400",
    bg: "bg-blue-400/10",
  },
  {
    icon: Award,
    date: "2025",
    title: "AWS Cloud Practitioner Certified",
    org: "Amazon Web Services",
    description: "Earned foundational certification demonstrating cloud fluency and AWS service knowledge.",
    color: "text-amber-400",
    bg: "bg-amber-400/10",
  },
  {
    icon: Code,
    date: "2026",
    title: "Hospital Management System",
    org: "Academic Project",
    description: "Built a full-stack Django application with role-based access, patient management, and real-time dashboards.",
    color: "text-emerald-400",
    bg: "bg-emerald-400/10",
  },
  {
    icon: Briefcase,
    date: "2025",
    title: "Seeking Internship Opportunities",
    org: "Open to Backend / Cloud / Full-Stack Roles",
    description: "Looking to apply skills in Python, Django, AWS, and Docker in a professional environment.",
    color: "text-purple-400",
    bg: "bg-purple-400/10",
  },
];

const ExperienceTimeline = () => (
  <section id="experience" className="py-24 px-6">
    <div className="container max-w-3xl">
      <RevealOnScroll>
        <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display text-center mb-16">
          My Journey
        </h2>
      </RevealOnScroll>

      <div className="relative">
        {/* Vertical line */}
        <div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-border md:-translate-x-px" />

        {timeline.map((item, i) => {
          const Icon = item.icon;
          const isLeft = i % 2 === 0;
          return (
            <RevealOnScroll key={i} delay={i * 0.1}>
              <div
                className={`relative flex items-start gap-6 mb-12 md:mb-16 ${
                  isLeft ? "md:flex-row" : "md:flex-row-reverse"
                }`}
              >
                {/* Icon node */}
                <div className="absolute left-6 md:left-1/2 -translate-x-1/2 z-10">
                  <motion.div
                    whileHover={{ scale: 1.2 }}
                    className={`w-12 h-12 rounded-full ${item.bg} border border-border flex items-center justify-center`}
                  >
                    <Icon size={20} className={item.color} />
                  </motion.div>
                </div>

                {/* Content card */}
                <div
                  className={`ml-20 md:ml-0 md:w-[calc(50%-2rem)] ${
                    isLeft ? "md:pr-8 md:text-right" : "md:pl-8 md:text-left"
                  }`}
                >
                  <span className={`text-xs font-semibold uppercase tracking-wider ${item.color}`}>
                    {item.date}
                  </span>
                  <h3 className="text-foreground font-display font-semibold text-lg mt-1">
                    {item.title}
                  </h3>
                  <p className="text-primary text-sm mb-2">{item.org}</p>
                  <p className="text-muted-foreground text-sm leading-relaxed">
                    {item.description}
                  </p>
                </div>
              </div>
            </RevealOnScroll>
          );
        })}
      </div>
    </div>
  </section>
);

export default ExperienceTimeline;
