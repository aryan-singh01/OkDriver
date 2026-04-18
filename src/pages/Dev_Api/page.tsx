"use client";

import { useState, useEffect, useRef } from "react";
import {
  KeyRound,
  Radio,
  Globe,
  Bot,
  ArrowRight,
  Copy,
  Check,
  ExternalLink,
  Terminal,
  Zap,
  Shield,
} from "lucide-react";

import { Footer } from "@/components/site/Footer";

const fontsCSS = `
  @import url('https://fonts.googleapis.com/css2?family=Syne:wght@400;600;700;800&family=JetBrains+Mono:wght@400;500&family=Geist:wght@300;400;500&display=swap');
`;


const globalCSS = `
  *, body { font-family: 'Geist', sans-serif; }
  code, pre, .mono { font-family: 'JetBrains Mono', monospace; }
  .syne { font-family: 'Syne', sans-serif; }

  .grid-bg {
    background-image:
      linear-gradient(rgba(74,222,128,0.04) 1px, transparent 1px),
      linear-gradient(90deg, rgba(74,222,128,0.04) 1px, transparent 1px);
    background-size: 40px 40px;
  }

  .noise-overlay::before {
    content:'';
    position:absolute;
    inset:0;
    background-image: url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)' opacity='0.04'/%3E%3C/svg%3E");
    pointer-events:none;
    border-radius:inherit;
  }

  .glow-green { box-shadow: 0 0 40px rgba(74,222,128,0.12), 0 0 80px rgba(74,222,128,0.06); }
  .glow-text { text-shadow: 0 0 30px rgba(74,222,128,0.35); }

  .tab-active-line {
    position:relative;
  }
  .tab-active-line::after {
    content:'';
    position:absolute;
    bottom:0; left:0; right:0;
    height:1px;
    background: linear-gradient(90deg, transparent, #4ade80, transparent);
  }

  @keyframes blink {
    0%, 100% { opacity: 1; }
    50% { opacity: 0; }
  }
  .cursor { animation: blink 1.1s step-end infinite; }

  @keyframes fadeUp {
    from { opacity:0; transform:translateY(20px); }
    to   { opacity:1; transform:translateY(0); }
  }
  .fade-up { animation: fadeUp 0.6s ease forwards; }
  .fade-up-1 { animation-delay:0.05s; opacity:0; }
  .fade-up-2 { animation-delay:0.15s; opacity:0; }
  .fade-up-3 { animation-delay:0.25s; opacity:0; }
  .fade-up-4 { animation-delay:0.35s; opacity:0; }

  @keyframes pulse-ring {
    0%   { transform:scale(1); opacity:0.6; }
    100% { transform:scale(1.8); opacity:0; }
  }
  .live-dot::before {
    content:'';
    position:absolute;
    inset:0;
    border-radius:50%;
    background:#4ade80;
    animation: pulse-ring 1.6s ease-out infinite;
  }

  .card-hover {
    transition: border-color 0.25s, transform 0.25s, box-shadow 0.25s;
  }
  .card-hover:hover {
    border-color: rgba(74,222,128,0.25);
    transform: translateY(-3px);
    box-shadow: 0 20px 60px rgba(0,0,0,0.4), 0 0 30px rgba(74,222,128,0.07);
  }

  .btn-primary {
    background: #4ade80;
    color: #030a06;
    font-weight:600;
    transition: background 0.2s, transform 0.15s, box-shadow 0.2s;
  }
  .btn-primary:hover {
    background:#86efac;
    transform:translateY(-1px);
    box-shadow: 0 8px 30px rgba(74,222,128,0.35);
  }
  .btn-secondary {
    border: 1px solid rgba(255,255,255,0.1);
    color: rgba(255,255,255,0.6);
    transition: border-color 0.2s, background 0.2s, color 0.2s;
  }
  .btn-secondary:hover {
    border-color: rgba(255,255,255,0.2);
    background: rgba(255,255,255,0.04);
    color: rgba(255,255,255,0.9);
  }

  .token-key   { color: #86efac; }
  .token-str   { color: #fcd34d; }
  .token-punc  { color: rgba(255,255,255,0.35); }
  .token-key2  { color: #93c5fd; }
  .token-op    { color: #f9a8d4; }
`;

/* ─── Data ─── */
const features = [
  { icon: KeyRound, title: "API Key Auth",       desc: "Secure key-based authentication with subscription validation and configurable rate limiting per tier." },
  { icon: Radio,    title: "Realtime WebSocket", desc: "Persistent drowsiness detection stream with stateful session tracking and instant alert broadcasting." },
  { icon: Globe,    title: "RESTful Endpoints",  desc: "Image upload and base64 analysis endpoints powered by on-device computer vision AI models." },
  { icon: Bot,      title: "AI Assistant",       desc: "Bilingual Hindi/English assistant with smart voice-response capability for hands-free driver interaction." },
];

