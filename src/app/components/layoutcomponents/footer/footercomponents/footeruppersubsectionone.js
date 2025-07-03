import Image from "next/image";
import Link from "next/link";

export default function FooterUpperSubSectionOne() {
  return (
    <div className="footer-upper-subsection-one">
      <div className="footer-logo-container">
        <Link href="/">
          <Image
            src="/images/fgk_letter_logo.webp"
            alt="FGK logo"
            width={205}
            height={35}
          />
        </Link>
      </div>

      <p className="footer-address font-inter text-light">
        <a
          href="https://www.google.com/maps/place/33.6676645,73.0745194/@33.6676645,73.0745194,18z"
          target="_blank"
          rel="noopener noreferrer"
          title="View our office location on Google Maps"
          className="footer-address font-inter text-light"
        >
          Office no 212 Pakland VISTA, I-8 Markaz Islamabad.
        </a>
      </p>
    </div>
  );
}
