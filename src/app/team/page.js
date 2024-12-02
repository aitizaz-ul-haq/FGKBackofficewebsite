import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import testdata from "../data/team/teamherodata.json";

export default function Team() {
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
