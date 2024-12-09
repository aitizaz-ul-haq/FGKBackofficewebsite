import "./styles/contactspagebody.css";
import Image from "next/image";

export default function ContactsPageBody() {
  return (
    <>
      <div className="contacts-content-container">
        <div className="contacts-page-top-section">
          <div className="contacts-left-logo-section">
            <Image
              src="/fgk_circular_logo.png"
              alt="FGK logo"
              width={200}
              height={200}
              className="contacts-page-fgk-logo"
            />
          </div>
          <div className="contacts-right-instructions-section">
            <div className="contacts-instructions-heading font-roboto-sarif text-light">
              Contact Form Instructions
            </div>
            <div className="contacts-page-instructions-list font-inter text-light">
              <ul className="contacts-page-list">
                <li className="contacts-page-list-element font-inter text-light">
                  simply dummy text of the printing and typesetting industry.
                  simply dummy text of the printing and typesetting industry.
                </li>
                <li className="contacts-page-list-element font-inter text-light">
                  simply dummy text of the printing and typesetting industry.
                  simply dummy text of the printing and typesetting industry.
                </li>
                <li className="contacts-page-list-element font-inter text-light">
                  simply dummy text of the printing and typesetting industry.
                  simply dummy text of the printing and typesetting industry.
                </li>
                <li className="contacts-page-list-element font-inter text-light">
                  simply dummy text of the printing and typesetting industry.
                  simply dummy text of the printing and typesetting industry.
                </li>
                <li className="contacts-page-list-element font-inter text-light">
                  simply dummy text of the printing and typesetting industry.
                  simply dummy text of the printing and typesetting industry.
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
