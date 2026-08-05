import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import OurProjects from "../components/OurProjects";

export default function Projects() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Our Projects | MedProfile Bangladesh</title>
        <meta name="description" content="Explore professional doctor websites developed by MedProfile Bangladesh and discover how we help healthcare professionals build trusted digital identities." />
        <meta property="og:title" content="Our Projects | MedProfile Bangladesh" />
        <meta property="og:description" content="Explore professional doctor websites developed by MedProfile Bangladesh and discover how we help healthcare professionals build trusted digital identities." />
        <script id="projects-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Our Projects | MedProfile Bangladesh",
            "description": "Explore professional doctor websites developed by MedProfile Bangladesh and discover how we help healthcare professionals build trusted digital identities.",
            "url": `${window.location.origin}/projects`,
            "provider": {
              "@type": "Organization",
              "name": "MedProfile Bangladesh",
              "url": window.location.origin
            }
          })}
        </script>
      </Helmet>
      <div>
        <OurProjects />
      </div>
    </>
  );
}
