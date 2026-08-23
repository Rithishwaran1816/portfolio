"use client";

import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { TECHNOLOGIES, TechnologyItem, TechLevel, TechCategory } from "@/data/technologies";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { Orbit, Sparkles, Filter, Link2, Layers, Cpu, Database, Globe, Smartphone, Cloud, Code2, Palette, X } from "lucide-react";

export const TechUniverseSection: React.FC = () => {
  const [selectedLevel, setSelectedLevel] = useState<TechLevel | "ALL">("ALL");
  const [selectedCategory, setSelectedCategory] = useState<TechCategory | "ALL">("ALL");
  const [activeTech, setActiveTech] = useState<TechnologyItem | null>(null);

  const categories: { label: TechCategory; icon: React.ReactNode }[] = [
    { label: "AI & Machine Learning", icon: <Cpu className="w-3.5 h-3.5" /> },
    { label: "Data & Analytics", icon: <Database className="w-3.5 h-3.5" /> },
    { label: "Web & Full Stack", icon: <Globe className="w-3.5 h-3.5" /> },
    { label: "Database & Backend", icon: <Layers className="w-3.5 h-3.5" /> },
    { label: "Mobile Development", icon: <Smartphone className="w-3.5 h-3.5" /> },
    { label: "Cloud & DevOps", icon: <Cloud className="w-3.5 h-3.5" /> },
    { label: "Languages & Systems", icon: <Code2 className="w-3.5 h-3.5" /> },
    { label: "Design & Experience", icon: <Palette className="w-3.5 h-3.5" /> },
  ];

  const filteredTech = TECHNOLOGIES.filter((t) => {
    const levelMatch = selectedLevel === "ALL" || t.level === selectedLevel;
    const catMatch = selectedCategory === "ALL" || t.category === selectedCategory;
    return levelMatch && catMatch;
  });

  return (
    <section id="tech" className="relative py-28 px-6 sm:px-12 bg-slate-100/60 dark:bg-[#0A0A0A] overflow-hidden border-t border-slate-200 dark:border-white/[0.06] transition-colors duration-300">
      {/* Background glow spotlights */}
      <div className="absolute top-1/3 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-violet-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-12 relative z-10">
        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <Orbit className="w-4 h-4 text-violet-600 dark:text-violet-400" />
              <span className="text-xs font-mono text-violet-600 dark:text-violet-400 uppercase tracking-widest font-bold">
                SYSTEMS ARCHITECTURE & TOOLING
              </span>
            </div>
            <h2 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              MY TECHNOLOGY <br />
              <span className="text-gradient-dual">UNIVERSE.</span>
            </h2>
          </div>

          <div className="max-w-md">
            <p className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
              A growing ecosystem of technologies I use to explore ideas, construct models, and build digital products.
              Organized by engineering depth without artificial percentage ratings.
            </p>
          </div>
        </div>

        {/* Filters Bar */}
        <div className="flex flex-col lg:flex-row items-start lg:items-center justify-between gap-4 p-4 rounded-2xl bg-white/90 dark:bg-[#121212]/90 border border-slate-200 dark:border-white/10 backdrop-blur-xl shadow-lg">
          {/* Level Filter Tabs */}
          <div className="flex flex-wrap gap-2">
            {(["ALL", "BUILDING WITH", "EXPLORING", "FOUNDATION"] as const).map((level) => (
              <button
                key={level}
                onClick={() => {
                  sound.playHover();
                  setSelectedLevel(level);
                }}
                className={`px-3.5 py-1.5 rounded-xl font-mono text-xs uppercase tracking-wider transition-all cursor-pointer ${
                  selectedLevel === level
                    ? "bg-violet-600 text-white shadow-md font-bold"
                    : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200 dark:hover:bg-white/10"
                }`}
              >
                {level}
              </button>
            ))}
          </div>

          {/* Category Filter Selector */}
          <div className="flex items-center gap-2 overflow-x-auto max-w-full pb-1 lg:pb-0 scrollbar-none">
            <button
              onClick={() => {
                sound.playHover();
                setSelectedCategory("ALL");
              }}
              className={`px-3 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer ${
                selectedCategory === "ALL"
                  ? "bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-400 text-cyan-900 dark:text-cyan-300 font-bold"
                  : "bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
              }`}
            >
              ALL DOMAINS
            </button>
            {categories.map((cat) => (
              <button
                key={cat.label}
                onClick={() => {
                  sound.playHover();
                  setSelectedCategory(cat.label);
                }}
                className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl font-mono text-xs whitespace-nowrap transition-all cursor-pointer ${
                  selectedCategory === cat.label
                    ? "bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-400 text-cyan-900 dark:text-cyan-300 font-bold shadow-sm"
                    : "bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                }`}
              >
                {cat.icon}
                <span>{cat.label}</span>
              </button>
            ))}
          </div>
        </div>

        {/* Technology Nodes Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
          {filteredTech.map((tech) => {
            const isHighlight = tech.category === "AI & Machine Learning";
            return (
              <motion.div
                key={tech.id}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.2 }}
                onClick={() => {
                  sound.playClick();
                  setActiveTech(tech);
                }}
                onMouseEnter={() => sound.playHover()}
                className={`p-4 rounded-xl cursor-pointer transition-all border group relative flex flex-col justify-between gap-3 shadow-md ${
                  isHighlight
                    ? "bg-violet-50 dark:bg-violet-950/20 border-violet-300 dark:border-violet-500/30 hover:border-violet-500 hover:bg-violet-100 dark:hover:bg-violet-950/40"
                    : "bg-white dark:bg-[#111111]/80 border-slate-200 dark:border-white/10 hover:border-slate-300 dark:hover:border-white/25 hover:bg-slate-50 dark:hover:bg-[#181818]"
                }`}
              >
                {/* Node Level Badge */}
                <div className="flex items-center justify-between">
                  <span
                    className={`text-[9px] font-mono font-bold px-2 py-0.5 rounded tracking-wider uppercase ${
                      tech.level === "BUILDING WITH"
                        ? "bg-emerald-100 dark:bg-emerald-950/80 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30"
                        : tech.level === "EXPLORING"
                        ? "bg-violet-100 dark:bg-violet-950/80 text-violet-800 dark:text-violet-300 border border-violet-300 dark:border-violet-500/30"
                        : "bg-slate-100 dark:bg-white/5 text-slate-600 dark:text-neutral-400 border border-slate-200 dark:border-white/10"
                    }`}
                  >
                    {tech.level}
                  </span>

                  <span className="text-[9px] font-mono text-slate-500 dark:text-neutral-500 truncate max-w-[120px]">
                    {tech.category}
                  </span>
                </div>

                {/* Name */}
                <div>
                  <h4 className="text-base font-bold text-slate-900 dark:text-white tracking-tight group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                    {tech.name}
                  </h4>
                  <p className="text-xs text-slate-600 dark:text-neutral-400 font-light line-clamp-2 mt-1">
                    {tech.description}
                  </p>
                </div>

                {/* Related Work Footer */}
                {tech.relatedProjects.length > 0 && (
                  <div className="pt-2 border-t border-slate-200 dark:border-white/5 flex items-center justify-between text-[10px] font-mono text-slate-500 dark:text-neutral-400">
                    <span className="truncate text-violet-600 dark:text-violet-300 font-bold">
                      {tech.relatedProjects[0]}
                    </span>
                    <span className="text-slate-400 dark:text-neutral-500 group-hover:text-slate-900 dark:group-hover:text-white transition-colors">
                      INFO →
                    </span>
                  </div>
                )}
              </motion.div>
            );
          })}
        </div>

        {/* Selected Tech Detail Drawer / Modal */}
        <AnimatePresence>
          {activeTech && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 dark:bg-black/80 backdrop-blur-md"
              onClick={() => setActiveTech(null)}
            >
              <motion.div
                initial={{ scale: 0.9, y: 20 }}
                animate={{ scale: 1, y: 0 }}
                exit={{ scale: 0.9, y: 20 }}
                onClick={(e) => e.stopPropagation()}
                className="w-full max-w-lg rounded-2xl bg-white dark:bg-[#121212] border border-slate-200 dark:border-white/20 p-6 sm:p-8 flex flex-col gap-6 shadow-2xl text-slate-900 dark:text-white"
              >
                <div className="flex items-center justify-between pb-4 border-b border-slate-200 dark:border-white/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
                      {activeTech.category} // {activeTech.level}
                    </span>
                    <h3 className="text-2xl font-bold text-slate-900 dark:text-white mt-0.5">
                      {activeTech.name}
                    </h3>
                  </div>
                  <button
                    onClick={() => setActiveTech(null)}
                    className="p-1.5 rounded-lg bg-slate-100 dark:bg-white/5 hover:bg-slate-200 dark:hover:bg-white/10 text-slate-500 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white cursor-pointer"
                  >
                    <X className="w-5 h-5" />
                  </button>
                </div>

                <div className="space-y-2">
                  <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-bold">
                    AUTHENTIC USAGE & ENGINEERING CONTEXT:
                  </span>
                  <p className="text-sm text-slate-600 dark:text-neutral-300 font-light leading-relaxed">
                    {activeTech.description}
                  </p>
                </div>

                {/* Related Projects */}
                {activeTech.relatedProjects.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-bold">
                      RELATED ARCHITECTURAL WORK:
                    </span>
                    <div className="flex flex-wrap gap-2">
                      {activeTech.relatedProjects.map((proj) => (
                        <span
                          key={proj}
                          className="px-3 py-1 rounded-lg bg-violet-100 dark:bg-violet-950/60 border border-violet-300 dark:border-violet-500/40 text-violet-800 dark:text-violet-200 font-mono text-xs font-semibold"
                        >
                          {proj}
                        </span>
                      ))}
                    </div>
                  </div>
                )}

                {/* Connected Technologies */}
                {activeTech.connectedTech.length > 0 && (
                  <div className="space-y-2">
                    <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-bold">
                      SYNAPSED IN SYSTEM:
                    </span>
                    <div className="flex flex-wrap gap-1.5 font-mono text-xs text-slate-600 dark:text-neutral-400">
                      {activeTech.connectedTech.map((conn) => (
                        <span key={conn} className="px-2 py-0.5 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/5">
                          {conn}
                        </span>
                      ))}
                    </div>
                  </div>
                )}
              </motion.div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </section>
  );
};
