import { BcardContainer } from "./subcomps/bcardconatiner";
import { ServicesBenefitsHeading } from "./subcomps/servicesbenefitsheading";
import "./styles/servicebenefitssection.css";

export default function ServicesBenefitsSection() {
  return (
    <div className="services-benefits-container">
      <ServicesBenefitsHeading />
      <BcardContainer />
    </div>
  );
}
