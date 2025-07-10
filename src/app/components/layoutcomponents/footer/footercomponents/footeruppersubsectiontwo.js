import Link from "next/link";

export default function FooterUpperSubsectionTwo() {
  return (
    <div className="footer-upper-subsection-two">
      <div className="services-listing">
        <ul className="footer-list-main font-inter">
          <li className="footer-list-title">Services</li>

          <li className="footer-list-item text-light">
            <Link
              href="/services/datamanagement"
              className="footer-list-item text-light"
              title="Connect with us now"
            >
              Data Management{" "}
            </Link>
          </li>

          <li className="footer-list-item text-light">
            {" "}
            <Link
              href="/services/webdevelopment"
              className="footer-list-item text-light"
              title="Connect with us now"
            >
              Web Development
            </Link>
          </li>

          <li className="footer-list-item text-light">
            {" "}
            <Link
              href="/services/operationssupport"
              className="footer-list-item text-light"
              title="Connect with us now"
            >
              Operations Support
            </Link>
          </li>

          <li className="footer-list-item text-light">
            {" "}
            <Link
              href="/services/projectmanagement"
              className="footer-list-item text-light"
              title="Connect with us now"
            >
              Project Management
            </Link>
          </li>

          <li className="footer-list-item text-light">
            <Link
              href="/services/accountingandreporting"
              className="footer-list-item text-light"
              title="Connect with us now"
            >
              {" "}
              Accounting & Reporting
            </Link>
          </li>
        </ul>
      </div>
    </div>
  );
}
