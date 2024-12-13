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
      <HomepageIndustriesCardCircularIcon inddata={inddata} />
      <HomepageIndustriesCardHeading inddata={inddata} />
      <HomepageIndustriesCardDescription nddata={inddata} />
      <div className="homepage-industriescard-button font-inter text-light">
        Discover More
      </div>
    </div>
  );
}
