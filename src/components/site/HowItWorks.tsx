import { FileCheck, Bike, TrendingUp, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

const STEPS = [
  {
    number: "01",
    icon: FileCheck,
    title: "Complete Your KYC",
    description:
      "Add your personal details like Aadhaar, PAN, and Bank details. Quick, secure verification — done in minutes.",
  },
  {
    number: "02",
    icon: Bike,
    title: "Choose Your Scooter",
    description:
      "Pick from our fleet of swappable-battery and high-speed electric scooters that match your route and earnings goal.",
  },
  {
    number: "03",
    icon: TrendingUp,
    title: "Start Earning",
    description:
      "Activate your driver ID and start delivering. Track earnings in real time and get paid every week.",
  },
];

export const HowItWorks = () => {
  return (
    <section className="py-24 sm:py-32 bg-background">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">Simple Process</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            How It Works
          </h2>
          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Get started in three simple steps and start earning within 24 hours.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 lg:gap-10">
          {STEPS.map((step, index) => {
            const Icon = step.icon;
            return (
              <motion.div
                key={step.number}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: index * 0.15 }}
                className="relative group"
              >
                <div className="relative bg-card rounded-2xl p-8 shadow-card hover:shadow-elegant transition-all duration-500 group-hover:-translate-y-2 border border-border h-full">
                  <div className="absolute -top-5 -left-5 w-16 h-16 bg-secondary rounded-2xl flex items-center justify-center shadow-elegant">
                    <span className="font-display text-xl font-extrabold text-secondary-foreground">
                      {step.number}
                    </span>
                  </div>
                  <div className="w-16 h-16 rounded-2xl bg-gradient-primary flex items-center justify-center mb-6 mt-4 shadow-elegant">
                    <Icon className="w-8 h-8 text-primary-foreground" />
                  </div>
                  <h3 className="font-display text-2xl font-bold mb-3">{step.title}</h3>
                  <p className="text-muted-foreground leading-relaxed mb-6">
                    {step.description}
                  </p>
                  <div className="flex items-center gap-2 text-primary font-semibold group-hover:gap-4 transition-all">
                    <span className="text-sm">Learn more</span>
                    <ArrowRight className="w-4 h-4" />
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="text-center mt-16"
        >
          <Button variant="hero" size="xl" className="group">
            Join OKDriver Now
            <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
