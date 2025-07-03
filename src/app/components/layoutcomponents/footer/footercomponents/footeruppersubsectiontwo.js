import Link from "next/link";

export default function FooterUpperSubsectionTwo() {
  return (
    <div className="footer-upper-subsection-two">
      <div className="services-listing">
        <ul className="footer-list-main font-inter">
          <li className="footer-list-title">Services</li>
          <Link
            href="/services/datamanagement"
            className="footer-list-item text-light"
            title="Connect with us now"
          >
            <li className="footer-list-item text-light">Data Management</li>
          </Link>

          <Link
            href="/services/webdevelopment"
            className="footer-list-item text-light"
            title="Connect with us now"
          >
            <li className="footer-list-item text-light">Web Development</li>
          </Link>

          <Link
            href="/services/operationssupport"
            className="footer-list-item text-light"
            title="Connect with us now"
          >
            <li className="footer-list-item text-light">Operations Support</li>
          </Link>

          <Link
            href="/services/projectmanagement"
            className="footer-list-item text-light"
            title="Connect with us now"
          >
            <li className="footer-list-item text-light">Project Management</li>
          </Link>

          <Link
            href="/services/accountingandreporting"
            className="footer-list-item text-light"
            title="Connect with us now"
          >
            <li className="footer-list-item text-light">
              Accounting & Reporting
            </li>
          </Link>
        </ul>
      </div>
    </div>
  );
}
