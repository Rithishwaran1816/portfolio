"use client";

import React from "react";
import Link from "next/link";
import { sound } from "@/lib/audio";
import { ArrowUpRight, ChevronUp, Mail, Sparkles } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export const Footer: React.FC = () => {
  const scrollToTop = () => {
    sound.playClick();
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <footer className="relative bg-slate-100 dark:bg-[#070707] border-t border-slate-200 dark:border-white/[0.08] pt-20 pb-12 px-6 sm:px-12 overflow-hidden text-slate-900 dark:text-white transition-colors duration-300">
      {/* Subtle top glow ambient spotlight */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-3/4 max-w-4xl h-px bg-gradient-to-r from-transparent via-violet-500/50 to-transparent" />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 max-w-2xl h-24 bg-violet-600/5 blur-3xl pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16">
        {/* Top Call to Action Section */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-12 border-b border-slate-200 dark:border-white/[0.06]">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-pulse" />
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                DIGITAL UNIVERSE TERMINAL
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black tracking-tight text-slate-900 dark:text-white leading-tight">
              LET&apos;S BUILD <br />
              <span className="text-gradient-cyan">SOMETHING EXTRAORDINARY.</span>
            </h2>
            <p className="text-slate-600 dark:text-neutral-400 text-sm sm:text-base font-light leading-relaxed">
              Exploring ideas. Building systems. Creating experiences.
              Open for engineering collaborations, AI experiments, and transformative product builds.
            </p>
          </div>

          <div className="flex flex-wrap gap-4">
            <Link
              href="/contact"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-3.5 rounded-xl bg-gradient-to-r from-violet-600 to-cyan-600 text-white font-mono text-xs font-bold uppercase tracking-wider hover:opacity-90 transition-all shadow-md flex items-center gap-2"
            >
              <span>INITIALIZE TRANSMISSION</span>
              <ArrowUpRight className="w-4 h-4" />
            </Link>

            <Link
              href="/apex-labs"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="px-6 py-3.5 rounded-xl bg-white dark:bg-[#141414] border border-cyan-300 dark:border-cyan-500/30 text-cyan-700 dark:text-cyan-300 font-mono text-xs uppercase tracking-wider hover:bg-cyan-50 dark:hover:bg-cyan-950/30 hover:border-cyan-400 transition-all flex items-center gap-2 font-bold shadow-sm"
            >
              <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span>EXPLORE APEX LABS</span>
            </Link>
          </div>
        </div>

        {/* Links Matrix */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 font-mono text-xs">
          <div className="space-y-3">
            <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest font-bold block">
              CORE LABS
            </span>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/llm-lab"
                  onClick={() => sound.playClick()}
                  className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  THE LLM LAB
                </Link>
              </li>
              <li>
                <Link
                  href="/#work"
                  onClick={() => sound.playClick()}
                  className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  PROJECT ARCHIVE
                </Link>
              </li>
              <li>
                <Link
                  href="/#tech"
                  onClick={() => sound.playClick()}
                  className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors"
                >
                  TECH UNIVERSE
                </Link>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest font-bold block">
              VENTURES
            </span>
            <ul className="space-y-2">
              <li>
                <Link
                  href="/apex-labs"
                  onClick={() => sound.playClick()}
                  className="text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-300 transition-colors flex items-center gap-1 font-bold"
                >
                  <span>APEX LABS</span>
                  <Sparkles className="w-3 h-3" />
                </Link>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/apex_.labs?igsi=MXF3bXpvYTExemxpaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1"
                >
                  <span>APEX INSTAGRAM</span>
                  <ArrowUpRight className="w-3 h-3 text-slate-400 dark:text-neutral-500" />
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest font-bold block">
              CONNECT
            </span>
            <ul className="space-y-2">
              <li>
                <a
                  href="mailto:rithishdivinan@gmail.com"
                  className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Mail className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500" />
                  <span>EMAIL</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/rithishwarank18/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Icons.LinkedIn className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500" />
                  <span>LINKEDIN</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.instagram.com/responsible_boy_1821?igsi=NGRxZWtsYjd0dDAy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Icons.Instagram className="w-3.5 h-3.5 text-pink-500" />
                  <span>INSTAGRAM (@responsible_boy_1821)</span>
                </a>
              </li>
              <li>
                <a
                  href="https://github.com/Rithishwaran1816"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors flex items-center gap-1.5"
                >
                  <Icons.GitHub className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500" />
                  <span>GITHUB</span>
                </a>
              </li>
            </ul>
          </div>

          <div className="space-y-3">
            <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest font-bold block">
              SYSTEM
            </span>
            <div className="space-y-2 text-slate-600 dark:text-neutral-400">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
                <span className="text-slate-900 dark:text-white font-bold">STATUS: ONLINE</span>
              </div>
              <p className="text-[11px] text-slate-500 dark:text-neutral-500">NEXT.JS × THREE.JS × FRAMER MOTION</p>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="flex flex-col sm:flex-row items-center justify-between gap-4 pt-8 border-t border-slate-200 dark:border-white/[0.06] text-xs font-mono text-slate-500 dark:text-neutral-500">
          <div className="flex items-center gap-2">
            <span>© 2026 RITHISHWARAN.</span>
            <span>/</span>
            <span className="text-slate-600 dark:text-neutral-400">ALL RIGHTS RESERVED.</span>
          </div>

          <button
            onClick={scrollToTop}
            className="flex items-center gap-1 px-3 py-1.5 rounded-lg bg-slate-200/60 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-700 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-all cursor-pointer font-bold"
          >
            <span>ELEVATE TO TOP</span>
            <ChevronUp className="w-3.5 h-3.5" />
          </button>
        </div>
      </div>
    </footer>
  );
};

