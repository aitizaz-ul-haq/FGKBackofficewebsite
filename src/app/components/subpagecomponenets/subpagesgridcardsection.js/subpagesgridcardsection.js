import "./subpagesgridcardsection.css";
import SubPagesGridCard from "../../sharedcomponents/subpagesgridcard/subpagesgridcard";

export default function SubPagesGridCardSection() {
  return (
    <div className="subpagesgridcardsection-container">
      <div className="subpagesgridcardsection-heading font-inter">
        {/* {gridcardcontainerheading} */}
        Comprehensive Project Management Solutions
      </div>

      <div className="subpagesgridcardsection-cards-container">
        <SubPagesGridCard
        // gridcardicon={gridcardicon}
        // gridcardheading={gridcardheading}
        // gridcarddescription={gridcarddescription}
        />
        <SubPagesGridCard
        // gridcardicon={gridcardicon}
        // gridcardheading={gridcardheading}
        // gridcarddescription={gridcarddescription}
        />
        <SubPagesGridCard
        // gridcardicon={gridcardicon}
        // gridcardheading={gridcardheading}
        // gridcarddescription={gridcarddescription}
        />
        <SubPagesGridCard
        // gridcardicon={gridcardicon}
        // gridcardheading={gridcardheading}
        // gridcarddescription={gridcarddescription}
        />
        <SubPagesGridCard
        // gridcardicon={gridcardicon}
        // gridcardheading={gridcardheading}
        // gridcarddescription={gridcarddescription}
        />
        <SubPagesGridCard
        // gridcardicon={gridcardicon}
        // gridcardheading={gridcardheading}
        // gridcarddescription={gridcarddescription}
        />
      </div>

      <div className="subpagesgridcardsection-button-container">
        <button className="subpagesgridcardsection-button font-inter">
          Hire A Professional
        </button>
      </div>
    </div>
  );
}
