import React from "react";
import { ContactForm } from "@/components/contact/ContactForm";
import { Mail, Sparkles, ArrowLeft, ArrowUpRight, MessageSquare } from "lucide-react";
import { Icons } from "@/components/ui/Icons";
import Link from "next/link";

export const metadata = {
  title: "CONTACT — Rithishwaran | Let's Turn Ideas Into Something Real",
  description:
    "Get in touch with Rithishwaran for technology partnerships, AI/LLM engineering, full stack development, and Apex Labs digital solutions.",
};

export default function ContactPage() {
  const directChannels = [
    {
      label: "WHATSAPP (INSTANT ROUTE)",
      value: "+91 95142 78272",
      href: "https://wa.me/919514278272?text=Hello%20Rithishwaran!%20I'd%20like%20to%20discuss%20a%20project%20with%20you%20%2F%20Apex%20Labs.",
      icon: <Icons.WhatsApp className="w-5 h-5 text-emerald-400" />,
      subtext: "Instant WhatsApp transmission for ideas & rapid responses",
      external: true,
    },
    {
      label: "DIRECT EMAIL",
      value: "rithishdivinan@gmail.com",
      href: "mailto:rithishdivinan@gmail.com",
      icon: <Mail className="w-5 h-5 text-violet-400" />,
      subtext: "Best for formal engineering proposals & detailed specs",
    },
    {
      label: "LINKEDIN NETWORK",
      value: "linkedin.com/in/rithishwarank18",
      href: "https://www.linkedin.com/in/rithishwarank18/",
      icon: <Icons.LinkedIn className="w-5 h-5 text-blue-400" />,
      subtext: "Professional network & career updates",
      external: true,
    },
    {
      label: "INSTAGRAM PROFILE",
      value: "@responsible_boy_1821",
      href: "https://www.instagram.com/responsible_boy_1821?igsi=NGRxZWtsYjd0dDAy",
      icon: <Icons.Instagram className="w-5 h-5 text-pink-500" />,
      subtext: "Personal Instagram profile & direct messaging",
      external: true,
    },
    {
      label: "GITHUB REPOSITORIES",
      value: "github.com/Rithishwaran1816",
      href: "https://github.com/Rithishwaran1816",
      icon: <Icons.GitHub className="w-5 h-5 text-slate-700 dark:text-white" />,
      subtext: "Source repositories & open-source explorations",
      external: true,
    },
  ];

  return (
    <div className="min-h-screen pt-28 pb-20 px-6 sm:px-12 bg-slate-50 dark:bg-[#070707] text-slate-900 dark:text-white relative overflow-hidden transition-colors duration-300">
      {/* Background Glow */}
      <div className="absolute top-20 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-cyan-600/10 rounded-full blur-[180px] pointer-events-none" />
      <div className="absolute inset-0 bg-grid-pattern opacity-20 pointer-events-none" />

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
        <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-8 pb-8 border-b border-slate-200 dark:border-white/10">
          <div className="space-y-4 max-w-2xl">
            <div className="flex items-center gap-2">
              <span className="px-3 py-1 rounded-full bg-cyan-100 dark:bg-cyan-950/80 border border-cyan-300 dark:border-cyan-400/50 text-cyan-800 dark:text-cyan-300 font-mono text-[11px] uppercase tracking-widest font-bold flex items-center gap-1.5 shadow-sm">
                <MessageSquare className="w-3.5 h-3.5 text-cyan-600 dark:text-cyan-400" />
                <span>INITIATE TRANSMISSION</span>
              </span>
            </div>

            <h1 className="text-4xl sm:text-6xl font-black text-slate-900 dark:text-white tracking-tight uppercase leading-[1.04]">
              HAVE AN IDEA? <br />
              <span className="text-gradient-cyan">LET&apos;S TURN IT INTO REALITY.</span>
            </h1>

            <p className="text-slate-600 dark:text-neutral-300 text-base sm:text-lg font-light leading-relaxed">
              Whether you are looking to build a high-performance web product, integrate custom LLM chatbots, develop machine learning systems, or collaborate with Apex Labs — all messages are instantly routed to my direct WhatsApp.
            </p>
          </div>

          <div className="flex flex-col gap-2 font-mono text-xs text-slate-600 dark:text-neutral-400">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-emerald-500 dark:bg-emerald-400 animate-ping" />
              <span className="text-slate-900 dark:text-white font-bold">WHATSAPP: +91 95142 78272</span>
            </div>
            <span>RESPONSE TIME: FAST & DIRECT</span>
          </div>
        </div>

        {/* Contact Grid: Form + Channels */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Form */}
          <div className="lg:col-span-7">
            <ContactForm />
          </div>

          {/* Right Direct Channels */}
          <div className="lg:col-span-5 flex flex-col gap-4">
            <span className="text-xs font-mono text-cyan-600 dark:text-cyan-400 uppercase tracking-wider font-bold">
              DIRECT CHANNELS & PROFILES:
            </span>

            {directChannels.map((ch) => (
              <a
                key={ch.label}
                href={ch.href}
                target={ch.external ? "_blank" : undefined}
                rel={ch.external ? "noopener noreferrer" : undefined}
                className="p-5 rounded-2xl bg-white dark:bg-[#0E0E12]/90 border border-slate-200 dark:border-white/10 hover:border-cyan-400/50 hover:bg-slate-50 dark:hover:bg-[#14141C] transition-all flex flex-col gap-2 group shadow-sm dark:shadow-lg"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-3">
                    <div className="p-2 rounded-lg bg-slate-100 dark:bg-white/5 border border-slate-200 dark:border-white/10">
                      {ch.icon}
                    </div>
                    <div>
                      <span className="text-[10px] font-mono text-slate-500 dark:text-neutral-400 uppercase tracking-widest block font-semibold">
                        {ch.label}
                      </span>
                      <span className="text-sm font-mono font-bold text-slate-900 dark:text-white group-hover:text-cyan-600 dark:group-hover:text-cyan-300 transition-colors">
                        {ch.value}
                      </span>
                    </div>
                  </div>
                  <ArrowUpRight className="w-4 h-4 text-slate-400 dark:text-neutral-500 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                </div>
                <p className="text-xs text-slate-500 dark:text-neutral-400 font-light font-sans pl-11">
                  {ch.subtext}
                </p>
              </a>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
