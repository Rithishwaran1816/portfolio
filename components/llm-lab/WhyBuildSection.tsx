"use client";

import React from "react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { Sparkles, Brain, Cpu, Terminal, Compass, Flame, ShieldAlert } from "lucide-react";

export const WhyBuildSection: React.FC = () => {
  const pillars = [
    {
      icon: <Brain className="w-5 h-5 text-violet-400" />,
      title: "BEYOND BLACK-BOX APIS",
      desc: "Anyone can call an API endpoint. True engineering mastery comes from deconstructing the tensor transformations, residual streams, and backpropagation gradients that make language models function.",
    },
    {
      icon: <Cpu className="w-5 h-5 text-cyan-400" />,
      title: "SCALED SELF-ATTENTION MECHANICS",
      desc: "Understanding why Query-Key dot products scaled by √d_k prevent softmax saturation, how multi-head attention learns distinct syntactic subspaces, and how causal masks enforce autoregression.",
    },
    {
      icon: <Terminal className="w-5 h-5 text-emerald-400" />,
      title: "TRAINING CONVERGENCE & LOSS DYNAMICS",
      desc: "Observing cross-entropy loss descent, learning rate warmup schedules, gradient clipping, and vocabulary perplexity firsthand during training iterations.",
    },
    {
      icon: <Compass className="w-5 h-5 text-pink-400" />,
      title: "FIRST-PRINCIPLES FOUNDATION",
      desc: "Building a rock-solid mental model of AI. When new architectures emerge (State-Space Models, MoE, Reasoning Distillations), understanding the core transformer makes evaluating innovations effortless.",
    },
  ];

  return (
    <div className="flex flex-col gap-8">
      <div className="space-y-3">
        <div className="flex items-center gap-2">
          <Flame className="w-4 h-4 text-violet-600 dark:text-violet-400" />
          <span className="text-xs font-mono text-violet-600 dark:text-violet-400 uppercase tracking-widest font-bold">
            ENGINEERING PHILOSOPHY & MOTIVATION
          </span>
        </div>
        <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
          WHY BUILD <span className="text-gradient-violet">MY OWN LLM?</span>
        </h2>
      </div>

      <GlowingCard
        glowColor="rgba(139, 92, 246, 0.15)"
        className="p-6 sm:p-10 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0C0B12]/90 flex flex-col gap-8 shadow-xl"
      >
        {/* Core Statement */}
        <div className="p-5 rounded-2xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-200 text-sm sm:text-base font-light leading-relaxed">
          <p className="mb-3">
            <strong className="text-slate-900 dark:text-white font-bold">
              &quot;I wanted to understand what happens behind the prompt.&quot;
            </strong>
          </p>
          <p>
            This project is an authentic, deep-dive engineering experiment. It is not an exaggerated attempt to claim parity with frontier commercial models trained on thousands of GPUs. Rather, it is an exhaustive first-principles journey to write every tensor equation, construct every sub-layer, and understand the profound mechanics that convert raw electricity and matrix multiplication into human language comprehension.
          </p>
        </div>

        {/* 4 Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 font-mono text-xs">
          {pillars.map((p) => (
            <div
              key={p.title}
              className="p-5 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 flex flex-col gap-2.5 hover:border-violet-400 transition-colors shadow-sm"
            >
              <div className="flex items-center gap-3">
                {p.icon}
                <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-wider">
                  {p.title}
                </h4>
              </div>
              <p className="text-slate-600 dark:text-neutral-400 font-sans text-xs font-light leading-relaxed">
                {p.desc}
              </p>
            </div>
          ))}
        </div>

        {/* Responsible Engineering Statement */}
        <div className="p-4 rounded-xl bg-violet-50 dark:bg-violet-950/20 border border-violet-200 dark:border-violet-500/30 flex items-start gap-3 text-xs font-mono text-violet-900 dark:text-violet-200">
          <ShieldAlert className="w-4 h-4 text-violet-600 dark:text-violet-400 shrink-0 mt-0.5" />
          <div>
            <span className="font-bold text-slate-900 dark:text-white block mb-0.5">
              EDUCATIONAL & FIRST-PRINCIPLES SCOPE:
            </span>
            <p className="text-slate-600 dark:text-neutral-300 font-sans font-light">
              Built and evaluated on curated datasets using PyTorch with custom tokenizers, multi-head attention weights, and autoregressive generation loops. Code and mathematical deconstructions are open for academic inquiry.
            </p>
          </div>
        </div>
      </GlowingCard>
    </div>
  );
};

