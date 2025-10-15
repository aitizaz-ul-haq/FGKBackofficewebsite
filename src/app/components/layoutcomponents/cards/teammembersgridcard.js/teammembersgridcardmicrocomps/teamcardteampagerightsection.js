import RightSectionTeamName from "./rightsectionteamname";
import RightSectionTeamDesignation from "./rightsectionteamdesignation";
import RightSectionTeamDescription from "./rightsectionteamdescription";
import RightSectionTeamSocialMediaCollection from "./rightsectionteamsocialmediacollection";
// import Image from "next/image";

export default function TeamCardTeamPageRightSection({
  name,
  designation,
  description,
  facebooklink,
  linkdinlink,
  xlink,
}) {
  return (
    <div className="teampageteamcard-rightsection">
      {/* <Image
              src={photo}
              alt="card icon"
              width={550}
              height={350}
              className="teampageteamcard-left-image"
            /> */}

      <RightSectionTeamName name={name} />
      <RightSectionTeamDesignation designation={designation} />
      <RightSectionTeamDescription description={description} />
      <RightSectionTeamSocialMediaCollection
        facebooklink={facebooklink}
        linkdinlink={linkdinlink}
        xlink={xlink}
      />
    </div>
  );
}
