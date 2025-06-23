import "./styles/industriescardhomepagesection.css";
import IndustriesCardInHomePageHeading from "./subcomps/microcomps/industriescardinhomepageheading";
import IndustriesCardsInHomepageContainer from "./subcomps/microcomps/industriescardsinhomepagecontainer";
import honepageindustriesdata from "./data/industrieshomepagedata.json";

export default function IndustriescardHomePageSection() {
  return (
    <div className="industries-cards-inhomepage-container">
     <IndustriesCardInHomePageHeading />
     <IndustriesCardsInHomepageContainer honepageindustriesdata={honepageindustriesdata} />
    </div>
  );
}
