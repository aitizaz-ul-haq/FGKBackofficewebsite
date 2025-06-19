import SubPagesGridCardSection from "../../subpagesgridcardsection/subpagesgridcardsection";

export default function OperatsupGridContainer({
  cardData,
  proggridsecondheading,
}) {
  return (
    <div className="operatsup-grid-section-container">
      <SubPagesGridCardSection
        proggridsecondheading={proggridsecondheading}
        cardData={cardData}
      />
    </div>
  );
}
