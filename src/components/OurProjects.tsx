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

  // Project List (using standard authentic Bangladeshi clinician data to build direct trust)
  const projectsData: Project[] = [
    {
      id: 1,
      doctorName: "Prof. Dr. M. A. Baqui",
      degrees: "MBBS, MD (Cardiology), FACC (USA), FESC",
      specialization: "Cardiology",
      location: "Dhaka",
      screenshotUrl: cardioImg,
      demoUrl: "https://drbaqui-cardiology.medprofile.com.bd"
    },
    {
      id: 2,
      doctorName: "Dr. Nusrat Jahan",
      degrees: "MBBS, FCPS (Obstetrics & Gynecology), MS (Gynae)",
      specialization: "Gynecology",
      location: "Chittagong",
      screenshotUrl: gynaeImg,
      demoUrl: "https://drnusrat-gynae.medprofile.com.bd"
    },
    {
      id: 3,
      doctorName: "Dr. Sabina Yeasmin",
      degrees: "MBBS, DDV, FCPS (Dermatology)",
      specialization: "Dermatology",
      location: "Dhaka",
      screenshotUrl: dermaImg,
      demoUrl: "https://drsabina-skin.medprofile.com.bd"
    },
    {
      id: 4,
      doctorName: "Dr. Syed Tanveer Ahmed",
      degrees: "MBBS, MS (Orthopedic Surgery)",
      specialization: "Orthopedics",
      location: "Sylhet",
      screenshotUrl: orthoImg,
      demoUrl: "https://drtanveer-ortho.medprofile.com.bd"
    },
    {
      id: 5,
      doctorName: "Prof. Dr. Ariful Islam",
      degrees: "MBBS, FCPS (Pediatrics), MD (Child Health)",
      specialization: "Pediatrics",
      location: "Rajshahi",
      screenshotUrl: childImg,
      demoUrl: "https://drarifchild.medprofile.com.bd"
    },
    {
      id: 6,
      doctorName: "Dr. Fahmida Rahman",
      degrees: "MBBS, MD (Neurology)",
      specialization: "Neurology",
      location: "Khulna",
      screenshotUrl: neuroImg,
      demoUrl: "https://drfahmida-neuro.medprofile.com.bd"
    },
    {
      id: 7,
      doctorName: "Dr. S. M. Munir",
      degrees: "MBBS, FCPS (Internal Medicine), MACP (USA)",
      specialization: "Medicine",
      location: "Dhaka",
      screenshotUrl: medImg,
      demoUrl: "https://drmunir-medicine.medprofile.com.bd"
    },
    {
      id: 8,
      doctorName: "Dr. Rehana Parvin",
      degrees: "MBBS, DGO, MCPS (Obstetrics & Gynecology)",
      specialization: "Gynecology",
      location: "Dhaka",
      screenshotUrl: gynaeImg, // Reusing high fidelity gynae template screenshot
      demoUrl: "https://drrehana-gynae.medprofile.com.bd"
    }
  ];

  // Filter Categories
  const categories = [
    "All Categories",
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
            className="text-slate-650 text-base sm:text-lg md:text-xl font-normal leading-relaxed max-w-3xl mx-auto mb-10"
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
                className="inline-flex items-center gap-1.5 bg-white border border-slate-200/80 px-4 py-2 rounded-full text-xs font-bold text-slate-700 shadow-sm transition-all duration-300 hover:border-teal-200 hover:shadow-md hover:scale-102"
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
                className="block w-full pl-11 pr-4 py-3 bg-white border border-slate-250 rounded-2xl text-slate-900 text-sm font-semibold placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-teal-500 focus:border-teal-500 shadow-sm transition-all duration-200"
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
                      : "bg-white text-slate-650 hover:text-slate-900 border-slate-200/80 hover:border-slate-300 shadow-sm"
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
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          
          <div className="mb-10 text-center lg:text-left">
            <span className="text-slate-500 font-bold ml-1 text-sm tracking-wide">
              Showing {filteredProjects.length === projectsData.length ? "all" : filteredProjects.length} completed projects
            </span>
          </div>

          {filteredProjects.length === 0 ? (
            <div className="text-center py-20 max-w-md mx-auto">
              <div className="w-16 h-16 bg-slate-100 rounded-full flex items-center justify-center mx-auto mb-4 text-slate-400">
                <Search className="w-7 h-7" />
              </div>
              <h3 className="font-display font-bold text-lg text-slate-900">No projects found</h3>
              <p className="text-slate-500 text-xs mt-1">Try resetting your search query or choosing another specialty category filter.</p>
              <button
                onClick={() => { setSearchTerm(""); setActiveCategory("All Categories"); }}
                className="mt-5 text-xs font-bold text-teal-600 bg-teal-50 px-4 py-2 rounded-lg hover:bg-teal-100 transition-colors"
              >
                Reset Filters
              </button>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <AnimatePresence mode="popLayout">
                {filteredProjects.map((project, index) => (
                  <motion.div
                    key={project.id}
                    layout
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    transition={{ duration: 0.4 }}
                    className="group flex flex-col bg-slate-50/50 border border-slate-200/70 rounded-3xl overflow-hidden hover:bg-white hover:border-slate-250 hover:shadow-2xl hover:shadow-slate-200/50 transition-all duration-300"
                  >
                    
                    {/* Website 16:9 Screen Section */}
                    <div className="relative aspect-[16/9] w-full overflow-hidden bg-slate-100 border-b border-slate-200/50">
                      <img 
                        src={project.screenshotUrl} 
                        alt={`${project.doctorName} website preview screenshot`}
                        className="w-full h-full object-cover object-top transition-transform duration-700 group-hover:scale-103 group-hover:translate-y-[-1%]"
                        referrerPolicy="no-referrer"
                      />
                      
                      {/* Dark overlay & live visit visual on hover */}
                      <div className="absolute inset-0 bg-slate-950/40 backdrop-blur-xs opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
                        <a 
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-5 py-3.5 bg-white text-slate-950 rounded-2xl text-xs font-bold tracking-wide flex items-center gap-1.5 shadow-xl hover:bg-slate-950 hover:text-white transition-all duration-200 hover:scale-105"
                        >
                          <span>View Live Site</span>
                          <ExternalLink className="w-3.5 h-3.5" />
                        </a>
                      </div>

                      {/* Floating Location Tag */}
                      <div className="absolute top-3 left-3 bg-white/90 backdrop-blur-xs px-2.5 py-1 rounded-lg shadow-sm border border-slate-200/40 flex items-center gap-1">
                        <MapPin className="w-3 h-3 text-slate-500 fill-slate-100" />
                        <span className="text-[10px] font-bold text-slate-700">{project.location}</span>
                      </div>

                      {/* Floating Live Indicator Badge */}
                      <div className="absolute top-3 right-3 bg-teal-500 border border-teal-400 px-2.5 py-1 rounded-lg flex items-center gap-1.5 shadow-sm text-white">
                        <span className="w-1.5 h-1.5 rounded-full bg-white animate-ping"></span>
                        <span className="text-[9px] font-extrabold uppercase tracking-widest leading-none">Live Portfolio</span>
                      </div>
                    </div>

                    {/* Card Description Details */}
                    <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                      <div className="space-y-2">
                        
                        {/* Specialization mini Badge */}
                        <span className="inline-flex items-center bg-teal-50 text-teal-800 border border-teal-100 px-2.5 py-0.5 rounded-md text-[9px] font-extrabold uppercase tracking-wider">
                          {project.specialization}
                        </span>

                        {/* Title & Degrees */}
                        <div>
                          <h3 className="font-display font-extrabold text-lg text-slate-900 group-hover:text-teal-600 transition-colors leading-snug">
                            {project.doctorName}
                          </h3>
                          <p className="text-xs text-slate-500 font-semibold line-clamp-1 mt-0.5" title={project.degrees}>
                            {project.degrees}
                          </p>
                        </div>

                      </div>

                      {/* Footer button inside card */}
                      <div className="pt-2">
                        <a
                          href={project.demoUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="w-full py-3 px-4 bg-white border border-slate-250 text-slate-700 hover:text-white hover:bg-slate-950 hover:border-slate-950 rounded-xl text-xs font-bold leading-normal transition-all duration-200 flex items-center justify-center gap-1.5 shadow-sm"
                        >
                          <span>Visit Live Website</span>
                          <ArrowUpRight className="w-3.5 h-3.5 transition-transform duration-200 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                        </a>
                      </div>

                    </div>

                  </motion.div>
                ))}
              </AnimatePresence>
            </div>
          )}

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
            <div className="bg-white border border-slate-200/60 p-8 rounded-3xl space-y-4 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
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
            <div className="bg-white border border-slate-200/60 p-8 rounded-3xl space-y-4 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
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
            <div className="bg-white border border-slate-200/60 p-8 rounded-3xl space-y-4 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
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
            <div className="bg-white border border-slate-200/60 p-8 rounded-3xl space-y-4 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
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
            <div className="bg-white border border-slate-200/60 p-8 rounded-3xl space-y-4 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
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
            <div className="bg-white border border-slate-200/60 p-8 rounded-3xl space-y-4 hover:border-slate-300 hover:shadow-xl transition-all duration-300 flex flex-col justify-between">
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
              className="w-full sm:w-auto px-8 py-4 bg-teal-500 hover:bg-teal-600 text-slate-950 rounded-full text-sm font-bold tracking-wide shadow-lg shadow-teal-500/20 hover:shadow-teal-500/30 hover:scale-103 active:scale-97 transition-all duration-200 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4 fill-slate-950 shrink-0" />
              <span>Get Started</span>
            </a>
            
            <a
              href="https://wa.me/8801902646475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-900 border border-white/10 hover:border-white/20 text-white rounded-full text-sm font-bold hover:bg-slate-850 hover:scale-103 active:scale-97 transition-all duration-200 flex items-center justify-center gap-2"
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
