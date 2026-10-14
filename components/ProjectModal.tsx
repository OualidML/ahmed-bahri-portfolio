"use client";

import React, { useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { Tier1Project } from "@/lib/data";
import {
  X,
  ExternalLink,
  Github,
  CheckCircle2,
  Cpu,
  Layers,
  AlertTriangle,
  Flame,
  Camera,
  ArrowRight,
  TrendingUp,
  ShieldAlert,
} from "lucide-react";

interface ProjectModalProps {
  project: Tier1Project | null;
  onClose: () => void;
}

export default function ProjectModal({ project, onClose }: ProjectModalProps) {
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        onClose();
      }
    };
    if (project) {
      document.body.style.overflow = "hidden";
      window.addEventListener("keydown", handleKeyDown);
    }
    return () => {
      document.body.style.overflow = "unset";
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, [project, onClose]);

  return (
    <AnimatePresence>
      {project && (
        <div
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-title"
          className="fixed inset-0 z-50 flex items-center justify-center p-3 sm:p-6 overflow-hidden"
        >
          {/* Backdrop with fade animation */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.2 }}
            onClick={onClose}
            className="fixed inset-0 bg-slate-950/85 backdrop-blur-md"
          />

          {/* Modal Dialog Card with spring scale & slide */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 28 }}
            className="relative z-10 flex max-h-[92vh] w-full max-w-4xl flex-col overflow-hidden rounded-xl border border-cyan-500/40 bg-slate-950 shadow-[0_0_35px_rgba(34,211,238,0.25)]"
          >
            {/* Terminal Window Header Bar */}
            <div className="flex items-center justify-between border-b border-slate-800/90 bg-slate-900/90 px-6 py-3.5">
              <div className="flex items-center gap-2">
                <span className="font-mono text-xs uppercase tracking-wider text-cyan-400 font-bold">
                  [CASE_STUDY_INSPECTOR]
                </span>
                <span className="text-slate-600 font-mono">/</span>
                <span className="font-mono text-xs text-slate-300 font-medium">{project.id}</span>
              </div>

              <button
                onClick={onClose}
                aria-label="Close modal"
                className="rounded border border-slate-800 bg-slate-900 p-1.5 text-slate-400 transition-colors hover:border-cyan-400 hover:text-cyan-300"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            {/* Scrollable Modal Content */}
            <div className="overflow-y-auto p-6 sm:p-8 space-y-8">
              {/* Top Title & Links */}
              <div className="space-y-3">
                <div className="flex flex-wrap items-center justify-between gap-4">
                  <span className="rounded border border-cyan-500/40 bg-cyan-950/40 px-3 py-0.5 font-mono text-xs text-cyan-300 font-semibold shadow-cyan-sm">
                    {project.category}
                  </span>

                  <div className="flex items-center gap-3">
                    {project.liveUrl && (
                      <a
                        href={project.liveUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded border border-cyan-400 bg-cyan-500 px-3.5 py-1.5 font-mono text-xs font-bold text-slate-950 hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] transition-all"
                      >
                        <span>Launch Live System</span>
                        <ExternalLink className="h-3.5 w-3.5" />
                      </a>
                    )}
                    {project.repoUrl && (
                      <a
                        href={project.repoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1.5 rounded border border-slate-700 bg-slate-900 px-3 py-1.5 font-mono text-xs text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-all"
                      >
                        <Github className="h-3.5 w-3.5" />
                        <span>Source Code</span>
                      </a>
                    )}
                  </div>
                </div>

                <h3 id="modal-title" className="text-2xl font-black text-white sm:text-3xl font-sans">
                  {project.title}
                </h3>
                <p className="text-sm text-slate-300 leading-relaxed">
                  {project.tagline}
                </p>
              </div>

              {/* Highlights Pill Grid */}
              <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
                {project.highlights.map((hl, i) => (
                  <div
                    key={i}
                    className="rounded-lg border border-slate-800 bg-slate-900/60 p-3 font-mono text-xs"
                  >
                    <div className="text-[10px] text-slate-400 uppercase">{hl.label}</div>
                    <div className="mt-1 text-sm font-bold text-cyan-300">{hl.value}</div>
                  </div>
                ))}
              </div>

              {/* ========================================================== */}
              {/* THE 3-PART TECHNICAL NARRATIVE: CHALLENGE -> SOLUTION -> RESULT */}
              {/* ========================================================== */}
              <div className="space-y-5">
                <div className="font-mono text-xs text-slate-400 uppercase tracking-widest flex items-center gap-2">
                  <span className="text-cyan-400">//</span>
                  <span>STRUCTURED_CASE_STUDY_NARRATIVE</span>
                </div>

                {/* 1. THE CHALLENGE */}
                <div className="rounded-xl border border-red-950/60 bg-red-950/10 p-5 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-red-400">
                    <ShieldAlert className="h-4 w-4" />
                    <span>PHASE 1: THE CHALLENGE</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-200">
                    {project.challenge}
                  </p>
                </div>

                {/* 2. THE AI / TECHNICAL SOLUTION */}
                <div className="rounded-xl border border-cyan-950/60 bg-cyan-950/10 p-5 space-y-3">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-cyan-400">
                    <Cpu className="h-4 w-4" />
                    <span>PHASE 2: THE AI &amp; TECHNICAL SOLUTION</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-200">
                    {project.solution}
                  </p>

                  {/* Architecture breakdown */}
                  <div className="pt-2 space-y-2">
                    <div className="font-mono text-[11px] text-cyan-300/80 uppercase">
                      Architectural Building Blocks:
                    </div>
                    {project.technicalArchitecture.map((arch, idx) => (
                      <div
                        key={idx}
                        className="flex items-start gap-2.5 rounded border border-slate-800/80 bg-slate-900/60 p-2 text-xs text-slate-300 font-mono"
                      >
                        <span className="font-bold text-cyan-400">[{idx + 1}]</span>
                        <span>{arch}</span>
                      </div>
                    ))}
                  </div>
                </div>

                {/* 3. THE RESULT */}
                <div className="rounded-xl border border-emerald-950/60 bg-emerald-950/10 p-5 space-y-2">
                  <div className="flex items-center gap-2 font-mono text-xs font-bold text-emerald-400">
                    <TrendingUp className="h-4 w-4" />
                    <span>PHASE 3: THE RESULT &amp; MEASURED IMPACT</span>
                  </div>
                  <p className="text-xs leading-relaxed text-slate-200">
                    {project.result}
                  </p>
                </div>
              </div>

              {/* Screenshots Gallery (Screenshots only, no videos as required) */}
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <h4 className="font-mono text-xs uppercase tracking-wider text-slate-400 flex items-center gap-2">
                    <Camera className="h-4 w-4 text-cyan-400" />
                    <span>SYSTEM SNAPSHOTS (SCREENSHOTS ONLY)</span>
                  </h4>
                  <span className="font-mono text-[10px] text-slate-500">
                    public/ asset slots
                  </span>
                </div>

                <div className="grid grid-cols-1 gap-3 sm:grid-cols-3">
                  {(project.images || project.screenshots || []).map((shot, idx) => (
                    <div
                      key={idx}
                      className="relative aspect-video overflow-hidden rounded-lg border border-slate-800 bg-slate-900/80"
                    >
                      {/* eslint-disable-next-line @next/next/no-img-element */}
                      <img
                        src={shot}
                        alt={`${project.title} screenshot ${idx + 1}`}
                        className="relative z-10 h-full w-full object-cover"
                        onError={(e) => {
                          (e.target as HTMLElement).style.display = "none";
                        }}
                      />
                      <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-2 text-center font-mono text-[10px] text-slate-500 bg-slate-900/90">
                        <Camera className="h-4 w-4 text-cyan-400 mb-1" />
                        <span>{shot}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* Modal Footer Bar */}
            <div className="flex items-center justify-between border-t border-slate-800 bg-slate-900/80 px-6 py-3">
              <span className="font-mono text-[11px] text-slate-500">
                Press [ESC] or click outside to dismiss
              </span>
              <button
                onClick={onClose}
                className="rounded border border-slate-700 bg-slate-800 px-4 py-1.5 font-mono text-xs text-slate-300 hover:border-cyan-400 hover:text-cyan-300 transition-colors"
              >
                Close Inspector
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </AnimatePresence>
  );
}
