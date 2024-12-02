import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import testdata from "../data/services/servicesherodata.json";

export default function Services() {
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
