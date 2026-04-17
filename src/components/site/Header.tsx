import { useEffect, useState } from "react";
import { Menu, X, Zap } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";

const NAV = [
  { label: "How It Works", href: "#how-it-works" },
  { label: "Scooters", href: "#scooters" },
  { label: "Benefits", href: "#benefits" },
  { label: "Join Us", href: "#join-us" },
];

export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled ? "bg-background/80 backdrop-blur-lg border-b border-border" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">
          <a href="#" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
              <Zap className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display font-extrabold text-2xl text-foreground tracking-tight">
              OK<span className="text-primary">Driver</span>
            </span>
          </a>

          <nav className="hidden md:flex items-center gap-8">
            {NAV.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-semibold text-foreground/70 hover:text-primary transition-colors"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:block">
            <Button variant="hero" size="lg">Get Started</Button>
          </div>

          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-foreground"
            aria-label="Toggle menu"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-background border-t border-border"
          >
            <nav className="px-4 py-6 space-y-4">
              {NAV.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  className="block text-base font-semibold text-foreground/80 hover:text-primary"
                  onClick={() => setOpen(false)}
                >
                  {item.label}
                </a>
              ))}
              <Button variant="hero" className="w-full">Get Started</Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};
