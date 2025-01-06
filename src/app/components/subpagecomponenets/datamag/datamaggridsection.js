import "./styles/datamaggridsection.css";
import SubPagesGridCardSection from "../subpagesgridcardsection/subpagesgridcardsection";
import datamagdata from "../../../data/subpagedata/datamanagementdata/datamaggrid.json";
import datamagcarddata from "../../../data/subpagedata/datamanagementdata/datamaggridcarddata.json";

export default function DataMagGridSection() {
  return (
    <div className="datamag-grid-container">
      <div className="datamag-text-container">
        <div className="datamag-grid-text-heading font-inter">
          {datamagdata.proggridheading}
        </div>
        <div className="datamag-grid-text-description font-inter">
          {datamagdata.proggriddescription}
        </div>
        <div className="datamag-grid-text-description font-inter">
          {datamagdata.proggriddescription}
        </div>
        <button className="datamag-grid-text-button font-inter">
          Hire A Professional
        </button>
      </div>

      <div className="datamag-grid-section-container">
        <SubPagesGridCardSection
          proggridsecondheading={datamagdata.proggridsecondheading}
          cardData={datamagcarddata}
        />
      </div>
    </div>
  );
}
