import Image from "next/image";

export default function TeamPageTeamSectionMobileImageContainer({ photo }) {
  return (
    <Image
      src={photo}
      alt="card icon"
      width={310}
      height={200}
      className="teampageteamcard-mobile-image"
    />
  );
}
