import SubPagesGridCardSection from "../../subpagesgridcardsection/subpagesgridcardsection";

export default function AccandreGridContainer({ accheading, accandrecardpdata }) {
  return (
    <div className="accandre-grid-section-container">
      <SubPagesGridCardSection
        cardData={accandrecardpdata}
        proggridsecondheading={accheading}        
      />
    </div>
  );
}
