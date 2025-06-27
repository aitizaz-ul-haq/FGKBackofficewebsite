import "./styles/webdevgridsection.css";
import webdevdata from "../../../data/subpagedata/webdevdata/webdevgrid.json";
import webdevcarddata from "../../../data/subpagedata/webdevdata/webdevgridcarddata.json";
import WebDevTextContainer from "./webdevmicrocomps/webdevtextcontainer";
import WebDevGridSectionContainer from "./webdevmicrocomps/webdevgridsectioncontainer";

export default function WebDevGridSection() {
  return (
    <div className="webdev-grid-container">
      <WebDevTextContainer
        webdevheading={webdevdata.proggridheading}
        webdevdescription={webdevdata.proggriddescription}
        webdevdescriptiontwo={webdevdata.proggriddescriptiontwo}
      />
      <WebDevGridSectionContainer
        webdevcarddata={webdevcarddata}
        proggridsecondheading={webdevdata.proggridsecondheading}
      />
    </div>
  );
}
