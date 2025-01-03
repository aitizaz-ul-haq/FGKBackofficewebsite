import "./styles/secondsectiontypemixed.css";
import SecondSectionLeftStripCard from "./secondsectionleftstripcard/secondsectionleftstripcard";
import SecondSectionRightStripCard from "./secondsectionrightstripcard/secondsectionrightstripcard";

export default function SecondSectionTypeMixed() {
  return (
    <>
      <div className="secondsectionmixed-container">
        <div className="secondsectionmixed-leftsection">
          <div className="secondsectionmixed-leftsection-text-container">
            <div className="secondsectionmixed-leftsection-text-heading font-inter">
              Our Approach to Project Management
            </div>
            <div className="secondsectionmixed-leftsection-text-description font-inter">
              At FGK Back Office Services, we employ industry best practices and
              tailor our approach to meet your specific project requirements.
              Our process integrates strategic planning, proactive risk
              management, transparent communication, and efficient execution. We
              leverage cutting-edge project management tools and methodologies,
              including Agile, Waterfall, and hybrid approaches, to align with
              your business goals.
            </div>
            <div className="secondsectionmixed-leftsection-text-description font-inter">
              Our process integrates strategic planning, proactive risk
              management, transparent communication, and efficient execution. We
              leverage cutting-edge project management tools and methodologies,
              including Agile, Waterfall, and hybrid approaches, to align with
              your business goals.
            </div>
            <button className="secondsectionmixed-leftsection-text-button font-inter">
              Hire A Professional
            </button>
          </div>

          <div className="secondsectionmixed-leftsection-strips-container">
            <SecondSectionLeftStripCard />
            <SecondSectionLeftStripCard />
          </div>
        </div>
        <div className="secondsectionmixed-rightsection">
          <SecondSectionRightStripCard />
          <SecondSectionRightStripCard />
          <SecondSectionRightStripCard />
          <SecondSectionRightStripCard />
        </div>
      </div>
    </>
  );
}
