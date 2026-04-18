import { useEffect, useRef, useState } from "react";
import { Menu, X, Zap, ChevronDown, Monitor, FileText, Lock, Briefcase, CreditCard, ExternalLink } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Link, useLocation } from "react-router-dom";

const NAV = [
  { label: "HOME", path: "/" },
  { label: "ABOUT US", path: "/about" },
  { label: "SERVICES", path: "/services" },
  { label: "DEVELOPER API", path: "/developer-api" },
  { label: "CONTACT US", path: "/contact" },
];

const MORE_ITEMS = [
  {
    icon: CreditCard,
    label: "Plans",
    description: "View our pricing plans",
    href: "/plans",
    external: false,
  },
  {
    icon: Monitor,
    label: "Live DMS Demo",
    description: "Try our driver monitoring system",
    href: "https://demo.okdriver.com",
    external: true,
  },
  {
    icon: FileText,
    label: "Terms & Conditions",
    description: "Our terms of service",
    href: "/terms",
    external: false,
  },
  {
    icon: Lock,
    label: "Privacy Policy",
    description: "How we protect your data",
    href: "/privacy",
    external: false,
  },
  {
    icon: Briefcase,
    label: "Careers",
    description: "Join our team",
    href: "/careers",
    external: false,
  },
];

// ─── More Dropdown ─────────────────────────────────────────────────────────────
const MoreDropdown = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const location = useLocation();

  const isMoreActive = MORE_ITEMS.some((item) => location.pathname === item.href);

  const handleEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
    setOpen(true);
  };

  const handleLeave = () => {
    timeoutRef.current = setTimeout(() => setOpen(false), 120);
  };

  return (
    <div
      className="relative"
      onMouseEnter={handleEnter}
      onMouseLeave={handleLeave}
    >
      {/* Trigger */}
      <button
        className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center gap-1 ${
          isMoreActive || open
            ? "bg-white text-green-600"
            : "bg-transparent text-white hover:bg-white hover:text-black"
        }`}
      >
        MORE
        <ChevronDown
          size={16}
          style={{
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            transition: "transform 0.2s ease",
          }}
        />
      </button>

      {/* Dropdown */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8, scale: 0.97 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -8, scale: 0.97 }}
            transition={{ duration: 0.15, ease: "easeOut" }}
            className="absolute top-[calc(100%+10px)] left-0 min-w-[270px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50"
          >
            {MORE_ITEMS.map((item) => {
              const Icon = item.icon;
              const content = (
                <div className="flex items-start gap-3.5 px-3.5 py-3 rounded-xl hover:bg-gray-50 transition-colors cursor-pointer group">
                  <span className="mt-0.5 text-gray-600 group-hover:text-green-600 transition-colors flex-shrink-0">
                    <Icon size={20} strokeWidth={1.8} />
                  </span>
                  <div className="flex flex-col gap-0.5">
                    <span className="flex items-center gap-1.5 text-[15px] font-semibold text-gray-900 leading-tight">
                      {item.label}
                      {item.external && (
                        <ExternalLink size={12} className="text-gray-400" />
                      )}
                    </span>
                    <span className="text-[13px] text-gray-500 leading-snug">
                      {item.description}
                    </span>
                  </div>
                </div>
              );

              return item.external ? (
                <a
                  key={item.label}
                  href={item.href}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {content}
                </a>
              ) : (
                <Link key={item.label} to={item.href}>
                  {content}
                </Link>
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

// ─── Header ────────────────────────────────────────────────────────────────────
export const Header = () => {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener("scroll", handleScroll);
    handleScroll();
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 sm:h-20">

          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
              <Zap className="w-5 h-5 text-primary-foreground" fill="currentColor" />
            </div>
            <span className="font-display font-extrabold text-2xl text-white tracking-tight">
              OK<span className="text-primary">Driver</span>
            </span>
          </Link>

          {/* Desktop Menu */}
          <nav className="hidden md:flex items-center gap-3 ml-auto">
            {NAV.map((item) => {
              const active = location.pathname === item.path;
              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition-all ${
                    active
                      ? "bg-white text-green-600"
                      : "bg-transparent text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            {/* More with dropdown */}
            <MoreDropdown />
          </nav>

          {/* Login */}
          <div className="hidden lg:block ml-4">
            <Button variant="hero" size="lg">
              Login
            </Button>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden p-2 text-white"
          >
            {open ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            className="md:hidden bg-black border-t border-white/10"
          >
            <nav className="px-4 py-6 space-y-3">
              {NAV.map((item) => {
                const active = location.pathname === item.path;
                return (
                  <Link
                    key={item.label}
                    to={item.path}
                    onClick={() => setOpen(false)}
                    className={`block w-full px-4 py-3 rounded-xl text-sm font-semibold ${
                      active
                        ? "bg-white text-green-600"
                        : "text-white hover:bg-white hover:text-black"
                    }`}
                  >
                    {item.label}
                  </Link>
                );
              })}

              {/* More items flat in mobile */}
              <div className="border-t border-white/10 pt-3 space-y-1">
                <p className="px-4 text-xs font-semibold text-white/40 uppercase tracking-widest mb-2">
                  More
                </p>
                {MORE_ITEMS.map((item) => {
                  const Icon = item.icon;
                  return item.external ? (
                    <a
                      key={item.label}
                      href={item.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={() => setOpen(false)}
                      className="flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold text-white hover:bg-white hover:text-black transition-all"
                    >
                      <Icon size={18} strokeWidth={1.8} />
                      {item.label}
                      <ExternalLink size={12} className="ml-auto opacity-50" />
                    </a>
                  ) : (
                    <Link
                      key={item.label}
                      to={item.href}
                      onClick={() => setOpen(false)}
                      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl text-sm font-semibold transition-all ${
                        location.pathname === item.href
                          ? "bg-white text-green-600"
                          : "text-white hover:bg-white hover:text-black"
                      }`}
                    >
                      <Icon size={18} strokeWidth={1.8} />
                      {item.label}
                    </Link>
                  );
                })}
              </div>

              <Button variant="hero" className="w-full mt-2">
                Login
              </Button>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};