"use client";

import React, { useState } from "react";
import Link from "next/link";
import { PROFILE_DATA, NAV_ITEMS } from "@/lib/data";
import { Terminal, Github, Linkedin, Mail, FileText, Menu, X } from "lucide-react";

export default function Navbar() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-40 w-full border-b border-slate-800/80 bg-slate-950/85 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-4 py-3 sm:px-6 lg:px-8">
        {/* Terminal Callsign Logo */}
        <Link
          href="#hero"
          className="group flex items-center gap-2 font-mono text-sm tracking-wider text-slate-200 transition-colors hover:text-cyan-400"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded border border-cyan-500/40 bg-cyan-950/30 text-cyan-400 shadow-cyan-sm">
            <Terminal className="h-4 w-4" />
          </div>
          <span className="font-semibold text-slate-100">
            AHMED_OUALID<span className="text-cyan-400">.AI</span>
          </span>
          <span className="hidden text-xs text-slate-500 sm:inline-block">
            [SYS_READY]
          </span>
        </Link>

        {/* Desktop Nav Links */}
        <nav className="hidden items-center gap-6 md:flex">
          {NAV_ITEMS.map((item) => (
            <Link
              key={item.label}
              href={item.href}
              className="font-mono text-xs uppercase tracking-widest text-slate-400 transition-colors hover:text-cyan-300"
            >
              <span className="text-cyan-500/60 mr-1">#</span>
              {item.label}
            </Link>
          ))}
        </nav>

        {/* Action Shortcuts */}
        <div className="hidden items-center gap-3 md:flex">
          <a
            href={PROFILE_DATA.contacts.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub Profile"
            className="rounded border border-slate-800 bg-slate-900/80 p-2 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
          >
            <Github className="h-4 w-4" />
          </a>
          <a
            href={PROFILE_DATA.contacts.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn Profile"
            className="rounded border border-slate-800 bg-slate-900/80 p-2 text-slate-400 transition-all hover:border-cyan-500/50 hover:text-cyan-400"
          >
            <Linkedin className="h-4 w-4" />
          </a>
          <a
            href={PROFILE_DATA.cvUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 rounded border border-cyan-500/50 bg-cyan-950/40 px-3 py-1.5 font-mono text-xs font-medium text-cyan-300 transition-all hover:bg-cyan-500/20 hover:shadow-cyan-sm"
          >
            <FileText className="h-3.5 w-3.5" />
            <span>CV.PDF</span>
          </a>
        </div>

        {/* Mobile menu button */}
        <button
          onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          className="rounded border border-slate-800 p-2 text-slate-400 hover:text-cyan-400 md:hidden"
          aria-label="Toggle Navigation Menu"
        >
          {mobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Mobile dropdown */}
      {mobileMenuOpen && (
        <div className="border-b border-slate-800 bg-slate-950/95 px-4 py-4 md:hidden">
          <nav className="flex flex-col gap-3">
            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={() => setMobileMenuOpen(false)}
                className="font-mono text-sm text-slate-300 hover:text-cyan-400"
              >
                <span className="text-cyan-500/70 mr-1.5">#</span>
                {item.label}
              </Link>
            ))}
            <div className="mt-2 flex items-center gap-3 pt-3 border-t border-slate-800">
              <a
                href={PROFILE_DATA.contacts.github}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400"
              >
                <Github className="h-5 w-5" />
              </a>
              <a
                href={PROFILE_DATA.contacts.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="text-slate-400 hover:text-cyan-400"
              >
                <Linkedin className="h-5 w-5" />
              </a>
              <a
                href={`mailto:${PROFILE_DATA.contacts.email}`}
                className="text-slate-400 hover:text-cyan-400"
              >
                <Mail className="h-5 w-5" />
              </a>
              <a
                href={PROFILE_DATA.cvUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="ml-auto flex items-center gap-1 rounded border border-cyan-500/50 bg-cyan-950/40 px-3 py-1 font-mono text-xs text-cyan-300"
              >
                <FileText className="h-3 w-3" />
                <span>Download CV</span>
              </a>
            </div>
          </nav>
        </div>
      )}
    </header>
  );
}
