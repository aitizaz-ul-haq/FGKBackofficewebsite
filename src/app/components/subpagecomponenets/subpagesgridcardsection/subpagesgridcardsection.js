import "./subpagesgridcardsection.css";
import GridHeadingSection from "./subpagesgridcardsectionmicrocomps/gridheadingsection";
import GridSectionPageCards from "./subpagesgridcardsectionmicrocomps/gridsectionpagecards";
import GridSectionButtonsCont from "./subpagesgridcardsectionmicrocomps/gridsectionbuttonscont";

export default function SubPagesGridCardSection({
  proggridsecondheading,
  cardData,
}) {
  return (
    <div className="subpagesgridcardsection-container">
      <GridHeadingSection proggridsecondheading={proggridsecondheading} />
      <GridSectionPageCards cardData={cardData} />
      <GridSectionButtonsCont />
    </div>
  );
}
