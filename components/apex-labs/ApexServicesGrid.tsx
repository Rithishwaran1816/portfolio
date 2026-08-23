"use client";

import React, { useState } from "react";
import { APEX_SERVICES, ApexService } from "@/data/services";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { Globe, Bot, Cpu, Zap, Share2, CheckCircle2, ArrowRight, Sparkles } from "lucide-react";

export const ApexServicesGrid: React.FC = () => {
  const [selectedService, setSelectedService] = useState<ApexService>(APEX_SERVICES[0]);

  const getIcon = (name: string) => {
    switch (name) {
      case "Globe":
        return <Globe className="w-5 h-5" />;
      case "Bot":
        return <Bot className="w-5 h-5" />;
      case "Cpu":
        return <Cpu className="w-5 h-5" />;
      case "Zap":
        return <Zap className="w-5 h-5" />;
      case "Share2":
        return <Share2 className="w-5 h-5" />;
      default:
        return <Sparkles className="w-5 h-5" />;
    }
  };

  return (
    <div className="flex flex-col gap-8">
      {/* 5 Services Selector Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3.5">
        {APEX_SERVICES.map((service) => {
          const isSelected = selectedService.id === service.id;
          return (
            <button
              key={service.id}
              onClick={() => {
                sound.playHover();
                setSelectedService(service);
              }}
              className={`p-4 rounded-xl text-left border transition-all flex flex-col justify-between gap-3 group relative overflow-hidden cursor-pointer ${
                isSelected
                  ? "bg-cyan-100 dark:bg-cyan-950/40 border-cyan-400 text-slate-900 dark:text-white shadow-md dark:shadow-[0_0_20px_rgba(0,240,255,0.25)]"
                  : "bg-white dark:bg-[#0E131A]/80 border-slate-200 dark:border-white/10 text-slate-600 dark:text-neutral-400 hover:border-slate-300 dark:hover:border-white/20 hover:text-slate-900 dark:hover:text-neutral-200"
              }`}
            >
              <div className="flex items-center justify-between w-full">
                <span className="text-[10px] font-mono font-bold text-cyan-600 dark:text-cyan-400">
                  {service.number}
                </span>
                <div style={{ color: service.accentColor }}>{getIcon(service.iconName)}</div>
              </div>

              <div className="space-y-1">
                <h4 className="text-xs font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider group-hover:text-cyan-600 dark:group-hover:text-cyan-300">
                  {service.title}
                </h4>
                <p className="text-[11px] font-sans text-slate-500 dark:text-neutral-400 line-clamp-2">
                  {service.shortDescription}
                </p>
              </div>

              <div className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 flex items-center gap-1 group-hover:translate-x-1 transition-transform font-bold">
                <span>VIEW SPECS</span>
                <ArrowRight className="w-3 h-3" />
              </div>
            </button>
          );
        })}
      </div>

      {/* Expanded Active Service Feature Container */}
      <GlowingCard
        glowColor={selectedService.glowColor}
        className="p-6 sm:p-10 border border-slate-200 dark:border-cyan-500/30 bg-white dark:bg-[#0A1017]/95 shadow-xl"
      >
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          {/* Left Description & Deliverables */}
          <div className="lg:col-span-7 flex flex-col gap-6">
            <div className="space-y-2">
              <div className="flex items-center gap-2">
                <span className="text-xs font-mono font-bold text-cyan-600 dark:text-cyan-400">
                  SERVICE SPECIFICATION // {selectedService.number}
                </span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                {selectedService.title}
              </h3>
              <p className="text-sm sm:text-base text-slate-600 dark:text-neutral-300 font-light leading-relaxed">
                {selectedService.fullDescription}
              </p>
            </div>

            {/* Core Capabilities */}
            <div className="space-y-2.5">
              <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-widest font-bold block">
                ENGINEERING CAPABILITIES:
              </span>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-2 font-mono text-xs">
                {selectedService.capabilities.map((cap) => (
                  <div key={cap} className="flex items-center gap-2 text-slate-800 dark:text-neutral-200 font-medium">
                    <CheckCircle2
                      className="w-3.5 h-3.5 shrink-0"
                      style={{ color: selectedService.accentColor }}
                    />
                    <span>{cap}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Deliverables Card */}
          <div className="lg:col-span-5 rounded-2xl bg-slate-50 dark:bg-[#060B10] border border-slate-200 dark:border-white/10 p-6 flex flex-col gap-4 shadow-sm dark:shadow-xl">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 font-bold uppercase tracking-wider">
              CLIENT DELIVERABLES:
            </span>

            <div className="space-y-2 font-mono text-xs">
              {selectedService.deliverables.map((deliv, idx) => (
                <div
                  key={deliv}
                  className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/5 flex items-center justify-between text-slate-800 dark:text-neutral-300 font-medium"
                >
                  <span>0{idx + 1}. {deliv}</span>
                  <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                </div>
              ))}
            </div>

            <div className="pt-2 border-t border-slate-200 dark:border-white/10 text-[11px] font-mono text-slate-500 dark:text-neutral-400">
              TURNAROUND: <span className="text-slate-900 dark:text-white font-bold">RAPID MVP SPRINT (1-3 WEEKS)</span>
            </div>
          </div>
        </div>
      </GlowingCard>
    </div>
  );
};

