// importing subcomponents
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import ContactsPageBody from "../components/pagecomponents/contactspagecomps/contactspagebody";

// importing component data
import testdata from "../data/contact/contactherodata.json";
import contactspagedata from "../components/pagecomponents/contactspagecomps/data/contactspagedate.json";

export const metadata = {
  title: "Get in Touch | FGK Back Office Services",
  description:
    "Connect with FGK Back Office Services for business enquiries, support, or partnership opportunities. Our team is ready to assist you.",
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
  metadataBase: new URL("https://www.fgkbackoffice.com"),
  alternates: {
    canonical: "https://www.fgkbackoffice.com/contact",
  },
  openGraph: {
    title: "Get in Touch | FGK Back Office Services",
    description:
      "Looking to collaborate or learn more about our services? Reach out to FGK Back Office Services today.",
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
      "Have a question or proposal? Contact FGK Back Office Services – we're here to help.",
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
