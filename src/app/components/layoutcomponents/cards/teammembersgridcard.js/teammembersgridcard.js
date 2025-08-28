import "./teammembersgridcard.css";
import TeamCardImageContainer from "./teammembersgridcardmicrocomps/teamcardimagecontainer";
import TeamMembersHeadingSection from "./teammembersgridcardmicrocomps/teamcardheadingsection";
import TeamCardDesignationSection from "./teammembersgridcardmicrocomps/teamcarddesignationsection";
import TeamCardSocialMediaSection from "./teammembersgridcardmicrocomps/teamcardsocialmediasection";

export default function TeamMembersGridCard({
  photo,
  name,
  designation,
  facebooklink,
  xlink,
  linkdinlink,
  width,
  height,
}) {
  return (
    <>
      <div className="memeberscard-container">
        <TeamCardImageContainer photo={photo} width={width} height={height} />
        <TeamMembersHeadingSection name={name} />
        <TeamCardDesignationSection designation={designation} />
        {/* <TeamCardSocialMediaSection
          facebooklink={facebooklink}
          xlink={xlink}
          linkdinlink={linkdinlink}
        /> */}
      </div>
    </>
  );
}
