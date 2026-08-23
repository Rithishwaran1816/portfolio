"use client";

import React, { useState } from "react";
import { APEX_ECOSYSTEM_NODES } from "@/data/services";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { Globe, Sparkles, Bot, Cpu, Zap, Share2, ArrowRight } from "lucide-react";
import Link from "next/link";
import { Button3D } from "@/components/ui/Button3D";

export const ApexEcosystemGraph: React.FC = () => {
  const [activeNode, setActiveNode] = useState(APEX_ECOSYSTEM_NODES[0]);

  const getNodeIcon = (iconName: string) => {
    switch (iconName) {
      case "Globe":
        return <Globe className="w-5 h-5" />;
      case "Sparkles":
        return <Sparkles className="w-5 h-5" />;
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
    <GlowingCard
      glowColor="rgba(0, 240, 255, 0.2)"
      className="p-6 sm:p-10 border border-slate-200 dark:border-cyan-500/30 bg-white dark:bg-[#070D14]/95 flex flex-col gap-8 shadow-xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 pb-4 border-b border-slate-200 dark:border-white/10">
        <div className="space-y-1">
          <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
            CONNECTED ECOSYSTEM // INTERACTIVE TOPOLOGY
          </span>
          <h3 className="text-2xl font-bold text-slate-900 dark:text-white tracking-tight uppercase">
            APEX DIGITAL NODES
          </h3>
        </div>
      </div>

      {/* Interactive Node Graph */}
      <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
        {APEX_ECOSYSTEM_NODES.map((node) => {
          const isActive = activeNode.id === node.id;
          return (
            <button
              key={node.id}
              onClick={() => {
                sound.playHover();
                setActiveNode(node);
              }}
              className={`p-4 rounded-xl border flex flex-col items-center text-center gap-3 transition-all cursor-pointer ${
                isActive
                  ? "bg-cyan-100 dark:bg-cyan-950/60 border-cyan-400 text-slate-900 dark:text-white shadow-md dark:shadow-[0_0_15px_rgba(0,240,255,0.4)] scale-105"
                  : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-600 dark:text-neutral-400 hover:border-slate-300 dark:hover:border-white/30 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              <div
                className="w-10 h-10 rounded-lg flex items-center justify-center bg-slate-100 dark:bg-black/40 border border-slate-200 dark:border-white/10"
                style={{ color: node.color }}
              >
                {getNodeIcon(node.icon)}
              </div>
              <span className="text-xs font-mono font-bold uppercase tracking-wider">
                {node.name}
              </span>
            </button>
          );
        })}
      </div>

      {/* Dynamic Selected Node Readout & CTA */}
      <div className="p-6 rounded-2xl bg-slate-50 dark:bg-black/50 border border-slate-200 dark:border-cyan-500/20 flex flex-col sm:flex-row items-center justify-between gap-6">
        <div className="space-y-1 text-center sm:text-left">
          <div className="flex items-center justify-center sm:justify-start gap-2">
            <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
            <span className="text-xs font-mono font-bold text-cyan-700 dark:text-cyan-300">
              ACTIVE NODE: {activeNode.name}
            </span>
          </div>
          <p className="text-sm text-slate-600 dark:text-neutral-300 font-light max-w-xl">
            {activeNode.description}
          </p>
        </div>

        <Button3D
          href="/contact?type=apex"
          variant="accent"
          size="md"
          icon={<ArrowRight className="w-4 h-4" />}
        >
          HAVE AN IDEA? LET&apos;S BUILD IT
        </Button3D>
      </div>
    </GlowingCard>
  );
};

