"use client";

import React, { useRef, useState } from "react";
import { cn } from "@/lib/utils";
import { sound } from "@/lib/audio";

interface GlowingCardProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  className?: string;
  glowColor?: string;
  enableTilt?: boolean;
}

export const GlowingCard: React.FC<GlowingCardProps> = ({
  children,
  className,
  glowColor = "rgba(139, 92, 246, 0.15)",
  enableTilt = true,
  ...props
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0, opacity: 0 });
  const [tilt, setTilt] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left;
    const y = e.clientY - rect.top;

    setMousePos({ x, y, opacity: 1 });

    if (enableTilt) {
      const centerX = rect.width / 2;
      const centerY = rect.height / 2;
      const tiltX = -((y - centerY) / centerY) * 4;
      const tiltY = ((x - centerX) / centerX) * 4;
      setTilt({ x: tiltX, y: tiltY });
    }
  };

  const handleMouseEnter = () => {
    sound.playHover();
  };

  const handleMouseLeave = () => {
    setMousePos((prev) => ({ ...prev, opacity: 0 }));
    setTilt({ x: 0, y: 0 });
  };

  return (
    <div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      style={{
        transform: enableTilt
          ? `perspective(1000px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg)`
          : undefined,
        transition: "transform 0.2s cubic-bezier(0.16, 1, 0.3, 1), border-color 0.3s ease, background-color 0.3s ease",
      }}
      className={cn(
        "relative rounded-2xl bg-white/90 dark:bg-[#0F0F0F]/80 backdrop-blur-xl border border-slate-200/90 dark:border-white/[0.08] hover:border-slate-400 dark:hover:border-white/20 transition-all duration-300 overflow-hidden group shadow-lg dark:shadow-none text-slate-900 dark:text-white",
        className
      )}
      {...props}
    >
      {/* Radial mouse follower glow */}
      <div
        className="pointer-events-none absolute -inset-px transition-opacity duration-300 ease-out"
        style={{
          opacity: mousePos.opacity,
          background: `radial-gradient(400px circle at ${mousePos.x}px ${mousePos.y}px, ${glowColor}, transparent 70%)`,
        }}
      />

      {/* Card Content */}
      <div className="relative z-10">{children}</div>
    </div>
  );
};
