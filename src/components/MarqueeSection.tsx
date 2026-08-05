import React from 'react';
import { motion } from 'motion/react';
import { 
  Stethoscope, ShieldCheck, HeartPulse, Search, Smartphone, 
  Zap, Lock, Settings, BarChart, Server, Clock, CheckCircle2, 
  Activity, Globe, MessageSquare, Monitor, Rocket
} from 'lucide-react';

const technologies = [
  { name: 'HTML5', slug: 'html5', color: 'E34F26' },
  { name: 'CSS3', slug: 'css3', color: '1572B6' },
  { name: 'JavaScript', slug: 'javascript', color: 'F7DF1E' },
  { name: 'TypeScript', slug: 'typescript', color: '3178C6' },
  { name: 'React', slug: 'react', color: '61DAFB' },
  { name: 'Next.js', slug: 'nextdotjs', color: '000000' },
  { name: 'Firebase', slug: 'firebase', color: 'FFCA28' },
  { name: 'Supabase', slug: 'supabase', color: '3ECF8E' },
  { name: 'Tailwind CSS', slug: 'tailwindcss', color: '06B6D4' },
  { name: 'Node.js', slug: 'nodedotjs', color: '339933' },
  { name: 'GitHub', slug: 'github', color: '181717' },
  { name: 'Vercel', slug: 'vercel', color: '000000' },
  { name: 'Cloudflare', slug: 'cloudflare', color: 'F38020' },
  { name: 'Google Maps', slug: 'googlemaps', color: '4285F4' },
  { name: 'Google Analytics', slug: 'googleanalytics', color: 'E37400' },
  { name: 'Google Search Console', slug: 'googlesearchconsole', color: '4285F4' },
  { name: 'OpenAI', slug: 'openai', color: '412991' },
  { name: 'Google AI', slug: 'google', color: '4285F4' }
];

const solutions = [
  { name: 'Doctor Portfolio Websites', icon: <Monitor className="w-5 h-5" /> },
  { name: 'Dental Clinic Websites', icon: <Stethoscope className="w-5 h-5" /> },
  { name: 'Hospital Websites', icon: <Activity className="w-5 h-5" /> },
  { name: 'Diagnostic Center Websites', icon: <Search className="w-5 h-5" /> },
  { name: 'Medical Practice Websites', icon: <HeartPulse className="w-5 h-5" /> },
  { name: 'Healthcare Branding', icon: <Globe className="w-5 h-5" /> },
  { name: 'SEO Optimization', icon: <BarChart className="w-5 h-5" /> },
  { name: 'Google Business Profile', icon: <CheckCircle2 className="w-5 h-5" /> },
  { name: 'Website Maintenance', icon: <Settings className="w-5 h-5" /> },
  { name: 'Performance Optimization', icon: <Zap className="w-5 h-5" /> },
  { name: 'Security Monitoring', icon: <ShieldCheck className="w-5 h-5" /> },
  { name: 'Premium UI/UX', icon: <Rocket className="w-5 h-5" /> },
  { name: 'Responsive Design', icon: <Smartphone className="w-5 h-5" /> },
  { name: 'Custom Development', icon: <Server className="w-5 h-5" /> }
];

const whyChooseUs = [
  { name: 'SEO Optimized', icon: <Search className="w-5 h-5" /> },
  { name: 'Mobile Responsive', icon: <Smartphone className="w-5 h-5" /> },
  { name: 'Fast Loading', icon: <Zap className="w-5 h-5" /> },
  { name: 'Premium Design', icon: <Monitor className="w-5 h-5" /> },
  { name: 'Secure Hosting', icon: <Server className="w-5 h-5" /> },
  { name: 'SSL Protected', icon: <Lock className="w-5 h-5" /> },
  { name: 'Google Friendly', icon: <Globe className="w-5 h-5" /> },
  { name: 'WhatsApp Integration', icon: <MessageSquare className="w-5 h-5" /> },
  { name: 'Admin Dashboard', icon: <Settings className="w-5 h-5" /> },
  { name: 'Modern Healthcare UI', icon: <Activity className="w-5 h-5" /> },
  { name: 'Scalable Architecture', icon: <BarChart className="w-5 h-5" /> },
  { name: 'Monthly Care Plan', icon: <Clock className="w-5 h-5" /> },
  { name: 'Priority Support', icon: <CheckCircle2 className="w-5 h-5" /> },
  { name: 'Premium Performance', icon: <Rocket className="w-5 h-5" /> },
  { name: 'Automate with Floraxen Labs', icon: <Zap className="w-5 h-5" /> }
];

