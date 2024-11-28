import Image from "next/image";
import Link from "next/link";

export default function FooterUpperSubSectionOne() {
  return (
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
  );
}
