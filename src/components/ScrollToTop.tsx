import { useState, useEffect } from "react";
import { ChevronUp } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";

const ScrollToTop = () => {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const onScroll = () => setShow(window.scrollY > 300);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <AnimatePresence>
      {show && (
        <motion.a
          href="#home"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: 20 }}
          className="fixed bottom-8 right-8 w-12 h-12 rounded-full bg-primary text-primary-foreground flex items-center justify-center glow-primary z-50 hover:-translate-y-1 transition-transform"
        >
          <ChevronUp size={20} />
        </motion.a>
      )}
    </AnimatePresence>
  );
};

export default ScrollToTop;
