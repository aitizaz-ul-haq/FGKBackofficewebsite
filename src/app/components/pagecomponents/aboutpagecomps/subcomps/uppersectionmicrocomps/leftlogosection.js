import Image from "next/image";

export default function LeftLogoSection({ companylogo }) {
  return (
    <div className="left-logo-section">
      <Image
        src={companylogo}
        alt="FGK logo"
        width={380}
        height={380}
        className="fgk-logo-about"
      />
    </div>
  );
}
