"use client";

import React, { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { PROFILE_DATA } from "@/lib/data";
import {
  Terminal as TerminalIcon,
  ArrowRight,
  Download,
  Sparkles,
  CheckCircle2,
  FileText,
  CornerDownLeft,
} from "lucide-react";

interface TerminalEntry {
  id: string;
  command?: string;
  output?: React.ReactNode;
}

export default function HeroTerminal() {
  const [inputVal, setInputVal] = useState("");
  const [history, setHistory] = useState<TerminalEntry[]>([
    {
      id: "init-1",
      output: (
        <div className="space-y-1 text-slate-400">
          <p className="text-cyan-400 font-semibold">
            [BAHRI_OS v2.4] Neural Kernel &amp; Vibe Engine Active
          </p>
          <p className="text-slate-500">
            Type <span className="text-cyan-300 font-bold">&quot;whoami&quot;</span> or{" "}
            <span className="text-emerald-400 font-bold">&quot;run ai_pipeline.py&quot;</span> to begin.
          </p>
        </div>
      ),
    },
  ]);
  const [isExecuting, setIsExecuting] = useState(false);
  const terminalBottomRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    terminalBottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history, isExecuting]);

  const handleCommand = (e: React.FormEvent) => {
    e.preventDefault();
    const cmd = inputVal.trim();
    if (!cmd || isExecuting) return;

    setInputVal("");
    const lowerCmd = cmd.toLowerCase();

    if (lowerCmd === "clear") {
      setHistory([]);
      return;
    }

    // Add user command to terminal stream
    const cmdEntryId = `cmd-${Date.now()}`;
    const newHistory = [...history, { id: cmdEntryId, command: cmd }];
    setHistory(newHistory);

    if (lowerCmd === "whoami") {
      setHistory((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}`,
          output: (
            <div className="rounded border border-cyan-500/30 bg-cyan-950/20 p-3 text-slate-300 space-y-2">
              <div className="flex items-center gap-2 text-cyan-400 font-bold">
                <span className="inline-block h-2 w-2 rounded-full bg-cyan-400 animate-pulse"></span>
                <span>AHMED OUALID BAHRI // AI ENGINEER &amp; VIBE CODER</span>
              </div>
              <p className="text-xs leading-relaxed text-slate-200">
                {PROFILE_DATA.bio}
              </p>
              <div className="flex flex-wrap gap-2 pt-1 font-mono text-[10px] text-cyan-300">
                <span className="rounded bg-slate-900 px-2 py-0.5 border border-slate-800">
                  📍 {PROFILE_DATA.location}
                </span>
                <span className="rounded bg-slate-900 px-2 py-0.5 border border-slate-800">
                  🎓 ENP Constantine
                </span>
                <span className="rounded bg-slate-900 px-2 py-0.5 border border-slate-800">
                  ⚡ Python Coach @ Cirtec
                </span>
              </div>
            </div>
          ),
        },
      ]);
    } else if (lowerCmd === "run ai_pipeline.py") {
      setIsExecuting(true);

      const matrixLogs = [
        "[*] Initializing PyTorch neural tensor graphs...",
        "[*] Loading multimodal ISIC dermoscopic fusion weights...",
        "[*] Running post-hoc temperature scaling calibration (T = 1.5909)...",
        "[*] Applying clinical 15% safety triage boundary (target: 0 false negatives)...",
        "[OK] Neural pipeline calibrated successfully. Artifact unlocked!",
      ];

      let step = 0;
      const interval = setInterval(() => {
        if (step < matrixLogs.length) {
          const currentLog = matrixLogs[step];
          setHistory((prev) => [
            ...prev,
            {
              id: `matrix-${Date.now()}-${step}`,
              output: (
                <div className="font-mono text-[11px] text-emerald-400 flex items-center gap-2">
                  <span className="text-cyan-400">&gt;&gt;</span>
                  <span>{currentLog}</span>
                </div>
              ),
            },
          ]);
          step++;
        } else {
          clearInterval(interval);
          setIsExecuting(false);
          // Append the clickable CV link
          setHistory((prev) => [
            ...prev,
            {
              id: `cv-link-${Date.now()}`,
              output: (
                <div className="my-2 rounded border border-cyan-400 bg-cyan-950/40 p-3 shadow-[0_0_15px_rgba(34,211,238,0.3)]">
                  <div className="text-xs font-mono text-cyan-300 font-bold mb-2 flex items-center gap-1.5">
                    <Sparkles className="h-4 w-4 text-cyan-400" />
                    <span>PIPELINE ARTIFACT GENERATED — RESUME READY</span>
                  </div>
                  <a
                    href={PROFILE_DATA.cvUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded bg-cyan-500 px-3 py-1.5 font-mono text-xs font-bold text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_15px_rgba(34,211,238,0.5)]"
                  >
                    <Download className="h-3.5 w-3.5" />
                    <span>Download Ahmed_Oualid_Bahri_CV.pdf</span>
                  </a>
                </div>
              ),
            },
          ]);
        }
      }, 350);
    } else if (lowerCmd === "help") {
      setHistory((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}`,
          output: (
            <div className="space-y-1 text-slate-400 text-[11px]">
              <div className="text-cyan-300 font-semibold mb-1">AVAILABLE COMMANDS:</div>
              <div><span className="text-cyan-400 font-mono font-bold">whoami</span> - Display Ahmed&apos;s background and core mission</div>
              <div><span className="text-emerald-400 font-mono font-bold">run ai_pipeline.py</span> - Execute matrix sequence &amp; unlock CV download</div>
              <div><span className="text-cyan-400 font-mono font-bold">projects</span> - Jump to deployed systems and case studies</div>
              <div><span className="text-cyan-400 font-mono font-bold">clear</span> - Clear terminal session output</div>
              <div><span className="text-cyan-400 font-mono font-bold">help</span> - Display this reference manual</div>
            </div>
          ),
        },
      ]);
    } else if (lowerCmd === "projects") {
      setHistory((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}`,
          output: (
            <div className="space-y-1 text-slate-300 text-[11px]">
              <div className="text-cyan-400 font-bold">DEPLOYED CASE STUDIES:</div>
              <div>1. Skin Lesion Classification (Multimodal Fusion, T=1.5909)</div>
              <div>2. ORDO-DZ (5,300+ Pharmacies Offline PWA, Dexie.js)</div>
              <div>3. SuperManager Pro (100% Offline POS Workstation)</div>
              <a
                href="#projects"
                className="inline-block mt-1 text-cyan-300 underline font-semibold hover:text-cyan-200"
              >
                &gt;&gt; Jump to Projects Section &darr;
              </a>
            </div>
          ),
        },
      ]);
    } else {
      setHistory((prev) => [
        ...prev,
        {
          id: `out-${Date.now()}`,
          output: (
            <div className="text-red-400 font-mono text-[11px]">
              bash: command not found: <span className="text-slate-300">{cmd}</span>. Type <span className="text-cyan-300 underline cursor-pointer" onClick={() => setInputVal("help")}>&quot;help&quot;</span> for valid commands.
            </div>
          ),
        },
      ]);
    }
  };

  return (
    <section id="hero" className="relative py-14 lg:py-20 overflow-hidden">
      {/* Background ambient cyberpunk glow */}
      <div className="pointer-events-none absolute left-1/2 top-0 -z-10 h-[500px] w-full -translate-x-1/2 max-w-6xl rounded-full bg-cyan-500/10 blur-[130px]" />

      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-10 lg:grid-cols-12">
          {/* Left Column: Bold Typography & Identity */}
          <div className="space-y-6 lg:col-span-6">
            {/* Live Status Pill */}
            <div className="inline-flex items-center gap-2 rounded-full border border-cyan-500/40 bg-cyan-950/30 px-3.5 py-1 text-xs font-mono text-cyan-300 shadow-[0_0_12px_rgba(34,211,238,0.25)]">
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-cyan-400 opacity-75"></span>
                <span className="relative inline-flex h-2 w-2 rounded-full bg-cyan-400"></span>
              </span>
              <span>AVAILABLE FOR ROLES // CONSTANTINE, ALGERIA</span>
            </div>

            {/* Hero Main Typography: Large, Bold "AI Engineer & Vibe Coder" */}
            <div className="space-y-2">
              <h1 className="text-4xl font-extrabold tracking-tight text-white sm:text-5xl lg:text-6xl font-sans">
                {PROFILE_DATA.name}
              </h1>
              <div className="text-2xl font-black tracking-tight sm:text-3xl lg:text-4xl">
                <span className="bg-gradient-to-r from-cyan-400 via-teal-300 to-cyan-500 bg-clip-text text-transparent">
                  AI Engineer &amp; Vibe Coder
                </span>
              </div>
            </div>

            {/* Narrative copy */}
            <p className="max-w-xl text-base leading-relaxed text-slate-300 sm:text-lg">
              Engineering student at <strong className="text-white">ENP Constantine</strong> uniting
              rigorous mathematical machine learning (multimodal fusion, calibrated probability) with
              high-speed <strong className="text-cyan-300">Vibe Coding</strong> — shipping resilient,
              offline-first software and production AI applications with relentless momentum.
            </p>

            {/* Key Engineering Differentiators */}
            <div className="grid grid-cols-3 gap-3 border-y border-slate-800/80 py-4 font-mono text-xs">
              <div className="space-y-1">
                <div className="text-slate-400">CALIBRATION</div>
                <div className="font-semibold text-cyan-300">T = 1.5909</div>
              </div>
              <div className="space-y-1 border-x border-slate-800/80 px-3">
                <div className="text-slate-400">OFFLINE SPEED</div>
                <div className="font-semibold text-cyan-300">&lt; 15ms Dexie</div>
              </div>
              <div className="space-y-1 pl-1">
                <div className="text-slate-400">COACHING</div>
                <div className="font-semibold text-slate-200">Cirtec Club</div>
              </div>
            </div>

            {/* Call To Actions */}
            <div className="flex flex-wrap items-center gap-4 pt-1">
              <Link
                href="#projects"
                className="group flex items-center gap-2 rounded border border-cyan-400/80 bg-cyan-500 px-5 py-2.5 font-mono text-xs font-bold uppercase tracking-wider text-slate-950 transition-all hover:bg-cyan-400 hover:shadow-[0_0_20px_rgba(34,211,238,0.6)]"
              >
                <span>Inspect Case Studies</span>
                <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
              </Link>

              <a
                href={PROFILE_DATA.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 rounded border border-slate-700 bg-slate-900/80 px-5 py-2.5 font-mono text-xs font-medium uppercase tracking-wider text-slate-300 transition-all hover:border-cyan-400 hover:text-cyan-300 hover:shadow-[0_0_15px_rgba(34,211,238,0.3)]"
              >
                <Download className="h-4 w-4" />
                <span>Download CV</span>
              </a>
            </div>

            {/* Easter Egg Terminal Hint */}
            <p className="font-mono text-[11px] text-slate-500">
              💡 Hint: Type <span className="text-cyan-400">&quot;run ai_pipeline.py&quot;</span> in the terminal window &rarr;
            </p>
          </div>

          {/* Right Column: Interactive Terminal Window */}
          <div className="lg:col-span-6">
            <div
              onClick={() => inputRef.current?.focus()}
              className="relative flex h-[430px] flex-col overflow-hidden rounded-xl border border-slate-800 bg-slate-950/95 shadow-2xl transition-all duration-300 hover:border-cyan-500/40 hover:shadow-[0_0_20px_rgba(34,211,238,0.25)]"
            >
              {/* Terminal Window Header Bar */}
              <div className="flex items-center justify-between border-b border-slate-800/80 bg-slate-900/80 px-4 py-2.5">
                <div className="flex items-center gap-2">
                  <span className="h-3 w-3 rounded-full bg-red-500/80 inline-block cursor-pointer" title="Close"></span>
                  <span className="h-3 w-3 rounded-full bg-yellow-500/80 inline-block cursor-pointer" title="Minimize"></span>
                  <span className="h-3 w-3 rounded-full bg-emerald-500/80 inline-block cursor-pointer" title="Maximize"></span>
                </div>
                <div className="flex items-center gap-1.5 font-mono text-xs text-slate-300">
                  <TerminalIcon className="h-3.5 w-3.5 text-cyan-400" />
                  <span>bahri@vibe-terminal:~</span>
                </div>
                <div className="font-mono text-[10px] text-cyan-400/80 bg-cyan-950/50 px-2 py-0.5 rounded border border-cyan-500/30">
                  INTERACTIVE
                </div>
              </div>

              {/* Terminal Console Content (Scrollable) */}
              <div className="flex-1 overflow-y-auto p-4 space-y-3 font-mono text-xs leading-relaxed">
                {history.map((entry) => (
                  <div key={entry.id} className="space-y-1">
                    {entry.command && (
                      <div className="flex items-center gap-2 text-slate-300">
                        <span className="text-cyan-400 font-bold">$</span>
                        <span className="text-white font-medium">{entry.command}</span>
                      </div>
                    )}
                    {entry.output && <div>{entry.output}</div>}
                  </div>
                ))}
                <div ref={terminalBottomRef} />
              </div>

              {/* Active Command Input Line */}
              <form
                onSubmit={handleCommand}
                className="flex items-center gap-2 border-t border-slate-800/80 bg-slate-900/60 px-4 py-2.5 font-mono text-xs"
              >
                <span className="text-cyan-400 font-bold">$</span>
                <input
                  ref={inputRef}
                  type="text"
                  value={inputVal}
                  disabled={isExecuting}
                  onChange={(e) => setInputVal(e.target.value)}
                  placeholder={
                    isExecuting ? "Executing pipeline..." : "Type command (e.g. whoami, run ai_pipeline.py)..."
                  }
                  className="flex-1 bg-transparent text-slate-100 placeholder-slate-600 focus:outline-none"
                />
                <button
                  type="submit"
                  disabled={isExecuting || !inputVal.trim()}
                  aria-label="Execute command"
                  className="text-slate-500 hover:text-cyan-400 disabled:opacity-30"
                >
                  <CornerDownLeft className="h-3.5 w-3.5" />
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
