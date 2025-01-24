import RoundEndsCards from "../../layoutcomponents/cards/roundedendscard/roundendscard";
import "./styles/roundedcardsection.css";

export default function RoundedCardsSection() {
  return (
    <div className="ourservices-roundedcards-container">
      <div className="ourservices-heading font-roboto-sarif text-light">
        Our Services
      </div>
      <RoundEndsCards />
    </div>
  );
}
