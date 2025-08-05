import dynamic from "next/dynamic";
import Script from "next/script";

//importing componenet data
import testdata from "../data/industries/industriesherodata.json";

//importing utility function
import ScrollToHash from "../components/pagecomponents/industriespagecomps/scrolltohash";

//importing library
import { Suspense } from "react";

// Lazy load larger components
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";

const IndustriesIntro = dynamic(() =>
  import(
    "../components/pagecomponents/industriespagecomps/industriesintrosection"
  )
);

export const metadata = {
  title: "Industries We Serve | FGK Back Office Services",
  description:
    "FGK Back Office Services delivers customised business support solutions tailored to the needs of finance, legal, real estate, healthcare, and professional service industries. Our expert teams ensure compliance, accuracy, and operational efficiency across diverse business sectors.",
  keywords: [
    "Industries We Serve",
    "Finance Back Office Support",
    "Healthcare Outsourcing",
    "Real Estate Data Services",
    "Legal Document Processing",
    "Business Process Outsourcing",
    "Accounting for Law Firms",
    "Data Management for Healthcare",
    "Operations Support Real Estate",
    "FGK Back Office Services",
    "Islamabad Outsourcing Services",
    "Industry-specific support Pakistan",
    "Customised business solutions",
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
    title: "Industries We Serve | FGK Back Office Services",
    description:
      "FGK Back Office Services delivers customised business support solutions tailored to the needs of finance, legal, real estate, healthcare, and professional service industries. Our expert teams ensure compliance, accuracy, and operational efficiency across diverse business sectors.",
    url: "https://www.fgkbackoffice.com/industries",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/industries-page-preview.webp",
        width: 1200,
        height: 630,
        alt: "Descriptive Alt Text for OG Preview",
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
    title: "Industries We Serve | FGK Back Office Services",
    description:
      "FGK Back Office Services delivers customised business support solutions tailored to the needs of finance, legal, real estate, healthcare, and professional service industries. Our expert teams ensure compliance, accuracy, and operational efficiency across diverse business sectors.",
    images: ["/images/industries-page-preview.webp"],
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
    canonical: "https://www.fgkbackoffice.com/services",
  },

  category: "Back office Services", // Optional, for blog posts or services
};

export default function Industries() {
  return (
    <>
      <Script
        id="jsonld-industries"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.fgkbackoffice.com/industries",
            url: "https://www.fgkbackoffice.com/industries",
            name: "Industries We Serve | FGK Back Office Services",
            description:
              "FGK Back Office Services delivers customised business support solutions tailored to the needs of finance, legal, real estate, healthcare, and professional service industries. Our expert teams ensure compliance, accuracy, and operational efficiency across diverse business sectors.",
            inLanguage: "en",
            datePublished: "2024-10-25",
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
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.fgkbackoffice.com/images/industries-page-preview.webp",
              width: 1200,
              height: 630,
              caption: "Industries supported by FGK Back Office Services",
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
                  name: "Industries",
                  item: "https://www.fgkbackoffice.com/industries",
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
      <IndustriesIntro />
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>
    </>
  );
}
