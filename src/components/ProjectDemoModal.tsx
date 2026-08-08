import { useState } from "react";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Github, ExternalLink, Monitor, Layers, Zap } from "lucide-react";

import hospitalImg from "@/assets/projects/hospital-management.jpg";
import eventImg from "@/assets/projects/event-management.jpg";
import busImg from "@/assets/projects/bus-reservation.jpg";
import chatbotImg from "@/assets/projects/chatbot-backend.jpg";

const projectScreenshots: Record<string, string[]> = {
  "Hospital Management System": [hospitalImg],
  "Event Management System": [eventImg],
  "Bus Reservation System": [busImg],
  "Chatbot Backend": [chatbotImg],
};

const projectDetails: Record<string, { architecture: string; features: string[]; challenges: string[] }> = {
  "Hospital Management System": {
    architecture: "React frontend with TypeScript, component-based architecture with reusable UI modules and state management.",
    features: [
      "Role-based access for doctors, nurses & admins",
      "Real-time appointment scheduling with conflict detection",
      "Automated billing with invoice generation",
      "Patient history tracking with search & filter",
    ],
    challenges: [
      "Optimized rendering for large patient datasets",
      "Complex form validation for medical records",
      "Responsive design across all device sizes",
    ],
  },
  "Event Management System": {
    architecture: "Django MVT pattern with Python backend, PostgreSQL database, and server-rendered templates.",
    features: [
      "Dynamic event creation with rich text descriptions",
      "QR code-based ticket verification",
      "Real-time registration count updates",
      "Email notifications for event reminders",
    ],
    challenges: [
      "Handling concurrent registrations without overselling",
      "PDF ticket generation with unique QR codes",
      "Django ORM optimization for complex queries",
    ],
  },
  "Bus Reservation System": {
    architecture: "Spring Boot REST API with Java, MySQL database, and MVC architecture.",
    features: [
      "Interactive seat selection with real-time availability",
      "Multi-stop route management",
      "Dynamic pricing based on demand",
      "Booking history & cancellation support",
    ],
    challenges: [
      "Concurrency control for seat bookings",
      "Efficient route-finding algorithms",
      "Transaction management with rollback support",
    ],
  },
  "Chatbot Backend": {
    architecture: "Hybrid Java-Python backend with NLP pipeline, REST API layer, and modular response engine.",
    features: [
      "Intent classification with NLP models",
      "Context-aware conversation management",
      "Multi-language query processing",
      "Analytics dashboard for conversation insights",
    ],
    challenges: [
      "Low-latency response generation",
      "Training data pipeline automation",
      "Graceful fallback for unrecognized queries",
    ],
  },
};

interface Props {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  project: {
    title: string;
    description: string;
    tech: string[];
    github: string;
    highlights: string[];
  } | null;
}

