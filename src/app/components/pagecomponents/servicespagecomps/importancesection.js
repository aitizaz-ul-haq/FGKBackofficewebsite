import ServicesTransCircularBackgroundCard from "../../layoutcomponents/cards/servicestranscircularbackgroundcard/servicestranscircularbackgroundcard";
import importancedata from "./data/importancesectiondata.json";
import "./styles/importancesection.css";
export default function ImportSection() {
  return (
    <>
      <div className="expertise-container">
        <h2 className="expertise-section-heading font-roboto-serif text-light">
          Importance of Our Services for your business
        </h2>
        <div className="expertise-section-card-container">
          <div className="expertise-card-grid">
            {importancedata.map((card, index) => (
              <ServicesTransCircularBackgroundCard
                key={index}
                numericitle={card.numericitle}
                alphabaticheading={card.alphabaticheading}
              />
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
