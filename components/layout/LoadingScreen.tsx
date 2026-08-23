"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
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

          {/* Ambient glow behind photo */}
          <div className="absolute w-72 h-72 bg-violet-500/15 rounded-full blur-[80px] pointer-events-none" />
          <div className="absolute w-48 h-48 bg-cyan-500/10 rounded-full blur-[60px] translate-x-16 translate-y-8 pointer-events-none" />

          <div className="relative z-10 w-full max-w-sm flex flex-col items-center gap-6 text-center">

            {/* Portrait Photo — loading screen centrepiece */}
            <motion.div
              initial={{ opacity: 0, scale: 0.8, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
              className="relative"
            >
              {/* Rotating glow ring */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-2 rounded-full border border-dashed border-violet-500/40 pointer-events-none"
              />
              <motion.div
                animate={{ rotate: -360 }}
                transition={{ duration: 12, repeat: Infinity, ease: "linear" }}
                className="absolute -inset-4 rounded-full border border-dashed border-cyan-500/20 pointer-events-none"
              />

              {/* Photo container */}
              <div className="relative w-28 h-28 rounded-full overflow-hidden border-2 border-violet-500/60 shadow-[0_0_40px_rgba(139,92,246,0.5),0_0_80px_rgba(0,240,255,0.15)]">
                <Image
                  src="/profile2.jpg"
                  alt="Rithishwaran K"
                  fill
                  priority
                  className="object-cover object-top"
                />
                {/* Gradient overlay for cinema feel */}
                <div className="absolute inset-0 bg-gradient-to-t from-violet-900/30 to-transparent" />
              </div>

              {/* Live pulsing dot */}
              <span className="absolute bottom-1 right-1 flex h-4 w-4">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex rounded-full h-4 w-4 bg-emerald-400 border-2 border-[#070707]" />
              </span>
            </motion.div>

            {/* Name & Title */}
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.5 }}
              className="space-y-1"
            >
              <p className="text-white font-black text-xl tracking-tight uppercase">
                RITHISHWARAN K
              </p>
              <p className="text-cyan-400 font-mono text-[11px] uppercase tracking-widest">
                Builder · Founder · AI Engineer
              </p>
            </motion.div>

            {/* Diagnostic Terminal Text */}
            <div className="space-y-1">
              <span className="text-[10px] font-mono tracking-widest text-neutral-500 uppercase">
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
