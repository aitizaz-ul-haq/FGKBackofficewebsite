import dynamic from "next/dynamic";
import "./styles/secondsectiontypemixed.css";

const RightSectionStripCard = dynamic(() =>
  import("./secondsectionmixedrightsection/rightsectionstripcard")
);

const LeftSectionStripCardAndTextCont = dynamic(() =>
  import("./secondsectionmixedrightsection/leftsectionstripcardandtextcont")
);

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
      <LeftSectionStripCardAndTextCont
        textdata={textdata}
        leftstripcarddata={leftstripcarddata}
      />
      <RightSectionStripCard rightstripcarddata={rightstripcarddata} />
    </div>
  );
}
