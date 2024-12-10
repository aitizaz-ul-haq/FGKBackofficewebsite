import ServicesBenefitsCards from "../../layoutcomponents/cards/servicesbenefitscard/servicesbenefitscard";
import benefitdata from "./data/benefitsdata.json";
import "./styles/servicebenefitssection.css";

export default function ServicesBenefitsSection() {
  return (
    <>
      <div className="services-benefits-container">
        <div className="services-benefits-heading font-roboto-sarif text-light">
          Services Benefits
        </div>
        <div className="bcard-container">
          {benefitdata.map((bdata, index) => (
            <ServicesBenefitsCards
              key={index}
              benefitname={bdata.benefitname}
              benefitdescription={bdata.benefitdescription}
            />
          ))}
        </div>
      </div>
    </>
  );
}
