import dynamic from "next/dynamic";
import Script from "next/script";

//importing componenet data
import privacyherodata from "../data/privacypolicy/privacyherodata.json";
import privacypolicydata from "../data/privacypolicy/privacypolicy.json";

import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";

const PrivacyPoints = dynamic(() =>
  import("../components/pagecomponents/privacypagecomps/privacypoints")
);

export default function PrivacyPolicy() {
  return (
    <>
      <Script
        id="jsonld-privacy-policy"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.fgkbackoffice.com/privacy-policy",
            url: "https://www.fgkbackoffice.com/privacy-policy",
            name: "Privacy Policy | FGK Back Office Services",
            description:
              "Read FGK Back Office Services’ privacy policy to understand how we collect, use, and protect your data when you interact with our website and services.",
            inLanguage: "en",
            isPartOf: {
              "@type": "WebSite",
              "@id": "https://www.fgkbackoffice.com",
              name: "FGK Back Office Services",
            },
            publisher: {
              "@type": "Organization",
              name: "FGK Back Office Services",
              url: "https://www.fgkbackoffice.com",
              logo: {
                "@type": "ImageObject",
                url: "https://www.fgkbackoffice.com/images/fgk_circular_logo.webp",
                width: 600,
                height: 600,
              },
              sameAs: [
                "https://www.linkedin.com/company/fgkbackoffice/",
                "https://www.instagram.com/fgkbackoffice",
                "https://www.facebook.com/fgkbackoffice",
              ],
            },
            breadcrumb: {
              "@type": "BreadcrumbList",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  name: "Home",
                  item: "https://www.fgkbackoffice.com",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  name: "Privacy Policy",
                  item: "https://www.fgkbackoffice.com/privacy-policy",
                },
              ],
            },
          }),
        }}
      />

      <MainHeroSection
        title={privacyherodata.title}
        paragraph={privacyherodata.paragraph}
        mobileImage={privacyherodata.mobileImage}
        desktopImage={privacyherodata.desktopImage}
        mainhint={privacyherodata.hint}
      />
      <PrivacyPoints privacydata={privacypolicydata.sections} />
    </>
  );
}
