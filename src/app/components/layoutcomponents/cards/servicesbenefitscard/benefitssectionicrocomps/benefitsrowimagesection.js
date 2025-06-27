import Image from "next/image";

export default function BenefitsRowImageSection() {
  return (
    <div className="benefits-icon-box">
      <Image
        src="/images/services_benefits_icon.webp"
        alt="services benefit"
        width={40}
        height={40}
        className="services-benefits-icon"
      />
    </div>
  );
}
