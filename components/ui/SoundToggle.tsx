"use client";

import React, { useEffect, useState } from "react";
import { sound } from "@/lib/audio";
import { Volume2, VolumeX } from "lucide-react";

export const SoundToggle: React.FC = () => {
  const [isMuted, setIsMuted] = useState(false);

  useEffect(() => {
    setIsMuted(sound.getMuted());
  }, []);

  const toggleSound = () => {
    const nextState = sound.toggleMute();
    setIsMuted(nextState);
    if (!nextState) {
      sound.playSignal();
    }
  };

  return (
    <button
      onClick={toggleSound}
      title={isMuted ? "Unmute UI Audio Signals" : "Mute UI Audio Signals"}
      className="fixed bottom-6 left-6 z-40 flex items-center gap-2.5 px-3 py-2 rounded-full bg-[#121212]/80 backdrop-blur-md border border-white/10 text-neutral-400 hover:text-white hover:border-violet-500/40 transition-all text-xs font-mono group shadow-lg"
    >
      <div className="flex items-center gap-0.5 h-3">
        {isMuted ? (
          <VolumeX className="w-3.5 h-3.5 text-neutral-500" />
        ) : (
          <>
            <span className="w-0.5 h-2 bg-violet-400 animate-pulse" />
            <span className="w-0.5 h-3.5 bg-cyan-400 animate-pulse delay-75" />
            <span className="w-0.5 h-1.5 bg-violet-400 animate-pulse delay-150" />
          </>
        )}
      </div>
      <span className="text-[10px] tracking-wider uppercase">
        {isMuted ? "AUDIO: OFF" : "AUDIO: ACTIVE"}
      </span>
    </button>
  );
};

