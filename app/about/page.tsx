import React from "react";
import Image from "next/image";
import { JourneyTimeline } from "@/components/about/JourneyTimeline";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { Button3D } from "@/components/ui/Button3D";
import { Sparkles, Terminal, ArrowLeft, ArrowRight, Code, Cpu, Database, Rocket } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import Link from "next/link";

export const metadata = {
  title: "ABOUT — Rithishwaran | Curious. Building. Evolving.",
  description:
    "Learn about Rithishwaran: Technology Builder, Founder of Apex Labs, AI & LLM Explorer, and Full Stack Engineer.",
};

export default function AboutPage() {
  const pillars = [
    { title: "FOUNDER — APEX LABS", desc: "Leading a digital initiative transforming ideas into production websites, chatbots, and ML tools.", icon: <Rocket className="w-5 h-5 text-cyan-400" /> },
    { title: "TECHNOLOGY BUILDER", desc: "Engineering end-to-end full stack products with modern Next.js, React, Node.js, and Flutter.", icon: <Code className="w-5 h-5 text-violet-400" /> },
    { title: "AI & LLM EXPLORER", desc: "Deconstructing transformers, attention matrices, and autoregressive architectures from first principles.", icon: <Cpu className="w-5 h-5 text-pink-400" /> },
    { title: "DATA & PRODUCT ENTHUSIAST", desc: "Extracting actionable truth through statistical analysis, Pandas/NumPy modeling, and GIS telemetry.", icon: <Database className="w-5 h-5 text-emerald-400" /> },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 bg-slate-50 dark:bg-[#070707] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO DIGITAL UNIVERSE</span>
        </Link>

        {/* Master Headline & Profile Picture Showcase */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-200 dark:border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/80 border border-violet-300 dark:border-violet-500/40 text-violet-800 dark:text-violet-300 font-mono text-[11px] uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>BUILDER IDENTITY & PHILOSOPHY</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-[1.04]">
              CURIOUS. <br />
              <span className="text-slate-500 dark:text-neutral-400">BUILDING.</span> <br />
              <span className="text-gradient-dual">EVOLVING.</span>
            </h1>

            <p className="text-slate-600 dark:text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              I am a technology student, builder, and founder obsessed with understanding digital systems at their most fundamental level. From low-level C memory concepts to high-dimensional transformer attention tensors and enterprise web architectures.
            </p>

            <div className="flex gap-3 pt-2">
              <Button3D href="/contact" variant="primary" size="md">
                GET IN TOUCH
              </Button3D>
              <Button3D href="/llm-lab" variant="secondary" size="md">
                VIEW LLM LAB
              </Button3D>
            </div>
          </div>

          {/* Profile Picture Card */}
          <div className="relative group shrink-0">
            <div className="absolute -inset-1 bg-gradient-to-r from-violet-600 via-pink-500 to-cyan-400 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-500"></div>
            <div className="relative w-64 sm:w-72 rounded-2xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-white/15 p-4 flex flex-col items-center text-center gap-3 shadow-2xl">
              <div className="relative w-full aspect-[3/4] rounded-xl overflow-hidden shadow-inner">
                <Image
                  src="/profile.jpg"
                  alt="Rithishwaran Profile"
                  fill
                  className="object-cover object-top group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              <div className="w-full flex items-center justify-between pt-1 font-mono text-xs">
                <div className="flex flex-col text-left">
                  <span className="font-bold text-slate-900 dark:text-white text-sm">RITHISHWARAN</span>
                  <span className="text-[10px] text-slate-500 dark:text-neutral-400">BUILDER & FOUNDER</span>
                </div>

                <a
                  href="https://www.instagram.com/responsible_boy_1821?igsi=NGRxZWtsYjd0dDAy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-xl bg-pink-50 dark:bg-pink-950/40 text-pink-600 dark:text-pink-400 border border-pink-200 dark:border-pink-500/30 hover:scale-110 transition-all cursor-pointer"
                  title="Connect on Instagram"
                >
                  <Icons.Instagram className="w-4 h-4" />
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* 4 Identity Pillars Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {pillars.map((p) => (
            <GlowingCard
              key={p.title}
              className="p-5 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E0E12]/90 flex flex-col gap-3 shadow-sm dark:shadow-none"
            >
              <div className="p-2.5 rounded-lg bg-slate-100 dark:bg-white/5 w-fit border border-slate-200 dark:border-white/10">
                {p.icon}
              </div>
              <h3 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
                {p.title}
              </h3>
              <p className="text-xs text-slate-600 dark:text-neutral-400 font-light leading-relaxed">
                {p.desc}
              </p>
            </GlowingCard>
          ))}
        </div>

        {/* Vertical Storytelling Timeline */}
        <div className="space-y-6 pt-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
              CHRONOLOGICAL TRAJECTORY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              JOURNEY TIMELINE
            </h2>
            <p className="text-xs text-slate-500 dark:text-neutral-400 font-mono">
              From early programming exploration to building custom LLMs and founding Apex Labs.
            </p>
          </div>

          <JourneyTimeline />
        </div>

        {/* Bottom CTA */}
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0E1218] border border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-lg">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white uppercase tracking-tight">
              LOOKING FOR A TECHNOLOGY BUILDER?
            </h3>
            <p className="text-xs text-slate-600 dark:text-neutral-400">
              Open to engineering challenges, AI research discussions, and digital transformations.
            </p>
          </div>

          <Button3D
            href="/contact"
            variant="accent"
            size="md"
            icon={<ArrowRight className="w-4 h-4" />}
          >
            LET&apos;S CONNECT
          </Button3D>
        </div>
      </div>
    </div>
  );
}

