import React, { useState } from "react";
import { ShieldCheck, Calendar, Menu, X, ArrowRight, MessageSquare } from "lucide-react";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 flex flex-col justify-between transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-20 flex items-center justify-between">
        
        {/* Brand Logotype */}
        <div className="flex items-center gap-3 cursor-pointer select-none group" onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}>
          <div className="w-10 h-10 bg-gradient-to-tr from-teal-600 to-teal-500 rounded-xl flex items-center justify-center text-white shadow-md shadow-teal-500/10 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z"></path>
            </svg>
          </div>
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-teal-600 transition-colors duration-200">
              MEDPROFILE <span className="text-teal-600 font-extrabold">BANGLADESH</span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 -mt-0.5 group-hover:tracking-[0.25em] transition-all duration-300">
              Building Digital Identity
            </span>
          </div>
        </div>

        {/* Navigation Menus */}
        <nav className="hidden md:flex items-center gap-8 text-sm font-semibold text-slate-600">
          <button 
            onClick={() => scrollToSection("why-us")}
            className="hover:text-teal-600 transition-colors cursor-pointer relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300"
          >
            Why Choose Us
          </button>
          <button 
            onClick={() => scrollToSection("features")}
            className="hover:text-teal-600 transition-colors cursor-pointer relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300"
          >
            Features
          </button>
          <button 
            onClick={() => scrollToSection("demo-sandbox")}
            className="hover:text-teal-600 transition-colors cursor-pointer flex items-center gap-1.5 relative py-1.5 group/btn"
          >
            Interactive Demo
            <span className="text-[9px] font-bold text-teal-600 bg-teal-50 px-1.5 py-0.5 rounded border border-teal-150 group-hover/btn:bg-teal-600 group-hover/btn:text-white transition-all duration-300">Builder</span>
          </button>
          <button 
            onClick={() => scrollToSection("demo-gallery")}
            className="hover:text-teal-600 transition-colors cursor-pointer relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300"
          >
            Templates
          </button>
          <button 
            onClick={() => scrollToSection("pricing-section")}
            className="hover:text-teal-600 transition-colors cursor-pointer relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300"
          >
            Pricing Plans
          </button>
          <button 
            onClick={() => scrollToSection("contact-us")}
            className="hover:text-teal-600 transition-colors cursor-pointer relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300"
          >
            Contact
          </button>
          <button 
            onClick={() => scrollToSection("faq-section")}
            className="hover:text-teal-600 transition-colors cursor-pointer relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-teal-600 after:transition-all after:duration-300"
          >
            FAQ
          </button>
        </nav>

        {/* Urgent CTA */}
        <div className="flex items-center gap-3">
          <button 
            onClick={() => scrollToSection("demo-sandbox")}
            className="hidden lg:inline-flex items-center gap-1.5 text-xs text-slate-700 font-bold hover:text-teal-600 transition-colors cursor-pointer group/link"
          >
            Live Builder
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover/link:translate-x-1" />
          </button>
          
          <button 
            onClick={() => scrollToSection("pricing-section")}
            className="hidden sm:inline-flex px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold tracking-wide shadow-md shadow-slate-900/10 hover:bg-teal-600 hover:shadow-lg hover:shadow-teal-500/20 active:scale-95 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            Establish Profile
          </button>

          {/* Toggle Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 md:hidden text-slate-700 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE COLLAPSED DROPDOWN DRAWER */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-white border-t border-slate-200/60 px-4 py-6 space-y-4 shadow-xl w-full">
          <div className="flex flex-col gap-2.5">
            <button 
              onClick={() => scrollToSection("why-us")}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              Why Choose Us
            </button>
            <button 
              onClick={() => scrollToSection("features")}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              Features
            </button>
            <button 
              onClick={() => scrollToSection("demo-sandbox")}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Interactive Demo Builder</span>
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-teal-600 bg-teal-50 px-2 py-0.5 rounded border border-teal-150">Active</span>
            </button>
            <button 
              onClick={() => scrollToSection("demo-gallery")}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              Website Templates
            </button>
            <button 
              onClick={() => scrollToSection("pricing-section")}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              Pricing Plans
            </button>
            <button 
              onClick={() => scrollToSection("contact-us")}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              Direct Link Contact
            </button>
            <button 
              onClick={() => scrollToSection("faq-section")}
              className="w-full text-left py-2 px-3 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-teal-600 rounded-lg transition-colors"
            >
              FAQ
            </button>
          </div>

          <div className="pt-4 border-t border-slate-150 flex flex-col gap-3">
            {/* Primary High-converting WhatsApp Link in Mobile responsive menu */}
            <a 
              href="https://wa.me/8801902646475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-emerald-500 hover:bg-emerald-600 text-white rounded-xl text-center text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md shadow-emerald-500/15 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-white shrink-0" />
              <span>Contact WhatsApp Support</span>
            </a>

            <button 
              onClick={() => scrollToSection("pricing-section")}
              className="w-full py-3.5 px-4 bg-slate-900 hover:bg-teal-600 text-white rounded-xl text-center text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-teal-400 shrink-0" />
              Establish Digital Identity
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
