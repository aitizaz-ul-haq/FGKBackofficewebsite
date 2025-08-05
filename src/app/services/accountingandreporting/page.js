import dynamic from "next/dynamic";
import Script from "next/script";

// importing accounting and reporting service page data
import accreptextdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accreptextdata.json";
import accrepleftstripdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accrepleftstripdata.json";
import accreprightstripdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accreprightstripdata.json";
import AccrepThirdSectionTextData from "@/app/data/subpagedata/accandrepdata/thirdsectionaccrep/accrepthirdsectiontextdata.json";
import AccrepThirdSectionLeftCardData from "@/app/data/subpagedata/accandrepdata/thirdsectionaccrep/accrepthirdsectionleftcarddata.json";
import AccrepThirdSectionRightCardData from "@/app/data/subpagedata/accandrepdata/thirdsectionaccrep/accrepthirdsectionrightcarddata.json";
import Accandrepindustriesdata from "@/app/data/subpagedata/accandrepdata/accandrepindustries.json";
import assadvtextdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/accadvtextdata.json";
import leftadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/lefsideadvdata.json";
import rightadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/rightsideadvdata.json";
import Accandrepgettingstarted from "@/app/data/subpagedata/accandrepdata/accandrepgettingstarted.json";

import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";

const AccRepGridSection = dynamic(() =>
  import("@/app/components/subpagecomponenets/accandrep/accrepgridsection")
);
const SecondSectionTypeTopAndBottom = dynamic(() =>
  import(
    "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypetopandbottom"
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

// importing utility mentods
import { getHeroData } from "@/app/utils/gethreodata";

export const metadata = {
  title: "Accounting & Reporting Services | FGK Back Office Services",
  description: "FGK Back Office Services provides expert accounting and financial reporting tailored to your business. Our offerings include bookkeeping, payroll, compliance reporting, and statement preparation – all designed to ensure accuracy, efficiency, and regulatory alignment.",
  keywords: [
    "Accounting Services",
    "Financial Reporting",
    "Bookkeeping FGK",
    "Back Office Accounting",
    "Islamabad Financial Services",
    "Compliance Reporting",
    "Financial Analysis",
    "Outsourced Accounting",
    "Payroll Management",
    "Business Financial Support",
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
    title: "Accounting & Reporting Services | FGK Back Office Services",
    description: "FGK Back Office Services provides expert accounting and financial reporting tailored to your business. Our offerings include bookkeeping, payroll, compliance reporting, and statement preparation – all designed to ensure accuracy, efficiency, and regulatory alignment.",
    url: "https://www.fgkbackoffice.com/services/accountingandreporting",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/accounting-page-preview.webp",
        width: 1200,
        height: 630,
        alt: "Accounting & Reporting Services",
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
    title: "Accounting & Reporting Services | FGK Back Office Services",
    description: "FGK Back Office Services provides expert accounting and financial reporting tailored to your business. Our offerings include bookkeeping, payroll, compliance reporting, and statement preparation – all designed to ensure accuracy, efficiency, and regulatory alignment.",
    images: ["/images/accounting-page-preview.webp"],
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
    canonical: "https://www.fgkbackoffice.com/services/accountingandreporting",
  },

  category: "Accounting and Reporting Services", // Optional, for blog posts or services
};


export default function AccountingAndReporting() {
  const data = getHeroData("accounting-and-reporting");

  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://www.fgkbackoffice.com/services/accountingandreporting#service",
            name: "Accounting & Reporting Services",
            serviceType: "Financial Reporting and Accounting",
            url: "https://www.fgkbackoffice.com/services/accountingandreporting",
            description:
              "FGK Back Office Services provides expert accounting and financial reporting tailored to your business. Our offerings include bookkeeping, payroll, compliance reporting, and statement preparation – all designed to ensure accuracy, efficiency, and regulatory alignment.",
            datePublished: "2024-10-26",
            dateModified: "2025-07-09",
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
              sameAs: ["https://www.linkedin.com/company/fgkbackoffice/"],
            },
            areaServed: {
              "@type": "Country",
              name: "Pakistan",
            },
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Accounting & Reporting Offerings",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Bookkeeping and Ledger Maintenance",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Payroll Processing and Tax Filing",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Financial Statement Preparation",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Regulatory Compliance Reporting",
                  },
                },
              ],
            },
          }),
        }}
      />

      <SubPageHeroSection data={data} />
      <AccRepGridSection />
      <SecondSectionTypeTopAndBottom
        textdata={accreptextdata}
        leftstripcarddata={accrepleftstripdata}
        rightstripcarddata={accreprightstripdata}
      />
      <ThirdProcessSection
        textdata={AccrepThirdSectionTextData}
        leftstripcarddata={AccrepThirdSectionLeftCardData}
        rightstripcarddata={AccrepThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={Accandrepindustriesdata.heading}
        text={Accandrepindustriesdata.text}
      />
      <SubPagesAdvantegesSection
        advtitle={assadvtextdata.advtitle}
        advdesc={assadvtextdata.advdesc}
        leftdata={leftadvdata}
        rightdata={rightadvdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={Accandrepgettingstarted.heading}
        descriptiongetstarted={Accandrepgettingstarted.text}
      />
    </>
  );
}
