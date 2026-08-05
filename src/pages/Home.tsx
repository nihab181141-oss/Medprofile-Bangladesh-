import React, { useEffect, useState } from "react";
import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { ShieldCheck, Sparkles, ArrowRight, Activity, BadgeCheck, Stethoscope, Calendar, Globe, CheckCircle, Smartphone } from "lucide-react";
import WhyChoose from "../components/WhyChoose";
import MarqueeSection from "../components/MarqueeSection";

export default function Home() {
  const [callbackName, setCallbackName] = useState("");
  const [callbackPhone, setCallbackPhone] = useState("");
  const [callbackSent, setCallbackSent] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
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

  return (
    <>
      <Helmet>
        <title>MedProfile Bangladesh | Building Professional Digital Identity for Doctors</title>
        <meta name="description" content="Establishes an authoritative web presence and compliant SEO blueprints for doctors in Bangladesh. Direct BMDC compliance, ultra-fast templates, and appointment support." />
      </Helmet>
      
      <div className="pt-20">
        {/* HERO SECTION */}
        <section className="relative overflow-hidden bg-gradient-to-b from-slate-50 via-white to-slate-50/30 pt-12 pb-24 md:py-36 border-b border-slate-200/60">
          <div className="absolute top-12 left-1/12 w-96 h-96 bg-brand-200/25 rounded-full filter blur-[120px] -z-10 animate-blob-bounce-1"></div>
          <div className="absolute bottom-16 right-1/12 w-[450px] h-[450px] bg-brand-200/20 rounded-full filter blur-[140px] -z-10 animate-blob-bounce-2"></div>
          <div className="absolute top-1/3 left-1/3 w-80 h-80 bg-brand-100/10 rounded-full filter blur-[100px] -z-11"></div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">
              <motion.div 
                className="lg:col-span-7 space-y-8 text-center lg:text-left"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
              >
                <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/10 border border-brand-500/20 text-brand-800 text-xs font-bold uppercase tracking-wider mx-auto lg:mx-0 shadow-sm shadow-brand-500/5 animate-pulse-slow">
                  <Sparkles className="w-4 h-4 text-brand-600 mr-0.5 inline shrink-0" />
                  <span>Premium Doctor Branding & SEO Platform</span>
                </div>
                <h1 className="font-display font-extrabold text-4xl sm:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-[1.32]">
                  Bangladesh's Trusted Platform for{" "}
                  <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 via-brand-700 to-brand-500 block py-1">
                    Doctor Digital Identity
                  </span>
                </h1>
                <p className="text-slate-600 text-base sm:text-lg lg:text-xl leading-relaxed max-w-2xl mx-auto lg:mx-0 font-medium">
                  Establish an authoritative web presence that enables patients to locate verified clinic information, secure chamber details, and professional background.
                </p>
                <div className="flex flex-col sm:flex-row items-center gap-4 justify-center lg:justify-start pt-2">
                  <Link 
                    to="/pricing"
                    className="w-full sm:w-auto px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold text-sm tracking-wide shadow-xl shadow-slate-900/10 hover:shadow-brand-500/20 hover:-translate-y-0.5 active:scale-98 transition-all duration-200 cursor-pointer flex items-center justify-center gap-3 group"
                  >
                    Join MedProfile Now
                    <ArrowRight className="w-4 h-4 transition-transform group-hover:translate-x-1" />
                  </Link>
                  <Link 
                    to="/consultation"
                    className="w-full sm:w-auto px-8 py-4 bg-white/85 backdrop-blur-sm text-slate-800 border border-slate-200 hover:border-slate-400 rounded-xl font-bold text-sm hover:bg-slate-50 hover:-translate-y-0.5 active:scale-98 transition-all duration-200 cursor-pointer flex items-center justify-center gap-2 shadow-sm"
                  >
                    Configure Demo Web
                  </Link>
                </div>
                <div className="pt-8 border-t border-slate-200/70 grid grid-cols-2 gap-x-6 gap-y-4 text-sm text-slate-600 font-semibold select-none text-left max-w-md mx-auto lg:mx-0">
                  <div className="flex items-center gap-2.5 group">
                    <div className="w-6 h-6 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Verified Identity Badge</span>
                  </div>
                  <div className="flex items-center gap-2.5 group">
                    <div className="w-6 h-6 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>SEO Schema Ranking</span>
                  </div>
                  <div className="flex items-center gap-2.5 group">
                    <div className="w-6 h-6 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>Mobile & Tab Native</span>
                  </div>
                  <div className="flex items-center gap-2.5 group">
                    <div className="w-6 h-6 rounded-lg bg-brand-50 border border-brand-100 flex items-center justify-center text-brand-600 shrink-0 transition-all duration-300 group-hover:bg-brand-600 group-hover:text-white">
                      <CheckCircle className="w-3.5 h-3.5" />
                    </div>
                    <span>100% High Availability</span>
                  </div>
                </div>
              </motion.div>
              <motion.div 
                className="lg:col-span-5 relative mt-6 lg:mt-0 flex justify-center"
                initial={{ opacity: 0, scale: 0.95, y: 30 }}
                animate={{ opacity: 1, scale: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.15, ease: "easeOut" }}
              >
                <div className="w-full max-w-md p-2 rounded-3xl bg-gradient-to-br from-brand-500/30 via-slate-200/50 to-brand-600/20 border border-white/60 shadow-2xl relative glow-teal animate-float-gentle group">
                  <div className="bg-white rounded-2xl p-5 md:p-6 text-slate-900 flex flex-col gap-5 border border-slate-200 select-none overflow-hidden relative">
                    <div className="absolute top-0 -left-full w-1/2 h-full bg-gradient-to-r from-transparent via-white/10 to-transparent skew-x-12 group-hover:left-200% transition-all duration-[1250ms] ease-out pointer-events-none"></div>
                    <div className="flex items-center justify-between border-b border-white/5 pb-3">
                      <div className="flex items-center gap-1.5">
                        <span className="w-2.5 h-2.5 bg-red-500 rounded-full"></span>
                        <span className="w-2.5 h-2.5 bg-amber-400 rounded-full"></span>
                        <span className="w-2.5 h-2.5 bg-green-500 rounded-full"></span>
                      </div>
                      <div className="flex items-center gap-1.5 bg-white/5 px-3 py-1 rounded-full border border-white/5 text-[9px] font-mono text-slate-600 tracking-wide">
                        <span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
                        doctor.medprofile.bd/dr-rahman
                      </div>
                    </div>
                    <div className="pt-2">
                      <div className="flex items-center gap-4">
                        <div className="relative">
                          <div className="absolute -inset-0.5 bg-gradient-to-tr from-brand-500 to-brand-400 rounded-full opacity-60 blur-xs group-hover:opacity-100 transition duration-300"></div>
                          <div className="w-14 h-14 rounded-full bg-slate-100 border-2 border-slate-900 flex items-center justify-center text-brand-400 font-bold shrink-0 relative z-10">
                            <Stethoscope className="w-6 h-6" />
                          </div>
                        </div>
                        <div>
                          <div className="flex items-center gap-1.5">
                            <h3 className="font-display font-extrabold text-base tracking-tight text-slate-900">Prof. Dr. Rahman</h3>
                            <BadgeCheck className="w-4 h-4 text-brand-400 shrink-0" />
                          </div>
                          <p className="text-[10px] text-brand-300 font-bold uppercase tracking-wider">BMDC Reg No: A-45892</p>
                          <p className="text-[11px] text-slate-600">Senior Consultant, Cardiology</p>
                        </div>
                      </div>
                    </div>
                    <div className="flex flex-wrap gap-2 pt-1">
                      <span className="text-[9px] font-bold uppercase tracking-wide bg-brand-400/10 text-brand-300 border border-brand-400/20 px-2.5 py-0.5 rounded-md">
                        MBBS, FCPS
                      </span>
                      <span className="text-[9px] font-bold uppercase tracking-wide bg-slate-100 text-slate-700 border border-slate-300 px-2.5 py-0.5 rounded-md">
                        Ex-NICVD Advisor
                      </span>
                    </div>
                    <div className="p-4 bg-white/5 rounded-xl border border-white/80/10 space-y-3 font-sans">
                      <span className="text-[10px] text-brand-400 font-semibold tracking-wider uppercase block">Current Chamber & Hours</span>
                      <div className="space-y-1.5">
                        <p className="text-[11px] font-bold text-slate-700">Labaid Specialized Hospital, Dhanmondi</p>
                        <div className="flex items-center justify-between text-[10px] text-slate-600">
                          <span className="flex items-center gap-1"><Calendar className="w-3 h-3" /> Saturday — Wednesday</span>
                          <span className="bg-slate-100 px-2 py-0.5 rounded text-slate-900 font-mono font-medium">05:00 PM - 09:00 PM</span>
                        </div>
                      </div>
                    </div>
                    <div className="grid grid-cols-2 gap-3 pt-2">
                      <div className="p-3 bg-white/3 rounded-lg border border-white/5 text-center">
                        <span className="text-[18px] font-extrabold text-brand-400 block font-display tracking-tight">4.9 ★</span>
                        <span className="text-[9px] text-slate-600 uppercase tracking-widest font-semibold">Patient Rating</span>
                      </div>
                      <div className="p-3 bg-white/3 rounded-lg border border-white/5 text-center">
                        <span className="text-[18px] font-extrabold text-slate-900 block font-display tracking-tight">12k+</span>
                        <span className="text-[9px] text-slate-600 uppercase tracking-widest font-semibold">Monthly SEO Reach</span>
                      </div>
                    </div>
                  </div>
                  <div className="absolute -bottom-6 -left-6 bg-white border border-slate-300 p-4 rounded-2xl shadow-xl flex items-center gap-3.5 max-w-[210px] transition-transform duration-300 hover:-translate-y-1 z-20">
                    <div className="w-10 h-10 bg-brand-50 border border-brand-100 text-brand-600 rounded-xl flex items-center justify-center shrink-0">
                      <Activity className="w-5 h-5 animate-pulse" />
                    </div>
                    <div>
                      <span className="text-[9px] uppercase font-bold tracking-widest text-slate-600 block">Queue Traffic</span>
                      <span className="text-xs font-bold text-slate-800 leading-none block mt-0.5">Real-time Verified</span>
                    </div>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <MarqueeSection />

        <WhyChoose />

        {/* SERVICES PREVIEW */}
        <section className="py-20 md:py-28 bg-white border-t border-slate-200/50 relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
              <div className="max-w-2xl">
                <span className="text-xs uppercase font-bold text-brand-600 tracking-widest block mb-2 font-display">Premium Features</span>
                <h2 className="font-display font-extrabold text-3xl sm:text-4xl text-slate-900 tracking-tight">
                  Everything a Modern Healthcare Practice Needs
                </h2>
              </div>
              <Link to="/services" className="inline-flex items-center gap-2 px-6 py-3 bg-white hover:bg-slate-100 text-slate-900 rounded-full font-bold text-sm tracking-wide transition-all group shrink-0">
                Explore All Services
                <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
              </Link>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                { icon: <Smartphone className="w-6 h-6" />, title: "Mobile Optimized", desc: "Ultra-fast, responsive designs that look perfect on any device." },
                { icon: <Globe className="w-6 h-6" />, title: "SEO Ready", desc: "Advanced Schema markup to ensure you rank #1 for your specialty." },
                { icon: <ShieldCheck className="w-6 h-6" />, title: "Secure & Compliant", desc: "Enterprise-grade security adhering to medical data standards." },
              ].map((f, i) => (
                <div key={i} className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-brand-200 hover:bg-brand-50/50 transition-colors">
                  <div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-brand-600 shadow-sm border border-slate-100 mb-6">
                    {f.icon}
                  </div>
                  <h3 className="text-xl font-bold text-slate-900 mb-3">{f.title}</h3>
                  <p className="text-slate-600 text-sm leading-relaxed">{f.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* PRICING PREVIEW */}
        <section className="py-24 bg-slate-50 relative overflow-hidden">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50rem] bg-brand-900/20 rounded-full blur-[120px] pointer-events-none"></div>
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
            <h2 className="font-display font-extrabold text-3xl sm:text-5xl text-slate-900 tracking-tight mb-6">
              Transparent, Predictable Pricing
            </h2>
            <p className="text-slate-600 text-lg max-w-2xl mx-auto mb-10">
              Join top doctors in Bangladesh with a premium digital infrastructure that pays for itself.
            </p>
            <Link to="/pricing" className="inline-flex items-center gap-2 px-8 py-4 bg-brand-500 hover:bg-brand-400 text-slate-950 rounded-xl font-bold text-sm uppercase tracking-widest transition-all">
              View Pricing & Compare Packages
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </section>

        {/* PROJECTS & TEMPLATES PREVIEW */}
        <section className="py-24 bg-slate-50 border-y border-slate-200/50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl shadow-slate-200/50 border border-slate-100 flex flex-col items-start justify-center">
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 text-brand-600 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Live Showcase
                </div>
                <h3 className="font-display font-bold text-3xl text-slate-900 mb-4">Our Recent Projects</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Explore websites we've built for leading doctors and clinics across Bangladesh. Real results, real growth.
                </p>
                <Link to="/projects" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-600 hover:bg-brand-700 text-white rounded-full font-bold text-sm transition-colors">
                  View Portfolio <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="bg-white p-10 md:p-14 rounded-3xl shadow-xl border border-slate-200 flex flex-col items-start justify-center relative overflow-hidden">
                <div className="absolute -right-20 -bottom-20 w-64 h-64 bg-brand-500/20 blur-[80px] rounded-full"></div>
                <div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-500/10 text-brand-400 border border-brand-500/20 rounded-full text-xs font-bold uppercase tracking-wider mb-6">
                  Ready to Deploy
                </div>
                <h3 className="font-display font-bold text-3xl text-slate-900 mb-4">Premium Templates</h3>
                <p className="text-slate-600 mb-8 leading-relaxed">
                  Choose from our selection of highly optimized, conversion-focused healthcare website designs.
                </p>
                <Link to="/templates" className="inline-flex items-center gap-2 px-6 py-3 bg-brand-500 hover:bg-brand-400 text-slate-950 rounded-full font-bold text-sm transition-colors z-10">
                  Explore Templates <ArrowRight className="w-4 h-4" />
                </Link>
              </div>
            </div>
          </div>
        </section>

        {/* ABOUT PREVIEW */}
        <section className="py-24 bg-white relative overflow-hidden">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 mb-6">Built by Healthcare Experts</h2>
            <p className="text-slate-600 max-w-2xl mx-auto text-lg mb-10">
              We understand the unique challenges of the medical profession in Bangladesh. Learn about our mission and the team behind MedProfile.
            </p>
            <div className="flex flex-col sm:flex-row justify-center items-center gap-4">
              <Link to="/about" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-white hover:bg-slate-100 text-slate-900 rounded-xl font-bold text-sm tracking-wide transition-colors w-full sm:w-auto">
                Learn About Us <ArrowRight className="w-4 h-4" />
              </Link>
              <Link to="/faq" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold text-sm tracking-wide transition-colors w-full sm:w-auto">
                View FAQs
              </Link>
              <Link to="/contact" className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-bold text-sm tracking-wide transition-colors w-full sm:w-auto">
                Contact Us
              </Link>
            </div>
          </div>
        </section>

      </div>
    </>
  );
}
