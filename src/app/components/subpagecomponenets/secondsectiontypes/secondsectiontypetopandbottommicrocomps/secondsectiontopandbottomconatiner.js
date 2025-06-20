import TopBottomHeading from "./topbottomheading";
import TopBottomParaOne from "./topbottomparaone";
import TopBottomParaTwo from "./topbottomparatwo";
import TopBottomParaThree from "./topbottomparathree";
import TopBottomButton from "./topbottombutton";

export default function SecondSectionTopAndBottomContainer({
  title,
  paraone,
  paratwo,
  parathree,
}) {
  return (
    <div className="secondsectiontypetopandbottom-container">
      <div className="secondsectiontypetopandbottom-leftsection-text-container">
        <TopBottomHeading title={title} />
        <TopBottomParaOne paraone={paraone} />
        <TopBottomParaTwo paratwo={paratwo} />
        <TopBottomParaThree parathree={parathree} />
        <TopBottomButton />
      </div>
    </div>
  );
}
