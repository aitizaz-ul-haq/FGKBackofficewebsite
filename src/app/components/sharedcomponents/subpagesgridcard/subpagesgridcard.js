import "./subpagesgridcard.css";
import DataMaggridImagesSection from "./subpagesgridcardmicrocomps/datamaggridimagesection";
import DataMaggridHeadingSection from "./subpagesgridcardmicrocomps/datamaggridheadingsection";
import DataMaggridDescriptionSection from "./subpagesgridcardmicrocomps/datamaggriddescriptionsection";

export default function SubPagesGridCard({
  gridcardicon,
  gridcardheading,
  gridcarddescription,
}) {
  return (
    <div className="subpagesgridcard-container">
      <DataMaggridImagesSection gridcardicon={gridcardicon} />
      <DataMaggridHeadingSection gridcardheading={gridcardheading} />
      <DataMaggridDescriptionSection
        gridcarddescription={gridcarddescription}
      />
    </div>
  );
}
