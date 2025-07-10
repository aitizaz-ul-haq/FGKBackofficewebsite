import Image from "next/image";

export default function ChooseUsRightSection() {
  return (
    <div className="chooseus-right-section">
      <Image
        src="https://i.postimg.cc/2STLT3sQ/our-motto.webp"
        width={550}
        height={550}
        className="our-motto-img"
        alt="our motto image"
      />
    </div>
  );
}
