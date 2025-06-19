import LeftSectionStrip from "./leftsectionstrip";
import RightSectionStrip from "./rightsectionstrip";

export default function ThirdProcessSectionBottomContiner({
  leftstripcarddata,
  rightstripcarddata,
}) {
  return (
    <div className="thirdprocesssection-bottom-container">
      <LeftSectionStrip leftstripcarddata={leftstripcarddata} />
      <RightSectionStrip rightstripcarddata={rightstripcarddata} />
    </div>
  );
}
