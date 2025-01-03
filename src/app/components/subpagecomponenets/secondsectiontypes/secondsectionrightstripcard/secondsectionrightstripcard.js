import "./styles/secondsectionrightstripcard.css";
import Image from "next/image";

export default function SecondSectionRightStripCard({
  striptitle,
  stripdesc,
  stripicon,
}) {
  return (
    <>
      <div className="secondsectionstripcardright-container">
        <div className="secondsectionstripcardright-rightsection">
          <Image
            src={stripicon}
            width={40}
            height={40}
            className="secondsectionstripcardright-icon"
          />
        </div>
        <div className="secondsectionstripcardright-leftsection">
          <div className="secondsectionstripcardright-heading font-roboto-sarif">
            {striptitle}
          </div>
          <div className="secondsectionstripcardright-description font-inter">
            {stripdesc}
          </div>
        </div>
      </div>
    </>
  );
}
