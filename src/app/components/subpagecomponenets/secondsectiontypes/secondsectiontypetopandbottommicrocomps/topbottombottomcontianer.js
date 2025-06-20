import LeftBottomLeftSection from "./leftbottomleftsection";
import RIghtBottomRightSection from "./rightbottomrightsection";

export default function TopBottomBottomContainer({
  leftstripcarddata,
  rightstripcarddata,
}) {
  return (
    <div className="secondsectiontypetopandbottom-bottom-container">
      <LeftBottomLeftSection leftstripcarddata={leftstripcarddata} />
      <RIghtBottomRightSection rightstripcarddata={rightstripcarddata} />
    </div>
  );
}
