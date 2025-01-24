// importing subcomponents
import { ImportanceHeadingSection } from "./subcomps/importanceheadingsection";
import { ImportanceCardGridSection } from "./subcomps/importancecardgridsection";
import { CircularCardButtonContainer } from "./subcomps/circularcardbuttoncontainer";

// importing style files
import "./styles/importancesection.css";

export default function ImportSection() {
  return (
    <div className="importance-container">
      <ImportanceHeadingSection />
      <ImportanceCardGridSection />
      <CircularCardButtonContainer />
    </div>
  );
}
