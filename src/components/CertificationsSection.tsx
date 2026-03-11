import { Award, ExternalLink } from "lucide-react";
import { motion } from "framer-motion";
import RevealOnScroll from "./RevealOnScroll";

const certifications = [
  {
    title: "AWS Certified Cloud Practitioner",
    issuer: "Amazon Web Services",
    code: "CLF-C02",
    date: "2025",
    expiry: "2028",
    color: "from-amber-500/20 to-amber-600/5",
    borderColor: "border-t-amber-500",
    iconColor: "text-amber-500",
    credentialUrl: "https://cp.certmetrics.com/amazon/en/public/verify/credential/7e934e1533b54529ac4ebf9d4657a282",
    description:
      "Demonstrates foundational, high-level understanding of AWS Cloud, services, and core terminology.",
  },
  {
    title: "Python (Basic) Skill Certification",
    issuer: "HackerRank",
    code: "Python Basic",
    date: "2024",
    expiry: null,
    color: "from-emerald-500/20 to-emerald-600/5",
    borderColor: "border-t-emerald-500",
    iconColor: "text-emerald-500",
    credentialUrl: "https://www.hackerrank.com/certificates/3518ba8e3150",
    description:
      "Validates fundamental Python programming skills including data types, control flow, and basic problem solving.",
  },
];

const CertificationsSection = () => (
  <section id="certifications" className="py-24 px-6">
    <RevealOnScroll>
      <h2 className="text-gradient text-3xl md:text-4xl font-bold font-display text-center mb-4">
        Global Certifications
      </h2>
      <p className="text-muted-foreground text-center max-w-xl mx-auto mb-12">
        Industry-recognized credentials validating technical expertise
      </p>
    </RevealOnScroll>
    <div className="container grid md:grid-cols-2 gap-8 max-w-4xl">
      {certifications.map((cert, i) => (
        <RevealOnScroll key={cert.title} delay={i * 0.15}>
          <motion.div
            whileHover={{ y: -6, transition: { duration: 0.2 } }}
            className={`glass-card p-8 ${cert.borderColor} border-t-4 relative overflow-hidden group h-full`}
          >
            <div
              className={`absolute inset-0 bg-gradient-to-br ${cert.color} opacity-0 group-hover:opacity-100 transition-opacity duration-300`}
            />
            <div className="relative z-10">
              <Award className={`w-12 h-12 ${cert.iconColor} mb-5`} />
              <h3 className="text-foreground text-lg font-display font-bold mb-2">
                {cert.title}
              </h3>
              <p className={`${cert.iconColor} font-medium text-sm mb-1`}>
                {cert.issuer}
              </p>
              <p className="text-muted-foreground text-xs mb-4">
                Issued: {cert.date}
                {cert.expiry && ` | Expires: ${cert.expiry}`}
              </p>
              <p className="text-muted-foreground text-sm mb-5 leading-relaxed">
                {cert.description}
              </p>
              <a
                href={cert.credentialUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-xs font-medium text-primary hover:underline"
              >
                <ExternalLink size={12} /> View Credential
              </a>
            </div>
          </motion.div>
        </RevealOnScroll>
      ))}
    </div>
  </section>
);

export default CertificationsSection;
