import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { ChevronDown, ChevronUp, MessageSquare } from "lucide-react";

export default function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(null);

  const list = [
    {
      q: "What is MedProfile Bangladesh?",
      a: "MedProfile Bangladesh is a premium healthcare technology platform designed to establish authoritative digital identities for doctors, consultants, and clinics. Unlike basic templates or cheap agencies, we develop fast, custom-coded websites coupled with structured Schema.org search indicators, localized SEO tags, and physical chamber guides. This ensures searching patients find you instantly on Google Bangladesh with complete credibility."
    },
    {
      q: "How long does the digital profile setup take?",
      a: "The standard deployment cycle is 5 to 7 business days from the moment you submit your credentials (qualifications, publications, bio preferences, and physical office hours). If you have urgent campaign expansions or multi-chamber transitions, you can request our fast-track concierge deployment, which can go live in under 48 hours."
    },
    {
      q: "Can I update my consulting schedules and chamber details later?",
      a: "Yes, absolutely. Under our continuous monthly Operations Support model, you receive unlimited bi-weekly scheduling, credential, and announcement edits. You simply message our dedicated support desk over WhatsApp or telephone, and our technical editors update your database nodes within 6 hours."
    },
    {
      q: "Do you provide dedicated technical support and security monitoring?",
      a: "Yes. Every profile is backed by continuous security operations: including dedicated SSL certificates, Web Application Firewalls (WAF) to prevent spam bookings, redundant server database nodes on world-class engines, and robust uptime monitoring. We provide a telephone helpline to resolve standard domain queries immediately."
    },
    {
      q: "Can multiple physical chambers and maps be integrated?",
      a: "Yes. We support consolidated multi-chamber directories. Your digital profile will elegantly list your separate consultation structures (e.g., Saturday to Monday in Dhanmondi, and Tuesday to Thursday in Gulshan) with separate clickable physical coordinates, phone linkages, and custom guidelines for each site."
    }
  ];

  const toggle = (idx: number) => {
    setOpenIndex(prev => (prev === idx ? null : idx));
  };

  return (
    <section id="faq-section" className="py-28 md:py-40 bg-slate-50/40 relative overflow-hidden">
      {/* Absolute decorative glow */}
      <div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full filter blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-4xl mx-auto px-4 sm:px-6 relative">
        
        {/* Header Title */}
        <motion.div 
          className="text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="text-xs uppercase font-extrabold text-teal-650 tracking-widest block mb-2.5 font-display">Common Queries</span>
          <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
            Frequently Asked Questions
          </h2>
          <p className="mt-4 text-slate-500 text-sm leading-relaxed max-w-lg mx-auto font-medium">
            Find immediate insights on deployment timelines, security models, scheduling updates, and multi-chamber capabilities.
          </p>
        </motion.div>

        {/* Accordions */}
        <div className="space-y-4">
          {list.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <motion.div 
                key={idx} 
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className={`bg-white border rounded-2xl overflow-hidden transition-all duration-300 shadow-sm ${isOpen ? "border-slate-900" : "border-slate-200/80 hover:border-slate-400"}`}
              >
                {/* Trigger Row */}
                <button 
                  onClick={() => toggle(idx)}
                  className="w-full p-6 text-left font-display font-extrabold text-slate-800 text-sm md:text-base flex justify-between items-center gap-4 cursor-pointer select-none hover:bg-slate-50/30 transition-colors"
                >
                  <span className="leading-snug">{item.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center shrink-0 transition-all duration-300 ${isOpen ? "bg-slate-900 text-white" : "bg-slate-50 text-slate-400 group-hover:bg-slate-100"}`}>
                    {isOpen ? (
                      <ChevronUp className="w-4 h-4 stroke-[2.5px]" />
                    ) : (
                      <ChevronDown className="w-4 h-4 stroke-[2px]" />
                    )}
                  </div>
                </button>

                {/* Answer block */}
                <AnimatePresence initial={false}>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.35, ease: "easeInOut" }}
                    >
                      <div className="px-6 pb-6 pt-1 text-slate-600 text-xs sm:text-sm leading-relaxed border-t border-slate-200 bg-slate-50/20 text-justify font-medium">
                        {item.a}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>

        {/* Assist Box */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-16 p-6 sm:p-8 bg-gradient-to-r from-slate-900 via-sky-950 to-slate-900 text-white rounded-3xl border border-white/10 flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl relative overflow-hidden"
        >
          {/* subtle inside abstract decor */}
          <div className="absolute right-0 top-0 w-32 h-32 bg-teal-500/10 rounded-full filter blur-xl pointer-events-none"></div>

          <div className="flex flex-col sm:flex-row items-center sm:items-start gap-4 text-center sm:text-left relative z-10">
            <div className="p-3 bg-white/10 text-teal-400 rounded-2xl border border-white/5 shrink-0">
              <MessageSquare className="w-6 h-6 animate-pulse" />
            </div>
            <div>
              <h4 className="font-display font-extrabold text-white text-base">Still have a custom installation query?</h4>
              <p className="text-slate-400 text-xs mt-1 font-medium">Our engineering team is directly accessible via instant messenger channels.</p>
            </div>
          </div>
          <a 
            href="https://wa.me/8801902646475"
            target="_blank"
            rel="noopener noreferrer"
            className="py-3 px-5 bg-teal-500 hover:bg-teal-600 text-slate-950 font-display font-bold text-xs uppercase tracking-widest rounded-xl transition-all shadow-lg hover:shadow-teal-500/20 active:scale-95 relative z-10"
          >
            Chat with Engineering
          </a>
        </motion.div>

      </div>
    </section>
  );
}
