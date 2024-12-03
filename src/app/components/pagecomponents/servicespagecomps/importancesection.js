import ServicesTransCircularBackgroundCard from "../../layoutcomponents/cards/servicestranscircularbackgroundcard/servicestranscircularbackgroundcard";
import importancedata from "./data/importancesectiondata.json";
import "./styles/importancesection.css";
export default function ImportSection() {
  return (
    <>
      <div className="importance-container">
        <h2 className="importance-section-heading font-roboto-serif text-light">
          Importance of Our Services for your business
        </h2>
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
        <div className="circular-card-large-button-container">
          <button className="circularcard-button font-inter text-bold">
            Get Expert Advice
          </button>
        </div>
      </div>
    </>
  );
}
