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
}) {
  return (
    <>
      <div className="memeberscard-container">
        <TeamCardImageContainer photo={photo} />
        <TeamMembersHeadingSection name={name} />
        <TeamCardDesignationSection designation={designation} />
        <TeamCardSocialMediaSection
          facebooklink={facebooklink}
          xlink={xlink}
          linkdinlink={linkdinlink}
        />
      </div>
    </>
  );
}
