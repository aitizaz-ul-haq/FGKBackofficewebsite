import dynamic from "next/dynamic";
import Script from "next/script";

// importing component data
import testdata from "../data/team/teamherodata.json";

import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";

const TeamFullComp = dynamic(() =>
  import("../components/pagecomponents/teampagecomps/teamfullcomp")
);

export const metadata = {
  title: "Meet Our Team | FGK Back Office Services",
  description:
    "Get to know the professionals behind FGK Back Office Services – a dedicated team driving excellence in business support and outsourcing solutions.",
  keywords: [
    "FGK Back Office Team",
    "Meet Our Team",
    "Outsourcing Professionals",
    "Business Support Experts",
    "Back Office Team Islamabad",
    "Leadership Team FGK",
    "Operations Team",
    "Development Team",
    "Finance Support Team",
    "Outsourcing Experts Pakistan",
  ],
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/team",
  },
  openGraph: {
    title: "Meet Our Team | FGK Back Office Services",
    description:
      "Discover the skilled and passionate professionals powering FGK Back Office Services across departments like finance, development, and operations.",
    url: "https://www.fgkbackoffice.com/team",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/team-page-preview.webp", // <-- Confirm image exists
        width: 1200,
        height: 630,
        alt: "FGK Back Office Team Preview",
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
    title: "Meet Our Team | FGK Back Office Services",
    description:
      "Explore the diverse and experienced professionals driving FGK Back Office Services forward.",
    images: ["/images/team-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Team() {
  return (
    <>
      <Script
        id="jsonld-team-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.fgkbackoffice.com/team",
            url: "https://www.fgkbackoffice.com/team",
            name: "Meet Our Team | FGK Back Office Services",
            description:
              "Get to know the professionals behind FGK Back Office Services – a dedicated team driving excellence in business support and outsourcing solutions.",
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
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.fgkbackoffice.com/images/team-page-preview.webp",
              width: 1200,
              height: 630,
              caption: "FGK Back Office Team Preview",
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
                  name: "Team",
                  item: "https://www.fgkbackoffice.com/team",
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
      <TeamFullComp />
    </>
  );
}
