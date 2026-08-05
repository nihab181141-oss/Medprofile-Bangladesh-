import React from "react";
import { ArrowRight, Globe, CheckCircle, ShieldCheck } from "lucide-react";

interface ProjectsIntroBlockProps {
  setCurrentView: (view: "landing" | "projects") => void;
}

export default function ProjectsIntroBlock({ setCurrentView }: ProjectsIntroBlockProps) {
  const handleNavigateToProjects = () => {
    setCurrentView("projects");
    window.history.pushState(null, "", "/projects");
  };

  return (
    <section className="py-28 md:py-40 bg-gradient-to-b from-slate-50 via-white to-slate-50/50 relative overflow-hidden">
      {/* Decorative subtle abstract elements */}
      <div className="absolute top-1/4 left-0 w-80 h-80 bg-brand-500/5 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>
      <div className="absolute bottom-1/4 right-0 w-80 h-80 bg-brand-500/5 rounded-full filter blur-3xl -z-10 pointer-events-none"></div>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-gradient-to-br from-slate-900 to-slate-950 rounded-3xl p-8 sm:p-12 lg:p-16 shadow-2xl relative overflow-hidden border border-slate-800/80">
          
          {/* Subtle light reflections */}
          <div className="absolute -top-40 -left-40 w-96 h-96 bg-brand-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
          <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-brand-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center relative z-10">
            
            {/* Left Content Column */}
            <div className="lg:col-span-7 space-y-6">
              <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-300 text-xs font-bold tracking-wider uppercase">
                <ShieldCheck className="w-4 h-4 text-brand-400" />
                <span>Live Portfolio Showcase</span>
              </div>

              <h2 className="font-display font-bold text-3xl sm:text-4xl text-white tracking-tight leading-tight">
                Our Projects
              </h2>

              <div className="space-y-4 text-slate-300 text-sm sm:text-base leading-relaxed font-normal">
                <p>
                  Explore our recently completed doctor websites built by MedProfile Bangladesh. These projects showcase real healthcare professionals who now have a strong digital identity online.
                </p>
                <p>
                  Each project represents a real medical website designed for doctors to improve visibility, trust, and patient engagement.
                </p>
                <p className="hidden sm:block">
                  If you are planning to build your own professional website, you can explore our projects to see real examples and understand how your website will look.
                </p>
                <p className="text-slate-200 font-medium">
                  You can also check the status of live doctor websites and see how we transform medical professionals into a strong online presence.
                </p>
              </div>

              {/* Action Button */}
              <div className="pt-4 flex flex-wrap gap-4 items-center">
                <button
                  onClick={handleNavigateToProjects}
                  className="inline-flex items-center gap-2.5 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-slate-950 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-brand-500/20 hover:shadow-xl hover:shadow-brand-500/30 hover:-translate-y-0.5 active:translate-y-0 active:scale-95 transition-all duration-300 cursor-pointer group"
                >
                  <span>View Our Projects</span>
                  <ArrowRight className="w-4 h-4 text-slate-950 transition-transform duration-300 group-hover:translate-x-1" />
                </button>
                
                <span className="text-xs text-slate-400 flex items-center gap-1.5 font-medium">
                  <span className="w-2 h-2 rounded-full bg-brand-500 animate-pulse"></span>
                  Currently tracking 7+ active clinical layouts
                </span>
              </div>
            </div>

            {/* Right Interactive Mockup Element - Clean Bento Grid Preview */}
            <div className="lg:col-span-5 grid grid-cols-2 gap-4">
              
              {/* Box 1 */}
              <div 
                onClick={handleNavigateToProjects}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <Globe className="w-5 h-5" />
                </div>
                <h3 className="font-display font-medium text-white text-sm">Real Proofs</h3>
                <p className="text-slate-400 text-xs mt-1">Direct BMDC compliant doctors portals.</p>
              </div>

              {/* Box 2 */}
              <div 
                onClick={handleNavigateToProjects}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300 cursor-pointer group mt-4 lg:mt-0"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <CheckCircle className="w-5 h-5" />
                </div>
                <h3 className="font-display font-medium text-white text-sm">Live Domains</h3>
                <p className="text-slate-400 text-xs mt-1">Live online clinics with integrated maps.</p>
              </div>

              {/* Box 3 */}
              <div 
                onClick={handleNavigateToProjects}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300 cursor-pointer group"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="text-xs font-black">SEO</span>
                </div>
                <h3 className="font-display font-medium text-white text-sm">Rank Tracked</h3>
                <p className="text-slate-400 text-xs mt-1">Indexed by Google within 48 hours.</p>
              </div>

              {/* Box 4 */}
              <div 
                onClick={handleNavigateToProjects}
                className="bg-white/5 border border-white/10 p-5 rounded-2xl hover:bg-white/10 hover:border-brand-500/30 transition-all duration-300 cursor-pointer group mt-4 lg:mt-0"
              >
                <div className="w-10 h-10 rounded-xl bg-brand-500/10 text-brand-400 flex items-center justify-center mb-3 group-hover:scale-105 transition-transform">
                  <span className="text-xs font-black">BMDC</span>
                </div>
                <h3 className="font-display font-medium text-white text-sm">Compliant</h3>
                <p className="text-slate-400 text-xs mt-1">100% compliant with medical ethics.</p>
              </div>

            </div>

          </div>

        </div>
      </div>
    </section>
  );
}
