import MainPageHeroSection from "./components/pagecomponents/homepagecomps/mainpageherosection";
import ExpertiseSection from "./components/pagecomponents/homepagecomps/expertisesection";
import ChooseUsSection from "./components/pagecomponents/homepagecomps/chooseussection";
import IndustriescardHomePageSection from "./components/pagecomponents/homepagecomps/industriescardhomepagesection";
import HomepageBenefitsSection from "./components/pagecomponents/homepagecomps/homepagebenefitssection";
import HomepageClientsSection from "./components/pagecomponents/homepagecomps/homepageclientssection";
import testdata from "./data/testdata/testherodata.json";

export default function Home() {
  return (
    <>
      <main>
        <MainPageHeroSection
          title={testdata.title}
          paragraph={testdata.paragraph}
          forwardImage={testdata.forwardImage}
        />
        <ExpertiseSection />
        <ChooseUsSection />
        <IndustriescardHomePageSection />
        <HomepageBenefitsSection />
        <HomepageClientsSection />
      </main>
    </>
  );
}
