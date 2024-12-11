import MainHeroSection from "../components/layoutcomponents/mainherosection/mainherosection";
import testdata from "../data/services/servicesherodata.json";
import ImportSection from "../components/pagecomponents/servicespagecomps/importancesection";
import RoundedCardsSection from "../components/pagecomponents/servicespagecomps/roundedcardsection";
import ServicesBenefitsSection from "../components/pagecomponents/servicespagecomps/servicesbenefitssection";
import TrustedBySection from "../components/pagecomponents/servicespagecomps/trustedbysection";
import ServicesReviewsSection from "../components/pagecomponents/servicespagecomps/servicesreviewssection";
import reviewerdata from "../data/services/reviewsdata.json";

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
      <TrustedBySection />
      <ServicesReviewsSection
        reviewerone={reviewerdata.reviewerone}
        designationone={reviewerdata.designationone}
        descriptionone={reviewerdata.descriptionone}
        reviewertwo={reviewerdata.reviewertwo}
        designationtwo={reviewerdata.designationtwo}
        descriptiontwo={reviewerdata.descriptiontwo}
        reviewerthree={reviewerdata.reviewerthree}
        designationthree={reviewerdata.designationthree}
        descriptionthree={reviewerdata.descriptionthree}
      />
    </>
  );
}
