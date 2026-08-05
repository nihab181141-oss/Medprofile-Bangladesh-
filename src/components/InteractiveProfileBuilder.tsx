import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { 
  User, 
  Stethoscope, 
  MapPin, 
  Clock, 
  Phone, 
  MessageSquare, 
  Search, 
  Share2, 
  CheckCircle, 
  Sparkles, 
  Globe, 
  RefreshCw, 
  Eye, 
  Award, 
  Calendar,
  AlertCircle,
  Copy,
  ChevronRight,
  ShieldCheck,
  FileText
} from "lucide-react";
import { AIProfile, DoctorInput } from "../types";

export default function InteractiveProfileBuilder() {
  // Pre-filled world-class fallback profile
  const defaultAIProfile: AIProfile = {
    tagline: "Pioneering Advanced Cardiovascular Wellness in Dhaka",
    professionalBio: "Dr. Sabina Yasmin is an award-winning Cardiovascular Specialist with over 15 years of clinical excellence. Trained in advanced non-invasive interventions, she has treated thousands of patients at leading national facilities. Her care paradigm combines precise diagnostic analysis with preventive cardiology to ensure long-term heart health for all her patients.",
    seoTitle: "Dr. Sabina Yasmin | Cardiologist Dhanmondi | Heart Specialist Dhaka",
    seoMetaDescription: "Book consultation with Dr. Sabina Yasmin, FCPS, leading heart specialist in Dhanmondi. Dedicated diagnostic and preventive cardiac care clinic in Dhaka.",
    chamberGuide: "Kindly bring your recent ECG reports, blood test results, and current prescription list. Arrive 15 minutes prior to the scheduled slot for primary pressure diagnostics.",
    patientAdvices: [
      {
        title: "Salt and Blood Pressure Control",
        description: "Restricting dietary sodium intake to under 1,500mg daily is critical for managing hypertension and reducing persistent arterial workload."
      },
      {
        title: "30-Minute Aerobic Baseline",
        description: "Engaging in daily brisk walking or swimming establishes high-density lipids (HDL) that protect coronary vessels from plaque buildup."
      },
      {
        title: "Recognizing Silent Indicators",
        description: "Unexplained fatigue or minor jaw-line stiffness during brief physical exertion can be early indicators of circulatory stress. Consult early."
      }
    ],
    brandStrategy: [
      "Launch specialized monthly newsletter highlighting practical blood-pressure tracking for local families.",
      "Deploy localized SEO tags for Dhanmondi, Lalmatia, and neighboring medical quarters.",
      "Incorporate custom HD video introductory greetings for high-anxiety diagnostic cases."
    ]
  };

  const [inputs, setInputs] = useState<DoctorInput>({
    name: "Dr. Sabina Yasmin",
    specialty: "Cardiology & Medicine Specialist",
    degrees: "MBBS, FCPS (Cardiology), FACC (USA)",
    chamberName: "Metro Heart Clinic & Diagnostic",
    chamberAddress: "House 42, Road 8/A, Dhanmondi (Near Labaid), Dhaka - 1209",
    contactPhone: "+880 1712-987654",
    workingHours: "Saturday - Wednesday, 5:00 PM - 9:00 PM",
    language: "Bilingual (English & Bengali)"
  });

  const [aiProfile, setAiProfile] = useState<AIProfile>(defaultAIProfile);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [activeTab, setActiveTab] = useState<"website" | "seo" | "marketing">("website");
  const [selectedTemplate, setSelectedTemplate] = useState<"teal" | "blue" | "slate">("blue");
  const [copiedText, setCopiedText] = useState<string | null>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setInputs(prev => ({ ...prev, [name]: value }));
  };

  const loadPreset = (presetType: "cardiologist" | "pediatrician" | "gastroenterologist") => {
    if (presetType === "cardiologist") {
      setInputs({
        name: "Dr. Sabina Yasmin",
        specialty: "Cardiology & Medicine Specialist",
        degrees: "MBBS, FCPS (Cardiology), FACC (USA)",
        chamberName: "Metro Heart Clinic & Diagnostic",
        chamberAddress: "House 42, Road 8/A, Dhanmondi, Dhaka",
        contactPhone: "+880 1712-987654",
        workingHours: "Saturday - Wednesday, 5:00 PM - 9:00 PM",
        language: "Bilingual (English & Bengali)"
      });
      setAiProfile(defaultAIProfile);
    } else if (presetType === "pediatrician") {
      setInputs({
        name: "Dr. Asif Rahman",
        specialty: "Pediatrics & Neonatal Care",
        degrees: "MBBS, MD (Pediatrics), Fellow Neonatologist (Singapore)",
        chamberName: "CureCare Pediatrics",
        chamberAddress: "Anwer Khan Modern Medical College, Dhanmondi, Dhaka",
        contactPhone: "+880 1819-112233",
        workingHours: "Sunday - Thursday, 4:00 PM - 8:00 PM",
        language: "Bilingual"
      });
      setAiProfile({
        tagline: "Nurturing Healthy Generations with Empathetic Toddler Care",
        professionalBio: "Dr. Asif Rahman is a compassionate pediatric consultant specialized in neonatology and childhood developmental support. With 12 years of specialized training at top hospitals in Singapore and Bangladesh, Dr. Asif excels in proactive pediatric solutions, infant immunity, and personalized growth monitoring that puts nervous parents at ease.",
        seoTitle: "Dr. Asif Rahman | Best Pediatrician Dhanmondi | Neonate Specialist Dhaka",
        seoMetaDescription: "Expert infant care and neonatal health consultations by Dr. Asif Rahman, clinical pediatrics gold-medalist. Schedule your visit today.",
        chamberGuide: "Kindly keep your child's immunization files handy. We offer a dedicated, child-safe, sterilized play arena to ensure stress-free diagnostic waits.",
        patientAdvices: [
          {
            title: "Proactive Immunity Timing",
            description: "Strictly adhere to national vaccination intervals. Immunization remains the definitive wall against infant respiratory stress."
          },
          {
            title: "Screen-Time Interventions",
            description: "Zero screens before age 2. Promote tactical sensory books to optimize neurological visual tracking and motor development."
          },
          {
            title: "Hydration Guidelines",
            description: "Ensure young kids drink ambient temperature oral-rehydration fluids during seasonal humidity shifts to protect renal function."
          }
        ],
        brandStrategy: [
          "Establish high-engagement pediatric milestone charts sent cleanly to parents via automated messaging.",
          "Coordinate live local educational sessions on newborn infant care with prominent safe play centers.",
          "Distribute friendly, highly illustrated PDF guidance checklists for common seasonal ailments."
        ]
      });
    } else {
      setInputs({
        name: "Prof. Dr. Tariqul Islam",
        specialty: "Gastroenterology & Hepatology",
        degrees: "MBBS, FCPS (Gastro), MD (Hepatopathology)",
        chamberName: "Dhaka Gastro-Liver Center",
        chamberAddress: "Comfort Diagnostic Center, Green Road, Dhaka - 1205",
        contactPhone: "+880 1971-554433",
        workingHours: "Saturday to Thursday, 6:00 PM - 9:30 PM",
        language: "English"
      });
      setAiProfile({
        tagline: "Restoring Digestive Wellness through Precision Diagnostics",
        professionalBio: "Professor Dr. Tariqul Islam is a senior specialist in digestive, biliary, and chronic liver disorders, with landmark academic publication records. Widely recognized as one of the country's most analytical hepatologists, he prioritizes precise endoscopy interpretations to construct definitive curative pathways that eliminate lifelong dependencies on temporary stomach suppression meds.",
        seoTitle: "Prof. Dr. Tariqul Islam | Gastroenterologist Dhaka | Liver Specialty",
        seoMetaDescription: "Consolidated gastrointestinal and hepatobiliary care by Professor Dr. Tariqul Islam. Advanced diagnostic endoscopy & liver wellness clinic.",
        chamberGuide: "For gastric or intestinal endoscopy procedures, please observe a minimum 8-hour absolute dry fast. Bring previous ultrasonography files with you.",
        patientAdvices: [
          {
            title: "Probiotics and Fiber Harmony",
            description: "Consuming locally fermented yogurt coupled with dietary soluble fibers feeds favorable gut bacteria, stabilizing abdominal stress."
          },
          {
            title: "The Acidity Rebound Effect",
            description: "Overusing generic antacids can inhibit vital trace mineral synthesis. Work to identify core dietary triggers instead of self-prescribing."
          },
          {
            title: "Liver Fatty Plaque Rejection",
            description: "Eliminating refined fructose formulations and saturated cooking oils protects long-term liver cellular architecture from sluggish plaque."
          }
        ],
        brandStrategy: [
          "Curate professional gastric wellness guides distributed at major pharmaceutical/clinic checkout counters.",
          "Construct elegant search results alignment for modern endoscopy and colonoscopy inquiries.",
          "Host concise clinical video segments solving common myths surrounding acidity."
        ]
      });
    }
    setErrorMsg(null);
  };

  const triggerAIOptimization = async () => {
    setLoading(true);
    setErrorMsg(null);
    try {
      const res = await fetch("/api/generate-profile", {
        method: "POST",
        headers: {
          "Content-Type": "application/json"
        },
        body: JSON.stringify(inputs)
      });
      
      const responseText = await res.text();
      let data: any;
      try {
        data = JSON.parse(responseText);
      } catch (jsonErr) {
        data = { error: responseText || "Unknown server response format" };
      }

      if (res.ok) {
        setAiProfile(data);
      } else {
        throw new Error(data.error || "Failed to communicate with AI model.");
      }
    } catch (err: any) {
      console.warn("AI Generation fallback executed:", err);
      setErrorMsg(
        err.message || 
        "Note: Could not run cloud API execution. To unlock full real-time Gemini HIGH-Thinking optimizations, configure GEMINI_API_KEY in secrets."
      );
    } finally {
      setLoading(false);
    }
  };

  const copyToClipboard = (text: string, label: string) => {
    navigator.clipboard.writeText(text);
    setCopiedText(label);
    setTimeout(() => setCopiedText(null), 2000);
  };

  // Color theme mapper for the live preview
  const getThemeClasses = () => {
    switch (selectedTemplate) {
      case "teal":
        return {
          bg: "bg-brand-50",
          headerBg: "bg-brand-900",
          accentColor: "text-brand-600",
          primaryBtn: "bg-brand-600 hover:bg-brand-700",
          border: "border-brand-200",
          glow: "shadow-brand-100",
          badge: "bg-brand-100 text-brand-800",
          text: "text-brand-950",
          lightAccent: "bg-brand-500/10",
        };
      case "slate":
        return {
          bg: "bg-slate-50",
          headerBg: "bg-slate-900",
          accentColor: "text-slate-700",
          primaryBtn: "bg-slate-800 hover:bg-slate-900",
          border: "border-slate-200",
          glow: "shadow-slate-100",
          badge: "bg-slate-200 text-slate-800",
          text: "text-slate-950",
          lightAccent: "bg-slate-500/10",
        };
      case "blue":
      default:
        return {
          bg: "bg-brand-50/50",
          headerBg: "bg-brand-950",
          accentColor: "text-brand-600",
          primaryBtn: "bg-brand-600 hover:bg-brand-700",
          border: "border-brand-100",
          glow: "shadow-brand-100",
          badge: "bg-brand-100 text-brand-800",
          text: "text-brand-950",
          lightAccent: "bg-brand-500/10",
        };
    }
  };

  const themeTheme = getThemeClasses();

  return (
    <div id="interactive-preview-sandbox" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
      
      {/* LEFT COLUMN: CONTROLS & WIZARD FORM */}
      <div className="lg:col-span-5 bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden sticky top-6">
        
        {/* Presets Header */}
        <div className="p-5 border-b border-slate-100 bg-slate-50/70">
          <div className="flex items-center gap-2 mb-3">
            <span className="w-1.5 h-6 bg-brand-600 rounded"></span>
            <h3 className="font-display font-bold text-slate-800 text-xs tracking-wider uppercase">Select Sample Field Preset</h3>
          </div>
          <div className="flex flex-wrap gap-2">
            <button 
              onClick={() => loadPreset("cardiologist")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${inputs.specialty.includes("Cardiology") ? "bg-brand-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"}`}
              id="preset-cardio"
            >
              Cardiology Specialist
            </button>
            <button 
              onClick={() => loadPreset("pediatrician")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${inputs.specialty.includes("Pediatrics") ? "bg-brand-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"}`}
              id="preset-pediatric"
            >
              Pediatrics Expert
            </button>
            <button 
              onClick={() => loadPreset("gastroenterologist")}
              className={`px-3 py-1.5 rounded-lg text-xs font-semibold cursor-pointer transition-all ${inputs.specialty.includes("Gastro") ? "bg-brand-600 text-white shadow-sm" : "bg-white text-slate-600 border border-slate-200 hover:bg-slate-50"}`}
              id="preset-gastro"
            >
              Hepatology Speciality
            </button>
          </div>
        </div>

        {/* Dynamic Inputs */}
        <div className="p-6 space-y-4">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-display font-bold text-slate-800 text-sm uppercase tracking-wide flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-brand-600" />
              Customize Profile Fields
            </h4>
            <span className="text-[10px] font-mono text-slate-400">Section 5 Preview Engine</span>
          </div>

          <div className="grid grid-cols-1 gap-3.5">
            <div>
              <label htmlFor="input-doc-name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Doctor Full Name</label>
              <div className="relative">
                <User className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input 
                  type="text" 
                  name="name" 
                  value={inputs.name} 
                  onChange={handleInputChange}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-800"
                  placeholder="e.g. Dr. Sabrina Yasmin"
                  id="input-doc-name"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="input-specialty" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Specialization</label>
                <div className="relative">
                  <Stethoscope className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input 
                    id="input-specialty"
                    type="text" 
                    name="specialty" 
                    value={inputs.specialty} 
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-800"
                    placeholder="e.g. Cardiology & Medicine"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-degrees" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Degrees & Credentials</label>
                <div className="relative">
                  <Award className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input 
                    id="input-degrees"
                    type="text" 
                    name="degrees" 
                    value={inputs.degrees} 
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-800"
                    placeholder="e.g. MBBS, FCPS"
                  />
                </div>
              </div>
            </div>

            <div>
              <label htmlFor="input-chamber-name" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Chamber / General Clinic Name</label>
              <input 
                id="input-chamber-name"
                type="text" 
                name="chamberName" 
                value={inputs.chamberName} 
                onChange={handleInputChange}
                className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-800"
                placeholder="e.g. Metro Diagnostics"
              />
            </div>

            <div>
              <label htmlFor="input-chamber-address" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Chamber Physical Address</label>
              <div className="relative">
                <MapPin className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                <input 
                  id="input-chamber-address"
                  type="text" 
                  name="chamberAddress" 
                  value={inputs.chamberAddress} 
                  onChange={handleInputChange}
                  className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-800"
                  placeholder="e.g. House 14, Road 5, Dhanmondi, Dhaka"
                />
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5">
              <div>
                <label htmlFor="input-working-hours" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Consultation Time Slopes</label>
                <div className="relative">
                  <Clock className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input 
                    id="input-working-hours"
                    type="text" 
                    name="workingHours" 
                    value={inputs.workingHours} 
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-800"
                    placeholder="e.g. Sat-Wed, 5 PM - 9 PM"
                  />
                </div>
              </div>

              <div>
                <label htmlFor="input-contact-phone" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Appointment Hot-Line</label>
                <div className="relative">
                  <Phone className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" />
                  <input 
                    id="input-contact-phone"
                    type="text" 
                    name="contactPhone" 
                    value={inputs.contactPhone} 
                    onChange={handleInputChange}
                    className="w-full pl-9 pr-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-500 focus:ring-1 focus:ring-brand-500 text-slate-800"
                  />
                </div>
              </div>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 items-center">
              <div>
                <label htmlFor="select-language" className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Language Dialect</label>
                <select 
                  id="select-language"
                  name="language" 
                  value={inputs.language} 
                  onChange={handleInputChange}
                  className="w-full px-3 py-2 text-sm border border-slate-200 rounded-lg focus:outline-none focus:border-brand-500 bg-white text-slate-700"
                >
                  <option value="Bilingual (English & Bengali)">Bilingual (EN & BN)</option>
                  <option value="English Preferred">English Only</option>
                  <option value="Bengali Preferred">Bengali Preferred</option>
                </select>
              </div>
              
              <div>
                <label className="block text-[11px] font-bold text-slate-500 uppercase tracking-wider mb-1">Mock Design Preset</label>
                <div className="flex gap-2">
                  <button 
                    onClick={() => setSelectedTemplate("blue")}
                    className={`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${selectedTemplate === "blue" ? "border-brand-600 bg-brand-50 text-brand-800" : "border-slate-200 text-slate-600 bg-white hover:bg-slate-50"}`}
                  >
                    Medical Blue
                  </button>
                  <button 
                    onClick={() => setSelectedTemplate("teal")}
                    className={`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${selectedTemplate === "teal" ? "border-brand-600 bg-brand-50 text-brand-800" : "border-slate-200 text-slate-600 bg-white hover:bg-slate-50"}`}
                  >
                    Modern Teal
                  </button>
                  <button 
                    onClick={() => setSelectedTemplate("slate")}
                    className={`flex-1 py-1.5 px-2 rounded-lg border text-xs font-semibold cursor-pointer transition-all ${selectedTemplate === "slate" ? "border-slate-900 bg-slate-50 text-slate-800" : "border-slate-200 text-slate-600 bg-white hover:bg-slate-50"}`}
                  >
                    Luxury Slate
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="pt-4 border-t border-slate-100 flex flex-col gap-3">
            <button 
              onClick={triggerAIOptimization}
              disabled={loading}
              className="w-full py-3.5 px-4 rounded-xl font-display font-bold text-xs tracking-wider uppercase text-white bg-brand-600 hover:bg-brand-700 active:scale-95 shadow-lg shadow-brand-100 transition-all cursor-pointer flex items-center justify-center gap-2"
              id="ai-generate-profile-btn"
            >
              {loading ? (
                <>
                  <RefreshCw className="w-4 h-4 animate-spin text-white" />
                  <span>Optimizing Digital Presence via High-Thinking Model...</span>
                </>
              ) : (
                <>
                  <Sparkles className="w-4 h-4" />
                  <span>Auto-Optimize Profile Bio & SEO (AI Grounding)</span>
                </>
              )}
            </button>
            <p className="text-[10px] text-slate-405 text-center leading-relaxed">
              *Runs the state-of-the-art **Gemini 3.1 Pro-Preview** reasoning agent with strict clinical parameters to synthesize patient-oriented copy.
            </p>
          </div>

          {/* Conditional message handles API configuration errors gracefully */}
          {errorMsg && (
            <div className="p-3 bg-brand-50/70 border border-brand-200 rounded-lg text-xs text-brand-800 flex items-start gap-2.5 animate-fade-in">
              <AlertCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
              <div className="leading-relaxed">
                {errorMsg}
              </div>
            </div>
          )}
        </div>
      </div>

      {/* RIGHT COLUMN: REVENUE & SITE PREVIEW SIMULATOR */}
      <div className="lg:col-span-7 flex flex-col">
        {/* Toggle between Mockup Website view, SEO Google and Strategy */}
        <div className="flex border-b border-slate-200 bg-slate-50/70 p-1.5 rounded-t-2xl border border-slate-200 border-b-0">
          <button 
            onClick={() => setActiveTab("website")}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5 ${activeTab === "website" ? "bg-white text-brand-800 shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
          >
            <Eye className="w-3.5 h-3.5" />
            Live Mockup Website
          </button>
          <button 
            onClick={() => setActiveTab("seo")}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5 ${activeTab === "seo" ? "bg-white text-brand-800 shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
          >
            <Search className="w-3.5 h-3.5" />
            Google SEO Snippet
          </button>
          <button 
            onClick={() => setActiveTab("marketing")}
            className={`flex-1 py-2 px-3 rounded-lg text-xs font-semibold tracking-wide transition-all cursor-pointer flex items-center justify-center gap-1.5 ${activeTab === "marketing" ? "bg-white text-brand-800 shadow-sm" : "text-slate-500 hover:text-slate-800"}`}
          >
            <Globe className="w-3.5 h-3.5" />
            Growth Strategy
          </button>
        </div>

        {/* CONTAINER FOR PREVIEWS */}
        <div className="bg-slate-50/70 rounded-b-2xl border border-slate-200 p-3 md:p-6 min-h-[580px] shadow-inner flex flex-col justify-start">
          <AnimatePresence mode="wait">
            
            {/* TAB 1: WEBSITE PREVIEW MOCKUP */}
            {activeTab === "website" && (
              <motion.div 
                key="website-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full flex flex-col"
              >
                
                {/* Browser Controls Strip */}
                <div className="w-full bg-white rounded-t-xl px-4 py-2.5 border border-b-0 border-slate-250 flex items-center justify-between gap-4">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-red-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-amber-400"></span>
                    <span className="w-2.5 h-2.5 rounded-full bg-green-400"></span>
                  </div>
                  <div className="bg-slate-50 text-[10px] text-slate-500 py-1 px-4 rounded-md font-mono border border-slate-200 flex-1 max-w-sm text-center truncate">
                    https://medprofile.app/{inputs.name.toLowerCase().replace(/[^a-z]/g, "")}
                  </div>
                  <div className="text-[10px] bg-brand-100 text-brand-800 px-2.5 py-0.5 rounded-full font-bold flex items-center gap-1 select-none">
                    <ShieldCheck className="w-3 h-3" /> Live
                  </div>
                </div>

                {/* Simulated Web Framework Body */}
                <div className={`w-full bg-white rounded-b-xl border border-slate-250 overflow-hidden text-sm relative ${themeTheme.bg} transition-colors duration-500`}>
                  
                  {/* Doctor Portal Accent Ribbon */}
                  <div className="h-1 bg-gradient-to-r from-brand-500 via-brand-500 to-brand-600"></div>

                  {/* Header/Hero within the mock website */}
                  <div className="p-6 md:p-8 bg-white border-b border-slate-100">
                    <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-5">
                      <div>
                        {/* Trust Badge */}
                        <div className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-md bg-brand-50 text-brand-800 text-[10px] font-bold tracking-wide uppercase border border-brand-100 mb-2">
                          <CheckCircle className="w-3 h-3 text-brand-600" /> MedProfile Verified Provider
                        </div>
                        <h1 className="text-xl md:text-2xl font-display font-bold text-slate-900 tracking-tight">{inputs.name}</h1>
                        <p className={`text-xs md:text-sm font-semibold tracking-wide ${themeTheme.accentColor} mt-0.5`}>{inputs.specialty}</p>
                        <p className="text-xs text-slate-500 font-medium mt-1 uppercase tracking-wider">{inputs.degrees}</p>
                      </div>
                      
                      {/* Booking Actions */}
                      <div className="flex flex-col gap-1.5 w-full md:w-auto">
                        <a 
                          href="https://wa.me/8801902646475" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className={`px-4 py-2 hover:opacity-90 font-display font-semibold text-xs tracking-wider uppercase text-white rounded-lg flex items-center justify-center gap-1.5 ${themeTheme.primaryBtn} transition-all`}
                        >
                          <Calendar className="w-3.5 h-3.5" /> Book Appointment
                        </a>
                        <a 
                          href="https://wa.me/8801902646475" 
                          target="_blank"
                          rel="noopener noreferrer"
                          className="px-4 py-2 bg-brand-600 hover:bg-brand-700 font-display font-semibold text-xs tracking-wider uppercase text-white rounded-lg flex items-center justify-center gap-1.5 transition-all"
                        >
                          <MessageSquare className="w-3.5 h-3.5" /> WhatsApp Chamber
                        </a>
                      </div>
                    </div>

                    {/* AI Generated core branding Tagline */}
                    <div className={`p-3.5 ${themeTheme.lightAccent} border-l-4 ${selectedTemplate === "teal" ? "border-brand-500" : selectedTemplate === "slate" ? "border-slate-800" : "border-brand-500"} rounded-r-lg`}>
                      <span className="text-xs font-bold text-xs uppercase tracking-wider opacity-60 block">Consultation Vision</span>
                      <p className={`font-display font-medium text-sm italic tracking-tight ${themeTheme.text}`}>
                        "{aiProfile.tagline}"
                      </p>
                    </div>
                  </div>

                  {/* Body Content of Website Mockup */}
                  <div className="p-6 md:p-8 space-y-6">
                    
                    {/* Professional Biography */}
                    <div>
                      <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider mb-2 flex items-center gap-1.5">
                        <Award className={`w-3.5 h-3.5 ${themeTheme.accentColor}`} />
                        Professional Biography
                      </h4>
                      <p className="text-slate-700 leading-relaxed text-xs text-justify">
                        {aiProfile.professionalBio}
                      </p>
                    </div>

                    {/* Flex Row: Chamber Scheduling vs Health Tips */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5 pt-3">
                      
                      {/* Chamber Details Card */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm flex flex-col justify-between">
                        <div>
                          <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-2">
                            <MapPin className={`w-3.5 h-3.5 ${themeTheme.accentColor}`} />
                            <h5 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wide">Chamber Information</h5>
                          </div>
                          <p className="font-bold text-slate-800 text-xs mb-1">{inputs.chamberName}</p>
                          <p className="text-slate-600 text-xs leading-relaxed mb-3">{inputs.chamberAddress}</p>
                          
                          <div className="flex items-center gap-1.5 text-xs text-slate-700 bg-slate-50 p-2 rounded border border-slate-100">
                            <Clock className="w-3.5 h-3.5 text-slate-400 shrink-0" />
                            <div>
                              <span className="font-semibold block text-[10px] text-slate-500">CONSULTING HOURS</span>
                              <span className="text-[11px]">{inputs.workingHours}</span>
                            </div>
                          </div>
                        </div>

                        <div className="pt-3 border-t border-slate-100 mt-2 flex items-center justify-between text-2xs text-slate-400">
                          <span>Map Location Connected ✓</span>
                          <span className="font-semibold text-brand-600">Open Map</span>
                        </div>
                      </div>

                      {/* Diagnostic Guidance Checklist */}
                      <div className="bg-white p-4 rounded-xl border border-slate-200 shadow-sm">
                        <div className="flex items-center gap-1.5 border-b border-slate-100 pb-2 mb-2">
                          <FileText className={`w-3.5 h-3.5 ${themeTheme.accentColor}`} />
                          <h5 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wide font-semibold">Chamber Guidelines</h5>
                        </div>
                        <p className="text-slate-600 text-xs leading-relaxed mb-1.5">
                          {aiProfile.chamberGuide}
                        </p>
                        <div className="mt-2.5 p-2 bg-brand-50/50 border border-brand-100 rounded text-brand-800 text-2xs font-medium">
                          Appointments required at least 24 hours prior. Please bring past medical logs.
                        </div>
                      </div>
                    </div>

                    {/* Pediatric/Cardiologist Preventive Care Tips */}
                    <div className="pt-2">
                      <h4 className="font-display font-bold text-slate-900 text-xs uppercase tracking-wider mb-2.5 flex items-center gap-1.5">
                        <CheckCircle className={`w-3.5 h-3.5 ${themeTheme.accentColor}`} />
                        Patient Preventive Care & Wellness
                      </h4>
                      
                      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
                        {aiProfile.patientAdvices.map((tip, idx) => (
                          <div key={idx} className="bg-slate-50/70 p-3 rounded-lg border border-slate-200/60">
                            <span className="text-[10px] font-bold text-brand-600 uppercase">Tip {idx+1}</span>
                            <span className="font-display font-semibold text-slate-900 block text-xs mt-0.5">{tip.title}</span>
                            <p className="text-slate-600 text-[11px] leading-relaxed mt-1">
                              {tip.description}
                            </p>
                          </div>
                        ))}
                      </div>
                    </div>

                    {/* Footer within Mockup */}
                    <div className="pt-6 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center text-2xs text-slate-400 gap-3">
                      <span>Copyright © 2026 {inputs.name}. All rights reserved.</span>
                      <div className="flex gap-3">
                        <span>Managed via MedProfile Bangladesh</span>
                        <span className="text-brand-600 font-semibold cursor-pointer">Official Profile Directory</span>
                      </div>
                    </div>

                  </div>
                </div>
              </motion.div>
            )}

            {/* TAB 2: GOOGLE SEARCH ENGINE OPTIMIZATION RUN */}
            {activeTab === "seo" && (
              <motion.div 
                key="seo-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full space-y-4"
              >
                <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Search className="w-4 h-4 text-brand-600" />
                    <h4 className="font-display font-bold text-slate-900 text-sm">Primacy Search Layout (Google Bangladesh)</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Doctors with premium optimized schemas rank up to **400% higher** on target search terms (e.g., *"best hepatologist near Dhanmondi"*) because our architecture publishes strict static metadata directly to search engine bots.
                  </p>

                  {/* Google Custom result mock wrapper */}
                  <div className="bg-slate-50 p-4 rounded-xl border border-slate-200 max-w-xl">
                    <div className="flex items-center gap-1.5 text-2xs text-slate-500 mb-1 leading-none">
                      <Globe className="w-3 h-3 text-brand-600" />
                      <span>https://medprofile.app</span>
                      <ChevronRight className="w-2.5 h-2.5" />
                      <span>{inputs.name.toLowerCase().replace(/[^a-z]/g, "")}</span>
                    </div>
                    {/* SEO Title */}
                    <h5 className="text-brand-800 hover:underline text-sm font-semibold cursor-pointer font-serif mb-1 leading-snug">
                      {aiProfile.seoTitle}
                    </h5>
                    {/* SEO Rich Meta Description */}
                    <p className="text-[11px] text-slate-600 leading-normal font-sans">
                      {aiProfile.seoMetaDescription}
                    </p>
                    
                    {/* Structured features block */}
                    <div className="mt-2.5 flex items-center gap-2 text-[10px] text-slate-400 font-semibold uppercase tracking-wider">
                      <span>✓ CHAMBER: {inputs.chamberName}</span>
                      <span>•</span>
                      <span>HOURS: {inputs.workingHours}</span>
                    </div>
                  </div>

                  {/* Details and Action */}
                  <div className="mt-5 grid grid-cols-1 md:grid-cols-2 gap-3.5">
                    <div className="p-3.5 rounded-lg bg-brand-50/50 border border-brand-100 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-brand-700">Generated SEO Title Tag</span>
                        <p className="text-xs text-slate-800 mt-1 font-mono break-all">{aiProfile.seoTitle}</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(aiProfile.seoTitle, "title")}
                        className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-700 hover:text-brand-800 cursor-pointer text-left self-start"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        {copiedText === "title" ? "Copied!" : "Copy Title Tag"}
                      </button>
                    </div>

                    <div className="p-3.5 rounded-lg bg-brand-50/40 border border-brand-100 flex flex-col justify-between">
                      <div>
                        <span className="text-[10px] uppercase font-bold tracking-wider text-brand-700">Meta Description Tag</span>
                        <p className="text-xs text-slate-800 mt-1 leading-relaxed">{aiProfile.seoMetaDescription}</p>
                      </div>
                      <button 
                        onClick={() => copyToClipboard(aiProfile.seoMetaDescription, "desc")}
                        className="mt-3 inline-flex items-center gap-1.5 text-[11px] font-semibold text-brand-700 hover:text-brand-800 cursor-pointer text-left self-start"
                      >
                        <Copy className="w-3.5 h-3.5" />
                        {copiedText === "desc" ? "Copied!" : "Copy Meta Tag"}
                      </button>
                    </div>
                  </div>
                </div>

                {/* Additional SEO Tips */}
                <div className="p-4 bg-brand-900 text-brand-100 rounded-xl leading-relaxed text-xs">
                  <span className="font-bold block text-[10px] uppercase tracking-wider text-brand-300 mb-1">AUTOMATED SCHEMA INTEGRATION</span>
                  Our system configures structured **Schema.org JSON-LD markup** automatically (defining *"Physician"* entity types). This allows Google to show star ratings and map locations right in the search layout.
                </div>
              </motion.div>
            )}

            {/* TAB 3: MARKETING / BRAND STRATEGY */}
            {activeTab === "marketing" && (
              <motion.div 
                key="marketing-view"
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0 }}
                className="w-full space-y-4"
              >
                <div className="p-5 bg-white border border-slate-200 rounded-xl shadow-sm">
                  <div className="flex items-center gap-2 mb-3">
                    <Globe className="w-4 h-4 text-brand-600" />
                    <h4 className="font-display font-bold text-slate-900 text-sm">Professional Digital Brand Roadmap</h4>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed mb-4">
                    Synthesized by our high thinking agent to support the clinical practice expansion for **{inputs.name}**:
                  </p>

                  <div className="space-y-3.5">
                    {aiProfile.brandStrategy.map((step, idx) => (
                      <div key={idx} className="flex gap-3 bg-slate-50 p-4 rounded-xl border border-slate-200">
                        <div className="w-6 h-6 bg-brand-100 text-brand-800 rounded-full flex items-center justify-center font-bold text-xs shrink-0 select-none">
                          {idx + 1}
                        </div>
                        <div>
                          <p className="text-xs text-slate-700 leading-relaxed">
                            {step}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>

                  <div className="mt-5 p-3 rounded-lg bg-brand-50 border border-brand-200 text-brand-800 text-xs flex gap-2">
                    <CheckCircle className="w-4 h-4 text-brand-600 shrink-0 mt-0.5" />
                    <p className="leading-relaxed font-medium">
                      Following these personalized strategies generates an average **30% increase in chamber authority** within 60 days.
                    </p>
                  </div>
                </div>
              </motion.div>
            )}

          </AnimatePresence>
        </div>
      </div>

    </div>
  );
}
