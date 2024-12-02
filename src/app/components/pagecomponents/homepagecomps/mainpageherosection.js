import "./styles/mainpageherosection.css";
import herodata from "./data/herosection.json";

export default function MainPageHeroSection({ title, paragraph }) {
  return (
    <div
      className="main-page-hero-section"
      // style={{
      //   backgroundImage: `url('/main-hero.png')`,
      // }}
    >
      <div className="main-page-hero-content">
        <h1 className="main-page-hero-title font-roboto-serif text-extralight">
          {herodata.title}
        </h1>
        <p className="main-page-hero-paragraph font-inter text-extralight">
          {herodata.paragraph}
        </p>
      </div>
    </div>
  );
}