export default function MarqueeSection() {
  return (
    <section className="py-24 relative overflow-hidden bg-white border-y border-slate-200/50">
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-4xl h-32 bg-brand-500/5 blur-[120px] rounded-full pointer-events-none"></div>
      
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-16 text-center">
        <span className="text-xs font-bold uppercase tracking-widest text-brand-600 mb-2 block font-display">
          Enterprise Infrastructure
        </span>
        <h2 className="text-3xl md:text-4xl font-display font-extrabold text-slate-900 tracking-tight">
          Powered By Modern Technologies
        </h2>
        <p className="text-slate-500 mt-4 max-w-2xl mx-auto text-sm md:text-base leading-relaxed">
          We leverage the world's most trusted platforms and healthcare frameworks to build fast, secure, and scalable digital identities.
        </p>
      </div>

      <div className="flex flex-col gap-10 relative">
        {/* Left/Right Fade Gradients for smooth cutoff */}
        <div className="absolute top-0 bottom-0 left-0 w-24 md:w-48 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none"></div>
        <div className="absolute top-0 bottom-0 right-0 w-24 md:w-48 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none"></div>

        {/* Marquee 1: Technologies */}
        <div className="relative w-full overflow-hidden flex items-center group py-6 md:py-10">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-16 md:gap-24 px-8">
            {[...technologies, ...technologies, ...technologies, ...technologies].map((tech, i) => (
              <div 
                key={`${tech.name}-${i}`} 
                className="flex items-center gap-4 transition-all duration-500 hover:scale-105 cursor-default group/tech hover:[filter:var(--hover-glow)]"
                style={{
                  '--hover-glow': `drop-shadow(0 0 24px #${tech.color}60)`
                } as React.CSSProperties}
              >
                <img 
                  src={`https://cdn.simpleicons.org/${tech.slug}/${tech.color}`} 
                  alt={tech.name} 
                  className="w-8 h-8 sm:w-10 sm:h-10 object-contain transition-all duration-500 group-hover/tech:brightness-110"
                  loading="lazy"
                />
                <span className="text-lg sm:text-xl font-display font-bold text-slate-800 tracking-tight transition-all duration-500 group-hover/tech:text-slate-950">
                  {tech.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee 2: Solutions */}
        <div className="relative w-full overflow-hidden flex items-center group py-6 md:py-10">
          <div className="flex w-max animate-marquee-reverse group-hover:[animation-play-state:paused] gap-16 md:gap-24 px-8">
            {[...solutions, ...solutions, ...solutions, ...solutions].map((solution, i) => (
              <div 
                key={`${solution.name}-${i}`} 
                className="flex items-center gap-4 transition-all duration-500 hover:scale-105 cursor-default group/tech hover:drop-shadow-[0_0_24px_rgba(20,184,166,0.3)]"
              >
                <div className="text-slate-400 group-hover/tech:text-brand-500 transition-colors duration-500 group-hover/tech:scale-110">
                  {React.cloneElement(solution.icon as React.ReactElement, { className: "w-8 h-8 sm:w-10 sm:h-10" })}
                </div>
                <span className="text-lg sm:text-xl font-display font-bold text-slate-800 tracking-tight transition-all duration-500 group-hover/tech:text-slate-950 whitespace-nowrap">
                  {solution.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Marquee 3: Why Choose Us */}
        <div className="relative w-full overflow-hidden flex items-center group py-6 md:py-10">
          <div className="flex w-max animate-marquee group-hover:[animation-play-state:paused] gap-16 md:gap-24 px-8">
            {[...whyChooseUs, ...whyChooseUs, ...whyChooseUs, ...whyChooseUs].map((feature, i) => (
              <div 
                key={`${feature.name}-${i}`} 
                className="flex items-center gap-4 transition-all duration-500 hover:scale-105 cursor-default group/tech hover:drop-shadow-[0_0_24px_rgba(20,184,166,0.3)]"
              >
                <div className="text-slate-400 group-hover/tech:text-brand-500 transition-colors duration-500 group-hover/tech:scale-110">
                  {React.cloneElement(feature.icon as React.ReactElement, { className: "w-8 h-8 sm:w-10 sm:h-10" })}
                </div>
                <span className="text-lg sm:text-xl font-display font-bold text-slate-800 tracking-tight transition-all duration-500 group-hover/tech:text-slate-950 whitespace-nowrap">
                  {feature.name}
                </span>
              </div>
            ))}
          </div>
        </div>

      </div>
    </section>
  );
}
