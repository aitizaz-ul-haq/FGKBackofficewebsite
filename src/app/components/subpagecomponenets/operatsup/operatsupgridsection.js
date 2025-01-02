import "./styles/operatsupgridsection.css";
import SubPagesGridCardSection from "../subpagesgridcardsection.js/subpagesgridcardsection";
import operatsupdata from "../../../data/subpagedata/operatsup/operatesupgrid.json";

export default function OperatSupGridSection() {
  return (
    <div className="operatsup-grid-container">
      <div className="operatsup-text-container">
        <div className="operatsup-grid-text-heading font-inter">
          {operatsupdata.proggridheading}
        </div>
        <div className="operatsup-grid-text-description font-inter">
          {operatsupdata.proggriddescription}
        </div>
        <div className="operatsup-grid-text-description font-inter">
          {operatsupdata.proggriddescription}
        </div>
        <button className="operatsup-grid-text-button font-inter">
          Hire A Professional
        </button>
      </div>

      <div className="operatsup-grid-section-container">
        <SubPagesGridCardSection />
      </div>
    </div>
  );
}
