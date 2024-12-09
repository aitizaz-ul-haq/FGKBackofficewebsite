import "./teammembersgridcard.css";
import Image from "next/image";
import Link from "next/link";

export default function TeamMembersGridCard({
  photo,
  name,
  designation,
  facebooklink,
  xlink,
  linkdinlink,
}) {
  return (
    <>
      <div className="memeberscard-container">
        <div className="teammemberscard-image-container">
          <Image
            src={photo}
            alt="FGK Team members"
            width={200}
            height={200}
            className="team-member-img"
          />
        </div>
        <div className="teammemberscard-name-heading font-roboto-sarif text-light">
          {name}
        </div>
        <div className="teammemberscard-designation font-inter text-light">
          {designation}
        </div>
        <div className="social-media-icons-group-container">
          <Image
            src="/facebook dark.png"
            alt="FGK Team members socials"
            width={40}
            height={40}
            className="team-member-social-media-icon"
          />
          <Image
            src="/linkdin.png"
            alt="FGK Team members socials"
            width={40}
            height={40}
            className="team-member-social-media-icon"
          />
          <Image
            src="/x.png"
            alt="FGK Team members socials"
            width={40}
            height={40}
            className="team-member-social-media-icon"
          />
        </div>
      </div>
    </>
  );
}
