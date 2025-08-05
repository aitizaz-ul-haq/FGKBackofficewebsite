import Script from "next/script";
import dynamic from "next/dynamic";
import testdata from "./data/testdata/testherodata.json";

import MainPageHeroSection from "./components/pagecomponents/homepagecomps/mainpageherosection";

const ExpertiseSection = dynamic(() =>
  import("./components/pagecomponents/homepagecomps/expertisesection")
);

const ChooseUsSection = dynamic(() =>
  import("./components/pagecomponents/homepagecomps/chooseussection")
);

const IndustriescardHomePageSection = dynamic(() =>
  import(
    "./components/pagecomponents/homepagecomps/industriescardhomepagesection"
  )
);

const HomepageBenefitsSection = dynamic(() =>
  import("./components/pagecomponents/homepagecomps/homepagebenefitssection")
);

const HomepageClientsSection = dynamic(() =>
  import("./components/pagecomponents/homepagecomps/homepageclientssection")
);

const HomepageContactSection = dynamic(() =>
  import("./components/pagecomponents/homepagecomps/homepagecontactsection")
);


export const metadata = {
  title: "FGK Back Office Services | Professional Business Support Solutions",
  description:
    "FGK Back Office Services delivers expert outsourcing in Web Development, Project Management, Accounting, Data Management, and Operations Support from Islamabad.",
  keywords: [
    "FGK Back Office Services",
    "Web Development Islamabad",
    "Operations Support Pakistan",
    "Accounting and Reporting Services",
    "Project Management Experts",
    "Data Management Solutions",
    "Outsourcing Islamabad",
    "Back Office Services",
    "Business Process Outsourcing Pakistan",
  ],

  authors: [
    {
      name: "FGK Back Office Services",
      url: "https://www.fgkbackoffice.com",
    },
  ],
  creator: "FGK Back Office Services",
  publisher: "FGK Back Office Services",

  metadataBase: new URL("https://www.fgkbackoffice.com"),

  openGraph: {
    title: "FGK Back Office Services | Professional Business Support Solutions",
    description:
      "FGK Back Office Services delivers expert outsourcing in Web Development, Project Management, Accounting, Data Management, and Operations Support from Islamabad.",
    url: "https://www.fgkbackoffice.com",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/homepage-metadata-preview.webp", // Keep hero image too
        width: 1200,
        height: 630,
        alt: "FGK Back Office Services Website Homepage Preview",
      },
      {
        url: "/images/fgk_circular_logo.webp", // Add your logo or circular icon
        width: 600,
        height: 600,
        alt: "FGK Back Office Circular Logo",
      },
    ],
    locale: "en_US",
    type: "website",
  },

  twitter: {
    card: "summary_large_image",
    title: "FGK Back Office Services | Trusted Back Office Partner",
    description:  "FGK Back Office Services delivers expert outsourcing in Web Development, Project Management, Accounting, Data Management, and Operations Support from Islamabad.",
    images: ["/images/homepage-metadata-preview.webp"],
    creator: "@fgkbackoffice",
    site: "@fgkbackoffice",
  },

  icons: {
    icon: [
      { url: "/images/favicon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/images/favicon-16x16.png", sizes: "16x16", type: "image/png" },
      {
        url: "/images/android-chrome-192x192.png",
        sizes: "192x192",
        type: "image/png",
      },
      {
        url: "/images/android-chrome-512x512.png",
        sizes: "512x512",
        type: "image/png",
      },
    ],
    apple: [
      {
        url: "/images/apple-touch-icon.png",
        sizes: "180x180",
        type: "image/png",
      },
    ],
    shortcut: [{ url: "/images/favicon.ico", type: "image/x-icon" }],
  },

  manifest: "/manifest.webmanifest",

  themeColor: "#59c3c3a8", 

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      maxVideoPreview: -1,
      maxImagePreview: "large",
      maxSnippet: -1,
    },
  },

  alternates: {
    canonical: "https://www.fgkbackoffice.com",
  },

  category: "Business Support Services", // Optional, for blog posts or services
};

export default function Home() {
  return (
    <>
      <Script
        id="jsonld-homepage"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@graph": [
              {
                "@type": "WebSite",
                "@id": "https://www.fgkbackoffice.com/#website",
                url: "https://www.fgkbackoffice.com",
                name: "FGK Back Office Services",
                description:
                  "FGK Back Office Services delivers expert outsourcing in Web Development, Project Management, Accounting, Data Management, and Operations Support from Islamabad.",
                inLanguage: "en",
                datePublished: "2024-10-24",
                dateModified: "2025-07-09",
                publisher: {
                  "@id": "https://www.fgkbackoffice.com/#organization",
                },
              },
              {
                "@type": "Organization",
                "@id": "https://www.fgkbackoffice.com/#organization",
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
              {
                "@type": "WebPage",
                "@id": "https://www.fgkbackoffice.com/#webpage",
                url: "https://www.fgkbackoffice.com",
                name: "FGK Back Office Services | Professional Business Support Solutions",
                description:
                  "FGK Back Office Services delivers expert outsourcing in Web Development, Project Management, Accounting, Data Management, and Operations Support from Islamabad.",
                inLanguage: "en",
                isPartOf: {
                  "@id": "https://www.fgkbackoffice.com/#website",
                },
                primaryImageOfPage: {
                  "@type": "ImageObject",
                  url: "https://www.fgkbackoffice.com/images/homepage-metadata-preview.webp",
                  width: 1200,
                  height: 630,
                  caption: "FGK Back Office Services Website Homepage Preview",
                },
              },
              {
                "@type": "BreadcrumbList",
                itemListElement: [
                  {
                    "@type": "ListItem",
                    position: 1,
                    name: "Home",
                    item: "https://www.fgkbackoffice.com",
                  },
                ],
              },
            ],
          }),
        }}
      />

      <main>
        <MainPageHeroSection
          title={testdata.title}
          paragraph={testdata.paragraph}
          forwardImage={testdata.forwardImage}
        />
        <ExpertiseSection />
        <ChooseUsSection />
        <IndustriescardHomePageSection />
        <HomepageBenefitsSection />
        <HomepageClientsSection />
        <HomepageContactSection />
      </main>
    </>
  );
}
