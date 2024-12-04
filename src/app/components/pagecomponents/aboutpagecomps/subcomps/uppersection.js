import Image from "next/image";

export default function UpperSection({
  companylogo,
  topdescriptionparaone,
  topdescriptionparatwo,
}) {
  return (
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
  );
}
