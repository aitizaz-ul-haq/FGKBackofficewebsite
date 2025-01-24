// importing sub componenets
import { RightSectionInstructions } from "./subcomps/rightsectioninstructions";
import { LeftSectionInstruction } from "./subcomps/leftsectioninstructions";

// importing style files
import "./styles/careersformssection.css";

export default function CareersFormSection() {
  return (
    <div className="careersforms-container">
      <LeftSectionInstruction />
      <RightSectionInstructions />
    </div>
  );
}
