import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import ContactsPageBody from "../components/pagecomponents/contactspagecomps/contactspagebody";
import testdata from "../data/contact/contactherodata.json";

export default function Contact() {
  return (
    <>
      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        mobileImage={testdata.mobileImage}
        desktopImage={testdata.desktopImage}
      />

      <ContactsPageBody />
    </>
  );
}
