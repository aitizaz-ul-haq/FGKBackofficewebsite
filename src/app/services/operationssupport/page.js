// importing libraries
import dynamic from "next/dynamic";

// importing operations support service page data
import operatetextdata from "@/app/data/subpagedata/operatsup/secondsectionoperatsudata/operatsupsecondsectiontextdata.json";
import operateleftstripdata from "@/app/data/subpagedata/operatsup/secondsectionoperatsudata/operatesupleftstripdata.json";
import operaterightstripdata from "@/app/data/subpagedata/operatsup/secondsectionoperatsudata/operatesuprightstripdata.json";
import OperatsupThirdSectionTextData from "@/app/data/subpagedata/operatsup/thirdsectionoperatsup/operatsupthirdsectiontextdata.json";
import OperatsupThirdSectionLeftCardData from "@/app/data/subpagedata/operatsup/thirdsectionoperatsup/operatsupthirdsectionleftcarddata.json";
import OperatsupThirdSectionRightCardData from "@/app/data/subpagedata/operatsup/thirdsectionoperatsup/operatsupthirdsectionrightcarddata.json";
import Operatesupindustriesdata from "@/app/data/subpagedata/operatsup/industriesoperatesupdata.json";
import Operatesupadvtextdata from "@/app/data/subpagedata/operatsup/operatesupvantegessectiondata/operatesupdvtextdata.json";
import Operatesupleftdata from "@/app/data/subpagedata/operatsup/operatesupvantegessectiondata/operatesuplefsideadvdata.json";
import Operatesuprightdata from "@/app/data/subpagedata/operatsup/operatesupvantegessectiondata/operatesuprightsideadvdata.json";
import Operatesupgetstarteddata from "@/app/data/subpagedata/operatsup/operatesupgettingstarted.json";

// importing shared component (critical for SEO)
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";

// lazy-loading service page subcomponents
const OperatSupGridSection = dynamic(() =>
  import("@/app/components/subpagecomponenets/operatsup/operatsupgridsection")
);

const SecondSectionTypeMixed = dynamic(() =>
  import(
    "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypemixed"
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

// importing utility methods
import { getHeroData } from "@/app/utils/gethreodata";

export const metadata = {
  title: "Operations Support Services | FGK Back Office Services",
  description:
    "Enhance your business operations with FGK’s expert operations support. From process mapping to real-time data flow and issue resolution, we streamline your workflows.",
  keywords: [
    "Operations Support",
    "Process Mapping",
    "Operational Efficiency",
    "Back Office Operations",
    "Business Workflow Support",
    "Real-Time Data Flow",
    "Outsourcing Pakistan",
    "Operations Management",
    "Issue Resolution Services",
    "FGK Back Office Operations",
  ],
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/services/operationssupport",
  },
  openGraph: {
    title: "Operations Support Services | FGK Back Office Services",
    description:
      "Optimise your operations with FGK Back Office Services – from planning and monitoring to resolution and communication.",
    url: "https://www.fgkbackoffice.com/services/operationssupport",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/operations-page-preview.webp", // Ensure this image exists in public/images/
        width: 1200,
        height: 630,
        alt: "Operations Support Overview",
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
    title: "Operations Support Services | FGK Back Office Services",
    description:
      "Explore FGK’s comprehensive operations support services – process mapping, data tracking, regulatory checks, and more.",
    images: ["/images/operations-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function OperationsSupport() {
  const data = getHeroData("operations-support");
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://www.fgkbackoffice.com/services/operationssupport#service",
            name: "Operations Support Services",
            serviceType: "Business Operations Support",
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
              sameAs: ["https://pk.linkedin.com/company/fgkbackoffice"],
            },
            areaServed: {
              "@type": "Country",
              name: "Pakistan",
            },
            description:
              "Comprehensive operations support including process mapping, real-time data monitoring, compliance checks, and efficient issue resolution.",
            url: "https://www.fgkbackoffice.com/services/operationssupport",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Operations Support Service Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Initial Process Mapping",
                    description:
                      "We assess and outline your existing operational structure.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Data Flow Monitoring",
                    description:
                      "Track real-time movement of data across all platforms.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Regulatory Compliance Checks",
                    description:
                      "Validate compliance with local and international standards.",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Issue Resolution Protocol",
                    description:
                      "Escalate and resolve problems with minimal disruption.",
                  },
                },
              ],
            },
          }),
        }}
      />

      <SubPageHeroSection data={data} />
      <OperatSupGridSection />
      <SecondSectionTypeMixed
        textdata={operatetextdata}
        leftstripcarddata={operateleftstripdata}
        rightstripcarddata={operaterightstripdata}
      />
      <ThirdProcessSection
        textdata={OperatsupThirdSectionTextData}
        leftstripcarddata={OperatsupThirdSectionLeftCardData}
        rightstripcarddata={OperatsupThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={Operatesupindustriesdata.heading}
        text={Operatesupindustriesdata.text}
      />
      <SubPagesAdvantegesSection
        advtitle={Operatesupadvtextdata.advtitle}
        advdesc={Operatesupadvtextdata.advdesc}
        leftdata={Operatesupleftdata}
        rightdata={Operatesuprightdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={Operatesupgetstarteddata.heading}
        descriptiongetstarted={Operatesupgetstarteddata.text}
      />
    </>
  );
}
