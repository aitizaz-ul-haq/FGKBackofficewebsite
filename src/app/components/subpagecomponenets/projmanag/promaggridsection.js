import "./styles/progmaggridsection.css";
import SubPagesGridCardSection from "../subpagesgridcardsection.js/subpagesgridcardsection";
import progmagdata from "../../../data/subpagedata/projectmanagementdata/progmaggrid.json";

export default function ProgMagGridSection() {
  return (
    <div className="progmag-grid-container">
      <div className="progmag-text-container">
        <div className="progmag-grid-text-heading font-inter">
          {progmagdata.proggridheading}
        </div>
        <div className="progmag-grid-text-description font-inter">
          {progmagdata.proggriddescription}
        </div>
        <div className="progmag-grid-text-description font-inter">
          {progmagdata.proggriddescription}
        </div>
        <button className="progmag-grid-text-button font-inter">
          Hire A Professional
        </button>
      </div>

      <div className="progmag-grid-section-container">
        <SubPagesGridCardSection />
      </div>
    </div>
  );
}
