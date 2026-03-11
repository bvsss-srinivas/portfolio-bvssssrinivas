import { Heart, Linkedin, Github, Mail } from "lucide-react";

const Footer = () => (
  <footer className="py-10 border-t border-border bg-background/50">
    <div className="container max-w-5xl">
      <div className="flex flex-col md:flex-row items-center justify-between gap-6">
        <div>
          <a href="#home" className="font-display text-xl font-bold text-foreground">
            BS<span className="text-primary">.</span>
          </a>
          <p className="text-muted-foreground text-sm mt-1">
            Backend Developer & Cloud Enthusiast
          </p>
        </div>
        <div className="flex items-center gap-4">
          <a
            href="https://www.linkedin.com/in/bvssssrinivas/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Linkedin size={16} />
          </a>
          <a
            href="https://github.com/bvsss-srinivas"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Github size={16} />
          </a>
          <a
            href="mailto:bvssssrinivas05@gmail.com"
            className="w-10 h-10 rounded-full glass-card flex items-center justify-center text-muted-foreground hover:text-primary transition-colors"
          >
            <Mail size={16} />
          </a>
        </div>
        <nav className="flex flex-wrap gap-6 text-sm text-muted-foreground">
          <a href="#about" className="hover:text-foreground transition-colors">About</a>
          <a href="#skills" className="hover:text-foreground transition-colors">Skills</a>
          <a href="#projects" className="hover:text-foreground transition-colors">Projects</a>
          <a href="#contact" className="hover:text-foreground transition-colors">Contact</a>
        </nav>
      </div>
      <div className="mt-8 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-4 text-muted-foreground text-xs">
        <p>&copy; {new Date().getFullYear()} BVSSS Srinivas. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

export default Footer;
