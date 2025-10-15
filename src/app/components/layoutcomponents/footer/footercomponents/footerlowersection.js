import Link from "next/link";

export default function FooterLowerSection() {
  return (
    <div className="footer-lowersection">
      <div className="rights-container-section">
        <p className="footer-rights-line font-inter text-light">
          <Link
            href="/privacypolicy"
            className="footer-rights-line"
            title="See our Privacy policy and Disclaimer"
          >
            ©All Rights Reserved 2025 Policy Privacy Notice
          </Link>
        </p>
      </div>
      <div className="backtotop-button-section"></div>
    </div>
  );
}
