import Image from "next/image";

export default function BenefitsRowImageSection() {
  return (
    <div className="benefits-icon-box">
      <Image
        src="https://i.postimg.cc/q7F7NKK7/services-benefits-icon.webp"
        alt="services benefit"
        width={40}
        height={40}
        className="services-benefits-icon"
      />
    </div>
  );
}
