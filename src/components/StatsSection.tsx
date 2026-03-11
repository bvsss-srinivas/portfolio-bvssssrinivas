import { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";
import { Code, Cloud, Layers, Trophy, Award } from "lucide-react";

interface Stat {
  icon: React.ElementType;
  value: number;
  suffix: string;
  label: string;
}

const stats: Stat[] = [
  { icon: Code, value: 4, suffix: "+", label: "Projects Completed" },
  { icon: Layers, value: 8, suffix: "+", label: "Technologies" },
  { icon: Award, value: 2, suffix: "", label: "Global Certifications" },
  { icon: Trophy, value: 9.1, suffix: "", label: "CGPA" },
];

const Counter = ({ target, suffix }: { target: number; suffix: string }) => {
  const [count, setCount] = useState(0);
  const ref = useRef<HTMLSpanElement>(null);
  const started = useRef(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const isDecimal = target % 1 !== 0;
          const duration = 1500;
          const steps = 40;
          const increment = target / steps;
          let current = 0;
          const timer = setInterval(() => {
            current += increment;
            if (current >= target) {
              setCount(target);
              clearInterval(timer);
            } else {
              setCount(isDecimal ? Math.round(current * 10) / 10 : Math.floor(current));
            }
          }, duration / steps);
        }
      },
      { threshold: 0.5 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, [target]);

  return (
    <span ref={ref} className="text-4xl md:text-5xl font-bold font-display text-gradient">
      {count}{suffix}
    </span>
  );
};

const StatsSection = () => (
  <section className="py-20 px-6">
    <div className="container grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl">
      {stats.map((stat, i) => (
        <RevealOnScroll key={stat.label} delay={i * 0.1}>
          <motion.div
            whileHover={{ scale: 1.05 }}
            className="glass-card p-6 text-center flex flex-col items-center gap-3"
          >
            <stat.icon className="w-8 h-8 text-primary" />
            <Counter target={stat.value} suffix={stat.suffix} />
            <span className="text-muted-foreground text-sm">{stat.label}</span>
          </motion.div>
        </RevealOnScroll>
      ))}
    </div>
  </section>
);

export default StatsSection;
