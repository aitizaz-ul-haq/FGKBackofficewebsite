// importing subcomponenets
import { BcardContainer } from "./subcomps/bcardconatiner";
import { ServicesBenefitsHeading } from "./subcomps/servicesbenefitsheading";

// importing style files
import "./styles/servicebenefitssection.css";

export default function ServicesBenefitsSection() {
  return (
    <div className="services-benefits-container">
      <ServicesBenefitsHeading />
      <BcardContainer />
    </div>
  );
}
