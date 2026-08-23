"use client";

import React from "react";
import { cn } from "@/lib/utils";

interface TerminalHUDProps {
  label: string;
  value?: string;
  status?: "active" | "online" | "building" | "standby";
  className?: string;
}

export const TerminalHUD: React.FC<TerminalHUDProps> = ({
  label,
  value,
  status = "online",
  className,
}) => {
  const statusColors = {
    active: "bg-emerald-400 text-emerald-400",
    online: "bg-cyan-400 text-cyan-400",
    building: "bg-violet-400 text-violet-400",
    standby: "bg-amber-400 text-amber-400",
  }[status];

  return (
    <div
      className={cn(
        "inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/90 dark:bg-[#121212]/90 border border-slate-200 dark:border-white/10 font-mono text-[11px] uppercase tracking-wider backdrop-blur-md shadow-sm",
        className
      )}
    >
      <span className="relative flex h-2 w-2">
        <span
          className={cn(
            "animate-ping absolute inline-flex h-full w-full rounded-full opacity-75",
            statusColors.split(" ")[0]
          )}
        />
        <span
          className={cn(
            "relative inline-flex rounded-full h-2 w-2",
            statusColors.split(" ")[0]
          )}
        />
      </span>
      <span className="text-slate-500 dark:text-neutral-400 font-semibold">{label}</span>
      {value && (
        <>
          <span className="text-slate-400 dark:text-neutral-600">/</span>
          <span className="text-slate-800 dark:text-neutral-200 font-bold">{value}</span>
        </>
      )}
    </div>
  );
};

