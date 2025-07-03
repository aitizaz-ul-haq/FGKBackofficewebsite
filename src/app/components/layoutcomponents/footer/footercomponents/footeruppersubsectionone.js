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
          // href="https://www.google.com/maps/place/33.6676645,73.0745194/@33.6676645,73.0745194,18z"
          href="https://www.google.com/maps/place/Pakland+Vista/@33.6676661,73.0728132,18z/data=!4m7!3m6!1s0x38df954370c0617b:0x88947e846dd351fb!4b1!8m2!3d33.6676645!4d73.0745194!16s%2Fg%2F11sh298324?entry=ttu&g_ep=EgoyMDI1MDYzMC4wIKXMDSoASAFQAw%3D%3D"
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
