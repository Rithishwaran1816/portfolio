"use client";

import React, { useEffect, useState } from "react";
import { sound } from "@/lib/audio";
import { Sun, Moon } from "lucide-react";
import { motion } from "framer-motion";

export const ThemeToggle: React.FC = () => {
  const [theme, setTheme] = useState<"dark" | "light">("dark");
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
    const stored = localStorage.getItem("rw_theme") as "dark" | "light" | null;
    if (stored === "light") {
      setTheme("light");
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
    } else {
      setTheme("dark");
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
    }
  }, []);

  const toggleTheme = () => {
    sound.playSignal();
    const nextTheme = theme === "dark" ? "light" : "dark";
    setTheme(nextTheme);

    if (nextTheme === "light") {
      document.documentElement.classList.remove("dark");
      document.documentElement.classList.add("light");
      localStorage.setItem("rw_theme", "light");
    } else {
      document.documentElement.classList.remove("light");
      document.documentElement.classList.add("dark");
      localStorage.setItem("rw_theme", "dark");
    }
  };

  if (!mounted) {
    return (
      <div className="w-9 h-9 rounded-xl bg-white/5 border border-white/10 flex items-center justify-center text-neutral-400" />
    );
  }

  return (
    <button
      onClick={toggleTheme}
      title={theme === "dark" ? "Switch to Light Mode" : "Switch to Dark Mode"}
      aria-label="Toggle Dark/Light Mode"
      className="relative p-2 rounded-xl bg-slate-100 dark:bg-[#141414] border border-slate-300 dark:border-white/15 text-slate-700 dark:text-neutral-300 hover:text-slate-900 dark:hover:text-white hover:border-violet-500/50 shadow-md transition-all group cursor-pointer"
    >
      <motion.div
        key={theme}
        initial={{ rotate: -90, scale: 0.8, opacity: 0 }}
        animate={{ rotate: 0, scale: 1, opacity: 1 }}
        exit={{ rotate: 90, scale: 0.8, opacity: 0 }}
        transition={{ duration: 0.2 }}
        className="flex items-center justify-center"
      >
        {theme === "dark" ? (
          <Sun className="w-4 h-4 text-amber-400 group-hover:rotate-45 transition-transform" />
        ) : (
          <Moon className="w-4 h-4 text-violet-600 group-hover:-rotate-12 transition-transform" />
        )}
      </motion.div>
    </button>
  );
};

