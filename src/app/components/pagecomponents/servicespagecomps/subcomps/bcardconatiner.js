import benefitdata from "../data/benefitsdata.json";
import ServicesBenefitsCards from "@/app/components/layoutcomponents/cards/servicesbenefitscard/servicesbenefitscard";

export const BcardContainer = () => {
  return (
    <div className="bcard-container">
      {benefitdata.map((bdata, index) => (
        <ServicesBenefitsCards
          key={index}
          benefitname={bdata.benefitname}
          benefitdescription={bdata.benefitdescription}
        />
      ))}
    </div>
  );
};
