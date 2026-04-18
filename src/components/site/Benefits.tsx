import {
  DollarSign,
  Clock,
  Shield,
  TrendingUp,
  Smartphone,
  Leaf,
} from "lucide-react";
import { motion } from "framer-motion";

const BENEFITS = [
  {
    icon: DollarSign,
    title: "Flexible Earnings",
    description:
      "Earn ₹40k-60k monthly with flexible working hours that fit your schedule.",
  },
  {
    icon: Clock,
    title: "24/7 Support",
    description:
      "Round-the-clock assistance for all your queries and technical issues.",
  },
  {
    icon: Shield,
    title: "Insurance Coverage",
    description:
      "Comprehensive insurance for you and your vehicle during deliveries.",
  },
  {
    icon: TrendingUp,
    title: "Weekly Payouts",
    description:
      "Get paid weekly directly to your bank account. No delays guaranteed.",
  },
  {
    icon: Smartphone,
    title: "Easy-to-Use App",
    description:
      "Simple mobile app to manage deliveries, earnings, and schedules.",
  },
  {
    icon: Leaf,
    title: "Zero Emissions",
    description:
      "Drive electric and contribute to a cleaner environment while earning.",
  },
];

export const Benefits = () => {
  return (
    <section
      id="benefits"
      className="py-24 sm:py-28 bg-[#DEF7EF] text-black"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <span className="inline-block px-4 py-2 rounded-full bg-white text-green-700 text-sm font-semibold border border-green-100">
            Why Choose Us
          </span>

          <h2 className="mt-6 text-4xl sm:text-5xl font-bold tracking-tight">
            Driver Benefits
          </h2>

          <p className="mt-4 text-gray-600 max-w-2xl mx-auto text-lg">
            Everything you need to succeed as an OKDriver partner.
          </p>
        </motion.div>

        {/* Cards */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-7">
          {BENEFITS.map((item, i) => {
            const Icon = item.icon;

            return (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.07 }}
                className="bg-white rounded-2xl p-7 shadow-sm border border-green-100 hover:shadow-md transition-all"
              >
                <div className="w-14 h-14 rounded-xl bg-[#DEF7EF] flex items-center justify-center">
                  <Icon className="w-7 h-7 text-green-700" />
                </div>

                <h3 className="mt-6 text-xl font-semibold">
                  {item.title}
                </h3>

                <p className="mt-3 text-gray-600 leading-relaxed text-sm">
                  {item.description}
                </p>
              </motion.div>
            );
          })}
        </div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0, y: 22 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.25 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6"
        >
          {[
            { value: "10,000+", label: "Active Drivers" },
            { value: "50+", label: "Cities Covered" },
            { value: "1M+", label: "Deliveries Made" },
            { value: "4.8★", label: "Average Rating" },
          ].map((stat) => (
            <div
              key={stat.label}
              className="bg-white rounded-2xl border border-green-100 p-6 text-center shadow-sm"
            >
              <div className="text-3xl sm:text-4xl font-bold text-green-700">
                {stat.value}
              </div>

              <div className="mt-2 text-sm text-gray-600">
                {stat.label}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};