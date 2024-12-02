import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
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
    </>
  );
}
