"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import HeroTerminal from "@/components/HeroTerminal";
import BentoAbout from "@/components/BentoAbout";
import ProjectGrid from "@/components/ProjectGrid";
import ProjectModal from "@/components/ProjectModal";
import Certifications from "@/components/Certifications";
import Footer from "@/components/Footer";
import { Tier1Project } from "@/lib/data";

const sectionAnimation = {
  initial: { opacity: 0, y: 50 },
  whileInView: { opacity: 1, y: 0 },
  viewport: { once: true, margin: "-80px" },
  transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
};

export default function Home() {
  const [selectedProject, setSelectedProject] = useState<Tier1Project | null>(null);

  return (
    <div className="relative min-h-screen bg-slate-950 text-slate-100 flex flex-col font-sans selection:bg-cyan-500/30 selection:text-cyan-300">
      {/* Global Cyberpunk Grid Overlay */}
      <div className="pointer-events-none fixed inset-0 -z-10 bg-cyber-grid bg-[size:32px_32px] opacity-40" />

      {/* 1. Sticky Navigation */}
      <Navbar />

      {/* Main Single-Page Sequential Content with Framer Motion Scroll Reveals */}
      <main className="flex-1 flex flex-col">
        {/* 2. Hero Terminal */}
        <motion.div {...sectionAnimation} viewport={{ once: true }}>
          <HeroTerminal />
        </motion.div>

        {/* 3. Bento About */}
        <motion.div {...sectionAnimation}>
          <BentoAbout />
        </motion.div>

        {/* 4. Project Grid (Tier 1 Case Studies & Tier 2 Repos) */}
        <motion.div {...sectionAnimation}>
          <ProjectGrid onSelectProject={(project) => setSelectedProject(project)} />
        </motion.div>

        {/* 5. Certifications & Academic Credentials */}
        <motion.div {...sectionAnimation}>
          <Certifications />
        </motion.div>
      </main>

      {/* 6. Footer & Comms */}
      <Footer />

      {/* 7. Interactive Case Study Inspector Modal */}
      <ProjectModal
        project={selectedProject}
        onClose={() => setSelectedProject(null)}
      />
    </div>
  );
}
