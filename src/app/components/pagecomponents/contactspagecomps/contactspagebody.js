import "./styles/contactspagebody.css";

import ContactsTopSection from "./subcomps/contactstopsection";

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
        <div className="contacts-page-bottom-section">
          <div className="contacts-page-contact-form-container">
            <div className="contacts-page-form"></div>
          </div>
        </div>
      </div>
    </>
  );
}
