import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import InteractiveProfileBuilder from "../components/InteractiveProfileBuilder";

export default function Consultation() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Book Consultation | MedProfile Bangladesh</title>
        <meta name="description" content="Schedule a consultation and try our interactive profile builder to see how your digital identity will look." />
        <meta property="og:title" content="Book Consultation | MedProfile Bangladesh" />
        <meta property="og:description" content="Schedule a consultation and try our interactive profile builder to see how your digital identity will look." />
      </Helmet>
      <div>
        <div className="py-20 md:py-28 bg-white border-b border-gray-150">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <span className="text-xs uppercase font-bold text-sky-700 tracking-widest block mb-1.5 font-display">Interactive Showroom</span>
              <h2 className="font-display font-medium text-3xl md:text-4xl text-slate-900 tracking-tight leading-tight">
                Interactive Profile Architect Demo
              </h2>
              <p className="mt-4 text-slate-600 text-sm max-w-xl mx-auto leading-relaxed">
                Experience the multi-million-dollar technology layout yourself. Modify the criteria below, select styling templates, and run our **Gemini 3.1 Pro-Preview** reasoning agent to synthesize customized SEO copy instantly.
              </p>
            </div>
            <InteractiveProfileBuilder />
          </div>
        </div>
      </div>
    </>
  );
}
