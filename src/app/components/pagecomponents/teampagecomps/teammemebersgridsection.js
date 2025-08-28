// importing sub componenets
import TeamMembersGridCard from "../../layoutcomponents/cards/teammembersgridcard.js/teammembersgridcard";

// importing componenet data
import teammebersdata from "./data/teamgridcarddata.json";

// importing style files
import "./styles/teammemebersgridsection.css";

export default function TeamMembersGridSection() {
  return (
    <div className="teammemebersgrid-container">
      <div className="teammemebersgrid">
        {teammebersdata.map((teammembersgriddata, index) => (
          <TeamMembersGridCard
            key={index}
            photo={teammembersgriddata.photo}
            name={teammembersgriddata.name}
            designation={teammembersgriddata.designation}
            facebooklink={teammembersgriddata.facebooklink}
            xlink={teammembersgriddata.xlink}
            linkdinlink={teammembersgriddata.linkdinlink}
            width={teammembersgriddata.width}
            height={teammembersgriddata.height}
          />
        ))}
      </div>
    </div>
  );
}
