import { DollarSign, Clock, Shield, TrendingUp, Smartphone, Leaf } from "lucide-react";
import { motion } from "framer-motion";

const BENEFITS = [
  { icon: DollarSign, title: "Flexible Earnings", description: "Earn ₹40k-60k monthly with flexible working hours that fit your schedule." },
  { icon: Clock, title: "24/7 Support", description: "Round-the-clock assistance for all your queries and technical issues." },
  { icon: Shield, title: "Insurance Coverage", description: "Comprehensive insurance for you and your vehicle during deliveries." },
  { icon: TrendingUp, title: "Weekly Payouts", description: "Get paid weekly directly to your bank account. No delays, guaranteed." },
  { icon: Smartphone, title: "Easy-to-Use App", description: "Intuitive mobile app to manage deliveries, earnings, and schedules." },
  { icon: Leaf, title: "Zero Emissions", description: "Drive electric, contribute to a cleaner environment while earning." },
];

export const Benefits = () => {
  return (
    <section id="benefits" className="py-24 sm:py-32 bg-secondary text-secondary-foreground relative overflow-hidden">
      <div className="absolute inset-0 opacity-[0.06]" style={{
        backgroundImage: `radial-gradient(circle at 2px 2px, hsl(var(--primary-foreground)) 1px, transparent 0)`,
        backgroundSize: "32px 32px",
      }} />
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[80%] h-96 bg-primary/20 blur-[120px] rounded-full pointer-events-none" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary-foreground/10 backdrop-blur-sm border border-primary-foreground/10 rounded-full mb-6">
            <span className="text-sm font-semibold text-primary">Why Choose Us</span>
          </div>
          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Driver Benefits
          </h2>
          <p className="text-lg sm:text-xl text-secondary-foreground/70 max-w-2xl mx-auto">
            Everything you need to succeed as an OKDriver partner.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {BENEFITS.map((b, i) => {
            const Icon = b.icon;
            return (
              <motion.div
                key={b.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08 }}
                className="group bg-secondary-foreground/[0.04] backdrop-blur-sm rounded-2xl p-6 hover:bg-secondary-foreground/[0.08] transition-all duration-500 border border-secondary-foreground/10 hover:border-primary/30"
              >
                <div className="w-14 h-14 rounded-xl bg-gradient-primary flex items-center justify-center mb-6 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-500 shadow-elegant">
                  <Icon className="w-7 h-7 text-primary-foreground" />
                </div>
                <h3 className="font-display text-xl font-bold mb-3">{b.title}</h3>
                <p className="text-secondary-foreground/60 leading-relaxed">{b.description}</p>
              </motion.div>
            );
          })}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-8 pt-12 border-t border-secondary-foreground/10"
        >
          {[
            { v: "10,000+", l: "Active Drivers" },
            { v: "50+", l: "Cities Covered" },
            { v: "1M+", l: "Deliveries Made" },
            { v: "4.8★", l: "Average Rating" },
          ].map((s) => (
            <div key={s.l} className="text-center">
              <div className="font-display text-4xl sm:text-5xl font-extrabold text-primary mb-2">{s.v}</div>
              <div className="text-secondary-foreground/60">{s.l}</div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
