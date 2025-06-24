import SubPagesGridCard from "@/app/components/sharedcomponents/subpagesgridcard/subpagesgridcard";

export default function GridSectionPageCards({ cardData }) {
  return (
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
  );
}
