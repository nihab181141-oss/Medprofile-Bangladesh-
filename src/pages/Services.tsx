import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FeaturesGrid from "../components/FeaturesGrid";
import ProcessFlow from "../components/ProcessFlow";

export default function Services() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Services | MedProfile Bangladesh</title>
        <meta name="description" content="Discover our comprehensive digital services designed exclusively for healthcare professionals in Bangladesh." />
        <meta property="og:title" content="Our Services | MedProfile Bangladesh" />
        <meta property="og:description" content="Discover our comprehensive digital services designed exclusively for healthcare professionals in Bangladesh." />
      </Helmet>
      <div>
        <FeaturesGrid />
        <ProcessFlow />
      </div>
    </>
  );
}
