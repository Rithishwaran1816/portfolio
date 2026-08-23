"use client";

import React, { useState } from "react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { Sprout, Activity, ShieldCheck, ArrowRight, TrendingUp, Sparkles, CheckCircle2 } from "lucide-react";

export const AgriTrustInteractiveCard: React.FC = () => {
  const [trustScore, setTrustScore] = useState(88);
  const [activeStage, setActiveStage] = useState(2);

  const stages = [
    { name: "FARM DATA", detail: "Soil moisture (38%), ambient humidity (64%), temperature (26°C)." },
    { name: "ANALYSIS", detail: "Computer vision detects zero leaf blight; Nitrogen balance is optimal." },
    { name: "TRUST SCORE", detail: "Verified batch integrity index calculated at 88/100." },
    { name: "INSIGHTS", detail: "Harvest recommended in 72 hours for peak marketplace valuation." },
    { name: "SMART DECISIONS", detail: "Direct farmer-to-buyer smart contract pre-authorized." },
  ];

  return (
    <GlowingCard
      id="agritrust"
      glowColor="rgba(16, 185, 129, 0.2)"
      className="p-6 sm:p-10 border border-emerald-300 dark:border-emerald-500/20 bg-white dark:bg-[#090E0C]/90 shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Project Info */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-emerald-100 dark:bg-emerald-950/70 text-emerald-800 dark:text-emerald-400 font-mono text-[10px] tracking-widest border border-emerald-300 dark:border-emerald-500/30 font-bold">
              02 — AGRITECH INTELLIGENCE
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-neutral-500 font-semibold">MACHINE LEARNING</span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              AGRITRUST
            </h3>
            <p className="text-sm font-mono text-emerald-600 dark:text-emerald-400 font-bold tracking-wider mt-1">
              DATA. TRUST. AGRICULTURE.
            </p>
          </div>

          <p className="text-slate-600 dark:text-neutral-300 text-sm font-light leading-relaxed">
            An AI-driven agricultural ecosystem integrating soil telemetry, computer vision leaf diagnostics, and predictive trust scoring to validate crop batch quality for transparent market financing.
          </p>

          {/* Interactive Decision Flow */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-bold">
              INTERACTIVE AI DECISION FLOW:
            </span>
            <div className="grid grid-cols-2 sm:grid-cols-5 gap-1.5 font-mono text-[10px]">
              {stages.map((stage, idx) => (
                <button
                  key={stage.name}
                  onClick={() => {
                    sound.playHover();
                    setActiveStage(idx);
                  }}
                  className={`p-2 rounded-lg text-center border transition-all cursor-pointer ${
                    activeStage === idx
                      ? "bg-emerald-100 dark:bg-emerald-950/70 border-emerald-400 text-emerald-900 dark:text-emerald-300 shadow-sm font-bold"
                      : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  0{idx + 1}. {stage.name}
                </button>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/20 border border-emerald-200 dark:border-emerald-500/20 text-xs font-mono text-emerald-900 dark:text-emerald-200">
              <span className="text-emerald-600 dark:text-emerald-400 font-bold">STATUS: </span>
              {stages[activeStage].detail}
            </div>
          </div>

          {/* Tech Stack Tags */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {["Python", "TensorFlow", "Flask", "Pandas", "Computer Vision", "REST APIs"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-[10px] text-slate-700 dark:text-neutral-300 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Interactive Dashboard Simulation */}
        <div className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-[#060A08] border border-emerald-300 dark:border-emerald-500/30 p-6 flex flex-col gap-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-emerald-200 dark:border-emerald-500/20">
            <div className="flex items-center gap-2">
              <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span className="text-xs font-mono text-emerald-800 dark:text-emerald-300 font-bold tracking-wider">
                AGRITRUST TELEMETRY RADAR
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-emerald-600 dark:text-emerald-400 font-bold">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-ping" />
              LIVE TELEMETRY
            </span>
          </div>

          {/* Trust Score Gauge Display */}
          <div className="flex flex-col sm:flex-row items-center justify-between gap-6 p-4 rounded-xl bg-white dark:bg-emerald-950/20 border border-slate-200 dark:border-emerald-500/20 shadow-sm">
            <div className="flex items-center gap-4">
              <div className="w-16 h-16 rounded-full border-2 border-emerald-500 flex items-center justify-center bg-emerald-50 dark:bg-emerald-950/60 shadow-md">
                <span className="text-2xl font-mono font-black text-slate-900 dark:text-white">{trustScore}</span>
              </div>
              <div>
                <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider block font-semibold">
                  CROP TRUST INDEX
                </span>
                <span className="text-xs font-mono text-emerald-700 dark:text-emerald-400 font-bold flex items-center gap-1">
                  <ShieldCheck className="w-3.5 h-3.5" />
                  VERIFIED GRADE A+
                </span>
              </div>
            </div>

            <div className="w-full sm:w-48 space-y-1.5">
              <div className="flex justify-between text-[10px] font-mono text-slate-600 dark:text-neutral-400 font-semibold">
                <span>SIMULATE QUALITY</span>
                <span className="text-emerald-700 dark:text-emerald-300">{trustScore}%</span>
              </div>
              <input
                type="range"
                min="40"
                max="99"
                value={trustScore}
                onChange={(e) => setTrustScore(Number(e.target.value))}
                className="w-full h-1.5 bg-emerald-200 dark:bg-emerald-950 rounded-lg appearance-none cursor-pointer accent-emerald-500"
              />
            </div>
          </div>

          {/* Telemetry Metrics Grid */}
          <div className="grid grid-cols-3 gap-3 font-mono text-xs">
            <div className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm">
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 block font-semibold">SOIL MOISTURE</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">38.4 %</span>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm">
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 block font-semibold">LEAF INTEGRITY</span>
              <span className="text-sm font-bold text-emerald-600 dark:text-emerald-400">96.2 %</span>
            </div>
            <div className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 shadow-sm">
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 block font-semibold">HARVEST WINDOW</span>
              <span className="text-sm font-bold text-cyan-600 dark:text-cyan-400">72 HRS</span>
            </div>
          </div>
        </div>
      </div>
    </GlowingCard>
  );
};
