import Image from "next/image";
import Link from "next/link";

export default function HeroButtonComp({mainhint}) {
    return(
        <div className="hero-button-container">
          <Link href="/contact" className="linkage" title={mainhint}>
          <div className="hero-button font-inter text-extralight">
            Get Expert Help
            <Image
              src="/images/right-icon-hero.webp"
              width={37}
              height={37}
              className="right-hero-icon"
              alt="hero section button arrow"
            />
          </div>
          </Link>
        </div>
    );
}