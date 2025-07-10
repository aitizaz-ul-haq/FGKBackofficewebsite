import dynamic from "next/dynamic";
import "./subpagesadvantegessection.css";

const SectionLeftSide = dynamic(() =>
  import("./subpagesadvmicrocomps/sectionleftside")
);

const SectionRightSide = dynamic(() =>
  import("./subpagesadvmicrocomps/sectionrightside")
);

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
