import "./subpagesgridcardsection.css";
import SubPagesGridCard from "../../sharedcomponents/subpagesgridcard/subpagesgridcard";

export default function SubPagesGridCardSection({
  proggridsecondheading,
  cardData,
}) {
  return (
    <div className="subpagesgridcardsection-container">
      <div className="subpagesgridcardsection-heading font-inter">
        {proggridsecondheading}
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
