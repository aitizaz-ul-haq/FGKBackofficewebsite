import TeamMembersGridCard from "../../layoutcomponents/cards/teammembersgridcard.js/teammembersgridcard";
import teammebersdata from "./data/teamgridcarddata.json";
import "./styles/teammemebersgridsection.css";

export default function TeamMembersGridSection() {
  return (
    <>
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
            />
          ))}
        </div>

        {/* <TeamMembersGridCard /> */}
      </div>
    </>
  );
}
