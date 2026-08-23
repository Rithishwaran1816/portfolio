"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { sound } from "@/lib/audio";
import { Menu, X, Sparkles, ExternalLink } from "lucide-react";
import { ThemeToggle } from "@/components/ui/ThemeToggle";
import { cn } from "@/lib/utils";

const NAV_ITEMS = [
  { label: "WORK", href: "/#work" },
  { label: "LLM LAB", href: "/llm-lab", badge: "01" },
  { label: "TECH", href: "/#tech" },
  { label: "ABOUT", href: "/about" },
  { label: "APEX LABS", href: "/apex-labs", highlight: true },
  { label: "CONTACT", href: "/contact" },
];

export const Navbar: React.FC = () => {
  const pathname = usePathname();
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 40);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleLinkClick = () => {
    sound.playClick();
    setMobileMenuOpen(false);
  };

  return (
    <>
      <header
        className={cn(
          "fixed top-0 left-0 right-0 z-40 flex items-center justify-center px-4 sm:px-6 py-4 transition-all duration-500",
          scrolled ? "py-3" : "py-5"
        )}
      >
        <div className="w-full max-w-6xl flex items-center justify-between">
          {/* Logo */}
          <Link
            href="/"
            onClick={() => sound.playClick()}
            onMouseEnter={() => sound.playHover()}
            className="group relative flex items-center gap-2.5 px-3.5 py-1.5 rounded-xl bg-white/80 dark:bg-[#121212]/70 backdrop-blur-md border border-slate-200 dark:border-white/10 hover:border-violet-500/50 transition-all shadow-md dark:shadow-lg select-none"
          >
            <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-violet-600 to-cyan-500 flex items-center justify-center text-white font-mono font-bold text-sm tracking-tighter shadow-[0_0_12px_rgba(139,92,246,0.5)] group-hover:scale-105 transition-transform">
              R.
            </div>
            <div className="hidden sm:flex flex-col">
              <span className="text-xs font-mono font-semibold tracking-wider text-slate-800 dark:text-neutral-200 group-hover:text-violet-600 dark:group-hover:text-white">
                RITHISHWARAN
              </span>
              <span className="text-[9px] font-mono text-slate-500 dark:text-neutral-500 tracking-widest uppercase">
                DIGITAL UNIVERSE
              </span>
            </div>
          </Link>

          {/* Desktop Floating Navigation Bar */}
          <nav className="hidden md:flex items-center gap-1 p-1.5 rounded-full bg-white/85 dark:bg-[#121212]/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/10 shadow-lg dark:shadow-[0_8px_32px_rgba(0,0,0,0.6)]">
            {NAV_ITEMS.map((item) => {
              const isActive =
                item.href === pathname ||
                (item.href !== "/" && pathname.startsWith(item.href) && !item.href.includes("#"));

              return (
                <Link
                  key={item.label}
                  href={item.href}
                  onClick={handleLinkClick}
                  onMouseEnter={() => sound.playHover()}
                  className={cn(
                    "relative px-4 py-1.5 rounded-full text-xs font-mono tracking-wider transition-all duration-200 select-none flex items-center gap-1.5",
                    isActive
                      ? "text-slate-900 dark:text-white font-bold"
                      : item.highlight
                      ? "text-cyan-600 dark:text-cyan-400 hover:text-cyan-800 dark:hover:text-cyan-200 hover:bg-cyan-100/50 dark:hover:bg-cyan-950/30"
                      : "text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-neutral-100 hover:bg-slate-100 dark:hover:bg-white/5"
                  )}
                >
                  {isActive && (
                    <motion.div
                      layoutId="navPill"
                      className="absolute inset-0 rounded-full bg-gradient-to-r from-violet-500/20 to-cyan-500/20 border border-violet-400/40 shadow-sm dark:shadow-[0_0_15px_rgba(139,92,246,0.3)] -z-10"
                      transition={{ type: "spring", stiffness: 350, damping: 30 }}
                    />
                  )}
                  {item.highlight && <Sparkles className="w-3 h-3 text-cyan-500 dark:text-cyan-400" />}
                  <span>{item.label}</span>
                  {item.badge && (
                    <span className="text-[9px] px-1 py-0.2 rounded bg-violet-100 dark:bg-violet-900/60 text-violet-800 dark:text-violet-300 font-mono border border-violet-300 dark:border-violet-500/30 font-bold">
                      {item.badge}
                    </span>
                  )}
                </Link>
              );
            })}
          </nav>

          {/* Right Action: Status indicator + Theme Switcher + Mobile Toggle */}
          <div className="flex items-center gap-2.5">
            {/* Theme Toggle Button (Light/Dark Mode) */}
            <ThemeToggle />

            <Link
              href="/contact"
              onClick={() => sound.playClick()}
              onMouseEnter={() => sound.playHover()}
              className="hidden lg:flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 hover:border-cyan-400/40 hover:bg-slate-200/60 dark:hover:bg-white/10 text-xs font-mono text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white transition-all shadow-sm"
            >
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-pulse" />
              <span className="font-semibold">STATUS: AVAILABLE</span>
            </Link>

            {/* Mobile Hamburger Button */}
            <button
              onClick={() => {
                sound.playClick();
                setMobileMenuOpen(!mobileMenuOpen);
              }}
              aria-label="Toggle Menu"
              className="md:hidden p-2.5 rounded-xl bg-white dark:bg-[#121212]/90 border border-slate-200 dark:border-white/10 text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white shadow-md cursor-pointer"
            >
              {mobileMenuOpen ? <X className="w-5 h-5" /> : <Menu className="w-5 h-5" />}
            </button>
          </div>
        </div>
      </header>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className="fixed inset-x-4 top-20 z-40 md:hidden p-5 rounded-2xl bg-white/95 dark:bg-[#0F0F0F]/95 backdrop-blur-2xl border border-slate-200 dark:border-white/15 shadow-2xl flex flex-col gap-2"
          >
            <div className="flex items-center justify-between pb-3 border-b border-slate-200 dark:border-white/10 mb-1">
              <span className="text-[11px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-wider font-bold">
                NAVIGATION MATRIX
              </span>
              <div className="flex items-center gap-2">
                <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-emerald-100 dark:bg-emerald-950/60 text-emerald-800 dark:text-emerald-400 border border-emerald-300 dark:border-emerald-500/30 font-bold">
                  READY
                </span>
              </div>
            </div>

            {NAV_ITEMS.map((item) => (
              <Link
                key={item.label}
                href={item.href}
                onClick={handleLinkClick}
                className={cn(
                  "flex items-center justify-between p-3 rounded-xl text-sm font-mono tracking-wider transition-all",
                  pathname === item.href
                    ? "bg-violet-100 dark:bg-violet-950/40 text-violet-900 dark:text-white border border-violet-300 dark:border-violet-500/30 font-bold"
                    : item.highlight
                    ? "bg-cyan-100 dark:bg-cyan-950/30 text-cyan-800 dark:text-cyan-300 border border-cyan-300 dark:border-cyan-500/30 font-bold"
                    : "text-slate-700 dark:text-neutral-300 hover:bg-slate-100 dark:hover:bg-white/5 hover:text-slate-900 dark:hover:text-white"
                )}
              >
                <div className="flex items-center gap-2">
                  {item.highlight && <Sparkles className="w-4 h-4 text-cyan-500 dark:text-cyan-400" />}
                  <span>{item.label}</span>
                </div>
                {item.badge ? (
                  <span className="text-[10px] px-1.5 py-0.5 rounded bg-violet-200 dark:bg-violet-800 text-violet-800 dark:text-violet-200 font-bold">
                    {item.badge}
                  </span>
                ) : (
                  <ExternalLink className="w-3.5 h-3.5 text-slate-400 dark:text-neutral-500" />
                )}
              </Link>
            ))}

            <div className="pt-3 border-t border-slate-200 dark:border-white/10 mt-2 flex flex-col gap-2 text-xs font-mono text-slate-500 dark:text-neutral-400">
              <div className="flex justify-between">
                <span>FOUNDER:</span>
                <span className="text-slate-900 dark:text-white font-bold">APEX LABS</span>
              </div>
              <div className="flex justify-between">
                <span>FOCUS:</span>
                <span className="text-cyan-600 dark:text-cyan-400 font-bold">AI / LLMs / FULL STACK</span>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};
