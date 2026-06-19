import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  ShieldCheck, 
  Sparkles, 
  ArrowRight, 
  Activity, 
  Laptop, 
  Search, 
  Smartphone, 
  BadgeCheck,
  Stethoscope,
  Phone,
  MessageSquare,
  Mail,
  Heart,
  Calendar,
  AlertCircle
} from "lucide-react";

// Import modular sections
import Header from "./components/Header";
import LogoIcon from "./components/LogoIcon";
import WhyChoose from "./components/WhyChoose";
import FeaturesGrid from "./components/FeaturesGrid";
import ProcessFlow from "./components/ProcessFlow";
import InteractiveProfileBuilder from "./components/InteractiveProfileBuilder";
import PricingSection from "./components/PricingSection";
import FounderSection from "./components/FounderSection";
import FAQSection from "./components/FAQSection";
import ContactAndGallery from "./components/ContactAndGallery";
import OurProjects from "./components/OurProjects";
import ProjectsIntroBlock from "./components/ProjectsIntroBlock";
import TemplatesPage from "./components/TemplatesPage";
import TemplatesIntroBlock from "./components/TemplatesIntroBlock";

export default function App() {
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackSent, setCallbackSent] = useState(false);

  // Initialize view from URL pathname or hash smoothly
  const [currentView, setCurrentView] = useState<"landing" | "projects" | "templates">(() => {
    const origPath = window.location.pathname.toLowerCase().trim();
    const path = origPath.endsWith("/") && origPath.length > 1 ? origPath.slice(0, -1) : origPath;
    if (
      path === "/projects" || 
      path === "/projects.html" || 
      path === "/our-projects" || 
      path === "/our-projects.html" || 
      window.location.hash === "#projects"
    ) {
      return "projects";
    }
    if (
      path === "/templates" ||
      path === "/templates.html" ||
      path === "/website-templates" ||
      window.location.hash === "#templates"
    ) {
      return "templates";
    }
    return "landing";
  });

  // Listen to popstate event for premium back/forward browser button navigation
  React.useEffect(() => {
    const handlePopState = () => {
      const origPath = window.location.pathname.toLowerCase().trim();
      const path = origPath.endsWith("/") && origPath.length > 1 ? origPath.slice(0, -1) : origPath;
      if (
        path === "/projects" || 
        path === "/projects.html" || 
        path === "/our-projects" || 
        path === "/our-projects.html" || 
        window.location.hash === "#projects"
      ) {
        setCurrentView("projects");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else if (
        path === "/templates" ||
        path === "/templates.html" ||
        path === "/website-templates" ||
        window.location.hash === "#templates"
      ) {
        setCurrentView("templates");
        window.scrollTo({ top: 0, behavior: "instant" });
      } else {
        setCurrentView("landing");
        window.scrollTo({ top: 0, behavior: "instant" });
      }
    };

    window.addEventListener("popstate", handlePopState);
    return () => window.removeEventListener("popstate", handlePopState);
  }, []);

  // Sync title and SEO metadata dynamically for maximized trust and Vercel/SaaS level SEO
  React.useEffect(() => {
    if (currentView === "projects") {
      document.title = "Our Projects | MedProfile Bangladesh";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", "Explore professional doctor websites developed by MedProfile Bangladesh and discover how we help healthcare professionals build trusted digital identities.");
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", "Our Projects | MedProfile Bangladesh");
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", "Explore professional doctor websites developed by MedProfile Bangladesh and discover how we help healthcare professionals build trusted digital identities.");
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", "Our Projects | MedProfile Bangladesh");

      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", "Explore professional doctor websites developed by MedProfile Bangladesh and discover how we help healthcare professionals build trusted digital identities.");

      // Structured Schema Markup
      let schemaScript = document.getElementById("projects-schema") as HTMLScriptElement;
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "projects-schema";
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Our Projects | MedProfile Bangladesh",
        "description": "Explore professional doctor websites developed by MedProfile Bangladesh and discover how we help healthcare professionals build trusted digital identities.",
        "url": `${window.location.origin}/projects`,
        "provider": {
          "@type": "Organization",
          "name": "MedProfile Bangladesh",
          "url": window.location.origin
        }
      });
    } else if (currentView === "templates") {
      document.title = "Doctor Website Templates | MedProfile Bangladesh";
      
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", "Explore premium doctor website templates developed by MedProfile Bangladesh and choose the perfect design for your professional digital identity.");
      }
      
      const ogTitle = document.querySelector('meta[property="og:title"]');
      if (ogTitle) ogTitle.setAttribute("content", "Doctor Website Templates | MedProfile Bangladesh");
      
      const ogDesc = document.querySelector('meta[property="og:description"]');
      if (ogDesc) ogDesc.setAttribute("content", "Explore premium doctor website templates developed by MedProfile Bangladesh and choose the perfect design for your professional digital identity.");
      
      const twTitle = document.querySelector('meta[name="twitter:title"]');
      if (twTitle) twTitle.setAttribute("content", "Doctor Website Templates | MedProfile Bangladesh");

      const twDesc = document.querySelector('meta[name="twitter:description"]');
      if (twDesc) twDesc.setAttribute("content", "Explore premium doctor website templates developed by MedProfile Bangladesh and choose the perfect design for your professional digital identity.");

      // Structured Schema Markup
      let schemaScript = document.getElementById("projects-schema") as HTMLScriptElement;
      if (!schemaScript) {
        schemaScript = document.createElement("script");
        schemaScript.id = "projects-schema";
        schemaScript.type = "application/ld+json";
        document.head.appendChild(schemaScript);
      }
      schemaScript.textContent = JSON.stringify({
        "@context": "https://schema.org",
        "@type": "CollectionPage",
        "name": "Doctor Website Templates | MedProfile Bangladesh",
        "description": "Explore premium doctor website templates developed by MedProfile Bangladesh and choose the perfect design for your professional digital identity.",
        "url": `${window.location.origin}/templates`,
        "provider": {
          "@type": "Organization",
          "name": "MedProfile Bangladesh",
          "url": window.location.origin
        }
      });
    } else {
      document.title = "MedProfile Bangladesh | Building Professional Digital Identity for Doctors";
      const metaDesc = document.querySelector('meta[name="description"]');
      if (metaDesc) {
        metaDesc.setAttribute("content", "Establishes an authoritative web presence and compliant SEO blueprints for doctors in Bangladesh. Direct BMDC compliance, ultra-fast templates, and appointment support.");
      }
      const schemaScript = document.getElementById("projects-schema");
      if (schemaScript) {
        schemaScript.remove();
      }
    }
  }, [currentView]);

  React.useEffect(() => {
    // Dynamic canonical URL injection based on current window location pathname
    const link = document.getElementById("canonical-link") as HTMLLinkElement;
    if (link) {
      const baseUrl = "https://medprofile-bangladesh.vercel.app";
      // Sanitize standard pathname
      let currentPath = window.location.pathname || "/";
      if (!currentPath.startsWith("/")) {
        currentPath = "/" + currentPath;
      }
      // Strip trailing slash if present on subroutes to match the sitemap entries
      if (currentPath.length > 1 && currentPath.endsWith("/")) {
        currentPath = currentPath.slice(0, -1);
      }
      const canonicalUrl = `${baseUrl}${currentPath === "/" ? "" : currentPath}`;
      link.setAttribute("href", canonicalUrl);
    }
  }, []);

  const handleCallbackSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (callbackName && callbackPhone) {
      setCallbackSent(true);
      setTimeout(() => {
        setCallbackName("");
        setCallbackPhone("");
        setCallbackSent(false);
      }, 5000);
    }
  };

  const scrollToSection = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-slate-50/50 text-slate-800 antialiased font-sans">
      
      {/* GLOBAL NAVBAR HEADER */}
      <Header currentView={currentView} setCurrentView={setCurrentView} />

      {currentView === "projects" ? (
        <OurProjects />
      ) : currentView === "templates" ? (
        <TemplatesPage />
      ) : (
        <>
          {/* SECTION 1 — HERO SECTION */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/30 pt-12 pb-24 md:py-36 border-b border-slate-200/60">
        
        {/* Soft Animated Background Blobs */}
        <div className="absolute top-12 left-1/12 w-96 h-96 bg-teal-200/25 rounded-full filter blur-[120px] -z-10 animate-blob-bounce-1"></div>
        <div className="absolute bottom-16 right-1/12 w-[450px] h-[450px] bg-sky-200/20 rounded-full filter blur-[140px] -z-10 animate-blob-bounce-2"></div>
        <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-teal-100/10 rounded-full filter blur-[100px] -z-11"></div>
        
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
            
            {/* HERO LEFT COLUMN: CORE VALUE COPY */}
            <motion.div 
              className="lg:col-span-7 space-y-8 text-center lg:text-left"
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
            >
              
              {/* Premium National Trust Indicator */}
              <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-800 text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0 shadow-sm shadow-teal-500/5 animate-pulse-slow">
                <Sparkles className="w-4 h-4 text-teal-600 mr-0.5 inline shrink-0" />
                <span>Premium Doctor Branding & SEO Platform</span>
              </div>

              {/* Huge Display Typography */}
              <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.08]">
                Bangladesh's Trusted Platform for{" "}
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-600 via-teal-700 to-teal-500 block py-1">
                  Doctor Digital Identity
                </span>
              </h1>

              {/* Subheadline with persuasive copy */}
              <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                Establish an authoritative web presence that enables patients to locate verified clinic information, secure chamber details, and professional background.
              </p>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                <button 
                  onClick={() => scrollToSection("pricing-section")}
                  className="w-full sm:w-auto px-8 py-4 bg-slate-900 hover:bg-teal-600 text-white rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-slate-900/10 hover:shadow-teal-500/20 hover:-translate-y-0.5 active:scale-98 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 group"
                >
                  Join MedProfile Now
                  <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                </button>

                <button 
                  onClick={() => scrollToSection("demo-sandbox")}
                  className="w-full sm:w-auto px-8 py-4 bg-white/85 backdrop-blur-sm text-slate-800 border border-slate-200 hover:border-slate-350 rounded-xl font-bold text-sm hover:bg-slate-50 hover:-translate-y-0.5 active:scale-98 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                >
                  Configure Demo Web
                </button>
              </div>

              {/* Trust Indicators checklist */}
              <div className="pt-8 border-t border-slate-200/70 grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-slate-600 font-semibold select-none text-left max-w-md mx-auto lg:mx-0">
                <div className="flex items-center gap-2.5 group">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Verified Identity Badge</span>
                </div>
                <div className="flex items-center gap-2.5 group">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>SEO Schema Ranking</span>
                </div>
                <div className="flex items-center gap-2.5 group">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>Mobile & Tab Native</span>
                </div>
                <div className="flex items-center gap-2.5 group">
                  <div className="w-6 h-6 rounded-lg bg-teal-50 border border-teal-100 flex items-center justify-center text-teal-600 shrink-0 transition-all duration-300 group-hover:bg-teal-600 group-hover:text-white">
                    <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="3" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <span>100% High Availability</span>
                </div>
              </div>

            </motion.div>

            {/* HERO RIGHT COLUMN: INTERACTIVE GLASSMOPRH PREVIEW CONTAINER */}
            <motion.div 
              className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center"
              initial={{ opacity: 0, scale: 0.95, y: 30 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
            >
              <div className="w-full max-w-md p-2 rounded-3xl bg-gradient-to-br from-teal-500/30 via-slate-200/50 to-teal-600/20 border border-white/60 shadow-2xl relative glow-teal animate-float-gentle group">
                
                {/* Simulated Web Shell Frame */}
                <div className="bg-slate-900 rounded-2xl p-5 md:p-6 text-white flex flex-col gap-5 border border-white/10 select-none overflow-hidden relative">
                  
                  {/* Subtle shining bar reflection */}
                  <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-200% transition-all duration-[1250ms] ease-out pointer-events-none"></div>

                  {/* Browser simulated bar */}
                  <div className="flex items-center justify-between border-b border-white/5 pb-3">
                    <div className="flex items-center gap-1.5">
                      <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                      <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                      <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                    </div>
                    <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5 text-[9px] font-mono text-slate-400 tracking-wide">
                      <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                      doctor.medprofile.bd/dr-rahman
                    </div>
                  </div>

                  {/* Primary Profile Grid */}
                  <div className="pt-2">
                    <div className="flex items-center gap-4">
                      {/* Avatar container with pulse */}
                      <div className="relative">
                        <div className="absolute -inset-0.5 bg-gradient-to-tr from-teal-500 to-emerald-400 rounded-full opacity-60 blur-xs group-hover:opacity-100 transition duration-300"></div>
                        <div className="w-14 h-14 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center text-teal-400 font-bold shrink-0 relative z-10">
                          <Stethoscope className="w-6 h-6" />
                        </div>
                      </div>
                      <div>
                        <div className="flex items-center gap-1.5">
                          <h3 className="font-display font-extrabold text-base tracking-tight text-white">Prof. Dr. Rahman</h3>
                          <BadgeCheck className="w-4 h-4 text-emerald-400 shrink-0" />
                        </div>
                        <p className="text-[10px] text-teal-300 font-bold uppercase tracking-wider">BMDC Reg No: A-45892</p>
                        <p className="text-[11px] text-slate-400">Senior Consultant, Cardiology</p>
                      </div>
                    </div>
                  </div>

                  {/* Badges block */}
                  <div className="flex flex-wrap gap-2 pt-1">
                    <span className="text-[9px] font-bold uppercase tracking-wide bg-teal-400/10 text-teal-300 border border-teal-400/20 px-2.5 py-0.5 rounded-md">
                      MBBS, FCPS
                    </span>
                    <span className="text-[9px] font-bold uppercase tracking-wide bg-slate-800 text-slate-300 border border-slate-700 px-2.5 py-0.5 rounded-md">
                      Ex-NICVD Advisor
                    </span>
                  </div>

                  {/* Premium Clinical Chamber Schedule */}
                  <div className="p-4 bg-white/5 rounded-xl border border-white/80/10 space-y-3 font-sans">
                    <span className="text-[10px] text-teal-400 font-semibold tracking-wider uppercase block">Current Chamber & Hours</span>
                    
                    <div className="space-y-1.5">
                      <p className="text-[11px] font-bold text-slate-200">Labaid Specialized Hospital, Dhanmondi</p>
                      <div className="flex items-center justify-between text-[10px] text-slate-400">
                        <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Saturday — Wednesday</span>
                        <span className="bg-slate-800 px-2 py-0.5 rounded text-white font-mono font-medium">05:00 PM - 09:00 PM</span>
                      </div>
                    </div>
                  </div>

                  {/* Micro dashboard stats preview */}
                  <div className="grid grid-cols-2 gap-3 pt-2">
                    <div className="p-3 bg-white/3 rounded-lg border border-white/5 text-center">
                      <span className="text-[18px] font-extrabold text-teal-400 block font-display tracking-tight">4.9 ★</span>
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Patient Rating</span>
                    </div>
                    <div className="p-3 bg-white/3 rounded-lg border border-white/5 text-center">
                      <span className="text-[18px] font-extrabold text-white block font-display tracking-tight">12k+</span>
                      <span className="text-[9px] text-slate-400 uppercase tracking-widest font-semibold">Monthly SEO Reach</span>
                    </div>
                  </div>

                </div>

                {/* Left Floating Doctor Badge */}
                <div className="absolute -bottom-6 -left-6 bg-white border border-slate-250 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-[210px] transition-transform duration-300 hover:-translate-y-1 z-20">
                  <div className="w-10 h-10 bg-teal-50 border border-teal-100 text-teal-600 rounded-xl flex items-center justify-center shrink-0">
                    <Activity className="w-5 h-5 animate-pulse" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block">Queue Traffic</span>
                    <span className="text-xs font-bold text-slate-800 leading-none block mt-0.5">Real-time Verified</span>
                  </div>
                </div>

                {/* Right Floating Phone Scheduler */}
                <a 
                  href="https://wa.me/8801902646475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="absolute -top-6 -right-6 bg-white border border-slate-250 p-3 rounded-2xl shadow-xl flex items-center gap-2.5 max-w-[170px] transition-transform duration-300 hover:translate-y-1 z-20 hidden sm:flex cursor-pointer hover:shadow-emerald-500/10 hover:border-emerald-250"
                >
                  <div className="w-8 h-8 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0 animate-pulse">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <span className="text-[9px] uppercase font-bold tracking-widest text-slate-400 block tracking-wider">WhatsApp Hotline</span>
                    <span className="text-[11px] font-extrabold text-slate-850 leading-tight block">+8801902646475</span>
                  </div>
                </a>

              </div>
            </motion.div>

          </div>
        </div>
      </section>

      {/* SECTION 2 — WHY MEDPROFILE */}
      <WhyChoose />

      {/* SECTION 3 — FEATURES ("Everything a Modern Doctor Needs") */}
      <FeaturesGrid />

      {/* SECTION 4 — HOW IT WORKS */}
      <ProcessFlow />

      {/* NEW — OUR PROJECTS INTRO BLOCK */}
      <ProjectsIntroBlock setCurrentView={setCurrentView} />

      {/* NEW — WEBSITE TEMPLATES INTRO BLOCK */}
      <TemplatesIntroBlock setCurrentView={setCurrentView} />

      {/* SECTION 5 — DEMO PREVIEW (Sandbox Sandbox Builder with Gemini HIGH thinking) */}
      <section id="demo-sandbox" className="py-20 md:py-28 bg-white border-b border-gray-150 scroll-mt-6">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Section titles */}
          <div className="text-center max-w-3xl mx-auto mb-12">
            <span className="text-xs uppercase font-bold text-sky-700 tracking-widest block mb-1.5 font-display">Interactive Showroom</span>
            <h2 className="font-display font-medium text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
              Interactive Profile Architect Demo
            </h2>
            <p className="mt-4 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
              Experience the multi-million-dollar technology layout yourself. Modify the criteria below, select styling templates, and run our **Gemini 3.1 Pro-Preview** reasoning agent to synthesize customized SEO copy instantly.
            </p>
          </div>

          {/* Interactive sandbox tool */}
          <InteractiveProfileBuilder />

        </div>
      </section>

      {/* PREMIUM TEMPLATE GALLERY & CONTACT SECTION */}
      <ContactAndGallery />

      {/* SECTION 6 — PRICING */}
      <PricingSection />

      {/* FOUNDER & LEADERSHIP SECTION */}
      <FounderSection />

      {/* SECTION 7 — FAQ */}
      <FAQSection />

      {/* SECTION 8 — FINAL CTA (with integrated instant callback reservation) */}
      <section id="final-cta-section" className="py-24 bg-gradient-to-br from-slate-900 via-sky-950 to-slate-900 text-white relative overflow-hidden">
        
        {/* Subtle glowing ring designs */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-sky-500/10 rounded-full -z-10 pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] border border-sky-400/5 rounded-full -z-10 pointer-events-none animate-spin-slow"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 text-center space-y-8">
          
          <div className="inline-flex items-center gap-2 px-3.5 py-1 bg-sky-500/10 border border-sky-500/20 text-sky-300 rounded-full text-xs font-bold uppercase tracking-wider uppercase">
            <ShieldCheck className="w-3.5 h-3.5" />
            Empower Professional Prominence
          </div>

          <h2 className="font-display font-black text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight max-w-3xl mx-auto">
            Ready to Build Your Professional Digital Identity?
          </h2>
          
          <p className="text-gray-300 text-sm sm:text-base leading-relaxed max-w-2xl mx-auto">
            Join the growing number of elite healthcare professionals choosing MedProfile Bangladesh. Take control of your Google availability, chamber instructions, and patient trust today.
          </p>

          {/* TWO PARALLEL INTERFACES: BUTTONS & QUICK CALLBACK FORM */}
          <div className="max-w-2xl mx-auto bg-white/5 backdrop-blur-md p-6 sm:p-8 rounded-2xl border border-white/10 mt-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-start text-left">
            
            {/* Quick Contacts */}
            <div className="space-y-5">
              <h4 className="font-display font-bold text-white text-base border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-sky-500 rounded"></span>
                Instant Assistance Channels
              </h4>
              <p className="text-xs text-gray-400 leading-relaxed">
                Connect instantly with our designated healthcare onboarding concierge to finalize setup procedures.
              </p>
              
              <div className="space-y-3 font-medium text-xs sm:text-sm text-gray-200">
                <a 
                  href="https://wa.me/8801902646475" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <MessageSquare className="w-5 h-5 text-emerald-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Fast-track WhatsApp</span>
                    <span>+8801902646475</span>
                  </div>
                </a>
                
                <a 
                  href="https://wa.me/8801902646475" 
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 p-3 bg-white/5 rounded-lg border border-white/5 hover:bg-white/10 transition-colors cursor-pointer"
                >
                  <Phone className="w-5 h-5 text-sky-400 shrink-0" />
                  <div>
                    <span className="text-[10px] text-gray-400 block uppercase tracking-wider">Onboarding Hotline</span>
                    <span>+8801902646475</span>
                  </div>
                </a>
              </div>
            </div>

            {/* Quick Callback form */}
            <div className="space-y-4">
              <h4 className="font-display font-bold text-white text-base border-b border-white/10 pb-2 flex items-center gap-2">
                <span className="w-1.5 h-4 bg-teal-500 rounded"></span>
                Inquire Callback Slot
              </h4>
              
              {callbackSent ? (
                <div className="p-4 bg-emerald-500/10 border border-emerald-500/20 text-emerald-300 rounded-xl text-xs flex items-start gap-2.5">
                  <BadgeCheck className="w-4 h-4 shrink-0 mt-0.5" />
                  <div className="leading-relaxed">
                    <span className="font-bold block text-emerald-200">Request Received Successfully!</span>
                    Our medical branding partner will schedule back inside of **2 core hours**. Keep your telephone lines close.
                  </div>
                </div>
              ) : (
                <form onSubmit={handleCallbackSubmit} className="space-y-3">
                  <div>
                    <label htmlFor="callback-doc-name" className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Doctor Name</label>
                    <input 
                      id="callback-doc-name"
                      type="text" 
                      required 
                      value={callbackName} 
                      onChange={(e) => setCallbackName(e.target.value)} 
                      className="w-full bg-slate-900 border border-white/15 px-3 py-2 text-xs rounded-lg text-white focus:outline-none focus:border-teal-500 placeholder-white/30"
                      placeholder="e.g. Dr. Rahman"
                    />
                  </div>

                  <div>
                    <label htmlFor="callback-hotline-phone" className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider mb-1">Mobile Hotline Phone</label>
                    <input 
                      id="callback-hotline-phone"
                      type="tel" 
                      required 
                      value={callbackPhone} 
                      onChange={(e) => setCallbackPhone(e.target.value)} 
                      className="w-full bg-slate-900 border border-white/15 px-3 py-2 text-xs rounded-lg text-white focus:outline-none focus:border-teal-500 placeholder-white/30"
                      placeholder="e.g. +880 17..."
                    />
                  </div>

                  <button 
                    type="submit" 
                    className="w-full py-2.5 px-4 bg-sky-600 hover:bg-sky-500 text-white rounded-lg text-xs font-bold tracking-wide uppercase font-display cursor-pointer transition-colors"
                  >
                    Confirm Callback Slot
                  </button>
                </form>
              )}
            </div>

          </div>

        </div>
      </section>
        </>
      )}

      {/* FOOTER */}
      <footer className="bg-slate-900 text-gray-300 py-16 px-4 border-t border-slate-800 font-sans">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 text-sm leading-relaxed mb-10">
          
          {/* Col 1: Brand details */}
          <div className="md:col-span-5 space-y-4">
            <div className="flex items-center gap-3">
              <LogoIcon className="w-10 h-10 shrink-0" light={true} />
              <div className="flex flex-col">
                <span className="font-display font-bold text-base text-white tracking-wide">MEDPROFILE <span className="text-teal-400">BANGLADESH</span></span>
                <span className="text-[9px] uppercase tracking-[0.2em] font-semibold text-slate-400 -mt-0.5">Building Digital Identity</span>
              </div>
            </div>
            
            <p className="text-slate-400 text-xs text-justify">
              Authorized clinical domain publishing house providing medical portfolios, semantic schemas, and local patient management gateways for consultants and chamber specialists of Bangladesh.
            </p>

            <div className="pt-2 text-[10px] text-slate-500 space-y-1 select-none">
              <p>Clinical System Version 3.4.0 (Vite Production)</p>
              <p>Powered by **Gemini 3.1 Reasoning Intelligence**</p>
            </div>
          </div>

          {/* Col 2: Navigation Links */}
          <div className="md:col-span-3 space-y-4">
            <h4 className="font-display font-semibold text-white tracking-wider text-xs uppercase text-teal-400">Quick Portal Indices</h4>
            <ul className="space-y-2.5 text-xs">
              <li>
                <button onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })} className="hover:text-teal-450 transition-colors cursor-pointer text-left">
                  Home Portal Primary
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("features")} className="hover:text-teal-450 transition-colors cursor-pointer text-left">
                  Comprehensive Feature Checklist
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("pricing-section")} className="hover:text-teal-450 transition-colors cursor-pointer text-left">
                  Professional Investment Plans
                </button>
              </li>
              <li>
                <button onClick={() => scrollToSection("demo-sandbox")} className="hover:text-teal-450 transition-colors cursor-pointer text-left">
                  Interactive Sandbox Builder
                </button>
              </li>
            </ul>
          </div>

          {/* Col 3: Phone contacts */}
          <div className="md:col-span-4 space-y-4">
            <h4 className="font-display font-semibold text-white tracking-wider text-xs uppercase text-teal-400">Onboarding Assistance</h4>
            
            <div className="space-y-3 text-xs text-slate-400 font-medium">
              <a 
                href="https://wa.me/8801902646475"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-start hover:text-teal-400 transition-colors"
              >
                <Phone className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] block opacity-60">TELEPHONE HELPLINE</span>
                  <span>+8801902646475 (Onboarding Helpline)</span>
                </div>
              </a>
              
              <a 
                href="https://wa.me/8801902646475"
                target="_blank"
                rel="noopener noreferrer"
                className="flex gap-2 items-start hover:text-teal-400 transition-colors"
              >
                <MessageSquare className="w-4 h-4 text-emerald-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] block opacity-60">WHATSAPP CHANNEL</span>
                  <span>+8801902646475 (24/7 Support)</span>
                </div>
              </a>

              <div className="flex gap-2 items-start">
                <Mail className="w-4 h-4 text-teal-400 mt-0.5 shrink-0" />
                <div>
                  <span className="text-[10px] block opacity-60">ELECTRONIC ENG DESK</span>
                  <span>onboarding@medprofile-bd.com</span>
                </div>
              </div>
            </div>

            {/* Social Icons simulation */}
            <div className="flex gap-3 pt-3 border-t border-slate-800 items-center">
              <span className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">Connect:</span>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-white text-xs select-none">f</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 font-serif text-white text-xs select-none">in</div>
              <div className="w-8 h-8 rounded-full bg-slate-800 flex items-center justify-center border border-slate-700 text-white text-xs select-none">𝕏</div>
            </div>

          </div>

        </div>

        {/* Dynamic bottom pricing bar of the Professional Plan */}
        <div className="max-w-7xl mx-auto py-6 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4 text-white">
          <div className="text-xs text-slate-400 tracking-wide text-center md:text-left">
            Building Professional Digital Identity for Doctors in Bangladesh
          </div>
          <div className="flex gap-8 items-center shrink-0">
            <div className="flex flex-col items-end">
              <span className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Professional Plan</span>
              <span className="text-sm font-bold">৳10,000 Setup <span className="text-teal-400">+ ৳5,000/mo</span></span>
            </div>
          </div>
        </div>

        {/* Outer credit line */}
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
        {/* Subtle greeting bubble that highlights on load/hover */}
        <div className="mb-2 bg-white text-slate-800 border border-slate-200 px-3.5 py-2 rounded-2xl shadow-xl text-xs font-bold tracking-tight opacity-0 translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 pointer-events-none whitespace-nowrap flex items-center gap-2 shadow-emerald-500/5">
          <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
          <span>WhatsApp Live Support (Active)</span>
        </div>
        
        <a 
          href="https://wa.me/8801902646475"
          target="_blank"
          rel="noopener noreferrer"
          className="w-14 h-14 bg-emerald-500 hover:bg-emerald-600 text-white rounded-full flex items-center justify-center shadow-lg shadow-emerald-500/20 hover:shadow-emerald-500/35 transition-all duration-300 hover:scale-110 active:scale-95 group-hover:rotate-6 border-2 border-white/20"
        >
          <MessageSquare className="w-7 h-7 fill-white shrink-0" />
        </a>
      </div>

    </div>
  );
}
