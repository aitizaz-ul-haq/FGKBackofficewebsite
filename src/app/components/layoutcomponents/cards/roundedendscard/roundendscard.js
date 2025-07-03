import "./roundendscards.css";
import Image from "next/image";
import cardsData from "../../../../components/pagecomponents/servicespagecomps/data/roundcarddata.json";
import RoundedCardTextSection from "./roundedendcardmicrocomps/roundedcardtextsection";
import RoundedCardLeftCircularSection from "./roundedendcardmicrocomps/roundedcardleftcircularsection";

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
              <RoundedCardTextSection
                roundedcardheading={card.title}
                roundedcarddescription={card.description}
                roundedcardtext={card.buttonText}
                roundedcardhint={card.buttonhint}
              />
              {/* Left Circular Section */}
              <RoundedCardLeftCircularSection
                source={card.iconCircular}
                cardtitle={card.title}
              />
            </>
          ) : (
            <>
              {/* Left Circular Section */}
              <RoundedCardLeftCircularSection
                source={card.iconCircular}
                cardtitle={card.title}
              />
              {/* Right Details Section */}
              <RoundedCardTextSection
                roundedcardheading={card.title}
                roundedcarddescription={card.description}
                roundedcardtext={card.buttonText}
              />
            </>
          )}
        </div>
      ))}
    </div>
  );
}
