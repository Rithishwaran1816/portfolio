"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { HeroNeuralCore } from "@/components/3d/HeroNeuralCore";
import { Button3D } from "@/components/ui/Button3D";
import { TerminalHUD } from "@/components/ui/TerminalHUD";
import { ArrowDown, Cpu, Sparkles, GraduationCap, MapPin, Star, Calendar, BookOpen, Zap } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

const infoBadges = [
  {
    icon: GraduationCap,
    label: "DEGREE",
    value: "B.Tech — Information Technology",
    color: "violet",
  },
  {
    icon: BookOpen,
    label: "YEAR",
    value: "3rd Year · Batch 2024–2028",
    color: "cyan",
  },
  {
    icon: MapPin,
    label: "INSTITUTION",
    value: "NPR College of Engineering & Technology",
    color: "emerald",
  },
  {
    icon: Star,
    label: "FOCUS AREA",
    value: "AI · Full Stack · Data Engineering",
    color: "amber",
  },
  {
    icon: Zap,
    label: "VENTURE",
    value: "Founder @ Apex Labs",
    color: "pink",
  },
  {
    icon: Calendar,
    label: "STATUS",
    value: "Open to Internships & Collaborations",
    color: "sky",
  },
];

const colorMap: Record<string, { badge: string; label: string; value: string; icon: string }> = {
  violet: {
    badge: "bg-violet-50 dark:bg-violet-950/40 border-violet-200 dark:border-violet-500/30",
    label: "text-violet-500 dark:text-violet-400",
    value: "text-violet-800 dark:text-violet-200",
    icon: "text-violet-600 dark:text-violet-400",
  },
  cyan: {
    badge: "bg-cyan-50 dark:bg-cyan-950/40 border-cyan-200 dark:border-cyan-500/30",
    label: "text-cyan-500 dark:text-cyan-400",
    value: "text-cyan-800 dark:text-cyan-200",
    icon: "text-cyan-600 dark:text-cyan-400",
  },
  emerald: {
    badge: "bg-emerald-50 dark:bg-emerald-950/40 border-emerald-200 dark:border-emerald-500/30",
    label: "text-emerald-500 dark:text-emerald-400",
    value: "text-emerald-800 dark:text-emerald-200",
    icon: "text-emerald-600 dark:text-emerald-400",
  },
  amber: {
    badge: "bg-amber-50 dark:bg-amber-950/40 border-amber-200 dark:border-amber-500/30",
    label: "text-amber-500 dark:text-amber-400",
    value: "text-amber-800 dark:text-amber-200",
    icon: "text-amber-600 dark:text-amber-400",
  },
  pink: {
    badge: "bg-pink-50 dark:bg-pink-950/40 border-pink-200 dark:border-pink-500/30",
    label: "text-pink-500 dark:text-pink-400",
    value: "text-pink-800 dark:text-pink-200",
    icon: "text-pink-600 dark:text-pink-400",
  },
  sky: {
    badge: "bg-sky-50 dark:bg-sky-950/40 border-sky-200 dark:border-sky-500/30",
    label: "text-sky-500 dark:text-sky-400",
    value: "text-sky-800 dark:text-sky-200",
    icon: "text-sky-600 dark:text-sky-400",
  },
};

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
            {/* Profile Avatar Badge — small corner photo */}
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

          {/* ── Info Card Grid ── */}
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.55, ease: [0.16, 1, 0.3, 1] }}
            className="w-full pt-2"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 w-full max-w-xl">
              {infoBadges.map((badge, i) => {
                const Icon = badge.icon;
                const c = colorMap[badge.color];
                return (
                  <motion.div
                    key={badge.label}
                    initial={{ opacity: 0, x: -12 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ duration: 0.45, delay: 0.6 + i * 0.07, ease: "easeOut" }}
                    className={`flex items-center gap-3 px-4 py-2.5 rounded-xl border backdrop-blur-sm ${c.badge} group hover:scale-[1.02] transition-transform duration-200 cursor-default`}
                  >
                    <span className={`shrink-0 p-1.5 rounded-lg bg-white/60 dark:bg-white/5 border border-white/40 dark:border-white/10 ${c.icon}`}>
                      <Icon className="w-3.5 h-3.5" />
                    </span>
                    <div className="min-w-0">
                      <span className={`block text-[9px] font-mono font-bold uppercase tracking-widest ${c.label}`}>
                        {badge.label}
                      </span>
                      <span className={`block text-[11px] sm:text-xs font-semibold truncate ${c.value}`}>
                        {badge.value}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </motion.div>
        </motion.div>

        {/* Right — 3D Neural Core Visualization (RESTORED) */}
        <motion.div
          initial={{ opacity: 0, scale: 0.85 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="lg:col-span-5 relative flex items-center justify-center"
        >
          <div className="relative w-full aspect-square max-w-[460px] flex items-center justify-center">
            {/* 3D Neural Core Globe Canvas */}
            <HeroNeuralCore />

            {/* Floating Orbiting Labels */}
            <div className="absolute top-4 -left-4 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[#121212]/90 border border-violet-300 dark:border-violet-500/30 backdrop-blur-md font-mono text-[10px] text-violet-700 dark:text-violet-300 shadow-xl pointer-events-none hidden sm:block">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">TENSOR_CORE:</span> ACTIVE (Q/K/V)
            </div>

            <div className="absolute bottom-6 -right-2 px-3 py-1.5 rounded-xl bg-white/90 dark:bg-[#121212]/90 border border-cyan-300 dark:border-cyan-500/30 backdrop-blur-md font-mono text-[10px] text-cyan-700 dark:text-cyan-300 shadow-xl pointer-events-none hidden sm:block">
              <span className="text-violet-600 dark:text-violet-400 font-bold">NODES:</span> 700+ SYNAPSES
            </div>

            {/* Small portrait photo — bottom-left corner of globe area */}
            <motion.div
              initial={{ opacity: 0, scale: 0.7 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.9, duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
              className="absolute bottom-2 left-0 z-20 hidden sm:block"
            >
              <div className="relative w-14 h-14 rounded-2xl overflow-hidden border-2 border-violet-400/60 dark:border-violet-500/60 shadow-[0_0_18px_rgba(139,92,246,0.45)] bg-black">
                <Image
                  src="/profile2.jpg"
                  alt="Rithishwaran K"
                  fill
                  className="object-cover object-top"
                />
                {/* Live pulse dot */}
                <span className="absolute top-1 right-1 flex h-2.5 w-2.5">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-emerald-400" />
                </span>
              </div>
              <p className="text-center text-[9px] font-mono font-bold text-violet-600 dark:text-violet-400 uppercase tracking-widest mt-1">
                RITHISHWARAN
              </p>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
