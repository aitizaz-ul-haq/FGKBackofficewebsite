import Image from "next/image";

export default function HomepageBenefitsLeftyImageContainer() {
  return (
    <div className="homepage-left-section-image-container">
      <Image
        src="https://i.postimg.cc/B6SZXCYH/homepage-left-section.webp"
        width={240}
        height={240}
        className="homepage-benefits-left-image"
        alt="benefits-image"
      />
    </div>
  );
}
