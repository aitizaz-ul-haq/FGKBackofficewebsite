import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import IndustriesIntro from "../components/pagecomponents/industriespagecomps/industriesintrosection";
import testdata from "../data/industries/industriesherodata.json";
import ScrollToHash from "../components/pagecomponents/industriespagecomps/scrolltohash";

export default function Industries() {
  return (
    <>
      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        mobileImage={testdata.mobileImage}
        desktopImage={testdata.desktopImage}
      />
      <IndustriesIntro />
      <ScrollToHash />
    </>
  );
}
