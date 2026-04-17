import { ArrowRight, Zap, TrendingUp, Shield, Sparkles } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center overflow-hidden bg-gradient-soft pt-24">
      <div className="absolute inset-0 bg-gradient-hero pointer-events-none" />
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.15, 1], rotate: [0, 60, 0] }}
          transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
          className="absolute -top-32 -left-20 w-96 h-96 bg-primary/15 rounded-full blur-3xl"
        />
        <motion.div
          animate={{ scale: [1.1, 1, 1.1], rotate: [60, 0, 60] }}
          transition={{ duration: 18, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-32 -right-20 w-[28rem] h-[28rem] bg-primary-glow/20 rounded-full blur-3xl"
        />
      </div>

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div className="space-y-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full"
            >
              <Sparkles className="w-4 h-4 text-primary" />
              <span className="text-sm font-semibold text-primary">Join 10,000+ Drivers Earning Daily</span>
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="font-display text-5xl sm:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight text-foreground"
            >
              Drive Electric.
              <span className="block bg-gradient-primary bg-clip-text text-transparent">Earn More.</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg sm:text-xl text-muted-foreground max-w-xl leading-relaxed"
            >
              Start earning with India's fastest-growing electric vehicle delivery platform.
              Zero emissions, maximum earnings, complete freedom.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-col sm:flex-row gap-4"
            >
              <Button variant="hero" size="xl" className="group">
                Start Earning Today
                <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
              </Button>
              <Button variant="outline-hero" size="xl">Download App</Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="grid grid-cols-3 gap-6 pt-8 border-t border-border"
            >
              {[
                { v: "10k+", l: "Active Drivers" },
                { v: "50+", l: "Cities" },
                { v: "₹50k", l: "Avg. Monthly" },
              ].map((s) => (
                <div key={s.l}>
                  <div className="font-display text-3xl font-extrabold text-primary">{s.v}</div>
                  <div className="text-sm text-muted-foreground">{s.l}</div>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="relative"
          >
            <div className="relative bg-gradient-primary rounded-3xl p-8 shadow-elegant">
              <div className="space-y-6">
                <div className="flex items-center justify-between">
                  <div className="text-primary-foreground/80 text-sm font-semibold">Your Earnings</div>
                  <TrendingUp className="w-5 h-5 text-primary-foreground/70" />
                </div>
                <div className="font-display text-5xl sm:text-6xl font-extrabold text-primary-foreground">
                  ₹48,500
                </div>
                <div className="text-primary-foreground/80 text-sm">This month • +23% from last month</div>
                <div className="grid grid-cols-2 gap-4 pt-4">
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-primary-foreground/70 text-xs mb-1">Trips</div>
                    <div className="font-display text-2xl font-bold text-primary-foreground">247</div>
                  </div>
                  <div className="bg-white/15 backdrop-blur-sm rounded-xl p-4">
                    <div className="text-primary-foreground/70 text-xs mb-1">Rating</div>
                    <div className="font-display text-2xl font-bold text-primary-foreground">4.9★</div>
                  </div>
                </div>
              </div>
            </div>

            <motion.div
              animate={{ y: [0, -10, 0] }}
              transition={{ duration: 3, repeat: Infinity }}
              className="absolute -top-6 -right-6 bg-card rounded-2xl p-4 shadow-card"
            >
              <Shield className="w-7 h-7 text-primary" />
              <div className="text-xs font-semibold mt-2">Verified</div>
            </motion.div>

            <motion.div
              animate={{ y: [0, 10, 0] }}
              transition={{ duration: 4, repeat: Infinity }}
              className="absolute -bottom-6 -left-6 bg-card rounded-2xl p-4 shadow-card"
            >
              <Zap className="w-7 h-7 text-primary" fill="currentColor" />
              <div className="text-xs font-semibold mt-2">Zero Emission</div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
