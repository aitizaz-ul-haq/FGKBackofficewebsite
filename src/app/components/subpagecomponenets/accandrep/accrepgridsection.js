import "./styles/accrecgridsection.css";
import SubPagesGridCardSection from "../subpagesgridcardsection/subpagesgridcardsection";
import accandrepdata from "../../../data/subpagedata/accandrepdata/accandrepgrid.json";
import accandrecardpdata from "../../../data/subpagedata/accandrepdata/accandrepgridcarddata.json";

export default function AccRepGridSection() {
  return (
    <div className="accandre-grid-container">
      <div className="accandre-text-container">
        <div className="accandre-grid-text-heading font-inter">
          {accandrepdata.proggridheading}
        </div>
        <div className="accandre-grid-text-description font-inter">
          {accandrepdata.proggriddescription}
        </div>
        <div className="accandre-grid-text-description font-inter">
          {accandrepdata.proggriddescriptiontwo}
        </div>
        <button className="accandre-grid-text-button font-inter">
          Hire A Professional
        </button>
      </div>

      <div className="accandre-grid-section-container">
        <SubPagesGridCardSection
          proggridsecondheading={accandrepdata.proggridsecondheading}
          cardData={accandrecardpdata}
        />
      </div>
    </div>
  );
}
