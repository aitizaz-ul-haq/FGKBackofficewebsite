import Link from "next/link";

export default function FooterUpperSubSectionThree() {
  return (
    <div className="footer-upper-subsection-three">
      <div className="industries-listing">
        <ul className="footer-list-main font-inter">
          <Link
            href="/contact"
            className="footer-list-item text-light"
            title="Connect with us now"
          >
            <li className="footer-list-title">Industries</li>
          </Link>
          <Link
            className="footer-list-item text-light"
            href="/industries#fintech"
            title="Explore Fintech industry services"
          >
            <li className="footer-list-item text-light">Fintech</li>
          </Link>
          <Link
            className="footer-list-item text-light"
            href="/industries#tech-support"
            title="View solutions for technology and IT support"
          >
            <li className="footer-list-item text-light">Tech Support</li>
          </Link>
          <Link
            className="footer-list-item text-light"
            href="/industries#financial-services"
            title="Learn about our financial service expertise"
          >
            <li className="footer-list-item text-light">Financial Services</li>
          </Link>
          <Link
            className="footer-list-item text-light"
            href="/industries#accountancy-finance"
            title="Discover our accountancy and finance offerings"
          >
            <li className="footer-list-item text-light">
              Accountancy & Finance
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
