import "./mainherosection.css";

// components/HeroSection.js
export default function MainHeroSection({ title, paragraph, forwardImage }) {
  return (
    <div
      className="hero-section"
      style={{
        backgroundImage: `url('/Hero_Background.png')`,
      }}
    >
      <div className="hero-content">
        <h1 className="hero-title font-roboto-serif text-extralight">
          {title}
        </h1>
        <p className="hero-paragraph font-inter text-extralight">{paragraph}</p>
      </div>
      {forwardImage && (
        <div className="forward-image-container">
          <img
            src={forwardImage}
            alt="Hero related object"
            className="forward-image"
          />
        </div>
      )}
    </div>
  );
}
