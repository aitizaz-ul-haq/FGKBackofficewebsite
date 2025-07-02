import FooterSocialMediaSection from "./footersocialmediasection";
import Link from "next/link";

export default function FooterUpperSubSectionFour() {
  return (
    <div className="footer-upper-subsection-four">
      <div className="contact-socialmedia-listing">
        <ul className="footer-list-main  font-inter">
          <li className="footer-list-title">Contact Us</li>
          <li className="footer-list-item text-light">hr@fgkbackoffice.com</li>
          <li className="footer-list-item text-light">
            <Link href="/privacypolicy" className="text-light">
              Privacy Policy
            </Link>
          </li>
          <li className="footer-list-item">
            <FooterSocialMediaSection />
          </li>
        </ul>
      </div>
    </div>
  );
}
