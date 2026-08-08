import RevealOnScroll from "./RevealOnScroll";
import { MapPin, Mail, Phone } from "lucide-react";
import profileImg from "@/assets/profile.jpg";

const AboutSection = () => (
  <section id="about" className="py-24 px-6">
    <div className="container max-w-4xl">
      <RevealOnScroll>
        <div className="glass-card p-8 md:p-12">
          <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display text-center mb-8">
            About Me
          </h2>
          <div className="flex justify-center mb-8">
            <img
              src={profileImg}
              alt="BVSSS Srinivas"
              className="w-40 h-40 rounded-full object-cover border-4 border-primary/30 shadow-lg"
            />
          </div>
          <div className="space-y-5 text-muted-foreground text-lg leading-relaxed mb-8">
            <p>
              Motivated <strong className="text-foreground">Computer Science student</strong> with
              foundational knowledge in cloud computing and practical experience in Python, Django,
              and SQL. I build projects that challenge me to write scalable, efficient code across
              backend systems and cloud infrastructure.
            </p>
            <p>
              <strong className="text-foreground">Career Goal:</strong> Aiming for an internship
              that will provide an opportunity to apply technical skills, acquire hands-on industry
              experience, and deliver value to real-world projects.
            </p>
          </div>
          <div className="flex flex-wrap gap-6 justify-center pt-6 border-t border-border">
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <MapPin size={16} className="text-primary" />
              Vijayawada, Andhra Pradesh, India
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Mail size={16} className="text-primary" />
              bvssssrinivas05@gmail.com
            </div>
            <div className="flex items-center gap-2 text-sm text-muted-foreground">
              <Phone size={16} className="text-primary" />
              +91 9347495928
            </div>
          </div>
        </div>
      </RevealOnScroll>
    </div>
  </section>
);

export default AboutSection;
