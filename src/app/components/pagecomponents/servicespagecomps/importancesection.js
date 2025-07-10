import dynamic from "next/dynamic";
import "./styles/importancesection.css";

const ImportanceHeadingSection = dynamic(() =>
  import("./subcomps/importanceheadingsection").then(
    (mod) => mod.ImportanceHeadingSection
  )
);

const ImportanceCardGridSection = dynamic(() =>
  import("./subcomps/importancecardgridsection").then(
    (mod) => mod.ImportanceCardGridSection
  )
);

const CircularCardButtonContainer = dynamic(() =>
  import("./subcomps/circularcardbuttoncontainer").then(
    (mod) => mod.CircularCardButtonContainer
  )
);

export default function ImportSection() {
  return (
    <div className="importance-container">
      <ImportanceHeadingSection />
      <ImportanceCardGridSection />
      <CircularCardButtonContainer />
    </div>
  );
}
