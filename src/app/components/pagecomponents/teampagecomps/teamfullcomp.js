import "./styles/teamfullcomp.css";
import TeamPageTeamCard from "../../layoutcomponents/cards/teampageteamcard/teampageteamcard";
import teamdata from "./data/teampageteamdata.json";

export default function TeamFullComp() {
  return (
    <>
      <div className="teamfullcomponenet-container">
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
      </div>
    </>
  );
}
