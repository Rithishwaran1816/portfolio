"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Button3D } from "@/components/ui/Button3D";
import { TerminalHUD } from "@/components/ui/TerminalHUD";
import { ArrowDown, ArrowUpRight, Cpu, Sparkles } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export const HeroSection: React.FC = () => {
  return (
    <section className="relative min-h-[90vh] lg:min-h-screen flex items-center justify-center pt-24 pb-16 px-6 sm:px-12 overflow-hidden bg-slate-50 dark:bg-[#070707] transition-colors duration-300">
      {/* Background ambient lighting */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-violet-600/10 dark:bg-violet-600/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute bottom-10 right-10 w-[400px] h-[400px] bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-[120px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none" />

      <div className="w-full max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 items-center relative z-10">
        {/* Left Typography & Hero Statement */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-7 flex flex-col items-start gap-6 text-left"
        >
          {/* Status HUD Badges & Profile Avatar */}
          <div className="flex flex-wrap items-center gap-3">
            {/* Profile Avatar Badge */}
            <a
              href="https://www.instagram.com/responsible_boy_1821?igsi=NGRxZWtsYjd0dDAy"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center gap-2 px-2.5 py-1 rounded-full bg-white dark:bg-[#121212] border border-slate-200 dark:border-white/10 hover:border-pink-500 transition-all shadow-md group cursor-pointer"
            >
              <div className="relative w-7 h-7 rounded-full overflow-hidden border border-pink-500/60 shrink-0">
                <Image
                  src="/profile2.jpg"
                  alt="Rithishwaran Profile"
                  fill
                  className="object-cover object-top group-hover:scale-110 transition-transform duration-300"
                />
              </div>
              <span className="text-xs font-mono font-bold text-slate-800 dark:text-white group-hover:text-pink-600 dark:group-hover:text-pink-400 transition-colors">
                @responsible_boy_1821
              </span>
              <Icons.Instagram className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400" />
            </a>

            <TerminalHUD label="SYSTEM" value="INITIALIZED" status="online" />
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/40 border border-violet-300 dark:border-violet-500/30 text-violet-700 dark:text-violet-300 font-mono text-[11px] uppercase tracking-wider">
              <Sparkles className="w-3 h-3 text-violet-600 dark:text-violet-400" />
              <span>FOUNDER @ APEX LABS</span>
            </div>
          </div>

          {/* Micro Label */}
          <div className="flex items-center gap-3">
            <span className="h-px w-8 bg-cyan-600 dark:bg-cyan-400" />
            <span className="text-xs font-mono font-bold tracking-widest text-cyan-600 dark:text-cyan-400 uppercase">
              HELLO, WORLD.
            </span>
          </div>

          {/* Master Headline */}
          <h1 className="text-4xl sm:text-6xl xl:text-7xl font-black tracking-tight text-slate-900 dark:text-white leading-[1.04] uppercase">
            I&apos;M RITHISHWARAN. <br />
            <span className="text-slate-400 dark:text-neutral-400 font-extrabold">I DON&apos;T JUST</span> <br />
            <span className="text-slate-400 dark:text-neutral-400 font-extrabold">USE TECHNOLOGY.</span> <br />
            <span className="text-gradient-dual">I BUILD WITH IT.</span>
          </h1>

          {/* Supporting Statement */}
          <p className="text-slate-600 dark:text-neutral-300 text-base sm:text-lg font-light leading-relaxed max-w-xl">
            Exploring artificial intelligence, Large Language Model architectures, intelligent data ecosystems, 
            and the full-stack engineering powering the next generation of digital experiences.
          </p>

          {/* Physical 3D Action CTAs */}
          <div className="flex flex-wrap items-center gap-4 pt-2">
            <Button3D
              href="/#work"
              variant="primary"
              size="lg"
              icon={<ArrowDown className="w-4 h-4" />}
            >
              EXPLORE MY WORK
            </Button3D>

            <Button3D
              href="/llm-lab"
              variant="secondary"
              size="lg"
              icon={<Cpu className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />}
            >
              ENTER THE LLM LAB
            </Button3D>
          </div>

          {/* Highlight Metrics */}
          <div className="grid grid-cols-3 gap-6 pt-6 border-t border-slate-200 dark:border-white/10 w-full max-w-lg font-mono">
            <div>
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-semibold">
                FLAGSHIP PROJECT
              </span>
              <span className="text-xs sm:text-sm font-bold text-violet-700 dark:text-violet-300">
                BUILDING MY OWN LLM
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-semibold">
                VENTURE
              </span>
              <span className="text-xs sm:text-sm font-bold text-cyan-700 dark:text-cyan-300">
                APEX LABS
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-semibold">
                STACK
              </span>
              <span className="text-xs sm:text-sm font-bold text-slate-800 dark:text-neutral-200">
                AI × DATA × WEB
              </span>
            </div>
          </div>
        </motion.div>

        {/* Right — Portrait Photo Showcase */}
        <motion.div
          initial={{ opacity: 0, x: 40 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.25, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          {/* Outer ambient glow ring */}
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <motion.div
              animate={{ rotate: 360 }}
              transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
              className="w-[340px] h-[340px] sm:w-[420px] sm:h-[420px] rounded-full border border-dashed border-violet-400/20 dark:border-violet-500/20"
            />
          </div>
          <motion.div
            animate={{ rotate: -360 }}
            transition={{ duration: 26, repeat: Infinity, ease: "linear" }}
            className="absolute w-[300px] h-[300px] sm:w-[380px] sm:h-[380px] rounded-full border border-dashed border-cyan-400/15 dark:border-cyan-500/15 pointer-events-none"
          />

          {/* Glow blob behind photo */}
          <div className="absolute w-64 h-72 bg-violet-500/20 dark:bg-violet-600/20 rounded-full blur-[60px] pointer-events-none" />
          <div className="absolute w-48 h-64 bg-cyan-500/15 dark:bg-cyan-500/15 rounded-full blur-[50px] translate-x-8 translate-y-4 pointer-events-none" />

          {/* Photo frame card */}
          <motion.div
            whileHover={{ scale: 1.03, rotateY: 4, rotateX: -3 }}
            transition={{ type: "spring", stiffness: 200, damping: 18 }}
            style={{ transformStyle: "preserve-3d", perspective: 900 }}
            className="relative z-10 w-[260px] sm:w-[310px]"
          >
            {/* Glassmorphism card border */}
            <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-white/30 dark:border-white/10 bg-gradient-to-br from-white/50 via-slate-100/30 to-white/10 dark:from-white/5 dark:via-white/3 dark:to-transparent backdrop-blur-sm">
              {/* Shimmer top edge */}
              <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-violet-400/60 to-transparent z-20" />
              <div className="absolute bottom-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-cyan-400/40 to-transparent z-20" />

              {/* The portrait */}
              <div className="relative w-full aspect-[3/4] overflow-hidden">
                <Image
                  src="/profile2.jpg"
                  alt="Rithishwaran K — Builder, Founder & AI Engineer"
                  fill
                  priority
                  className="object-cover object-top"
                  sizes="(max-width: 768px) 260px, 310px"
                />
                {/* Subtle gradient overlay at bottom for card footer readability */}
                <div className="absolute bottom-0 left-0 right-0 h-28 bg-gradient-to-t from-black/80 via-black/30 to-transparent z-10" />

                {/* Name + title overlay on photo */}
                <div className="absolute bottom-4 left-4 right-4 z-20">
                  <p className="text-white font-black text-lg tracking-tight uppercase leading-tight drop-shadow-lg">
                    RITHISHWARAN K
                  </p>
                  <p className="text-cyan-300 font-mono text-[11px] uppercase tracking-widest drop-shadow">
                    Builder · Founder · AI Engineer
                  </p>
                </div>

                {/* Top-left badge */}
                <div className="absolute top-4 left-4 z-20 flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20">
                  <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="text-white font-mono text-[10px] uppercase tracking-wider font-bold">LIVE</span>
                </div>
              </div>
            </div>

            {/* Floating info chips */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7, duration: 0.6 }}
              className="absolute -left-12 top-1/4 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#151515]/95 border border-violet-200 dark:border-violet-500/30 backdrop-blur-md shadow-xl pointer-events-none hidden sm:flex items-center gap-2"
            >
              <span className="text-violet-600 dark:text-violet-400 font-mono text-[10px] font-bold">APEX LABS</span>
              <ArrowUpRight className="w-3 h-3 text-violet-500" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.9, duration: 0.6 }}
              className="absolute -right-10 bottom-1/3 px-3 py-1.5 rounded-xl bg-white/95 dark:bg-[#151515]/95 border border-cyan-200 dark:border-cyan-500/30 backdrop-blur-md shadow-xl pointer-events-none hidden sm:flex items-center gap-2"
            >
              <span className="text-cyan-600 dark:text-cyan-400 font-mono text-[10px] font-bold">LLM BUILDER</span>
              <Cpu className="w-3 h-3 text-cyan-500" />
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};
