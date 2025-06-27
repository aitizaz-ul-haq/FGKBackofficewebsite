import "./subpagespointcard.css";
import PointCardDescriptionSection from "./subpagespointcardnicrocomps/pointcarddescriptionsection";
import PointCardUpperSection from "./subpagespointcardnicrocomps/pointcarduppersection";

export default function SubPagesPointCard({ advtitle, advdesc, advicon }) {
  return (
    <div className="subpagespointcard-container">
      <PointCardUpperSection advicon={advicon} advtitle={advtitle}/>
      <PointCardDescriptionSection advdesc={advdesc} />
    </div>
  );
}
