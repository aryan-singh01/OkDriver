import { ArrowRight, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

import { OnboardingSection } from "@/components/site/OnboardingSection";
import { HowItWorks } from "@/components/site/HowItWorks";
import { ScooterFleet } from "@/components/site/ScooterFleet";
import { Benefits } from "@/components/site/Benefits";
import { CTA } from "@/components/site/CTA";
import { Footer } from "@/components/site/Footer";

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

            {/* LEFT SIDE */}
            <div className="space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10"
              >
                <Sparkles className="w-4 h-4 text-green-500" />
                <span className="text-sm font-medium text-white/80">
                  Smart AI Safety Platform
                </span>
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
                An AI-powered co-pilot that transforms your smartphone into an
                intelligent dashcam. Get fatigue alerts, emergency SOS, voice
                assistance, and safety tools designed for Indian roads.
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
                  { value: "99%", label: "AI Accuracy" },
                  { value: "10k+", label: "Drivers" },
                ].map((item) => (
                  <div key={item.label}>
                    <div className="text-3xl font-bold text-green-500">
                      {item.value}
                    </div>
                    <div className="text-sm text-white/50">
                      {item.label}
                    </div>
                  </div>
                ))}
              </motion.div>
            </div>

            {/* RIGHT PHONE UI */}
            <motion.div
              initial={{ opacity: 0, scale: 0.92 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.7 }}
              className="relative flex justify-center"
            >
              <div className="absolute -top-6 -left-6 px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white text-sm">
                Driver Alert
              </div>

              <div className="absolute top-4 -right-8 px-5 py-3 rounded-2xl bg-white/10 border border-white/10 backdrop-blur-xl text-white text-sm">
                SOS Ready
              </div>

              <div className="w-[340px] h-[690px] rounded-[42px] bg-black border border-white/10 p-5 shadow-2xl relative">
                <div className="rounded-2xl bg-white/10 p-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      Hello Driver!
                    </p>
                    <p className="text-xs text-white/50">
                      Drive Safe Today
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10" />
                </div>

                <h3 className="mt-6 mb-4 text-lg font-semibold text-white">
                  Safety Features
                </h3>

                <div className="grid grid-cols-2 gap-4">
                  {[
                    ["DashCam", "bg-green-500"],
                    ["Emergency SOS", "bg-orange-500"],
                    ["Drowsiness", "bg-blue-500"],
                    ["AI Assistant", "bg-purple-500"],
                  ].map(([title, color]) => (
                    <div
                      key={title}
                      className={`${color} h-32 rounded-2xl p-4 flex flex-col justify-between`}
                    >
                      <span className="text-sm font-semibold text-white">
                        {title}
                      </span>
                      <span className="text-xs text-white/70">Open</span>
                    </div>
                  ))}
                </div>

                <div className="absolute bottom-24 left-0 right-0 px-8 flex justify-between text-xs text-white/40">
                  <span>Home</span>
                  <span>Dashcam</span>
                  <span>Profile</span>
                </div>

                <div className="absolute bottom-4 left-4 right-4 rounded-2xl bg-slate-800/80 border border-white/10 backdrop-blur-xl p-4 flex justify-between items-center">
                  <div>
                    <p className="text-sm font-semibold text-white">
                      OkDriver Assistant
                    </p>
                    <p className="text-xs text-white/50">
                      How can I assist you?
                    </p>
                  </div>
                  <div className="w-10 h-10 rounded-full bg-white/10" />
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