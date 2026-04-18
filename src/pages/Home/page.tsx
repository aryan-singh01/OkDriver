import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { OnboardingSection } from "@/components/site/OnboardingSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ScooterFleet } from "@/components/site/ScooterFleet";
import { Benefits } from "@/components/site/Benefits";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

/* ── tiny inline SVG icons so we don't rely on extra imports ── */
const IconCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
    <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const IconEye = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/>
    <circle cx="12" cy="12" r="3"/>
  </svg>
);
const IconBot = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
    <rect x="3" y="11" width="18" height="11" rx="2"/><path d="M12 2a3 3 0 0 0-3 3v6h6V5a3 3 0 0 0-3-3z"/>
    <path d="M8 11V7"/><path d="M16 11V7"/><line x1="9" y1="16" x2="9" y2="16"/>
    <line x1="15" y1="16" x2="15" y2="16"/>
  </svg>
);
const IconSun = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/70">
    <circle cx="12" cy="12" r="5"/><line x1="12" y1="1" x2="12" y2="3"/>
    <line x1="12" y1="21" x2="12" y2="23"/><line x1="4.22" y1="4.22" x2="5.64" y2="5.64"/>
    <line x1="18.36" y1="18.36" x2="19.78" y2="19.78"/><line x1="1" y1="12" x2="3" y2="12"/>
    <line x1="21" y1="12" x2="23" y2="12"/><line x1="4.22" y1="19.78" x2="5.64" y2="18.36"/>
    <line x1="18.36" y1="5.64" x2="19.78" y2="4.22"/>
  </svg>
);
const IconHome = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
    <path d="M10 20v-6h4v6h5v-8h3L12 3 2 12h3v8z"/>
  </svg>
);
const IconVideoCamera = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M23 7l-7 5 7 5V7z"/><rect x="1" y="5" width="15" height="14" rx="2" ry="2"/>
  </svg>
);
const IconUser = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5">
    <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
    <circle cx="12" cy="7" r="4"/>
  </svg>
);
const IconMic = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" className="w-5 h-5 text-white">
    <path d="M12 1a3 3 0 0 0-3 3v8a3 3 0 0 0 6 0V4a3 3 0 0 0-3-3z"/>
    <path d="M19 10v2a7 7 0 0 1-14 0v-2"/><line x1="12" y1="19" x2="12" y2="23"/>
    <line x1="8" y1="23" x2="16" y2="23"/>
  </svg>
);
const IconChevron = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5}
       strokeLinecap="round" strokeLinejoin="round" className="w-4 h-4 text-white/80">
    <path d="M9 18l6-6-6-6"/>
  </svg>
);
const IconAlert = () => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
       strokeLinecap="round" strokeLinejoin="round" className="w-3.5 h-3.5">
    <circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/>
    <line x1="12" y1="16" x2="12.01" y2="16"/>
  </svg>
);

