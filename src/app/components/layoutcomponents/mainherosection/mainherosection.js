import "./mainherosection.css";
import Image from "next/image";

// components/HeroSection.js
export default function MainHeroSection({
  title,
  paragraph,
  mobileImage,
  desktopImage,
}) {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url('/services_hero_background.png')`,
        "--mobile-image": `url(${mobileImage})`,
        "--desktop-image": `url(${desktopImage})`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title font-inter text-extralight">{title}</h1>
        <div className="hero-paragraph-container">
          <p className="hero-paragraph font-inter text-extralight">
            {paragraph}
          </p>
        </div>
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
      </div>
    </div>
  );
}
