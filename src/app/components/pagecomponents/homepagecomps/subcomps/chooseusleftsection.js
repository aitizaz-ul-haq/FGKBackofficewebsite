import Points from "../data/chooseuspoints.json";
import ChooseUsHeadingSectionContainer from "./microcomps/chooseusheadingsectioncontiner";
import PointsListContainer from "./microcomps/pointslistcontainer";

export default function ChooseUsLeftSection() {
  return (
    <div className="chooseus-left-section">
      <ChooseUsHeadingSectionContainer />
      <PointsListContainer Points={Points} />
    </div>
  );
}
