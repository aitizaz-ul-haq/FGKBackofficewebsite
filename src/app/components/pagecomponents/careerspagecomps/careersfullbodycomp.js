// importing subcomponenets
import CareersOpeningsSection from "./careersopeningssection";
import CareersFormSection from "./careersformsection";
import CareersNoOpeningsSection from "./careersnoopeningssection";

// importing style files
import "./styles/careersfullbodycomp.css";

// Set to 1 to show openings, 0 to show no-openings message
const SHOW_OPENINGS = 1;

export default function CareersFullBodyComp() {
  return (
    <div className="careerpage-content-container">
      {SHOW_OPENINGS ? (
        <>
          <CareersOpeningsSection />
          <CareersFormSection />
        </>
      ) : (
        <CareersNoOpeningsSection />
      )}
    </div>
  );
}
