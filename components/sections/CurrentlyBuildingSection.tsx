"use client";

import React from "react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { Activity, Radio, Cpu, Sprout, Droplets, Sparkles, Box } from "lucide-react";

export const CurrentlyBuildingSection: React.FC = () => {
  const activePipelines = [
    {
      id: "llm",
      title: "MY OWN LLM",
      focus: "Attention Head Optimization & Positional Embeddings",
      status: "IN DEVELOPMENT",
      statusColor: "text-violet-700 dark:text-violet-400 border-violet-300 dark:border-violet-500/30 bg-violet-100 dark:bg-violet-950/60 font-bold",
      icon: <Cpu className="w-4 h-4 text-violet-600 dark:text-violet-400" />,
      progress: "84%",
    },
    {
      id: "agritrust",
      title: "AGRITRUST",
      focus: "Crop Batch Trust Algorithm & Soil Moisture Telemetry",
      status: "MODEL TRAINING",
      statusColor: "text-emerald-700 dark:text-emerald-400 border-emerald-300 dark:border-emerald-500/30 bg-emerald-100 dark:bg-emerald-950/60 font-bold",
      icon: <Sprout className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />,
      progress: "91%",
    },
    {
      id: "aquaguard",
      title: "AQUAGUARD",
      focus: "GIS Epidemic Clustering & Ward Alert Integration",
      status: "FIELD TESTING",
      statusColor: "text-cyan-700 dark:text-cyan-400 border-cyan-300 dark:border-cyan-500/30 bg-cyan-100 dark:bg-cyan-950/60 font-bold",
      icon: <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />,
      progress: "76%",
    },
    {
      id: "digital-products",
      title: "INTELLIGENT PRODUCTS",
      focus: "AI Agent Workflows & Structured JSON Tool Execution",
      status: "PROTOTYPING",
      statusColor: "text-amber-700 dark:text-amber-400 border-amber-300 dark:border-amber-500/30 bg-amber-100 dark:bg-amber-950/60 font-bold",
      icon: <Box className="w-4 h-4 text-amber-600 dark:text-amber-400" />,
      progress: "65%",
    },
    {
      id: "apex-labs",
      title: "APEX LABS",
      focus: "Client Chatbots & 3D Interactive Web Experiences",
      status: "ACTIVE VENTURE",
      statusColor: "text-pink-700 dark:text-pink-400 border-pink-300 dark:border-pink-500/30 bg-pink-100 dark:bg-pink-950/60 font-bold",
      icon: <Sparkles className="w-4 h-4 text-pink-600 dark:text-pink-400" />,
      progress: "CONTINUOUS",
    },
  ];

  return (
    <section className="relative py-20 px-6 sm:px-12 bg-slate-50 dark:bg-[#070707] border-t border-slate-200 dark:border-white/[0.06] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col gap-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-500 opacity-75" />
              <span className="relative inline-flex rounded-full h-3 w-3 bg-emerald-500" />
            </span>
            <div className="flex flex-col">
              <span className="text-xs font-mono font-bold tracking-widest text-emerald-600 dark:text-emerald-400 uppercase">
                SYSTEM STATUS: ACTIVE & RUNNING
              </span>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white tracking-tight">
                CURRENTLY BUILDING & EXPERIMENTING
              </h3>
            </div>
          </div>

          <span className="text-xs font-mono text-slate-500 dark:text-neutral-500 font-semibold">
            ENGINEERING LOG // 2026 CYCLES
          </span>
        </div>

        {/* Live Active Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {activePipelines.map((item) => (
            <GlowingCard
              key={item.id}
              className="p-5 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0F0F0F]/90 flex flex-col justify-between gap-4 shadow-md"
            >
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2">
                  {item.icon}
                  <h4 className="text-sm font-mono font-bold text-slate-900 dark:text-white tracking-wider">
                    {item.title}
                  </h4>
                </div>
                <span
                  className={`text-[9px] font-mono px-2 py-0.5 rounded border ${item.statusColor}`}
                >
                  {item.status}
                </span>
              </div>

              <p className="text-xs text-slate-600 dark:text-neutral-300 font-light leading-relaxed">
                {item.focus}
              </p>

              <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between font-mono text-[11px]">
                <span className="text-slate-500 dark:text-neutral-500 font-semibold">CYCLE PROGRESS</span>
                <span className="text-slate-900 dark:text-neutral-200 font-bold">{item.progress}</span>
              </div>
            </GlowingCard>
          ))}
        </div>
      </div>
    </section>
  );
};
