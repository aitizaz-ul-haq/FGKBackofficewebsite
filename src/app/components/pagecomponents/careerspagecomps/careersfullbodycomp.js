// importing subcomponenets
import CareersOpeningsSection from "./careersopeningssection";
import CareersFormSection from "./careersformsection";

// importing style files
import "./styles/careersfullbodycomp.css";

export default function CareersFullBodyComp() {
  return (
    <div className="careerpage-content-container">
      <CareersOpeningsSection />
      <CareersFormSection />
    </div>
  );
}
