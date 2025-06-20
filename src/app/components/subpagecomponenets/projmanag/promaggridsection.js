import "./styles/progmaggridsection.css";
import SubPagesGridCardSection from "../subpagesgridcardsection/subpagesgridcardsection";
import progmagdata from "../../../data/subpagedata/projectmanagementdata/progmaggrid.json";
import progmagcarddata from "../../../data/subpagedata/projectmanagementdata/progmaggridcarddata.json";
import ProgMagTextContainer from "./progmagmicrocomps/progmagtextcontainer";

export default function ProgMagGridSection() {
  return (
    <div className="progmag-grid-container">
      <ProgMagTextContainer
        progmagheading={progmagdata.proggridheading}
        progmagdescription={progmagdata.proggriddescription}
        progmagdescriptiontwo={progmagdata.proggriddescriptiontwo}
      />

      <div className="progmag-grid-section-container">
        <SubPagesGridCardSection
          proggridsecondheading={progmagdata.proggridsecondheading}
          cardData={progmagcarddata}
        />
      </div>
    </div>
  );
}
