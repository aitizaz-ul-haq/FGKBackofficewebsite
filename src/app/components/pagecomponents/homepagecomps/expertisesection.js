import "./styles/expertisesection.css";
import ExpertiseSectionHeadingSection from "./expertisesectionmicrocomps.js/expertisesectionheadingsection";
import ExpertiseCardSection from "./expertisesectionmicrocomps.js/expertisecardsection";
import expetisecardata from "../../../components/pagecomponents/homepagecomps/data/expertisesectiondata.json";

export default function ExpertiseSection() {
  return (
    <>
      <div className="expertise-container">
        <ExpertiseSectionHeadingSection />
        <ExpertiseCardSection expdata={expetisecardata} />
      </div>
    </>
  );
}
