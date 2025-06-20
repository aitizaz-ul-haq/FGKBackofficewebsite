//importing sub componenets
import UpperSection from "./subcomps/uppersection";

//importing style files
import "./styles/fullbodyaboutpage.css";

export default function FullBodyAboutPage({
  companylogo,
  topdescriptionparaone,
  topdescriptionparatwo,
  topdescriptionparathree,
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
        topdescriptionparathree={topdescriptionparathree}
      />

      {/* middle section */}
      {/* <MiddleSection
        middlesectionparaone={middlesectionparaone}
        middlesectionparatwo={middlesectionparatwo}
      /> */}

      {/* last section */}
      {/* <LastSection lastsectionparaone={lastsectionparaone} /> */}

      {/* image grid */}
      {/* <ImageGrid aboutgridfullimage={aboutgridfullimage} /> */}

      {/* image grid mobile */}
      {/* <ImageGridMobile
        aboutimageone={aboutimageone}
        aboutimagetwo={aboutimagetwo}
        aboutimagethree={aboutimagethree}
      /> */}
    </div>
  );
}
