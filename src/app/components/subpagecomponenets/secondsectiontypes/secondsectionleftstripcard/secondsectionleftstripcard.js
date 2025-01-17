import "./styles/secondsectionleftstripcard.css";
import Image from "next/image";

export default function SecondSectionLeftStripCard({
  striptitle,
  stripdesc,
  stripicon,
}) {
  return (
    <div className="secondsectionstripcard-container">
      <div className="secondsectionstripcard-leftsection">
        <div className="secondsectionstripcard-heading font-roboto-sarif">
          {striptitle}
        </div>
        <div className="secondsectionstripcard-description font-inter">
          {stripdesc}
        </div>
      </div>
      <div className="secondsectionstripcard-rightsection">
        <Image
          src={stripicon}
          width={40}
          height={40}
          className="secondsectionstripcard-icon"
        />
      </div>
    </div>
  );
}
