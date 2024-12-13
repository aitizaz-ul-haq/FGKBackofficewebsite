import Image from "next/image";

export default function HomepageIndustriesCardCircularIcon({ cardicon }) {
  return (
    <div className="homepage-industriescard-circular-icon-container">
      <Image
        src={cardicon}
        width={123}
        height={123}
        className="homepage-industriescard-circular-icon"
      />
    </div>
  );
}
