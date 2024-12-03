import "./leftrightindustriescard.css";
import Image from "next/image";

export default function LeftRightIndustriesCard({
  cardicon,
  cardheading,
  carddescription,
  isReversed,
}) {
  return (
    <div className="industriescard-container">
      {isReversed ? (
        <>
          {/* Right section first */}
          <div className="industriescard-rightsection">
            <h2 className="rightsection-heading font-robot-sarif">
              {cardheading}
            </h2>
            <p className="rightsection-description font-inter text-light">
              {carddescription}
            </p>
            <button className="rightsection-button font-inter">
              Get Expert Advice
            </button>
          </div>
          <div className="industriescard-leftsection">
            <Image
              src={cardicon}
              alt="card icon"
              width={250}
              height={250}
              className="industriescard-left-image"
            />
          </div>
        </>
      ) : (
        <>
          {/* Left section first */}
          <div className="industriescard-leftsection">
            <Image
              src={cardicon}
              alt="card icon"
              width={250}
              height={250}
              className="industriescard-left-image"
            />
          </div>
          <div className="industriescard-rightsection">
            <h2 className="rightsection-heading font-robot-sarif">
              {cardheading}
            </h2>
            <p className="rightsection-description font-inter text-light">
              {carddescription}
            </p>
            <button className="rightsection-button font-inter">
              Get Expert Advice
            </button>
          </div>
        </>
      )}
    </div>
  );
}
