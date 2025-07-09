// importing libraries
import dynamic from "next/dynamic";
import Script from "next/script";

// importing json data for web developmnet services page components
import webdevtextdata from "@/app/data/subpagedata/webdevdata/secondsectionwebdevelopment/webdevtextdata.json";
import webdevleftstripdata from "@/app/data/subpagedata/webdevdata/secondsectionwebdevelopment/webdevleftstripdata.json";
import webdevrightstripdata from "@/app/data/subpagedata/webdevdata/secondsectionwebdevelopment/webdevrightstripdata.json";
import WebDevThirdSectionTextData from "@/app/data/subpagedata/webdevdata/thirdsectionwebdevelopment/webdevthirdsectiontextdata.json";
import WebDevThirdSectionLeftCardData from "@/app/data/subpagedata/webdevdata/thirdsectionwebdevelopment/webdevthirdsectionleftcarddata.json";
import WebDevThirdSectionRightCardData from "@/app/data/subpagedata/webdevdata/thirdsectionwebdevelopment/webdevthirdsectionrightcarddata.json";
import WebdevIndustriesData from "@/app/data/subpagedata/webdevdata/industriesectionwebdev/industrieswebdev.json";
import webdevadv from "@/app/data/subpagedata/webdevdata/webdevadvantegessectiondata/webdevadvtextdata.json";
import leftadvdata from "@/app/data/subpagedata/webdevdata/webdevadvantegessectiondata/webdevlefsideadvdata.json";
import rightadvdata from "@/app/data/subpagedata/webdevdata/webdevadvantegessectiondata/webdevrightsideadvdata.json";
import Webdevgetstarteddata from "@/app/data/subpagedata/webdevdata/webdevgettingstarted.json";

// importing shared hero section normally for SEO benefits
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";

// lazy-loaded subcomponents
const WebDevGridSection = dynamic(() =>
  import("@/app/components/subpagecomponenets/webdev/webdevgridsection")
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

// importing utility methods
import { getHeroData } from "@/app/utils/gethreodata";

export const metadata = {
  title: "Web Development Services | FGK Back Office Services",
  description:
    "FGK Back Office Services provides scalable, secure, and responsive web development solutions tailored to your business needs. We specialise in frontend and backend development, modern frameworks, and custom website delivery strategies.",
  keywords: [
    "Web Development Services",
    "Website Design",
    "Responsive Web Design",
    "Custom Web Development",
    "Frontend Development",
    "Backend Development",
    "Web Development Pakistan",
    "FGK Web Services",
    "Secure Web Applications",
    "Business Website Development",
  ],
  authors: [
    { name: "FGK Back Office Services", url: "https://www.fgkbackoffice.com" },
  ],
  creator: "FGK Back Office Services",
  publisher: "FGK Back Office Services",
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/services/webdevelopment",
  },
  openGraph: {
    title: "Web Development Services | FGK Back Office Services",
    description:
      "FGK Back Office Services provides scalable, secure, and responsive web development solutions tailored to your business needs. We specialise in frontend and backend development, modern frameworks, and custom website delivery strategies.",
    url: "https://www.fgkbackoffice.com/services/webdevelopment",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/webdevelopment-page-preview.webp", // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "Web Development Services Overview",
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
    title: "Web Development Services | FGK Back Office Services",
    description:
      "FGK Back Office Services provides scalable, secure, and responsive web development solutions tailored to your business needs. We specialise in frontend and backend development, modern frameworks, and custom website delivery strategies.",
    images: ["/images/webdevelopment-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

// web development services page main component
export default function WebDevelopment() {
  const data = getHeroData("web-development");
  return (
    <>
      <Script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Service",
            "@id":
              "https://www.fgkbackoffice.com/services/webdevelopment#webdevservice",
            name: "Web Development Services",
            serviceType: "Business Web Development",
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
                "https://www.linkedin.com/company/fgkbackoffice", // Replace with actual if different
              ],
            },
            areaServed: {
              "@type": "Country",
              name: "Pakistan",
            },
            description:
              "FGK Back Office Services provides scalable, secure, and responsive web development solutions tailored to your business needs. We specialise in frontend and backend development, modern frameworks, and custom website delivery strategies.",
            datePublished: "2024-12-24",
            dateModified: "2025-07-09",
            url: "https://www.fgkbackoffice.com/services/webdevelopment",
            hasOfferCatalog: {
              "@type": "OfferCatalog",
              name: "Web Development Offerings",
              itemListElement: [
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Frontend Development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Backend Development",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Responsive Web Design",
                  },
                },
                {
                  "@type": "Offer",
                  itemOffered: {
                    "@type": "Service",
                    name: "Custom Website Development",
                  },
                },
              ],
            },
          }),
        }}
      />

      <SubPageHeroSection data={data} />
      <WebDevGridSection />
      <SecondSectionTypeTopAndBottom
        textdata={webdevtextdata}
        leftstripcarddata={webdevleftstripdata}
        rightstripcarddata={webdevrightstripdata}
      />
      <ThirdProcessSection
        textdata={WebDevThirdSectionTextData}
        leftstripcarddata={WebDevThirdSectionLeftCardData}
        rightstripcarddata={WebDevThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={WebdevIndustriesData.heading}
        text={WebdevIndustriesData.text}
      />
      <SubPagesAdvantegesSection
        advtitle={webdevadv.advtitle}
        advdesc={webdevadv.advdesc}
        leftdata={leftadvdata}
        rightdata={rightadvdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={Webdevgetstarteddata.heading}
        descriptiongetstarted={Webdevgetstarteddata.text}
      />
    </>
  );
}
