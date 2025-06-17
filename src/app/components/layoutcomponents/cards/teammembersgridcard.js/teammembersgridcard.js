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
          <Link href={facebooklink}>
            <Image
              src="https://i.postimg.cc/bN3xJ6mH/facebook-dark.webp"
              alt="FGK Team members socials"
              width={40}
              height={40}
              className="team-member-social-media-icon"
            />
          </Link>
          <Link href={xlink}>
            <Image
              src="https://i.postimg.cc/rshNvgbJ/linkdin.webp"
              alt="FGK Team members socials"
              width={40}
              height={40}
              className="team-member-social-media-icon"
            />
          </Link>
          <Link href={linkdinlink}>
            <Image
              src="https://i.postimg.cc/1z0SDYf4/x.webp"
              alt="FGK Team members socials"
              width={40}
              height={40}
              className="team-member-social-media-icon"
            />
          </Link>
        </div>
      </div>
    </>
  );
}
