import BenefitsHeadingRowName from "./benefitsheadingrowname";
import BenefitsRowImageSection from "./benefitsrowimagesection";

export default function BenefitsHeadingRow({ benefitname }) {
  return (
    <div className="benefits-heading-row">
      <BenefitsRowImageSection />
      <BenefitsHeadingRowName benefitname={benefitname} />
    </div>
  );
}
