import Image from "next/image";

export default function HomepageBenefitsLeftyImageContainer() {
  return (
    <div className="homepage-left-section-image-container">
      <Image
        src="/homepage_left_section.png"
        width={240}
        height={240}
        className="homepage-benefits-left-image"
        alt="benefits-image"
      />
    </div>
  );
}
