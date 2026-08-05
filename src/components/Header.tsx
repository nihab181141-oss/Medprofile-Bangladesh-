import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ShieldCheck, Menu, X, ArrowRight, MessageSquare, Phone, Mail } from "lucide-react";
import LogoIcon from "./LogoIcon";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const location = useLocation();

  const isActive = (path: string) => {
    if (path === "/" && location.pathname !== "/") return false;
    return location.pathname.startsWith(path);
  };

  const navLinks = [
    { name: "Services", path: "/services" },
    { name: "Projects", path: "/projects" },
    { name: "Templates", path: "/templates" },
    { name: "Pricing", path: "/pricing" },
    { name: "About", path: "/about" },
    { name: "FAQ", path: "/faq" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/50 flex flex-col justify-between transition-all duration-300">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full h-20 flex items-center justify-between">
        
        {/* Brand Logotype */}
        <Link 
          to="/"
          onClick={() => { window.scrollTo(0, 0); setMobileMenuOpen(false); }}
          className="flex items-center gap-3 cursor-pointer select-none group" 
        >
          <LogoIcon className="w-10 h-10 transition-all duration-300 group-hover:scale-105 group-hover:rotate-3 shrink-0" />
          <div className="flex flex-col">
            <span className="text-lg sm:text-xl font-bold tracking-tight text-slate-900 group-hover:text-brand-600 transition-colors duration-200">
              MEDPROFILE <span className="text-brand-600 font-extrabold">BANGLADESH</span>
            </span>
            <span className="text-[9px] sm:text-[10px] uppercase tracking-[0.2em] font-bold text-slate-400 -mt-0.5 group-hover:tracking-[0.25em] transition-all duration-300">
              Building Digital Identity
            </span>
          </div>
        </Link>

        {/* Navigation Menus */}
        <nav className="hidden xl:flex items-center gap-5 lg:gap-7 text-[13px] font-bold text-slate-600">
          {navLinks.map((link) => (
            <Link
              key={link.name}
              to={link.path}
              className={`transition-colors relative py-1.5 after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-brand-600 after:transition-all after:duration-300 flex items-center gap-1.5 ${
                isActive(link.path) ? "text-brand-600 font-extrabold after:w-full" : "hover:text-brand-600 text-slate-600"
              }`}
            >
              {link.name}
              {link.name === "Projects" && <span className="text-[8px] font-extrabold text-white bg-slate-950 px-1.5 py-0.5 rounded leading-none">NEW</span>}
              {link.name === "Templates" && <span className="text-[8px] font-extrabold text-white bg-brand-600 px-1.5 py-0.5 rounded leading-none">6 LIVE</span>}
            </Link>
          ))}
        </nav>

        {/* Urgent CTA */}
        <div className="flex items-center gap-3">
          <Link 
            to="/consultation"
            className="hidden lg:inline-flex items-center gap-1.5 text-xs text-slate-700 font-bold hover:text-brand-600 transition-colors cursor-pointer group/link"
          >
            Live Builder
            <ArrowRight className="w-3.5 h-3.5 transition-transform duration-250 group-hover/link:translate-x-1" />
          </Link>
          
          <Link 
            to="/consultation"
            className="hidden sm:inline-flex px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-bold tracking-wide shadow-md shadow-slate-900/10 hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 active:scale-95 hover:-translate-y-0.5 transition-all duration-200 cursor-pointer items-center gap-2"
          >
            <ShieldCheck className="w-4 h-4 text-brand-400" />
            Book Consultation
          </Link>

          {/* Toggle Hamburger button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="p-2 xl:hidden text-slate-700 hover:bg-slate-100 rounded-xl transition-colors focus:outline-none"
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>

      </div>

      {/* MOBILE COLLAPSED DROPDOWN DRAWER */}
      {mobileMenuOpen && (
        <div className="xl:hidden bg-white border-t border-slate-200/60 px-4 py-6 space-y-4 shadow-xl w-full max-h-[80vh] overflow-y-auto">
          <div className="flex flex-col gap-2.5">
            {navLinks.map((link) => (
              <Link 
                key={link.name}
                to={link.path}
                onClick={() => setMobileMenuOpen(false)}
                className={`w-full text-left py-2.5 px-4 text-sm font-bold rounded-lg transition-colors flex items-center justify-between ${
                  isActive(link.path) ? "bg-brand-50 text-brand-600 font-extrabold" : "text-slate-700 hover:bg-slate-50 hover:text-brand-600"
                }`}
              >
                <span>{link.name}</span>
                {link.name === "Projects" && <span className="text-[8px] uppercase tracking-wider font-extrabold text-white bg-slate-950 px-2 py-0.5 rounded leading-none">NEW</span>}
                {link.name === "Templates" && <span className="text-[8px] uppercase tracking-wider font-extrabold text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">6 Designs</span>}
              </Link>
            ))}
            <Link 
              to="/consultation"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full text-left py-2.5 px-4 text-sm font-bold text-slate-700 hover:bg-slate-50 hover:text-brand-600 rounded-lg transition-colors flex items-center justify-between"
            >
              <span>Interactive Demo Builder</span>
              <span className="text-[8px] uppercase tracking-wider font-extrabold text-brand-600 bg-brand-50 px-2 py-0.5 rounded border border-brand-200">Active</span>
            </Link>
          </div>

          <div className="pt-4 border-t border-slate-200 flex flex-col gap-3">
            <a 
              href="https://wa.me/8801902646475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full py-3.5 px-4 bg-brand-500 hover:bg-brand-400 text-slate-950 rounded-xl text-center text-xs font-extrabold uppercase tracking-widest flex items-center justify-center gap-2 shadow-md shadow-brand-500/15 transition-colors"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 shrink-0" />
              <span>Contact WhatsApp Support</span>
            </a>

            <Link 
              to="/pricing"
              onClick={() => setMobileMenuOpen(false)}
              className="w-full py-3.5 px-4 bg-slate-900 hover:bg-slate-800 text-white rounded-xl text-center text-xs font-semibold uppercase tracking-widest flex items-center justify-center gap-2 shadow-sm transition-colors"
            >
              <ShieldCheck className="w-4 h-4 text-brand-400 shrink-0" />
              Establish Digital Identity
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
