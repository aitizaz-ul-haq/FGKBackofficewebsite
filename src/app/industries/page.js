//importing library
import { Suspense } from "react";

// importing subcomponenets
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import IndustriesIntro from "../components/pagecomponents/industriespagecomps/industriesintrosection";

//importing componenet data
import testdata from "../data/industries/industriesherodata.json";

//importing utility function
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
      <Suspense fallback={null}>
        <ScrollToHash />
      </Suspense>
    </>
  );
}