const featureCards = [
  {
    title: "DashCam",
    subtitle: "Record your journey for...",
    color: "bg-[#2ecc71]",
    icon: <IconCamera />,
  },
  {
    title: "Emergency SOS",
    subtitle: "Quick help in critical sit...",
    color: "bg-[#e67e22]",
    icon: <span className="text-[10px] font-black text-white bg-white/20 px-1.5 py-0.5 rounded">SOS</span>,
  },
  {
    title: "Drowsiness\nMonitoring",
    subtitle: "AI-powered drowsiness...",
    color: "bg-[#3498db]",
    icon: <IconEye />,
  },
  {
    title: "OkDriver\nAssistant",
    subtitle: "Can talk to you and assi...",
    color: "bg-[#9b59b6]",
    icon: <IconBot />,
  },
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-screen overflow-hidden bg-[#070707] pt-24 flex items-center">
        {/* Grid Background */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:42px_42px]" />

        {/* Glow Effects */}
        <div className="absolute top-10 left-10 w-80 h-80 bg-green-500/20 blur-[140px]" />
        <div className="absolute bottom-0 right-0 w-96 h-96 bg-blue-500/20 blur-[140px]" />

        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
          <div className="grid lg:grid-cols-2 gap-16 items-center">

            {/* ── LEFT ── */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                <Sparkles className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-white/80">Smart AI Safety Platform</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.1 }}
                className="text-5xl sm:text-6xl lg:text-7xl font-bold leading-tight text-white"
              >
                Safer Roads. <br />
                <span className="text-green-500">Smarter Driving.</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="text-lg text-white/60 max-w-xl"
              >
                An AI-powered co-pilot that transforms your smartphone into an intelligent
                dashcam. Get fatigue alerts, emergency SOS, voice assistance, and safety
                tools designed for Indian roads.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3 }}
                className="flex flex-col sm:flex-row gap-4"
              >
                <Button className="bg-green-500 hover:bg-green-600 text-white rounded-xl px-8 py-6 text-base">
                  Get Started
                  <ArrowRight className="ml-2 w-5 h-5" />
                </Button>
                <Button
                  variant="outline"
                  className="border-white/10 bg-white/5 text-white hover:bg-white/10 rounded-xl px-8 py-6 text-base"
                >
                  Learn More
                </Button>
              </motion.div>

              <motion.div
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4 }}
                className="grid grid-cols-3 gap-6 pt-8 border-t border-white/10"
              >
                {[
                  { value: "24/7", label: "SOS Support" },
                  { value: "99%",  label: "AI Accuracy" },
                  { value: "10k+", label: "Drivers" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl font-bold text-green-500">{item.value}</div>
                    <div className="text-sm text-white/50">{item.label}</div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* ── RIGHT — PHONE MOCKUP ── */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >

              {/* Floating badges */}
              <div className="absolute top-6 -left-4 z-20 flex items-center gap-2
                              px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15
                              backdrop-blur-xl text-white text-sm font-medium shadow-xl">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75" />
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-green-400" />
                </span>
                Driver Alert
              </div>

              <div className="absolute top-6 -right-4 z-20 flex items-center gap-2
                              px-4 py-2.5 rounded-2xl bg-white/10 border border-white/15
                              backdrop-blur-xl text-white text-sm font-medium shadow-xl">
                <IconAlert />
                SOS Ready
              </div>

              {/* Phone shell */}
              <div className="w-[310px] rounded-[44px] bg-[#111111] border border-white/10
                              shadow-[0_40px_80px_rgba(0,0,0,0.6)] overflow-hidden relative"
                   style={{ boxShadow: "0 40px 100px rgba(0,0,0,0.7), inset 0 1px 0 rgba(255,255,255,0.08)" }}>

                {/* Status bar */}
                <div className="flex items-center justify-between px-6 pt-4 pb-1 text-white text-[11px]">
                  <span className="font-semibold">9:41</span>
                  <div className="w-24 h-6 rounded-full bg-black absolute left-1/2 -translate-x-1/2 top-0" />
                  <div className="flex items-center gap-1 text-white/70">
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <path d="M1 9l2 2c4.97-4.97 13.03-4.97 18 0l2-2C16.93 2.93 7.08 2.93 1 9zm8 8l3 3 3-3a4.237 4.237 0 00-6 0zm-4-4l2 2a7.074 7.074 0 0110 0l2-2C15.14 9.14 8.87 9.14 5 13z"/>
                    </svg>
                    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
                      <rect x="2" y="7" width="18" height="11" rx="2"/><path d="M22 11v3a1 1 0 0 1-1-1v-1a1 1 0 0 1 1-1z"/>
                    </svg>
                  </div>
                </div>

                {/* Scrollable screen area */}
                <div className="bg-[#0d0d0d] mx-3 mb-0 rounded-[28px] px-4 pt-4 pb-2 space-y-4">

                  {/* Hello Driver card */}
                  <div className="bg-[#1a1a1a] rounded-2xl px-4 py-3.5 flex items-center justify-between">
                    <div className="flex items-center gap-3">
                      <div className="w-9 h-9 rounded-xl bg-white/10 flex items-center justify-center">
                        <IconCamera />
                      </div>
                      <div>
                        <p className="text-sm font-semibold text-white leading-tight">Hello Driver!</p>
                        <p className="text-[11px] text-white/45 mt-0.5">Good Evening! Drive Safe Today</p>
                      </div>
                    </div>
                    <div className="w-8 h-8 rounded-full bg-white/8 flex items-center justify-center">
                      <IconSun />
                    </div>
                  </div>

                  {/* Section label */}
                  <p className="text-[15px] font-semibold text-white px-0.5">Safety Features</p>

                  {/* 2×2 feature grid */}
                  <div className="grid grid-cols-2 gap-3">
                    {featureCards.map((card) => (
                      <div
                        key={card.title}
                        className={`${card.color} rounded-2xl p-3.5 flex flex-col justify-between h-[130px]`}
                      >
                        {/* Top row: icon + chevron */}
                        <div className="flex items-start justify-between">
                          <div className="w-8 h-8 rounded-xl bg-white/20 flex items-center justify-center">
                            {card.icon}
                          </div>
                          <IconChevron />
                        </div>

                        {/* Bottom: title + subtitle */}
                        <div>
                          <p className="text-[13px] font-semibold text-white leading-snug whitespace-pre-line">
                            {card.title}
                          </p>
                          <p className="text-[10px] text-white/60 mt-0.5 truncate">
                            {card.subtitle}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  {/* Spacer */}
                  <div className="h-2" />
                </div>

                {/* Bottom nav */}
                <div className="bg-[#0d0d0d] mx-3 mb-3 rounded-[22px] px-6 py-3
                                flex items-center justify-between border-t border-white/5">
                  {[
                    { icon: <IconHome />,        label: "Home",    active: true  },
                    { icon: <IconVideoCamera />, label: "Dashcam", active: false },
                    { icon: <IconUser />,         label: "Profile", active: false },
                  ].map(({ icon, label, active }) => (
                    <div key={label} className="flex flex-col items-center gap-1">
                      <span className={active ? "text-white" : "text-white/30"}>
                        {icon}
                      </span>
                      <span className={`text-[10px] ${active ? "text-white" : "text-white/30"}`}>
                        {label}
                      </span>
                      {active && (
                        <span className="w-1 h-1 rounded-full bg-white mt-0.5" />
                      )}
                    </div>
                  ))}
                </div>
              </div>

              {/* OkDriver Assistant bar — outside phone, below */}
              <div className="absolute -bottom-14 left-1/2 -translate-x-1/2 w-[300px]
                              rounded-2xl bg-[#1c1c1e]/90 border border-white/10
                              backdrop-blur-xl px-5 py-3.5 flex items-center justify-between shadow-2xl">
                <div>
                  <p className="text-sm font-semibold text-white">OkDriver Assistant</p>
                  <p className="text-xs text-white/45 mt-0.5">How can I assist you?</p>
                </div>
                <div className="w-10 h-10 rounded-full bg-white/10 border border-white/10
                                flex items-center justify-center">
                  <IconMic />
                </div>
              </div>

            </motion.div>
          </div>
        </div>
      </section>

      <OnboardingSection />
      <HowItWorks />
      <ScooterFleet />
      <Benefits />
      <CTA />
      <Footer />
    </>
  );
}