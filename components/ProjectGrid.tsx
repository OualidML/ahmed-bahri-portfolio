"use client";

import React from "react";
import { motion } from "framer-motion";
import { TIER1_PROJECTS, TIER2_PROJECTS, Tier1Project, Tier2Project } from "@/lib/data";
import {
  ExternalLink,
  Github,
  Maximize2,
  Cpu,
  Layers,
  Sparkles,
  BarChart3,
  Search,
  HardDrive,
  Code2,
  FolderGit2,
} from "lucide-react";

interface ProjectGridProps {
  onSelectProject: (project: Tier1Project) => void;
}

export default function ProjectGrid({ onSelectProject }: ProjectGridProps) {
  return (
    <section id="projects" className="py-16 sm:py-24 border-t border-slate-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-14 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
            <span className="text-slate-600">//</span>
            <span>PRODUCTION_DEPLOYMENTS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            Featured Projects &amp; Case Studies
          </h2>
          <p className="max-w-2xl text-sm text-slate-400">
            Deep-dive technical postmortems on mission-critical AI models and offline-first distributed web apps, followed by open-source codebases.
          </p>
        </div>

        {/* ============================================================== */}
        {/* TIER 1: FLAGSHIP CASE STUDIES (MODAL ENABLED)                  */}
        {/* ============================================================== */}
        <div className="mb-20 space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
            <span className="rounded bg-cyan-950/60 px-2.5 py-1 text-cyan-300 border border-cyan-500/40 font-bold shadow-[0_0_10px_rgba(34,211,238,0.25)]">
              TIER 1
            </span>
            <span className="font-semibold text-slate-200 uppercase tracking-wider">
              Flagship Case Studies (Interactive Inspector Enabled)
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
            {TIER1_PROJECTS.map((project) => (
              <motion.div
                key={project.id}
                whileHover={{ y: -6 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                className="group relative flex flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-slate-950/90 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.45)]"
              >
                {/* 16:9 Primary Image Container displaying project.images[0] */}
                <div
                  onClick={() => onSelectProject(project)}
                  className="relative w-full h-52 overflow-hidden rounded-t-xl border-b border-slate-800 bg-slate-900/90 cursor-pointer"
                >
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={project.images[0]}
                    alt={project.title}
                    className="relative z-10 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />

                  {/* Visual Fallback Placeholder (Active when local image slot is unpopulated) */}
                  <div className="absolute inset-0 z-0 flex flex-col items-center justify-center bg-slate-900/95 font-mono text-xs text-slate-400 p-4 text-center">
                    <Cpu className="h-6 w-6 text-cyan-400 mb-2 transition-transform group-hover:scale-110" />
                    <span className="font-bold text-slate-200">{project.category}</span>
                    <span className="text-[10px] text-slate-500 mt-1 font-mono">
                      {project.images[0]}
                    </span>
                  </div>

                  {/* Top Category Badge */}
                  <div className="absolute top-3 left-3 z-20">
                    <span className="rounded border border-cyan-500/40 bg-slate-950/85 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-cyan-300 backdrop-blur-sm">
                      Case Study
                    </span>
                  </div>

                  {/* Quick Expand Icon Overlay */}
                  <div className="absolute top-3 right-3 z-20 rounded bg-slate-950/70 p-1.5 text-slate-400 opacity-0 transition-opacity group-hover:opacity-100">
                    <Maximize2 className="h-3.5 w-3.5 text-cyan-300" />
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col justify-between p-6 space-y-5">
                  <div className="space-y-3">
                    <h3
                      onClick={() => onSelectProject(project)}
                      className="text-xl font-bold text-white transition-colors cursor-pointer group-hover:text-cyan-300"
                    >
                      {project.title}
                    </h3>
                    <p className="text-xs leading-relaxed text-slate-300 line-clamp-3">
                      {project.tagline}
                    </p>

                    {/* Highlights Grid */}
                    <div className="grid grid-cols-2 gap-2 rounded border border-slate-800/80 bg-slate-900/50 p-2.5 font-mono text-[11px]">
                      {project.highlights.slice(0, 2).map((hl, i) => (
                        <div key={i} className="space-y-0.5">
                          <div className="text-[10px] text-slate-400 uppercase">{hl.label}</div>
                          <div className="font-bold text-cyan-300">{hl.value}</div>
                        </div>
                      ))}
                    </div>

                    {/* Tags */}
                    <div className="flex flex-wrap gap-1.5 font-mono text-[10px]">
                      {project.tags.slice(0, 4).map((tag) => (
                        <span
                          key={tag}
                          className="rounded border border-slate-800 bg-slate-900 px-2 py-0.5 text-slate-400"
                        >
                          {tag}
                        </span>
                      ))}
                    </div>
                  </div>

                  {/* Actions Bar */}
                  <div className="flex items-center justify-between border-t border-slate-800/80 pt-4">
                    <button
                      onClick={() => onSelectProject(project)}
                      className="inline-flex items-center gap-1.5 font-mono text-xs font-bold text-cyan-400 transition-colors hover:text-cyan-300"
                    >
                      <Maximize2 className="h-3.5 w-3.5" />
                      <span>Examine Case Study</span>
                    </button>

                    <div className="flex items-center gap-2">
                      {project.liveUrl && (
                        <a
                          href={project.liveUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Live demo for ${project.title}`}
                          className="rounded border border-slate-800 p-1.5 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"
                        >
                          <ExternalLink className="h-3.5 w-3.5" />
                        </a>
                      )}
                      {project.repoUrl && (
                        <a
                          href={project.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`Source repository for ${project.title}`}
                          className="rounded border border-slate-800 p-1.5 text-slate-400 hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_10px_rgba(34,211,238,0.3)] transition-all"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>

        {/* ============================================================== */}
        {/* TIER 2: REPOSITORIES & SPECIALIZED MODELS                      */}
        {/* ============================================================== */}
        <div className="space-y-6">
          <div className="flex items-center gap-3 font-mono text-xs text-slate-300">
            <span className="rounded bg-slate-900 px-2.5 py-1 text-slate-400 border border-slate-800 font-semibold">
              TIER 2
            </span>
            <span className="font-semibold text-slate-200 uppercase tracking-wider">
              Open-Source Repositories &amp; ML Pipelines
            </span>
          </div>

          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {TIER2_PROJECTS.map((proj) => (
              <motion.div
                key={proj.id}
                whileHover={{ y: -4 }}
                transition={{ type: "spring", stiffness: 350, damping: 25 }}
                className="group flex flex-col justify-between overflow-hidden rounded-xl border border-slate-800 bg-slate-950/70 transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.35)]"
              >
                {/* Clean Top Banner (h-40 w-full object-cover object-top) */}
                <div className="relative w-full h-40 overflow-hidden rounded-t-xl border-b border-slate-800 bg-slate-900/90">
                  {/* eslint-disable-next-line @next/next/no-img-element */}
                  <img
                    src={proj.image}
                    alt={proj.title}
                    className="relative z-10 w-full h-full object-cover object-top transition-transform duration-500 group-hover:scale-105"
                    onError={(e) => {
                      (e.target as HTMLElement).style.display = "none";
                    }}
                  />
                  {/* Visual Fallback Placeholder */}
                  <div className="absolute inset-0 z-0 flex flex-col items-center justify-center p-2 text-center font-mono text-[10px] text-slate-500 bg-slate-900/95">
                    <FolderGit2 className="h-5 w-5 text-cyan-400 mb-1" />
                    <span>{proj.image}</span>
                  </div>
                </div>

                {/* Content Body */}
                <div className="flex flex-1 flex-col justify-between p-5 space-y-3">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] uppercase font-bold text-cyan-400">
                        {proj.category}
                      </span>
                      <div className="flex items-center gap-1.5">
                        {proj.liveUrl && (
                          <a
                            href={proj.liveUrl}
                            target="_blank"
                            rel="noopener noreferrer"
                            aria-label={`Live site for ${proj.title}`}
                            className="text-slate-400 hover:text-cyan-300 transition-colors"
                          >
                            <ExternalLink className="h-3.5 w-3.5" />
                          </a>
                        )}
                        <a
                          href={proj.repoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          aria-label={`GitHub repo for ${proj.title}`}
                          className="text-slate-400 hover:text-cyan-300 transition-colors"
                        >
                          <Github className="h-3.5 w-3.5" />
                        </a>
                      </div>
                    </div>

                    <h4 className="text-base font-bold text-white group-hover:text-cyan-300 transition-colors">
                      {proj.title}
                    </h4>
                    <p className="text-xs text-slate-400 leading-relaxed line-clamp-3">
                      {proj.description}
                    </p>

                    {proj.stats && (
                      <div className="rounded border border-slate-800/80 bg-slate-900/60 px-2.5 py-1 font-mono text-[10px] text-cyan-300">
                        {proj.stats}
                      </div>
                    )}
                  </div>

                  <div className="mt-4 flex flex-wrap gap-1 font-mono text-[9px] pt-3 border-t border-slate-800/60">
                    {proj.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded bg-slate-900 px-1.5 py-0.5 text-slate-400 border border-slate-800/60"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
