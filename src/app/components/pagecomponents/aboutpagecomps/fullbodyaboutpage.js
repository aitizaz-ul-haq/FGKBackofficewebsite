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
}) {
  return (
    <div className="aboutpagecontent-container">
      {/* upper section */}
      <div className="aboutpagecontaent-logo-introsection">
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
            src={aboutimageone}
            alt="FGK logo"
            width={500}
            height={370}
            className="fgk-logo-about"
          />
        </div>
        <div className="right-grid-image-section">
          <div className="grid-right-top-section">
            <Image
              src={aboutimagetwo}
              alt="FGK logo"
              width={260}
              height={185}
              className="fgk-logo-about"
            />
          </div>
          <div className="grid-right-bottom-section">
            <Image
              src={aboutimagethree}
              alt="FGK logo"
              width={260}
              height={185}
              className="fgk-logo-about"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
