import Image from "next/image";

export default function HeroButtonComp() {
    return(
        <div className="hero-button-container">
          <div className="hero-button font-inter text-extralight">
            Get Expert Help
            <Image
              src="/right-icon-hero.png"
              width={37}
              height={37}
              className="right-hero-icon"
            />
          </div>
        </div>
    );
}