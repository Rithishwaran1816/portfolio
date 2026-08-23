"use client";

import React, { useRef, useState } from "react";
import Image from "next/image";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Sparkles, ArrowUpRight, ShieldCheck, Cpu } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import { sound } from "@/lib/audio";

interface Profile3DCardProps {
  className?: string;
  badgeText?: string;
  subTitle?: string;
  showInstagram?: boolean;
  compact?: boolean;
}

export const Profile3DCard: React.FC<Profile3DCardProps> = ({
  className = "",
  badgeText = "FOUNDER @ APEX LABS",
  subTitle = "RITHISHWARAN",
  showInstagram = true,
  compact = false,
}) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const [isHovered, setIsHovered] = useState(false);

  // Motion values for 3D Tilt Effect
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x, { stiffness: 300, damping: 20 });
  const mouseYSpring = useSpring(y, { stiffness: 300, damping: 20 });

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], [18, -18]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], [-18, 18]);

  const glossX = useTransform(mouseXSpring, [-0.5, 0.5], ["0%", "100%"]);
  const glossY = useTransform(mouseYSpring, [-0.5, 0.5], ["0%", "100%"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct);
    y.set(yPct);
  };

  const handleMouseEnter = () => {
    setIsHovered(true);
    sound.playHover();
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
    x.set(0);
    y.set(0);
  };

  return (
    <div className={`perspective-1000 select-none ${className}`}>
      <motion.div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
        style={{
          rotateX,
          rotateY,
          transformStyle: "preserve-3d",
        }}
        animate={{
          scale: isHovered ? 1.03 : 1,
        }}
        transition={{ duration: 0.3 }}
        className="relative rounded-3xl bg-white/90 dark:bg-[#101216]/95 border border-slate-200 dark:border-white/15 p-4 sm:p-5 shadow-2xl overflow-hidden group cursor-pointer"
      >
        {/* Layer 0: Ambient Glowing Backing */}
        <div className="absolute -inset-2 bg-gradient-to-r from-violet-600/30 via-pink-500/30 to-cyan-500/30 rounded-3xl blur-xl opacity-50 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />

        {/* Dynamic Specular Lighting Layer */}
        <motion.div
          className="absolute inset-0 z-30 pointer-events-none opacity-0 group-hover:opacity-40 transition-opacity duration-300 rounded-3xl"
          style={{
            background: `radial-gradient(circle at ${glossX} ${glossY}, rgba(255,255,255,0.8), transparent 60%)`,
          }}
        />

        {/* Layer 1: Frame & Photo */}
        <div
          className="relative w-full aspect-[3/4] rounded-2xl overflow-hidden shadow-inner border border-slate-200 dark:border-white/10"
          style={{ transform: "translateZ(20px)" }}
        >
          <Image
            src="/profile.jpg"
            alt="Rithishwaran Profile"
            fill
            priority
            className="object-cover object-top filter brightness-95 group-hover:brightness-105 group-hover:scale-105 transition-all duration-500"
          />

          {/* Gradient Overlay for Text Legibility */}
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />

          {/* Floating Badge (Top Left) */}
          <div
            className="absolute top-3 left-3 z-20 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white font-mono text-[10px] uppercase tracking-wider shadow-lg"
            style={{ transform: "translateZ(40px)" }}
          >
            <span className="w-1.5 h-1.5 rounded-full bg-cyan-400 animate-ping" />
            <span>{badgeText}</span>
          </div>

          {/* Bottom Card Identity Text (Layer 3D Floating) */}
          <div
            className="absolute bottom-4 left-4 right-4 z-20 flex flex-col gap-1 text-white"
            style={{ transform: "translateZ(50px)" }}
          >
            <div className="flex items-center justify-between">
              <div>
                <span className="text-[10px] font-mono text-cyan-300 uppercase tracking-widest block font-bold">
                  PORTFOLIO & VENTURE ARCHITECT
                </span>
                <h3 className="text-xl font-black font-sans uppercase tracking-tight text-white drop-shadow-md">
                  {subTitle}
                </h3>
              </div>

              {showInstagram && (
                <a
                  href="https://www.instagram.com/responsible_boy_1821?igsi=NGRxZWtsYjd0dDAy"
                  target="_blank"
                  rel="noopener noreferrer"
                  onClick={(e) => {
                    e.stopPropagation();
                    sound.playClick();
                  }}
                  className="p-2.5 rounded-xl bg-pink-600/80 hover:bg-pink-500 text-white border border-pink-400/40 backdrop-blur-md transition-all shadow-lg hover:scale-110"
                  title="Visit Instagram @responsible_boy_1821"
                >
                  <Icons.Instagram className="w-4 h-4" />
                </a>
              )}
            </div>
          </div>
        </div>

        {/* Card Sub-Footer Info */}
        <div
          className="pt-3 flex items-center justify-between font-mono text-[11px] text-slate-600 dark:text-neutral-400"
          style={{ transform: "translateZ(30px)" }}
        >
          <div className="flex items-center gap-1.5 font-bold">
            <ShieldCheck className="w-3.5 h-3.5 text-emerald-500" />
            <span className="text-slate-900 dark:text-white">RITHISHWARAN K</span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};
