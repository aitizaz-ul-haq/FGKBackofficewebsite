import "./homepageindustriescard.css";
import Image from "next/image";

export default function HomePageIndustriesCard({ inddata, isLast }) {
  return (
    <div
      className={`homepage-industriescard-container ${
        isLast ? "last-industry-card" : ""
      }`}
    >
      <div className="homepage-industriescard-circular-icon-container">
        <Image
          src={inddata.cardicon}
          width={123}
          height={123}
          className="homepage-industriescard-circular-icon"
        />
      </div>
      <div className="homepage-industriescard-heading font-inter text-light">
        {inddata.cardtitle}
      </div>
      <div className="homepage-industriescard-description font-inter text-light">
        {inddata.carddescription}
      </div>
      <div className="homepage-industriescard-button font-inter text-light">
        Discover More
      </div>
    </div>
  );
}
