import { Zap, Mail, Phone, MapPin, Facebook, Twitter, Instagram, Linkedin } from "lucide-react";

const COLS = [
  {
    title: "Product",
    links: ["How It Works", "Scooters", "Benefits", "Pricing"],
  },
  {
    title: "Company",
    links: ["About Us", "Careers", "Press", "Contact"],
  },
  {
    title: "Resources",
    links: ["Help Center", "Driver Hub", "Privacy", "Terms"],
  },
];

export const Footer = () => {
  return (
    <footer className="bg-secondary text-secondary-foreground border-t border-secondary-foreground/10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid lg:grid-cols-5 gap-12 mb-12">
          <div className="lg:col-span-2 space-y-5">
            <div className="flex items-center gap-2.5">
              <div className="w-10 h-10 rounded-xl bg-gradient-primary flex items-center justify-center shadow-elegant">
                <Zap className="w-5 h-5 text-primary-foreground" fill="currentColor" />
              </div>
              <span className="font-display font-extrabold text-2xl">
                OK<span className="text-primary">Driver</span>
              </span>
            </div>
            <p className="text-secondary-foreground/70 max-w-sm">
              India's fastest-growing electric vehicle delivery platform. Drive electric, earn more, and contribute to a zero-emission future.
            </p>
            <div className="space-y-2 text-sm text-secondary-foreground/70">
              <div className="flex items-center gap-2">
                <Mail className="w-4 h-4 text-primary" />
                <span>support@okdriver.in</span>
              </div>
              <div className="flex items-center gap-2">
                <Phone className="w-4 h-4 text-primary" />
                <span>+91 1800-OK-DRIVE</span>
              </div>
              <div className="flex items-center gap-2">
                <MapPin className="w-4 h-4 text-primary" />
                <span>Gurgaon, India</span>
              </div>
            </div>
          </div>

          {COLS.map((col) => (
            <div key={col.title}>
              <h4 className="font-display font-bold text-lg mb-4">{col.title}</h4>
              <ul className="space-y-3">
                {col.links.map((l) => (
                  <li key={l}>
                    <a href="#" className="text-sm text-secondary-foreground/70 hover:text-primary transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="pt-8 border-t border-secondary-foreground/10 flex flex-col sm:flex-row items-center justify-between gap-4">
          <div className="text-sm text-secondary-foreground/60">
            © {new Date().getFullYear()} OKDriver. All rights reserved. ISO 27001:2022 Certified.
          </div>
          <div className="flex items-center gap-3">
            {[Facebook, Twitter, Instagram, Linkedin].map((Icon, i) => (
              <a
                key={i}
                href="#"
                className="w-9 h-9 rounded-lg bg-secondary-foreground/5 hover:bg-primary hover:text-primary-foreground transition-colors flex items-center justify-center"
                aria-label="Social link"
              >
                <Icon className="w-4 h-4" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
};
