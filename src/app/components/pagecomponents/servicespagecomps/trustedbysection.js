// importing subcomponents
import { TrustedByHeading } from "./subcomps/trustedbyheading";
import { DiLogoSection } from "./subcomps/dilogogsection";

// importing style files
import "./styles/trustedbysection.css";

export default function TrustedBySection() {
  return (
    <div className="trustedby-container">
      <TrustedByHeading />
      <DiLogoSection />
    </div>
  );
}
