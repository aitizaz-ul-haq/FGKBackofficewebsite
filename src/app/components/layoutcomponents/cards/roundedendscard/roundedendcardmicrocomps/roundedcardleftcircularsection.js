import Image from "next/image";

export default function RoundedCardLeftCircularSection({ source, cardtitle }) {
  return (
    <div className="left-circular-section">
      <Image
        src={source}
        alt={`${cardtitle} circular icon`}
        width={410}
        height={410}
        className="teampageteamcard-main-image"
      />
    </div>
  );
}
