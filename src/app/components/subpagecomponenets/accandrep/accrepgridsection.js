import "./styles/accrecgridsection.css";
import accandrepdata from "../../../data/subpagedata/accandrepdata/accandrepgrid.json";
import accandrecardpdata from "../../../data/subpagedata/accandrepdata/accandrepgridcarddata.json";
import AccandreTextContainer from "./accandrepmicrocomps/accandretextcontainer";
import AccandreGridContainer from "./accandrepmicrocomps/accandregridcontainer";

export default function AccRepGridSection() {
  return (
    <div className="accandre-grid-container">
      <AccandreTextContainer
        accheading={accandrepdata.proggridheading}
        accdescription={accandrepdata.proggriddescription}
        accdescriptiontw0={accandrepdata.proggriddescriptiontwo}
      />
      <AccandreGridContainer
        accheading={accandrepdata.proggridsecondheading}
        accandrecardpdata={accandrecardpdata}
      />
    </div>
  );
}
