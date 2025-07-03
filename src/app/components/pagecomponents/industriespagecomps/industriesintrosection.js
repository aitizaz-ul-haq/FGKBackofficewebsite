import "./styles/industriesintro.css";
import LeftRightIndustriesCard from "../../layoutcomponents/cards/leftrightindustriescard/leftrightindustriescard";
import Industriesdata from "./data/industriessectiondata.json";

export default function IndustriesIntro() {
  return (
    <div className="introcards-container">
      {Industriesdata.map((industry, index) => (
        <div id={industry.id} key={index}>
          {" "}
          {/* Ensure unique ID */}
          <LeftRightIndustriesCard
            cardicon={industry.cardicon}
            cardheading={industry.cardheading}
            carddescription={industry.carddescription}
            cardlink={industry.cardlink}
            cardhint={industry.cardhint}
            isReversed={index % 2 !== 0}
          />
        </div>
      ))}
    </div>
  );
}