const ProjectDemoModal = ({ open, onOpenChange, project }: Props) => {
  const [activeTab, setActiveTab] = useState<"demo" | "features" | "architecture">("demo");
  const [imgIndex, setImgIndex] = useState(0);

  if (!project) return null;

  const screenshots = projectScreenshots[project.title] || [];
  const details = projectDetails[project.title];

  const tabs = [
    { id: "demo" as const, label: "Demo", icon: Monitor },
    { id: "features" as const, label: "Features", icon: Zap },
    { id: "architecture" as const, label: "Architecture", icon: Layers },
  ];

  return (
    <Dialog open={open} onOpenChange={(v) => { onOpenChange(v); setActiveTab("demo"); setImgIndex(0); }}>
      <DialogContent className="max-w-4xl w-[95vw] max-h-[90vh] p-0 glass-card border-border overflow-hidden">
        <DialogHeader className="px-6 pt-5 pb-0">
          <DialogTitle className="text-foreground font-display text-xl flex items-center gap-3">
            {project.title}
            <a href={project.github} className="text-muted-foreground hover:text-primary transition-colors">
              <Github size={18} />
            </a>
          </DialogTitle>
          <p className="text-muted-foreground text-sm mt-1">{project.description}</p>
        </DialogHeader>

        {/* Tabs */}
        <div className="flex gap-1 px-6 pt-4">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-medium transition-all ${
                activeTab === tab.id
                  ? "bg-primary/20 text-primary"
                  : "text-muted-foreground hover:text-foreground hover:bg-secondary/50"
              }`}
            >
              <tab.icon size={14} />
              {tab.label}
            </button>
          ))}
        </div>

        {/* Tab Content */}
        <div className="px-6 pb-6 pt-3 overflow-y-auto max-h-[60vh]">
          <AnimatePresence mode="wait">
            {activeTab === "demo" && (
              <motion.div key="demo" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                {/* Screenshot carousel */}
                <div className="relative rounded-lg overflow-hidden border border-border bg-secondary/30">
                  <img
                    src={screenshots[imgIndex]}
                    alt={`${project.title} screenshot ${imgIndex + 1}`}
                    className="w-full h-auto object-cover"
                  />
                  {screenshots.length > 1 && (
                    <>
                      <button
                        onClick={() => setImgIndex((i) => (i - 1 + screenshots.length) % screenshots.length)}
                        className="absolute left-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
                      >
                        <ChevronLeft size={16} />
                      </button>
                      <button
                        onClick={() => setImgIndex((i) => (i + 1) % screenshots.length)}
                        className="absolute right-3 top-1/2 -translate-y-1/2 w-8 h-8 rounded-full bg-background/80 backdrop-blur flex items-center justify-center text-foreground hover:bg-background transition-colors"
                      >
                        <ChevronRight size={16} />
                      </button>
                      <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex gap-1.5">
                        {screenshots.map((_, i) => (
                          <button
                            key={i}
                            onClick={() => setImgIndex(i)}
                            className={`w-2 h-2 rounded-full transition-all ${i === imgIndex ? "bg-primary w-4" : "bg-foreground/30"}`}
                          />
                        ))}
                      </div>
                    </>
                  )}
                </div>

                {/* Tech stack */}
                <div className="flex flex-wrap gap-2 mt-4">
                  {project.tech.map((t) => (
                    <span key={t} className="text-xs px-3 py-1.5 rounded-full bg-primary/10 text-primary border border-primary/20 font-medium">
                      {t}
                    </span>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === "features" && details && (
              <motion.div key="features" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <h4 className="text-foreground font-display font-semibold mb-3 flex items-center gap-2">
                  <Zap size={16} className="text-primary" /> Key Features
                </h4>
                <div className="grid sm:grid-cols-2 gap-3 mb-6">
                  {details.features.map((f, i) => (
                    <motion.div
                      key={f}
                      initial={{ opacity: 0, x: -10 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                      className="flex items-start gap-3 p-3 rounded-lg bg-secondary/30 border border-border"
                    >
                      <span className="w-6 h-6 rounded-full bg-primary/20 text-primary text-xs flex items-center justify-center font-bold mt-0.5 shrink-0">
                        {i + 1}
                      </span>
                      <span className="text-sm text-foreground">{f}</span>
                    </motion.div>
                  ))}
                </div>

                <h4 className="text-foreground font-display font-semibold mb-3">Challenges Solved</h4>
                <ul className="space-y-2">
                  {details.challenges.map((c) => (
                    <li key={c} className="text-sm text-muted-foreground flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-accent shrink-0" />
                      {c}
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}

            {activeTab === "architecture" && details && (
              <motion.div key="architecture" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} transition={{ duration: 0.2 }}>
                <h4 className="text-foreground font-display font-semibold mb-3 flex items-center gap-2">
                  <Layers size={16} className="text-primary" /> System Architecture
                </h4>
                <div className="p-4 rounded-lg bg-secondary/30 border border-border mb-5">
                  <p className="text-sm text-foreground leading-relaxed">{details.architecture}</p>
                </div>

                <h4 className="text-foreground font-display font-semibold mb-3">Tech Stack Breakdown</h4>
                <div className="grid sm:grid-cols-2 gap-3">
                  {project.tech.map((t, i) => (
                    <motion.div
                      key={t}
                      initial={{ opacity: 0, scale: 0.95 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: i * 0.1 }}
                      className="p-3 rounded-lg border border-primary/20 bg-primary/5 text-center"
                    >
                      <span className="text-primary font-display font-semibold text-sm">{t}</span>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </DialogContent>
    </Dialog>
  );
};

export default ProjectDemoModal;
