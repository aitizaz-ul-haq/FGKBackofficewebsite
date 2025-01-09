import "./styles/industriescardhomepagesection.css";
import HomePageIndustriesCard from "../../layoutcomponents/cards/homepageindustriescard/homepageindustriescard";
import honepageindustriesdata from "./data/industrieshomepagedata.json";

export default function IndustriescardHomePageSection() {
  return (
    <div className="industries-cards-inhomepage-container">
      <div className="industries-cards-inhomepage-heading font-inter">
        Industries
      </div>
      <div className="industries-homepage-grid-container">
        {honepageindustriesdata.map((inddata, index) => (
          <HomePageIndustriesCard
            inddata={inddata}
            key={index}
            isLast={index === honepageindustriesdata.length - 1}
          />
        ))}
      </div>
    </div>
  );
}
