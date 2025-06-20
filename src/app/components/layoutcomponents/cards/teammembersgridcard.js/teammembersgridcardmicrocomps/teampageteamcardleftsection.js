import Image from "next/image";

export default function TeamPageTeamCardLeftSection({ photo }) {
  return (
    <div className="teampageteamcard-leftsection">
      <Image
        src={photo}
        alt="card icon"
        width={550}
        height={350}
        className="teampageteamcard-left-image"
      />
    </div>
  );
}
