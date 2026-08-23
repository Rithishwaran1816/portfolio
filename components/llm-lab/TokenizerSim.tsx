"use client";

import React, { useState } from "react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { Terminal, Sparkles, Layers, RefreshCw } from "lucide-react";

export const TokenizerSim: React.FC = () => {
  const [inputText, setInputText] = useState("Hello world! Transforming thoughts into tokens.");

  // Simple token parser simulation that mirrors BPE behavior
  const tokens = inputText
    .trim()
    .split(/(\s+|[.,!?;:])/g)
    .filter((t) => t.length > 0)
    .map((t, idx) => {
      const hash = t.split("").reduce((acc, char) => acc + char.charCodeAt(0), 0);
      const id = 1000 + (hash * 37) % 8999;
      const vector = [
        ((hash % 100) / 100 - 0.5).toFixed(3),
        (((hash * 3) % 100) / 100 - 0.5).toFixed(3),
        (((hash * 7) % 100) / 100 - 0.5).toFixed(3),
        "...",
        (((hash * 13) % 100) / 100 - 0.5).toFixed(3),
      ];
      return { text: t, id, vector, isSpace: /^\s+$/.test(t) };
    });

  const samplePrompts = [
    "Hello world! Transforming thoughts into tokens.",
    "Attention is all you need to learn.",
    "Self-attention dynamically calculates query and key dot products.",
    "Building an LLM from scratch in PyTorch.",
  ];

  return (
    <GlowingCard
      glowColor="rgba(139, 92, 246, 0.25)"
      className="p-6 sm:p-8 border border-violet-300 dark:border-violet-500/30 bg-white dark:bg-[#0C0B12]/90 flex flex-col gap-6 shadow-xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Terminal className="w-5 h-5 text-violet-600 dark:text-violet-400" />
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">
              STAGE 01 & 02: LIVE TOKENIZATION & EMBEDDING LAB
            </h3>
            <p className="text-xs text-slate-600 dark:text-neutral-400 font-sans">
              Type custom text to deconstruct sentences into numerical token indices and high-dimensional vectors.
            </p>
          </div>
        </div>

        <span className="text-xs font-mono text-cyan-700 dark:text-cyan-400 px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/60 border border-cyan-300 dark:border-cyan-500/30 font-bold">
          VOCAB: 50,257 TOKENS
        </span>
      </div>

      {/* Input Box */}
      <div className="flex flex-col gap-2">
        <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 uppercase tracking-wider font-bold">
          TEST STRING INPUT:
        </label>
        <textarea
          rows={2}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value);
            sound.playHover();
          }}
          placeholder="Type any sentence here..."
          className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-white/15 focus:border-violet-500 focus:outline-none text-slate-900 dark:text-white font-mono text-sm leading-relaxed"
        />

        {/* Quick Sample Chips */}
        <div className="flex flex-wrap items-center gap-1.5 pt-1">
          <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500 mr-1 font-semibold">SAMPLES:</span>
          {samplePrompts.map((p) => (
            <button
              key={p}
              onClick={() => {
                sound.playClick();
                setInputText(p);
              }}
              className="text-[10px] font-mono px-2 py-1 rounded bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-700 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white border border-slate-200 dark:border-white/5 transition-all truncate max-w-[220px] cursor-pointer"
            >
              {p}
            </button>
          ))}
        </div>
      </div>

      {/* Visualized Tokens */}
      <div className="space-y-3">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-neutral-400 font-bold">
            TOKENIZED CHUNKS ({tokens.length} TOKENS GENERATED)
          </span>
          <span className="text-violet-600 dark:text-violet-400 font-bold">INTEGER ENCODING</span>
        </div>

        <div className="flex flex-wrap gap-2 p-4 rounded-xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-white/10 min-h-[90px] items-center">
          {tokens.map((token, idx) => (
            <div
              key={idx}
              className={`flex flex-col items-center px-3 py-2 rounded-lg border transition-all ${
                token.isSpace
                  ? "bg-slate-200 dark:bg-neutral-900/60 border-slate-300 dark:border-neutral-700 text-slate-600 dark:text-neutral-500"
                  : "bg-violet-100 dark:bg-violet-950/60 border-violet-300 dark:border-violet-500/50 text-violet-950 dark:text-white shadow-sm font-bold"
              }`}
            >
              <span className="text-xs font-mono font-bold">
                {token.isSpace ? "␣ (space)" : `[${token.text}]`}
              </span>
              <span className="text-[9px] font-mono text-cyan-700 dark:text-cyan-300 mt-0.5 font-semibold">
                ID: {token.id}
              </span>
            </div>
          ))}
        </div>
      </div>

      {/* Simulated Embedding Matrix Vector */}
      <div className="space-y-2 font-mono text-xs">
        <span className="text-slate-700 dark:text-neutral-400 font-bold block text-[11px] uppercase tracking-wider">
          HIGH-DIMENSIONAL CONTINUOUS EMBEDDING MATRIX (D_MODEL = 512 + POSITIONAL SIN/COS):
        </span>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-2">
          {tokens.slice(0, 6).map((t, idx) => (
            <div
              key={idx}
              className="p-2.5 rounded-lg bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 text-[10px] text-slate-800 dark:text-neutral-300"
            >
              <div className="flex justify-between text-cyan-700 dark:text-cyan-400 font-bold mb-1">
                <span>token_{idx} ({t.text})</span>
                <span>id_{t.id}</span>
              </div>
              <p className="text-slate-500 dark:text-neutral-500 truncate">
                [{t.vector.join(", ")}]
              </p>
            </div>
          ))}
        </div>
      </div>
    </GlowingCard>
  );
};
