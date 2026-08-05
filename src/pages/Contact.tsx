import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import ContactAndGallery from "../components/ContactAndGallery";

export default function Contact() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Contact Us | MedProfile Bangladesh</title>
        <meta name="description" content="Get in touch with MedProfile Bangladesh. Our dedicated onboarding team is ready to assist you." />
        <meta property="og:title" content="Contact Us | MedProfile Bangladesh" />
        <meta property="og:description" content="Get in touch with MedProfile Bangladesh. Our dedicated onboarding team is ready to assist you." />
      </Helmet>
      <div>
        <ContactAndGallery />
      </div>
    </>
  );
}
