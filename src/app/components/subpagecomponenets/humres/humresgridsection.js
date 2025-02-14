import "./styles/humresgridsection.css";
import SubPagesGridCardSection from "../subpagesgridcardsection/subpagesgridcardsection";
import humresdata from "../../../data/subpagedata/humresdata/humresgrid.json";
import humrescarddata from "../../../data/subpagedata/humresdata/humresgridcarddata.json";

export default function HumResGridSection() {
  return (
    <div className="humres-grid-container">
      <div className="humres-text-container">
        <div className="humres-grid-text-heading font-inter">
          {humresdata.proggridheading}
        </div>
        <div className="humres-grid-text-description font-inter">
          {humresdata.proggriddescription}
        </div>
        <div className="humres-grid-text-description font-inter">
          {humresdata.proggriddescription}
        </div>
        <button className="humres-grid-text-button font-inter">
          Hire A Professional
        </button>
      </div>

      <div className="humres-grid-section-container">
        <SubPagesGridCardSection
          proggridsecondheading={humresdata.proggridsecondheading}
          cardData={humrescarddata}
        />
      </div>
    </div>
  );
}
