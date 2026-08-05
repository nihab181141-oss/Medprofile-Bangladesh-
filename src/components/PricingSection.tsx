import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { Check, Info, Sparkles, AlertCircle, Building2, Stethoscope, Globe, Star, ChevronDown, Gift, Zap, ShieldCheck, TrendingUp, Users, Activity, BarChart3 } from "lucide-react";

export default function PricingSection() {
  const [openFaq, setOpenFaq] = useState<number | null>(0);
  const [currentPatients, setCurrentPatients] = useState<number>(500);

  // ROI calculations
  const projectedGrowthRate = 0.35; // 35% growth
  const additionalPatients = Math.round(currentPatients * projectedGrowthRate);
  const avgRevenuePerPatient = 1500; // estimated BDT
  const extraRevenue = additionalPatients * avgRevenuePerPatient;

  const packages = [
    {
      id: "doctor",
      name: "Doctor Portfolio",
      subtitle: "For Individual Doctors",
      setupPrice: "10,000",
      monthlyPrice: "5,000",
      icon: <Stethoscope className="w-6 h-6 text-slate-700" />,
      features: [
        "Professional Website",
        "Premium UI",
        "Mobile Responsive",
        "Google Search Optimization",
        "Google Maps",
        "WhatsApp Integration",
        "Appointment Information",
        "Up to 3 Chambers",
        "Contact Form",
        "Professional Biography",
        "Admin Dashboard",
        "Security Updates",
        "Monthly Maintenance",
        "Priority Support"
      ],
      buttonText: "Start Your Website"
    },
    {
      id: "dental",
      name: "Dental Clinic",
      subtitle: "For Dental Clinics",
      originalPrice: "40,000",
      setupPrice: "25,000",
      monthlyPrice: "8,000",
      icon: <Star className="w-6 h-6 text-brand-400" />,
      mostPopular: true,
      features: [
        "Everything from Doctor plus:",
        "Unlimited Dentists",
        "Treatment Pages",
        "Service Pages",
        "Gallery",
        "Before & After Section",
        "Team Profiles",
        "Multiple Branches",
        "Advanced SEO",
        "Premium Animations",
        "Custom Branding",
        "Lead Forms",
        "Performance Optimization"
      ],
      buttonText: "Grow My Clinic"
    },
    {
      id: "hospital",
      name: "Hospital & Diagnostic",
      subtitle: "For Hospitals & Centers",
      originalPrice: "90,000",
      setupPrice: "60,000",
      monthlyPrice: "15,000",
      icon: <Building2 className="w-6 h-6 text-slate-700" />,
      features: [
        "Everything from Dental plus:",
        "Unlimited Departments",
        "Unlimited Doctors",
        "Department Pages",
        "Advanced CMS",
        "Career Page",
        "News & Events",
        "Multiple Branch Management",
        "Dedicated Project Manager",
        "Priority Support",
        "Custom Development",
        "Enterprise Security"
      ],
      buttonText: "Request Consultation"
    },
    {
      id: "enterprise",
      name: "Enterprise Solution",
      subtitle: "For Large Networks",
      customPricing: true,
      setupPrice: "Custom Pricing",
      icon: <Globe className="w-6 h-6 text-slate-700" />,
      features: [
        "Hospital Groups",
        "Medical Universities",
        "Corporate Healthcare",
        "Government Projects",
        "Large Healthcare Networks",
        "Fully Custom Architecture",
        "Advanced Integrations (HIS/EMR)",
        "Dedicated Server Infrastructure",
        "White-Glove Support",
        "SLA Guarantee"
      ],
      buttonText: "Contact Sales"
    }
  ];

  const addons = [
    { name: "Extra Page", price: "৳800" },
    { name: "Additional Branch", price: "৳2,000" },
    { name: "Online Appointment System", price: "৳8,000" },
    { name: "Online Payment Integration", price: "৳5,000" },
    { name: "Bengali + English Website", price: "৳3,000" },
    { name: "Logo Design", price: "৳2,500" },
    { name: "Google Business Profile Optimization", price: "Custom Quote" },
  ];

  const freebies = [
    "Google Search Console Setup",
    "Basic SEO Setup",
    "Google Maps Integration",
    "WhatsApp Integration",
    "Performance Optimization",
    "Security Configuration"
  ];

  const faqs = [
    {
      q: "Are there any hidden charges?",
      a: "No hidden fees. You only pay the one-time setup fee and the predictable monthly care plan. Any custom add-ons will be quoted upfront."
    },
    {
      q: "What is included in the Monthly Care Plan?",
      a: "The monthly care plan covers premium hosting, SSL certificates, continuous security updates, minor content adjustments, and priority technical support to ensure your website remains fast and secure."
    },
    {
      q: "Do I own my domain and website?",
      a: "Yes. You have full ownership of your domain name. The website is built specifically for your practice and managed by us for maximum performance."
    },
    {
      q: "Can I upgrade my package later?",
      a: "Absolutely. As your practice grows, we can seamlessly upgrade your website to include more features, branches, or doctors."
    }
  ];

  return (
    <section id="pricing-section" className="py-28 md:py-40 bg-slate-50 relative overflow-hidden">
      {/* Dark navy premium background elements */}
      <div className="absolute top-[-10%] right-[-5%] w-[40rem] h-[40rem] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute bottom-[20%] left-[-10%] w-[30rem] h-[30rem] bg-brand-500/10 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[50rem] bg-slate-100 rounded-full blur-[100px] pointer-events-none -z-10"></div>

      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Heading */}
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-20"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs uppercase font-extrabold tracking-widest mb-6 font-display border border-brand-500/20 backdrop-blur-sm">
            <Sparkles className="w-3.5 h-3.5" /> Transparent Pricing
          </span>
          <h2 className="font-display font-extrabold text-4xl md:text-5xl lg:text-6xl text-slate-900 tracking-tight leading-tight">
            Premium Healthcare <br className="hidden md:block" /> Digital Infrastructure
          </h2>
          <p className="mt-6 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Join top doctors and hospitals in Bangladesh. Choose a plan that fits your practice, with predictable pricing and unparalleled quality.
          </p>
        </motion.div>

        {/* Pricing Layout Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 items-stretch max-w-full mx-auto mb-24">
          {packages.map((pkg, idx) => (
            <motion.div 
              key={pkg.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: idx * 0.1 }}
              className={`relative flex flex-col rounded-[2rem] overflow-hidden backdrop-blur-md transition-all duration-500 group ${
                pkg.mostPopular 
                  ? 'bg-white/80 border-2 border-brand-500/50 shadow-[0_20px_40px_-15px_rgba(20,184,166,0.3)] hover:shadow-[0_30px_60px_-15px_rgba(20,184,166,0.4)] z-10 xl:-translate-y-4 hover:-translate-y-6' 
                  : 'bg-white/80 border border-slate-200 shadow-xl shadow-slate-950 hover:bg-white/60 hover:border-slate-300 hover:-translate-y-2 hover:shadow-2xl'
              }`}
            >
              {/* Optional glow effect on hover for all cards */}
              <div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>

              {pkg.mostPopular && (
                <div className="bg-gradient-to-r from-brand-500 to-brand-400 text-slate-950 text-[10px] font-black uppercase tracking-widest text-center py-2 shadow-sm">
                  Most Popular
                </div>
              )}
              
              <div className="p-8 pb-0 relative z-10">
                <div className="flex items-center gap-4 mb-6">
                  <div className={`w-12 h-12 rounded-2xl flex items-center justify-center shadow-inner ${pkg.mostPopular ? 'bg-brand-500/10 border border-brand-500/30' : 'bg-slate-100 border border-slate-300'}`}>
                    {pkg.icon}
                  </div>
                  <div>
                    <h3 className="font-display font-extrabold text-slate-900 text-xl">{pkg.name}</h3>
                    <p className={`text-[11px] font-bold uppercase tracking-wider mt-1 ${pkg.mostPopular ? 'text-brand-400' : 'text-slate-600'}`}>{pkg.subtitle}</p>
                  </div>
                </div>

                <div className="mt-8 mb-4">
                  {pkg.customPricing ? (
                    <div className="flex items-baseline gap-1.5 h-[80px] items-center">
                      <span className="text-3xl font-display font-black text-slate-900 tracking-tight">{pkg.setupPrice}</span>
                    </div>
                  ) : (
                    <div className="flex flex-col justify-center h-[80px]">
                      {pkg.originalPrice && (
                        <div className="flex items-center gap-2 mb-2">
                          <span className="text-sm text-slate-500 font-bold line-through">৳{pkg.originalPrice}</span>
                          <span className="text-[10px] font-black uppercase tracking-wider text-brand-950 bg-brand-400 px-2 py-0.5 rounded-full">Save ৳{(parseInt(pkg.originalPrice.replace(',', '')) - parseInt(pkg.setupPrice.replace(',', ''))).toLocaleString()}</span>
                        </div>
                      )}
                      <div className="flex items-baseline gap-1.5">
                        <span className="text-xl text-slate-600 font-bold">৳</span>
                        <span className="text-5xl font-display font-black text-slate-900 tracking-tight">{pkg.setupPrice}</span>
                        <span className="text-xs text-slate-500 font-bold uppercase tracking-wider ml-1">Setup</span>
                      </div>
                    </div>
                  )}
                </div>

                {!pkg.customPricing && (
                  <div className="flex items-center gap-2 py-4 border-y border-slate-200 mb-6">
                    <span className="text-xs text-slate-600 font-bold">Monthly Care Plan:</span>
                    <span className="text-sm font-black text-slate-900">৳{pkg.monthlyPrice}</span>
                  </div>
                )}
                {pkg.customPricing && (
                  <div className="flex items-center gap-2 py-4 border-y border-slate-200 mb-6">
                    <span className="text-xs text-slate-600 font-bold">Monthly Care Plan:</span>
                    <span className="text-sm font-black text-slate-900">Custom</span>
                  </div>
                )}
              </div>

              <div className="px-8 pb-8 flex-1 flex flex-col relative z-10">
                <div className="space-y-4 flex-1 mb-10 mt-2">
                  {pkg.features.map((feature, fIdx) => {
                    const isBold = feature.includes('Everything from');
                    return (
                      <div key={fIdx} className="flex gap-3 items-start">
                        <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 mt-0.5 ${pkg.mostPopular ? 'bg-brand-500/20 text-brand-400' : 'bg-slate-100 text-slate-600'}`}>
                          <Check className="w-3 h-3 stroke-[3px]" />
                        </div>
                        <span className={`text-xs leading-relaxed font-medium ${isBold ? 'text-slate-900 font-bold' : 'text-slate-700'}`}>
                          {feature}
                        </span>
                      </div>
                    );
                  })}
                </div>

                <a 
                  href="https://wa.me/8801902646475"
                  target="_blank"
                  rel="noopener noreferrer"
                  className={`w-full py-4 px-6 rounded-xl font-display font-bold text-xs uppercase tracking-widest text-center transition-all duration-300 block relative overflow-hidden ${
                    pkg.mostPopular 
                      ? 'bg-brand-500 hover:bg-brand-400 text-white shadow-[0_0_20px_rgba(20,184,166,0.4)] active:scale-95' 
                      : 'bg-slate-100 hover:bg-slate-200 text-slate-900 shadow-md active:scale-95'
                  }`}
                >
                  <span className="relative z-10">{pkg.buttonText}</span>
                  {pkg.mostPopular && <div className="absolute inset-0 bg-white/20 opacity-0 hover:opacity-100 transition-opacity"></div>}
                </a>
              </div>
            </motion.div>
          ))}
        </div>

        {/* Projected ROI Calculator */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="max-w-5xl mx-auto mb-24 bg-white/80 backdrop-blur-md border border-slate-200 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden"
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
          
          <div className="flex flex-col md:flex-row gap-12 items-center">
            <div className="w-full md:w-1/2">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/10 text-brand-400 text-xs uppercase font-extrabold tracking-widest mb-6 border border-brand-500/20">
                <BarChart3 className="w-3.5 h-3.5" /> Interactive ROI Calculator
              </div>
              <h3 className="font-display font-extrabold text-3xl text-slate-900 tracking-tight mb-4">
                Calculate Your Digital Growth
              </h3>
              <p className="text-slate-600 text-sm mb-8 font-medium leading-relaxed">
                See how a premium digital presence with MedProfile can increase your patient acquisition and overall revenue through advanced SEO and online appointments.
              </p>
              
              <div className="space-y-6">
                <div>
                  <div className="flex justify-between items-end mb-4">
                    <label className="text-sm font-bold text-slate-700">Current Monthly Patients</label>
                    <span className="text-2xl font-display font-black text-slate-900">{currentPatients.toLocaleString()}</span>
                  </div>
                  <input 
                    type="range" 
                    min="100" 
                    max="5000" 
                    step="50"
                    value={currentPatients} 
                    onChange={(e) => setCurrentPatients(parseInt(e.target.value))}
                    className="w-full h-2 bg-slate-100 rounded-lg appearance-none cursor-pointer accent-brand-500"
                  />
                  <div className="flex justify-between text-[10px] font-bold text-slate-500 mt-2 uppercase tracking-wider">
                    <span>100</span>
                    <span>5,000+</span>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="w-full md:w-1/2">
              <div className="bg-slate-50/50 rounded-2xl p-6 border border-slate-200 shadow-inner space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
                    <TrendingUp className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest block mb-1">Projected Patient Growth</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-3xl font-display font-black text-slate-900">+{additionalPatients.toLocaleString()}</span>
                      <span className="text-sm font-medium text-brand-400">new/mo</span>
                    </div>
                  </div>
                </div>
                
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-xl bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0">
                    <Activity className="w-6 h-6 text-brand-400" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-600 uppercase tracking-widest block mb-1">Potential Extra Revenue</span>
                    <div className="flex items-baseline gap-2">
                      <span className="text-xl text-slate-600 font-bold">৳</span>
                      <span className="text-3xl font-display font-black text-slate-900">{extraRevenue.toLocaleString()}</span>
                      <span className="text-sm font-medium text-brand-400">/mo</span>
                    </div>
                  </div>
                </div>

                <div className="pt-4 border-t border-slate-200">
                  <div className="flex items-center gap-2 text-xs font-medium text-slate-600 bg-slate-100 p-3 rounded-lg">
                    <Info className="w-4 h-4 text-slate-500 shrink-0" />
                    <p>Based on a conservative 35% growth rate and avg. consultation fee of ৳1,500.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Add-ons and Free Value Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 max-w-6xl mx-auto mb-32">
          
          {/* Add-ons (Left, 7 columns) */}
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-7 bg-white/80 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-xl border border-slate-200 flex flex-col justify-between"
          >
            <div>
              <div className="flex items-center gap-4 mb-8">
                <div className="w-12 h-12 rounded-2xl bg-slate-100 border border-slate-300 flex items-center justify-center text-brand-400 shadow-inner">
                  <Zap className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="font-display font-extrabold text-slate-900 text-2xl">Powerful Add-ons</h3>
                  <p className="text-sm text-slate-600 font-medium mt-1">Enhance your digital practice with custom modules.</p>
                </div>
              </div>

              <div className="space-y-1.5">
                <div className="flex items-center justify-between py-2 px-4 rounded-lg mb-2">
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Additional Feature</span>
                  <span className="text-[10px] font-extrabold uppercase tracking-widest text-slate-500">Starting From</span>
                </div>
                
                {addons.map((addon, idx) => (
                  <div key={idx} className="flex items-center justify-between py-3.5 px-4 hover:bg-slate-100/50 rounded-xl transition-colors border-b border-slate-200/50 last:border-0 group">
                    <span className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 transition-colors">{addon.name}</span>
                    <span className="text-sm font-black text-slate-900 font-mono bg-slate-100/80 px-3 py-1 rounded-md border border-slate-200/50">{addon.price}</span>
                  </div>
                ))}
              </div>
            </div>
          </motion.div>

          {/* Free Value (Right, 5 columns) */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="lg:col-span-5 bg-gradient-to-br from-brand-50 to-slate-100 backdrop-blur-md rounded-3xl p-8 md:p-10 shadow-2xl border border-brand-800/50 text-slate-900 relative overflow-hidden flex flex-col justify-between"
          >
            <div className="absolute top-0 right-0 p-8 opacity-5 pointer-events-none transform translate-x-4 -translate-y-4">
              <Gift className="w-48 h-48" />
            </div>
            
            <div className="relative z-10 flex-1">
              <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-brand-500/20 text-brand-300 text-[10px] uppercase font-black tracking-widest mb-6 border border-brand-500/30">
                <Gift className="w-3.5 h-3.5" /> Included Free
              </div>
              
              <h3 className="font-display font-extrabold text-3xl tracking-tight mb-3">Premium Extras</h3>
              <p className="text-brand-700/70 text-sm mb-8 font-medium leading-relaxed">Every MedProfile website comes with enterprise-grade features at no additional cost.</p>
              
              <div className="space-y-4 mb-10">
                {freebies.map((item, idx) => (
                  <div key={idx} className="flex gap-3 items-center">
                    <div className="w-6 h-6 rounded-full bg-brand-500/20 border border-brand-500/30 flex items-center justify-center shrink-0 shadow-inner">
                      <ShieldCheck className="w-3.5 h-3.5 text-brand-400" />
                    </div>
                    <span className="text-sm font-semibold text-slate-800">{item}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative z-10 mt-auto">
              <div className="bg-slate-50/50 rounded-2xl p-5 border border-slate-200 text-center backdrop-blur-md shadow-inner">
                <span className="block text-[11px] uppercase tracking-widest text-brand-400 font-bold mb-1.5">Total Value</span>
                <span className="font-display font-black text-xl md:text-2xl tracking-tight text-slate-900">Worth ৳5,000 Included Free</span>
              </div>
            </div>
          </motion.div>

        </div>

        {/* Pricing FAQ Section */}
        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h3 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight">Frequently Asked Questions</h3>
            <p className="text-slate-600 text-sm mt-4 font-medium">Everything you need to know about our pricing and services.</p>
          </motion.div>

          <div className="space-y-4">
            {faqs.map((faq, idx) => (
              <motion.div 
                key={idx}
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl overflow-hidden shadow-sm hover:border-slate-300 transition-colors"
              >
                <button
                  onClick={() => setOpenFaq(openFaq === idx ? null : idx)}
                  className="w-full px-6 py-6 flex items-center justify-between transition-colors text-left group"
                >
                  <span className="font-bold text-slate-700 group-hover:text-slate-900 transition-colors">{faq.q}</span>
                  <div className={`w-8 h-8 rounded-full flex items-center justify-center transition-colors ${openFaq === idx ? 'bg-brand-500/10 text-brand-400' : 'bg-slate-100 text-slate-600 group-hover:bg-slate-200'}`}>
                    <ChevronDown className={`w-4 h-4 transition-transform duration-300 ${openFaq === idx ? 'rotate-180' : ''}`} />
                  </div>
                </button>
                <AnimatePresence>
                  {openFaq === idx && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: "auto", opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <div className="px-6 pb-6 pt-0 text-slate-600 text-sm leading-relaxed font-medium">
                        <div className="pt-4 border-t border-slate-200">
                          {faq.a}
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
