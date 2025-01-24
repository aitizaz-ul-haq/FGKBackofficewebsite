//importing sub componenets
import ContactsTopSection from "./subcomps/contactstopsection";
import ContactsPageBottomSection from "./subcomps/contactspagebottomsection";

// importing style files
import "./styles/contactspagebody.css";

export default function ContactsPageBody({
  contactsheading,
  contactspagelogo,
  instructionone,
  instructiontwo,
  instructionthree,
  instructionfour,
  instructionfive,
}) {
  return (
    <div className="contacts-content-container">
      <ContactsTopSection
        contactsheading={contactsheading}
        contactspagelogo={contactspagelogo}
        instructionone={instructionone}
        instructiontwo={instructiontwo}
        instructionthree={instructionthree}
        instructionfour={instructionfour}
        instructionfive={instructionfive}
      />
      <ContactsPageBottomSection />
    </div>
  );
}
