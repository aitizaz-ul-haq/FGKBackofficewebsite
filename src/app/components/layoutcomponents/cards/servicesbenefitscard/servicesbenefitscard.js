import "./servicesbenefitscard.css";
import BenefitsHeadingRow from "./benefitssectionicrocomps/benefitsheadingrow";
import BenefitsRowDescriptionSection from "./benefitssectionicrocomps/benefitsrowdescriptionsection";
import BenefitsFindOutMoreButton from "./benefitssectionicrocomps/benefitsfindoutmorebutton";

export default function ServicesBenefitsCards({
  benefitname,
  benefitdescription,
}) {
  return (
    <div className="benefits-card-container">
      <BenefitsHeadingRow benefitname={benefitname} />
      <BenefitsRowDescriptionSection benefitdescription={benefitdescription} />
      <BenefitsFindOutMoreButton />
    </div>
  );
}
