import dynamic from "next/dynamic";
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
    "Explore career opportunities at FGK Back Office Services. Join a dynamic team shaping the future of business outsourcing in Pakistan.",
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
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/careers",
  },
  openGraph: {
    title: "Careers at FGK | Join Our Growing Team",
    description:
      "Find open positions and grow your career with FGK Back Office Services – a leader in business support and outsourcing.",
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
      "Explore open roles at FGK Back Office Services and be part of a professional team shaping the future of outsourcing.",
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
