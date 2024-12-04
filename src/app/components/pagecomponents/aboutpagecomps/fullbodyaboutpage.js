import "./styles/fullbodyaboutpage.css";
import Image from "next/image";

export default function FullBodyAboutPage({
  companylogo,
  topdescriptionparaone,
  topdescriptionparatwo,
  middlesectionparaone,
  middlesectionparatwo,
  lastsectionparaone,
  aboutimageone,
  aboutimagetwo,
  aboutimagethree,
  aboutgridfullimage,
}) {
  return (
    <div className="aboutpagecontent-container">
      {/* upper section */}
      <div className="aboutpagecontaent-logo-introsection">
        <div className="left-logo-section-mobile">
          <Image
            src={companylogo}
            alt="FGK logo"
            width={180}
            height={180}
            className="fgk-logo-about-mobile"
          />
        </div>

        <div className="left-logo-section">
          <Image
            src={companylogo}
            alt="FGK logo"
            width={380}
            height={380}
            className="fgk-logo-about"
          />
        </div>
        <div className="right-intro-section">
          <h2 className="right-heading-section font-inter text-light">
            About Us
          </h2>
          <p className="right-description-section font-inter text-light">
            {topdescriptionparaone}
          </p>
          <p className="right-description-section font-inter text-light">
            {topdescriptionparatwo}
          </p>
        </div>
      </div>

      {/* middle section */}
      <div className="aboutpagecontent-middle-section">
        <p className="first-para font-inter text-light">
          {middlesectionparaone}
        </p>
        <p className="second-para font-inter text-light">
          {middlesectionparatwo}
        </p>
      </div>

      {/* last section */}
      <div className="aboutpagecontent-last-section">
        <p className="last-para font-inter text-light">{lastsectionparaone}</p>
      </div>

      {/* image grid */}
      <div className="aboutpage-grid-container">
        <div className="left-grid-image-section">
          <Image
            src={aboutgridfullimage}
            alt="FGK logo"
            width={720}
            height={370}
            className="grid-images"
          />
        </div>
      </div>

      {/* image grid mobile */}
      <div className="aboutpage-grid-container-mobile">
        <Image
          src={aboutimageone}
          alt="FGK logo"
          width={305}
          height={220}
          className="grid-images-mobile"
        />

        <Image
          src={aboutimagetwo}
          alt="FGK logo"
          width={305}
          height={220}
          className="grid-images-mobile"
        />

        <Image
          src={aboutimagethree}
          alt="FGK logo"
          width={305}
          height={220}
          className="grid-images-mobile"
        />
      </div>
    </div>
  );
}
