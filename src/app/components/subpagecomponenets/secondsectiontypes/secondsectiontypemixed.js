import "./styles/secondsectiontypemixed.css";
import RightSectionStripCard from "./secondsectionmixedrightsection/rightsectionstripcard";
import LeftSectionStripCardAndTextCont from "./secondsectionmixedrightsection/leftsectionstripcardandtextcont";

export default function SecondSectionTypeMixed({
  textdata,
  leftstripcarddata,
  rightstripcarddata,
}) {
  return (
    <div
      className="secondsectionmixed-container"
      style={{
        backgroundImage: `url(${textdata.pagebackground})`,
      }}
    >
      <LeftSectionStripCardAndTextCont textdata={textdata} leftstripcarddata={leftstripcarddata}/>     
      <RightSectionStripCard rightstripcarddata={rightstripcarddata}/>
    </div>
  );
}

















