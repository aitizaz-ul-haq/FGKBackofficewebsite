import "./styles/careersformsection.css";
import Image from "next/image";

export default function CareersFormSection() {
  return (
    <>
      <div className="careersforms-container">
        <div className="left-section-instructions">
          <div className="careers-form-logo">
            <Image
              src="/careerspage_logo.png"
              alt="FGK logo"
              width={80}
              height={80}
              className="careers-page-logo"
            />
          </div>
          <h2 className="instructions-heading">Job Application Instructions</h2>
          <div className="instructions-container">
            <div className="instructions-statement">
              simply dummy text of the printing and typesetting industry.
            </div>
            <div className="instructions-statement">
              simply dummy text of the printing and typesetting industry. simply
              dummy text of the printing and typesetting industry.
            </div>
            <div className="instructions-statement">
              simply dummy text of the printing and typesetting industry.
            </div>
            <div className="instructions-statement">
              simply dummy text of the printing and typesetting industry. simply
              dummy text of the printing and typesetting industry. simply dummy
              text of the printing and typesetting industry.
            </div>
            <div className="instructions-statement">
              simply dummy text of the printing and typesetting industry.
            </div>
          </div>
        </div>

        <div className="right-section-instructions">
          <form></form>
        </div>
      </div>
    </>
  );
}
