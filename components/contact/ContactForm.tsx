"use client";

import React, { useState } from "react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { Send, CheckCircle2, AlertCircle, Loader2, Sparkles, ArrowUpRight } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import confetti from "canvas-confetti";

export const ContactForm: React.FC = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    projectType: "Apex Labs Solutions",
    message: "",
  });

  const [status, setStatus] = useState<"idle" | "loading" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const MY_WHATSAPP_NUMBER = "919514278272"; // Rithishwaran's phone number: +91 95142 78272

  const buildWhatsAppMessage = () => {
    return (
      `⚡ *NEW INQUIRY — RITHISHWARAN / APEX LABS*\n\n` +
      `👤 *Name:* ${formData.name}\n` +
      `📧 *Email:* ${formData.email}\n` +
      `📱 *Sender Phone:* ${formData.phone ? formData.phone : "Not provided"}\n` +
      `🎯 *Focus Area:* ${formData.projectType}\n\n` +
      `💡 *Project Idea / Message:*\n${formData.message}\n\n` +
      `— Transmitted via Digital Universe Portfolio Console`
    );
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sound.playClick();

    if (!formData.name.trim() || !formData.email.trim() || !formData.message.trim()) {
      setErrorMessage("Please complete all required fields (Name, Email, and Message).");
      setStatus("error");
      return;
    }

    if (!/\S+@\S+\.\S+/.test(formData.email)) {
      setErrorMessage("Please provide a valid email address.");
      setStatus("error");
      return;
    }

    setErrorMessage("");
    setStatus("success");
    sound.playSuccess();

    try {
      confetti({
        particleCount: 90,
        spread: 75,
        origin: { y: 0.6 },
        colors: ["#00F0FF", "#8B5CF6", "#10B981", "#25D366"],
      });
    } catch {
      // Fallback
    }

    // Build the formatted text and URL for WhatsApp
    const messageBody = buildWhatsAppMessage();
    const whatsappUrl = `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${encodeURIComponent(messageBody)}`;

    // Open WhatsApp immediately in new tab / application
    window.open(whatsappUrl, "_blank", "noopener,noreferrer");
  };

  const handleReset = () => {
    sound.playClick();
    setFormData({
      name: "",
      email: "",
      phone: "",
      projectType: "Apex Labs Solutions",
      message: "",
    });
    setStatus("idle");
  };

  const handleDirectWhatsApp = () => {
    sound.playClick();
    const quickMsg = "Hello Rithishwaran! I would like to discuss a project with you / Apex Labs.";
    window.open(
      `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${encodeURIComponent(quickMsg)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const currentWhatsAppLink = `https://wa.me/${MY_WHATSAPP_NUMBER}?text=${encodeURIComponent(buildWhatsAppMessage())}`;

  return (
    <GlowingCard
      glowColor="rgba(0, 240, 255, 0.2)"
      className="p-6 sm:p-10 border border-slate-200 dark:border-white/10 bg-white dark:bg-[#0E0E12]/95 flex flex-col gap-6 shadow-xl"
    >
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 pb-4 border-b border-slate-200 dark:border-white/10">
        <div className="flex items-center gap-2">
          <Sparkles className="w-4 h-4 text-cyan-600 dark:text-cyan-400" />
          <h3 className="text-sm font-mono font-bold text-slate-900 dark:text-white uppercase tracking-wider">
            TRANSMISSION CONSOLE // WHATSAPP DIRECT
          </h3>
        </div>
        <div className="flex items-center gap-2">
          <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
          <span className="text-[10px] font-mono text-emerald-800 dark:text-emerald-400 px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 border border-emerald-300 dark:border-emerald-500/30 font-bold">
            DESTINATION: +91 95142 78272
          </span>
        </div>
      </div>

      {status === "success" ? (
        <div className="py-10 px-4 flex flex-col items-center justify-center text-center gap-5">
          <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/80 border-2 border-emerald-500 dark:border-emerald-400 flex items-center justify-center text-emerald-600 dark:text-emerald-400 shadow-lg">
            <CheckCircle2 className="w-9 h-9" />
          </div>
          <div className="space-y-2">
            <h4 className="text-xl font-bold text-slate-900 dark:text-white font-mono uppercase">
              WHATSAPP TRANSMISSION READY
            </h4>
            <p className="text-xs text-slate-600 dark:text-neutral-300 font-sans max-w-md leading-relaxed font-light">
              Your message was compiled and dispatched to my WhatsApp (<span className="text-emerald-600 dark:text-emerald-400 font-mono font-bold">+91 95142 78272</span>). If your WhatsApp didn&apos;t pop up automatically, click the green button below:
            </p>
          </div>

          <div className="flex flex-wrap gap-3 justify-center pt-2">
            <a
              href={currentWhatsAppLink}
              target="_blank"
              rel="noopener noreferrer"
              className="px-6 py-3.5 rounded-xl bg-emerald-600 dark:bg-emerald-500 text-white dark:text-black font-mono font-bold text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-emerald-700 dark:hover:bg-emerald-400 shadow-md transition-all"
            >
              <Icons.WhatsApp className="w-4 h-4" />
              <span>OPEN IN WHATSAPP CHAT →</span>
            </a>

            <button
              onClick={handleReset}
              className="px-5 py-3 rounded-xl bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 text-xs font-mono text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10 transition-all font-semibold cursor-pointer"
            >
              SEND ANOTHER MESSAGE
            </button>
          </div>
        </div>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          {/* Name & Email */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 uppercase tracking-wider block font-bold">
                YOUR NAME *
              </label>
              <input
                type="text"
                required
                value={formData.name}
                onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                placeholder="e.g. Alex Morgan"
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-white/15 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-white font-mono text-xs font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 uppercase tracking-wider block font-bold">
                EMAIL ADDRESS *
              </label>
              <input
                type="email"
                required
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                placeholder="e.g. alex@example.com"
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-white/15 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-white font-mono text-xs font-medium"
              />
            </div>
          </div>

          {/* Phone & Project Type */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 uppercase tracking-wider block font-bold">
                YOUR PHONE NUMBER (OPTIONAL)
              </label>
              <input
                type="tel"
                value={formData.phone}
                onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                placeholder="e.g. +91 98765 43210"
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-white/15 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-white font-mono text-xs font-medium"
              />
            </div>

            <div className="space-y-1.5">
              <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 uppercase tracking-wider block font-bold">
                ENGAGEMENT FOCUS
              </label>
              <select
                value={formData.projectType}
                onChange={(e) => setFormData({ ...formData, projectType: e.target.value })}
                className="w-full p-3 rounded-xl bg-slate-50 dark:bg-[#090909] border border-slate-300 dark:border-white/15 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-white font-mono text-xs cursor-pointer font-medium"
              >
                <option value="Apex Labs Solutions">Apex Labs: Web Solutions & Product Engineering</option>
                <option value="AI / Chatbot Development">Apex Labs: Intelligent Chatbots & RAG Systems</option>
                <option value="ML & Data Analytics">Machine Learning & Data Intelligence</option>
                <option value="LLM Lab Collaboration">LLM Architecture & Research Inquiry</option>
                <option value="General Engineering Discussion">General Tech / Career Inquiry</option>
              </select>
            </div>
          </div>

          {/* Message Field */}
          <div className="space-y-1.5">
            <label className="text-[11px] font-mono text-slate-600 dark:text-neutral-400 uppercase tracking-wider block font-bold">
              WHAT ARE YOU BUILDING / PROJECT IDEA? *
            </label>
            <textarea
              required
              rows={4}
              value={formData.message}
              onChange={(e) => setFormData({ ...formData, message: e.target.value })}
              placeholder="Describe your project idea, timeline, features, requirements, or what you'd like Apex Labs to build..."
              className="w-full p-3.5 rounded-xl bg-slate-50 dark:bg-black/60 border border-slate-300 dark:border-white/15 focus:border-cyan-500 focus:outline-none text-slate-900 dark:text-white font-mono text-xs leading-relaxed font-medium"
            />
          </div>

          {/* Error message */}
          {status === "error" && (
            <div className="p-3 rounded-xl bg-red-100 dark:bg-red-950/40 border border-red-300 dark:border-red-500/30 text-red-800 dark:text-red-300 text-xs font-mono flex items-center gap-2 font-bold">
              <AlertCircle className="w-4 h-4 text-red-600 dark:text-red-400 shrink-0" />
              <span>{errorMessage}</span>
            </div>
          )}

          {/* Action Buttons */}
          <div className="pt-2 flex flex-col sm:flex-row gap-3">
            <button
              type="submit"
              className="flex-1 py-4 rounded-xl bg-gradient-to-r from-emerald-500 via-cyan-500 to-violet-600 text-black font-mono font-bold text-xs uppercase tracking-wider hover:opacity-90 transition-all shadow-md flex items-center justify-center gap-2 cursor-pointer"
            >
              <Icons.WhatsApp className="w-4 h-4 text-black" />
              <span>TRANSMIT MESSAGE TO WHATSAPP (9514278272) →</span>
            </button>

            <button
              type="button"
              onClick={handleDirectWhatsApp}
              className="py-4 px-6 rounded-xl bg-slate-100 dark:bg-white/5 border border-emerald-300 dark:border-emerald-500/30 hover:border-emerald-500 text-emerald-800 dark:text-emerald-300 font-mono text-xs uppercase tracking-wider hover:bg-emerald-50 dark:hover:bg-emerald-950/20 transition-all flex items-center justify-center gap-2 cursor-pointer font-bold"
            >
              <Icons.WhatsApp className="w-4 h-4 text-emerald-600 dark:text-emerald-400" />
              <span>QUICK CHAT</span>
            </button>
          </div>
        </form>
      )}
    </GlowingCard>
  );
};
