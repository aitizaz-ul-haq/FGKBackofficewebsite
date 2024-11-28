import FooterSocialMediaSection from "./footersocialmediasection";

export default function FooterUpperSubSectionFour() {
  return (
    <div className="footer-upper-subsection-four">
      <div className="contact-socialmedia-listing">
        <ul className="footer-list-main  font-inter">
          <li className="footer-list-title">Contacts</li>
          <li className="footer-list-item text-light">hr@fgkbackoffice.com</li>
          <li className="footer-list-item">
            <FooterSocialMediaSection />
          </li>
        </ul>
      </div>
    </div>
  );
}
