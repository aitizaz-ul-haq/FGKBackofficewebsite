// importing accounting and reporting service page subcomponents
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import AccRepGridSection from "@/app/components/subpagecomponenets/accandrep/accrepgridsection";
import SecondSectionTypeTopAndBottom from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypetopandbottom";
import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import SubPagesGetStartedSection from "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection";

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

// importing utility mentods
import { getHeroData } from "@/app/utils/gethreodata";

export const metadata = {
  title: "Accounting & Reporting Services | FGK Back Office Services",
  description:
    "Discover our expert Accounting & Reporting services tailored for businesses. FGK Back Office Services ensures accurate financial tracking, compliance, and insightful reporting.",
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
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/services/accountingandreporting",
  },
  openGraph: {
    title: "Accounting & Reporting Services | FGK Back Office Services",
    description:
      "Streamline your finances with FGK’s Accounting & Reporting solutions. Accurate records. Real-time insights. Full compliance.",
    url: "https://www.fgkbackoffice.com/services/accountingandreporting",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/accounting-page-preview.webp", // Make sure this image exists
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
    description:
      "Get expert financial reporting and accounting services for your business by FGK Back Office Services.",
    images: ["/images/accounting-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function AccountingAndReporting() {
  const data = getHeroData("accounting-and-reporting");

  return (
    <>
      <script
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
              "Accurate accounting and financial reporting tailored to your business needs.",
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
