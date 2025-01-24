// importing sub componenet
import TeamPageTeamCard from "@/app/components/layoutcomponents/cards/teampageteamcard/teampageteamcard";

// importing componenet data
import teamdata from "../data/teampageteamdata.json";

export const TopTeamCardSection = () => {
  return (
    <>
      {teamdata.map((teampagedata, index) => (
        <TeamPageTeamCard
          key={index}
          photo={teampagedata.photo}
          name={teampagedata.name}
          designation={teampagedata.designation}
          description={teampagedata.description}
          facebooklink={teampagedata.facebooklink}
          xlink={teampagedata.xlink}
          linkdinlink={teampagedata.linkdinlink}
          isReversed={index % 2 !== 0} // Pass true for even cards (index is odd because it's 0-based)
        />
      ))}
    </>
  );
};
