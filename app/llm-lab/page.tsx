import React from "react";
import { Transformer3DMesh } from "@/components/3d/Transformer3DMesh";
import { TokenizerSim } from "@/components/llm-lab/TokenizerSim";
import { AttentionVisualizer } from "@/components/llm-lab/AttentionVisualizer";
import { ArchitectureJourney } from "@/components/llm-lab/ArchitectureJourney";
import { WhyBuildSection } from "@/components/llm-lab/WhyBuildSection";
import { Button3D } from "@/components/ui/Button3D";
import { Cpu, ArrowLeft } from "lucide-react";
import Link from "next/link";

export const metadata = {
  title: "THE LLM LAB — Rithishwaran | Deconstructing Transformers from Scratch",
  description:
    "Explore the inner workings of Large Language Models: tokenization, embeddings, multi-head self-attention, layer normalization, and autoregressive generation.",
};

export default function LLMLabPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 bg-slate-50 dark:bg-[#070707] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Glow Backdrops */}
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

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-8 pb-8 border-b border-slate-200 dark:border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/80 border border-violet-300 dark:border-violet-500/40 text-violet-800 dark:text-violet-300 font-mono text-[11px] uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-sm">
                <Cpu className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400" />
                <span>EXPERIMENT // ARCHITECTURE LAB</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-[1.05]">
              THE LLM LAB. <br />
              <span className="text-gradient-violet">BEHIND THE PROMPT.</span>
            </h1>

            <p className="text-slate-600 dark:text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              &quot;I wanted to understand what happens behind the prompt.&quot; An interactive engineering journey deconstructing language models from tokenization algorithms to multi-head self-attention and decoder transformers.
            </p>
          </div>

          <div className="w-full lg:w-96 rounded-2xl bg-white dark:bg-[#0F0E16] border border-violet-300 dark:border-violet-500/30 p-4 min-h-[260px] flex items-center justify-center relative overflow-hidden shadow-2xl">
            <div className="absolute top-3 left-3 text-[10px] font-mono text-slate-500 dark:text-neutral-400 font-semibold">
              3D TRANSFORMER LAYER PROJECTION
            </div>
            <Transformer3DMesh interactive={true} />
          </div>
        </div>

        {/* Interactive Sandbox Components */}
        <div className="flex flex-col gap-14">
          {/* 1. Live Tokenizer & Embedding Lab */}
          <TokenizerSim />

          {/* 2. Scaled Self-Attention QKV Matrix Simulator */}
          <AttentionVisualizer />

          {/* 3. 10-Stage Guided Architecture Journey */}
          <div className="space-y-4 pt-4">
            <div className="space-y-1">
              <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                STEP-BY-STEP RECONSTRUCTION
              </span>
              <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
                COMPLETE 10-STAGE TRANSFORMER PIPELINE
              </h2>
            </div>
            <ArchitectureJourney />
          </div>

          {/* 4. Why Build My Own LLM Storytelling */}
          <WhyBuildSection />
        </div>

        {/* Footer CTAs */}
        <div className="p-8 rounded-2xl bg-white dark:bg-[#0F0F0F] border border-slate-200 dark:border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 text-center sm:text-left shadow-xl">
          <div className="space-y-1">
            <h3 className="text-xl font-bold text-slate-900 dark:text-white">
              Interested in AI & LLM Systems Collaboration?
            </h3>
            <p className="text-xs text-slate-600 dark:text-neutral-400">
              Discussing model architectures, custom RAG pipelines, or digital agentic solutions.
            </p>
          </div>

          <div className="flex gap-3">
            <Button3D href="/contact" variant="primary" size="md">
              START A CONVERSATION
            </Button3D>
            <Button3D href="/apex-labs" variant="secondary" size="md">
              EXPLORE APEX LABS
            </Button3D>
          </div>
        </div>
      </div>
    </div>
  );
}
