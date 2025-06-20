import "./leftrightindustriescard.css";
import IndustriesCardRightSection from "./industriessectionmicrocomps/industriescardrightsection";
import IndustriesCardLeftSection from "./industriessectionmicrocomps/industriescardleftsection";

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
          <IndustriesCardRightSection
            cardicon={cardicon}
            cardheading={cardheading}
            carddescription={carddescription}
          />
          <IndustriesCardLeftSection cardicon={cardicon} />
        </>
      ) : (
        <>
          {/* Left section first */}
          <IndustriesCardLeftSection cardicon={cardicon} />
          <IndustriesCardRightSection
            cardicon={cardicon}
            cardheading={cardheading}
            carddescription={carddescription}
          />
        </>
      )}
    </div>
  );
}
