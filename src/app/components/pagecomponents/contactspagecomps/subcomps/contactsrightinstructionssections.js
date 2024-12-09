import ContactsHeadingSection from "./contactsheadingsections";
import ContactsInstructionsList from "./contactsinstructionslist";

export default function ContactsRightInstructionsSection({
  contactsheading,
  instructionone,
  instructiontwo,
  instructionthree,
  instructionfour,
  instructionfive,
}) {
  return (
    <>
      <div className="contacts-right-instructions-section">
        <ContactsHeadingSection contactsheading={contactsheading} />
        <ContactsInstructionsList
          instructionone={instructionone}
          instructiontwo={instructiontwo}
          instructionthree={instructionthree}
          instructionfour={instructionfour}
          instructionfive={instructionfive}
        />
      </div>
    </>
  );
}
