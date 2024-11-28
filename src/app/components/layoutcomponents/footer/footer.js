import Image from "next/image";
import Link from "next/link";
import "./footer.css";

export default function Footer() {
  return (
    <>
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-uppersection">
            <div className="footer-upper-subsection-one">
              <div className="footer-logo-container">
                <Link href="/">
                  <Image
                    src="/fgk_letter_logo.png"
                    alt="FGK logo"
                    width={205}
                    height={35}
                  />
                </Link>
              </div>
              <p className="footer-address font-inter">
                Office no 212, 213 Pakland VISTA, I-8 Markaz Islamabad.
              </p>
            </div>
            <div className="footer-upper-subsection-two">
              <div className="services-listing">
                <ul className="footer-list-main font-inter">
                  <li className="footer-list-title">Services</li>
                  <li className="footer-list-item">Data Management</li>
                  <li className="footer-list-item">Web Development</li>
                  <li className="footer-list-item">Human Resources</li>
                  <li className="footer-list-item">Operations Support</li>
                  <li className="footer-list-item">Project Management</li>
                  <li className="footer-list-item">Accounting & Reporting</li>
                </ul>
              </div>
            </div>
            <div className="footer-upper-subsection-three">
              <div className="industries-listing">
                <ul className="footer-list-main font-inter">
                  <li className="footer-list-title">Industries</li>
                  <li className="footer-list-item">Fintech</li>
                  <li className="footer-list-item">Insurance</li>
                  <li className="footer-list-item">Tech Support</li>
                  <li className="footer-list-item">Financial Services</li>
                  <li className="footer-list-item">Accountancy & Finance</li>
                </ul>
              </div>
            </div>
            <div className="footer-upper-subsection-four">
              <div className="contact-socialmedia-listing">
                <ul className="footer-list-main  font-inter">
                  <li className="footer-list-title">Contacts</li>
                  <li className="footer-list-item">hr@fgkbackoffice.com</li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-lowersection">
            <div className="rights-container-section"></div>
            <div className="backtotop-button-section"></div>
          </div>
        </div>
      </div>
    </>
  );
}
