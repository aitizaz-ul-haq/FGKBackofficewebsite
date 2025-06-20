import "./teampageteamcard.css";
import TeamPageTeamCardLeftSection from "../teammembersgridcard.js/teammembersgridcardmicrocomps/teampageteamcardleftsection";
import TeamCardTeamPageRightSection from "../teammembersgridcard.js/teammembersgridcardmicrocomps/teamcardteampagerightsection";
import TeamPageTeamSectionMobileImageContainer from "../teammembersgridcard.js/teammembersgridcardmicrocomps/teampageteamsectionmobileimagecontainer";

export default function TeamPageTeamCard({
  photo,
  name,
  designation,
  description,
  facebooklink,
  xlink,
  linkdinlink,
  isReversed,
}) {
  return (
    <div className="teampageteamcard-container">
      {isReversed ? (
        <>
          {/* Right section first */}
         <TeamPageTeamSectionMobileImageContainer photo={photo} />
          <TeamCardTeamPageRightSection
            name={name}
            designation={designation}
            description={description}
            facebooklink={facebooklink}
            linkdinlink={linkdinlink}
            xlink={xlink}
          />
          <TeamPageTeamCardLeftSection photo={photo} />
        </>
      ) : (
        <>
           <TeamPageTeamSectionMobileImageContainer photo={photo} />
          {/* Left section first */}
          <TeamPageTeamCardLeftSection photo={photo} />
          <TeamCardTeamPageRightSection
            name={name}
            designation={designation}
            description={description}
            facebooklink={facebooklink}
            linkdinlink={linkdinlink}
            xlink={xlink}
          />
        </>
      )}
    </div>
  );
}
