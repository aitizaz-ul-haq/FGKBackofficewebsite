import "./styles/secondsectiontypetopandbottom.css";
import SecondSectionTopAndBottomContainer from "./secondsectiontypetopandbottommicrocomps/secondsectiontopandbottomconatiner";
import TopBottomBottomContainer from "./secondsectiontypetopandbottommicrocomps/topbottombottomcontianer";

export default function SecondSectionTypeTopAndBottom({
  textdata,
  leftstripcarddata,
  rightstripcarddata,
}) {
  return (
    <>
      <div
        className="secondsectiontypetopandbottom-container"
        style={{
          backgroundImage: `url(${textdata.pagebackground})`,
        }}
      >
        <SecondSectionTopAndBottomContainer
          title={textdata.textsectiontitle}
          paraone={textdata.textsectionparaone}
          paratwo={textdata.textsectionparatwo}
          parathree={textdata.textsectionparathree}
        />
        <TopBottomBottomContainer
          leftstripcarddata={leftstripcarddata}
          rightstripcarddata={rightstripcarddata}
        />
      </div>
    </>
  );
}
