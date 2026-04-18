"use client";

import { useState } from "react";
import {
  Shield,
  Zap,
  Heart,
  Users,
  Clock3,
  Building2,
  ArrowRight,
  X,
  CheckCircle2,
} from "lucide-react";
import { Footer } from "@/components/site/Footer";

type ValueItem = {
  icon: React.ElementType;
  title: string;
  desc: string;
  points: string[];
};

const values: ValueItem[] = [
  {
    icon: Shield,
    title: "Security",
    desc: "We prioritize the security of your data and ensure complete protection with enterprise-grade safeguards.",
    points: [
      "Advanced data encryption",
      "Privacy-first infrastructure",
      "Secure cloud architecture",
      "Compliance ready systems",
    ],
  },
  {
    icon: Zap,
    title: "Efficiency",
    desc: "Our platform is designed to streamline your operations, saving you time and resources while providing comprehensive driver management solutions.",
    points: [
      "Automated workflow management",
      "Real-time performance analytics",
      "Streamlined administrative processes",
      "Intelligent resource optimization",
    ],
  },
  {
    icon: Heart,
    title: "Support",
    desc: "Dedicated support team focused on helping your business succeed whenever you need assistance.",
    points: [
      "24/7 customer assistance",
      "Fast issue resolution",
      "Dedicated onboarding help",
      "Personalized guidance",
    ],
  },
];

