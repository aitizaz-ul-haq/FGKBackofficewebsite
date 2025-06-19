
import LeftSectionTextContOnly from "./leftsectiontextcontonly";
import LeftSectionStripContainer from "./leftsectionstripcontiner";

export default function LeftSectionStripCardAndTextCont({
  textdata,
  leftstripcarddata,
}) {
  return (
    <div className="secondsectionmixed-leftsection">
      <LeftSectionTextContOnly textdata={textdata} />
      <LeftSectionStripContainer leftstripcarddata={leftstripcarddata} />
    </div>
  );
}
