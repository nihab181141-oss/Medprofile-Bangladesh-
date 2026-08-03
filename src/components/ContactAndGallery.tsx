import React from "react";
import { motion } from "motion/react";
import { 
  ArrowUpRight, 
  ExternalLink, 
  Sparkles, 
  Clock, 
  Lock, 
  CheckCircle2, 
  Stethoscope, 
  ShieldCheck, 
  HeartPulse, 
  Smartphone, 
  Activity,
  Award
} from "lucide-react";

export default function ContactAndGallery() {
  
  // 4 Premium Templates data
  const templates = [
    {
      id: "01",
      name: "Clinical Elite Layout",
      category: "Specialist Portfolio",
      bmdcReady: "BMDC Compliant",
      speedScore: "99/100 Mobile Speed",
      isPopular: true,
      url: "https://medprofile.vercel.app/",
      colors: ["#0d9488", "#0f766e", "#38bdf8"], // Teal & blue
      previewBlocks: (
        <div className="w-full h-full bg-slate-900/50 p-4 flex flex-col justify-between relative overflow-hidden text-left">
          {/* Top Navbar */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <span className="text-[9px] font-sans font-extrabold text-teal-400 tracking-wide">EliteClinic</span>
            <div className="flex gap-1.5">
              <span className="w-3 h-1 bg-white/40 rounded-full"></span>
              <span className="w-5 h-1 bg-teal-500 rounded-full"></span>
            </div>
          </div>
          {/* Hero segment */}
          <div className="space-y-1.5 pt-3">
            <div className="flex items-center gap-1">
              <span className="w-1.5 h-1.5 bg-emerald-400 rounded-full animate-ping"></span>
              <span className="text-[7px] text-teal-300 font-extrabold uppercase tracking-widest">Prof. Dr. Shakil Jamil</span>
            </div>
            <h4 className="text-[11px] font-display font-black leading-tight text-white tracking-tight">
              Leading Cardiology Consultancy in Dhaka
            </h4>
            <p className="text-[8px] text-slate-400 line-clamp-2">
              Primacy cardiac chambers at Labaid Specialized Hospital & customized continuous care protocols.
            </p>
          </div>
          {/* Action indicator */}
          <div className="flex items-center justify-between pt-2">
            <span className="text-[8px] font-mono text-teal-400 font-semibold bg-teal-500/10 px-1.5 py-0.5 rounded border border-teal-500/10">Appt: +8801902646475</span>
            <span className="w-3.5 h-3.5 rounded-full bg-teal-500/30 flex items-center justify-center text-teal-400 text-[8px] font-bold">★</span>
          </div>
        </div>
      )
    },
    {
      id: "02",
      name: "Pinnacle Care System",
      category: "Multispecialty Center",
      bmdcReady: "SEO Engineered",
      speedScore: "98/100 Mobile Speed",
      isPopular: false,
      url: "https://medprofile-04.vercel.app/",
      colors: ["#0284c7", "#0369a1", "#0ea5e9"], // Royal Blue
      previewBlocks: (
        <div className="w-full h-full bg-slate-950/75 p-4 flex flex-col justify-between relative overflow-hidden text-left">
          {/* Top Navbar */}
          <div className="flex items-center justify-between border-b border-white/5 pb-2">
            <span className="text-[9px] font-sans font-black text-sky-400 tracking-tight">PinnacleHealth</span>
            <span className="text-[7px] text-slate-450 bg-white/5 px-2 py-0.5 rounded border border-white/5 font-mono">Chamber Live</span>
          </div>
          {/* Hero segment */}
          <div className="space-y-1.5 pt-3">
            <span className="text-[7px] text-sky-300 font-bold uppercase tracking-wider block">CHAMBER PORTAL</span>
            <h4 className="text-[11px] font-display font-black leading-normal text-white">
              Surgically Polished Pediatric Care Suite
            </h4>
            <div className="grid grid-cols-3 gap-1 pt-1">
              <span className="bg-white/5 py-1 text-center rounded text-[7px] text-slate-350 border border-white/5">Sat-Mon</span>
              <span className="bg-sky-500/15 py-1 text-center rounded text-[7px] text-sky-400 border border-sky-500/10">04:00 PM</span>
              <span className="bg-white/5 py-1 text-center rounded text-[7px] text-slate-350 border border-white/5">Dhanmondi</span>
            </div>
          </div>
          {/* Footer stats */}
          <div className="flex items-center justify-between border-t border-white/5 pt-2 text-[7px] text-slate-400 font-medium">
            <span>BMDC Reg A-5942</span>
            <span className="text-emerald-400 font-semibold flex items-center gap-0.5">● 100% Online</span>
          </div>
        </div>
      )
    },
    {
      id: "03",
      name: "Dynamic Care Flow",
      category: "Interactive Clinic Profile",
      bmdcReady: "Real-time Verified",
      speedScore: "100/100 Mobile Speed",
      isPopular: false,
      url: "https://medprofile-03.vercel.app/",
      colors: ["#0f172a", "#1e293b", "#334155"], // Dark Slate Luxury
      previewBlocks: (
        <div className="w-full h-full bg-indigo-950/40 p-4 flex flex-col justify-between relative overflow-hidden text-left">
          {/* Premium Glowing Blob */}
          <div className="absolute top-0 right-0 w-16 h-16 bg-teal-500/20 rounded-full filter blur-md"></div>
          {/* Grid header */}
          <div className="flex items-center gap-1.5">
            <div className="w-4 h-4 rounded-full bg-teal-500/20 flex items-center justify-center text-teal-400 text-[8px] font-bold">✚</div>
            <span className="text-[8px] text-indigo-200 uppercase tracking-widest font-extrabold">Careflow Integrated</span>
          </div>
          {/* Main profile */}
          <div className="space-y-1.5 pt-2">
            <h4 className="text-[11px] font-display font-extrabold leading-snug text-white">
              Custom Booking & Telehealth Gateway
            </h4>
            <p className="text-[8px] text-indigo-200/70">
              Patients request virtual care appointments, read publications, and get GPS direction cards instantly.
            </p>
          </div>
          {/* Visual card badge */}
          <div className="p-1.5 bg-white/5 rounded border border-white/5 flex items-center justify-between mt-1">
            <div className="flex items-center gap-1">
              <span className="w-1 h-3 bg-teal-400 rounded"></span>
              <span className="text-[7px] text-slate-300 font-semibold">Verified Digital Footprint</span>
            </div>
            <span className="text-[7px] font-extrabold text-teal-400 underline cursor-pointer">Live Map</span>
          </div>
        </div>
      )
    },
    {
      id: "04",
      name: "Minimalist Pulse Identity",
      category: "Consultant Branding Portfolio",
      bmdcReady: "Premium Minimalist",
      speedScore: "99/100 Mobile Speed",
      isPopular: false,
      url: "https://medprofile-02.vercel.app/",
      colors: ["#1e1b4b", "#311042", "#4c1d95"], // Cosmic Royalty
      previewBlocks: (
        <div className="w-full h-full bg-slate-900/60 p-4 flex flex-col justify-between relative overflow-hidden text-left">
          {/* Minimal design */}
          <div className="flex items-center justify-between border-b border-white/10 pb-2">
            <div className="flex items-center gap-1">
              <div className="w-1.5 h-1.5 rounded-full bg-teal-500"></div>
              <span className="text-[8px] text-slate-300 font-bold uppercase tracking-widest font-mono">DR. PARVEZ AHMED</span>
            </div>
            <span className="text-[7px] bg-teal-400/10 text-teal-300 px-1 rounded font-bold">FRCS</span>
          </div>
          {/* Specialties statement */}
          <div className="space-y-1 pt-3">
            <p className="text-[8px] uppercase tracking-wider text-teal-400 font-extrabold">Orthopaedic surgeon</p>
            <h4 className="text-[11px] font-semibold text-white tracking-tight leading-normal">
              Digital Identity Engineered for Extreme Reach
            </h4>
          </div>
          {/* Simple directions */}
          <div className="flex justify-between items-center bg-white/5 px-2 py-1.5 rounded-lg text-[7px] text-slate-400">
            <span>Specialist Consultation chamber, Banani</span>
            <span className="font-extrabold text-teal-400">→</span>
          </div>
        </div>
      )
    }
  ];

  // SVG Custom premium icon for WhatsApp
  const WhatsAppIcon = () => (
    <svg 
      className="w-7 h-7 sm:w-8 sm:h-8 mr-1 group-hover:scale-110 transition-transform duration-300"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512" 
      fill="currentColor"
    >
      <path d="M380.9 97.1C339 55.1 283.2 32 223.9 32c-122.4 0-222 99.6-222 222 0 39.1 10.2 77.3 29.6 111L3 480l117.7-30.9c32.4 17.7 68.9 27 106.1 27h.1c122.3 0 224.1-99.6 224.1-222 0-59.3-25.2-115-67.1-157zm-157 341.6c-33.2 0-65.7-8.9-94-25.7l-6.7-4-69.8 18.3L72 359.2l-4.4-7c-18.5-29.4-28.2-63.3-28.2-98.2 0-101.7 82.8-184.5 184.6-184.5 49.3 0 95.6 19.2 130.4 54.1 34.8 34.9 56.2 81.2 56.1 130.5 0 101.8-84.9 184.6-186.6 184.6zm101.2-138.2c-5.5-2.8-32.8-16.2-37.9-18-5.1-1.9-8.8-2.8-12.5 2.8-3.7 5.6-14.3 18-17.6 21.8-3.2 3.7-6.5 4.2-12 1.4-32.6-16.3-54-29.1-75.5-66-5.7-9.8 5.7-9.1 16.3-30.3 1.8-3.7.9-6.9-.5-9.7-1.4-2.8-12.5-30.1-17.1-41.2-4.5-10.8-9.1-9.3-12.5-9.5-3.2-.2-6.9-.2-10.6-.2-3.7 0-9.7 1.4-14.8 6.9-5.1 5.6-19.4 19-19.4 46.3 0 27.3 19.9 53.7 22.6 57.4 2.8 3.7 39.1 59.7 94.8 83.8 35.2 15.2 49 16.5 66.6 13.9 10.7-1.6 32.8-13.4 37.4-26.4 4.6-13 4.6-24.1 3.2-26.4-1.3-2.5-5-3.9-10.5-6.6z"/>
    </svg>
  );

  // SVG Custom premium icon for Facebook
  const FacebookIcon = () => (
    <svg 
      className="w-7 h-7 sm:w-8 sm:h-8 opacity-60 text-slate-400 group-hover:text-sky-500 transition-colors duration-300"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 320 512" 
      fill="currentColor"
    >
      <path d="M80 299.3V256H12v-74.7h68v-41.7C80 81.6 114.3 48 174.4 48c28.8 0 53.5 2.1 60.7 3v70.3h-41.6c-32.9 0-39.3 15.6-39.3 38.6v50.7h77.8l-10.1 74.7h-67.7V480H80V299.3z"/>
    </svg>
  );

  // SVG Custom premium icon for Instagram
  const InstagramIcon = () => (
    <svg 
      className="w-7 h-7 sm:w-8 sm:h-8 opacity-60 text-slate-400 group-hover:text-pink-500 transition-colors duration-300"
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 448 512" 
      fill="currentColor"
    >
      <path d="M224.1 141c-63.6 0-114.9 51.3-114.9 114.9s51.3 114.9 114.9 114.9S339 319.5 339 255.9 287.7 141 224.1 141zm0 189.6c-41.1 0-74.7-33.5-74.7-74.7s33.5-74.7 74.7-74.7 74.7 33.5 74.7 74.7-33.6 74.7-74.7 74.7zm146.4-194.3c0 14.9-12 26.8-26.8 26.8-14.9 0-26.8-12-26.8-26.8s12-26.8 26.8-26.8 26.8 12 26.8 26.8zm76.1 27.2c-1.7-35.9-9.9-67.7-36.2-93.9-26.2-26.2-58-34.4-93.9-36.2-37-2.1-147.9-2.1-184.9 0-35.8 1.7-67.6 9.9-93.9 36.1s-34.4 58-36.2 93.9c-2.1 37-2.1 147.9 0 184.9 1.7 35.9 9.9 67.7 36.2 93.9s58 34.4 93.9 36.2c37 2.1 147.9 2.1 184.9 0 35.9-1.7 67.7-9.9 93.9-36.2 26.2-26.2 34.4-58 36.2-93.9 2.1-37 2.1-147.8 0-184.8zM402.7 344c-7.8 19.5-20.6 34.4-42.6 42.6-29.5 11.7-99.5 9-132.1 9s-102.7 2.6-132.1-9c-22.1-8.3-34.9-23-42.6-42.6-11.7-29.5-9-99.5-9-132.1s-2.6-102.7 9-132.1c8.3-22.1 23-34.9 42.6-42.6 29.5-11.7 99.5-9 132.1-9s102.7-2.6 132.1 9c22.1 8.3 34.9 23 42.6 42.6 11.7 29.5 9 99.5 9 132.1s2.7 102.7-9 132.1z"/>
    </svg>
  );

  return (
    <>
      {/* SECTION 2: GET IN TOUCH CONTACT SECTION */}
      <section id="contact-us" className="py-28 md:py-40 bg-white relative overflow-hidden border-t border-slate-100 scroll-mt-20">
        
        {/* Soft abstract floating dot backdrops */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-teal-100/10 rounded-full filter blur-[150px] -z-10"></div>
        <div className="absolute bottom-0 right-0 w-80 h-80 bg-teal-50/50 rounded-full filter blur-[120px] -z-10"></div>

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          
          {/* Header Title segment */}
          <div className="text-center max-w-3xl mx-auto mb-16 md:mb-20">
            <motion.div
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 bg-teal-50 border border-teal-100 text-teal-800 rounded-full text-xs font-bold uppercase tracking-wider mb-4"
            >
              <Activity className="w-3.5 h-3.5 text-teal-600 animate-pulse" />
              Direct Support Portal
            </motion.div>

            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight"
            >
              Get In Touch With Our Team
            </motion.h2>

            <motion.p 
              initial={{ opacity: 0, y: 15 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="mt-4 text-slate-500 text-sm md:text-base leading-relaxed font-semibold max-w-2xl mx-auto"
            >
              Choose your preferred communication method and connect with MedProfile Bangladesh. Let's elevate your clinical brand together.
            </motion.p>
          </div>

          {/* Premium cards container: Side-by-side or Grid layouts */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">
            
            {/* Card 01: Fully Active WhatsApp support card */}
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="md:col-span-1 group relative bg-white rounded-2xl p-8 flex flex-col justify-between shadow-[0_15px_45px_rgba(16,185,129,0.06)] hover:shadow-[0_25px_50px_rgba(16,185,129,0.12)] transition-all duration-300"
            >
              {/* Active Badge overlay */}
              <div className="absolute top-4 right-4 bg-emerald-50 text-emerald-800 border border-emerald-100 font-mono text-[9px] font-extrabold tracking-widest uppercase py-1 px-3 rounded-full flex items-center gap-1 select-none">
                <span className="w-1.5 h-1.5 bg-emerald-500 rounded-full animate-ping"></span> Active Channel
              </div>

              <div>
                <div className="w-16 h-16 rounded-2xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-6 border border-emerald-100/50">
                  <WhatsAppIcon />
                </div>

                <h3 className="font-display font-black text-slate-900 text-xl tracking-tight leading-snug">
                  WhatsApp Support
                </h3>
                
                <p className="mt-3 text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Receive instant responses, clinical publishing assistance, custom domain configurations, or resolve urgent layout adjustments in real-time.
                </p>

                <div className="mt-5 space-y-2 text-[11px] text-slate-600 font-bold select-none">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>Average reply time: {"<"} 5 Minutes</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-emerald-500" />
                    <span>24/7 Priority Clinical Support</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href="https://wa.me/8801902646475"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-4 bg-emerald-500 hover:bg-emerald-600 text-white font-display font-extrabold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2.5 transition-colors duration-200 active:scale-98 shadow-md shadow-emerald-500/15"
                >
                  <span>Connect via WhatsApp</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </motion.div>

            {/* Card 02: Facebook support card */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="md:col-span-1 group relative bg-white rounded-2xl p-8 flex flex-col justify-between shadow-[0_15px_45px_rgba(14,165,233,0.06)] hover:shadow-[0_25px_50px_rgba(14,165,233,0.12)] transition-all duration-300"
            >
              {/* Active Badge overlay */}
              <div className="absolute top-4 right-4 bg-sky-50 text-sky-800 border border-sky-100 font-mono text-[9px] font-extrabold tracking-widest uppercase py-1 px-3 rounded-full flex items-center gap-1 select-none">
                <span className="w-1.5 h-1.5 bg-sky-500 rounded-full animate-ping"></span> Active Channel
              </div>

              <div>
                <div className="w-16 h-16 rounded-2xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 border border-sky-100/50">
                  <FacebookIcon />
                </div>

                <h3 className="font-display font-black text-slate-900 text-xl tracking-tight leading-snug">
                  Facebook Page
                </h3>

                <p className="mt-3 text-slate-500 text-xs sm:text-sm leading-relaxed font-medium">
                  Follow our updates, clinical publishing tips, custom domain showcases, and interact with the MedProfile community.
                </p>

                <div className="mt-5 space-y-2 text-[11px] text-slate-600 font-bold select-none">
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                    <span>Latest updates & tips</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <CheckCircle2 className="w-3.5 h-3.5 text-sky-500" />
                    <span>Community discussions</span>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-100">
                <a
                  href="https://www.facebook.com/share/19VkASpQAm/"
                  target="_blank"
                  referrerPolicy="no-referrer"
                  rel="noopener noreferrer"
                  className="w-full py-4 px-4 bg-sky-500 hover:bg-sky-600 text-white font-display font-extrabold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2.5 transition-colors duration-200 active:scale-98 shadow-md shadow-sky-500/15"
                >
                  <span>Visit Facebook Page</span>
                  <ArrowUpRight className="w-4 h-4 text-white" />
                </a>
              </div>
            </motion.div>

            {/* Card 03: Instagram support card (Coming Soon) */}
            <motion.div
              initial={{ opacity: 0, x: 20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="md:col-span-1 group relative bg-white rounded-2xl p-8 flex flex-col justify-between shadow-[0_15px_45px_rgba(15,23,42,0.03)] hover:shadow-[0_25px_50px_rgba(15,23,42,0.06)] transition-all duration-300"
            >
              {/* Coming Soon badge */}
              <div className="absolute top-4 right-4 bg-slate-100 text-slate-500 border border-slate-200 text-[9px] font-bold tracking-widest uppercase py-1 px-3 rounded-full select-none">
                Coming Soon
              </div>

              <div>
                <div className="w-16 h-16 rounded-2xl bg-slate-100 text-slate-400 flex items-center justify-center mb-6">
                  <InstagramIcon />
                </div>

                <h3 className="font-display font-extrabold text-slate-700 text-xl tracking-tight leading-snug">
                  Instagram Support
                </h3>

                <p className="mt-3 text-slate-400 text-xs sm:text-sm leading-relaxed font-semibold">
                  Visual healthcare identity setups, profile layout showcases, typography highlights, and premium custom clinic aesthetics portfolios.
                </p>

                <div className="mt-6 flex items-center gap-1.5 text-[10px] text-slate-400 font-bold select-none">
                  <Clock className="w-3.5 h-3.5" />
                  <span>Integration in Progress</span>
                </div>
              </div>

              <div className="mt-8 pt-4 border-t border-slate-150">
                <button
                  disabled
                  className="w-full py-4 px-4 bg-slate-100 text-slate-400 font-display font-bold text-xs uppercase tracking-widest rounded-2xl flex items-center justify-center gap-2 cursor-not-allowed select-none"
                >
                  <Lock className="w-3.5 h-3.5" />
                  <span>Coming Soon</span>
                </button>
              </div>
            </motion.div>

          </div>

          {/* Sincere Corporate Note footer */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-16 text-center max-w-xl mx-auto p-6 bg-slate-50/50 border border-slate-200/50 rounded-2xl"
          >
            <p className="text-[10px] sm:text-xs text-slate-450 leading-relaxed font-semibold">
              MedProfile Bangladesh is dedicated to establishing credible medical footprints. If you have questions regarding legal frameworks, regional medical associations compliance, or high availability custom cloud security setup packages, reach out immediately.
            </p>
          </motion.div>

        </div>
      </section>
    </>
  );
}
