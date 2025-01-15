import "./subpageherosection.css";

export default function SubPageHeroSection({ data }) {
  return (
    <div
      className="subpagehero-section"
      style={{
        "--background-desktop": `url(${data.desktopImage})`,
        "--background-mobile": `url(${data.mobileImage})`,
      }}
    >
      <div className="subpagehero-content">
        <h1 className="subpagehero-title font-inter text-extralight">
          {data.title}
        </h1>
        <div className="subpagehero-paragraph-container">
          <p className="subpagehero-paragraph font-inter text-extralight">
            {data.paragraph}
          </p>
        </div>
        <div className="subpagehero-button-container">
          <div className="subpagehero-button font-inter text-extralight">
            Get Expert Help
          </div>
        </div>
      </div>
    </div>
  );
}
