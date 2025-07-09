import dynamic from "next/dynamic";
import Script from "next/script";
//importing componenet data
import testdata from "../data/about/aboutherodata.json";
import aboutdata from "../data/about/fullbodyaboutpagedata.json";

//importing subcomponenets
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";

const FullBodyAboutPage = dynamic(() =>
  import("../components/pagecomponents/aboutpagecomps/fullbodyaboutpage")
);

export const metadata = {
  title: "About Us | FGK Back Office Services",
  description:
    "Learn more about FGK Back Office Services – our mission, values, team, and our commitment to providing reliable business support solutions tailored for global success.",
  keywords: [
    "About FGK Back Office Services",
    "Back Office Experts",
    "Business Support Team",
    "FGK Pakistan",
    "Meet the Team",
    "Business Process Outsourcing Islamabad",
    "Outsourcing Company Overview",
    "Professional Support Services",
    "Back Office Operations",
    "Company Values and Mission",
  ],
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/about",
  },
  openGraph: {
    title: "About Us | FGK Back Office Services",
    description:
      "Discover who we are at FGK Back Office Services and what drives our dedication to exceptional business support solutions.",
    url: "https://www.fgkbackoffice.com/about",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/about-page-preview.webp", // make sure this image exists
        width: 1200,
        height: 630,
        alt: "About FGK Back Office Services",
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
    title: "About Us | FGK Back Office Services",
    description:
      "Get to know FGK Back Office Services – our purpose, approach, and the team behind our success.",
    images: ["/images/about-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function About() {
  return (
    <>
      <Script
        id="jsonld-about"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.fgkbackoffice.com/about",
            url: "https://www.fgkbackoffice.com/about",
            name: "About Us | FGK Back Office Services",
            description:
              "Learn more about FGK Back Office Services – our mission, values, team, and our commitment to providing reliable business support solutions tailored for global success.",
            inLanguage: "en",
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
              sameAs: [
                "https://www.linkedin.com/company/fgkbackoffice/",
                "https://www.instagram.com/fgkbackoffice",
                "https://www.facebook.com/fgkbackoffice",
              ],
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.fgkbackoffice.com/images/about-page-preview.webp",
              width: 1200,
              height: 630,
              caption: "About FGK Back Office Services",
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
                  name: "About",
                  item: "https://www.fgkbackoffice.com/about",
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
      <FullBodyAboutPage
        companylogo={aboutdata.companylogo}
        topdescriptionparaone={aboutdata.topdescriptionparaone}
        topdescriptionparatwo={aboutdata.topdescriptionparatwo}
        topdescriptionparathree={aboutdata.topdescriptionparathree}
        middlesectionparaone={aboutdata.middlesectionparaone}
        middlesectionparatwo={aboutdata.middlesectionparatwo}
        lastsectionparaone={aboutdata.lastsectionparaone}
        aboutimageone={aboutdata.aboutimageone}
        aboutimagetwo={aboutdata.aboutimagetwo}
        aboutimagethree={aboutdata.aboutimagethree}
        aboutgridfullimage={aboutdata.aboutgridfullimage}
      />
    </>
  );
}
