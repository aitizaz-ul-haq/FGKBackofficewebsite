import importancedata from "../data/importancesectiondata.json";
import ServicesTransCircularBackgroundCard from "@/app/components/layoutcomponents/cards/servicestranscircularbackgroundcard/servicestranscircularbackgroundcard";

export const ImportanceCardGridSection = () => {
  return (
    <div className="importance-section-card-container">
      <div className="importance-card-grid">
        {importancedata.map((card, index) => (
          <ServicesTransCircularBackgroundCard
            key={index}
            numericitle={card.numericitle}
            alphabaticheading={card.alphabaticheading}
          />
        ))}
      </div>
    </div>
  );
};
