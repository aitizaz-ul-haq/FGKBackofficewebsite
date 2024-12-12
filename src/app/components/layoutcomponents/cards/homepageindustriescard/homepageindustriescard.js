import "./homepageindustriescard.css";
import Image from "next/image";

export default function HomePageIndustriesCard() {
  return (
    <div className="homepage-industriescard-container">
      <div className="homepage-industriescard-circular-icon-container">
        <Image
          src="/Data_managment_icon_card.png"
          width={123}
          height={123}
          className="homepage-industriescard-circular-icon"
        />
      </div>
      <div className="homepage-industriescard-heading font-inter text-light">
        Data Manegement
      </div>
      <div className="homepage-industriescard-description font-inter text-light">
        simply dummy text of the printing and typesetting industry. Lorem Ipsum
        has been the industry's standard dummy text ever since the 1500s, when
        an unknown printer took a galley
      </div>
      <div className="homepage-industriescard-button font-inter text-light">
        Discover More
      </div>
    </div>
  );
}
