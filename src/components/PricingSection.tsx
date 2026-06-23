import React, { useState } from "react";
import { motion } from "motion/react";
import { Check, Info, Sparkles, AlertCircle } from "lucide-react";

export default function PricingSection() {
  const [extraFeaturesCount, setExtraFeaturesCount] = useState<number>(0);

  // Constants based on guidelines
  const BASE_SETUP = 10000;
  const BASE_MONTHLY = 5000;
  const ADDON_SETUP_UNIT = 1000;
  const ADDON_MONTHLY_UNIT = 500;

  // Calculators
  const totalSetup = BASE_SETUP + (extraFeaturesCount * ADDON_SETUP_UNIT);
  const totalMonthly = BASE_MONTHLY + (extraFeaturesCount * ADDON_MONTHLY_UNIT);

  const setupInclusions = [
    "Bespoke Professional Doctor Website",
    "Comprehensive Chamber Directory Management",
    "Full-Domain SEO Metadata Setup & Index Request",
    "One-click WhatsApp & Mobile Call Integration",
    "Absolute Mobile & Fluid Device Optimization"
  ];

  const maintenanceInclusions = [
    "Bi-weekly profile text/schedule updates",
    "SSL security certificate & spam protection",
    "Dedicated premium telephone technical support",
    "Google Maps verification assistance"
  ];

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) el.scrollIntoView({ behavior: "smooth" });
  };

  return (
    <section id="pricing-section" className="py-28 md:py-40 bg-white border-b border-slate-100 relative overflow-hidden">
      {/* Soft gradient background blob */}
      <div className="absolute top-1/3 right-1/4 w-96 h-96 bg-teal-55/40 rounded-full filter blur-[130px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase font-extrabold text-teal-650 tracking-widest block mb-2.5 font-display">Transparent Pricing</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            Clear, Institutional Investment Structure
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium">
            No hidden clauses. Establish a professional medical digital profile backed by robust cybersecurity, prompt updates, and dedicated technical support.
          </p>
        </motion.div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-stretch max-w-5xl mx-auto">
          
          {/* Card 1: Setup Fees (One-time) - Left Card */}
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, boxShadow: "0 25px 60px -12px rgba(15, 23, 42, 0.08)" }}
            className="lg:col-span-6 bg-white rounded-2xl p-8 md:p-10 relative flex flex-col justify-between shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-all duration-300"
          >
            <div className="absolute top-0 right-10 transform -translate-y-1/2 bg-slate-900 text-white font-mono text-[10px] font-extrabold tracking-widest uppercase py-1.5 px-4 rounded-full">
              Standard Plan
            </div>

            <div>
              <div className="flex items-center gap-1.5 bg-teal-50 text-teal-800 text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full border border-teal-100 w-fit mb-5">
                <Sparkles className="w-3.5 h-3.5" /> Core Digital Identity
              </div>
              <h3 className="font-display font-extrabold text-slate-900 text-2xl tracking-tight">Professional Profile Plan</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                A pristine, Google-indexed custom home for your clinical credentials, designed from pure code for extreme loading speeds.
              </p>

              {/* Setup fee visualizer */}
              <div className="my-6 py-6 border-y border-slate-100">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-xl text-slate-400 font-bold">৳</span>
                  <span className="text-5xl md:text-6xl font-display font-black text-slate-900 tracking-tight">10,000</span>
                  <span className="text-xs text-slate-500 font-extrabold tracking-wider uppercase ml-2 block">One-Time Setup</span>
                </div>
              </div>

              {/* Scope Inclusions */}
              <div className="space-y-4">
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 block">Deploy Scope Inclusions:</span>
                {setupInclusions.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 mt-0.5 border border-emerald-100/50">
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                    <span className="text-slate-700 text-xs sm:text-sm font-semibold leading-relaxed">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="pt-8 mt-10 border-t border-slate-100">
              <motion.a 
                whileTap={{ scale: 0.98 }}
                href="https://wa.me/8801902646475"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full inline-block py-4.5 px-6 bg-slate-900 hover:bg-teal-600 font-display font-bold text-xs uppercase tracking-widest text-white rounded-2xl transition-all duration-300 cursor-pointer text-center shadow-lg hover:shadow-teal-100 hover:translate-y-[-1px]"
              >
                Initiate Onboarding (WhatsApp)
              </motion.a>
            </div>
          </motion.div>

          {/* Card 2: Maintenance and Addon Calculator - Right Card */}
          <motion.div 
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            whileHover={{ y: -4, boxShadow: "0 25px 60px -12px rgba(15, 23, 42, 0.08)" }}
            className="lg:col-span-6 bg-white rounded-2xl p-8 md:p-10 flex flex-col justify-between shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-all duration-300"
          >
            <div>
              <div className="flex items-center gap-1.5 bg-teal-50 text-teal-800 text-[10px] font-bold tracking-wide uppercase px-3 py-1 rounded-full border border-teal-100 w-fit mb-5">
                <Info className="w-3.5 h-3.5" /> High Capability Infrastructure
              </div>
              <h3 className="font-display font-extrabold text-slate-800 text-xl tracking-tight">Continuous Operations Support</h3>
              <p className="text-slate-500 text-xs sm:text-sm mt-3 leading-relaxed font-medium">
                Ongoing professional maintenance, SEO audits, clinical scheduling adjustments, and proactive server resources management.
              </p>

              {/* Support Cost block */}
              <div className="my-6 py-6 border-y border-slate-250">
                <div className="flex items-baseline gap-1.5">
                  <span className="text-lg text-slate-400 font-bold">৳</span>
                  <span className="text-4xl md:text-5xl font-display font-black text-slate-800 tracking-tight">5,000</span>
                  <span className="text-xs text-slate-500 font-extrabold tracking-wider uppercase ml-2">/ Monthly Support</span>
                </div>
              </div>

              {/* Maintenance scope */}
              <div className="space-y-4 mb-8">
                <span className="text-[10px] font-extrabold tracking-wider uppercase text-slate-400 block">Operational Support Scope:</span>
                {maintenanceInclusions.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-start">
                    <div className="w-5 h-5 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center shrink-0 mt-0.5 border border-teal-100/50">
                      <Check className="w-3.5 h-3.5 stroke-[3px]" />
                    </div>
                    <span className="text-slate-600 text-xs sm:text-sm leading-relaxed font-semibold">{item}</span>
                  </div>
                ))}
              </div>

              {/* INTERACTIVE ADD-ON CALCULATOR */}
              <div className="p-5 bg-white border border-slate-200/80 rounded-2xl shadow-sm">
                <div className="flex items-center justify-between mb-4">
                  <span className="text-[11px] font-extrabold text-slate-800 uppercase tracking-wide flex items-center gap-1.5">
                    <Sparkles className="w-4 h-4 text-teal-650" /> Custom Feature Add-ons:
                  </span>
                  <span className="text-[10px] font-mono text-slate-500 bg-slate-50 px-2.5 py-0.5 rounded border border-slate-100 font-bold">Flexible Scaling</span>
                </div>

                <div className="flex items-center justify-between gap-4 mb-4">
                  <span className="text-xs text-slate-500 font-medium">Want additional custom features?</span>
                  <div className="flex items-center border border-slate-200 rounded-xl overflow-hidden shrink-0 select-none">
                    <button 
                      onClick={() => setExtraFeaturesCount(prev => Math.max(0, prev - 1))}
                      className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 font-extrabold border-r border-slate-200 cursor-pointer text-sm text-slate-600 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-5 py-1.5 font-mono text-xs font-extrabold text-slate-800">{extraFeaturesCount}</span>
                    <button 
                      onClick={() => setExtraFeaturesCount(prev => Math.min(10, prev + 1))}
                      className="px-3 py-1.5 bg-slate-50 hover:bg-slate-100 font-extrabold border-l border-slate-200 cursor-pointer text-sm text-slate-600 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>

                {/* Live total output block */}
                {extraFeaturesCount > 0 ? (
                  <motion.div 
                    initial={{ opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    className="p-4 rounded-xl bg-teal-50/50 border border-teal-100 space-y-1.5 text-xs font-semibold"
                  >
                    <div className="flex justify-between text-slate-600">
                      <span>Add-on Setup Fee (+৳1,000/ea):</span>
                      <span className="font-extrabold text-slate-800">+৳{(extraFeaturesCount * ADDON_SETUP_UNIT).toLocaleString()}</span>
                    </div>
                    <div className="flex justify-between text-slate-600">
                      <span>Add-on Monthly Fee (+৳500/ea):</span>
                      <span className="font-extrabold text-slate-00">+৳{(extraFeaturesCount * ADDON_MONTHLY_UNIT).toLocaleString()}</span>
                    </div>
                    <div className="pt-2 px-1.5 pb-0.5 border-t border-teal-200/50 flex justify-between font-bold text-teal-950 font-display text-sm tracking-tight bg-teal-50/85 mt-2 rounded">
                      <span>Adjusted Total Setup:</span>
                      <span>৳{totalSetup.toLocaleString()} ({totalMonthly.toLocaleString()}/mo)</span>
                    </div>
                  </motion.div>
                ) : (
                  <div className="text-[11px] text-slate-400 font-medium italic text-center py-1">
                    Toggle count above to add extra modules dynamically
                  </div>
                )}
              </div>

            </div>

            <div className="pt-6 border-t border-slate-200 mt-8 text-[11px] text-slate-400 flex items-start gap-2.5 leading-relaxed font-medium">
              <AlertCircle className="w-4 h-4 text-slate-450 shrink-0 mt-0.5" />
              <span>
                Setup and Monthly charges are billed transparently. Custom feature updates (over the core scope) are tracked at flat scale of ৳1,000/setup and ৳500/month respectively.
              </span>
            </div>
          </motion.div>

        </div>

      </div>
    </section>
  );
}
