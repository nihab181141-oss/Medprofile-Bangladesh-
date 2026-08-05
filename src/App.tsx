import React from "react";
import { Routes, Route, Link, useLocation } from "react-router-dom";
import { Phone, MessageSquare, Mail, ShieldCheck } from "lucide-react";
import { AnimatePresence, motion } from "motion/react";

// Components
import Header from "./components/Header";
import LogoIcon from "./components/LogoIcon";
import Breadcrumbs from "./components/Breadcrumbs";

// Pages
import Home from "./pages/Home";
import About from "./pages/About";
import Services from "./pages/Services";
import Pricing from "./pages/Pricing";
import Templates from "./pages/Templates";
import Projects from "./pages/Projects";
import FAQ from "./pages/FAQ";
import Contact from "./pages/Contact";
import Consultation from "./pages/Consultation";

const PageTransition = ({ children }: { children: React.ReactNode }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 10 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4, ease: "easeInOut" }}
      className="flex-1 flex flex-col"
    >
      {children}
    </motion.div>
  );
};

export default function App() {
  const location = useLocation();

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased font-sans flex flex-col">
      <Header />
      
      <main className="flex-1 flex flex-col">
        <Breadcrumbs />
        <Routes location={location}>
          <Route path="/" element={<PageTransition><Home /></PageTransition>} />
          <Route path="/about" element={<PageTransition><About /></PageTransition>} />
          <Route path="/services" element={<PageTransition><Services /></PageTransition>} />
          <Route path="/pricing" element={<PageTransition><Pricing /></PageTransition>} />
          <Route path="/templates" element={<PageTransition><Templates /></PageTransition>} />
          <Route path="/projects" element={<PageTransition><Projects /></PageTransition>} />
          <Route path="/faq" element={<PageTransition><FAQ /></PageTransition>} />
          <Route path="/contact" element={<PageTransition><Contact /></PageTransition>} />
          <Route path="/consultation" element={<PageTransition><Consultation /></PageTransition>} />
        </Routes>
      </main>

      {/* FOOTER */}
      <footer className="bg-slate-900 text-slate-300 py-16 px-4 border-t border-slate-800 font-sans mt-auto">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-sm leading-relaxed mb-10">
          
          <div className="md:col-span-5 space-y-4">
            <Link to="/" onClick={() => window.scrollTo(0,0)} className="flex items-center gap-3">
              <LogoIcon className="w-10 h-10 shrink-0" light={true} />
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white tracking-wide">MEDPROFILE <span className="text-brand-400">BANGLADESH</span></span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400 -mt-0.5">Building Digital Identity</span>
              </div>
            </Link>
            
            <p className="text-slate-400 text-xs text-justify">
              Authorized clinical domain publishing house providing medical portfolios, semantic schemas, and local patient management gateways for consultants and chamber specialists of Bangladesh.
            </p>

            <div className="pt-2 text-[10px] text-slate-500 space-y-1 select-none">
              <p>Clinical System Version 3.4.0 (Vite Production)</p>
              <p>Powered by **Gemini 3.1 Reasoning Intelligence**</p>
            </div>
          </div>

          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white tracking-wider text-xs uppercase text-brand-400">Quick Portal Indices</h4>
            <ul className="space-y-2.5 text-xs">
              <li><Link to="/" className="hover:text-brand-500 transition-colors">Home Portal</Link></li>
              <li><Link to="/services" className="hover:text-brand-500 transition-colors">Comprehensive Services</Link></li>
              <li><Link to="/pricing" className="hover:text-brand-500 transition-colors">Investment Plans</Link></li>
              <li><Link to="/projects" className="hover:text-brand-500 transition-colors">Live Showcase</Link></li>
              <li><Link to="/consultation" className="hover:text-brand-500 transition-colors">Interactive Builder</Link></li>
            </ul>
          </div>

          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-white tracking-wider text-xs uppercase text-brand-400">Onboarding Assistance</h4>
            
            <div className="space-y-3 text-xs text-slate-400 font-medium">
              <a href="https://wa.me/8801902646475" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-start hover:text-brand-400 transition-colors">
                <Phone className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] block opacity-60">TELEPHONE HELPLINE</span>
                  <span>+8801902646475 (Onboarding Helpline)</span>
                </div>
              </a>
              <a href="https://wa.me/8801902646475" target="_blank" rel="noopener noreferrer" className="flex gap-2 items-start hover:text-brand-400 transition-colors">
                <MessageSquare className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] block opacity-60">WHATSAPP CHANNEL</span>
                  <span>+8801902646475 (24/7 Support)</span>
                </div>
              </a>
              <div className="flex gap-2 items-start">
                <Mail className="w-4 h-4 text-brand-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] block opacity-60">ELECTRONIC ENG DESK</span>
                  <span>onboarding@medprofile-bd.com</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto py-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <div className="text-xs text-slate-400 tracking-wide text-center md:text-left">
            Building Professional Digital Identity for Doctors in Bangladesh
          </div>
          <div className="flex gap-8 items-center shrink-0">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Professional Plan</span>
              <span className="text-sm font-bold">৳10,000 Setup <span className="text-brand-400">+ ৳5,000/mo</span></span>
            </div>
          </div>
        </div>

        <div className="max-w-7xl mx-auto mt-6 pt-6 border-t border-slate-800 flex flex-col sm:flex-row justify-between items-center text-[10px] text-slate-500 gap-4">
          <p>© 2026 MedProfile Bangladesh. Designed and maintained by MedProfile Ltd. All global rights reserved.</p>
          <div className="flex gap-4">
            <span className="hover:text-white cursor-pointer transition-colors">Security Audits</span>
            <span className="hover:text-white cursor-pointer transition-colors">Compliance Guidelines</span>
            <span className="hover:text-white cursor-pointer transition-colors">Privacy Policy</span>
          </div>
        </div>
      </footer>

      {/* FLOATING WHATSAPP ASSISTANCE WIDGET */}
      <div className="fixed bottom-6 right-6 z-40 group flex flex-col items-end">
        <div className="mb-2 bg-white text-slate-800 border border-slate-200 px-3.5 py-2 rounded-2xl shadow-xl text-xs font-bold tracking-tight opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-2 shadow-brand-500/5">
          <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
          <span>WhatsApp Live Support (Active)</span>
        </div>
        <a 
          href="https://wa.me/8801902646475"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-brand-500 hover:bg-slate-800 text-white rounded-full flex items-center justify-center shadow-lg shadow-brand-500/20 hover:shadow-brand-500/35 transition-all duration-300 hover:scale-110 active:scale-95 group-hover:rotate-6 border-2 border-white/20"
        >
          <MessageSquare className="w-7 h-7 fill-white shrink-0" />
        </a>
      </div>
    </div>
  );
}
