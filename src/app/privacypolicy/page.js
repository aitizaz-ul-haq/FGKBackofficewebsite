//importing subcomponenets
import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import PrivacyPoints from "../components/pagecomponents/privacypagecomps/privacypoints";

//importing componenet data
import privacyherodata from "../data/privacypolicy/privacyherodata.json";
import privacypolicydata from "../data/privacypolicy/privacypolicy.json";


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
      <PrivacyPoints privacydata={privacypolicydata.sections}/>
    </>
  );
}
