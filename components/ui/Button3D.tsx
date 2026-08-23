"use client";

import React, { useRef, useState } from "react";
import Link from "next/link";
import { sound } from "@/lib/audio";
import { cn } from "@/lib/utils";

interface Button3DProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  href?: string;
  variant?: "primary" | "secondary" | "accent" | "outline" | "ghost";
  size?: "sm" | "md" | "lg";
  children: React.ReactNode;
  className?: string;
  external?: boolean;
  icon?: React.ReactNode;
  iconPosition?: "left" | "right";
}

export const Button3D: React.FC<Button3DProps> = ({
  href,
  variant = "primary",
  size = "md",
  children,
  className,
  external,
  icon,
  iconPosition = "right",
  onClick,
  ...props
}) => {
  const buttonRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState({ x: 0, y: 0 });
  const [isPressed, setIsPressed] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!buttonRef.current) return;
    const rect = buttonRef.current.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    // Mild tilt angle
    setTilt({ x: -(y / rect.height) * 12, y: (x / rect.width) * 12 });
  };

  const handleMouseEnter = () => {
    sound.playHover();
  };

  const handleMouseLeave = () => {
    setTilt({ x: 0, y: 0 });
    setIsPressed(false);
  };

  const handleMouseDown = () => {
    sound.playClick();
    setIsPressed(true);
  };

  const handleMouseUp = () => {
    setIsPressed(false);
  };

  // Base size classes
  const sizeClasses = {
    sm: "px-4 py-2 text-xs tracking-wider",
    md: "px-6 py-3 text-sm tracking-wide font-medium",
    lg: "px-8 py-4 text-base tracking-wider font-semibold",
  }[size];

  // Variant styling
  const variantClasses = {
    primary:
      "bg-gradient-to-r from-violet-600 via-indigo-600 to-purple-700 text-white shadow-[0_0_20px_rgba(139,92,246,0.35)] hover:shadow-[0_0_30px_rgba(139,92,246,0.55)] border border-violet-400/30",
    secondary:
      "bg-white dark:bg-[#141414]/90 text-slate-800 dark:text-neutral-200 border border-slate-300 dark:border-white/10 hover:border-slate-400 dark:hover:border-white/30 hover:bg-slate-100 dark:hover:bg-[#1E1E1E] shadow-md dark:shadow-[0_4px_20px_rgba(0,0,0,0.5)] font-semibold",
    accent:
      "bg-gradient-to-r from-cyan-500 to-blue-600 text-black font-extrabold shadow-[0_0_20px_rgba(0,240,255,0.4)] hover:shadow-[0_0_30px_rgba(0,240,255,0.6)] border border-cyan-300/40",
    outline:
      "bg-transparent text-slate-700 dark:text-neutral-200 border border-slate-300 dark:border-white/20 hover:border-violet-500 hover:text-slate-900 dark:hover:text-white hover:shadow-sm font-semibold",
    ghost:
      "bg-transparent text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white hover:bg-slate-200/50 dark:hover:bg-white/5 font-semibold",
  }[variant];

  const content = (
    <div
      ref={buttonRef}
      onMouseMove={handleMouseMove}
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      onMouseDown={handleMouseDown}
      onMouseUp={handleMouseUp}
      style={{
        transform: `perspective(600px) rotateX(${tilt.x}deg) rotateY(${tilt.y}deg) scale(${
          isPressed ? 0.96 : 1
        }) translateZ(${isPressed ? "-4px" : "0px"})`,
        transition: isPressed
          ? "transform 0.08s ease"
          : "transform 0.25s cubic-bezier(0.16, 1, 0.3, 1), box-shadow 0.25s ease, border-color 0.25s ease",
      }}
      className={cn(
        "relative group inline-flex items-center justify-center rounded-xl uppercase overflow-hidden cursor-pointer select-none transition-all",
        sizeClasses,
        variantClasses,
        className
      )}
    >
      {/* Subtle glass reflection sweep on hover */}
      <span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700 ease-out" />

      {/* Content wrapper */}
      <span className="relative z-10 flex items-center gap-2">
        {icon && iconPosition === "left" && (
          <span className="transition-transform duration-200 group-hover:-translate-x-1">
            {icon}
          </span>
        )}
        <span>{children}</span>
        {icon && iconPosition === "right" && (
          <span className="transition-transform duration-200 group-hover:translate-x-1">
            {icon}
          </span>
        )}
      </span>
    </div>
  );

  if (href) {
    if (external) {
      return (
        <a
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block"
        >
          {content}
        </a>
      );
    }
    return (
      <Link href={href} className="inline-block">
        {content}
      </Link>
    );
  }

  return (
    <button onClick={onClick} {...props} className="inline-block outline-none">
      {content}
    </button>
  );
};

