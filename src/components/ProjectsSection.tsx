import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Github, Eye } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";
import ProjectDemoModal from "./ProjectDemoModal";

interface Project {
  title: string;
  description: string;
  tech: string[];
  category: string[];
  github: string;
  highlights: string[];
}

const projects: Project[] = [
  {
    title: "Hospital Management System",
    description:
      "A comprehensive system to manage patient records, appointments, billing, and staff operations with a modern UI.",
    tech: ["React", "TypeScript", "HTML", "CSS"],
    category: ["react", "frontend"],
    github: "#",
    highlights: [
      "Patient record management",
      "Appointment scheduling",
      "Billing & invoicing",
      "Staff operations dashboard",
    ],
  },
  {
    title: "Event Management System",
    description:
      "A web application to manage events, track registrations, and handle ticketing seamlessly.",
    tech: ["Django", "Python", "HTML/CSS"],
    category: ["python"],
    github: "#",
    highlights: [
      "Event creation & management",
      "Registration tracking",
      "Automated ticketing",
    ],
  },
  {
    title: "Bus Reservation System",
    description:
      "A comprehensive system designed for booking bus tickets, managing routes, and scheduling.",
    tech: ["Spring Boot", "Java", "MySQL"],
    category: ["java"],
    github: "#",
    highlights: [
      "Ticket booking engine",
      "Route management",
      "Schedule optimization",
    ],
  },
  {
    title: "Chatbot Backend",
    description:
      "An intelligent backend service for processing natural language queries and generating responses.",
    tech: ["Java", "Python", "NLP"],
    category: ["java", "python"],
    github: "#",
    highlights: [
      "NLP query processing",
      "Response generation",
      "Multi-language support",
    ],
  },
];

const filters = [
  { label: "All", value: "all" },
  { label: "React", value: "react" },
  { label: "Java / Spring Boot", value: "java" },
  { label: "Python / Django", value: "python" },
];

const ProjectsSection = () => {
  const [active, setActive] = useState("all");
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);
  const [demoProject, setDemoProject] = useState<Project | null>(null);

  const filtered =
    active === "all"
      ? projects
      : projects.filter((p) => p.category.includes(active));

  return (
    <section id="projects" className="py-24 px-6">
      <RevealOnScroll>
        <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display text-center mb-4">
          Projects
        </h2>
        <p className="text-muted-foreground text-center max-w-xl mx-auto mb-8">
          Real-world applications built with modern technologies
        </p>
      </RevealOnScroll>

      <RevealOnScroll>
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {filters.map((f) => (
            <button
              key={f.value}
              onClick={() => setActive(f.value)}
              className={`px-5 py-2 rounded-full text-sm font-medium transition-all border ${
                active === f.value
                  ? "bg-primary/20 text-primary border-primary/40"
                  : "border-border text-muted-foreground hover:text-foreground hover:border-foreground/20"
              }`}
            >
              {f.label}
            </button>
          ))}
        </div>
      </RevealOnScroll>

      <div className="container grid md:grid-cols-2 gap-6 max-w-5xl">
        <AnimatePresence mode="popLayout">
          {filtered.map((project, index) => (
            <motion.div
              key={project.title}
              layout
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              exit={{ opacity: 0, scale: 0.95 }}
              transition={{ duration: 0.3 }}
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
              className="glass-card p-7 flex flex-col hover:-translate-y-2 transition-all duration-300 relative overflow-hidden group"
            >
              {/* Hover glow effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

              <div className="relative z-10">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-foreground text-xl font-display font-semibold">
                    {project.title}
                  </h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setDemoProject(project)}
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                      title="View Demo"
                    >
                      <Eye size={18} />
                    </button>
                    <a
                      href={project.github}
                      className="text-muted-foreground hover:text-primary transition-colors p-1"
                    >
                      <Github size={18} />
                    </a>
                  </div>
                </div>
                <p className="text-muted-foreground text-sm mb-4">
                  {project.description}
                </p>

                {/* Highlights */}
                <AnimatePresence>
                  {hoveredIndex === index && (
                    <motion.ul
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      className="mb-4 space-y-1 overflow-hidden"
                    >
                      {project.highlights.map((h) => (
                        <li
                          key={h}
                          className="text-xs text-muted-foreground flex items-center gap-2"
                        >
                          <span className="w-1.5 h-1.5 rounded-full bg-primary/60" />
                          {h}
                        </li>
                      ))}
                    </motion.ul>
                  )}
                </AnimatePresence>

                <div className="flex items-center justify-between mt-auto">
                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t) => (
                      <span
                        key={t}
                        className="text-xs px-3 py-1 rounded-full bg-primary/10 text-primary border border-primary/20"
                      >
                        {t}
                      </span>
                    ))}
                  </div>
                  <button
                    onClick={() => setDemoProject(project)}
                    className="text-xs px-3 py-1.5 rounded-lg bg-gradient-primary text-primary-foreground font-medium hover:-translate-y-0.5 transition-transform opacity-0 group-hover:opacity-100"
                  >
                    View Demo
                  </button>
                </div>
              </div>
            </motion.div>
          ))}
        </AnimatePresence>
      </div>

      <ProjectDemoModal
        open={!!demoProject}
        onOpenChange={(v) => !v && setDemoProject(null)}
        project={demoProject}
      />
    </section>
  );
};

export default ProjectsSection;
