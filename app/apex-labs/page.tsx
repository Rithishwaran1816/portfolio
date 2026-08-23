import React from "react";
import { ApexServicesGrid } from "@/components/apex-labs/ApexServicesGrid";
import { ApexEcosystemGraph } from "@/components/apex-labs/ApexEcosystemGraph";
import { Profile3DCard } from "@/components/ui/Profile3DCard";
import { Button3D } from "@/components/ui/Button3D";
import { Sparkles, ArrowRight, ArrowLeft } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import Link from "next/link";

export const metadata = {
  title: "APEX LABS — Digital Technology & Intelligent Solutions Initiative",
  description:
    "Apex Labs transforms ideas into modern websites, intelligent chatbots, machine learning systems, digital business tools, and social media experiences.",
};

export default function ApexLabsPage() {
  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 bg-slate-50 dark:bg-[#06090D] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-25 pointer-events-none" />

      <div className="max-w-6xl mx-auto flex flex-col gap-16 relative z-10">
        {/* Back Link */}
        <Link
          href="/"
          className="inline-flex items-center gap-2 text-xs font-mono text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white transition-colors font-bold"
        >
          <ArrowLeft className="w-4 h-4" />
          <span>RETURN TO DIGITAL UNIVERSE</span>
        </Link>

        {/* Hero Header */}
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-cyan-500/20">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/50 text-cyan-800 dark:text-cyan-300 font-mono text-[11px] uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>DIGITAL TECHNOLOGY INITIATIVE</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-[1.04]">
              APEX LABS. <br />
              <span className="text-gradient-cyan">BUILDING DIGITAL SOLUTIONS FOR REAL IDEAS.</span>
            </h1>

            <p className="text-slate-600 dark:text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              Apex Labs is a digital technology initiative focused on transforming ambitious ideas into modern websites, intelligent chatbots, machine learning projects, digital solutions, and engaging social media experiences.
            </p>
          </div>

          <div className="flex flex-wrap items-center gap-3">
            <a
              href="https://www.instagram.com/apex_.labs?igsi=MXF3bXpvYTExemxpaA=="
              target="_blank"
              rel="noopener noreferrer"
              className="px-5 py-3.5 rounded-xl bg-pink-100 dark:bg-pink-950/40 border border-pink-300 dark:border-pink-500/40 text-pink-800 dark:text-pink-200 font-mono text-xs uppercase tracking-wider flex items-center gap-2 hover:bg-pink-200 dark:hover:bg-pink-900/40 transition-all shadow-sm font-bold"
            >
              <Icons.Instagram className="w-4 h-4 text-pink-600 dark:text-pink-400" />
              <span>@apex_.labs ON INSTAGRAM</span>
            </a>

            <Button3D
              href="/contact?type=apex"
              variant="accent"
              size="md"
              icon={<ArrowRight className="w-4 h-4" />}
            >
              START A PROJECT
            </Button3D>
          </div>
        </div>

        {/* 5 Core Interactive Services */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
              CORE PRACTICE AREAS
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              SERVICES & DIGITAL ARCHITECTURE
            </h2>
          </div>
          <ApexServicesGrid />
        </div>

        {/* Interactive Ecosystem Graph */}
        <div className="space-y-4">
          <div className="space-y-1">
            <span className="text-[10px] font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-widest font-bold">
              FULL CYCLE DELIVERY
            </span>
            <h2 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              INTERACTIVE APEX ECOSYSTEM
            </h2>
          </div>
          <ApexEcosystemGraph />
        </div>

        {/* Founder Leadership Showcase Section */}
        <div className="p-8 sm:p-12 rounded-3xl bg-white dark:bg-[#0A0F16]/95 border border-slate-200 dark:border-cyan-500/30 shadow-2xl flex flex-col lg:flex-row items-center gap-10">
          <div className="w-full lg:w-80 shrink-0">
            <Profile3DCard
              badgeText="FOUNDER & LEAD ARCHITECT"
              subTitle="RITHISHWARAN"
              showInstagram={true}
            />
          </div>

          <div className="flex flex-col gap-6 text-left">
            <div className="space-y-2">
              <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/50 text-cyan-800 dark:text-cyan-300 font-mono text-[11px] uppercase tracking-widest font-bold inline-flex items-center gap-1.5 shadow-sm">
                <Sparkles className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>LEADERSHIP & VISION</span>
              </span>
              <h2 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
                MEET THE FOUNDER — RITHISHWARAN
              </h2>
              <p className="text-slate-600 dark:text-neutral-300 text-sm sm:text-base font-light leading-relaxed">
                &quot;Apex Labs was founded on a singular principle: to bridge the gap between high-level technological ideas and tangible, production-grade digital software. Every client product we engineer combines modern full-stack web standards with intelligent AI systems and robust data pipelines.&quot;
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 font-mono text-xs">
              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex flex-col gap-1">
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold uppercase">FOUNDER INSTAGRAM</span>
                <a
                  href="https://www.instagram.com/responsible_boy_1821?igsi=NGRxZWtsYjd0dDAy"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 dark:text-white font-bold hover:text-pink-500 flex items-center gap-1.5 transition-colors"
                >
                  <Icons.Instagram className="w-3.5 h-3.5 text-pink-500" />
                  <span>@responsible_boy_1821</span>
                </a>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 dark:bg-white/[0.03] border border-slate-200 dark:border-white/10 flex flex-col gap-1">
                <span className="text-[10px] text-cyan-600 dark:text-cyan-400 font-bold uppercase">APEX LABS INITIATIVE</span>
                <a
                  href="https://www.instagram.com/apex_.labs?igsi=MXF3bXpvYTExemxpaA=="
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-slate-900 dark:text-white font-bold hover:text-pink-500 flex items-center gap-1.5 transition-colors"
                >
                  <Icons.Instagram className="w-3.5 h-3.5 text-pink-500" />
                  <span>@apex_.labs</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Closing CTA */}
        <div className="p-8 sm:p-12 rounded-2xl bg-gradient-to-r from-cyan-100 via-blue-50 to-purple-100 dark:from-cyan-950/40 dark:via-blue-950/30 dark:to-purple-950/40 border border-cyan-300 dark:border-cyan-500/30 flex flex-col sm:flex-row items-center justify-between gap-8 text-center sm:text-left shadow-lg">
          <div className="space-y-2">
            <h3 className="text-2xl sm:text-3xl font-black text-slate-900 dark:text-white uppercase tracking-tight">
              READY TO BRING YOUR PROJECT TO LIFE?
            </h3>
            <p className="text-sm text-slate-600 dark:text-neutral-300 font-light max-w-lg">
              Whether you need a cutting-edge web product, a custom AI chatbot, or end-to-end digital solutions, Apex Labs delivers with engineering precision.
            </p>
          </div>

          <Button3D href="/contact?type=apex" variant="accent" size="lg">
            HAVE AN IDEA? LET&apos;S BUILD IT →
          </Button3D>
        </div>
      </div>
    </div>
  );
}

