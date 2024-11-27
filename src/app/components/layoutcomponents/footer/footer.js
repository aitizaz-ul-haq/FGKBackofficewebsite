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
            </div>
            <div className="footer-upper-subsection-two">
              <div className="services-listing"></div>
            </div>
            <div className="footer-upper-subsection-three">
              <div className="industries-listing"></div>
            </div>
            <div className="footer-upper-subsection-four">
              <div className="contact-socialmedia-listing"></div>
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
