import "./styles/secondsectiontyperightsided.css";
import LeftSectionTextContainer from "./secondsectionrightsidedmicrocomps/leftsectiontextcontainer";
import RightSidedRIghtSection from "./secondsectionrightsidedmicrocomps/rightsidedrightsection";

export default function SecondSectionRightSided({
  textdata,
  rightstripcarddata,
}) {
  return (
    <>
      <div
        className="secondsectionrightsided-container"
        style={{
          backgroundImage: `url(${textdata.pagebackground})`,
        }}
      >
        <LeftSectionTextContainer
          title={textdata.textsectiontitle}
          paraone={textdata.textsectionparaone}
          paratwo={textdata.textsectionparatwo}
        />
        <RightSidedRIghtSection rightstripcarddata={rightstripcarddata} />
      </div>
    </>
  );
}
