"use client";

import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";

export const CustomCursor: React.FC = () => {
  const [mousePosition, setMousePosition] = useState({ x: -100, y: -100 });
  const [isHovering, setIsHovering] = useState(false);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    // Only enable custom cursor on non-touch devices
    const isTouch = window.matchMedia("(pointer: coarse)").matches;
    if (isTouch) return;

    const onMouseMove = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      setIsVisible(true);

      const target = e.target as HTMLElement | null;
      const isInteractive = target?.closest("button, a, input, textarea, [role='button'], .interactive");
      setIsHovering(!!isInteractive);
    };

    const onMouseLeave = () => {
      setIsVisible(false);
    };

    window.addEventListener("mousemove", onMouseMove);
    document.addEventListener("mouseleave", onMouseLeave);

    return () => {
      window.removeEventListener("mousemove", onMouseMove);
      document.removeEventListener("mouseleave", onMouseLeave);
    };
  }, []);

  if (!isVisible) return null;

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden hidden md:block">
      {/* Outer subtle tracking ring */}
      <motion.div
        className="absolute rounded-full border border-cyan-400/40 pointer-events-none"
        animate={{
          x: mousePosition.x - (isHovering ? 24 : 16),
          y: mousePosition.y - (isHovering ? 24 : 16),
          width: isHovering ? 48 : 32,
          height: isHovering ? 48 : 32,
          borderColor: isHovering ? "rgba(139, 92, 246, 0.7)" : "rgba(0, 240, 255, 0.4)",
          backgroundColor: isHovering ? "rgba(139, 92, 246, 0.08)" : "transparent",
        }}
        transition={{
          type: "spring",
          damping: 28,
          stiffness: 300,
          mass: 0.1,
        }}
      />
      {/* Central precise dot */}
      <motion.div
        className="absolute w-1.5 h-1.5 rounded-full bg-cyan-300 pointer-events-none"
        animate={{
          x: mousePosition.x - 3,
          y: mousePosition.y - 3,
          scale: isHovering ? 0 : 1,
        }}
        transition={{
          type: "spring",
          damping: 35,
          stiffness: 600,
          mass: 0.05,
        }}
      />
    </div>
  );
};