const stats = [
  { val: "99.9%",    label: "Uptime SLA",     icon: Shield },
  { val: "< 50ms",   label: "Avg. Latency",   icon: Zap },
  { val: "REST + WS",label: "Protocols",      icon: Globe },
  { val: "1k req/mo",label: "Free Tier",      icon: Terminal },
];

const tabs = ["DMS API", "AI Assistant", "Integration Guide"] as const;
type Tab = typeof tabs[number];

/* ─── Syntax-highlighted code ─── */
function SyntaxCode({ children }: { children: string }) {
  /* very lightweight coloring */
  const tokens = children
    .replace(/("[\w-]+")\s*:/g, '<span class="token-key">$1</span>:')
    .replace(/:\s*(".*?")/g, ': <span class="token-str">$1</span>')
    .replace(/[{}[\]]/g, '<span class="token-punc">$&</span>')
    .replace(/(const|await|fetch|method|body|JSON\.stringify)\b/g, '<span class="token-key2">$1</span>')
    .replace(/(=>|\.\.\.)/g, '<span class="token-op">$1</span>');
  return (
    <pre
      className="mono text-sm leading-relaxed overflow-x-auto pr-12"
      dangerouslySetInnerHTML={{ __html: tokens }}
    />
  );
}

/* ─── Copy Button ─── */
function CopyButton({ code }: { code: string }) {
  const [copied, setCopied] = useState(false);
  return (
    <button
      onClick={async () => {
        await navigator.clipboard.writeText(code);
        setCopied(true);
        setTimeout(() => setCopied(false), 1800);
      }}
      className="absolute top-4 right-4 flex items-center gap-1.5 px-2.5 py-1.5 rounded-lg
                 bg-white/5 hover:bg-white/10 border border-white/10 transition mono text-xs text-white/40 hover:text-white/70"
    >
      {copied
        ? <><Check className="w-3.5 h-3.5 text-green-400" /><span className="text-green-400">Copied</span></>
        : <><Copy className="w-3.5 h-3.5" />Copy</>
      }
    </button>
  );
}

/* ─── Method Badge ─── */
function MethodBadge({ method }: { method: string }) {
  const map: Record<string, string> = {
    GET:  "bg-emerald-500/10 text-emerald-400 border-emerald-400/20",
    POST: "bg-blue-500/10   text-blue-300   border-blue-400/20",
    JS:   "bg-amber-500/10  text-amber-300  border-amber-400/20",
  };
  return (
    <span className={`mono text-[11px] font-medium px-2.5 py-1 rounded border ${map[method]}`}>
      {method}
    </span>
  );
}

/* ─── Doc Card ─── */
function DocCard({ method, endpoint, desc, code }: {
  method: string; endpoint: string; desc: string; code: string;
}) {
  return (
    <div className="card-hover rounded-2xl border border-white/[0.07] bg-white/[0.02] overflow-hidden">
      <div className="px-6 py-5 flex flex-col gap-2.5">
        <div className="flex items-center gap-3 flex-wrap">
          <MethodBadge method={method} />
          <code className="mono text-sm text-white/70">{endpoint}</code>
        </div>
        <p className="text-sm text-white/38 leading-relaxed">{desc}</p>
      </div>
      <div className="relative border-t border-white/[0.06] bg-[#050e08] px-6 py-5">
        <CopyButton code={code} />
        <SyntaxCode>{code}</SyntaxCode>
      </div>
    </div>
  );
}

/* ─── Terminal Prompt (hero decoration) ─── */
function TerminalPrompt() {
  const lines = [
    "$ okdriver auth --key sk_live_••••••••••",
    "✓ Authenticated · tier: PRO",
    "$ okdriver detect --image frame.jpg",
    "→ drowsiness: 0.82  alert: HIGH",
  ];
  const [visible, setVisible] = useState(0);

  useEffect(() => {
    if (visible >= lines.length) return;
    const t = setTimeout(() => setVisible(v => v + 1), 700);
    return () => clearTimeout(t);
  }, [visible]);

  return (
    <div className="rounded-2xl border border-white/10 bg-black/60 backdrop-blur-md px-6 py-5
                    mono text-sm max-w-lg mx-auto mt-14 text-left glow-green">
      <div className="flex gap-2 mb-4">
        {["#ff5f56","#ffbd2e","#27c93f"].map(c => (
          <span key={c} className="w-3 h-3 rounded-full" style={{background:c}} />
        ))}
      </div>
      {lines.slice(0, visible).map((line, i) => (
        <div key={i} className={`leading-7 ${line.startsWith("$") ? "text-white/80" : line.startsWith("✓") ? "text-green-400" : "text-blue-300"}`}>
          {line}
        </div>
      ))}
      {visible < lines.length && (
        <span className="cursor text-green-400">▋</span>
      )}
    </div>
  );
}

