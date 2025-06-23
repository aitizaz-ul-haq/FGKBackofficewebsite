import ExpertiseTransBackgroundCard from "@/app/components/layoutcomponents/cards/expertisetransbackgroundcard/expertisetransbackgroundcard";

export default function ExpertiseCardSection({expdata}) {
    return(
        <div className="expertise-section-card-container">
          <div className="expertise-card-grid">
            {expdata.map((card, index) => (
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
    );
} 