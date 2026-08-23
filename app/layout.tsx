import type { Metadata, Viewport } from "next";
import "./globals.css";
import { SmoothScrollProvider } from "@/components/layout/SmoothScrollProvider";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { LoadingScreen } from "@/components/layout/LoadingScreen";
import { CustomCursor } from "@/components/ui/CustomCursor";
import { SoundToggle } from "@/components/ui/SoundToggle";
import { FloatingPersonalContact } from "@/components/layout/FloatingPersonalContact";
import { FloatingApexContact } from "@/components/layout/FloatingApexContact";

export const metadata: Metadata = {
  title: "RITHISHWARAN — DIGITAL UNIVERSE | AI, LLMs & Full Stack Engineering",
  description:
    "Explore the digital laboratory of Rithishwaran. Featuring Building My Own LLM, AgriTrust, AquaGuard, Mentoring Platform, Tech Universe, and Apex Labs.",
  keywords: [
    "Rithishwaran",
    "Apex Labs",
    "Building My Own LLM",
    "Artificial Intelligence",
    "Transformer Architecture",
    "Self-Attention",
    "Full Stack Development",
    "Next.js",
    "React",
    "Machine Learning",
    "Data Analytics",
  ],
  authors: [{ name: "Rithishwaran" }],
  creator: "Rithishwaran",
  openGraph: {
    title: "RITHISHWARAN — DIGITAL UNIVERSE",
    description:
      "A world-class digital laboratory experience. AI, Large Language Models, Full Stack Engineering, and Founder of Apex Labs.",
    type: "website",
    locale: "en_US",
  },
};

export const viewport: Viewport = {
  themeColor: "#070707",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark" suppressHydrationWarning>
      <head>
        <script
          dangerouslySetInnerHTML={{
            __html: `
              try {
                const theme = localStorage.getItem('rw_theme');
                if (theme === 'light') {
                  document.documentElement.classList.remove('dark');
                  document.documentElement.classList.add('light');
                } else {
                  document.documentElement.classList.remove('light');
                  document.documentElement.classList.add('dark');
                }
              } catch (e) {}
            `,
          }}
        />
      </head>
      <body className="bg-slate-50 dark:bg-[#070707] text-slate-900 dark:text-[#F5F5F5] antialiased selection:bg-violet-600/30 selection:text-white min-h-screen flex flex-col justify-between transition-colors duration-300">
        <SmoothScrollProvider>
          {/* Cinematic Startup Loading Sequence */}
          <LoadingScreen />

          {/* Micro-interaction Custom Cursor */}
          <CustomCursor />

          {/* Floating Navigation */}
          <Navbar />

          {/* Main Viewport Content */}
          <main className="flex-1 w-full">{children}</main>

          {/* Audio Synthesizer Toggle */}
          <SoundToggle />

          {/* Personal Floating Contact System */}
          <FloatingPersonalContact />

          {/* Apex Labs Floating Widget */}
          <FloatingApexContact />

          {/* Cinematic Footer */}
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