export default function About() {
  const [selected, setSelected] = useState<ValueItem | null>(null);

  return (
    <div className="min-h-screen bg-[#f8faf9] text-black">
      {/* HERO */}
     <section className="relative bg-[#07120D] text-white pt-44 pb-28 px-6 overflow-hidden rounded-b-[60px] md:rounded-b-[90px]">

  {/* glow effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300/10 blur-[120px]" />

  {/* bottom curve layer */}
  <div className="absolute -bottom-20 left-0 w-full h-40 bg-[#f8faf9] rounded-t-[100%]" />

  <div className="max-w-6xl mx-auto text-center relative z-10">
    <span className="px-4 py-2 rounded-full bg-white/10 text-sm border border-white/10">
      About Our Company
    </span>

    <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
      Driving Safer Roads <br />
      <span className="text-green-400">With Smart AI</span>
    </h1>

    <p className="mt-6 max-w-3xl mx-auto text-white/70 text-lg leading-relaxed">
      OKDriver turns your smartphone into an AI-powered safety companion —
      with dashcam, fatigue alerts, SOS, and voice assistance. Built for
      Indian roads, no hardware needed.
    </p>
  </div>

  {/* SVG CURVE */}
  {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
    <svg
      viewBox="0 0 1440 180"
      className="w-full h-[120px] md:h-[160px]"
      preserveAspectRatio="none"
    >
      <path
        fill="#F8FCF9"
        d="M0,96L80,106.7C160,117,320,139,480,138.7C640,139,800,117,960,101.3C1120,85,1280,75,1360,69.3L1440,64V320H1360C1280,320,1120,320,960,320C800,320,640,320,480,320C320,320,160,320,80,320H0Z"
      />
    </svg>
  </div> */}
</section>

      {/* ABOUT */}
      <section className="py-24 px-6 bg-[#F8FCF9]">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-14 items-center">
          {/* LEFT */}
          <div>
            <span className="inline-flex px-4 py-2 rounded-full bg-[#DEF7EF] text-green-700 text-lg font-semibold">
              What We Do
            </span>

            <h2 className="mt-6 text-5xl font-bold leading-tight tracking-tight">
              AI-Powered Safety <br />
              For Modern Roads
            </h2>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              OKDriver transforms smartphones into smart driving companions —
              enabling live tracking, pothole detection, fatigue alerts, and SOS
              support, all without external hardware.
            </p>

            <p className="mt-6 text-gray-600 text-lg leading-relaxed">
              We help fleet operators, enterprises, and individuals boost safety,
              reduce risks, and improve the driving experience using powerful AI
              through a single platform.
            </p>

            <div className="grid grid-cols-2 gap-5 mt-10">
              {[
                ["100+", "Active Users"],
                ["99.9%", "System Uptime"],
                ["24/7", "Support"],
                ["5+", "Enterprise Clients"],
              ].map(([value, label]) => (
                <div
                  key={label}
                  className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm"
                >
                  <div className="text-3xl font-bold text-green-700">
                    {value}
                  </div>
                  <div className="mt-2 text-sm text-gray-500">{label}</div>
                </div>
              ))}
            </div>

            <button className="mt-10 px-7 py-4 bg-green-700 hover:bg-green-800 text-white rounded-2xl font-semibold transition">
              Explore Services
              <ArrowRight className="inline ml-2 w-4 h-4" />
            </button>
          </div>

          {/* RIGHT */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl border border-green-100 p-10 shadow-sm">
              <div className="w-18 h-18 rounded-2xl bg-[#DEF7EF] flex items-center justify-center">
                <Shield className="w-8 h-8 text-green-700" />
              </div>

              <h3 className="mt-7 text-3xl font-bold">
                OKDriver Smart Systems Pvt Ltd
              </h3>

              <p className="mt-4 text-gray-600 leading-relaxed">
                Building safer journeys with intelligent mobility solutions
                designed for Indian roads.
              </p>

              <div className="mt-8 inline-flex px-4 py-2 rounded-full bg-[#DEF7EF] text-green-700 text-sm font-semibold">
                ● Live Platform
              </div>
            </div>

            <div className="grid grid-cols-2 gap-5">
              {[
                ["AI Alerts", "Instant notifications"],
                ["SOS Ready", "Emergency response"],
              ].map(([title, desc]) => (
                <div
                  key={title}
                  className="bg-white rounded-2xl border border-green-100 p-6 shadow-sm"
                >
                  <h4 className="font-semibold text-lg">{title}</h4>
                  <p className="mt-2 text-sm text-gray-500">{desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex px-4 py-2 rounded-full bg-[#DEF7EF] text-green-700 text-lg font-semibold">
            Our Values
          </span>

          <h2 className="mt-4 text-5xl font-bold">Built on Trust</h2>

          <p className="mt-5 text-gray-600 text-lg max-w-3xl mx-auto">
            The fundamental principles that drive our innovation and guide every
            decision we make.
          </p>

          <div className="grid md:grid-cols-3 gap-6 mt-10">
            {values.map((item) => (
              <button
                key={item.title}
                onClick={() => setSelected(item)}
                className="rounded-3xl border border-green-100 bg-[#F8FCF9] p-6 text-left hover:shadow-md transition"
              >
                <div className="w-12 h-12 rounded-2xl bg-[#DEF7EF] flex items-center justify-center">
                  <item.icon className="w-6 h-6 text-green-700" />
                </div>

                <h3 className="mt-4 text-xl font-bold">{item.title}</h3>

                <p className="mt-2 text-gray-600 text-sm leading-relaxed">
                  {item.desc}
                </p>
              </button>
            ))}
          </div>
        </div>
      </section>

    {/* MODAL */}
{selected && (
  <div className="fixed inset-0 z-50 bg-black/45 backdrop-blur-sm flex items-center justify-center px-4">
    <div className="bg-white rounded-3xl max-w-5xl w-full p-8 md:p-10 relative shadow-2xl animate-in fade-in zoom-in duration-200">
      
      {/* Close Button */}
      <button
        type="button"
        aria-label="Close modal"
        title="Close modal"
        onClick={() => setSelected(null)}
        className="absolute top-5 right-5 w-10 h-10 rounded-full bg-gray-100 hover:bg-gray-200 transition flex items-center justify-center"
      >
        <X className="w-5 h-5" />
      </button>

      {/* Header */}
      <div className="flex flex-col md:flex-row md:items-center gap-6">
        <div className="w-20 h-20 rounded-3xl bg-[#DEF7EF] border border-green-100 flex items-center justify-center shrink-0">
          <selected.icon className="w-10 h-10 text-green-700" />
        </div>

        <div>
          <span className="inline-flex px-3 py-1 rounded-full bg-green-50 text-green-700 text-sm font-semibold">
            Core Value
          </span>

          <h3 className="mt-3 text-3xl md:text-5xl font-bold leading-tight text-gray-900">
            {selected.title}
          </h3>

          <p className="mt-4 text-gray-600 text-lg leading-relaxed max-w-3xl">
            {selected.desc}
          </p>
        </div>
      </div>

      {/* Highlights */}
      <div className="mt-10 border-t border-green-100 pt-8">
        <h4 className="text-lg font-semibold text-gray-900 mb-5">
          Key Highlights
        </h4>

        <div className="grid md:grid-cols-2 gap-4">
          {selected.points.map((point) => (
            <div
              key={point}
              className="group bg-white rounded-2xl border border-green-100 px-5 py-4 flex items-start gap-4 hover:shadow-sm transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-xl bg-[#DEF7EF] flex items-center justify-center shrink-0">
                <CheckCircle2 className="w-5 h-5 text-green-700" />
              </div>

              <p className="text-base md:text-lg font-medium text-gray-800 leading-snug">
                {point}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Footer Buttons */}
      <div className="flex flex-col sm:flex-row gap-4 mt-10">
        <button
          type="button"
          onClick={() => setSelected(null)}
          className="px-8 py-4 rounded-2xl bg-green-700 hover:bg-green-800 text-white font-semibold transition"
        >
          Got it
        </button>

        <button
          type="button"
          className="px-8 py-4 rounded-2xl border border-green-200 text-green-700 font-semibold hover:bg-[#DEF7EF] transition"
        >
          Learn More
        </button>
      </div>

    </div>
  </div>
)}

      {/* LEADERSHIP */}
      <section className="py-16 px-6 bg-[#F8FCF9]">
  <div className="max-w-6xl mx-auto text-center">
    <span className="inline-flex px-4 py-2 rounded-full bg-[#DEF7EF] text-green-700 text-lg font-semibold">
      Meet Our Team
    </span>

    <h2 className="mt-4 text-4xl md:text-5xl font-bold text-gray-900">
      Our Leadership Team
    </h2>

    <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
      Passionate minds building smarter mobility solutions for safer roads.
    </p>

    <div className="grid md:grid-cols-2 gap-8 mt-12">
      {[
  {
    name: "Tushit Gupta",
    role: "CEO & Managing Director",
    img: "ceo.png",
    email: "tushit@okdriver.in",
    linkedin: "https://www.linkedin.com/in/tushitgupta/",
    desc: "Visionary leader driving strategic growth, innovation, and business excellence while shaping the future of intelligent mobility solutions.",
  },
  {
    name: "Shubham Singh",
    role: "Software Developer",
    img: "cto.png",
    email: "shubham@okdriver.in",
    linkedin: "#",
    desc: "Software developer building the app's brains (AI and backend). Expert in mobile development and AI integration.",
  },
].map((person) => (
        <div
          key={person.name}
          className="group bg-white rounded-3xl border border-green-100 p-7 hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
        >
          {/* Top */}
          <div className="flex items-start gap-5">
            <img
              src={person.img}
              alt={person.name}
              className="w-24 h-24 rounded-3xl object-cover border-4 border-[#DEF7EF]"
            />

            <div className="text-left flex-1">
              <span className="inline-flex px-3 py-1 rounded-full bg-[#DEF7EF] text-green-700 text-xs font-semibold">
                {person.role}
              </span>

              <h3 className="mt-3 text-2xl font-bold text-gray-900">
                {person.name}
              </h3>

              {/* <p className="mt-1 text-gray-500 text-sm">{person.role}</p> */}
            </div>
          </div>

          {/* Divider */}
          <div className="my-6 border-t border-green-100" />

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed text-left">
              {person.desc}
            </p>

            {/* Contact Icons */}
            <div className="mt-6 flex gap-3">
              {/* LinkedIn */}
            <a
              href={person.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              aria-label={`${person.name} LinkedIn`}
              className="w-11 h-11 rounded-2xl border border-green-200 flex items-center justify-center text-green-700 hover:bg-[#DEF7EF] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="currentColor"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M6.94 8.5H3.56V20h3.38V8.5zM5.25 3A1.97 1.97 0 1 0 5.3 6.94 1.97 1.97 0 0 0 5.25 3zM20.44 12.27c0-3.12-1.67-4.57-3.9-4.57-1.8 0-2.6.99-3.05 1.69V8.5h-3.38V20h3.38v-6.41c0-1.69.32-3.33 2.41-3.33 2.06 0 2.09 1.93 2.09 3.44V20h3.38v-7.73z" />
              </svg>
            </a>

            {/* Email */}
            <a
              href={`mailto:${person.email}`}
              aria-label={`${person.name} Email`}
              className="w-11 h-11 rounded-2xl border border-green-200 flex items-center justify-center text-green-700 hover:bg-[#DEF7EF] transition"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                viewBox="0 0 24 24"
                className="w-5 h-5"
              >
                <path d="M4 6h16v12H4z" />
                <path d="M4 7l8 6 8-6" />
              </svg>
            </a>
          </div>
        </div>
      ))}
    </div>
  </div>
</section>

      {/* STATS */}
      <section className="py-16 px-6 bg-[#DEF7EF] border-t border-green-100">
        <div className="max-w-6xl mx-auto text-center">
          <span className="inline-flex px-4 py-2 rounded-full bg-white text-green-700 text-xl font-semibold border border-green-100">
           Our Achievements
          </span>

          <h2 className="mt-4 text-2xl font-bold">Numbers that speak for our excellence</h2>

          <div className="grid grid-cols-2 md:grid-cols-4 gap-5 mt-10">
            {[
              { icon: Users, value: "100+", label: "Drivers" },
              { icon: Shield, value: "99.9%", label: "Uptime" },
              { icon: Clock3, value: "24/7", label: "Support" },
              { icon: Building2, value: "5+", label: "Companies" },
            ].map((item) => (
              <div
                key={item.label}
                className="bg-white rounded-3xl p-6 border border-green-100 shadow-sm"
              >
                <item.icon className="w-7 h-7 text-green-700 mx-auto" />

                <div className="mt-3 text-3xl font-bold">{item.value}</div>

                <div className="mt-1 text-gray-500 text-sm">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );

}