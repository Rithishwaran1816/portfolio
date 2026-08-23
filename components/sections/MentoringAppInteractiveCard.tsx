"use client";

import React, { useState } from "react";
import { GlowingCard } from "@/components/ui/GlowingCard";
import { sound } from "@/lib/audio";
import { Users, GraduationCap, Shield, Layers, CheckCircle2, UserCheck } from "lucide-react";

export const MentoringAppInteractiveCard: React.FC = () => {
  const [selectedRole, setSelectedRole] = useState<"mentor" | "student" | "admin">("mentor");

  const roleDetails = {
    mentor: {
      title: "MENTOR PORTAL",
      badge: "GUIDANCE & REVIEW",
      features: [
        "Syllabus & Milestone Roadmap Designer",
        "1-on-1 Async Review & Code Feedback",
        "Live Mentorship Calendar Integration",
        "Student Progress Health Index",
      ],
      stats: "12 Students Assigned • 94% Milestone Completion",
    },
    student: {
      title: "STUDENT PORTAL",
      badge: "LEARNING & MILESTONES",
      features: [
        "Interactive Skill Progression Trajectory",
        "Direct Doubt Resolution Thread",
        "Automated Milestone Submission Pipeline",
        "Personalized Resource Recommendations",
      ],
      stats: "Level 4 Mastery • 8 Projects Completed",
    },
    admin: {
      title: "INSTITUTION ADMIN",
      badge: "OVERSIGHT & ANALYTICS",
      features: [
        "Cohort-Wide Competency Heatmaps",
        "Mentor Workload & Capacity Balancing",
        "Role-Based Access Control (RBAC)",
        "Automated Performance & Audit Reports",
      ],
      stats: "300+ Active Users • 100% Data Integrity",
    },
  };

  return (
    <GlowingCard
      id="mentoring-app"
      glowColor="rgba(245, 158, 11, 0.2)"
      className="p-6 sm:p-10 border border-amber-300 dark:border-amber-500/20 bg-white dark:bg-[#0E0C08]/90 shadow-xl"
    >
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
        {/* Left Project Info */}
        <div className="lg:col-span-6 flex flex-col gap-5">
          <div className="flex items-center gap-2.5">
            <span className="px-2.5 py-1 rounded-md bg-amber-100 dark:bg-amber-950/70 text-amber-800 dark:text-amber-400 font-mono text-[10px] tracking-widest border border-amber-300 dark:border-amber-500/30 font-bold">
              04 — ACADEMIC PLATFORM ENGINEERING
            </span>
            <span className="text-xs font-mono text-slate-500 dark:text-neutral-500 font-semibold">FULL STACK</span>
          </div>

          <div>
            <h3 className="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight uppercase">
              MENTORING PLATFORM
            </h3>
            <p className="text-sm font-mono text-amber-600 dark:text-amber-400 font-bold tracking-wider mt-1">
              GUIDE. CONNECT. ELEVATE.
            </p>
          </div>

          <p className="text-slate-600 dark:text-neutral-300 text-sm font-light leading-relaxed">
            A comprehensive multi-role academic mentoring platform uniting mentors, students, and administrators with structured milestone roadmaps, automated reviews, and institutional analytics.
          </p>

          {/* Interactive Role Switcher */}
          <div className="space-y-2 pt-2">
            <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-500 uppercase tracking-widest block font-bold">
              SELECT PORTAL PERSPECTIVE:
            </span>
            <div className="grid grid-cols-3 gap-2 font-mono text-xs">
              {(["mentor", "student", "admin"] as const).map((role) => (
                <button
                  key={role}
                  onClick={() => {
                    sound.playHover();
                    setSelectedRole(role);
                  }}
                  className={`py-2 px-3 rounded-lg uppercase tracking-wider transition-all border text-center cursor-pointer ${
                    selectedRole === role
                      ? "bg-amber-100 dark:bg-amber-950/70 border-amber-400 text-amber-900 dark:text-amber-300 font-bold shadow-sm"
                      : "bg-slate-50 dark:bg-white/[0.02] border-slate-200 dark:border-white/10 text-slate-600 dark:text-neutral-400 hover:text-slate-900 dark:hover:text-white"
                  }`}
                >
                  {role}
                </button>
              ))}
            </div>
          </div>

          {/* Tech Stack */}
          <div className="flex flex-wrap gap-1.5 pt-2">
            {["React", "Node.js", "Express", "MongoDB", "Tailwind CSS", "JWT Auth", "REST APIs"].map((tech) => (
              <span
                key={tech}
                className="px-2.5 py-1 rounded bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10 font-mono text-[10px] text-slate-700 dark:text-neutral-300 font-semibold"
              >
                {tech}
              </span>
            ))}
          </div>
        </div>

        {/* Right Role Preview & Connected Topology */}
        <div className="lg:col-span-6 rounded-2xl bg-slate-50 dark:bg-[#090704] border border-amber-300 dark:border-amber-500/30 p-6 flex flex-col gap-5 shadow-2xl relative overflow-hidden">
          <div className="flex items-center justify-between pb-3 border-b border-amber-200 dark:border-amber-500/20">
            <div className="flex items-center gap-2">
              <Users className="w-4 h-4 text-amber-600 dark:text-amber-400" />
              <span className="text-xs font-mono text-amber-800 dark:text-amber-300 font-bold tracking-wider">
                {roleDetails[selectedRole].title}
              </span>
            </div>
            <span className="text-[10px] font-mono text-amber-800 dark:text-amber-400 px-2 py-0.5 rounded bg-amber-100 dark:bg-amber-950/80 border border-amber-300 dark:border-amber-500/30 font-bold">
              {roleDetails[selectedRole].badge}
            </span>
          </div>

          {/* Connected Network Diagram */}
          <div className="p-3 rounded-xl bg-white dark:bg-amber-950/20 border border-slate-200 dark:border-amber-500/20 font-mono text-[11px] text-amber-900 dark:text-amber-200/90 space-y-1 shadow-sm">
            <div className="flex items-center justify-between text-slate-500 dark:text-neutral-400 text-[10px]">
              <span>ECOSYSTEM TOPOLOGY:</span>
              <span className="text-amber-600 dark:text-amber-400 font-bold">CONNECTED</span>
            </div>
            <div className="flex items-center justify-around py-2">
              <div className="px-3 py-1.5 rounded-lg bg-amber-100 dark:bg-amber-900/40 border border-amber-400 dark:border-amber-500/50 text-amber-900 dark:text-amber-300 font-bold">
                MENTOR
              </div>
              <span className="text-amber-500">⇄</span>
              <div className="px-3 py-1.5 rounded-lg bg-cyan-100 dark:bg-cyan-900/40 border border-cyan-400 dark:border-cyan-500/50 text-cyan-900 dark:text-cyan-300 font-bold">
                STUDENTS (1:N)
              </div>
              <span className="text-amber-500">⇄</span>
              <div className="px-3 py-1.5 rounded-lg bg-purple-100 dark:bg-purple-900/40 border border-purple-400 dark:border-purple-500/50 text-purple-900 dark:text-purple-300 font-bold">
                ADMIN
              </div>
            </div>
          </div>

          {/* Dynamic Role Features List */}
          <div className="space-y-2 font-mono text-xs">
            {roleDetails[selectedRole].features.map((feat) => (
              <div key={feat} className="flex items-center gap-2 text-slate-800 dark:text-neutral-200">
                <CheckCircle2 className="w-3.5 h-3.5 text-amber-500 shrink-0" />
                <span>{feat}</span>
              </div>
            ))}
          </div>

          <div className="p-3 rounded-xl bg-white dark:bg-white/[0.02] border border-slate-200 dark:border-white/10 font-mono text-xs text-slate-700 dark:text-neutral-300 flex items-center justify-between shadow-sm">
            <span className="text-slate-500 dark:text-neutral-500 text-[10px] uppercase tracking-wider font-semibold">PORTAL TELEMETRY</span>
            <span className="text-amber-600 dark:text-amber-300 font-bold">{roleDetails[selectedRole].stats}</span>
          </div>
        </div>
      </div>
    </GlowingCard>
  );
};
