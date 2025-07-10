import "./homepageindustriescard.css";
import Image from "next/image";
import Link from "next/link";

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
          alt="industries icons image"
        />
      </div>
      <div className="homepage-industriescard-heading font-inter text-light">
        {inddata.cardtitle}
      </div>
      <div className="homepage-industriescard-description font-inter text-light">
        {inddata.carddescription}
      </div>
      <Link
        href={inddata.buttonlink}
        className="buttonlinkage"
        title="Discover Industry Solutions"
      >
        <button className="homepage-industriescard-button font-inter text-light">
          Discover More
        </button>
      </Link>
    </div>
  );
}
