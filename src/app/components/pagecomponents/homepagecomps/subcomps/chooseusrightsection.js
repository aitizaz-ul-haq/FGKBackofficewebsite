import Image from "next/image";

export default function ChooseUsRightSection() {
  return (
    <div className="chooseus-right-section">
      <div className="our-motto-wrapper">
        <Image
          src="https://i.postimg.cc/2STLT3sQ/our-motto.webp"
          alt="our motto image"
          className="our-motto-img"
          fill
          sizes="(max-width: 768px) 90vw, 50vw"
        />
      </div>
    </div>
  );
}
