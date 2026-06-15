import React from "react";
import { motion } from "motion/react";
import { 
  Briefcase, 
  Map, 
  CalendarDays, 
  MessageSquare, 
  Compass, 
  SearchCode, 
  MonitorSmartphone, 
  HeartHandshake, 
  UsersRound, 
  Zap 
} from "lucide-react";

export default function FeaturesGrid() {
  const list = [
    {
      icon: Briefcase,
      title: "Professional Doctor Profile",
      desc: "An elegant showcase of your academic achievements, medical certifications, clinical publications, and professional affiliations."
    },
    {
      icon: Map,
      title: "Chamber Information Management",
      desc: "Organized schedules and availability for multiple chamber locations, ensuring patients find the correct clinic smoothly."
    },
    {
      icon: CalendarDays,
      title: "Appointment Routing Details",
      desc: "Clear directions on booking appointments with integrated support phone numbers, hotlines, or custom digital scheduling desks."
    },
    {
      icon: MessageSquare,
      title: "WhatsApp & Chat Integration",
      desc: "One-click patient connection directly into your official WhatsApp, streamlining quick inquiries or followups."
    },
    {
      icon: Compass,
      title: "Google Maps Navigation",
      desc: "Precision localized maps routing patients safely right to your clinic chambers with a single tap on and offline."
    },
    {
      icon: SearchCode,
      title: "Rigorous SEO Optimization",
      desc: "Structured metadata, custom breadcrumbs and keyword targeting constructed so your index stands out top on Google BD."
    },
    {
      icon: MonitorSmartphone,
      title: "Mobile Adaptive Responsiveness",
      desc: "Stunning experience on every viewport — ensuring mobile users get lightning-fast layouts on transit."
    },
    {
      icon: HeartHandshake,
      title: "Dedicated Feedback & Reviews",
      desc: "Elegant display of patient testimonials and feedback to foster transparency and build compassionate community presence."
    },
    {
      icon: UsersRound,
      title: "Social Platforms Connectivity",
      desc: "Seamlessly link your authoritative profile with your medical Facebook, LinkedIn, or video educational platforms."
    },
    {
      icon: Zap,
      title: "Fast-Loading Performance",
      desc: "Optimized server rendering ensures pages load in under 1 second, minimizing patient bounce rates across poor networks."
    }
  ];

  const gridVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.05
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.98, y: 15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.5, ease: "easeOut" }
    }
  };

  return (
    <section id="features" className="py-24 md:py-32 bg-white relative overflow-hidden">
      {/* Absolute faint top-right glow */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-teal-50/50 rounded-full filter blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Header Block */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end justify-between gap-8 mb-20">
          <div className="max-w-2xl">
            <span className="text-xs uppercase font-extrabold text-teal-600 tracking-widest block mb-2.5 font-display">Technical Portfolio</span>
            <h2 className="font-display font-bold text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
              Everything thin a <span className="text-teal-600">Modern Doctor</span> Needs for Digital Prominence
            </h2>
          </div>
          <p className="text-slate-500 text-sm leading-relaxed max-w-sm font-medium">
            Built on a fast, modern runtime, our custom doctor profiles are designed from scratch to maximize reliability, visual luxury, and clinical clarity.
          </p>
        </div>

        {/* Feature Grid */}
        <motion.div 
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-6"
          variants={gridVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
        >
          {list.map((item, idx) => {
            const Icon = item.icon;
            return (
              <motion.div 
                key={idx} 
                variants={itemVariants}
                whileHover={{ 
                  y: -5,
                  scale: 1.02,
                  boxShadow: "0 15px 30px -10px rgba(15, 118, 110, 0.06)",
                  borderColor: "rgba(13, 148, 136, 0.25)"
                }}
                className="bg-slate-50/40 p-6 rounded-2xl border border-slate-200 hover:bg-white transition-all duration-300 flex flex-col justify-between"
              >
                <div>
                  <div className="w-10 h-10 rounded-xl bg-teal-50 text-teal-700 flex items-center justify-center mb-5 border border-teal-150/40 transition-transform duration-300 group-hover:scale-105">
                    <Icon className="w-5 h-5 stroke-[2.2]" />
                  </div>
                  <h3 className="font-display font-bold text-slate-850 text-sm tracking-tight mb-2">
                    {item.title}
                  </h3>
                  <p className="text-slate-500 text-[11px] sm:text-xs leading-relaxed text-left font-medium">
                    {item.desc}
                  </p>
                </div>
                <div className="mt-6 pt-3 border-t border-slate-100 text-[9px] font-extrabold text-teal-600 uppercase tracking-widest select-none">
                  Core Spec
                </div>
              </motion.div>
            );
          })}
        </motion.div>

      </div>
    </section>
  );
}
