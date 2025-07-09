// importing library
import dynamic from "next/dynamic";
import Script from "next/script";

// importing data management service page data
import textdata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagtextdata.json";
import rightstripcarddata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagrightstripdata.json";
import DatamagThirdSectionTextData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectiontextdata.json";
import DatamagThirdSectionLeftCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionleftcarddata.json";
import DatamagThirdSectionRightCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionrightcarddata.json";
import DataMangIndustriesectdata from "@/app/data/subpagedata/datamanagementdata/industriesdatamang.json";
import DataMangadvleftdata from "@/app/data/subpagedata/datamanagementdata/datamangadvantegessectiondata/datamanglefsideadvdata.json";
import DataMangadvrightdata from "@/app/data/subpagedata/datamanagementdata/datamangadvantegessectiondata/datamangrightsideadvdata.json";
import DataManggetstarted from "@/app/data/subpagedata/datamanagementdata/datamanggetstrated.json";
import DataMangadvtext from "@/app/data/subpagedata/datamanagementdata/datamangadvantegessectiondata/datamangadvtextdata.json";

// hero section (not lazy loaded)
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";

// dynamic imports (lazy loaded, SSR enabled)
const DataMagGridSection = dynamic(() =>
  import("@/app/components/subpagecomponenets/datamag/datamaggridsection")
);
const SecondSectionRightSided = dynamic(() =>
  import(
    "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontyperightsided"
  )
);
const ThirdProcessSection = dynamic(() =>
  import(
    "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection"
  )
);
const SubPagesIndustriesSection = dynamic(() =>
  import(
    "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection"
  )
);
const SubPagesAdvantegesSection = dynamic(() =>
  import(
    "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection"
  )
);
const SubPagesGetStartedSection = dynamic(() =>
  import(
    "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection"
  )
);


// importing utility menthods
import { getHeroData } from "@/app/utils/gethreodata";

export const metadata = {
  title: "Data Management Services | FGK Back Office Services",
  description:
    "Streamline and safeguard your business data with FGK's Data Management solutions. From collection to compliance, we deliver intelligent, secure, and scalable data operations.",
  keywords: [
    "Data Management",
    "Data Governance",
    "Data Compliance",
    "Business Data Solutions",
    "Secure Data Handling",
    "Data Flow Monitoring",
    "Information Management",
    "Back Office Services Pakistan",
    "Data Operations",
    "FGK Data Management",
  ],
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/services/datamanagement",
  },
  openGraph: {
    title: "Data Management Services | FGK Back Office Services",
    description:
      "Unlock the full potential of your business data. FGK offers secure, efficient, and compliant data management for modern businesses.",
    url: "https://www.fgkbackoffice.com/services/datamanagement",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/datamanagement-page-preview.webp", // Confirm this file exists
        width: 1200,
        height: 630,
        alt: "Data Management Service Overview",
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
    title: "Data Management Services | FGK Back Office Services",
    description:
      "Secure and scalable data management services tailored for growing enterprises. Powered by FGK Back Office Services.",
    images: ["/images/datamanagement-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function DataManagement() {
  const data = getHeroData("data-management");
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://www.fgkbackoffice.com/services/datamanagement#service",
            name: "Data Management Services",
            serviceType: "Business Data Solutions",
            url: "https://www.fgkbackoffice.com/services/datamanagement",
            description:
              "Secure and scalable data management solutions including data flow monitoring, governance, compliance, and optimisation for growing businesses.",
            provider: {
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
                "https://www.linkedin.com/company/fgkbackoffice/", // ✅ Update this if your actual LinkedIn URL differs
              ],
            },
            areaServed: {
              "@type": "Country",
              name: "Pakistan",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Data Management Offerings",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Data Flow Monitoring",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Data Governance & Compliance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Information Architecture & Storage",
                  },
                },
              ],
            },
          }),
        }}
      />

      <SubPageHeroSection data={data} />
      <DataMagGridSection />
      <SecondSectionRightSided
        textdata={textdata}
        rightstripcarddata={rightstripcarddata}
      />
      <ThirdProcessSection
        textdata={DatamagThirdSectionTextData}
        leftstripcarddata={DatamagThirdSectionLeftCardData}
        rightstripcarddata={DatamagThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={DataMangIndustriesectdata.heading}
        text={DataMangIndustriesectdata.text}
      />
      <SubPagesAdvantegesSection
        advtitle={DataMangadvtext.advtitle}
        advdesc={DataMangadvtext.advdesc}
        leftdata={DataMangadvleftdata}
        rightdata={DataMangadvrightdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={DataManggetstarted.heading}
        descriptiongetstarted={DataManggetstarted.text}
      />
    </>
  );
}
