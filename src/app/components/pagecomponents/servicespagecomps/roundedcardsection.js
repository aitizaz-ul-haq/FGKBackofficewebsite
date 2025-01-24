// importing sub componenets
import RoundEndsCards from "../../layoutcomponents/cards/roundedendscard/roundendscard";
import { OurServicesSection } from "./subcomps/ourservicessection";

// importing style files
import "./styles/roundedcardsection.css";

export default function RoundedCardsSection() {
  return (
    <div className="ourservices-roundedcards-container">
      <OurServicesSection />
      <RoundEndsCards />
    </div>
  );
}
