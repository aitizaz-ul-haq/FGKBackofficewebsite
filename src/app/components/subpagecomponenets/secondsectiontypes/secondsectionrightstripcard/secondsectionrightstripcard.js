import "./styles/secondsectionrightstripcard.css";
import SecondStripRights from "./secondsectionrightstripmicrocomps/secondstriprights";
import SecondStripLeft from "./secondsectionrightstripmicrocomps/secondstriplefts";

export default function SecondSectionRightStripCard({
  striptitle,
  stripdesc,
  stripicon,
}) {
  return (
    <div className="secondsectionstripcardright-container">
      <SecondStripRights stripicon={stripicon} />
      <SecondStripLeft striptitle={striptitle} stripdesc={stripdesc} />
    </div>
  );
}
