// importing sub componenets
import ContactsLeftLogoSection from "./contactsleftlogosection";
import ContactsRightInstructionsSection from "./contactsrightinstructionssections";

export default function ContactsTopSection({
  contactsheading,
  contactspagelogo,
  instructionone,
  instructiontwo,
  instructionthree,
  instructionfour,
  instructionfive,
}) {
  return (
    <div className="contacts-page-top-section">
      <ContactsLeftLogoSection contactspagelogo={contactspagelogo} />
      <ContactsRightInstructionsSection
        contactsheading={contactsheading}
        instructionone={instructionone}
        instructiontwo={instructiontwo}
        instructionthree={instructionthree}
        instructionfour={instructionfour}
        instructionfive={instructionfive}
      />
    </div>
  );
}
