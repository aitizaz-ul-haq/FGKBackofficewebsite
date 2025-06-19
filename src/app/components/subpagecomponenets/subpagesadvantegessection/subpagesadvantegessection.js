import "./subpagesadvantegessection.css";
import SectionLeftSide from "./subpagesadvmicrocomps/sectionleftside";
import SectionRightSide from "./subpagesadvmicrocomps/sectionrightside";

export default function SubPagesAdvantegesSection({
  advtitle,
  advdesc,
  leftdata,
  rightdata,
}) {
  return (
    <div className="subpagesadvantegessection-container">
      <SectionLeftSide title={advtitle} description={advdesc} />
      <SectionRightSide leftdata={leftdata} rightdata={rightdata} />
    </div>
  );
}
