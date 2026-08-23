"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/audio";
import {
  MessageSquare,
  X,
  Mail,
  Phone,
  Copy,
  Check,
  ExternalLink,
} from "lucide-react";
import { Icons } from "@/components/ui/Icons";

export const FloatingPersonalContact: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [copiedField, setCopiedField] = useState<string | null>(null);

  const toggleOpen = () => {
    sound.playClick();
    setIsOpen(!isOpen);
  };

  const copyToClipboard = (text: string, field: string) => {
    sound.playSignal();
    navigator.clipboard.writeText(text);
    setCopiedField(field);
    setTimeout(() => setCopiedField(null), 2000);
  };

  const WHATSAPP_URL = "https://wa.me/919514278272?text=Hello%20Rithishwaran!%20I'd%20like%20to%20connect%20with%20you%20regarding%20a%20project.";

  return (
    <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end">
      {/* Expanded Modal / Flyout */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, scale: 0.9, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.9, y: 20 }}
            transition={{ type: "spring", stiffness: 350, damping: 25 }}
            className="mb-3 w-80 sm:w-96 rounded-2xl bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/15 p-5 shadow-2xl flex flex-col gap-4 select-none text-slate-900 dark:text-white"
          >
            {/* Header */}
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10">
              <div className="flex items-center gap-2">
                <span className="w-2 h-2 rounded-full bg-cyan-500 dark:bg-cyan-400 animate-ping" />
                <span className="text-xs font-mono font-bold tracking-wider text-slate-900 dark:text-white">
                  TRANSMISSION CHANNEL
                </span>
              </div>
              <button
                onClick={toggleOpen}
                className="p-1 rounded-lg hover:bg-slate-100 dark:hover:bg-white/10 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 dark:text-neutral-400 leading-relaxed font-sans font-light">
              Direct communication lines for engineering discussions, technical inquiries, and project collaborations.
            </p>

            {/* Channels List */}
            <div className="space-y-2.5 font-mono text-xs">
              {/* WhatsApp Direct */}
              <a
                href={WHATSAPP_URL}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center justify-between p-3 rounded-xl bg-emerald-50 dark:bg-emerald-950/40 border border-emerald-300 dark:border-emerald-500/40 hover:border-emerald-400 transition-all text-slate-900 dark:text-neutral-100 group shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Icons.WhatsApp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-emerald-700 dark:text-emerald-300 uppercase tracking-widest font-bold">
                      WHATSAPP (INSTANT DIRECT)
                    </span>
                    <span className="text-xs text-slate-900 dark:text-white font-bold">+91 95142 78272</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400 group-hover:translate-x-0.5 transition-transform" />
              </a>

              {/* Email */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-violet-500/40 transition-all group">
                <div className="flex items-center gap-2.5">
                  <Mail className="w-4 h-4 text-violet-600 dark:text-violet-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest font-bold">
                      EMAIL
                    </span>
                    <a
                      href="mailto:rithishdivinan@gmail.com"
                      className="text-slate-800 dark:text-neutral-200 hover:text-violet-600 dark:hover:text-white text-xs truncate max-w-[180px] font-bold"
                    >
                      rithishdivinan@gmail.com
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("rithishdivinan@gmail.com", "email")}
                  title="Copy email address"
                  className="p-1.5 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-all"
                >
                  {copiedField === "email" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* Phone */}
              <div className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-cyan-500/40 transition-all group">
                <div className="flex items-center gap-2.5">
                  <Phone className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest font-bold">
                      PHONE CALL
                    </span>
                    <a
                      href="tel:9514278272"
                      className="text-slate-800 dark:text-neutral-200 hover:text-cyan-600 dark:hover:text-white text-xs font-bold"
                    >
                      +91 95142 78272
                    </a>
                  </div>
                </div>
                <button
                  onClick={() => copyToClipboard("9514278272", "phone")}
                  title="Copy phone number"
                  className="p-1.5 rounded-lg bg-slate-200 dark:bg-white/5 hover:bg-slate-300 dark:hover:bg-white/10 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-all"
                >
                  {copiedField === "phone" ? (
                    <Check className="w-3.5 h-3.5 text-emerald-600 dark:text-emerald-400" />
                  ) : (
                    <Copy className="w-3.5 h-3.5" />
                  )}
                </button>
              </div>

              {/* GitHub */}
              <a
                href="https://github.com/Rithishwaran1816"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-slate-400 dark:hover:border-white/30 transition-all text-slate-800 dark:text-neutral-200 group font-bold"
              >
                <div className="flex items-center gap-2.5">
                  <Icons.GitHub className="w-4 h-4 text-slate-700 dark:text-neutral-400 group-hover:text-slate-900 dark:group-hover:text-white" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest font-bold">
                      GITHUB
                    </span>
                    <span className="text-xs">Rithishwaran1816</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </a>

              {/* LinkedIn */}
              <a
                href="https://www.linkedin.com/in/rithishwarank18/"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center justify-between p-3 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/[0.08] hover:border-blue-400/40 transition-all text-slate-800 dark:text-neutral-200 group font-bold"
              >
                <div className="flex items-center gap-2.5">
                  <Icons.LinkedIn className="w-4 h-4 text-blue-600 dark:text-blue-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-slate-500 dark:text-neutral-500 uppercase tracking-widest font-bold">
                      LINKEDIN
                    </span>
                    <span className="text-xs">rithishwarank18</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors" />
              </a>

              {/* Instagram */}
              <a
                href="https://www.instagram.com/responsible_boy_1821?igsi=NGRxZWtsYjd0dDAy"
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => sound.playClick()}
                className="flex items-center justify-between p-3 rounded-xl bg-pink-50 dark:bg-pink-950/30 border border-pink-200 dark:border-pink-500/30 hover:border-pink-400 transition-all text-slate-800 dark:text-neutral-200 group font-bold shadow-sm"
              >
                <div className="flex items-center gap-2.5">
                  <Icons.Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
                  <div className="flex flex-col">
                    <span className="text-[10px] text-pink-700 dark:text-pink-300 uppercase tracking-widest font-bold">
                      INSTAGRAM
                    </span>
                    <span className="text-xs">@responsible_boy_1821</span>
                  </div>
                </div>
                <ExternalLink className="w-3.5 h-3.5 text-pink-600 dark:text-pink-400 group-hover:translate-x-0.5 transition-transform" />
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Main Trigger Button */}
      <button
        onClick={toggleOpen}
        onMouseEnter={() => sound.playHover()}
        className="group flex items-center gap-2.5 px-4 py-3 rounded-full bg-gradient-to-r from-violet-600 to-indigo-700 text-white font-mono text-xs font-semibold tracking-wider uppercase shadow-[0_0_25px_rgba(139,92,246,0.5)] hover:shadow-[0_0_35px_rgba(139,92,246,0.7)] border border-violet-400/40 transition-all hover:scale-105 active:scale-95 cursor-pointer"
      >
        <MessageSquare className="w-4 h-4 text-violet-200 group-hover:rotate-12 transition-transform" />
        <span>CONNECT</span>
        <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse" />
      </button>
    </div>
  );
};
