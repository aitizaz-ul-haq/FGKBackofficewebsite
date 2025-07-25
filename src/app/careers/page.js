import dynamic from "next/dynamic";
import Script from "next/script";
// importing component data
import testdata from "../data/careers/careersherodata.json";

// importing subcomponents
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";

const CareersFullBodyComp = dynamic(() =>
  import("../components/pagecomponents/careerspagecomps/careersfullbodycomp")
);

export const metadata = {
  title: "Careers at FGK | Join Our Growing Team",
  description:
    "Explore career opportunities at FGK Back Office Services. Join a team of skilled professionals making a mark in the outsourcing industry through innovation, dedication, and excellence.",
  keywords: [
    "FGK Careers",
    "Jobs at FGK",
    "Work at FGK",
    "Outsourcing Careers Islamabad",
    "Join Our Team",
    "FGK Job Openings",
    "Business Support Careers",
    "Finance and Tech Jobs Pakistan",
    "Back Office Careers",
    "Careers in Outsourcing",
  ],
  authors: [
    { name: "FGK Back Office Services", url: "https://www.fgkbackoffice.com" },
  ],
  creator: "FGK Back Office Services",
  publisher: "FGK Back Office Services",
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/careers",
  },
  openGraph: {
    title: "Careers at FGK | Join Our Growing Team",
    description:
      "Explore career opportunities at FGK Back Office Services. Join a team of skilled professionals making a mark in the outsourcing industry through innovation, dedication, and excellence.",
    url: "https://www.fgkbackoffice.com/careers",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/careers-page-preview.webp",
        width: 1200,
        height: 630,
        alt: "Careers at FGK Back Office Services",
      },
      {
        url: "/images/fgk_circular_logo.webp",
        width: 600,
        height: 600,
        alt: "FGK Circular Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Careers at FGK | Join Our Growing Team",
    description:
      "Explore career opportunities at FGK Back Office Services. Join a team of skilled professionals making a mark in the outsourcing industry through innovation, dedication, and excellence.",
    images: ["/images/careers-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Careers() {
  return (
    <>
      <Script
        id="jsonld-careers-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.fgkbackoffice.com/careers",
            url: "https://www.fgkbackoffice.com/careers",
            name: "Careers at FGK | Join Our Growing Team",
            description:
              "Explore career opportunities at FGK Back Office Services. Join a team of skilled professionals making a mark in the outsourcing industry through innovation, dedication, and excellence.",
            inLanguage: "en",
            datePublished: "2024-10-26",
            dateModified: "2025-07-09",
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
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.fgkbackoffice.com/images/careers-page-preview.webp",
              width: 1200,
              height: 630,
              caption: "Careers at FGK Back Office Services",
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
                  name: "Careers",
                  item: "https://www.fgkbackoffice.com/careers",
                },
              ],
            },
          }),
        }}
      />

      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        mobileImage={testdata.mobileImage}
        desktopImage={testdata.desktopImage}
        mainhint={testdata.hint}
      />
      <CareersFullBodyComp />
    </>
  );
}
