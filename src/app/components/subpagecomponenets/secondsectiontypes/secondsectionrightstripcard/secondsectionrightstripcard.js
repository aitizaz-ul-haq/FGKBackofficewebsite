import "./styles/secondsectionrightstripcard.css";
import Image from "next/image";

export default function SecondSectionRightStripCard() {
  return (
    <>
      <div className="secondsectionstripcardright-container">
        <div className="secondsectionstripcardright-rightsection">
          <Image
            src="/reponsive_web_design.png"
            width={40}
            height={40}
            className="secondsectionstripcardright-icon"
          />
        </div>
        <div className="secondsectionstripcardright-leftsection">
          <div className="secondsectionstripcardright-heading font-roboto-sarif">
            Timely Delivery
          </div>
          <div className="secondsectionstripcardright-description font-inter">
            We prioritize clear timelines and ensure all milestones are met to
            keep your project on track.
          </div>
        </div>
      </div>
    </>
  );
}
