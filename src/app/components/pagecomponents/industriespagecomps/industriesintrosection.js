import "./styles/industriesintro.css";
import LeftRightIndustriesCard from "../../layoutcomponents/cards/leftrightindustriescard/leftrightindustriescard";
import Industriesdata from "./data/industriessectiondata.json";

export default function IndustriesIntro() {
  return (
    <div className="introcards-container">
      <div className="introcards-container">
        {Industriesdata.map((industry, index) => (
          <LeftRightIndustriesCard
            key={index}
            cardicon={industry.cardicon}
            cardheading={industry.cardheading}
            carddescription={industry.carddescription}
            isReversed={index % 2 !== 0} // Pass true for even cards (index is odd because it's 0-based)
          />
        ))}
      </div>
    </div>
  );
}
