import Image from "next/image";

export default function ImageGrid({ aboutgridfullimage }) {
  return (
    <div className="aboutpage-grid-container">
      <div className="left-grid-image-section">
        <Image
          src={aboutgridfullimage}
          alt="FGK logo"
          width={720}
          height={370}
          className="grid-images"
        />
      </div>
    </div>
  );
}
