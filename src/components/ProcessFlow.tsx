import React from "react";
import { motion } from "motion/react";
import { ClipboardEdit, FileCode2, Eye, Globe } from "lucide-react";

export default function ProcessFlow() {
  const steps = [
    {
      num: "01",
      icon: ClipboardEdit,
      name: "Submit Your Information",
      desc: "Provide your qualifications, digital photos, chamber schedules, and coordinate links securely to our onboarding desk."
    },
    {
      num: "02",
      icon: FileCode2,
      name: "Custom Tailoring & Dev",
      desc: "Our high-end healthcare branding specialists and designers construct your bespoke responsive profile with optimal metadata."
    },
    {
      num: "03",
      icon: Eye,
      name: "Clinical Quality Review",
      desc: "Browse your preview mockup and audit spelling, coordinates, and contact linkages. Approve or suggest adjustments."
    },
    {
      num: "04",
      icon: Globe,
      name: "Instant Global Go-Live",
      desc: "Your customized portal is deployed globally on high-performance infrastructure, ready for search crawling."
    }
  ];

  const containerVariants = {
    hidden: {},
    visible: {
      transition: {
        staggerChildren: 0.15
      }
    }
  };

  const stepVariants = {
    hidden: { opacity: 0, scale: 0.95, y: 25 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      y: 0,
      transition: { duration: 0.6, ease: "easeOut" }
    }
  };

  return (
    <section className="py-24 md:py-32 bg-slate-50/50 border-y border-slate-200/50 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Title */}
        <motion.div 
          className="max-w-3xl mx-auto text-center mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase font-extrabold text-brand-650 tracking-widest block mb-2.5 font-display">Systematic Execution</span>
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            Our Streamlined Onboarding Pathway
          </h2>
          <p className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed max-w-xl mx-auto font-medium">
            From submitting raw qualifications to hosting a pristine, interactive medical asset online in just a few streamlined steps.
          </p>
        </motion.div>

        {/* Staggered process grid with interconnected visual trackers */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10 relative"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-100px" }}
        >
          
          {/* Subtle connecting track line on desktop viewport */}
          <div className="hidden lg:block absolute top-[40px] left-[10%] right-[10%] h-[2px] bg-slate-200/80 -z-10"></div>

          {steps.map((st, idx) => {
            const Icon = st.icon;
            return (
              <motion.div 
                key={idx} 
                variants={stepVariants}
                className="flex flex-col items-center text-center relative group"
              >
                
                {/* Visual marker tracker */}
                <motion.div 
                  whileHover={{ scale: 1.06 }}
                  className="w-20 h-20 rounded-3xl bg-white border border-slate-200 shadow-sm flex items-center justify-center text-brand-600 group-hover:border-brand-500 group-hover:shadow-md transition-all duration-300 mb-6 bg-gradient-to-br from-white to-slate-50/50"
                >
                  <Icon className="w-7 h-7 text-brand-650" />
                </motion.div>

                {/* Step Number Tag */}
                <span className="font-sans text-3xl font-black text-slate-200 group-hover:text-brand-100 transition-colors duration-300 block mb-2 select-none tracking-tight">
                  {st.num}
                </span>

                {/* Step Title & Subtext */}
                <h3 className="font-display font-extrabold text-slate-800 text-base mb-2 group-hover:text-brand-750 transition-colors duration-200">
                  {st.name}
                </h3>
                <p className="text-slate-500 text-xs leading-relaxed max-w-xs font-medium">
                  {st.desc}
                </p>

                {/* Quick divider line for mobile */}
                {idx < 3 && (
                  <div className="w-8 h-0.5 bg-slate-200 my-4 block md:hidden"></div>
                )}
              </motion.div>
            );
          })}
        </motion.div>

        {/* Support highlight */}
        <motion.div 
          className="mt-20 text-center text-xs text-slate-400 font-medium"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.4 }}
        >
          Have urgent chamber expansions? Contact our designated medical concierge for fast-track deployments inside of <span className="text-brand-650 font-bold">48 hours</span>.
        </motion.div>

      </div>
    </section>
  );
}
