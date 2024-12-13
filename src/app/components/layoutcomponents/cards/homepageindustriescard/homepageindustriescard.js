import "./homepageindustriescard.css";
import HomepageIndustriesCardCircularIcon from "./cardcomps/homepageindustriescardcircularicon";
import HomepageIndustriesCardHeading from "./cardcomps/homepageindustriescardheading";
import HomepageIndustriesCardDescription from "./cardcomps/homepageindustriescarddescription";

export default function HomePageIndustriesCard({ inddata, isLast }) {
  return (
    <div
      className={`homepage-industriescard-container ${
        isLast ? "last-industry-card" : ""
      }`}
    >
      <HomepageIndustriesCardCircularIcon cardicon={inddata.cardicon} />
      <HomepageIndustriesCardHeading cardtitle={inddata.cardtitle} />
      {/* <HomepageIndustriesCardDescription
        carddescription={inddata.carddescription}
      /> */}
      <div className="homepage-industriescard-description font-inter text-light">
        {inddata.carddescription}
      </div>
      <div className="homepage-industriescard-button font-inter text-light">
        Discover More
      </div>
    </div>
  );
}
