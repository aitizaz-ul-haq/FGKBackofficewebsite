import Image from "next/image";

export default function TeamPageTeamCardLeftSection({ photo, width, height }) {
  return (
    <div className="teampageteamcard-leftsection">
      <Image
        src={photo}
        alt="card icon"
        width={width}
        height={height}
        className="teampageteamcard-left-image"
      />
    </div>
  );
}
