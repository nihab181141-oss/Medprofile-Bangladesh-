import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import FounderSection from "../components/FounderSection";

export default function About() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>About Us | MedProfile Bangladesh</title>
        <meta name="description" content="Learn about MedProfile Bangladesh and our mission to establish professional digital identities for doctors." />
        <meta property="og:title" content="About Us | MedProfile Bangladesh" />
        <meta property="og:description" content="Learn about MedProfile Bangladesh and our mission to establish professional digital identities for doctors." />
      </Helmet>
      <div>
        <FounderSection />
      </div>
    </>
  );
}
