import "./styles/fullbodyaboutpage.css";
import UpperSection from "./subcomps/uppersection";
import MiddleSection from "./subcomps/middlesection";
import LastSection from "./subcomps/lastsection";
import ImageGrid from "./subcomps/imagegrid";
import ImageGridMobile from "./subcomps/imagegridmobile";

export default function FullBodyAboutPage({
  companylogo,
  topdescriptionparaone,
  topdescriptionparatwo,
  middlesectionparaone,
  middlesectionparatwo,
  lastsectionparaone,
  aboutimageone,
  aboutimagetwo,
  aboutimagethree,
  aboutgridfullimage,
}) {
  return (
    <div className="aboutpagecontent-container">
      {/* upper section */}
      <UpperSection
        companylogo={companylogo}
        topdescriptionparaone={topdescriptionparaone}
        topdescriptionparatwo={topdescriptionparatwo}
      />

      {/* middle section */}
      <MiddleSection
        middlesectionparaone={middlesectionparaone}
        middlesectionparatwo={middlesectionparatwo}
      />

      {/* last section */}
      <LastSection lastsectionparaone={lastsectionparaone} />

      {/* image grid */}
      <ImageGrid aboutgridfullimage={aboutgridfullimage} />

      {/* image grid mobile */}
      <ImageGridMobile
        aboutimageone={aboutimageone}
        aboutimagetwo={aboutimagetwo}
        aboutimagethree={aboutimagethree}
      />
    </div>
  );
}
