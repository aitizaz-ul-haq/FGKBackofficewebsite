// importing subcomponenets
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import TeamFullComp from "../components/pagecomponents/teampagecomps/teamfullcomp";

// importing componenet data
import testdata from "../data/team/teamherodata.json";

export default function Team() {
  return (
    <>
      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        mobileImage={testdata.mobileImage}
        desktopImage={testdata.desktopImage}
        mainhint={testdata.hint}
      />
      <TeamFullComp />
    </>
  );
}
