import React from "react";
import { motion } from "motion/react";
import { User, Activity, Search, ShieldCheck, Smartphone, HeartPulse, ArrowUpRight } from "lucide-react";

export default function WhyChoose() {
  const points = [
    {
      icon: User,
      title: "Establish Trusted Authority",
      desc: "Establish an authoritative, professional digital footprint that instantly verifies your clinical qualifications to searching families.",
      badge: "Credibility Paradigm"
    },
    {
      icon: Activity,
      title: "Consolidated Patient Gates",
      desc: "Make physical chamber maps, instant WhatsApp bookings, and consult hours clearly accessible with zero friction points.",
      badge: "Accessibility Flow"
    },
    {
      icon: Search,
      title: "First-Page Search Prominence",
      desc: "Our profiles are structurally crawled by Google Bangladesh, placing you ahead for local health searches.",
      badge: "Organic SEO Reach"
    },
    {
      icon: ShieldCheck,
      title: "Verified Clinical Persona",
      desc: "Build continuous community trust and confidence with secure, verified clinical information platforms.",
      badge: "Identity Defense"
    },
    {
      icon: Smartphone,
      title: "Refined Mobile Responsiveness",
      desc: "Perfect pixel layouts across iPhone, Android and tablet devices to seamlessly cater to mobile patient requests.",
      badge: "Fluid Display"
    },
    {
      icon: HeartPulse,
      title: "Future-Ready Clinical Tech",
      desc: "Direct integration options for advanced patient management, future scheduling matrix tools, and telemedicine links.",
      badge: "Scale Advantage"
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section id="why-us" className="py-28 md:py-40 bg-slate-50/50 border-y border-slate-200/50 relative overflow-hidden">
      {/* Background soft blob */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-brand-100/10 rounded-full filter blur-[120px] -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7 }}
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 bg-brand-50 text-brand-800 rounded-full text-xs font-bold uppercase tracking-wide border border-brand-100 mb-5">
            <span className="w-1.5 h-1.5 bg-brand-600 rounded-full animate-pulse"></span>
            Established Medical Trust
          </div>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            Why Leading Doctors Choose <span className="text-brand-600">MedProfile Bangladesh</span>
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed font-medium">
            Establishing a reliable, professional medical presence is no longer optional. Our platform equips specialists, consultants, and clinic owners with robust, verified technological identity frameworks.
          </p>
        </motion.div>

        {/* 3x2 High-contrast custom cards grid */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {points.map((pt, idx) => {
            const Icon = pt.icon;
            return (
              <motion.div 
                key={idx} 
                variants={cardVariants}
                whileHover={{ 
                  y: -6, 
                  boxShadow: "0 25px 50px -12px rgba(15, 23, 42, 0.08)"
                }}
                className="bg-white p-7 md:p-9 rounded-2xl shadow-[0_15px_45px_rgba(15,23,42,0.04)] transition-all duration-300 group flex flex-col justify-between relative overflow-hidden"
              >
                {/* Subtle shine accent on hover */}
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-brand-500/0 via-brand-500/75 to-brand-500/0 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>

                <div>
                  {/* Top Header Card */}
                  <div className="mb-6">
                    <div className="p-3 bg-brand-50 group-hover:bg-brand-100 rounded-2xl transition-colors duration-300 w-fit">
                      <Icon className="w-6 h-6 text-brand-700" />
                    </div>
                  </div>

                  {/* Title and Body */}
                  <h3 className="font-display font-extrabold text-slate-900 text-lg group-hover:text-brand-700 transition-colors duration-200">
                    {pt.title}
                  </h3>
                  <p className="mt-3 text-slate-500 text-xs sm:text-sm leading-relaxed text-left font-medium">
                    {pt.desc}
                  </p>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
        
        {/* Statistics highlights bar */}
        <motion.div 
          className="mt-20 bg-slate-900 rounded-3xl p-8 md:p-12 shadow-2xl border border-slate-800 text-white flex flex-col md:flex-row divide-y md:divide-y-0 md:divide-x divide-slate-800 items-center justify-between text-center md:text-left gap-8 relative overflow-hidden"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          {/* Subtle decoration inside stats */}
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/5 rounded-full filter blur-xl pointer-events-none"></div>

          <div className="md:px-8 flex-1 w-full">
            <span className="font-display text-4xl lg:text-5xl block font-extrabold text-brand-400 select-none tracking-tight">95%</span>
            <span className="text-xs text-brand-200/90 font-extrabold tracking-wider uppercase block mt-2">Search Discovery rate</span>
            <p className="text-[12px] text-slate-400 leading-relaxed mt-1.5 font-medium">Patients find complete chamber scheduling easily during urgent cases.</p>
          </div>
          <div className="pt-8 md:pt-0 md:px-12 flex-1 w-full">
            <span className="font-display text-4xl lg:text-5xl block font-extrabold text-brand-400 select-none tracking-tight">4x</span>
            <span className="text-xs text-brand-200/90 font-extrabold tracking-wider uppercase block mt-2">Appointment Confidence</span>
            <p className="text-[12px] text-slate-400 leading-relaxed mt-1.5 font-medium">Verified credentials cut patient pre-consultation friction significantly.</p>
          </div>
          <div className="pt-8 md:pt-0 md:pl-12 flex-1 w-full">
            <span className="font-display text-4xl lg:text-5xl block font-extrabold text-brand-400 select-none tracking-tight">10k+</span>
            <span className="text-xs text-brand-200/90 font-extrabold tracking-wider uppercase block mt-2">Patient Directions Click</span>
            <p className="text-[12px] text-slate-400 leading-relaxed mt-1.5 font-medium">Integrated maps lead patients directly to correct medical chambers.</p>
          </div>
        </motion.div>

      </div>
    </section>
  );
}
