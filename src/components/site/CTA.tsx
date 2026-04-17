import { ArrowRight, Smartphone, Download } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const CTA = () => {
  return (
    <section id="join-us" className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="relative bg-gradient-primary rounded-3xl overflow-hidden shadow-elegant">
          <div className="absolute inset-0 opacity-20" style={{
            backgroundImage: `radial-gradient(circle at 80% 20%, hsl(var(--primary-foreground)) 0%, transparent 40%)`,
          }} />
          <div className="relative grid lg:grid-cols-2 gap-12 items-center p-8 sm:p-12 lg:p-16">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="space-y-6 text-primary-foreground"
            >
              <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/15 backdrop-blur-sm rounded-full">
                <Smartphone className="w-4 h-4" />
                <span className="text-sm font-semibold">Download Now</span>
              </div>

              <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold leading-tight">
                Ready to Start Earning?
              </h2>

              <p className="text-lg sm:text-xl text-primary-foreground/85">
                Join thousands of drivers already earning with OKDriver. Download the app and complete your registration in minutes.
              </p>

              <div className="flex flex-col sm:flex-row gap-4 pt-4">
                <Button variant="cta-light" size="xl" className="group">
                  <Download className="w-5 h-5" />
                  Download App
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                </Button>
                <Button variant="cta-outline" size="xl">Learn More</Button>
              </div>

              <div className="flex items-center gap-6 pt-6">
                {[
                  { v: "100%", l: "Verified" },
                  { v: "24/7", l: "Support" },
                  { v: "ISO", l: "Certified" },
                ].map((t, i) => (
                  <div key={t.l} className="flex items-center gap-6">
                    <div>
                      <div className="font-display text-2xl font-extrabold">{t.v}</div>
                      <div className="text-sm text-primary-foreground/70">{t.l}</div>
                    </div>
                    {i < 2 && <div className="h-10 w-px bg-primary-foreground/25" />}
                  </div>
                ))}
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              className="hidden lg:flex justify-center"
            >
              <div className="relative w-[280px] h-[560px] bg-secondary rounded-[2.5rem] p-2.5 shadow-elegant">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-5 bg-secondary rounded-b-2xl z-20" />
                <div className="w-full h-full bg-card rounded-[2rem] p-6 flex flex-col">
                  <div className="text-xs text-muted-foreground mb-1 mt-6">Welcome back,</div>
                  <div className="font-display text-2xl font-extrabold mb-5">Rajesh Kumar</div>
                  <div className="bg-gradient-primary rounded-2xl p-5 text-primary-foreground mb-4">
                    <div className="text-xs opacity-80 mb-1">Today's Earnings</div>
                    <div className="font-display text-3xl font-extrabold mb-1">₹2,450</div>
                    <div className="text-xs opacity-80">+18% from yesterday</div>
                  </div>
                  <div className="space-y-2">
                    {["Active Trips", "Completed", "Withdraw"].map((l) => (
                      <div key={l} className="flex items-center justify-between p-3 bg-muted rounded-xl">
                        <span className="text-sm font-semibold">{l}</span>
                        <ArrowRight className="w-4 h-4 text-primary" />
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};
