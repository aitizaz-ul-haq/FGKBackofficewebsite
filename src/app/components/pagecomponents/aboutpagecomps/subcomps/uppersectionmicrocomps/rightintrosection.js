import RightSectionHeading from "./rightsectionmicrocomps/rightsectionheading";
import RightSectionParaOne from "./rightsectionmicrocomps/rightsectionparaone";
import RightSectionParaTwo from "./rightsectionmicrocomps/rightsectionparatwo";
import RightSectionParaThree from "./rightsectionmicrocomps/rightsectionparathree";

export default function RightIntroSection({
  topdesparaone,
  topdescparatwo,
  topdescparathree,
}) {
  return (
    <div className="right-intro-section">
      <RightSectionHeading />
      <RightSectionParaOne topdesparaone={topdesparaone} />
      <RightSectionParaTwo topdescparatwo={topdescparatwo} />
      <RightSectionParaThree topdescparathree={topdescparathree} />
    </div>
  );
}
