"use client";
import React from "react";
import {
  Shield,
  Camera,
  Car,
  Mic,
  CheckCircle2,
  ArrowRight,
  Download,
  Cpu,
} from "lucide-react";
import { Footer } from "@/components/site/Footer";

const services = [
  {
    badge: "AI-Powered Safety",
    title: "Drowsiness Monitoring System",
    desc: "Real-time driver fatigue and distraction detection using smartphone or AI cameras. Prevent accidents with instant alerts and intelligent monitoring.",
    media: "v1.mp4",
    type: "video",
    reverse: false,
    button: "See Demo",
    icon: Camera,
    points: [
      "Real-time fatigue detection",
      "Instant voice alerts",
      "Works on mobile + dashboard cams",
      "Improves long-distance safety",
    ],
  },
  {
    badge: "Smart Detection",
    title: "Driver & Road Condition Monitoring",
    desc: "Monitor potholes, rash driving, unsafe routes and road quality using AI-powered live analytics for fleets and individuals.",
    media: "v2.mp4",
    type: "video",
    reverse: true,
    button: "Learn More",
    icon: Car,
    points: [
      "Detect potholes & poor roads",
      "Track route efficiency",
      "Manage fleet drivers",
      "Subscription ready modules",
    ],
  },
  {
    badge: "Compliance Monitoring",
    title: "Traffic Rule Compliance & Smart Alerts",
    desc: "AI-based traffic sign recognition, overspeed detection, lane alerts and road compliance tools to ensure safer driving.",
    media: "v3.mp4",
    type: "video",
    reverse: false,
    button: "Explore Features",
    icon: Shield,
    points: [
      "Detect speed signs instantly",
      "Audio alerts on violations",
      "Lane + road condition support",
      "Reduces risky driving",
    ],
  },
  {
    badge: "AI Assistant",
    title: "OKDriver Voice Assistant",
    desc: "Hands-free smart assistant for safer driving. Search routes, ask queries, call emergency contacts and get voice guidance instantly.",
    media: "v4.mp4",
    type: "video",
    reverse: true,
    button: "Try Voice Demo",
    icon: Mic,
    points: [
      "Navigation voice support",
      "Live conversational AI",
      "Emergency response system",
      "Reduces distraction while driving",
    ],
  },
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-[#F8FCF9] text-black">
      {/* HERO */}
      <section className="relative bg-[#07120D] text-white pt-44 pb-28 px-6 overflow-hidden rounded-b-[60px] md:rounded-b-[90px]">

  {/* glow effects */}
  <div className="absolute top-0 left-0 w-72 h-72 bg-green-500/10 blur-[120px]" />
  <div className="absolute bottom-0 right-0 w-72 h-72 bg-green-300/10 blur-[120px]" />

  {/* bottom curve layer */}
  <div className="absolute -bottom-20 left-0 w-full h-40 bg-[#f8faf9] rounded-t-[100%]" />


        <div className="max-w-6xl mx-auto text-center relative z-10">
          <span className="px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
            Our Services
          </span>

          <h1 className="mt-8 text-5xl md:text-7xl font-bold leading-tight">
            Smart Solutions <br />
            <span className="text-green-400">For Safer Roads</span>
          </h1>

          <p className="mt-6 text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
            Explore our AI-powered services built to transform mobility,
            improve driver safety and modernize fleet operations.
          </p>
        </div>

        {/* <div className="absolute bottom-0 left-0 w-full overflow-hidden leading-none">
          <svg
            viewBox="0 0 1440 140"
            className="w-full h-[90px]"
            preserveAspectRatio="none"
          >
            <path
              fill="#F8FCF9"
              d="M0,64L120,74.7C240,85,480,107,720,106.7C960,107,1200,85,1320,74.7L1440,64V160H0Z"
            />
          </svg>
        </div> */}
      </section>

      {/* SERVICES */}
      <section className="py-20 px-6">
  <div className="max-w-6xl mx-auto space-y-24">
    {services.map((service) => (
      <div
        key={service.title}
        className={`grid lg:grid-cols-2 gap-14 items-center ${
          service.reverse ? "lg:[&>*:first-child]:order-2" : ""
        }`}
      >
        {/* MEDIA BLOCK */}
        <div className="rounded-3xl overflow-hidden border border-green-100 shadow-sm bg-white">

          {service.type === "video" && (
            <video
              src={service.media}
              autoPlay
              muted
              loop
              playsInline
              controls={false}
              className="w-full h-[320px] object-cover"
            />
          )}

          {service.type === "html" && (
            <iframe
              src={service.media}
              title={service.title}
              className="w-full h-[320px] border-0"
            />
          )}

        </div>

        {/* CONTENT */}
        <div>
          <span className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#DEF7EF] text-green-700 text-sm font-semibold">
            <service.icon className="w-4 h-4" />
            {service.badge}
          </span>

          <h2 className="mt-5 text-4xl font-bold leading-tight text-gray-900">
            {service.title}
          </h2>

          <p className="mt-5 text-gray-600 text-lg leading-relaxed">
            {service.desc}
          </p>

          <div className="mt-7 space-y-3">
            {service.points.map((point) => (
              <div
                key={point}
                className="flex items-start gap-3 text-gray-700"
              >
                <CheckCircle2 className="w-5 h-5 text-green-600 mt-0.5 shrink-0" />
                <span>{point}</span>
              </div>
            ))}
          </div>

          <button className="mt-8 px-7 py-4 bg-green-700 hover:bg-green-800 text-white rounded-2xl font-semibold transition">
            {service.button}
            <ArrowRight className="inline ml-2 w-4 h-4" />
          </button>
        </div>
      </div>
    ))}
  </div>
</section>

      {/* CTA */}
      <section className="py-20 px-6 bg-[#07120D] text-white">
        <div className="max-w-5xl mx-auto text-center">
          <span className="px-4 py-2 rounded-full bg-white/10 text-sm border border-white/10">
            Ready to Begin?
          </span>

          <h2 className="mt-6 text-4xl md:text-6xl font-bold leading-tight">
            Ready to Transform <br />
            <span className="text-green-400">Your Driving Experience?</span>
          </h2>

          <p className="mt-6 text-white/70 text-lg max-w-3xl mx-auto">
            Join businesses and drivers using OKDriver to build safer journeys
            with AI-powered mobility tools.
          </p>

          <div className="mt-10 flex flex-col sm:flex-row gap-4 justify-center">
            <button className="px-8 py-4 bg-green-500 hover:bg-green-600 rounded-2xl font-semibold text-black transition">
              <Download className="inline mr-2 w-4 h-4" />
              Download Mobile App
            </button>

            <button className="px-8 py-4 border border-white/20 rounded-2xl font-semibold hover:bg-white/10 transition">
              <Cpu className="inline mr-2 w-4 h-4" />
              Get Hardware Solution
            </button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}