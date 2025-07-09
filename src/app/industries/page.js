import dynamic from "next/dynamic";

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
    "FGK Back Office Services delivers customised business support solutions to a range of industries including finance, legal, real estate, healthcare, and professional services.",
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
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/industries",
  },
  openGraph: {
    title: "Industries We Serve | FGK Back Office Services",
    description:
      "Discover how FGK Back Office Services empowers various industries with reliable outsourcing solutions tailored to sector-specific needs.",
    url: "https://www.fgkbackoffice.com/industries",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/industries-page-preview.webp",
        width: 1200,
        height: 630,
        alt: "Industries supported by FGK Back Office Services",
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
      "Explore industry-specific business support solutions including finance, fintech, Accountancy and Tech.",
    images: ["/images/industries-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Industries() {
  return (
    <>
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
