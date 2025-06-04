//importing subcomponenets
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import FullBodyAboutPage from "../components/pagecomponents/aboutpagecomps/fullbodyaboutpage";

//importing componenet data
import testdata from "../data/about/aboutherodata.json";
import aboutdata from "../data/about/fullbodyaboutpagedata.json";

export default function About() {
  return (
    <>
      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        mobileImage={testdata.mobileImage}
        desktopImage={testdata.desktopImage}
      />
      <FullBodyAboutPage
        companylogo={aboutdata.companylogo}
        topdescriptionparaone={aboutdata.topdescriptionparaone}
        topdescriptionparatwo={aboutdata.topdescriptionparatwo}
        topdescriptionparathree={aboutdata.topdescriptionparathree}
        middlesectionparaone={aboutdata.middlesectionparaone}
        middlesectionparatwo={aboutdata.middlesectionparatwo}
        lastsectionparaone={aboutdata.lastsectionparaone}
        aboutimageone={aboutdata.aboutimageone}
        aboutimagetwo={aboutdata.aboutimagetwo}
        aboutimagethree={aboutdata.aboutimagethree}
        aboutgridfullimage={aboutdata.aboutgridfullimage}
      />
    </>
  );
}
