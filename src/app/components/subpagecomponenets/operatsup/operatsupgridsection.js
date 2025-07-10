import dynamic from "next/dynamic";
import "./styles/operatsupgridsection.css";

import operatsupdata from "../../../data/subpagedata/operatsup/operatesupgrid.json";
import cardData from "../../../data/subpagedata/operatsup/operatesupgridcarddata.json";

const OpersupTextContainer = dynamic(() =>
  import("./opersupgridmicrocomps/opersuptextcontainer")
);

const OperatsupGridContainer = dynamic(() =>
  import("./opersupgridmicrocomps/opersupgridcontainer")
);

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
