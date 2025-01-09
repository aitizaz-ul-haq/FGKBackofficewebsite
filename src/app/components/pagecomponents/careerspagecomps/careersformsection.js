import "./styles/careersformssection.css";
import Image from "next/image";
import ApplyForm from "./subcomps/applyform";

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
          <h2 className="instructions-heading font-inter">
            Job Application Instructions
          </h2>
          <div className="instructions-container">
            <div className="instructions-statement font-inter">
              Ensure you enter your first and last name as they appear on
              official documents.
            </div>
            <div className="instructions-statement font-inter">
              Fill in your active email address and phone number for further
              communication.
            </div>
            <div className="instructions-statement font-inter">
              Attach your updated resume in PDF format (maximum size: 5MB)
            </div>
            <div className="instructions-statement font-inter">
              Briefly summarize your relevant skills and professional background
              in the provided text box.
            </div>
            <div className="instructions-statement font-inter">
              Verify all fields are correctly filled out before clicking the
              “Submit” button.
            </div>
          </div>
        </div>

        <div className="right-section-instructions">
          <ApplyForm />
        </div>
      </div>
    </>
  );
}
