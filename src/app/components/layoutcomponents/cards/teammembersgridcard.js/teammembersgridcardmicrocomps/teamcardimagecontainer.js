import Image from "next/image";

export default function TeamCardImageContainer({photo}) {
    return(
        <div className="teammemberscard-image-container">
          <Image
            src={photo}
            alt="FGK Team members"
            width={200}
            height={200}
            className="team-member-img"
          />
        </div>
    );
}