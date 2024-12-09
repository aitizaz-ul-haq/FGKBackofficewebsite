import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import ContactsPageBody from "../components/pagecomponents/contactspagecomps/contactspagebody";
import testdata from "../data/contact/contactherodata.json";
import contactspagedata from "../components/pagecomponents/contactspagecomps/data/contactspagedate.json";

export default function Contact() {
  return (
    <>
      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        mobileImage={testdata.mobileImage}
        desktopImage={testdata.desktopImage}
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
