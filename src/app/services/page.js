import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import testdata from "../data/services/servicesherodata.json";
import ImportSection from "../components/pagecomponents/servicespagecomps/importancesection";
import RoundedCardsSection from "../components/pagecomponents/servicespagecomps/roundedcardsection";
import ServicesBenefitsSection from "../components/pagecomponents/servicespagecomps/servicesbenefitssection";

export default function Services() {
  return (
    <>
      <MainHeroSection
        title={testdata.title}
        paragraph={testdata.paragraph}
        mobileImage={testdata.mobileImage}
        desktopImage={testdata.desktopImage}
      />
      <ImportSection />
      <RoundedCardsSection />
      <ServicesBenefitsSection />
    </>
  );
}
