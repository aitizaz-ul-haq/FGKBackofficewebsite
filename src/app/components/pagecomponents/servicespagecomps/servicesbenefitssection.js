// importing libraries
import dynamic from "next/dynamic";

// importing style files
import "./styles/servicebenefitssection.css";

// dynamic imports using mod pattern (for named exports)
const BcardContainer = dynamic(() =>
  import("./subcomps/bcardconatiner").then((mod) => mod.BcardContainer)
);

const ServicesBenefitsHeading = dynamic(() =>
  import("./subcomps/servicesbenefitsheading").then(
    (mod) => mod.ServicesBenefitsHeading
  )
);

export default function ServicesBenefitsSection() {
  return (
    <div className="services-benefits-container">
      <ServicesBenefitsHeading />
      <BcardContainer />
    </div>
  );
}
