import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import testdata from "../data/industries/industriesherodata.json";

export default function Industries() {
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
