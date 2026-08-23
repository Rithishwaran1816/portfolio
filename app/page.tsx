import React from "react";
import { HeroSection } from "@/components/sections/HeroSection";
import { LLMFlagshipSection } from "@/components/sections/LLMFlagshipSection";
import { ProjectArchiveSection } from "@/components/sections/ProjectArchiveSection";
import { TechUniverseSection } from "@/components/sections/TechUniverseSection";
import { CurrentlyBuildingSection } from "@/components/sections/CurrentlyBuildingSection";
import { ApexPreviewSection } from "@/components/sections/ApexPreviewSection";

export const metadata = {
  title: "RITHISHWARAN — DIGITAL UNIVERSE | AI, LLMs & Full Stack Engineering",
  description:
    "Explore the digital laboratory of Rithishwaran. Featuring Building My Own LLM, AgriTrust, AquaGuard, Mentoring Platform, Tech Universe, and Apex Labs.",
};

export default function HomePage() {
  return (
    <div className="flex flex-col w-full">
      <HeroSection />
      <LLMFlagshipSection />
      <ProjectArchiveSection />
      <TechUniverseSection />
      <CurrentlyBuildingSection />
      <ApexPreviewSection />
    </div>
  );
}
