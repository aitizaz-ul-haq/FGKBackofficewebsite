//importing subcomponenets
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import PrivacyPoints from "../components/pagecomponents/privacypagecomps/privacypoints";

//importing componenet data
import privacydata from "../data/privacypolicy/privacyherodata.json";

export default function PrivacyPolicy() {
  return (
    <>
      <MainHeroSection
        title={privacydata.title}
        paragraph={privacydata.paragraph}
        mobileImage={privacydata.mobileImage}
        desktopImage={privacydata.desktopImage}
      />

      <PrivacyPoints />

  
    </>
  );
}
