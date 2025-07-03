import Link from "next/link";
import "./expertisetransbackgroundcard.css";
import TopRightCircularIconSection from "./cardcomps/toprightcirculariconsection";
import TransCardHeadingSection from "./cardcomps/transcardheadingsection";
import TransCardDescriptionSection from "./cardcomps/transcarddescriptionsection";

export default function ExpertiseTransBackgroundCard({
  cardicon,
  cardtitle,
  carddescription,
  buttonlink,
}) {
  return (
    <div className="trans-card-container">
      <TopRightCircularIconSection cardicon={cardicon} />
      <TransCardHeadingSection cardtitle={cardtitle} />
      <TransCardDescriptionSection carddescription={carddescription} />
      <Link href={buttonlink} title="Get More Service Details">
        <button className="trans-card-button">Details</button>
      </Link>
    </div>
  );
}
