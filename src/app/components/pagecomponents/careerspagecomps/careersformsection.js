import "./styles/careersformssection.css";
import Image from "next/image";

export default function CareersFormSection() {
  return (
    <>
      <div className="careersforms-container">
        <div className="left-section-instructions">
          <div className="careers-form-logo">
            <Image
              src="/fgk_circular_logo.png"
              alt="FGK logo"
              width={200}
              height={200}
              className="careers-page-logo"
            />
          </div>
          <h2 className="instructions-heading font-roboto-sarif">
            Job Application Instructions
          </h2>
          <div className="instructions-container">
            <div className="instructions-statement font-inter">
              simply dummy text of the printing and typesetting industry.
            </div>
            <div className="instructions-statement font-inter">
              simply dummy text of the printing and typesetting industry. simply
              dummy text of the printing and typesetting industry.
            </div>
            <div className="instructions-statement font-inter">
              simply dummy text of the printing and typesetting industry.
            </div>
            <div className="instructions-statement font-inter">
              simply dummy text of the printing and typesetting industry. simply
              dummy text of the printing and typesetting industry. simply dummy
              text of the printing and typesetting industry.
            </div>
            <div className="instructions-statement font-inter">
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