/* ─── Main Page ─── */
export default function DeveloperPortal() {
  const [activeTab, setActiveTab] = useState<Tab>("DMS API");

  return (
    <>
      <style>{fontsCSS}</style>
      <style>{globalCSS}</style>

      <div className="min-h-screen bg-[#040c07] text-white overflow-x-hidden">

        {/* ── HERO ── */}
        <section className="relative grid-bg noise-overlay pt-40 pb-36 px-6 overflow-hidden">
          {/* Gradient orbs */}
          <div className="pointer-events-none absolute top-[-120px] left-1/2 -translate-x-1/2 w-[700px] h-[500px]
                          bg-green-500/8 blur-[140px] rounded-full" />
          <div className="pointer-events-none absolute bottom-0 right-0 w-80 h-80 bg-emerald-400/6 blur-[100px]" />

          <div className="max-w-5xl mx-auto relative z-10 text-center">

            {/* Badge */}
            <div className="fade-up fade-up-1 inline-flex items-center gap-2.5 px-4 py-2 rounded-full
                            border border-green-400/15 bg-green-400/5 text-green-400 text-xs mono">
              <span className="live-dot relative w-1.5 h-1.5 rounded-full bg-green-400 inline-block" />
              Developer API · v2.1 · All systems operational
            </div>

            {/* Headline */}
            <h1 className="syne fade-up fade-up-2 mt-8 text-6xl md:text-8xl font-800 leading-[1.05] tracking-tight">
              Build with
              <br />
              <span className="text-green-400 glow-text">OKDriver</span>
            </h1>

            <p className="fade-up fade-up-3 mt-6 max-w-2xl mx-auto text-base text-white/42 leading-relaxed font-300">
              Integrate driver-safety intelligence into your applications.
              Modern, scalable endpoints for drowsiness detection, fleet telemetry,
              and AI-powered assistance.
            </p>

            {/* CTAs */}
            <div className="fade-up fade-up-4 mt-10 flex flex-wrap gap-3 justify-center">
              <button className="btn-primary flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm">
                Get API Key <ArrowRight className="w-4 h-4" />
              </button>
              <button className="btn-secondary flex items-center gap-2 px-7 py-3.5 rounded-xl text-sm">
                Documentation <ExternalLink className="w-4 h-4" />
              </button>
              <button className="btn-secondary px-7 py-3.5 rounded-xl text-sm">
                Live Demo
              </button>
            </div>

            {/* Terminal */}
            <TerminalPrompt />

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-px bg-white/[0.06] rounded-2xl overflow-hidden border border-white/[0.06]">
              {stats.map(({ val, label, icon: Icon }) => (
                <div key={label}
                     className="bg-[#040c07] px-6 py-7 flex flex-col items-center gap-2
                                hover:bg-white/[0.02] transition">
                  <Icon className="w-5 h-5 text-green-400/60" />
                  <div className="syne text-2xl font-700 text-white">{val}</div>
                  <div className="text-xs text-white/35">{label}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* ── FEATURES ── */}
        <section className="max-w-5xl mx-auto px-6 py-28">
          <div className="text-center mb-16">
            <p className="mono text-xs text-green-400/70 mb-3 tracking-widest uppercase">Capabilities</p>
            <h2 className="syne text-4xl md:text-5xl font-700">Core APIs</h2>
            <p className="mt-4 text-white/38 text-sm max-w-lg mx-auto leading-relaxed">
              Everything required to build modern fleet and driver-safety applications.
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-4">
            {features.map((f) => (
              <div key={f.title}
                   className="card-hover rounded-2xl border border-white/[0.07] bg-white/[0.02] p-7">
                <div className="w-11 h-11 rounded-xl bg-green-500/8 border border-green-400/15
                                flex items-center justify-center mb-5">
                  <f.icon className="w-5 h-5 text-green-400" />
                </div>
                <h3 className="syne font-600 text-[15px] mb-2">{f.title}</h3>
                <p className="text-sm text-white/38 leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ── DOCS ── */}
        <section className="max-w-5xl mx-auto px-6 pb-28">
          <div className="text-center mb-12">
            <p className="mono text-xs text-green-400/70 mb-3 tracking-widest uppercase">Reference</p>
            <h2 className="syne text-4xl md:text-5xl font-700">API Documentation</h2>
            <p className="mt-4 text-white/38 text-sm">Explore all endpoints and integration guides.</p>
          </div>

          <div className="rounded-2xl border border-white/[0.07] overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b border-white/[0.07] bg-white/[0.015]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className={`flex-1 py-4 text-sm font-medium transition-all relative
                              ${activeTab === tab
                                ? "text-green-400 tab-active-line bg-white/[0.03]"
                                : "text-white/35 hover:text-white/65"
                              }`}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Content */}
            <div className="p-6 bg-[#040c07] space-y-4">

              {activeTab === "DMS API" && <>
                <DocCard
                  method="POST"
                  endpoint="/api/detect-image"
                  desc="Upload a JPEG/PNG file for real-time drowsiness analysis. Returns detection score and alert level."
                  code={`{
  "file": "[multipart image file]",
  "session_id": "drv_abc123"
}`}
                />
                <DocCard
                  method="POST"
                  endpoint="/api/detect-base64"
                  desc="Send a base64-encoded frame directly — ideal for browser and mobile clients."
                  code={`{
  "image": "data:image/jpeg;base64,...",
  "threshold": 0.75
}`}
                />
                <DocCard
                  method="GET"
                  endpoint="/health"
                  desc="Check API health status and model availability across all inference nodes."
                  code={`{
  "status": "ok",
  "model": "dms-v3",
  "latency_ms": 42
}`}
                />
              </>}

              {activeTab === "AI Assistant" && <>
                <DocCard
                  method="POST"
                  endpoint="/api/chat"
                  desc="Send a message to the OKDriver AI Assistant. Supports Hindi and English with optional voice response."
                  code={`{
  "message": "मुझे अलर्ट दो अगर ड्राइवर सो रहा है",
  "voice": true,
  "lang": "hi"
}`}
                />
              </>}

              {activeTab === "Integration Guide" && <>
                <div className="card-hover rounded-2xl border border-white/[0.07] bg-white/[0.02] p-8">
                  <h3 className="syne text-xl font-600 mb-6">Quick Start</h3>
                  <ol className="space-y-4">
                    {[
                      ["Register", "Create an account at okdriver.io and navigate to the Developer Portal."],
                      ["Generate API Key", "Issue a key from the API Keys panel. Store it securely — it won't be shown again."],
                      ["Authenticate", "Add Authorization: Bearer <key> to every request header."],
                      ["Call Endpoints", "Start with /health to verify connectivity, then /api/detect-image."],
                    ].map(([step, detail], i) => (
                      <li key={step} className="flex gap-4">
                        <span className="mono text-xs text-green-400/60 mt-0.5 w-5 shrink-0">{String(i+1).padStart(2,"0")}</span>
                        <div>
                          <div className="text-sm font-medium text-white/80">{step}</div>
                          <div className="text-sm text-white/38 mt-0.5">{detail}</div>
                        </div>
                      </li>
                    ))}
                  </ol>
                </div>
                <DocCard
                  method="JS"
                  endpoint="JavaScript — Fetch Example"
                  desc="Complete browser/Node.js integration snippet with auth headers and response handling."
                  code={`const res = await fetch("https://api.okdriver.io/api/chat", {
  method: "POST",
  headers: {
    "Content-Type": "application/json",
    "Authorization": "Bearer sk_live_••••••••••"
  },
  body: JSON.stringify({ message: "Hello OKDriver" })
});

const { reply } = await res.json();`}
                />
              </>}

            </div>
          </div>
        </section>

        {/* ── CTA ── */}
        <section className="px-6 pb-28">
          <div className="max-w-5xl mx-auto relative overflow-hidden rounded-3xl
                          border border-white/[0.07] bg-white/[0.02] px-10 py-20 text-center
                          grid-bg noise-overlay">
            <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-green-500/5 to-transparent" />
            <div className="pointer-events-none absolute top-[-60px] left-1/2 -translate-x-1/2
                            w-80 h-40 bg-green-400/10 blur-[80px] rounded-full" />

            <div className="relative z-10">
              <p className="mono text-xs text-green-400/70 tracking-widest uppercase mb-4">Get Started</p>
              <h2 className="syne text-5xl md:text-6xl font-800 leading-tight">
                Ready to Build?
              </h2>
              <p className="mt-5 text-white/38 max-w-xl mx-auto text-sm leading-relaxed">
                Join teams building next-gen driver-safety and fleet management products
                on top of OKDriver's battle-tested infrastructure.
              </p>
              <div className="mt-10 flex flex-wrap gap-3 justify-center">
                <button className="btn-primary flex items-center gap-2 px-8 py-4 rounded-xl">
                  Start Building <ArrowRight className="w-4 h-4" />
                </button>
                <button className="btn-secondary px-8 py-4 rounded-xl text-sm">
                  View Analytics
                </button>
              </div>
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}