import { useState } from "react";
import { Battery, Zap, MapPin, Bike } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const SCOOTERS = [
  {
    id: 1,
    model: "NYX (A)",
    type: "Swappable",
    speed: "50 km/h",
    range: "80-100 km",
    rental: "₹2000-2500",
    badge: "Most Popular",
    tag: "Battery",
  },
  {
    id: 2,
    model: "NYX (B)",
    type: "Charging",
    speed: "45 km/h",
    range: "70-90 km",
    rental: "₹2000-2500",
    badge: "Eco Friendly",
    tag: "Battery",
  },
  {
    id: 3,
    model: "NYX (C)",
    type: "Swappable",
    speed: "55 km/h",
    range: "90-110 km",
    rental: "₹2200-2800",
    badge: "High Speed",
    tag: "Speed",
  },
];

const FILTERS = ["All Range", "Battery", "Speed", "Swappable"];

export const ScooterFleet = () => {
  const [active, setActive] = useState("All Range");

  const filtered = SCOOTERS.filter(
    (s) => active === "All Range" || s.tag === active || s.type === active
  );

  return (
    <section id="scooters" className="py-24 sm:py-32 bg-surface-soft">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-primary/10 border border-primary/20 rounded-full mb-6">
            <Bike className="w-4 h-4 text-primary" />
            <span className="text-sm font-semibold text-primary">
              Our Fleet
            </span>
          </div>

          <h2 className="font-display text-4xl sm:text-5xl lg:text-6xl font-extrabold mb-4">
            Select Your Scooter
          </h2>

          <p className="text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto">
            Choose from our range of electric scooters with swappable battery
            options.
          </p>
        </motion.div>

        {/* Filters */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {FILTERS.map((f) => (
            <button
              key={f}
              onClick={() => setActive(f)}
              className={`px-6 py-2.5 rounded-full font-semibold text-sm transition-all duration-300 ${
                active === f
                  ? "bg-primary text-primary-foreground shadow-elegant"
                  : "bg-card text-muted-foreground hover:bg-muted border border-border"
              }`}
            >
              {f}
            </button>
          ))}
        </motion.div>

        {/* Cards */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="wait">
            {filtered.map((s, i) => (
              <motion.div
                key={`${active}-${s.id}`}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -20 }}
                transition={{
                  duration: 0.35,
                  delay: i * 0.06,
                  ease: "easeOut",
                }}
                whileHover={{
                  y: -8,
                  transition: { duration: 0.2 },
                }}
                className="group bg-card rounded-2xl overflow-hidden border border-border shadow-md hover:shadow-xl"
              >
                {/* Top */}
                <div className="relative h-52 bg-gradient-to-br from-primary/20 via-primary/5 to-accent flex items-center justify-center overflow-hidden">
                  <motion.div
                    whileHover={{ scale: 1.08, rotate: -4 }}
                    transition={{ type: "spring", stiffness: 220 }}
                    className="w-32 h-32 rounded-full bg-gradient-primary flex items-center justify-center shadow-elegant"
                  >
                    <Bike className="w-16 h-16 text-primary-foreground" />
                  </motion.div>

                  <div className="absolute top-4 right-4 px-3 py-1.5 bg-secondary text-secondary-foreground text-xs font-semibold rounded-full shadow-card">
                    {s.badge}
                  </div>
                </div>

                {/* Content */}
                <div className="p-6">
                  <h3 className="font-display text-2xl font-bold mb-1">
                    {s.model}
                  </h3>

                  <div className="flex items-center gap-1.5 text-sm text-muted-foreground mb-5">
                    <MapPin className="w-4 h-4" />
                    <span>{s.type} Battery</span>
                  </div>

                  {/* Specs */}
                  <div className="grid grid-cols-2 gap-3 mb-5">
                    <div className="flex items-center gap-2 p-2.5 bg-muted rounded-lg">
                      <Zap className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-[10px] text-muted-foreground">
                          Speed
                        </div>
                        <div className="text-sm font-semibold">{s.speed}</div>
                      </div>
                    </div>

                    <div className="flex items-center gap-2 p-2.5 bg-muted rounded-lg">
                      <Battery className="w-4 h-4 text-primary" />
                      <div>
                        <div className="text-[10px] text-muted-foreground">
                          Range
                        </div>
                        <div className="text-sm font-semibold">{s.range}</div>
                      </div>
                    </div>
                  </div>

                  {/* Bottom */}
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <div className="text-xs text-muted-foreground">
                        Joining Rental
                      </div>
                      <div className="font-display text-lg font-extrabold text-primary">
                        {s.rental}
                      </div>
                    </div>

                    <Button variant="hero" size="sm">
                      Select
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};