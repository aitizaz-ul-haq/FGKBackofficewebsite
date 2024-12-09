import "./styles/contactspagebody.css";
import ContactsTopSection from "./subcomps/contactstopsection";
import ContactsPageBottomSection from "./subcomps/contactspagebottomsection";

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
    <>
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
    </>
  );
}
