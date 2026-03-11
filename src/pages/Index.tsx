import Navbar from "@/components/Navbar";
import ParticleBackground from "@/components/ParticleBackground";
import HeroSection from "@/components/HeroSection";
import StatsSection from "@/components/StatsSection";
import AboutSection from "@/components/AboutSection";
import WhatIDoSection from "@/components/WhatIDoSection";
import SkillsSection from "@/components/SkillsSection";
import ProjectsSection from "@/components/ProjectsSection";
import CloudDevOpsSection from "@/components/CloudDevOpsSection";
import CertificationsSection from "@/components/CertificationsSection";
import SoftSkillsSection from "@/components/SoftSkillsSection";
import ExperienceTimeline from "@/components/ExperienceTimeline";

import EducationSection from "@/components/EducationSection";
import ContactSection from "@/components/ContactSection";
import Footer from "@/components/Footer";
import ScrollToTop from "@/components/ScrollToTop";
import ScrollProgressBar from "@/components/ScrollProgressBar";
import SectionTransition from "@/components/SectionTransition";

const Index = () => (
  <>
    <ScrollProgressBar />
    <ParticleBackground />
    <Navbar />
    <main className="relative z-10">
      <HeroSection />
      <SectionTransition><StatsSection /></SectionTransition>
      <SectionTransition><AboutSection /></SectionTransition>
      <SectionTransition><WhatIDoSection /></SectionTransition>
      <SectionTransition><SkillsSection /></SectionTransition>
      <SectionTransition><ProjectsSection /></SectionTransition>
      <SectionTransition><CloudDevOpsSection /></SectionTransition>
      
      <SectionTransition><CertificationsSection /></SectionTransition>
      <SectionTransition><SoftSkillsSection /></SectionTransition>
      <SectionTransition><ExperienceTimeline /></SectionTransition>
      <SectionTransition><EducationSection /></SectionTransition>
      <SectionTransition><ContactSection /></SectionTransition>
    </main>
    <Footer />
    <ScrollToTop />
  </>
);

export default Index;
