import Image from "next/image";

export default function HomepageBenefitsRightyImageContainer() {
  return (
    <div className="homepage-right-section-image-container">
      <Image
        src="/homepage_right_section.png"
        width={240}
        height={240}
        className="homepage-benefits-left-image"
        alt="benefits-image"
      />
    </div>
  );
}