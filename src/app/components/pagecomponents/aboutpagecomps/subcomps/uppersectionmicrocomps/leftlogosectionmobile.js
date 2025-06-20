import Image from "next/image";

export default function LeftLogoSectionMobile({ companylogo }) {
  return (
    <div className="left-logo-section-mobile">
      <Image
        src={companylogo}
        alt="FGK logo"
        width={180}
        height={180}
        className="fgk-logo-about-mobile"
      />
    </div>
  );
}
