import SectionLeftList from "./sectionleftlist";
import SectionRightList from "./sectionrightlist";

export default function SectionRightSide({ leftdata, rightdata }) {
  return (
    <div className="subpagesadvantegessection-rightsection-container">
      <div className="advantegespoints-container">
        <SectionLeftList leftdata={leftdata} />
        <SectionRightList rightdata={rightdata} />
      </div>
    </div>
  );
}
