import ExpertiseTransBackgroundCard from "@/app/components/layoutcomponents/cards/expertisetransbackgroundcard/expertisetransbackgroundcard";

export default function ExpertiseCardSection({ expdata }) {
  const isOdd = expdata.length % 2 !== 0;
  return (
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
        {isOdd && <div className="ghost-card" aria-hidden="true" />}
      </div>
    </div>
  );
}
