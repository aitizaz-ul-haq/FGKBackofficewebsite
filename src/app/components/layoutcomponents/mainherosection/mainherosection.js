import "./mainherosection.css";

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
        backgroundImage: `url('/Hero_Background.png')`,
        "--mobile-image": `url(${mobileImage})`,
        "--desktop-image": `url(${desktopImage})`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title font-roboto-serif text-extralight">
          {title}
        </h1>
        <p className="hero-paragraph font-inter text-extralight">{paragraph}</p>
      </div>

      <div className="forward-image-container">
        <div className="forward-image"></div>
      </div>
    </div>
  );
}
