import RoundEndsCards from "../../layoutcomponents/cards/roundedendscard/roundendscard";
import { OurServicesSection } from "./subcomps/ourservicessection";
import "./styles/roundedcardsection.css";

export default function RoundedCardsSection() {
  return (
    <div className="ourservices-roundedcards-container">
      <OurServicesSection />
      <RoundEndsCards />
    </div>
  );
}
