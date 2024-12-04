import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import FullBodyAboutPage from "../components/pagecomponents/aboutpagecomps/fullbodyaboutpage";
import testdata from "../data/about/aboutherodata.json";

export default function About() {
  return (
    <>
      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        mobileImage={testdata.mobileImage}
        desktopImage={testdata.desktopImage}
      />
      <FullBodyAboutPage />
    </>
  );
}
