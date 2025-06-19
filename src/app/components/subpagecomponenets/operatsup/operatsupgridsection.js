import "./styles/operatsupgridsection.css";
import SubPagesGridCardSection from "../subpagesgridcardsection/subpagesgridcardsection";
import operatsupdata from "../../../data/subpagedata/operatsup/operatesupgrid.json";
import cardData from "../../../data/subpagedata/operatsup/operatesupgridcarddata.json";
import OpersupTextContainer from "./opersupgridmicrocomps/opersuptextcontainer";
import OperatsupGridContainer from "./opersupgridmicrocomps/opersupgridcontainer";

export default function OperatSupGridSection() {
  return (
    <div className="operatsup-grid-container">
      <OpersupTextContainer
        heading={operatsupdata.proggridheading}
        description={operatsupdata.proggriddescription}
        descriptiontwo={operatsupdata.proggriddescriptiontwo}
      />
      <OperatsupGridContainer
        cardData={cardData}
        proggridsecondheading={operatsupdata.proggridsecondheading}
      />
    </div>
  );
}
