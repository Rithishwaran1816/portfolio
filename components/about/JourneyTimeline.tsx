"use client";

import React, { useState } from "react";
import { TIMELINE_EVENTS, TimelineEvent } from "@/data/timeline";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { CheckCircle2, CircleDot, Clock, ArrowRight, Sparkles } from "lucide-react";

export const JourneyTimeline: React.FC = () => {
  const [activeEvent, setActiveEvent] = useState<TimelineEvent>(TIMELINE_EVENTS[6]); // Default to Building My Own LLM

  return (
    <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      {/* Left Timeline Nodes Stream */}
      <div className="lg:col-span-6 flex flex-col relative border-l border-slate-300 dark:border-white/10 ml-4 pl-6 space-y-6">
        {TIMELINE_EVENTS.map((event) => {
          const isSelected = activeEvent.id === event.id;
          return (
            <div key={event.id} className="relative group">
              {/* Timeline Connector Dot */}
              <button
                onClick={() => {
                  sound.playHover();
                  setActiveEvent(event);
                }}
                className={`absolute -left-[31px] top-1.5 w-6 h-6 rounded-full border-2 flex items-center justify-center transition-all ${
                  isSelected
                    ? "bg-violet-600 border-white text-white shadow-[0_0_15px_rgba(139,92,246,0.8)] scale-110"
                    : event.status === "CURRENT FOCUS"
                    ? "bg-cyan-500 border-cyan-300 animate-pulse text-black"
                    : "bg-slate-200 dark:bg-[#181818] border-slate-300 dark:border-white/20 text-slate-600 dark:text-neutral-500 hover:border-violet-400"
                }`}
              >
                <span className="text-[9px] font-mono font-bold">
                  {event.stepNumber}
                </span>
              </button>

              {/* Event Summary Card */}
              <button
                onClick={() => {
                  sound.playClick();
                  setActiveEvent(event);
                }}
                className={`w-full p-4 rounded-xl text-left border transition-all flex flex-col gap-1.5 cursor-pointer ${
                  isSelected
                    ? "bg-violet-100 dark:bg-violet-950/40 border-violet-500/60 text-slate-900 dark:text-white shadow-md dark:shadow-[0_0_20px_rgba(139,92,246,0.2)]"
                    : "bg-white dark:bg-[#0E0E0E] border-slate-200 dark:border-white/5 text-slate-600 dark:text-neutral-400 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-neutral-200"
                }`}
              >
                <div className="flex items-center justify-between">
                  <span className="text-[10px] font-mono font-bold text-violet-700 dark:text-violet-400 uppercase tracking-wider">
                    {event.phase}
                  </span>
                  <span
                    className={`text-[9px] font-mono px-2 py-0.5 rounded border ${
                      event.status === "CURRENT FOCUS"
                        ? "bg-cyan-100 dark:bg-cyan-950 text-cyan-800 dark:text-cyan-300 border-cyan-300 dark:border-cyan-500/30 font-bold"
                        : event.status === "COMPLETED"
                        ? "bg-emerald-100 dark:bg-emerald-950 text-emerald-800 dark:text-emerald-300 border-emerald-300 dark:border-emerald-500/30 font-bold"
                        : "bg-purple-100 dark:bg-purple-950 text-purple-800 dark:text-purple-300 border-purple-300 dark:border-purple-500/30 font-bold"
                    }`}
                  >
                    {event.status}
                  </span>
                </div>
                <h4 className="text-sm font-bold text-slate-900 dark:text-white tracking-tight">
                  {event.title}
                </h4>
                <p className="text-xs text-slate-500 dark:text-neutral-400 font-light line-clamp-1">
                  {event.tagline}
                </p>
              </button>
            </div>
          );
        })}
      </div>

      {/* Right Expanded Milestone Details */}
      <div className="lg:col-span-6 lg:sticky lg:top-28">
        <GlowingCard
          glowColor="rgba(139, 92, 246, 0.2)"
          className="p-6 sm:p-8 border border-slate-200 dark:border-violet-500/30 bg-white dark:bg-[#0E0D14]/95 flex flex-col gap-6 shadow-xl"
        >
          <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
            <div className="flex items-center gap-2">
              <span className="w-2.5 h-2.5 rounded-full bg-violet-600 dark:bg-violet-400 animate-ping" />
              <span className="text-xs font-mono font-bold text-violet-700 dark:text-violet-300">
                MILESTONE {activeEvent.stepNumber} // {activeEvent.phase}
              </span>
            </div>
            <span className="text-[10px] font-mono px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-300 font-bold">
              {activeEvent.status}
            </span>
          </div>

          <div className="space-y-2">
            <h3 className="text-2xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              {activeEvent.title}
            </h3>
            <p className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold">
              {activeEvent.tagline}
            </p>
          </div>

          <p className="text-sm text-slate-600 dark:text-neutral-300 font-light leading-relaxed">
            {activeEvent.description}
          </p>

          {/* Key Learnings List */}
          <div className="space-y-2 pt-2 border-t border-slate-200 dark:border-white/10">
            <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-bold">
              CORE CAPABILITIES ACQUIRED IN THIS PHASE:
            </span>
            <div className="space-y-1.5 font-mono text-xs">
              {activeEvent.keyLearnings.map((item) => (
                <div key={item} className="flex items-center gap-2 text-slate-800 dark:text-neutral-200 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-violet-600 dark:text-violet-400 shrink-0" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>
        </GlowingCard>
      </div>
    </div>
  );
};

