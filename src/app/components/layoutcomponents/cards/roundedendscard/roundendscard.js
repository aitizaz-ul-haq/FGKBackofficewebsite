import "./roundendscards.css";
import Image from "next/image";
import cardsData from "../../../../components/pagecomponents/servicespagecomps/data/roundcarddata.json";

export default function RoundEndsCards() {
  return (
    <div className="roundendscard-container">
      {cardsData.map((card, index) => (
        <div
          key={card.id}
          className={index % 2 === 0 ? "bottom-card" : "top-card"}
        >
          <div className="top-card-mobile-image">
            <Image
              src={card.iconMobile}
              alt={`${card.title} icon`}
              width={100}
              height={100}
              className="teampageteamcard-mobile-image"
            />
          </div>

          {index % 2 === 0 ? (
            <>
              {/* Right Details Section */}
              <div className="right-details-section rounded-cards-details-margin">
                <div className="right-roundedcard-heading font-inter text-light">
                  {card.title}
                </div>
                <div className="right-roundedcard-description font-inter text-light">
                  {card.description}
                </div>
                <div className="right-roundedcard-arrowhead-button font-inter text-light">
                  {card.buttonText}
                </div>
              </div>
              {/* Left Circular Section */}
              <div className="left-circular-section">
                <Image
                  src={card.iconCircular}
                  alt={`${card.title} circular icon`}
                  width={410}
                  height={410}
                  className="teampageteamcard-main-image"
                />
              </div>
            </>
          ) : (
            <>
              {/* Left Circular Section */}
              <div className="left-circular-section">
                <Image
                  src={card.iconCircular}
                  alt={`${card.title} circular icon`}
                  width={410}
                  height={410}
                  className="teampageteamcard-main-image"
                />
              </div>
              {/* Right Details Section */}
              <div className="right-details-section rounded-cards-details-margin">
                <div className="right-roundedcard-heading font-inter text-light">
                  {card.title}
                </div>
                <div className="right-roundedcard-description font-inter text-light">
                  {card.description}
                </div>
                <div className="right-roundedcard-arrowhead-button font-inter text-light">
                  {card.buttonText}
                </div>
              </div>
            </>
          )}
        </div>
      ))}
    </div>
  );
}
