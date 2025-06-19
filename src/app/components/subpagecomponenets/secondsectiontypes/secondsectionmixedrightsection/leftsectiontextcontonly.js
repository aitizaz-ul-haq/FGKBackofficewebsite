import LeftSectionTextHeading from "./leftsectiontexheading";
import LeftSectionParaOne from "./leftsectionparaone";
import LeftSectionParaTwo from "./leftsectionparatwo";
import LeftSectionParaThree from "./leftsectionparathree";
import LeftSectionButton from "./leftsectionbutton";

export default function LeftSectionTextContOnly({ textdata }) {
  return (
    <div className="secondsectionmixed-leftsection-text-container">
      <LeftSectionTextHeading heading={textdata.textsectiontitle} />
      <LeftSectionParaOne paraone={textdata.textsectionparaone} />
      <LeftSectionParaTwo paratwo={textdata.textsectionparatwo} />
      <LeftSectionParaThree parathree={textdata.textsectionparathree} />
      <LeftSectionButton />
    </div>
  );
}
