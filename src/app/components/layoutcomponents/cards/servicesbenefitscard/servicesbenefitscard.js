import "./servicesbenefitscard.css";
import Image from "next/image";

export default function ServicesBenefitsCards({
  benefitname,
  benefitdescription,
}) {
  return (
    <>
      <div className="benefits-card-container">
        <div className="benefits-heading-row">
          <div className="benefits-icon-box">
            <Image
              src="/services_benefits_icon.png"
              alt="services benefit"
              width={40}
              height={40}
              className="services-benefits-icon"
            />
          </div>
          <div className="benefits-heading font-roboto-sarif text-light">
            {benefitname}
          </div>
        </div>
        <div className="benefits-description font-inter text-light">
          {benefitdescription}
        </div>
        <div className="benefits-find-out-more-link font-inter">
          Find Out More -
        </div>
      </div>
    </>
  );
}
