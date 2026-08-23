"use client";

import React, { useState } from "react";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/audio";
import { Sparkles, X, ArrowUpRight, CheckCircle2 } from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export const FloatingApexContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleOpen = () => {
    sound.playClick();
    setIsOpen(!isOpen);
  };

  const APEX_WHATSAPP_URL =
    "https://wa.me/919514278272?text=Hello%20Rithishwaran%20%2F%20Apex%20Labs!%20I'd%20like%20to%20discuss%20a%20new%20project%20or%20digital%20solution.";

  return (
    <div className="fixed bottom-20 right-6 z-40 flex flex-col items-end">
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-3 w-80 sm:w-96 rounded-2xl bg-white/95 dark:bg-[#0B1015]/95 backdrop-blur-2xl border border-cyan-300 dark:border-cyan-500/30 p-5 shadow-2xl flex flex-col gap-4 select-none text-slate-900 dark:text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-cyan-500/20">
              <div className="flex items-center gap-2">
                <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                <span className="text-xs font-mono font-bold tracking-wider text-cyan-700 dark:text-cyan-300">
                  APEX LABS // CLIENT DESK
                </span>
              </div>
              <button
                onClick={toggleOpen}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-cyan-950/40 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-neutral-300 leading-relaxed font-light">
              Transforming ambitious ideas into modern websites, intelligent chatbots, ML experiments, and viral digital experiences.
            </p>

            {/* Core Pillars */}
            <div className="space-y-1.5 font-mono text-[11px] text-slate-700 dark:text-neutral-300">
              {[
                "Web Solutions (Next.js / 3D)",
                "AI Chatbots & RAG Agents",
                "Machine Learning Intelligence",
                "Digital Business Solutions",
                "Social Media Visual Systems",
              ].map((service) => (
                <div key={service} className="flex items-center gap-2 text-cyan-800 dark:text-cyan-200/80 font-medium">
                  <CheckCircle2 className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 shrink-0" />
                  <span>{service}</span>
                </div>
              ))}
            </div>

            {/* Actions */}
            <div className="flex flex-col gap-2 pt-2 border-t border-slate-200 dark:border-cyan-500/20">
              {/* WhatsApp direct for Apex */}
              <a
                href={APEX_WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 hover:border-emerald-400 text-emerald-900 dark:text-emerald-200 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Icons.WhatsApp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-300 uppercase tracking-widest font-mono font-bold">
                      DIRECT WHATSAPP DESK
                    </span>
                    <span className="text-xs font-bold">+91 95142 78272</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/apex_.labs?igsi=MXF3bXpvYTExemxpaA=="
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center justify-between p-3 rounded-xl bg-pink-50 dark:bg-gradient-to-r dark:from-pink-950/40 dark:via-purple-950/40 dark:to-cyan-950/40 border border-pink-300 dark:border-pink-500/30 hover:border-pink-400 text-slate-800 dark:text-neutral-100 transition-all group"
              >
                <div className="flex items-center gap-2.5">
                  <Icons.Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-pink-700 dark:text-pink-300 uppercase tracking-widest font-mono font-bold">
                      OFFICIAL INSTAGRAM
                    </span>
                    <span className="text-xs font-bold">@apex_.labs</span>
                  </div>
                </div>
                <ArrowUpRight className="w-4 h-4 text-pink-600 dark:text-pink-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
              </a>

              <Link
                href="/contact"
                onClick={() => {
                  sound.playClick();
                  setIsOpen(false);
                }}
                className="w-full py-2.5 rounded-xl bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-mono font-bold text-xs uppercase tracking-wider text-center hover:opacity-90 shadow-md transition-all"
              >
                OPEN TRANSMISSION CONSOLE →
              </Link>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Trigger Button */}
      <button
        onClick={toggleOpen}
        onMouseEnter={() => sound.playHover()}
        className="group flex items-center gap-2 px-3.5 py-2.5 rounded-full bg-white dark:bg-[#0E1520] border border-cyan-400/60 dark:border-cyan-400/40 text-cyan-800 dark:text-cyan-300 font-mono text-[11px] tracking-wider uppercase font-bold shadow-lg hover:border-cyan-500 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400 group-hover:rotate-45 transition-transform" />
        <span>WORK WITH APEX →</span>
      </button>
    </div>
  );
};
