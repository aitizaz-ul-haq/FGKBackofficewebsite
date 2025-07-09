import dynamic from "next/dynamic";

//importing componenet data
import privacyherodata from "../data/privacypolicy/privacyherodata.json";
import privacypolicydata from "../data/privacypolicy/privacypolicy.json";

import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";

const PrivacyPoints = dynamic(() =>
  import("../components/pagecomponents/privacypagecomps/privacypoints")
);

export default function PrivacyPolicy() {
  return (
    <>
      <MainHeroSection
        title={privacyherodata.title}
        paragraph={privacyherodata.paragraph}
        mobileImage={privacyherodata.mobileImage}
        desktopImage={privacyherodata.desktopImage}
        mainhint={privacyherodata.hint}
      />
      <PrivacyPoints privacydata={privacypolicydata.sections} />
    </>
  );
}
