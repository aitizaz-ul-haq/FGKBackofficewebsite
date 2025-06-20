import SubPagesGridCardSection from "../../subpagesgridcardsection/subpagesgridcardsection";

export default function WebDevGridSectionContainer({
  webdevcarddata,
  proggridsecondheading,
}) {
  return (
    <div className="webdev-grid-section-container">
      <SubPagesGridCardSection
        cardData={webdevcarddata}
        proggridsecondheading={proggridsecondheading}
      />
    </div>
  );
}
