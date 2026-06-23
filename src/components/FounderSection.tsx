import React from "react";
import { motion } from "motion/react";
import { Linkedin, Twitter, Mail, ShieldCheck, Sparkles, Globe, ArrowRight } from "lucide-react";

export default function FounderSection() {
  const socialLinks = [
    {
      icon: Linkedin,
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/nihab-al-mahjabin/",
      color: "hover:text-blue-600 hover:bg-blue-50/80 hover:border-blue-200"
    },
    {
      icon: Twitter,
      label: "X (Twitter)",
      href: "https://x.com/nihabalmahjabin",
      color: "hover:text-slate-900 hover:bg-slate-100/80 hover:border-slate-300"
    },
    {
      icon: Mail,
      label: "Email Publisher",
      href: "mailto:nihabalmahjabin@gmail.com",
      color: "hover:text-teal-600 hover:bg-teal-50/80 hover:border-teal-200"
    }
  ];

  return (
    <section id="founder-section" className="py-28 md:py-40 bg-slate-50/30 border-t border-slate-200/45 scroll-mt-6 relative overflow-hidden">
      {/* Background ambient accents */}
      <div className="absolute top-1/4 right-[10%] w-[350px] h-[350px] bg-teal-200/10 rounded-full filter blur-[100px] -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 left-[10%] w-[350px] h-[350px] bg-sky-200/10 rounded-full filter blur-[100px] -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
          <motion.div 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-slate-900/5 text-slate-800 rounded-full text-xs font-bold uppercase tracking-wider border border-slate-900/10 mb-5"
          >
            <ShieldCheck className="w-3.5 h-3.5 text-teal-600" />
            Leadership & Vision
          </motion.div>
          
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight"
          >
            Meet The <span className="bg-gradient-to-r from-teal-600 to-sky-600 bg-clip-text text-transparent">Founder</span>
          </motion.h2>
          
          <motion.p 
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="mt-4 text-slate-600 text-sm md:text-base font-medium max-w-xl mx-auto"
          >
            The vision behind MedProfile Bangladesh.
          </motion.p>
        </div>

        {/* Founder Card Container */}
        <div className="max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
            className="relative bg-white/80 backdrop-blur-md rounded-2xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.04)] group overflow-hidden text-center"
          >
            {/* Styled border animation effect on hover */}
            <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-teal-500 via-sky-500 to-teal-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>

            {/* Information Section */}
            <div className="space-y-6 max-w-2xl mx-auto flex flex-col items-center">
              <div className="space-y-2.5">
                <div className="inline-flex items-center gap-1 bg-teal-50 text-teal-800 border border-teal-100 px-2.5 py-1 rounded-md text-[10px] font-black uppercase tracking-widest">
                  CEO & Founder
                </div>
                <h3 className="font-display font-extrabold text-2xl sm:text-3xl text-slate-900 tracking-tight">
                  Nihab Al Mahjabin
                </h3>
                <p className="text-sm font-semibold text-slate-500 flex items-center justify-center gap-1.5">
                  Founder & CEO 
                  <span className="text-slate-300">•</span> 
                  <span className="text-teal-600 font-bold">MedProfile Bangladesh</span>
                </p>
              </div>

              <p className="text-slate-650 text-sm md:text-base leading-relaxed font-normal">
                As the Founder & CEO of MedProfile Bangladesh, I am committed to helping doctors establish a strong digital presence and professional identity online. Our mission is to make healthcare professionals more accessible, visible, and trusted by patients through modern technology and premium web solutions.
              </p>

              {/* Ready Social Links */}
              <div className="pt-2 flex items-center justify-center gap-3.5 flex-wrap">
                {socialLinks.map((link, idx) => {
                  const Icon = link.icon;
                  return (
                    <a
                      key={idx}
                      href={link.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`h-9 px-3.5 rounded-lg border border-slate-200 text-slate-500 text-xs font-semibold flex items-center gap-1.5 transition-all duration-200 ${link.color}`}
                      title={link.label}
                    >
                      <Icon className="w-4 h-4 shrink-0" />
                      <span>{link.label}</span>
                    </a>
                  );
                })}
              </div>
            </div>

          </motion.div>
        </div>

        {/* Company Mission Statement below */}
        <div className="mt-16 md:mt-24 max-w-3xl mx-auto">
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="p-8 md:p-10 bg-slate-900 text-white rounded-3xl relative overflow-hidden shadow-xl"
          >
            {/* Abstract visual decor */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/10 rounded-full filter blur-2xl pointer-events-none"></div>
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-sky-500/10 rounded-full filter blur-2xl pointer-events-none"></div>

            <div className="relative text-center space-y-4 max-w-2xl mx-auto">
              <div className="inline-flex items-center justify-center w-10 h-10 rounded-full bg-teal-500/10 text-teal-400 mb-1">
                <Sparkles className="w-5 h-5" />
              </div>
              <p className="text-[10px] uppercase font-bold tracking-[0.25em] text-teal-400">Our Core Mission</p>
              <p className="font-display font-medium text-lg md:text-xl text-slate-100 leading-relaxed italic">
                "Empowering doctors with professional digital identity solutions and helping patients find trusted healthcare professionals more easily."
              </p>
              <div className="w-12 h-1 bg-gradient-to-r from-teal-500 to-sky-500 mx-auto rounded-full mt-4"></div>
            </div>
          </motion.div>
        </div>

      </div>
    </section>
  );
}
