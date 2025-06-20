import Image from "next/image";

export default function IndustriesCardLeftSection({ cardicon }) {
  return (
    <div className="industriescard-leftsection">
      <Image
        src={cardicon}
        alt="card icon"
        width={250}
        height={250}
        className="industriescard-left-image"
      />
    </div>
  );
}
