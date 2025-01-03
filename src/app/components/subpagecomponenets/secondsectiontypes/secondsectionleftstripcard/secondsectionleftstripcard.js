import "./styles/secondsectionleftstripcard.css";
import Image from "next/image";

export default function SecondSectionLeftStripCard() {
  return (
    <>
      <div className="secondsectionstripcard-container">
        <div className="secondsectionstripcard-leftsection">
          <div className="secondsectionstripcard-heading font-roboto-sarif">
            Timely Delivery
          </div>
          <div className="secondsectionstripcard-description font-inter">
            We prioritize clear timelines and ensure all milestones are met to
            keep your project on track.
          </div>
        </div>
        <div className="secondsectionstripcard-rightsection">
          <Image
            src="/reponsive_web_design.png"
            width={40}
            height={40}
            className="secondsectionstripcard-icon"
          />
        </div>
      </div>
    </>
  );
}
