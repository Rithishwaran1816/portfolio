"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { Transformer3DMesh } from "@/components/3d/Transformer3DMesh";
import { Button3D } from "@/components/ui/Button3D";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { ArrowRight, Cpu, Layers, Sparkles, Terminal, CheckCircle2 } from "lucide-react";

export const LLMFlagshipSection: React.FC = () => {
  const [activeStep, setActiveStep] = useState(0);

  const pipelineSteps = [
    { title: "TOKENIZATION", desc: "Byte-pair encoding converts raw text strings into discrete numerical tokens." },
    { title: "EMBEDDINGS", desc: "Maps discrete integers to continuous vector space + sinusoidal positional coordinates." },
    { title: "SELF-ATTENTION", desc: "Computes dynamic Query/Key/Value matrix correlations across all sequence tokens." },
    { title: "TRANSFORMER BLOCK", desc: "Multi-Head Attention + Residual Add + Pre-LayerNorm + Feed-Forward MLP." },
    { title: "AUTOREGRESSIVE OUTPUT", desc: "Linear projection & Softmax logits compute next-token probability distribution." },
  ];

  return (
    <section id="work" className="relative py-28 px-6 sm:px-12 bg-slate-100/60 dark:bg-[#0A0A0A] overflow-hidden border-t border-b border-slate-200 dark:border-white/[0.06] transition-colors duration-300">
      {/* Glow Backdrops */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[700px] h-[700px] bg-violet-600/10 rounded-full blur-[160px] pointer-events-none" />
      <div className="absolute top-1/3 right-10 w-[500px] h-[500px] bg-cyan-500/10 rounded-full blur-[140px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Section Header with Flagship Badge */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-3">
              <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/80 border border-violet-300 dark:border-violet-500/40 text-violet-700 dark:text-violet-300 font-mono text-[11px] uppercase tracking-widest font-semibold flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>01 — FLAGSHIP PROJECT</span>
              </span>
              <span className="text-xs font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-wider font-semibold">
                CORE AI RESEARCH
              </span>
            </div>

            <h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-slate-900 dark:text-white tracking-tight leading-[1.02] uppercase">
              BUILDING <br />
              <span className="text-gradient-violet">MY OWN LLM.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              Exploring the architecture behind intelligent language systems — from tokenization and embeddings to transformer architectures, multi-head self-attention, neural networks, normalization, and output generation.
            </p>
          </div>
        </div>

        {/* Flagship Feature Container */}
        <GlowingCard
          glowColor="rgba(139, 92, 246, 0.2)"
          className="p-6 sm:p-10 border border-violet-300 dark:border-violet-500/30 bg-white dark:bg-[#0E0E12]/90 shadow-2xl"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
            {/* Left Interactive 3D Transformer Stack */}
            <div className="lg:col-span-7 relative flex flex-col items-center justify-center rounded-2xl bg-slate-50 dark:bg-[#09090D] border border-slate-200 dark:border-white/10 p-4 min-h-[380px] sm:min-h-[480px] overflow-hidden group shadow-inner">
              <div className="absolute top-4 left-4 z-20 flex items-center gap-2">
                <Terminal className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                <span className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 uppercase tracking-wider font-semibold">
                  TRANSFORMER TOPOLOGY // 3D STACK
                </span>
              </div>

              {/* 3D Transformer Canvas */}
              <Transformer3DMesh interactive={true} />
            </div>

            {/* Right Architecture Breakdown & Step Explorer */}
            <div className="lg:col-span-5 flex flex-col gap-6">
              <div className="space-y-1">
                <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                  FIRST-PRINCIPLES DECONSTRUCTION
                </span>
                <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                  What Happens Behind The Prompt?
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 dark:text-neutral-400 font-light leading-relaxed">
                  Rather than consuming frontier models through API endpoints, this project builds and trains an educational decoder-only transformer from scratch in PyTorch to understand every mathematical tensor transformation.
                </p>
              </div>

              {/* Interactive Pipeline Steps */}
              <div className="space-y-2 font-mono text-xs">
                {pipelineSteps.map((step, idx) => (
                  <button
                    key={step.title}
                    onClick={() => {
                      sound.playHover();
                      setActiveStep(idx);
                    }}
                    className={`w-full text-left p-3 rounded-xl transition-all border cursor-pointer ${
                      activeStep === idx
                        ? "bg-violet-50 dark:bg-violet-950/40 border-violet-400 dark:border-violet-500/60 text-slate-900 dark:text-white shadow-md font-semibold"
                        : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/[0.06] text-slate-600 dark:text-neutral-400 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-neutral-200"
                    }`}
                  >
                    <div className="flex items-center justify-between font-semibold">
                      <span className="flex items-center gap-2">
                        <span className="text-[10px] text-violet-600 dark:text-violet-400 font-mono">
                          0{idx + 1}.
                        </span>
                        <span>{step.title}</span>
                      </span>
                      {activeStep === idx && (
                        <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                      )}
                    </div>
                    {activeStep === idx && (
                      <motion.p
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        className="text-[11px] text-slate-600 dark:text-neutral-300 font-sans mt-1.5 font-normal leading-relaxed"
                      >
                        {step.desc}
                      </motion.p>
                    )}
                  </button>
                ))}
              </div>

              {/* Architecture Tech Pills */}
              <div className="flex flex-wrap gap-1.5 pt-2">
                {[
                  "PyTorch",
                  "Self-Attention (QKV)",
                  "BPE Tokenizer",
                  "LayerNorm",
                  "Residual Streams",
                  "Softmax Logits",
                ].map((item) => (
                  <span
                    key={item}
                    className="px-2.5 py-1 rounded-md bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-[10px] text-slate-700 dark:text-neutral-300 font-semibold"
                  >
                    {item}
                  </span>
                ))}
              </div>

              {/* CTA to Dedicated LLM Lab */}
              <div className="pt-2">
                <Button3D
                  href="/llm-lab"
                  variant="primary"
                  size="md"
                  className="w-full"
                  icon={<ArrowRight className="w-4 h-4" />}
                >
                  ENTER THE DEDICATED LLM LAB
                </Button3D>
              </div>
            </div>
          </div>
        </GlowingCard>
      </div>
    </section>
  );
};
