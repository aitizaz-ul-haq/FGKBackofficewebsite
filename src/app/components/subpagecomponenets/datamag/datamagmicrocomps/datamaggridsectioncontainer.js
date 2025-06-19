import SubPagesGridCardSection from "../../subpagesgridcardsection/subpagesgridcardsection";

export default function DataMagGridSectionContainer({ datamag, carddata }) {
  return (
    <div className="datamag-grid-section-container">
      <SubPagesGridCardSection
        proggridsecondheading={datamag}
        cardData={carddata}
      />
    </div>
  );
}
