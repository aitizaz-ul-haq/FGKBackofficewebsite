import "./styles/importancesection.css";
import { ImportanceHeadingSection } from "./subcomps/importanceheadingsection";
import { ImportanceCardGridSection } from "./subcomps/importancecardgridsection";
import { CircularCardButtonContainer } from "./subcomps/circularcardbuttoncontainer";

export default function ImportSection() {
  return (
    <div className="importance-container">
      <ImportanceHeadingSection />
      <ImportanceCardGridSection />
      <CircularCardButtonContainer />
    </div>
  );
}
