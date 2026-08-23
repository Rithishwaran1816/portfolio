"use client";

import React from "react";
import Link from "next/link";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { Button3D } from "@/components/ui/Button3D";
import { sound } from "@/lib/audio";
import { Sparkles, ArrowRight, Globe, Bot, Cpu, Zap, Share2 } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export const ApexPreviewSection: React.FC = () => {
  const services = [
    { icon: <Globe className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />, label: "WEB SOLUTIONS", desc: "Next.js & Interactive 3D" },
    { icon: <Bot className="w-4 h-4 text-violet-600 dark:text-violet-400" />, label: "CHATBOT DEVELOPMENT", desc: "LLM & RAG Automation" },
    { icon: <Cpu className="w-4 h-4 text-pink-600 dark:text-pink-400" />, label: "MACHINE LEARNING", desc: "Predictive Intelligence" },
    { icon: <Zap className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />, label: "DIGITAL SOLUTIONS", desc: "Custom Business Tools" },
    { icon: <Share2 className="w-4 h-4 text-amber-600 dark:text-amber-400" />, label: "SOCIAL MEDIA", desc: "Visual Brand Storytelling" },
  ];

  return (
    <section className="relative py-28 px-6 sm:px-12 bg-slate-50 dark:bg-[#060A0E] overflow-hidden border-t border-cyan-300 dark:border-cyan-500/20 transition-colors duration-300">
      <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
        <GlowingCard
          glowColor="rgba(0, 240, 255, 0.2)"
          className="p-8 sm:p-14 border border-cyan-300 dark:border-cyan-500/30 bg-white dark:bg-[#091118]/95 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7 flex flex-col items-start gap-6">
              <div className="flex items-center gap-2">
                <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/50 text-cyan-800 dark:text-cyan-300 font-mono text-[11px] uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-sm">
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                  <span>FOUNDER // DIGITAL INITIATIVE</span>
                </span>
              </div>

              <h2 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-[1.05]">
                APEX LABS. <br />
                <span className="text-gradient-cyan">BUILDING FOR REAL IDEAS.</span>
              </h2>

              <p className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base font-light leading-relaxed max-w-xl">
                Apex Labs is a digital technology initiative focused on transforming ideas into modern websites, intelligent chatbots, machine learning projects, digital business solutions, and engaging social media experiences.
              </p>

              <div className="flex flex-wrap items-center gap-4 pt-2">
                <Button3D
                  href="/apex-labs"
                  variant="accent"
                  size="md"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  EXPLORE APEX LABS
                </Button3D>

                <a
                  href="https://www.instagram.com/apex_.labs?igsi=MXF3bXpvYTExemxpaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={() => sound.playClick()}
                  className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-pink-300 dark:border-pink-500/30 hover:border-pink-500 text-pink-700 dark:text-pink-300 font-mono text-xs uppercase tracking-wider flex items-center gap-2 transition-all hover:bg-pink-50 dark:hover:bg-pink-950/20 font-bold"
                >
                  <Icons.Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <span>@apex_.labs</span>
                </a>
              </div>
            </div>

            {/* Right 5 Services Quick Cards */}
            <div className="lg:col-span-5 flex flex-col gap-2.5">
              <span className="text-[10px] font-mono text-cyan-700 dark:text-cyan-400 uppercase tracking-widest font-bold pb-1">
                CORE AGENCY CAPABILITIES:
              </span>
              {services.map((srv, idx) => (
                <Link
                  key={srv.label}
                  href="/apex-labs"
                  onClick={() => sound.playClick()}
                  className="p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 hover:border-cyan-400 hover:bg-cyan-50 dark:hover:bg-cyan-950/20 flex items-center justify-between transition-all group shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    {srv.icon}
                    <div className="flex flex-col">
                      <span className="text-xs font-mono font-bold text-slate-900 dark:text-white group-hover:text-cyan-700 dark:group-hover:text-cyan-300 transition-colors">
                        0{idx + 1}. {srv.label}
                      </span>
                      <span className="text-[10px] font-sans text-slate-500 dark:text-neutral-400">
                        {srv.desc}
                      </span>
                    </div>
                  </div>
                  <ArrowRight className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-1 transition-all" />
                </Link>
              ))}
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
};
