import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import CareersFullBodyComp from "../components/pagecomponents/careerspagecomps/careersfullbodycomp";
import testdata from "../data/careers/careersherodata.json";

export default function Careers() {
  return (
    <>
      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        mobileImage={testdata.mobileImage}
        desktopImage={testdata.desktopImage}
      />

      <CareersFullBodyComp />
    </>
  );
}
