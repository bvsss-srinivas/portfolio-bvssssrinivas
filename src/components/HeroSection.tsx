import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { Download, ArrowDown, Eye } from "lucide-react";
import profileImg from "@/assets/profile.jpg";
import ResumePreviewModal from "./ResumePreviewModal";

const roles = [
  "Aspiring Software Engineer",
  "Cloud Computing Enthusiast",
  "Backend Developer",
  "Problem Solver",
];

const HeroSection = () => {
  const [text, setText] = useState("");
  const [roleIndex, setRoleIndex] = useState(0);
  const [charIndex, setCharIndex] = useState(0);
  const [isDeleting, setIsDeleting] = useState(false);
  const [resumeOpen, setResumeOpen] = useState(false);

  useEffect(() => {
    const current = roles[roleIndex];
    const speed = isDeleting ? 40 : 80;

    if (!isDeleting && charIndex === current.length) {
      setTimeout(() => setIsDeleting(true), 1800);
      return;
    }
    if (isDeleting && charIndex === 0) {
      setIsDeleting(false);
      setRoleIndex((prev) => (prev + 1) % roles.length);
      return;
    }

    const timeout = setTimeout(() => {
      setCharIndex((prev) => prev + (isDeleting ? -1 : 1));
      setText(current.substring(0, charIndex + (isDeleting ? -1 : 1)));
    }, speed);

    return () => clearTimeout(timeout);
  }, [charIndex, isDeleting, roleIndex]);

  return (
    <section id="home" className="min-h-screen flex items-center justify-center px-6 pt-20 relative">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, ease: "easeOut" }}
        className="text-center max-w-4xl relative z-10"
      >
        {/* Profile Image */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.2, duration: 0.6, type: "spring" }}
          className="mb-6 flex justify-center"
        >
          <div className="relative group">
            <div className="absolute -inset-1 rounded-full bg-gradient-primary opacity-60 blur-md group-hover:opacity-100 transition-opacity duration-500 animate-pulse" />
            <img
              src={profileImg}
              alt="BVSSS Srinivas"
              className="relative w-32 h-32 md:w-40 md:h-40 rounded-full object-cover border-4 border-primary/30 shadow-lg"
            />
          </div>
        </motion.div>

        {/* Decorative badge */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.3, duration: 0.5 }}
          className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass-card text-sm text-muted-foreground mb-8"
        >
          <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
          Open to Opportunities
        </motion.div>

        <p className="text-primary font-medium tracking-[3px] uppercase text-sm mb-4">
          Hello, I'm
        </p>
        <h1 className="font-display text-gradient-hero text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold leading-tight mb-4">
          BVSSS SRINIVAS
        </h1>
        <p className="text-muted-foreground/60 text-sm md:text-base mb-2 font-display">
          Bokka Venkata Satya Sai Subramanya Srinivas
        </p>
        <div className="text-xl sm:text-2xl md:text-3xl text-muted-foreground font-light mb-3 min-h-[48px] font-display">
          <span>{text}</span>
          <span className="inline-block w-[3px] h-[1em] bg-primary ml-1 animate-cursor-blink align-middle" />
        </div>
        <p className="text-muted-foreground text-lg mb-10">
          Cloud & Backend Enthusiast
        </p>
        <div className="flex flex-wrap gap-4 justify-center">
          <a
            href="#projects"
            className="px-8 py-3.5 rounded-lg font-medium bg-gradient-primary text-primary-foreground glow-primary transition-all hover:-translate-y-1 hover:shadow-lg"
          >
            View Projects
          </a>
          <button
            onClick={() => setResumeOpen(true)}
            className="px-8 py-3.5 rounded-lg font-medium border border-foreground/20 text-foreground hover:bg-foreground/5 transition-all hover:-translate-y-1 inline-flex items-center gap-2"
          >
            <Eye size={16} /> Preview Resume
          </button>
          <a
            href="/resume.pdf"
            className="px-8 py-3.5 rounded-lg font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-all hover:-translate-y-1 inline-flex items-center gap-2"
            download="BVSSS_Srinivas_Resume.pdf"
          >
            <Download size={16} /> Download
          </a>
          <a
            href="#contact"
            className="px-8 py-3.5 rounded-lg font-medium border border-primary/30 text-primary hover:bg-primary/10 transition-all hover:-translate-y-1"
          >
            Contact Me
          </a>
        </div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.a
        href="#about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.5 }}
        className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-muted-foreground/50 hover:text-primary transition-colors z-10"
      >
        <span className="text-xs tracking-widest uppercase">Scroll</span>
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 1.5, repeat: Infinity }}
        >
          <ArrowDown size={16} />
        </motion.div>
      </motion.a>

      <ResumePreviewModal open={resumeOpen} onOpenChange={setResumeOpen} />
    </section>
  );
};

export default HeroSection;
