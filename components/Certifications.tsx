"use client";

import React from "react";
import { motion } from "framer-motion";
import { EDUCATION_CERTIFICATIONS } from "@/lib/data";
import { GraduationCap, Award, Languages, CheckCircle, FileCheck } from "lucide-react";

export default function Certifications() {
  const getIcon = (category: string) => {
    switch (category) {
      case "Education":
        return <GraduationCap className="h-4 w-4 text-cyan-400" />;
      case "Certification":
        return <Award className="h-4 w-4 text-cyan-400" />;
      case "Language":
        return <Languages className="h-4 w-4 text-cyan-400" />;
      default:
        return <CheckCircle className="h-4 w-4 text-cyan-400" />;
    }
  };

  return (
    <section id="certifications" className="py-16 sm:py-24 border-t border-slate-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
            <span className="text-slate-600">//</span>
            <span>VERIFIED_CREDENTIALS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Education &amp; Certifications
          </h2>
          <p className="max-w-2xl text-sm text-slate-400">
            Accredited engineering formation, deep AI specialization, and certified technical mentorship.
          </p>
        </div>

        {/* Credentials Grid */}
        <div className="grid grid-cols-1 gap-6 md:grid-cols-3">
          {EDUCATION_CERTIFICATIONS.map((cert) => (
            <motion.div
              key={cert.id}
              whileHover={{ y: -4 }}
              transition={{ type: "spring", stiffness: 350, damping: 25 }}
              className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-slate-950/80 backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
            >
              {/* Image Container: Top banner slot above title and description */}
              <div className="relative w-full h-48 overflow-hidden rounded-t-xl border-b border-slate-800 bg-slate-900/90">
                {/* eslint-disable-next-line @next/next/no-img-element */}
                <img
                  src={cert.image}
                  alt={cert.title}
                  className="relative z-10 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                  onError={(e) => {
                    (e.target as HTMLElement).style.display = "none";
                  }}
                />
                {/* Cyberpunk Fallback Slot */}
                <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-4 text-center font-mono text-xs text-slate-500 bg-slate-950">
                  <Award className="h-6 w-6 text-cyan-400 mb-2" />
                  <span className="font-semibold text-slate-300">{cert.title}</span>
                  <span className="text-[10px] text-slate-500 mt-1">{cert.image}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="flex flex-1 flex-col justify-between p-6 space-y-4">
                <div className="space-y-3">
                  {/* Issuer badge and date/status tag */}
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <div className="flex h-7 w-7 items-center justify-center rounded border border-slate-800 bg-slate-900 text-cyan-400">
                        {getIcon(cert.category)}
                      </div>
                      <span className="font-mono text-xs text-cyan-400 font-medium">
                        {cert.institution}
                      </span>
                    </div>
                    {cert.badge && (
                      <span className="rounded border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300 shadow-cyan-sm shrink-0">
                        {cert.badge}
                      </span>
                    )}
                  </div>

                  {/* Bold title */}
                  <h3 className="text-lg font-bold text-white group-hover:text-cyan-300 transition-colors">
                    {cert.title}
                  </h3>

                  {/* Full description text */}
                  <p className="text-sm leading-relaxed text-slate-400 font-sans">
                    {cert.description}
                  </p>
                </div>

                {/* Date / Status Tag */}
                <div className="flex items-center justify-between border-t border-slate-800/80 pt-4 font-mono text-xs text-slate-400">
                  <span className="text-[10px] uppercase text-slate-500">PERIOD // STATUS</span>
                  <span className="text-slate-200 font-semibold">{cert.period}</span>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
