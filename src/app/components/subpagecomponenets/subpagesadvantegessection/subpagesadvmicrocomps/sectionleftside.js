import SectionLeftSideTitle from "./sectionleftsidetitle";
import SectionLeftSideDescription from "./sectionleftsidedescription";

export default function SectionLeftSide({title, description}) {
  return (
    <div className="subpagesadvantegessection-leftsection-container">
      <SectionLeftSideTitle sectionheading={title} />
      <SectionLeftSideDescription sectiondescription={description} />
    </div>
  );
}
