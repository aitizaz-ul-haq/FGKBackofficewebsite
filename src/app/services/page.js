import dynamic from "next/dynamic";
import Script from "next/script";

// importing services page data
import testdata from "../data/services/servicesherodata.json";

// importing services page subcomponents
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";

const ImportSection = dynamic(() =>
  import("../components/pagecomponents/servicespagecomps/importancesection")
);

const RoundedCardsSection = dynamic(() =>
  import("../components/pagecomponents/servicespagecomps/roundedcardsection")
);

const ServicesBenefitsSection = dynamic(() =>
  import(
    "../components/pagecomponents/servicespagecomps/servicesbenefitssection"
  )
);

const TrustedBySection = dynamic(() =>
  import("../components/pagecomponents/servicespagecomps/trustedbysection")
);
// import ServicesReviewsSection from "../components/pagecomponents/servicespagecomps/servicesreviewssection";
// import reviewerdata from "../data/services/reviewsdata.json";

export const metadata = {
  title: "Our Services | FGK Back Office Services",
  description:
    "Explore our professional services including Web Development, Operations Support, Accounting & Reporting, Project Management, and Data Management – tailored for your business success.",
  keywords: [
    "FGK Back Office Services",
    "Business Outsourcing",
    "Web Development Pakistan",
    "Next Developers Islamabad",
    "Accounting and Reporting Services",
    "Project Management Outsourcing",
    "Data Management Solutions",
    "Operations Support Pakistan",
    "Payroll and Finance Services",
    "Back Office Services Islamabad",
    "Custom Software Development",
    "Islamabad BPO Company",
    "Outsourcing Company in Pakistan",
    "Financial Compliance Services",
    "Book Keeping Support Services",
  ],
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/services",
  },
  openGraph: {
    title: "Our Services | FGK Back Office Services",
    description:
      "Discover how FGK Back Office Services empowers businesses through expert back office solutions tailored to your needs.",
    url: "https://www.fgkbackoffice.com/services",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/services-page-preview.webp",
        width: 1200,
        height: 630,
        alt: "FGK Back Office Services Website Services Page Preview",
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
    title: "Our Services | FGK Back Office Services",
    description:
      "Professional business support services including web development, operations support, accounting and finance and project management.",
    images: ["/images/services-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Services() {
  return (
    <>
      <Script
        id="jsonld-services-overview"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "WebPage",
            "@id": "https://www.fgkbackoffice.com/services",
            url: "https://www.fgkbackoffice.com/services",
            name: "Our Services | FGK Back Office Services",
            description:
              "Explore our professional services including Web Development, Operations Support, Accounting & Reporting, Project Management, and Data Management – tailored for your business success.",
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
            },
            primaryImageOfPage: {
              "@type": "ImageObject",
              url: "https://www.fgkbackoffice.com/images/services-page-preview.webp",
              width: 1200,
              height: 630,
              caption: "FGK Services Page Preview",
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
                  name: "Services",
                  item: "https://www.fgkbackoffice.com/services",
                },
              ],
            },
            mainEntity: {
              "@type": "ItemList",
              name: "FGK Service Categories",
              itemListElement: [
                {
                  "@type": "ListItem",
                  position: 1,
                  url: "https://www.fgkbackoffice.com/services/webdevelopment",
                  name: "Web Development",
                },
                {
                  "@type": "ListItem",
                  position: 2,
                  url: "https://www.fgkbackoffice.com/services/accountingandreporting",
                  name: "Accounting & Reporting",
                },
                {
                  "@type": "ListItem",
                  position: 3,
                  url: "https://www.fgkbackoffice.com/services/operationssupport",
                  name: "Operations Support",
                },
                {
                  "@type": "ListItem",
                  position: 4,
                  url: "https://www.fgkbackoffice.com/services/projectmanagement",
                  name: "Project Management",
                },
                {
                  "@type": "ListItem",
                  position: 5,
                  url: "https://www.fgkbackoffice.com/services/datamanagement",
                  name: "Data Management",
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
      <ImportSection />
      <RoundedCardsSection />
      <ServicesBenefitsSection />
      <TrustedBySection />
      {/* <ServicesReviewsSection
        reviewerone={reviewerdata.reviewerone}
        designationone={reviewerdata.designationone}
        descriptionone={reviewerdata.descriptionone}
        reviewertwo={reviewerdata.reviewertwo}
        designationtwo={reviewerdata.designationtwo}
        descriptiontwo={reviewerdata.descriptiontwo}
        reviewerthree={reviewerdata.reviewerthree}
        designationthree={reviewerdata.designationthree}
        descriptionthree={reviewerdata.descriptionthree}
      /> */}
    </>
  );
}
