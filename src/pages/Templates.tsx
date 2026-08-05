import React, { useEffect } from "react";
import { Helmet } from "react-helmet-async";
import TemplatesPage from "../components/TemplatesPage";

export default function Templates() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <title>Website Templates | MedProfile Bangladesh</title>
        <meta name="description" content="Explore premium doctor website templates developed by MedProfile Bangladesh and choose the perfect design for your professional digital identity." />
        <meta property="og:title" content="Website Templates | MedProfile Bangladesh" />
        <meta property="og:description" content="Explore premium doctor website templates developed by MedProfile Bangladesh and choose the perfect design for your professional digital identity." />
        <script id="templates-schema" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "CollectionPage",
            "name": "Website Templates | MedProfile Bangladesh",
            "description": "Explore premium doctor website templates developed by MedProfile Bangladesh and choose the perfect design for your professional digital identity.",
            "url": `${window.location.origin}/templates`,
            "provider": {
              "@type": "Organization",
              "name": "MedProfile Bangladesh",
              "url": window.location.origin
            }
          })}
        </script>
      </Helmet>
      <div>
        <TemplatesPage />
      </div>
    </>
  );
}
