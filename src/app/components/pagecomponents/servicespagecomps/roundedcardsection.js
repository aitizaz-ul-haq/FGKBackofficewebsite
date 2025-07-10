// importing libraries
import dynamic from "next/dynamic";

// importing style files
import "./styles/roundedcardsection.css";

// dynamic imports
const OurServicesSection = dynamic(() =>
  import("./subcomps/ourservicessection").then((mod) => mod.OurServicesSection)
);

const RoundEndsCards = dynamic(() =>
  import("../../layoutcomponents/cards/roundedendscard/roundendscard").then(
    (mod) => mod.default
  )
);

export default function RoundedCardsSection() {
  return (
    <div className="ourservices-roundedcards-container">
      <OurServicesSection />
      <RoundEndsCards />
    </div>
  );
}
