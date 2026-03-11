import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const ScrollProgressBar = () => {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const scrollTop = window.scrollY;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(docHeight > 0 ? (scrollTop / docHeight) * 100 : 0);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.div
      className="fixed top-0 left-0 h-[3px] bg-gradient-primary z-[60]"
      style={{ width: `${progress}%` }}
      transition={{ duration: 0.1 }}
    />
  );
};

export default ScrollProgressBar;
