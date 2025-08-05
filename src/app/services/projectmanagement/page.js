// importing libraries
import dynamic from "next/dynamic";
import Script from "next/script";

// importing project management service page data
import textdata from "@/app/data/subpagedata/projectmanagementdata/secondsectiondata/textdata.json";
import leftstripcarddata from "@/app/data/subpagedata/projectmanagementdata/secondsectiondata/leftstripdata.json";
import rightstripcarddata from "@/app/data/subpagedata/projectmanagementdata/secondsectiondata/rightstripdata.json";
import ProjMangThirdSectionTextData from "@/app/data/subpagedata/projectmanagementdata/thirdsectionprojectmanagement/projmangthirdsectiontextdata.json";
import ProjMangThirdSectionLeftCardData from "@/app/data/subpagedata/projectmanagementdata/thirdsectionprojectmanagement/projmangthirdsectionleftcarddata.json";
import ProjMangThirdSectionRightCardData from "@/app/data/subpagedata/projectmanagementdata/thirdsectionprojectmanagement/projmangthirdsectionrightcarddata.json";
import ProjectIndustriesData from "@/app/data/subpagedata/projectmanagementdata/industriesectionprojdata/industriesprojdata.json";
import projadvtextdata from "@/app/data/subpagedata/projectmanagementdata/projmanagementadvantegessectiondata/projmangadvtextdata.json";
import leftprojmangdata from "@/app/data/subpagedata/projectmanagementdata/projmanagementadvantegessectiondata/lefsideadvdataprojmang.json";
import rightprojmangdata from "@/app/data/subpagedata/projectmanagementdata/projmanagementadvantegessectiondata/rightsideadvdataprojmang.json";
import projmanggetstarteddata from "@/app/data/subpagedata/projectmanagementdata/projmanggetstarted.json";

// importing shared component
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";

// lazy-loading other subcomponents
const ProgMagGridSection = dynamic(() =>
  import("@/app/components/subpagecomponenets/projmanag/promaggridsection")
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

// importing utility method
import { getHeroData } from "@/app/utils/gethreodata";

export const metadata = {
  title: "Project Management Services | FGK Back Office Services",
  description:
    "FGK’s project management services ensure on-time delivery, scope control, risk mitigation, and continuous client engagement. We implement Agile and Waterfall methodologies to deliver customised oversight, enhance communication, and streamline execution of strategic initiatives.",
  keywords: [
    "Project Management",
    "Project Planning",
    "Execution Monitoring",
    "Agile Project Delivery",
    "Waterfall Methodology",
    "Back Office Project Services",
    "Project Coordination",
    "Business Project Oversight",
    "Pakistan Project Management",
    "FGK Project Services",
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
    title: "Project Management Services | FGK Back Office Services",
    description:
      "FGK’s project management services ensure on-time delivery, scope control, risk mitigation, and continuous client engagement. We implement Agile and Waterfall methodologies to deliver customised oversight, enhance communication, and streamline execution of strategic initiatives.",
    url: "https://www.fgkbackoffice.com/services/projectmanagement",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/projectmanagement-page-preview.webp",
        width: 1200,
        height: 630,
        alt: "Project Management Services Overview",
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
    title: "Project Management Services | FGK Back Office Services",
    description:
      "FGK’s project management services ensure on-time delivery, scope control, risk mitigation, and continuous client engagement. We implement Agile and Waterfall methodologies to deliver customised oversight, enhance communication, and streamline execution of strategic initiatives.",
    images: ["/images/projectmanagement-page-preview.webp"],
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
    canonical: "https://www.fgkbackoffice.com/services/projectmanagement",
  },

  category: "Business Support Services", // Optional, for blog posts or services
};

export default function ProjectManagement() {
  const data = getHeroData("project-management");
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id": "https://www.fgkbackoffice.com/services/projectmanagement",
            name: "Project Management Services",
            serviceType: "Business Project Oversight",
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
                "https://www.linkedin.com/company/fgk-back-office-services", // replace with actual LinkedIn if different
              ],
            },
            areaServed: {
              "@type": "Country",
              name: "Pakistan",
            },
            description:
              "FGK’s project management services ensure on-time delivery, scope control, risk mitigation, and continuous client engagement. We implement Agile and Waterfall methodologies to deliver customised oversight, enhance communication, and streamline execution of strategic initiatives.",
            datePublished: "2024-12-24",
            dateModified: "2025-07-09",
            url: "https://www.fgkbackoffice.com/services/projectmanagement",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Project Management Packages",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Agile Project Delivery",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Waterfall Methodology Support",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Project Oversight",
                  },
                },
              ],
            },
          }),
        }}
      />

      <SubPageHeroSection data={data} />
      <ProgMagGridSection />
      <SecondSectionTypeMixed
        textdata={textdata}
        leftstripcarddata={leftstripcarddata}
        rightstripcarddata={rightstripcarddata}
      />
      <ThirdProcessSection
        textdata={ProjMangThirdSectionTextData}
        leftstripcarddata={ProjMangThirdSectionLeftCardData}
        rightstripcarddata={ProjMangThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={ProjectIndustriesData.heading}
        text={ProjectIndustriesData.text}
      />
      <SubPagesAdvantegesSection
        advtitle={projadvtextdata.advtitle}
        advdesc={projadvtextdata.advdesc}
        leftdata={leftprojmangdata}
        rightdata={rightprojmangdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={projmanggetstarteddata.proggridheadinggetstarted}
        descriptiongetstarted={
          projmanggetstarteddata.proggriddescriptiongetstarted
        }
      />
    </>
  );
}
