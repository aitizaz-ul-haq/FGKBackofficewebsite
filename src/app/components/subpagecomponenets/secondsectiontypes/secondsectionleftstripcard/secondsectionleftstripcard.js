import "./styles/secondsectionleftstripcard.css";
import StripCardLeftSection from "./secondsectionstripcardmicrocomps/stripcardleftsection";
import StripCardRightSection from "./secondsectionstripcardmicrocomps/stripcardrightsection";

export default function SecondSectionLeftStripCard({
  striptitle,
  stripdesc,
  stripicon,
}) {
  return (
    <div className="secondsectionstripcard-container">
      <StripCardRightSection stripicon={stripicon} />
      <StripCardLeftSection striptitle={striptitle} stripdesc={stripdesc} />
    </div>
  );
}
