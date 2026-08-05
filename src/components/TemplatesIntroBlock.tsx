import React from "react";
import { ArrowRight, LayoutGrid, CheckCircle2, ShieldCheck, HeartPulse } from "lucide-react";

interface TemplatesIntroBlockProps {
  setCurrentView: (view: "landing" | "projects" | "templates") => void;
}

export default function TemplatesIntroBlock({ setCurrentView }: TemplatesIntroBlockProps) {
  const handleNavigateToTemplates = () => {
    setCurrentView("templates");
    window.history.pushState(null, "", "/templates");
  };

  return (
    <section className="py-28 md:py-40 bg-gradient-to-b from-white to-slate-50 relative overflow-hidden">
      {/* Subtle light background patterns */}
      <div className="absolute top-1/2 left-10 w-72 h-72 bg-emerald-500/5 rounded-full filter blur-3xl pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white rounded-2xl p-8 sm:p-12 shadow-[0_20px_50px_rgba(15,23,42,0.045)] hover:shadow-[0_25px_60px_rgba(15,23,42,0.08)] transition-all duration-500 relative overflow-hidden grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Decorative Corner Ribbon */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-teal-500/5 rounded-bl-full pointer-events-none"></div>

          {/* Left Column: Premium Headline & Copy */}
          <div className="lg:col-span-7 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-50 text-teal-800 border border-teal-100/60 text-xs font-bold uppercase tracking-wider">
              <LayoutGrid className="w-3.5 h-3.5 text-teal-600" />
              <span>Premium Doctor Layouts</span>
            </div>

            <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight leading-tight">
              Website Templates
            </h2>

            <div className="space-y-4 text-slate-600 text-sm sm:text-base leading-relaxed font-normal">
              <p>
                Explore our meticulously crafted doctor website templates developed by MedProfile Bangladesh. Each design represents a modern clinical website layout, optimized from pure code for extreme speeds and pixel-perfect responsiveness.
              </p>
              <p>
                Browse through clinical portfolios, dermatologist procedures layouts, paediatric center guides, and fertility specialist systems to find the blueprint that perfectly maps to your medical reputation.
              </p>
            </div>

            <div className="pt-2 flex flex-col sm:flex-row items-start sm:items-center gap-4 sm:gap-6">
              <button
                onClick={handleNavigateToTemplates}
                className="inline-flex items-center gap-2 px-6 py-3.5 bg-slate-900 hover:bg-teal-600 text-white rounded-full text-xs font-bold tracking-wider uppercase transition-all duration-300 hover:scale-105 active:scale-95 shadow-md hover:shadow-lg hover:shadow-teal-600/10 cursor-pointer group"
              >
                <span>View Templates →</span>
              </button>
              
              <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                <CheckCircle2 className="w-4 h-4 text-teal-500 shrink-0" />
                Select from 6 premium responsive layouts
              </span>
            </div>
          </div>

          {/* Right Column: Visual Mockup Showcase / Grid cards mock representations */}
          <div className="lg:col-span-5 grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            {/* Mock layout card 1 */}
            <div 
              onClick={handleNavigateToTemplates}
              className="bg-white p-5 rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.06)] hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-40"
            >
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-lg bg-teal-50 border border-teal-100 text-teal-600 flex items-center justify-center font-bold text-xs">
                  01
                </div>
                <span className="text-[10px] text-teal-600 bg-teal-50 px-2 py-0.5 rounded font-bold uppercase">Popular</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm">Clinical Elite Portal</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">Tailored for cardiologists and senior medicine consultants.</p>
              </div>
            </div>

            {/* Mock layout card 2 */}
            <div 
              onClick={handleNavigateToTemplates}
              className="bg-white p-5 rounded-2xl shadow-[0_10px_30px_rgba(15,23,42,0.03)] hover:shadow-[0_15px_35px_rgba(15,23,42,0.06)] hover:scale-105 transition-all duration-300 cursor-pointer group flex flex-col justify-between h-40"
            >
              <div className="flex justify-between items-start">
                <div className="w-8 h-8 rounded-lg bg-sky-50 border border-sky-100 text-sky-600 flex items-center justify-center font-bold text-xs">
                  03
                </div>
                <span className="text-[10px] text-slate-400 font-mono text-xs">Desktops/Mobs</span>
              </div>
              <div>
                <h4 className="font-display font-bold text-slate-800 text-xs sm:text-sm">Derma Skin Luxury</h4>
                <p className="text-[11px] text-slate-400 mt-0.5 line-clamp-2">Visual-rich procedural highlights and beauty modules.</p>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
