import Image from "next/image";

export default function TeamCardImageContainer({ photo, width, height }) {
  return (
    <div className="teammemberscard-image-container">
      <Image
        src={photo}
        alt="FGK Team members"
        width={width}
        height={height}
        className="team-member-img"
      />
    </div>
  );
}
