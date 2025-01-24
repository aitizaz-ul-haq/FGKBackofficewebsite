export default function ContactsInstructionsList({
  instructionone,
  instructiontwo,
  instructionthree,
  instructionfour,
  instructionfive,
}) {
  return (
    <div className="contacts-page-instructions-list font-inter text-light">
      <ul className="contacts-page-list">
        <li className="contacts-page-list-element font-inter text-light">
          {instructionone}
        </li>
        <li className="contacts-page-list-element font-inter text-light">
          {instructiontwo}
        </li>
        <li className="contacts-page-list-element font-inter text-light">
          {instructionthree}
        </li>
        <li className="contacts-page-list-element font-inter text-light">
          {instructionfour}
        </li>
        <li className="contacts-page-list-element font-inter text-light">
          {instructionfive}
        </li>
      </ul>
    </div>
  );
}
