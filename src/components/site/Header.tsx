import { useEffect, useRef, useState } from "react";
import {
  Menu,
  X,
  Zap,
  ChevronDown,
  Monitor,
  FileText,
  Lock,
  Briefcase,
  CreditCard,
  ExternalLink,
  Truck,
  Code2,
} from "lucide-react";
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

/* ---------------- More Dropdown ---------------- */
const MoreDropdown = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<any>(null);
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
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute top-[calc(100%+10px)] left-0 min-w-[280px] bg-white rounded-2xl shadow-2xl border border-gray-100 p-2 z-50"
          >
            {MORE_ITEMS.map((item) => {
              const Icon = item.icon;

              const content = (
                <div className="flex items-start gap-3 px-4 py-3 rounded-xl hover:bg-gray-50 transition">
                  <Icon size={18} className="mt-1 text-gray-700" />
                  <div>
                    <h4 className="text-sm font-semibold text-gray-900 flex items-center gap-1">
                      {item.label}
                      {item.external && <ExternalLink size={12} />}
                    </h4>
                    <p className="text-xs text-gray-500">{item.description}</p>
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

/* ---------------- Login Dropdown ---------------- */
const LoginDropdown = () => {
  const [open, setOpen] = useState(false);
  const timeoutRef = useRef<any>(null);

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
      <button className="bg-[#17253B] text-white px-7 py-3 rounded-full font-semibold text-base flex items-center gap-2 hover:bg-[#213250] transition">
        Login
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : ""}`}
        />
      </button>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0, y: -8 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            className="absolute right-0 top-[calc(100%+12px)] w-[320px] bg-white rounded-3xl shadow-2xl border border-gray-100 overflow-hidden z-50"
          >
            <Link
              to="/fleet-login"
              className="flex gap-4 px-6 py-5 hover:bg-gray-50 transition border-b border-gray-100"
            >
              <Truck size={22} className="mt-1 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  Fleet Operator Login
                </h3>
                <p className="text-sm text-gray-500">For fleet managers</p>
              </div>
            </Link>

            <Link
              to="/developer-login"
              className="flex gap-4 px-6 py-5 hover:bg-gray-50 transition"
            >
              <Code2 size={22} className="mt-1 text-black" />
              <div>
                <h3 className="text-lg font-semibold text-gray-900">
                  API Platform
                </h3>
                <p className="text-sm text-gray-500">Developer access</p>
              </div>
            </Link>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

/* ---------------- Header ---------------- */
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

  useEffect(() => {
    setOpen(false);
  }, [location.pathname]);

  return (
    <motion.header
      initial={{ y: -80 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.4 }}
      className={`fixed top-0 inset-x-0 z-50 transition-all ${
        scrolled
          ? "bg-black/80 backdrop-blur-lg border-b border-white/10"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-2.5">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-r from-green-500 to-green-600 flex items-center justify-center">
              <Zap className="w-5 h-5 text-white" fill="currentColor" />
            </div>

            <span className="font-bold text-2xl text-white">
              OK<span className="text-green-500">Driver</span>
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-2 ml-auto">
            {NAV.map((item) => {
              const active = location.pathname === item.path;

              return (
                <Link
                  key={item.label}
                  to={item.path}
                  className={`px-5 py-2.5 rounded-xl text-sm font-semibold transition ${
                    active
                      ? "bg-white text-green-600"
                      : "text-white hover:bg-white hover:text-black"
                  }`}
                >
                  {item.label}
                </Link>
              );
            })}

            <MoreDropdown />
          </nav>

          {/* Login Dropdown */}
          <div className="hidden lg:block ml-4">
            <LoginDropdown />
          </div>

          {/* Mobile Menu */}
          <button
            onClick={() => setOpen(!open)}
            className="md:hidden text-white"
          >
            {open ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>
      </div>

      {/* Mobile */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "auto" }}
            exit={{ height: 0 }}
            className="md:hidden bg-black border-t border-white/10 overflow-hidden"
          >
            <div className="px-5 py-5 space-y-3">
              {NAV.map((item) => (
                <Link
                  key={item.label}
                  to={item.path}
                  className="block text-white px-4 py-3 rounded-xl hover:bg-white hover:text-black"
                >
                  {item.label}
                </Link>
              ))}

              <Button className="w-full mt-2">Login</Button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
};