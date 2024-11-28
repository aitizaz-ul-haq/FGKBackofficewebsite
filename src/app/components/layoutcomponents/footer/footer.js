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
              <p className="footer-address font-inter text-light">
                Office no 212, 213 Pakland VISTA, I-8 Markaz Islamabad.
              </p>
            </div>
            <div className="footer-upper-subsection-two">
              <div className="services-listing">
                <ul className="footer-list-main font-inter">
                  <li className="footer-list-title">Services</li>
                  <li className="footer-list-item text-light">
                    Data Management
                  </li>
                  <li className="footer-list-item text-light">
                    Web Development
                  </li>
                  <li className="footer-list-item text-light">
                    Human Resources
                  </li>
                  <li className="footer-list-item text-light">
                    Operations Support
                  </li>
                  <li className="footer-list-item text-light">
                    Project Management
                  </li>
                  <li className="footer-list-item text-light">
                    Accounting & Reporting
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-upper-subsection-three">
              <div className="industries-listing">
                <ul className="footer-list-main font-inter">
                  <li className="footer-list-title">Industries</li>
                  <li className="footer-list-item text-light">Fintech</li>
                  <li className="footer-list-item text-light">Insurance</li>
                  <li className="footer-list-item text-light">Tech Support</li>
                  <li className="footer-list-item text-light">
                    Financial Services
                  </li>
                  <li className="footer-list-item text-light">
                    Accountancy & Finance
                  </li>
                </ul>
              </div>
            </div>
            <div className="footer-upper-subsection-four">
              <div className="contact-socialmedia-listing">
                <ul className="footer-list-main  font-inter">
                  <li className="footer-list-title">Contacts</li>
                  <li className="footer-list-item text-light">
                    hr@fgkbackoffice.com
                  </li>
                  <li className="footer-list-item">
                    <div className="social-media-button-container button-group">
                      <Link href="/">
                        <Image
                          src="/youtube.png"
                          alt="FGK logo"
                          width={40}
                          height={40}
                          className="footer-social-icon"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          src="/facebook.png"
                          alt="FGK logo"
                          width={40}
                          height={40}
                          className="footer-social-icon"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          src="/x.png"
                          alt="FGK logo"
                          width={40}
                          height={40}
                          className="footer-social-icon"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          src="/linkdin.png"
                          alt="FGK logo"
                          width={40}
                          height={40}
                          className="footer-social-icon"
                        />
                      </Link>
                      <Link href="/">
                        <Image
                          src="/instagram.png"
                          alt="FGK logo"
                          width={40}
                          height={40}
                          className="footer-social-icon"
                        />
                      </Link>
                    </div>
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="footer-line"></div>
          <div className="footer-lowersection">
            <div className="rights-container-section">
              <p className="footer-rights-line font-inter text-light">
                ©All Rights Reserved 2024 Cookies Policy Privacy Notice
              </p>
            </div>
            <div className="backtotop-button-section"></div>
          </div>
        </div>
      </div>
    </>
  );
}
