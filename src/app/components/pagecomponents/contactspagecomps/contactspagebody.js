import "./styles/contactspagebody.css";
import Image from "next/image";

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
        <div className="contacts-page-top-section">
          <div className="contacts-left-logo-section">
            <Image
              src={contactspagelogo}
              alt="FGK logo"
              width={200}
              height={200}
              className="contacts-page-fgk-logo"
            />
          </div>
          <div className="contacts-right-instructions-section">
            <div className="contacts-instructions-heading font-roboto-sarif text-light">
              {contactsheading}
            </div>
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
          </div>
        </div>
        <div className="contacts-page-bottom-section">
          <div className="contacts-page-contact-form-container">
            <div className="contacts-page-form"></div>
          </div>
        </div>
      </div>
    </>
  );
}
