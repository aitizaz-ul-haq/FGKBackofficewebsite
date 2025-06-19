import RightSideHeading from "./rightsideheading";
import RightSideParaone from "./rightsideparaone";
import RightSideParaTwo from "./rightsideparatwo";
import RightSideButton from "./rightsidebutton";

export default function LeftSectionTextContainer({ title, paraone, paratwo }) {
  return (
    <div className="secondsectionrightsided-leftsection">
      <div className="secondsectionrightsided-leftsection-text-container">
        <RightSideHeading title={title} />
        <RightSideParaone paraone={paraone} />
        <RightSideParaTwo paratwo={paratwo} />
        <RightSideButton />
      </div>
    </div>
  );
}
