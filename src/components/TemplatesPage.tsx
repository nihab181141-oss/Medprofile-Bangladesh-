import React, { useState } from "react";
import { motion } from "motion/react";
import { 
  Search, 
  ExternalLink, 
  Sparkles, 
  CheckCircle, 
  ArrowRight, 
  MessageSquare, 
  Filter, 
  Monitor, 
  Clock, 
  Lightbulb, 
  ShieldCheck 
} from "lucide-react";

// Image imports
import cardioImg from "../assets/images/project_cardio_web_1781754802708.jpg";
import childImg from "../assets/images/project_child_web_1781754858646.jpg";
import dermaImg from "../assets/images/project_derma_web_1781754828518.jpg";
import gynaeImg from "../assets/images/project_gynae_web_1781754814153.jpg";
import neuroImg from "../assets/images/project_neuro_web_1781754872816.jpg";
import orthoImg from "../assets/images/project_ortho_web_1781754843420.jpg";

interface Template {
  id: string;
  name: string;
  url: string;
  description: string;
  category: "Modern" | "Premium" | "Luxury" | "Minimal";
  screenshot: string;
  features: string[];
  speedScore: string;
  isPopular?: boolean;
}

export default function TemplatesPage() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<"All" | "Modern" | "Premium" | "Luxury" | "Minimal">("All");

  const templatesData: Template[] = [
    {
      id: "01",
      name: "Clinical Elite Layout",
      url: "https://medprofile.vercel.app/",
      description: "Our core signature design for cardiologists and senior medicine consultants. Clean structure, instant clinic highlights, and highly authoritative trust badges.",
      category: "Premium",
      screenshot: cardioImg,
      speedScore: "99/100 Mobile Speed",
      isPopular: true,
      features: ["BMDC Compliant", "One-Click WhatsApp Dialing", "Real-Time Chamber Availability Slot"]
    },
    {
      id: "02",
      name: "Pinnacle Pediatric Suite",
      url: "https://medprofile-02.vercel.app/",
      description: "A friendly, warm layout designed specifically for pediatricians and child care specialists. Featuring welcoming color profiles, custom clinic cards, and parent FAQs.",
      category: "Modern",
      screenshot: childImg,
      speedScore: "99/100 Mobile Speed",
      features: ["Parent-Friendly FAQ Accordions", "Emergency Room Highlights", "Optimized Mobile Navigation"]
    },
    {
      id: "03",
      name: "Derma Skin Luxury Center",
      url: "https://medprofile-03.vercel.app/",
      description: "A highly visual, premium aesthetic platform optimized for dermatologists and cosmetic surgeon clinics. Elegantly balances clinic procedures with visual gallery cards.",
      category: "Luxury",
      screenshot: dermaImg,
      speedScore: "100/100 Desktop Speed",
      features: ["Procedural Services Visualizer", "Before/After Gallery Lockups", "Smooth Floating Appointment Booking"]
    },
    {
      id: "04",
      name: "Gynae Care & Maternity Portal",
      url: "https://medprofile-04.vercel.app/",
      description: "A soft, reassuring portal designed for gynecologists, obstetricians, and fertility consultants. Displays patient-focused expertise combined with clear chamber maps.",
      category: "Minimal",
      screenshot: gynaeImg,
      speedScore: "98/100 Mobile Speed",
      features: ["Empathetic Healthcare Copywriting", "Hospital Association Badges", "BMDC Registered Blueprint"]
    },
    {
      id: "05",
      name: "Neurological & Brain Elite Hub",
      url: "https://medprofile-demo-05.vercel.app/",
      description: "A state-of-the-art tech-forward digital slate tailored for neurosurgeons and neurologists. High-contrast layout optimized for research papers, books, and clinic routes.",
      category: "Premium",
      screenshot: neuroImg,
      speedScore: "99/100 Search Speed",
      features: ["Research Publications Shelf", "Interactive GPS Direction Card", "Dynamic Appointment QR Module"]
    },
    {
      id: "06",
      name: "Orthopaedic Elite Surgical Layout",
      url: "https://medprofiledemo-06.vercel.app/",
      description: "A modern charcoal-silver clinical layout crafted for orthopaedic, spine, and trauma specialists. Showcases active hospital surgeries, trauma hotlines, and clinic timings.",
      category: "Luxury",
      screenshot: orthoImg,
      speedScore: "98/100 Mobile Speed",
      features: ["Surgical Treatment Modules", "Timely Chamber Status Badges", "Patients Success Portals"]
    }
  ];

  const filteredTemplates = templatesData.filter((tpl) => {
    const matchesSearch = tpl.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
                          tpl.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          tpl.category.toLowerCase().includes(searchQuery.toLowerCase());
    const matchesCategory = selectedCategory === "All" || tpl.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="pt-24 min-h-screen bg-slate-50/50">
      
      {/* 2. Page main introduction banner */}
      <section className="relative overflow-hidden bg-slate-900 text-white py-16 md:py-24 border-b border-slate-800">
        <div className="absolute -top-40 -left-40 w-96 h-96 bg-teal-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
        <div className="absolute -bottom-40 -right-40 w-96 h-96 bg-sky-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center space-y-6">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-teal-500/10 border border-teal-500/20 text-teal-300 text-xs font-bold tracking-wider uppercase">
            <Sparkles className="w-4 h-4 text-teal-400" />
            <span>Interactive Layout Selector</span>
          </div>

          <h1 className="font-display font-extrabold text-3xl sm:text-4xl lg:text-5xl text-white tracking-tight leading-tight">
            Website Templates
          </h1>

          <p className="max-w-3xl mx-auto text-slate-300 text-sm sm:text-base md:text-lg leading-relaxed font-normal">
            Choose from our professionally designed doctor website templates. Each template is fully responsive, modern, SEO-friendly, and customizable according to your requirements.
          </p>

          <div className="pt-2 flex flex-wrap gap-4 justify-center items-center text-xs text-slate-400 font-medium">
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-emerald-500"></span>
              100% Mobile Responsive
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-teal-500"></span>
              Google PageSpeed Optimized
            </span>
            <span className="text-slate-700 hidden sm:inline">|</span>
            <span className="flex items-center gap-1.5">
              <span className="w-2 h-2 rounded-full bg-sky-500"></span>
              BMDC Medical Ethics Registered
            </span>
          </div>
        </div>
      </section>

      {/* 3. Search Bar and Navigation Filter */}
      <section className="bg-white border-b border-slate-200 sticky top-20 z-30 shadow-sm py-4">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
            
            {/* Left Column: Category Badges */}
            <div className="flex flex-wrap gap-2 items-center w-full md:w-auto overflow-x-auto pb-1 md:pb-0 scrollbar-none">
              <span className="text-xs font-bold text-slate-500 mr-2 flex items-center gap-1">
                <Filter className="w-3.5 h-3.5 text-slate-400" />
                Category:
              </span>
              
              {(["All", "Modern", "Premium", "Luxury", "Minimal"] as const).map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-full text-xs font-bold transition-all duration-300 cursor-pointer ${
                    selectedCategory === cat
                      ? "bg-slate-900 text-teal-400 shadow-md scale-102"
                      : "bg-slate-100 hover:bg-slate-200 text-slate-650"
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>

            {/* Right Column: Search Bar */}
            <div className="relative w-full md:w-80">
              <span className="absolute inset-y-0 left-0 pl-3.5 flex items-center pointer-events-none">
                <Search className="h-4 w-4 text-slate-400" />
              </span>
              <input
                type="text"
                placeholder="Search templates..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full text-xs py-3 pl-10 pr-4 bg-slate-55 border border-slate-200 rounded-full focus:outline-none focus:ring-2 focus:ring-teal-500/20 focus:border-teal-600 transition-all font-medium text-slate-800"
              />
              {searchQuery && (
                <button 
                  onClick={() => setSearchQuery("")}
                  className="absolute right-3.5 top-1/2 -translate-y-1/2 text-[10px] font-bold text-slate-400 hover:text-slate-600 cursor-pointer"
                >
                  Clear
                </button>
              )}
            </div>

          </div>
        </div>
      </section>

      {/* 4. Display of Template Cards with Responsive Layouts */}
      <section className="py-16 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {filteredTemplates.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200 max-w-xl mx-auto p-8 space-y-4">
            <Monitor className="w-12 h-12 text-slate-350 mx-auto" />
            <h3 className="font-display font-bold text-lg text-slate-800">No Templates Match Your Query</h3>
            <p className="text-xs text-slate-500">
              Try adjusting your search criteria or choosing a different class category badge from above.
            </p>
            <button
              onClick={() => { setSearchQuery(""); setSelectedCategory("All"); }}
              className="px-6 py-2.5 bg-slate-900 text-white rounded-full text-xs font-semibold hover:bg-slate-850 cursor-pointer"
            >
              Reset Filters
            </button>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {filteredTemplates.map((tpl, idx) => (
              <motion.div
                key={tpl.id}
                initial={{ opacity: 0, y: 25 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: idx * 0.08 }}
                className="bg-white rounded-2xl border border-slate-200/85 overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 flex flex-col justify-between group"
              >
                
                {/* 5. Image & Mockup Device Lockup */}
                <div className="relative aspect-[16/10] overflow-hidden bg-slate-100 group-hover:scale-[1.01] transition-transform duration-300">
                  {/* Absolute Badge */}
                  <div className="absolute top-4 left-4 z-10 flex gap-2">
                    <span className="text-[10px] font-extrabold uppercase bg-slate-900 border border-slate-800 text-teal-400 px-2.5 py-1 rounded-full shadow-md">
                      Template {tpl.id}
                    </span>
                    {tpl.isPopular && (
                      <span className="text-[10px] font-extrabold uppercase bg-teal-500 text-slate-950 px-2.5 py-1 rounded-full shadow-md flex items-center gap-1">
                        🏆 Most Popular
                      </span>
                    )}
                  </div>

                  <div className="absolute top-4 right-4 z-10">
                    <span className="bg-emerald-500/10 border border-emerald-500/20 text-emerald-600 text-[10px] font-bold px-2.5 py-1 rounded-full shadow-sm">
                      ● Live Preview
                    </span>
                  </div>

                  {/* Glassmorphic device frame container with actual image screenshot */}
                  <div className="w-full h-full relative overflow-hidden flex items-end justify-center pt-8 bg-slate-950 border-b border-slate-100">
                    
                    {/* Fake Browser header */}
                    <div className="absolute top-0 inset-x-0 h-6 bg-slate-900 border-b border-white/5 px-4 flex items-center justify-between z-10">
                      <div className="flex gap-1.5">
                        <span className="w-1.5 h-1.5 rounded-full bg-rose-500/50"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-amber-500/50"></span>
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500/50"></span>
                      </div>
                      <span className="text-[8px] text-slate-500 font-mono tracking-wide">{tpl.url.replace("https://", "")}</span>
                      <div className="w-6 h-1 bg-white/10 rounded"></div>
                    </div>

                    {/* Image screenshot */}
                    <img 
                      src={tpl.screenshot} 
                      alt={`${tpl.name} Screenshot`}
                      referrerPolicy="no-referrer"
                      className="w-[92%] h-[88%] object-cover object-top rounded-t-lg shadow-xl border-t border-x border-white/10 group-hover:scale-105 transition-transform duration-500"
                    />
                  </div>
                </div>

                {/* Info and CTA */}
                <div className="p-6 flex-1 flex flex-col justify-between space-y-4">
                  
                  <div className="space-y-2">
                    {/* Category and PageSpeed Score */}
                    <div className="flex items-center justify-between text-[10px] font-bold tracking-wider uppercase">
                      <span className="text-teal-600 bg-teal-50 border border-teal-100/50 px-2 py-0.5 rounded">
                        {tpl.category} Theme
                      </span>
                      <span className="text-slate-400 font-mono">
                        ⚡ {tpl.speedScore}
                      </span>
                    </div>

                    <h3 className="font-display font-extrabold text-base text-slate-900 group-hover:text-teal-700 transition-colors duration-200">
                      {tpl.name}
                    </h3>

                    <p className="text-xs text-slate-500 leading-relaxed">
                      {tpl.description}
                    </p>
                  </div>

                  {/* Features list */}
                  <div className="space-y-1 bg-slate-50 p-3 rounded-xl border border-slate-200/50">
                    <span className="text-[10px] uppercase font-bold text-slate-400 block mb-1">Layout Highlights:</span>
                    {tpl.features.map((feat, fIdx) => (
                      <div key={fIdx} className="flex items-center gap-1.5 text-[10px] text-slate-600 font-medium">
                        <CheckCircle className="w-3.5 h-3.5 text-teal-600 shrink-0" />
                        <span>{feat}</span>
                      </div>
                    ))}
                  </div>

                  {/* Navigation View Button */}
                  <div className="pt-2">
                    <a
                      href={tpl.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="w-full inline-flex items-center justify-center gap-1.5 py-3 bg-slate-900 hover:bg-teal-600 text-white rounded-xl text-xs font-bold transition-all duration-300 hover:scale-101 shadow-sm active:scale-99 group/btn"
                    >
                      <span>View Live Template</span>
                      <ExternalLink className="w-3.5 h-3.5 text-white/80 group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                    </a>
                  </div>

                </div>

              </motion.div>
            ))}
          </div>
        )}

      </section>

      {/* 8. Call To Action section at the bottom */}
      <section className="bg-gradient-to-br from-slate-900 to-slate-950 border-t border-slate-800 text-white py-16 md:py-24 overflow-hidden relative">
        <div className="absolute top-1/2 -translate-y-1/2 left-0 w-80 h-80 bg-teal-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>
        <div className="absolute top-1/2 -translate-y-1/2 right-0 w-80 h-80 bg-sky-500/10 rounded-full filter blur-[100px] pointer-events-none"></div>

        <div className="max-w-4xl mx-auto px-4 text-center space-y-8 relative z-10">
          <div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-slate-300 rounded-full text-xs font-bold uppercase tracking-wider">
            <ShieldCheck className="w-4 h-4 text-teal-400" />
            Establish Your Digital Clinic Identity Today
          </div>

          <h2 className="font-display font-black text-2xl sm:text-3xl md:text-4xl leading-tight">
            Ready To Launch Your Professional Doctor Website?
          </h2>

          <p className="text-slate-350 text-xs sm:text-sm md:text-base max-w-2xl mx-auto leading-relaxed">
            Choose your preferred template and send us a text on WhatsApp. We will configure your web domains, publish your clinical resume, inject SEO schemas, and secure your live URL within 48 hours.
          </p>

          <div className="pt-4 flex flex-col sm:flex-row justify-center items-center gap-4">
            <a
              href="https://wa.me/8801902646475"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2.5 px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-slate-950 rounded-full text-sm font-extrabold tracking-wide shadow-lg shadow-emerald-500/20 hover:-translate-y-0.5 transition-all duration-300"
            >
              <MessageSquare className="w-5 h-5 text-slate-950 fill-slate-950" />
              <span>Contact Us on WhatsApp</span>
            </a>

            <div className="flex items-center gap-2 text-xs text-slate-400 font-medium">
              <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse"></span>
              Average response time: &lt; 15 minutes
            </div>
          </div>
        </div>
      </section>

    </div>
  );
}
