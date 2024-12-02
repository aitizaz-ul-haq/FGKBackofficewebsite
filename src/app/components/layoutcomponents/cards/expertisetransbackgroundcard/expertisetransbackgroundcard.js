import "./expertisetransbackgroundcard.css";
import Image from "next/image";

export default function ExpertiseTransBackgroundCard({
  cardicon,
  cardtitle,
  carddescription,
  buttonlink,
}) {
  return (
    <>
      <div className="trans-card-container">
        <div className="top-right-circular-icon">
          <Image
            src={cardicon}
            alt="FGK logo"
            width={90}
            height={90}
            className="footer-social-icon"
          />
        </div>
        <div className="trans-card-heading font-inter text-light">
          {cardtitle}
        </div>
        <div className="trans-card-description-paragraph font-inter text-light">
          {carddescription}
        </div>
        <button className="trans-card-button">Details</button>
      </div>
    </>
  );
}
