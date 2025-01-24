//importing sub componenets
import { TopTeamCardSection } from "./subcomps/topteamcardsection";
import TeamMembersGridSection from "./teammemebersgridsection";

//importing stylefiles
import "./styles/teamfullcomp.css";

export default function TeamFullComp() {
  return (
    <div className="teamfullcomponenet-container">
      <TopTeamCardSection />
      <TeamMembersGridSection />
    </div>
  );
}
