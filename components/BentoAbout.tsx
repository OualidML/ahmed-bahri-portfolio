"use client";

import React from "react";
import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/data";
import {
  Brain,
  Cpu,
  Layers,
  Database,
  Terminal,
  Code2,
  GraduationCap,
  Sparkles,
  Users,
  Compass,
  Zap,
} from "lucide-react";

export default function BentoAbout() {
  const cardHoverMotion = {
    whileHover: { scale: 1.02 },
    transition: { type: "spring", stiffness: 350, damping: 25 },
  };

  return (
    <section id="about" className="py-16 sm:py-24 border-t border-slate-900 relative">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <div className="mb-12 space-y-2">
          <div className="flex items-center gap-2 font-mono text-xs text-cyan-400">
            <span className="text-slate-600">//</span>
            <span>SYSTEM_SPECIFICATIONS</span>
          </div>
          <h2 className="text-3xl font-extrabold tracking-tight text-white sm:text-4xl">
            About &amp; Core Architecture
          </h2>
          <p className="max-w-2xl text-sm text-slate-400">
            A high-velocity synthesis of deep learning research, resilient offline systems, and engineering leadership.
          </p>
        </div>

        {/* Bento Box CSS Grid Layout (4 Asymmetrical Cards) */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-5">
          {/* CARD 1: Bridging Deep Learning & Production Apps (Spans 7 cols on lg) */}
          <motion.div
            {...cardHoverMotion}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] lg:col-span-7"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Cpu className="h-5 w-5" />
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold">
                    CORE NARRATIVE
                  </span>
                </div>
                <span className="rounded border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300">
                  AI &times; PRODUCTION
                </span>
              </div>

              <h3 className="text-xl font-bold text-white sm:text-2xl">
                Bridging Deep Learning &amp; Production Applications
              </h3>

              <p className="text-sm leading-relaxed text-slate-300">
                Most AI research remains trapped in Jupyter notebooks, vulnerable to uncalibrated confidence and zero-production resilience. My mission is building the bridge: transforming experimental neural networks into hardened, real-world tools that users and clinicians can trust implicitly.
              </p>

              <p className="text-xs leading-relaxed text-slate-400">
                From implementing post-hoc temperature scaling ($T=1.5909$) to ensure dermatology models never exhibit dangerous overconfidence, to architecting client-side databases running without cellular signal, every system is engineered for stability, speed, and tangible human impact.
              </p>
            </div>

            <div className="mt-6 flex flex-wrap items-center gap-2 pt-4 border-t border-slate-800/80 font-mono text-[11px] text-slate-400">
              <span className="text-cyan-400">#calibrated-ai</span>
              <span className="text-cyan-400">#offline-first</span>
              <span className="text-cyan-400">#zero-false-negatives</span>
              <span className="text-cyan-400">#vibe-coding-velocity</span>
            </div>
          </motion.div>

          {/* CARD 2: Tech Stack (React, Tailwind, Next.js, IndexedDB, Vercel) (Spans 5 cols on lg) */}
          <motion.div
            {...cardHoverMotion}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] lg:col-span-5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Code2 className="h-5 w-5" />
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold">
                    FULL-STACK STACK
                  </span>
                </div>
                <span className="rounded border border-slate-800 bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                  SYSTEMS
                </span>
              </div>

              <h3 className="text-lg font-bold text-white sm:text-xl">
                Modern Web &amp; Offline Systems
              </h3>

              <p className="text-xs leading-relaxed text-slate-400">
                Architecting high-throughput frontend experiences with instant client-side caching, fluid animations, and serverless edge deployments.
              </p>

              {/* Technologies Required: React, Tailwind, Next.js, IndexedDB, Vercel */}
              <div className="grid grid-cols-2 gap-2 font-mono text-xs pt-1">
                {[
                  { name: "React", desc: "Interactive UI Engine" },
                  { name: "Tailwind CSS", desc: "Cyberpunk Utility UI" },
                  { name: "Next.js", desc: "App Router & SSR" },
                  { name: "IndexedDB", desc: "Offline Dexie Cache" },
                  { name: "Vercel", desc: "Edge Global Delivery" },
                  { name: "TypeScript", desc: "Strict Type Safety" },
                ].map((item) => (
                  <div
                    key={item.name}
                    className="rounded border border-slate-800/80 bg-slate-900/60 p-2 text-slate-300 transition-colors group-hover:border-cyan-500/30"
                  >
                    <div className="font-bold text-cyan-300">{item.name}</div>
                    <div className="text-[10px] text-slate-500">{item.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 font-mono text-[11px] text-slate-500">
              ⚡ Sub-15ms client lookups &bull; Zero network lag
            </div>
          </motion.div>

          {/* CARD 3: AI Stack (TensorFlow, PyTorch, LightGBM, SHAP) (Spans 5 cols on lg) */}
          <motion.div
            {...cardHoverMotion}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] lg:col-span-5"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Brain className="h-5 w-5" />
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold">
                    AI &amp; DATA ENGINE
                  </span>
                </div>
                <span className="rounded border border-slate-800 bg-slate-900 px-2 py-0.5 font-mono text-[10px] text-slate-400">
                  MODELS
                </span>
              </div>

              <h3 className="text-lg font-bold text-white sm:text-xl">
                Applied AI &amp; Machine Learning Stack
              </h3>

              <p className="text-xs leading-relaxed text-slate-400">
                End-to-end predictive modeling across tabular benchmarks, computer vision classification, and model explainability engines.
              </p>

              {/* Technologies Required: TensorFlow, PyTorch, LightGBM, SHAP */}
              <div className="grid grid-cols-2 gap-2 font-mono text-xs pt-1">
                {[
                  { name: "PyTorch", desc: "Multimodal Deep Nets" },
                  { name: "TensorFlow", desc: "Vision & Export Graph" },
                  { name: "LightGBM", desc: "1M+ Row Gradient Boost" },
                  { name: "SHAP", desc: "Feature Attribution XAI" },
                  { name: "Scikit-Learn", desc: "Clustering & PCA" },
                  { name: "Streamlit", desc: "Rapid Clinical Trials" },
                ].map((ai) => (
                  <div
                    key={ai.name}
                    className="rounded border border-slate-800/80 bg-slate-900/60 p-2 text-slate-300 transition-colors group-hover:border-cyan-500/30"
                  >
                    <div className="font-bold text-cyan-300">{ai.name}</div>
                    <div className="text-[10px] text-slate-500">{ai.desc}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="mt-4 pt-3 border-t border-slate-800/80 font-mono text-[11px] text-slate-500">
              📊 Rigorous validation splits &bull; Calibrated metrics
            </div>
          </motion.div>

          {/* CARD 4: Python Coach at Cirtec Engineering Club (Spans 7 cols on lg) */}
          <motion.div
            {...cardHoverMotion}
            className="group relative flex flex-col justify-between rounded-xl border border-slate-800 bg-slate-950/80 p-6 sm:p-8 backdrop-blur transition-all duration-300 hover:border-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)] lg:col-span-7"
          >
            <div className="space-y-4">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-cyan-400">
                  <Users className="h-5 w-5" />
                  <span className="font-mono text-xs uppercase tracking-wider text-cyan-300 font-bold">
                    LEADERSHIP &amp; MENTORSHIP
                  </span>
                </div>
                <span className="rounded border border-cyan-500/30 bg-cyan-950/40 px-2.5 py-0.5 font-mono text-[10px] text-cyan-300">
                  ENP CONSTANTINE
                </span>
              </div>

              <div className="space-y-1">
                <h3 className="text-xl font-bold text-white sm:text-2xl">
                  Python Coach at Cirtec Engineering Club
                </h3>
                <p className="font-mono text-xs text-cyan-400">
                  National Polytechnic School of Constantine (ENPC)
                </p>
              </div>

              <p className="text-sm leading-relaxed text-slate-300">
                At Cirtec—the premier technical and robotics club at the National Polytechnic School of Constantine—I actively coach aspiring engineers and computer scientists. I run intensive workshops breaking down clean Python idioms, algorithmic optimization, PyTorch workflows, and practical project architecture.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 pt-2 font-mono text-xs">
                <div className="rounded border border-slate-800 bg-slate-900/60 p-2.5">
                  <div className="text-[10px] text-slate-500">WORKSHOPS</div>
                  <div className="font-semibold text-slate-200">Python &amp; ML Bootcamp</div>
                </div>
                <div className="rounded border border-slate-800 bg-slate-900/60 p-2.5">
                  <div className="text-[10px] text-slate-500">FOCUS</div>
                  <div className="font-semibold text-cyan-300">Algorithmic Thinking</div>
                </div>
                <div className="rounded border border-slate-800 bg-slate-900/60 p-2.5">
                  <div className="text-[10px] text-slate-500">IMPACT</div>
                  <div className="font-semibold text-emerald-400">Project Execution</div>
                </div>
              </div>
            </div>

            <div className="mt-6 flex items-center justify-between pt-4 border-t border-slate-800/80 font-mono text-[11px] text-slate-400">
              <span>CIRTEC CLUB // ENPC</span>
              <span className="text-cyan-400">Empowering future engineers &rarr;</span>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
