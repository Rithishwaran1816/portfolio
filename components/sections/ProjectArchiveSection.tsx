"use client";

import React from "react";
import { AgriTrustInteractiveCard } from "./AgriTrustInteractiveCard";
import { AquaGuardInteractiveCard } from "./AquaGuardInteractiveCard";
import { MentoringAppInteractiveCard } from "./MentoringAppInteractiveCard";
import { FolderGit2 } from "lucide-react";

export const ProjectArchiveSection: React.FC = () => {
  return (
    <section className="relative py-24 px-6 sm:px-12 bg-slate-50 dark:bg-[#070707] overflow-hidden transition-colors duration-300">
      <div className="max-w-6xl mx-auto flex flex-col gap-14">
        {/* Section Subheading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 border-b border-slate-200 dark:border-white/[0.08] pb-6">
          <div className="space-y-2">
            <div className="flex items-center gap-2">
              <FolderGit2 className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
              <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                SYSTEMS ARCHIVE // ENGINEERING HIGHLIGHTS
              </span>
            </div>
            <h2 className="text-3xl sm:text-5xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              DEPLOYED <span className="text-gradient-cyan">SOLUTIONS.</span>
            </h2>
          </div>

          <p className="text-slate-600 dark:text-neutral-400 text-xs sm:text-sm font-mono max-w-sm">
            Interactive multi-domain products addressing agriculture telemetry, community water intelligence, and institutional mentoring.
          </p>
        </div>

        {/* Project Cards Grid / Stack */}
        <div className="flex flex-col gap-10">
          <AgriTrustInteractiveCard />
          <AquaGuardInteractiveCard />
          <MentoringAppInteractiveCard />
        </div>
      </div>
    </section>
  );
};
