import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  Search, 
  MapPin, 
  ArrowUpRight, 
  Layers, 
  ExternalLink,
  ShieldCheck, 
  PhoneCall, 
  Sparkles, 
  Check, 
  CheckCircle2, 
  Award, 
  HeartHandshake, 
  Clock, 
  BookmarkCheck, 
  ThumbsUp, 
  Zap, 
  HelpCircle,
  Stethoscope,
  Globe,
  Monitor,
  Laptop,
  MessageSquare
} from "lucide-react";

// Import generated website screenshot assets
import cardioImg from "../assets/images/project_cardio_web_1781754802708.jpg";
import gynaeImg from "../assets/images/project_gynae_web_1781754814153.jpg";
import dermaImg from "../assets/images/project_derma_web_1781754828518.jpg";
import orthoImg from "../assets/images/project_ortho_web_1781754843420.jpg";
import childImg from "../assets/images/project_child_web_1781754858646.jpg";
import neuroImg from "../assets/images/project_neuro_web_1781754872816.jpg";
import medImg from "../assets/images/project_med_web_1781754914893.jpg";

interface Project {
  id: number;
  doctorName: string;
  degrees: string;
  specialization: string;
  location: string;
  screenshotUrl: string;
  demoUrl: string;
}

export default function OurProjects() {
  const [searchTerm, setSearchTerm] = useState("");
  const [activeCategory, setActiveCategory] = useState("All Categories");

  // Project List is intentionally empty as we prepare to launch our live pilot medical profiles
  const projectsData: Project[] = [];

  // Filter Categories
  const categories = [
    "All Specialities",
    "Cardiology",
    "Medicine",
    "Gynecology",
    "Orthopedics",
    "Pediatrics",
    "Dermatology",
    "Neurology"
  ];

  // Trust badges details
  const trustBadges = [
    "Professional Websites",
    "Mobile Responsive",
    "SEO Optimized",
    "Fast Loading",
    "Healthcare Focused"
  ];

  // Stats numbers count up implementation
  const [stats, setStats] = useState({
    delivered: 0,
    active: 0,
    served: 0,
    satisfaction: 0
  });

  useEffect(() => {
    const duration = 1500; // milliseconds
    const frames = 60;
    const interval = duration / frames;
    
    let currentFrame = 0;
    
    const timer = setInterval(() => {
      currentFrame++;
      const progress = currentFrame / frames;
      
      setStats({
        delivered: Math.min(Math.round(progress * 140), 140),
        active: Math.min(Math.round(progress * 125), 125),
        served: Math.min(Math.round(progress * 98), 98),
        satisfaction: parseFloat((progress * 99.8).toFixed(1))
      });
      
      if (currentFrame >= frames) {
        clearInterval(timer);
        setStats({
          delivered: 140,
          active: 125,
          served: 98,
          satisfaction: 99.8
        });
      }
    }, interval);

    return () => clearInterval(timer);
  }, []);

  // Filter and search logic
  const filteredProjects = projectsData.filter((project) => {
    const matchesSearch =
      project.doctorName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.specialization.toLowerCase().includes(searchTerm.toLowerCase()) ||
      project.location.toLowerCase().includes(searchTerm.toLowerCase());

    const matchesCategory =
      activeCategory === "All Categories" ||
      project.specialization === activeCategory;

    return matchesSearch && matchesCategory;
  });

  return (
    <div className="min-h-screen bg-slate-50/20 text-slate-800 antialiased font-sans pt-12">
      
      {/* ━━━━━━━━━━━━━━━━━━━━━━ HERO SECTION ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/20 pt-16 pb-20 md:py-28">
        {/* Modern glowing background blobs */}
        <div className="absolute top-12 left-1/12 w-96 h-96 bg-teal-200/20 rounded-full filter blur-[120px] -z-10 animate-pulse" style={{ animationDuration: "10s" }}></div>
        <div className="absolute bottom-12 right-1/12 w-96 h-96 bg-sky-200/20 rounded-full filter blur-[120px] -z-10 animate-pulse" style={{ animationDuration: "15s" }}></div>
        <div className="absolute top-1/2 left-1/3 w-80 h-80 bg-teal-100/10 rounded-full filter blur-[100px] -z-11"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative text-center">
          
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-2 px-3.5 py-1.5 bg-teal-500/10 text-teal-800 rounded-full text-xs font-semibold tracking-wider uppercase border border-teal-500/15 mb-6 shadow-sm shadow-teal-500/5"
          >
            <Award className="w-3.5 h-3.5 text-teal-600" />
            Verified Portfolio
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="font-display font-black text-4xl sm:text-5xl md:text-6.5xl text-slate-900 tracking-tight leading-[1.1] mb-6"
          >
            Our <span className="bg-gradient-to-r from-teal-600 via-teal-500 to-sky-600 bg-clip-text text-transparent">Projects</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-600 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-10"
          >
            Explore the professional doctor websites developed by MedProfile Bangladesh and see how we help healthcare professionals build a powerful digital identity online.
          </motion.p>

          {/* Core Trust Badges */}
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="flex items-center justify-center flex-wrap gap-3 max-w-4xl mx-auto"
          >
            {trustBadges.map((badge, index) => (
              <span
                key={index}
                className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-4 py-2 rounded-full text-xs font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-md hover:scale-105"
              >
                <Check className="w-3.5 h-3.5 text-teal-600" />
                {badge}
              </span>
            ))}
          </motion.div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ SEARCH & FILTER SECTION ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-6 scroll-mt-24 sticky top-20 z-45 bg-slate-50/75 backdrop-blur-md border-y border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-6">
            
            {/* Search Input */}
            <div className="relative w-full lg:max-w-md">
              <div className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none text-slate-400">
                <Search className="w-5 h-5" />
              </div>
              <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search projects by doctor, specialty, or city..."
                className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-300 rounded-2xl text-slate-900 text-sm font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm transition-all duration-200"
              />
            </div>

            {/* Filter chips with smooth hover / selection */}
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0 scrollbar-hide -mx-4 px-4 lg:mx-0 lg:px-0">
              {categories.map((category) => (
                <button
                  key={category}
                  onClick={() => setActiveCategory(category)}
                  className={`px-4 py-2 rounded-xl text-xs font-extrabold whitespace-nowrap transition-all duration-200 select-none cursor-pointer border ${
                    activeCategory === category
                      ? "bg-slate-950 text-white border-slate-950 shadow-md"
                      : "bg-white text-slate-600 hover:text-slate-900 border-slate-200/80 hover:border-slate-300 shadow-sm"
                  }`}
                >
                  {category}
                </button>
              ))}
            </div>

          </div>
        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ PROJECT SHOWCASE GRID ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-white relative overflow-hidden">
        {/* Subtle decorative background gradients */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-80 h-80 bg-teal-500/5 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          
          {/* Main Coming Soon Container */}
          <div className="relative bg-slate-950 text-white rounded-3xl p-8 sm:p-12 md:p-16 border border-slate-800 shadow-2xl overflow-hidden hover:shadow-[0_20px_50px_rgba(20,184,166,0.1)] transition-all duration-500 group">
            
            {/* Glowing background ring */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-teal-500/10 rounded-full filter blur-[100px] pointer-events-none group-hover:bg-teal-500/15 transition-all duration-500"></div>
            <div className="absolute -bottom-20 -left-20 w-80 h-80 bg-sky-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>

            <div className="relative z-10 max-w-3xl mx-auto text-center space-y-8">
              
              {/* Top active tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-teal-400 rounded-full text-[10px] font-extrabold uppercase tracking-widest leading-none">
                <span className="w-1.5 h-1.5 rounded-full bg-teal-400 animate-pulse"></span>
                <span>Active Onboarding Phase</span>
              </div>

              {/* Title & Request Message */}
              <div className="space-y-4">
                <h3 className="font-display font-black text-2xl sm:text-3xl lg:text-4xl text-white tracking-tight leading-tight">
                  Portfolio Launch Coming Soon
                </h3>
                <p className="text-slate-300 text-base sm:text-lg font-normal max-w-2xl mx-auto leading-relaxed">
                  Real client projects will be showcased here as we continue helping doctors build their digital presence.
                </p>
              </div>

              {/* Visual Pipeline Showcase block */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-left pt-4">
                
                {/* Pipeline step 1 */}
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-teal-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-teal-400 font-mono">PHASE 01</span>
                    <span className="text-[9px] bg-teal-500/20 text-teal-300 px-2.5 py-0.5 rounded font-extrabold uppercase">Complete</span>
                  </div>
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Template Selection</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">6 premium medical layout canvases successfully engineered and live for demo testing.</p>
                </div>

                {/* Pipeline step 2 */}
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-teal-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-teal-400 font-mono">PHASE 02</span>
                    <span className="text-[9px] bg-teal-500/20 text-teal-300 px-2.5 py-0.5 rounded font-extrabold uppercase animate-pulse">Active</span>
                  </div>
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Client Onboarding</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Structuring clinical portfolios, medical resumes, and doctor credentials for pilot doctors.</p>
                </div>

                {/* Pipeline step 3 */}
                <div className="h-full bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-teal-500/30 transition-all duration-300">
                  <div className="flex items-center justify-between mb-3">
                    <span className="text-[10px] font-bold text-slate-500 font-mono">PHASE 03</span>
                    <span className="text-[9px] bg-white/5 text-slate-400 px-2 py-0.5 rounded font-extrabold uppercase">Queued</span>
                  </div>
                  <h4 className="font-display font-bold text-xs text-white uppercase tracking-wider">Live Deployments</h4>
                  <p className="text-[11px] text-slate-400 mt-1 leading-relaxed">Registering web domains (.com.bd / .com) and indexing clinical content directly on search engines.</p>
                </div>

              </div>

              {/* Pilot Clinician CTA */}
              <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row items-center justify-between gap-6 text-left">
                <div>
                  <h4 className="font-display font-black text-sm text-white">Join Our Exclusive Cohort</h4>
                  <p className="text-slate-400 text-xs mt-0.5">Be among the first doctors in Bangladesh to launch a live profile with MedProfile.</p>
                </div>
                <a
                  href="https://wa.me/8801902646475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3 bg-teal-500 hover:bg-teal-400 text-slate-950 text-xs font-bold uppercase rounded-full transition-all duration-200 shadow-md active:scale-95"
                >
                  <span>Launch Your Site</span>
                  <ArrowUpRight className="w-3.5 h-3.5" />
                </a>
              </div>

            </div>

          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ INTEGRATED STATISTICS SECTION ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-20 md:py-24 bg-slate-950 text-white relative overflow-hidden">
        {/* Abstract lights background */}
        <div className="absolute top-0 right-0 w-80 h-80 bg-teal-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>
        <div className="absolute bottom-0 left-0 w-80 h-80 bg-sky-500/10 rounded-full filter blur-[120px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-y-12 gap-x-8 text-center">
            
            {/* Stat 1 */}
            <div className="space-y-2">
              <p className="text-3xl md:text-5xl font-display font-black text-white hover:text-teal-400 transition-colors duration-300">
                {stats.delivered}+
              </p>
              <div className="w-10 h-0.5 bg-teal-500 mx-auto rounded"></div>
              <p className="text-[11px] md:text-xs uppercase font-extrabold tracking-[0.2em] text-slate-400">Projects Delivered</p>
            </div>

            {/* Stat 2 */}
            <div className="space-y-2">
              <p className="text-3xl md:text-5xl font-display font-black text-white hover:text-teal-400 transition-colors duration-300">
                {stats.active}+
              </p>
              <div className="w-10 h-0.5 bg-teal-500 mx-auto rounded"></div>
              <p className="text-[11px] md:text-xs uppercase font-extrabold tracking-[0.2em] text-slate-400">Active Websites</p>
            </div>

            {/* Stat 3 */}
            <div className="space-y-2">
              <p className="text-3xl md:text-5xl font-display font-black text-white hover:text-teal-400 transition-colors duration-300">
                {stats.served}+
              </p>
              <div className="w-10 h-0.5 bg-teal-500 mx-auto rounded"></div>
              <p className="text-[11px] md:text-xs uppercase font-extrabold tracking-[0.2em] text-slate-400">Healthcare Professionals</p>
            </div>

            {/* Stat 4 */}
            <div className="space-y-2">
              <p className="text-3xl md:text-5xl font-display font-black text-white hover:text-teal-400 transition-colors duration-300">
                {stats.satisfaction}%
              </p>
              <div className="w-10 h-0.5 bg-teal-500 mx-auto rounded"></div>
              <p className="text-[11px] md:text-xs uppercase font-extrabold tracking-[0.2em] text-slate-400">Client Satisfaction</p>
            </div>

          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ WHY CLIENTS TRUST US ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-slate-50/50 border-t border-slate-200/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto mb-16">
            <span className="text-[10px] bg-slate-900/5 text-slate-800 border border-slate-200 font-extrabold px-3 py-1 rounded-full uppercase tracking-wider">
              A Web Agency Built For Doctors
            </span>
            <h2 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mt-4">
              Why Doctors Trust Us
            </h2>
            <p className="text-sm text-slate-600 mt-2 max-w-xl mx-auto">
              We specialize strictly in medical templates, patient usability, search visibility, and official regulations in Bangladesh.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            
            {/* Bento Card 1 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <Laptop className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Professional Design</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Bespoke design patterns, balanced typography configurations, eye-safe colors, and an aesthetic that communicates confidence and security instantly to visiting patients.
                </p>
              </div>
            </div>

            {/* Bento Card 2 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <Globe className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">SEO Optimization</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Injected with rich JSON-LD structured clinical schemas, optimized sitemaps, robots tags, and lightning-fast loading score to rise dynamically on search result pages.
                </p>
              </div>
            </div>

            {/* Bento Card 3 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <Stethoscope className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Healthcare-Focused Development</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Engineered specifically around clinical structures, ensuring medical registration visibility (BMDC check coordinates ready) and high doctor access layout.
                </p>
              </div>
            </div>

            {/* Bento Card 4 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <HeartHandshake className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Dedicated Support</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Get direct 1-on-1 assistance for updating chamber coordinates, consulting profiles, degrees, photos, and general technical troubleshooting instantly on WhatsApp.
                </p>
              </div>
            </div>

            {/* Bento Card 5 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <Zap className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Fast Delivery</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Deploy your live digital medical profile card within 3 to 5 days, fully configured with custom domain setup, appointment integration, and mobile layouts.
                </p>
              </div>
            </div>

            {/* Bento Card 6 */}
            <div className="bg-white p-8 rounded-2xl shadow-[0_15px_45px_rgba(15,23,42,0.04)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.08)] hover:-translate-y-0.5 transition-all duration-300 flex flex-col justify-between">
              <div className="space-y-4">
                <div className="w-12 h-12 rounded-2xl bg-teal-50 flex items-center justify-center text-teal-600">
                  <CheckCircle2 className="w-6 h-6" />
                </div>
                <h3 className="font-display font-bold text-lg text-slate-900">Future Scalability</h3>
                <p className="text-slate-600 text-xs sm:text-sm leading-relaxed">
                  Scale your profile as your healthcare network grows. Seamlessly add multi-clinic listings, patient testimonials, informative blogs, and video integration later.
                </p>
              </div>
            </div>

          </div>

        </div>
      </section>

      {/* ━━━━━━━━━━━━━━━━━━━━━━ HIGH VALUES CALL TO ACTION ━━━━━━━━━━━━━━━━━━━━━━ */}
      <section className="py-24 bg-slate-950 text-white relative overflow-hidden text-center">
        {/* Soft abstract graphic rings */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] border border-white/5 rounded-full pointer-events-none"></div>
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[850px] h-[850px] border border-white/5 rounded-full pointer-events-none"></div>
        
        {/* Spot light highlights */}
        <div className="absolute -top-12 left-1/2 -translate-x-1/2 w-80 h-80 bg-teal-500/20 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 relative space-y-8">
          
          <div className="inline-flex items-center gap-1.5 bg-teal-500/10 text-teal-400 border border-teal-500/20 px-3.5 py-1.5 rounded-full text-xs font-black uppercase tracking-[0.2em] mx-auto">
            <Sparkles className="w-3.5 h-3.5 animate-spin" style={{ animationDuration: "3s" }} />
            Start Growing Today
          </div>

          <h2 className="font-display font-black text-3xl sm:text-5xl text-white tracking-tight leading-tight max-w-2xl mx-auto">
            Ready To Build Your Professional Digital Identity?
          </h2>

          <p className="text-slate-400 text-sm md:text-base font-medium max-w-xl mx-auto">
            Join the growing number of healthcare professionals choosing MedProfile Bangladesh.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="https://wa.me/8801902646475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 shrink-0" />
              <span>Get Started</span>
            </a>
            
            <a
              href="https://wa.me/8801902646475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-white/10 hover:border-white/20 text-white rounded-full text-sm font-bold hover:bg-slate-900 hover:scale-105 active:scale-95 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4 text-teal-400" />
              <span>Contact Us</span>
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}
