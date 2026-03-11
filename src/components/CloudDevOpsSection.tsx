import { Cloud, GitBranch, Container, RefreshCw } from "lucide-react";
import RevealOnScroll from "./RevealOnScroll";

const items = [
  { icon: Cloud, title: "AWS Basics", desc: "Core services like EC2, S3, and IAM." },
  { icon: RefreshCw, title: "CI/CD", desc: "Automated pipelines for continuous integration and delivery." },
  { icon: Container, title: "Docker", desc: "Containerizing applications for consistent deployments." },
  { icon: GitBranch, title: "Git & GitHub", desc: "Version control and collaborative code management." },
];

const CloudDevOpsSection = () => (
  <section id="cloud-devops" className="py-24 px-6">
    <div className="container">
      <RevealOnScroll>
        <div className="glass-card p-8 md:p-12 text-center">
          <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display mb-10">
            Cloud & DevOps Journey
          </h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {items.map((item, i) => (
              <RevealOnScroll key={item.title} delay={i * 0.1}>
                <div className="p-6 rounded-xl bg-secondary/30 border border-transparent hover:border-glass-border hover:-translate-y-1 transition-all">
                  <item.icon className="w-10 h-10 text-primary mx-auto mb-4" />
                  <h3 className="text-foreground font-display font-semibold mb-2">{item.title}</h3>
                  <p className="text-muted-foreground text-sm">{item.desc}</p>
                </div>
              </RevealOnScroll>
            ))}
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

export default CloudDevOpsSection;
