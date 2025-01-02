import "./styles/webdevgridsection.css";
import SubPagesGridCardSection from "../subpagesgridcardsection.js/subpagesgridcardsection";
import webdevdata from "../../../data/subpagedata/webdevdata/webdevgrid.json";

export default function WebDevGridSection() {
  return (
    <div className="webdev-grid-container">
      <div className="webdev-text-container">
        <div className="webdev-grid-text-heading font-inter">
          {webdevdata.proggridheading}
        </div>
        <div className="webdev-grid-text-description font-inter">
          {webdevdata.proggriddescription}
        </div>
        <div className="webdev-grid-text-description font-inter">
          {webdevdata.proggriddescription}
        </div>
        <button className="webdev-grid-text-button font-inter">
          Hire A Professional
        </button>
      </div>

      <div className="webdev-grid-section-container">
        <SubPagesGridCardSection />
      </div>
    </div>
  );
}
