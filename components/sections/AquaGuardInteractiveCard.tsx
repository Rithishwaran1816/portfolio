"use client";

import React, { useState } from "react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { Droplets, AlertTriangle, Radio, ShieldAlert, CheckCircle2, MapPin } from "lucide-react";

export const AquaGuardInteractiveCard: React.FC = () => {
  const [activeZone, setActiveZone] = useState<"North" | "Central" | "South">("Central");
  const [activeStage, setActiveStage] = useState(3);

  const zones = {
    North: { status: "NORMAL", turbidity: "1.2 NTU", ph: "7.4", risk: "LOW", color: "text-emerald-600 dark:text-emerald-400" },
    Central: { status: "WARNING", turbidity: "4.8 NTU", ph: "6.2", risk: "ELEVATED", color: "text-amber-600 dark:text-amber-400" },
    South: { status: "CLEAR", turbidity: "0.9 NTU", ph: "7.2", risk: "MINIMAL", color: "text-cyan-600 dark:text-cyan-400" },
  };

  const stages = [
    { name: "WATER REPORTING", detail: "Citizens flag odor & color anomalies via Flutter mobile client." },
    { name: "HEALTH DATA", detail: "Synchronized with municipal clinic gastrointestinal symptom tallies." },
    { name: "AI ANALYSIS", detail: "Spatial clustering algorithms triangulate the contamination pipeline." },
    { name: "EARLY WARNING", detail: "Algorithmic threat threshold breached for Ward-12 (Risk: 78%)." },
    { name: "ALERT SYSTEM", detail: "Automated SMS/Push alert sent to 4,200 residents within 90 seconds." },
  ];

  return (
    <GlowingCard
      id="aquaguard"
      glowColor="rgba(0, 240, 255, 0.2)"
      className="p-6 sm:p-10 border border-cyan-300 dark:border-cyan-500/20 bg-white dark:bg-[#060D12]/90 shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Project Info */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-cyan-100 dark:bg-cyan-950/70 text-cyan-800 dark:text-cyan-400 font-mono text-[10px] tracking-widest border border-cyan-300 dark:border-cyan-500/30 font-bold">
              03 — SMART COMMUNITY HEALTH
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-neutral-500 font-semibold">GIS & SENSORS</span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              AQUAGUARD
            </h3>
            <p className="text-sm font-mono text-cyan-600 dark:text-cyan-400 font-bold tracking-wider mt-1">
              MONITOR. DETECT. ALERT.
            </p>
          </div>

          <p className="text-slate-600 dark:text-neutral-300 text-sm font-light leading-relaxed">
            A smart community health and water telemetry platform integrating citizen hazard reporting, IoT water quality probes, and predictive GIS anomaly clustering to prevent waterborne epidemics.
          </p>

          {/* Interactive System Flow */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-bold">
              SYSTEM EARLY WARNING FLOW:
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
                      ? "bg-cyan-100 dark:bg-cyan-950/70 border-cyan-400 text-cyan-900 dark:text-cyan-300 shadow-sm font-bold"
                      : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  0{idx + 1}. {stage.name}
                </button>
              ))}
            </div>
            <div className="p-3 rounded-xl bg-cyan-50 dark:bg-cyan-950/20 border border-cyan-200 dark:border-cyan-500/20 text-xs font-mono text-cyan-900 dark:text-cyan-200">
              <span className="text-cyan-600 dark:text-cyan-400 font-bold">TELEMETRY: </span>
              {stages[activeStage].detail}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {["Flutter", "Dart", "Firebase", "Python", "GIS Mapping", "Data Analytics"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-[10px] text-slate-700 dark:text-neutral-300 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Live GIS & Telemetry Visualizer */}
        <div className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-[#03080C] border border-cyan-300 dark:border-cyan-500/30 p-6 flex flex-col gap-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-cyan-200 dark:border-cyan-500/20">
            <div className="flex items-center gap-2">
              <Droplets className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-xs font-mono text-cyan-800 dark:text-cyan-300 font-bold tracking-wider">
                GIS WATER MONITORING RADAR
              </span>
            </div>
            <span className="flex items-center gap-1.5 text-[10px] font-mono text-cyan-600 dark:text-cyan-400 font-bold">
              <Radio className="w-3.5 h-3.5 text-cyan-500 animate-pulse" />
              GIS LIVE STREAM
            </span>
          </div>

          {/* Zone Selector */}
          <div className="flex gap-2">
            {(["North", "Central", "South"] as const).map((zone) => (
              <button
                key={zone}
                onClick={() => {
                  sound.playHover();
                  setActiveZone(zone);
                }}
                className={`flex-1 py-2 px-3 rounded-lg font-mono text-xs transition-all border cursor-pointer ${
                  activeZone === zone
                    ? "bg-cyan-100 dark:bg-cyan-950/60 border-cyan-400 text-cyan-900 dark:text-cyan-300 font-bold shadow-sm"
                    : "bg-white dark:bg-white/[0.02] border-slate-200 dark:border-white/5 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                <div className="flex items-center justify-center gap-1.5">
                  <MapPin className="w-3 h-3" />
                  <span>ZONE {zone.toUpperCase()}</span>
                </div>
              </button>
            ))}
          </div>

          {/* Zone Telemetry Details */}
          <div className="p-4 rounded-xl bg-white dark:bg-cyan-950/20 border border-slate-200 dark:border-cyan-500/20 grid grid-cols-2 sm:grid-cols-4 gap-4 font-mono text-xs shadow-sm">
            <div>
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 block font-semibold">ZONE STATUS</span>
              <span className={`text-sm font-black ${zones[activeZone].color}`}>
                {zones[activeZone].status}
              </span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 block font-semibold">TURBIDITY</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{zones[activeZone].turbidity}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 block font-semibold">pH LEVEL</span>
              <span className="text-sm font-bold text-slate-900 dark:text-white">{zones[activeZone].ph}</span>
            </div>
            <div>
              <span className="text-[10px] text-slate-500 dark:text-neutral-500 block font-semibold">EPIDEMIC RISK</span>
              <span className={`text-sm font-black ${zones[activeZone].color}`}>
                {zones[activeZone].risk}
              </span>
            </div>
          </div>

          <div className="p-3 rounded-xl bg-amber-50 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-500/20 flex items-center gap-3 text-xs font-mono text-amber-800 dark:text-amber-200">
            <AlertTriangle className="w-4 h-4 text-amber-500 shrink-0" />
            <span>
              Autonomous early warning triggered when microbial anomaly exceeds 3.5 NTU.
            </span>
          </div>
        </div>
      </div>
    </GlowingCard>
  );
};
