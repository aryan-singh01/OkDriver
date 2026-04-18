"use client";

import {
  Mail,
  Phone,
  MapPin,
  Clock3,
  Send,
  Instagram,
  Linkedin,
  Headphones,
  ShieldCheck,
  MessageCircle,
} from "lucide-react";
import { Footer } from "@/components/site/Footer";

export default function ContactPage() {
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
    <span className="inline-flex px-4 py-2 rounded-full bg-white/10 border border-white/10 text-sm">
      Contact OKDriver
    </span>

    <h1 className="mt-6 text-5xl md:text-6xl font-bold">
      Contact
    </h1>
    <h1 className="mt-6 text-5xl md:text-6xl font-bold text-green-500">
      Us
    </h1>

    <p className="mt-5 text-white/70 text-lg max-w-3xl mx-auto leading-relaxed">
      Get in touch with our team for any inquiries, support needs,
      or to learn more about our AI-powered driving solutions.
    </p>
  </div>
</section>

      {/* MAIN SECTION */}
      <section className="py-16 px-6">
        <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-8">

          {/* CONTACT FORM */}
          <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 rounded-xl bg-[#DEF7EF] flex items-center justify-center">
                <Send className="w-5 h-5 text-green-700" />
              </div>

              <h2 className="text-2xl font-bold">
                Send Us a Message
              </h2>
            </div>

            <form className="space-y-5">

              <div>
                <label
                  htmlFor="name"
                  className="text-sm font-medium text-gray-600"
                >
                  Your Name
                </label>

                <input
                  id="name"
                  name="name"
                  type="text"
                  title="Enter your name"
                  placeholder="Enter your name"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label
                  htmlFor="email"
                  className="text-sm font-medium text-gray-600"
                >
                  Email Address
                </label>

                <input
                  id="email"
                  name="email"
                  type="email"
                  title="Enter your email"
                  placeholder="Enter your email"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                />
              </div>

              <div>
                <label
                  htmlFor="subject"
                  className="text-sm font-medium text-gray-600"
                >
                  Subject
                </label>

                <select
                  id="subject"
                  name="subject"
                  title="Select a subject"
                  aria-label="Select a subject"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none focus:border-green-600"
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="business">Business Partnership</option>
                  <option value="support">Technical Support</option>
                  <option value="demo">Demo Request</option>
                </select>
              </div>

              <div>
                <label
                  htmlFor="message"
                  className="text-sm font-medium text-gray-600"
                >
                  Your Message
                </label>

                <textarea
                  id="message"
                  name="message"
                  rows={5}
                  title="Enter your message"
                  placeholder="Enter your message"
                  className="mt-2 w-full rounded-xl border border-gray-300 px-4 py-3 outline-none resize-none focus:border-green-600"
                />
              </div>

              <button
                type="submit"
                title="Send Message"
                aria-label="Send Message"
                className="w-full py-3 rounded-xl bg-green-700 hover:bg-green-800 text-white font-semibold transition"
              >
                Send Message
              </button>

            </form>
          </div>

          {/* RIGHT SIDE */}
          <div className="space-y-6">

            {/* BUSINESS HOURS */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              <div className="flex items-center gap-3 mb-5">
                <Clock3 className="w-5 h-5 text-green-700" />
                <h3 className="text-xl font-bold">
                  Business Hours
                </h3>
              </div>

              <div className="space-y-4 text-sm">
                <div className="flex justify-between border-b pb-3">
                  <span>Monday - Friday</span>
                  <span className="text-gray-500">
                    9:00 AM - 6:00 PM
                  </span>
                </div>

                <div className="flex justify-between border-b pb-3">
                  <span>Saturday</span>
                  <span className="text-gray-500">
                    10:00 AM - 4:00 PM
                  </span>
                </div>

                <div className="flex justify-between">
                  <span>Sunday</span>
                  <span className="text-red-500 font-medium">
                    Closed
                  </span>
                </div>
              </div>
            </div>

            {/* CONNECT */}
            <div className="bg-white rounded-3xl border border-gray-200 shadow-sm p-8">
              <h3 className="text-xl font-bold mb-5">
                Connect With Us
              </h3>

              <div className="flex gap-4">
                <button
                  type="button"
                  title="Visit our LinkedIn page"
                  aria-label="Visit our LinkedIn page"
                  className="w-11 h-11 rounded-xl bg-[#DEF7EF] flex items-center justify-center hover:bg-green-100"
                >
                  <Linkedin className="w-5 h-5 text-green-700" />
                </button>

                <button
                  type="button"
                  title="Visit our Instagram page"
                  aria-label="Visit our Instagram page"
                  className="w-11 h-11 rounded-xl bg-[#DEF7EF] flex items-center justify-center hover:bg-green-100"
                >
                  <Instagram className="w-5 h-5 text-green-700" />
                </button>
              </div>
            </div>

            {/* HELP */}
            <div className="rounded-3xl p-8 text-white bg-[#07120D]">
              <h3 className="text-2xl font-bold">
                Need Immediate Help?
              </h3>

              <p className="mt-3 text-white/70">
                Our support team is available 24/7 to assist you
                with urgent issues or technical needs.
              </p>

              <div className="space-y-4 mt-6 text-sm">
                <div className="flex items-center gap-3">
                  <ShieldCheck className="w-5 h-5 text-green-400" />
                  Instant chat support
                </div>

                <div className="flex items-center gap-3">
                  <Headphones className="w-5 h-5 text-green-400" />
                  Emergency hotline available
                </div>

                <div className="flex items-center gap-3">
                  <MessageCircle className="w-5 h-5 text-green-400" />
                  Video call assistance
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT CARDS */}
      <section className="py-16 px-6 bg-white">
        <div className="max-w-6xl mx-auto text-center">

          <h2 className="text-5xl font-bold">
            Get In Touch
          </h2>

          <p className="mt-4 text-gray-500">
            Multiple ways to reach us for your convenience
          </p>

          <div className="grid md:grid-cols-4 gap-6 mt-12">

            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm">
              <MapPin className="w-10 h-10 p-2 rounded-xl bg-[#DEF7EF] text-green-700" />
              <h3 className="mt-5 font-bold text-lg">
                Our Office
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Chandigarh, Punjab, India
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm">
              <Mail className="w-10 h-10 p-2 rounded-xl bg-[#DEF7EF] text-green-700" />
              <h3 className="mt-5 font-bold text-lg">
                Email Us
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                hello@okdriver.in
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm">
              <Phone className="w-10 h-10 p-2 rounded-xl bg-[#DEF7EF] text-green-700" />
              <h3 className="mt-5 font-bold text-lg">
                Call Us
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                +91 98765 43210
              </p>
            </div>

            <div className="rounded-3xl border border-gray-200 p-6 text-left shadow-sm">
              <Clock3 className="w-10 h-10 p-2 rounded-xl bg-[#DEF7EF] text-green-700" />
              <h3 className="mt-5 font-bold text-lg">
                24/7 Support
              </h3>
              <p className="mt-2 text-sm text-gray-500">
                Round-the-clock assistance
              </p>
            </div>

          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
}