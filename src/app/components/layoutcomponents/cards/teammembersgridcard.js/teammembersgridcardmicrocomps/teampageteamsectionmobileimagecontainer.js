// components/.../teampageteamsectionmobileimagecontainer.jsx
import Image from "next/image";

export default function TeamPageTeamSectionMobileImageContainer({
  photo,
  width,
  height,
}) {
  return (
    <Image
      src={photo}
      alt="team member photo"
      width={width}
      height={height}
      // Let CSS control final sizing; keep natural aspect ratio
      className="teampageteamcard-mobile-image"
      // If you want responsive width, you can also add:
      // sizes="(max-width: 768px) 90vw, 536px"
    />
  );
}
