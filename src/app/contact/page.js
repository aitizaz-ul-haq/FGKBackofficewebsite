import dynamic from "next/dynamic";
import Script from "next/script";

// importing component data
import testdata from "../data/contact/contactherodata.json";
import contactspagedata from "../components/pagecomponents/contactspagecomps/data/contactspagedate.json";

import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";

const ContactsPageBody = dynamic(() =>
  import("../components/pagecomponents/contactspagecomps/contactspagebody")
);

export const metadata = {
  title: "Get in Touch | FGK Back Office Services",
  description:
    "Contact FGK Back Office Services for business enquiries, partnership proposals, or customer support. Whether you're a potential client, collaborator, or stakeholder, our professional team is ready to assist you with timely and tailored responses.",
  keywords: [
    "Contact FGK",
    "Get in Touch",
    "FGK Back Office Services Contact",
    "Outsourcing Support Contact",
    "Business Enquiry FGK",
    "Customer Service FGK",
    "Contact Back Office Pakistan",
    "Islamabad Business Services",
    "Connect with FGK",
    "FGK Contact Details",
  ],
  authors: [
    { name: "FGK Back Office Services", url: "https://www.fgkbackoffice.com" },
  ],
  creator: "FGK Back Office Services",
  publisher: "FGK Back Office Services",
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/contact",
  },
  openGraph: {
    title: "Get in Touch | FGK Back Office Services",
    description:
      "Contact FGK Back Office Services for business enquiries, partnership proposals, or customer support. Whether you're a potential client, collaborator, or stakeholder, our professional team is ready to assist you with timely and tailored responses.",
    url: "https://www.fgkbackoffice.com/contact",
    siteName: "FGK Back Office Services",
    images: [
      {
        url: "/images/contact-page-preview.webp", // Ensure this image exists
        width: 1200,
        height: 630,
        alt: "Contact FGK Back Office Services",
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
    title: "Get in Touch | FGK Back Office Services",
    description:
      "Contact FGK Back Office Services for business enquiries, partnership proposals, or customer support. Whether you're a potential client, collaborator, or stakeholder, our professional team is ready to assist you with timely and tailored responses.",
    images: ["/images/contact-page-preview.webp"],
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
  },
};

export default function Contact() {
  return (
    <>
      <Script
        id="jsonld-contact-page"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "ContactPage",
            "@id": "https://www.fgkbackoffice.com/contact",
            url: "https://www.fgkbackoffice.com/contact",
            name: "Get in Touch | FGK Back Office Services",
            description:
              "Contact FGK Back Office Services for business enquiries, partnership proposals, or customer support. Whether you're a potential client, collaborator, or stakeholder, our professional team is ready to assist you with timely and tailored responses.",
            inLanguage: "en",
            datePublished: "2024-10-25",
            dateModified: "2025-07-09",
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
              url: "https://www.fgkbackoffice.com/images/contact-page-preview.webp",
              width: 1200,
              height: 630,
              caption: "Contact FGK Back Office Services",
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
                  name: "Contact",
                  item: "https://www.fgkbackoffice.com/contact",
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
      <ContactsPageBody
        contactsheading={contactspagedata.contactsheading}
        contactspagelogo={contactspagedata.contactspagelogo}
        instructionone={contactspagedata.instructionone}
        instructiontwo={contactspagedata.instructiontwo}
        instructionthree={contactspagedata.instructionthree}
        instructionfour={contactspagedata.instructionfour}
        instructionfive={contactspagedata.instructionfive}
      />
    </>
  );
}
