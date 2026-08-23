"use client";

import React, { useState } from "react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { Network } from "lucide-react";

export const AttentionVisualizer: React.FC = () => {
  const sentence = ["The", "neural", "network", "processes", "language", "with", "attention"];
  const [selectedTokenIdx, setSelectedTokenIdx] = useState(2);

  const attentionMatrix = [
    [0.40, 0.25, 0.20, 0.05, 0.04, 0.03, 0.03],
    [0.10, 0.35, 0.45, 0.04, 0.03, 0.01, 0.02],
    [0.15, 0.40, 0.30, 0.08, 0.04, 0.01, 0.02],
    [0.05, 0.10, 0.20, 0.35, 0.20, 0.05, 0.05],
    [0.02, 0.05, 0.15, 0.20, 0.38, 0.05, 0.15],
    [0.02, 0.02, 0.05, 0.10, 0.15, 0.30, 0.36],
    [0.05, 0.12, 0.25, 0.15, 0.20, 0.08, 0.15],
  ];

  const currentWeights = attentionMatrix[selectedTokenIdx];

  return (
    <GlowingCard
      glowColor="rgba(0, 240, 255, 0.2)"
      className="p-6 sm:p-8 border border-cyan-300 dark:border-cyan-500/30 bg-white dark:bg-[#0A0E14]/90 flex flex-col gap-6 shadow-xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Network className="w-5 h-5 text-cyan-600 dark:text-cyan-400" />
          <div>
            <h3 className="text-lg font-bold text-slate-900 dark:text-white font-mono">
              STAGE 05: DYNAMIC SELF-ATTENTION MATRIX (Q × Kᵀ / √d_k)
            </h3>
            <p className="text-xs text-slate-600 dark:text-neutral-400 font-sans">
              Click any token to compute real-time scaled dot-product attention correlation weights.
            </p>
          </div>
        </div>

        <div className="text-[11px] font-mono text-violet-700 dark:text-violet-300 px-3 py-1 rounded-full bg-violet-100 dark:bg-violet-950/60 border border-violet-300 dark:border-violet-500/30">
          HEAD: #1 OF 8 HEADS
        </div>
      </div>

      {/* Token Selector Row */}
      <div className="space-y-2">
        <span className="text-[10px] font-mono text-slate-600 dark:text-neutral-400 uppercase tracking-wider block font-bold">
          SELECT QUERY TOKEN:
        </span>
        <div className="flex flex-wrap gap-2">
          {sentence.map((word, idx) => (
            <button
              key={idx}
              onClick={() => {
                sound.playHover();
                setSelectedTokenIdx(idx);
              }}
              className={`px-4 py-2 rounded-xl font-mono text-xs transition-all border cursor-pointer ${
                selectedTokenIdx === idx
                  ? "bg-cyan-500 text-black font-bold border-cyan-300 shadow-lg scale-105"
                  : "bg-slate-100 dark:bg-white/5 border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:border-slate-300 dark:hover:border-white/30"
              }`}
            >
              {word}
            </button>
          ))}
        </div>
      </div>

      {/* Attention Score Correlation Visualizer */}
      <div className="space-y-3 p-4 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-200 dark:border-white/10">
        <div className="flex items-center justify-between text-xs font-mono">
          <span className="text-slate-700 dark:text-neutral-300 font-semibold">
            QUERY TOKEN: <span className="text-cyan-600 dark:text-cyan-400 font-bold">&quot;{sentence[selectedTokenIdx]}&quot;</span> ATTENDS TO:
          </span>
          <span className="text-slate-500 dark:text-neutral-500">SOFTMAX WEIGHT (%)</span>
        </div>

        <div className="space-y-2">
          {sentence.map((targetWord, idx) => {
            const weight = currentWeights[idx];
            const percent = Math.round(weight * 100);
            const isSelf = idx === selectedTokenIdx;

            return (
              <div key={idx} className="flex items-center gap-3 font-mono text-xs">
                <span className="w-24 text-slate-600 dark:text-neutral-400 truncate text-right font-semibold">
                  {targetWord}
                </span>

                <div className="flex-1 h-3 bg-slate-200 dark:bg-white/5 rounded-full overflow-hidden p-0.5 border border-slate-300 dark:border-white/10">
                  <div
                    className={`h-full rounded-full transition-all duration-300 ${
                      isSelf
                        ? "bg-gradient-to-r from-violet-500 to-indigo-400"
                        : "bg-gradient-to-r from-cyan-500 to-blue-500"
                    }`}
                    style={{ width: `${percent}%` }}
                  />
                </div>

                <span
                  className={`w-12 text-right font-bold ${
                    percent > 25 ? "text-cyan-600 dark:text-cyan-300" : "text-slate-500 dark:text-neutral-500"
                  }`}
                >
                  {percent}%
                </span>
              </div>
            );
          })}
        </div>
      </div>

      {/* Formula & Explanation */}
      <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-600 dark:text-neutral-400 flex flex-col sm:flex-row sm:items-center justify-between gap-2">
        <div>
          <span className="text-slate-900 dark:text-white font-semibold">Attention Formula: </span>
          <span className="text-cyan-600 dark:text-cyan-300">Softmax( (Q · Kᵀ) / √d_k ) · V</span>
        </div>
        <span className="text-[11px] text-slate-500 dark:text-neutral-500">
          Enables contextual dependency across arbitrary sequence distances.
        </span>
      </div>
    </GlowingCard>
  );
};
