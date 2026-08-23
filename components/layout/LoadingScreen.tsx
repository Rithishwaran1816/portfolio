"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/audio";

const DIAGNOSTIC_STEPS = [
  "INITIALIZING DIGITAL ENVIRONMENT...",
  "CALIBRATING NEURAL TENSOR CORE...",
  "INDEXING TRANSFORMER ATTENTION WEIGHTS...",
  "SYNCHRONIZING APEX LABS SERVICES...",
  "SYSTEMS 100% OPERATIONAL.",
];

export const LoadingScreen: React.FC = () => {
  const [progress, setProgress] = useState(0);
  const [diagnosticIndex, setDiagnosticIndex] = useState(0);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    // Check if session has already seen the loader
    const hasLoaded = sessionStorage.getItem("rw_loader_viewed");
    if (hasLoaded) {
      setIsLoading(false);
      return;
    }

    const interval = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) {
          clearInterval(interval);
          setTimeout(() => {
            sound.playSuccess();
            setIsLoading(false);
            sessionStorage.setItem("rw_loader_viewed", "true");
          }, 450);
          return 100;
        }

        // Increment progress smoothly
        const increment = Math.floor(Math.random() * 14) + 6;
        const next = Math.min(prev + increment, 100);

        if (next > 25 && next < 50) setDiagnosticIndex(1);
        else if (next >= 50 && next < 75) setDiagnosticIndex(2);
        else if (next >= 75 && next < 95) setDiagnosticIndex(3);
        else if (next >= 95) setDiagnosticIndex(4);

        return next;
      });
    }, 90);

    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      {isLoading && (
        <motion.div
          initial={{ opacity: 1 }}
          exit={{
            opacity: 0,
            y: -20,
            filter: "blur(12px)",
            transition: { duration: 0.7, ease: [0.16, 1, 0.3, 1] },
          }}
          className="fixed inset-0 z-50 flex flex-col items-center justify-center bg-[#070707] text-white select-none px-6"
        >
          {/* Subtle neural background grid */}
          <div className="absolute inset-0 bg-grid-pattern opacity-40 pointer-events-none" />
          <div className="absolute w-96 h-96 bg-violet-600/10 rounded-full blur-3xl pointer-events-none animate-pulse-slow" />

          <div className="relative z-10 w-full max-w-md flex flex-col items-center gap-6 text-center">
            {/* System Logo Glyph */}
            <div className="relative">
              <div className="w-16 h-16 rounded-2xl bg-[#121212] border border-white/15 flex items-center justify-center font-mono font-bold text-2xl text-transparent bg-clip-text bg-gradient-to-r from-violet-400 to-cyan-400 shadow-[0_0_30px_rgba(139,92,246,0.3)]">
                R.
              </div>
              <span className="absolute -top-1 -right-1 flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-3 w-3 bg-cyan-400" />
              </span>
            </div>

            {/* Diagnostic Terminal Text */}
            <div className="space-y-2">
              <span className="text-[11px] font-mono tracking-widest text-neutral-500 uppercase">
                RITHISHWARAN // DIGITAL LAB
              </span>
              <div className="h-6 flex items-center justify-center">
                <p className="text-xs font-mono text-cyan-400 tracking-wider">
                  {DIAGNOSTIC_STEPS[diagnosticIndex]}
                </p>
              </div>
            </div>

            {/* High-Tech Progress Bar */}
            <div className="w-full space-y-2">
              <div className="w-full h-1.5 bg-white/10 rounded-full overflow-hidden p-0.5 border border-white/10">
                <motion.div
                  className="h-full bg-gradient-to-r from-violet-500 via-indigo-400 to-cyan-400 rounded-full shadow-[0_0_12px_rgba(0,240,255,0.6)]"
                  style={{ width: `${progress}%` }}
                />
              </div>

              <div className="flex justify-between items-center text-[10px] font-mono text-neutral-400 px-1">
                <span>SYSTEM DIAGNOSTICS</span>
                <span className="text-white font-semibold">{progress}%</span>
              </div>
            </div>

            {/* Terminal Block ASCII Bar */}
            <div className="text-[10px] font-mono text-neutral-500 tracking-tighter">
              [
              {"█".repeat(Math.floor(progress / 5))}
              {"░".repeat(20 - Math.floor(progress / 5))}
              ]
            </div>

            <div className="text-[10px] font-mono text-neutral-600 tracking-widest">
              AI × TRANSFORMERS × DATA SYSTEMS
            </div>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

