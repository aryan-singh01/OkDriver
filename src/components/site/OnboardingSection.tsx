import { useState, useEffect } from "react";
import { CheckCircle2, Circle, ArrowRight, Battery, Zap, Wallet, Filter, ChevronLeft, MoreVertical } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

interface Step {
  number: number;
  title: string;
  description: string;
}

const STEPS: Step[] = [
  {
    number: 1,
    title: "Complete Your KYC",
    description: "Add your personal details like Aadhaar, PAN, and Bank details!",
  },
  {
    number: 2,
    title: "Choose Your Scooter",
    description: "Select your scooter like swappable battery scooter",
  },
  {
    number: 3,
    title: "Start Earning",
    description: "Activate your client ID and begin deliveries to earn more!",
  },
];

export const OnboardingSection = () => {
  const [active, setActive] = useState(0);

  // Auto-cycle through steps
  useEffect(() => {
    const id = setInterval(() => setActive((s) => (s + 1) % STEPS.length), 4500);
    return () => clearInterval(id);
  }, []);

  return (
    <section id="how-it-works" className="relative py-24 sm:py-32 bg-surface-soft overflow-hidden">
      <div className="absolute inset-0 bg-gradient-hero opacity-60 pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">Onboarding Made Simple</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4 text-foreground">
            Start Your Journey
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Join thousands of drivers earning with India's fastest-growing EV delivery platform — three simple steps.
          </p>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
          {/* Steps */}
          <div>
            <div className="space-y-2">
              {STEPS.map((step, index) => {
                const isActive = active === index;
                const isCompleted = active > index;
                return (
                  <motion.button
                    key={step.number}
                    onClick={() => setActive(index)}
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="relative w-full text-left group"
                  >
                    {index < STEPS.length - 1 && (
                      <div className="absolute left-5 top-12 bottom-0 w-0.5 bg-step-inactive">
                        <motion.div
                          initial={{ height: 0 }}
                          animate={{ height: isCompleted ? "100%" : "0%" }}
                          transition={{ duration: 0.5 }}
                          className="w-full bg-primary"
                        />
                      </div>
                    )}

                    <div className="flex gap-5 relative pb-10">
                      <motion.div
                        animate={{
                          scale: isActive ? 1.1 : 1,
                        }}
                        className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center transition-colors ${
                          isActive
                            ? "bg-primary text-primary-foreground shadow-elegant"
                            : isCompleted
                            ? "bg-primary text-primary-foreground"
                            : "bg-step-inactive text-step-text-inactive"
                        }`}
                      >
                        {isCompleted ? <CheckCircle2 className="w-5 h-5" /> : <Circle className="w-5 h-5 fill-current" />}
                      </motion.div>

                      <div className="flex-1 pt-1">
                        <h3
                          className={`font-display font-bold text-xl mb-1 transition-colors ${
                            isActive ? "text-foreground" : "text-step-text-inactive"
                          }`}
                        >
                          {step.title}
                        </h3>
                        <p
                          className={`text-base leading-relaxed transition-colors ${
                            isActive ? "text-muted-foreground" : "text-step-text-inactive"
                          }`}
                        >
                          {step.description}
                        </p>
                      </div>
                    </div>
                  </motion.button>
                );
              })}
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.4 }}
              className="mt-4"
            >
              <Button variant="hero" size="xl" className="group">
                Get Started Now
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </motion.div>
          </div>

          {/* Phone mockup */}
          <div className="relative flex justify-center lg:justify-end">
            <PhoneMockup activeStep={active} />
          </div>
        </div>
      </div>
    </section>
  );
};

/* ----------------- Phone Mockup ----------------- */
const PhoneMockup = ({ activeStep }: { activeStep: number }) => {
  return (
    <div className="relative">
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 5, repeat: Infinity }}
        className="relative"
      >
        {/* Phone frame */}
        <div className="relative w-[300px] sm:w-[340px] h-[640px] bg-secondary rounded-[3rem] p-3 shadow-elegant">
          <div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-secondary rounded-b-2xl z-20" />
          <div className="relative w-full h-full bg-card rounded-[2.5rem] overflow-hidden">
            <AnimatePresence mode="wait">
              {activeStep === 0 && <KycScreen key="kyc" />}
              {activeStep === 1 && <ScooterScreen key="scooter" />}
              {activeStep === 2 && <EarningScreen key="earning" />}
            </AnimatePresence>
          </div>
        </div>

        {/* Floating ISO badge */}
        <motion.div
          animate={{ y: [0, -8, 0] }}
          transition={{ duration: 4, repeat: Infinity, delay: 0.5 }}
          className="absolute -left-6 sm:-left-10 top-32 bg-card rounded-2xl p-3 shadow-card border border-border"
        >
          <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mb-1">
            <Zap className="w-6 h-6 text-primary-foreground" fill="currentColor" />
          </div>
          <div className="text-[10px] font-bold text-foreground">OK DRIVER</div>
          <div className="text-[8px] text-muted-foreground">VERIFIED</div>
        </motion.div>

        {/* Floating earnings card */}
        <motion.div
          animate={{ y: [0, 8, 0] }}
          transition={{ duration: 4.5, repeat: Infinity }}
          className="absolute -right-4 sm:-right-12 bottom-24 bg-card rounded-2xl p-4 shadow-card border border-border min-w-[170px]"
        >
          <div className="text-xs text-muted-foreground mb-1">Last Mile Deliveries</div>
          <div className="text-xs text-muted-foreground mb-3">Maximize your earnings</div>
          <div className="space-y-2">
            <div className="bg-primary text-primary-foreground text-xs font-semibold py-2 rounded-lg text-center">Log In</div>
            <div className="border border-primary text-primary text-xs font-semibold py-2 rounded-lg text-center">Create Account</div>
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

const ScreenWrapper = ({ children }: { children: React.ReactNode }) => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4 }}
    className="w-full h-full bg-gradient-to-b from-primary/95 to-primary"
  >
    {children}
  </motion.div>
);

const KycScreen = () => (
  <ScreenWrapper>
    <div className="px-5 pt-10 pb-6 h-full flex flex-col text-primary-foreground">
      <div className="flex items-center justify-between text-xs mb-6 opacity-80">
        <span>9:41</span>
        <span>●●●●</span>
      </div>
      <div className="flex-1 flex flex-col items-center text-center">
        <div className="w-32 h-32 rounded-full bg-primary-foreground/15 backdrop-blur flex items-center justify-center mb-6 border-2 border-primary-foreground/30">
          <div className="font-display text-3xl font-extrabold">OK</div>
        </div>
        <div className="text-xs uppercase tracking-widest opacity-80 mb-2">मेरा OK Driver</div>
        <h3 className="font-display text-2xl font-extrabold mb-3">Complete Your KYC</h3>
        <p className="text-sm opacity-80 mb-6 px-4">Aadhaar • PAN • Bank account verification in minutes</p>
        <div className="w-full space-y-2 mt-auto">
          {["Aadhaar Card", "PAN Card", "Bank Details"].map((l) => (
            <div key={l} className="bg-primary-foreground/15 backdrop-blur px-4 py-3 rounded-xl flex items-center justify-between">
              <span className="text-sm font-semibold">{l}</span>
              <CheckCircle2 className="w-5 h-5" />
            </div>
          ))}
        </div>
      </div>
      <div className="text-center text-[10px] opacity-70 mt-4">#MISSION ZERO EMISSION</div>
    </div>
  </ScreenWrapper>
);

const ScooterScreen = () => (
  <motion.div
    initial={{ opacity: 0, x: 20 }}
    animate={{ opacity: 1, x: 0 }}
    exit={{ opacity: 0, x: -20 }}
    transition={{ duration: 0.4 }}
    className="w-full h-full bg-card text-foreground"
  >
    <div className="bg-primary text-primary-foreground px-5 pt-10 pb-4">
      <div className="flex items-center justify-between text-xs mb-4 opacity-80">
        <span>11:07</span>
        <span>●●●●</span>
      </div>
      <div className="flex items-center justify-between mb-4">
        <ChevronLeft className="w-5 h-5" />
        <MoreVertical className="w-5 h-5" />
      </div>
      <div className="text-sm opacity-80 mb-2">Scooter Selection</div>
      <div className="flex items-center gap-2">
        <div className="flex-1 flex items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-[10px]">✓</div>
          <div className="flex-1 h-0.5 bg-primary-foreground/30" />
        </div>
        <div className="flex-1 flex items-center gap-1">
          <div className="w-6 h-6 rounded-full bg-primary-foreground/20 flex items-center justify-center text-[10px]">✓</div>
          <div className="flex-1 h-0.5 bg-primary-foreground/30" />
        </div>
        <div className="w-6 h-6 rounded-full bg-primary-foreground text-primary flex items-center justify-center text-[10px] font-bold">3</div>
      </div>
    </div>
    <div className="px-4 py-4 space-y-3">
      <div className="flex items-center justify-between">
        <h4 className="font-display font-bold text-base">Select Scooter</h4>
        <div className="text-xs text-muted-foreground border border-border rounded-lg px-2 py-1">Sector-66 Gur ▾</div>
      </div>
      <div className="flex gap-2">
        <div className="flex items-center gap-1 px-3 py-1.5 bg-primary/10 text-primary text-xs font-semibold rounded-full">
          <Filter className="w-3 h-3" /> All Filter
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full">
          <Zap className="w-3 h-3" /> Speed
        </div>
        <div className="flex items-center gap-1 px-3 py-1.5 bg-muted text-muted-foreground text-xs rounded-full">
          <Battery className="w-3 h-3" /> Battery
        </div>
      </div>
      {[1, 2, 3].map((i) => (
        <div key={i} className="flex gap-3 p-2 border border-border rounded-xl">
          <div className="w-16 h-16 bg-gradient-to-br from-primary/30 to-primary/10 rounded-lg flex items-center justify-center">
            <Battery className="w-7 h-7 text-primary" />
          </div>
          <div className="flex-1">
            <div className="flex items-center justify-between mb-1">
              <span className="font-semibold text-sm">NYX (A)</span>
              <span className="text-[10px] bg-primary/10 text-primary px-2 py-0.5 rounded-full font-semibold">50 EV</span>
            </div>
            <div className="flex gap-2 text-[10px] text-muted-foreground mb-1">
              <span className="flex items-center gap-0.5"><Battery className="w-2.5 h-2.5" /> Charging</span>
              <span className="flex items-center gap-0.5"><Zap className="w-2.5 h-2.5" /> Speed</span>
            </div>
            <div className="text-xs font-semibold">Joining Rental ₹2000-2500</div>
          </div>
        </div>
      ))}
    </div>
  </motion.div>
);

const EarningScreen = () => (
  <ScreenWrapper>
    <div className="px-5 pt-10 pb-6 h-full flex flex-col text-primary-foreground">
      <div className="flex items-center justify-between text-xs mb-6 opacity-80">
        <span>9:41</span>
        <span>●●●●</span>
      </div>
      <div className="text-sm opacity-80 mb-1">Welcome back,</div>
      <div className="font-display text-2xl font-extrabold mb-6">Rajesh Kumar</div>

      <div className="bg-primary-foreground/15 backdrop-blur rounded-2xl p-5 mb-4 border border-primary-foreground/20">
        <div className="text-xs opacity-80 mb-1">Today's Earnings</div>
        <div className="font-display text-4xl font-extrabold mb-3">₹2,450</div>
        <div className="flex items-center gap-2 text-xs">
          <div className="bg-primary-foreground/20 px-2 py-1 rounded-full">+18% ↑</div>
          <span className="opacity-80">vs yesterday</span>
        </div>
      </div>

      <div className="grid grid-cols-2 gap-3 mb-4">
        <div className="bg-primary-foreground/15 backdrop-blur rounded-xl p-3">
          <div className="text-xs opacity-70">Trips</div>
          <div className="font-display text-xl font-extrabold">14</div>
        </div>
        <div className="bg-primary-foreground/15 backdrop-blur rounded-xl p-3">
          <div className="text-xs opacity-70">Distance</div>
          <div className="font-display text-xl font-extrabold">87 km</div>
        </div>
      </div>

      <div className="bg-primary-foreground text-primary rounded-xl p-3 flex items-center justify-between mt-auto">
        <div className="flex items-center gap-2">
          <Wallet className="w-5 h-5" />
          <span className="text-sm font-semibold">Withdraw Now</span>
        </div>
        <ArrowRight className="w-4 h-4" />
      </div>
    </div>
  </ScreenWrapper>
);
