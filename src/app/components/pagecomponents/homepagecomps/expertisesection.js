import "./styles/expertisesection.css";
import ExpertiseTransBackgroundCard from "../../layoutcomponents/cards/expertisetransbackgroundcard/expertisetransbackgroundcard";
import expetisecardata from "../../../components/pagecomponents/homepagecomps/data/expertisesectiondata.json";

export default function ExpertiseSection() {
  return (
    <>
      <div className="expertise-container">
        <h2 className="expertise-section-heading font-inter text-light">
          Our Expertise
        </h2>
        <div className="expertise-section-card-container">
          <div className="expertise-card-grid">
            {expetisecardata.map((card, index) => (
              <ExpertiseTransBackgroundCard
                key={index}
                cardicon={card.cardicon}
                cardtitle={card.cardtitle}
                carddescription={card.carddescription}
                buttonlink={card.buttonlink}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
