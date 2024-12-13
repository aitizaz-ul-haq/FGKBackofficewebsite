import Image from "next/image";

export default function HomepageIndustriesCardCircularIcon({ inddata }) {
  return (
    <div className="homepage-industriescard-circular-icon-container">
      <Image
        src={inddata.cardicon}
        width={123}
        height={123}
        className="homepage-industriescard-circular-icon"
      />
    </div>
  );
}
