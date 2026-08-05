import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FAQSection from "../components/FAQSection";

export default function FAQ() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>FAQ | MedProfile Bangladesh</title>
        <meta name="description" content="Frequently asked questions about our healthcare digital services, website setup, and continuous support." />
        <meta property="og:title" content="FAQ | MedProfile Bangladesh" />
        <meta property="og:description" content="Frequently asked questions about our healthcare digital services, website setup, and continuous support." />
      </Helmet>
      <div>
        <FAQSection />
      </div>
    </>
  );
}
