import "./subpagesgridcardsection.css";
import SubPagesGridCard from "../../sharedcomponents/subpagesgridcard/subpagesgridcard";
import cardData from "../../../data/subpagedata/accandrepdata/accandrepgridcarddata.json";

export default function SubPagesGridCardSection() {
  return (
    <div className="subpagesgridcardsection-container">
      <div className="subpagesgridcardsection-heading font-inter">
        Comprehensive Data Management Solutions
      </div>

      <div className="subpagesgridcardsection-cards-container">
        {cardData.map((card) => (
          <SubPagesGridCard
            key={card.id}
            gridcardicon={card.iconLink}
            gridcardheading={card.title}
            gridcarddescription={card.paragraph}
          />
        ))}
      </div>

      <div className="subpagesgridcardsection-button-container">
        <button className="subpagesgridcardsection-button font-inter">
          Hire A Professional
        </button>
      </div>
    </div>
  );
}
