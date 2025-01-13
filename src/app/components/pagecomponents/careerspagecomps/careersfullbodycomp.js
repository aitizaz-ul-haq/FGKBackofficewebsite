import "./styles/careersfullbodycomp.css";
import CareersOpeningsSection from "./careersopeningssection";
import CareersFormSection from "./careersformsection";

export default function CareersFullBodyComp() {
  return (
    <div className="careerpage-content-container">
      <CareersOpeningsSection />
      <CareersFormSection />
    </div>
  );
}
