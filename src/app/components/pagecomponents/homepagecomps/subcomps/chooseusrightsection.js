import Image from "next/image";

export default function ChooseUsRightSection() {
  return (
    <div className="chooseus-right-section">
      <Image
        src="/our-motto.png"
        width={550}
        height={550}
        className="our-motto-img"
      />
    </div>
  );
}
