"use client";

import React from "react";
import { PROFILE_DATA } from "@/lib/data";
import { Terminal, Github, Linkedin, Mail, ArrowUp, FileText, Sparkles } from "lucide-react";

export default function Footer() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer id="contact" className="border-t border-slate-900 bg-slate-950/95 py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-8 md:grid-cols-12 pb-12 border-b border-slate-900">
          {/* Col 1: Identity & Call to Action */}
          <div className="space-y-4 md:col-span-6">
            <div className="flex items-center gap-2 font-mono text-sm font-bold text-white">
              <div className="flex h-7 w-7 items-center justify-center rounded border border-cyan-500/40 bg-cyan-950/40 text-cyan-400">
                <Terminal className="h-4 w-4" />
              </div>
              <span>AHMED_OUALID_BAHRI</span>
              <span className="text-cyan-400 font-mono text-xs">// VIBE_CODER</span>
            </div>
            <p className="max-w-md text-xs text-slate-400 leading-relaxed">
              Engineering student at ENP Constantine, AI Engineer, and Python Coach at Cirtec Engineering Club. Specializing in calibrated multimodal deep learning and resilient offline-first software applications.
            </p>
            <div className="inline-flex items-center gap-2 rounded border border-cyan-500/30 bg-slate-900/60 px-3 py-1 font-mono text-[11px] text-slate-300">
              <span className="h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
              <span>Available for high-impact AI Engineering &amp; Full-Stack contracts</span>
            </div>
          </div>

          {/* Col 2: Direct Communications */}
          <div className="space-y-3 md:col-span-6 md:text-right">
            <div className="font-mono text-xs uppercase tracking-wider text-cyan-400">
              // SECURE_COMMS
            </div>
            <div className="flex flex-col gap-2 md:items-end">
              <a
                href={`mailto:${PROFILE_DATA.contacts.email}`}
                className="inline-flex items-center gap-2 font-mono text-sm text-slate-200 hover:text-cyan-400 transition-colors"
              >
                <Mail className="h-4 w-4 text-cyan-400" />
                <span>{PROFILE_DATA.contacts.email}</span>
              </a>

              <div className="flex items-center gap-3 pt-2 md:justify-end">
                <a
                  href={PROFILE_DATA.contacts.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"
                  aria-label="GitHub"
                >
                  <Github className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE_DATA.contacts.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="rounded border border-slate-800 bg-slate-900 p-2 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"
                  aria-label="LinkedIn"
                >
                  <Linkedin className="h-4 w-4" />
                </a>
                <a
                  href={PROFILE_DATA.cvUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-1.5 rounded border border-cyan-500/40 bg-cyan-950/40 px-3 py-1.5 font-mono text-xs text-cyan-300 hover:bg-cyan-500/20 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"
                >
                  <FileText className="h-3.5 w-3.5" />
                  <span>Resume PDF</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="flex flex-col items-center justify-between gap-4 pt-8 text-center sm:flex-row sm:text-left">
          <p className="font-mono text-[11px] text-slate-500">
            &copy; {new Date().getFullYear()} Ahmed Oualid Bahri &bull; AI Engineer &amp; Vibe Coder. Engineered with Next.js App Router, Tailwind CSS &amp; Framer Motion.
          </p>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1.5 font-mono text-xs text-slate-400 hover:text-cyan-300 transition-colors"
          >
            <span>RETURN_TO_TOP</span>
            <ArrowUp className="h-3.5 w-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
}
