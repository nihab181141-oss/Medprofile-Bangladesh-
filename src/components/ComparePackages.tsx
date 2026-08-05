import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "motion/react";
import { Check, MessageSquare, PhoneCall, Stethoscope, Star, Building2, Globe } from "lucide-react";

export default function ComparePackages() {
  const features = [
    { name: "Professional Website", doctor: true, dental: true, hospital: true, enterprise: true },
    { name: "Premium Responsive Design", doctor: true, dental: true, hospital: true, enterprise: true },
    { name: "SEO Optimization", doctor: true, dental: "Advanced", hospital: "Advanced", enterprise: "Enterprise" },
    { name: "Google Search Console Setup", doctor: true, dental: true, hospital: true, enterprise: true },
    { name: "Google Maps Integration", doctor: true, dental: true, hospital: true, enterprise: true },
    { name: "WhatsApp Integration", doctor: true, dental: true, hospital: true, enterprise: true },
    { name: "Appointment Information", doctor: true, dental: true, hospital: true, enterprise: true },
    { name: "Contact Forms", doctor: "Basic", dental: "Lead Forms", hospital: "Advanced", enterprise: "Custom" },
    { name: "Doctor Biography", doctor: true, dental: true, hospital: true, enterprise: true },
    { name: "Multiple Chambers", doctor: "Up to 3", dental: "Multi-Branch", hospital: "Multi-Branch", enterprise: "Unlimited" },
    { name: "Unlimited Doctors", doctor: false, dental: true, hospital: true, enterprise: true },
    { name: "Treatment Pages", doctor: false, dental: true, hospital: true, enterprise: true },
    { name: "Department Pages", doctor: false, dental: false, hospital: true, enterprise: true },
    { name: "Gallery", doctor: false, dental: true, hospital: true, enterprise: true },
    { name: "Before & After Gallery", doctor: false, dental: true, hospital: true, enterprise: true },
    { name: "Blog", doctor: false, dental: false, hospital: true, enterprise: true },
    { name: "Advanced CMS", doctor: false, dental: false, hospital: true, enterprise: true },
    { name: "Multi-Branch Support", doctor: false, dental: true, hospital: true, enterprise: true },
    { name: "News & Events", doctor: false, dental: false, hospital: true, enterprise: true },
    { name: "Career Page", doctor: false, dental: false, hospital: true, enterprise: true },
    { name: "Custom Branding", doctor: false, dental: true, hospital: true, enterprise: true },
    { name: "Performance Optimization", doctor: true, dental: true, hospital: true, enterprise: true },
    { name: "Security Monitoring", doctor: true, dental: true, hospital: true, enterprise: true },
    { name: "Monthly Care Plan", doctor: true, dental: true, hospital: true, enterprise: "Custom" },
    { name: "Priority Support", doctor: true, dental: true, hospital: true, enterprise: "White-Glove" },
    { name: "Dedicated Project Manager", doctor: false, dental: false, hospital: true, enterprise: true },
    { name: "Enterprise Security", doctor: false, dental: false, hospital: true, enterprise: true },
    { name: "Custom Development", doctor: false, dental: false, hospital: true, enterprise: "Unlimited" },
  ];

  const packages = [
    {
      id: "doctor",
      name: "Doctor Portfolio",
      icon: <Stethoscope className="w-5 h-5 text-slate-700" />,
      bestFor: [
        "Individual Doctors",
        "Specialist Doctors",
        "Consultant Physicians",
        "Surgeons",
        "Medical Practitioners",
        "Doctors who want a professional online presence"
      ]
    },
    {
      id: "dental",
      name: "Dental Clinic",
      mostPopular: true,
      icon: <Star className="w-5 h-5 text-brand-400" />,
      bestFor: [
        "Dental Clinics",
        "Orthodontic Clinics",
        "Cosmetic Dentistry",
        "Multi-Dentist Practices",
        "Growing Healthcare Clinics",
        "Clinics looking to increase patient trust"
      ]
    },
    {
      id: "hospital",
      name: "Hospital & Diagnostic",
      icon: <Building2 className="w-5 h-5 text-slate-700" />,
      bestFor: [
        "Hospitals",
        "Diagnostic Centers",
        "Multi-Specialty Hospitals",
        "Medical Centers",
        "Healthcare Organizations",
        "Large Clinics with Multiple Departments"
      ]
    },
    {
      id: "enterprise",
      name: "Enterprise Solution",
      icon: <Globe className="w-5 h-5 text-slate-700" />,
      bestFor: [
        "Hospital Chains",
        "Corporate Healthcare Groups",
        "Medical Universities",
        "Government Healthcare Projects",
        "National Healthcare Networks",
        "Large Organizations"
      ]
    }
  ];

  const renderFeatureValue = (val: boolean | string) => {
    if (val === true) {
      return <Check className="w-5 h-5 text-brand-400 mx-auto" />;
    } else if (val === false) {
      return <span className="text-slate-600 font-bold">—</span>;
    }
    return <span className="text-sm font-semibold text-slate-700">{val}</span>;
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const table = document.getElementById("compare-table-container");
      if (table) {
        const rect = table.getBoundingClientRect();
        setIsSticky(rect.top <= 100 && rect.bottom >= 300);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <section id="compare-packages" className="py-24 bg-slate-50 relative overflow-hidden border-t border-slate-900">
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60rem] h-[60rem] bg-brand-500/5 rounded-full blur-[120px] pointer-events-none -z-10"></div>
      
      <div className="max-w-[1400px] mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div 
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display font-extrabold text-3xl md:text-5xl text-slate-900 tracking-tight leading-tight">
            Compare Our Healthcare<br />Website Packages
          </h2>
          <p className="mt-4 text-slate-600 text-sm md:text-base leading-relaxed max-w-2xl mx-auto font-medium">
            Find the perfect solution for your healthcare business by comparing our packages side by side.
          </p>
        </motion.div>

        {/* Desktop Table */}
        <div id="compare-table-container" className="hidden lg:block relative bg-slate-100 backdrop-blur-sm border border-slate-200 rounded-3xl overflow-hidden shadow-2xl mb-24">
          <table className="w-full text-left border-collapse">
            <thead className={`bg-white/90 backdrop-blur-md z-20 ${isSticky ? 'sticky top-16 shadow-xl border-b border-slate-200' : 'border-b border-slate-200'}`}>
              <tr>
                <th className="w-1/4 p-6"></th>
                {packages.map(pkg => (
                  <th key={pkg.id} className={`w-[18.75%] p-6 text-center border-l border-slate-200/50 relative ${pkg.mostPopular ? 'bg-slate-100/50' : ''}`}>
                    {pkg.mostPopular && (
                      <div className="absolute top-0 left-0 right-0 bg-gradient-to-r from-brand-500 to-brand-400 text-slate-950 text-[9px] font-black uppercase tracking-widest py-1">
                        Most Popular
                      </div>
                    )}
                    <div className={`mt-2 flex flex-col items-center justify-center ${pkg.mostPopular ? 'mt-4' : ''}`}>
                      <div className="mb-3">{pkg.icon}</div>
                      <h3 className="font-display font-extrabold text-slate-900 text-lg">{pkg.name}</h3>
                    </div>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {features.map((feature, idx) => (
                <tr key={idx} className="border-b border-slate-200/50 hover:bg-slate-100/30 transition-colors">
                  <td className="p-5 text-sm font-semibold text-slate-700 pl-8">{feature.name}</td>
                  <td className="p-5 text-center border-l border-slate-200/50">{renderFeatureValue(feature.doctor)}</td>
                  <td className="p-5 text-center border-l border-slate-200/50 bg-slate-100/10">{renderFeatureValue(feature.dental)}</td>
                  <td className="p-5 text-center border-l border-slate-200/50">{renderFeatureValue(feature.hospital)}</td>
                  <td className="p-5 text-center border-l border-slate-200/50">{renderFeatureValue(feature.enterprise)}</td>
                </tr>
              ))}
              {/* Best For Row */}
              <tr className="bg-white/60 border-t-2 border-slate-300">
                <td className="p-8 align-top">
                  <div className="flex items-center gap-2">
                    <Star className="w-5 h-5 text-brand-400" />
                    <span className="font-display font-extrabold text-slate-900 text-lg tracking-wide">Best For</span>
                  </div>
                </td>
                {packages.map(pkg => (
                  <td key={`best-${pkg.id}`} className={`p-6 align-top border-l border-slate-200/50 ${pkg.mostPopular ? 'bg-slate-100/30' : ''}`}>
                    <div className="space-y-3">
                      {pkg.bestFor.map((item, i) => (
                        <div key={i} className="flex gap-2 items-start">
                          <Check className="w-4 h-4 text-brand-500 shrink-0 mt-0.5" />
                          <span className="text-xs font-medium text-slate-700 leading-relaxed">{item}</span>
                        </div>
                      ))}
                    </div>
                  </td>
                ))}
              </tr>
            </tbody>
          </table>
        </div>

        {/* Mobile View */}
        <div className="lg:hidden space-y-12 mb-24">
          {packages.map(pkg => (
            <div key={pkg.id} className={`bg-slate-100 border rounded-3xl overflow-hidden ${pkg.mostPopular ? 'border-brand-500/50 shadow-[0_10px_30px_rgba(20,184,166,0.15)]' : 'border-slate-200 shadow-xl'}`}>
              {pkg.mostPopular && (
                <div className="bg-gradient-to-r from-brand-500 to-brand-400 text-slate-950 text-[10px] font-black uppercase tracking-widest text-center py-2">
                  Most Popular
                </div>
              )}
              <div className="p-6 border-b border-slate-200 text-center">
                <div className="flex justify-center mb-3">{pkg.icon}</div>
                <h3 className="font-display font-extrabold text-slate-900 text-xl">{pkg.name}</h3>
              </div>
              <div className="p-6 space-y-4">
                {features.map((feature, idx) => {
                  const val = feature[pkg.id as keyof typeof feature];
                  if (val === false) return null;
                  return (
                    <div key={idx} className="flex items-center justify-between border-b border-slate-200/50 pb-3 last:border-0 last:pb-0">
                      <span className="text-xs font-semibold text-slate-700">{feature.name}</span>
                      <div className="text-right pl-4">
                        {val === true ? <Check className="w-4 h-4 text-brand-400 ml-auto" /> : <span className="text-xs font-bold text-slate-900">{val}</span>}
                      </div>
                    </div>
                  );
                })}
              </div>
              <div className="p-6 bg-white border-t border-slate-200">
                <div className="flex items-center gap-2 mb-4">
                  <Star className="w-4 h-4 text-brand-400" />
                  <span className="font-display font-bold text-slate-900 text-sm">Best For</span>
                </div>
                <div className="space-y-2.5">
                  {pkg.bestFor.map((item, i) => (
                    <div key={i} className="flex gap-2 items-start">
                      <Check className="w-3.5 h-3.5 text-brand-500 shrink-0 mt-0.5" />
                      <span className="text-xs font-medium text-slate-600">{item}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <motion.div 
          className="max-w-4xl mx-auto bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200/50 rounded-3xl p-10 md:p-14 text-center shadow-2xl relative overflow-hidden"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          <div className="absolute top-0 right-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/10 rounded-full blur-[80px] pointer-events-none -z-10"></div>
          
          <h3 className="font-display font-extrabold text-3xl md:text-4xl text-slate-900 tracking-tight mb-4">
            Still Not Sure Which Package Is Right For You?
          </h3>
          <p className="text-slate-600 text-sm md:text-base mb-10 max-w-2xl mx-auto font-medium leading-relaxed">
            Our team will help you choose the perfect website solution based on your healthcare organization and future growth plans.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link 
              to="/contact"
              onClick={() => window.scrollTo(0, 0)}
              className="w-full sm:w-auto px-8 py-4 bg-brand-500 hover:bg-brand-400 text-white rounded-xl font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-lg shadow-brand-500/20 active:scale-95 flex items-center justify-center gap-2"
            >
              <PhoneCall className="w-4 h-4" /> Talk With Our Team
            </Link>
            <a 
              href="https://wa.me/8801902646475"
              target="_blank"
              rel="noopener noreferrer"
              className="w-full sm:w-auto px-8 py-4 bg-slate-100 hover:bg-slate-200 text-slate-900 rounded-xl font-display font-bold text-xs uppercase tracking-widest transition-all duration-300 shadow-md border border-slate-300 active:scale-95 flex items-center justify-center gap-2"
            >
              <MessageSquare className="w-4 h-4" /> WhatsApp Us
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
