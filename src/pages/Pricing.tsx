import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import PricingSection from "../components/PricingSection";
import ComparePackages from "../components/ComparePackages";

export default function Pricing() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Pricing Plans | MedProfile Bangladesh</title>
        <meta name="description" content="Transparent and affordable pricing plans for professional doctor websites and healthcare digital infrastructure." />
        <meta property="og:title" content="Pricing Plans | MedProfile Bangladesh" />
        <meta property="og:description" content="Transparent and affordable pricing plans for professional doctor websites and healthcare digital infrastructure." />
      </Helmet>
      <div>
        <PricingSection />
        <ComparePackages />
      </div>
    </>
  );
}
