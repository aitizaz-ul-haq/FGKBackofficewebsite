import "./styles/datamaggridsection.css";
import datamagdata from "../../../data/subpagedata/datamanagementdata/datamaggrid.json";
import datamagcarddata from "../../../data/subpagedata/datamanagementdata/datamaggridcarddata.json";
import DataMagTextContainer from "./datamagmicrocomps/datamagtextcontainer";
import DataMagGridSectionContainer from "./datamagmicrocomps/datamaggridsectioncontainer";

export default function DataMagGridSection() {
  return (
    <div className="datamag-grid-container">
      <DataMagTextContainer
        heading={datamagdata.proggridheading}
        description={datamagdata.proggriddescription}
        descriptiontwo={datamagdata.proggriddescriptiontwo}
      />
      <DataMagGridSectionContainer
        datamag={datamagdata.proggridsecondheading}
        carddata={datamagcarddata}
      />
    </div>
  );
}
