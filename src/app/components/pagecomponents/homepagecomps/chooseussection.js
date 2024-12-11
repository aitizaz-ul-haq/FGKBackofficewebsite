import "./styles/chooseussection.css";
import Image from "next/image";
import Points from "./data/chooseuspoints.json";

export default function ChooseUsSection() {
  return (
    <>
      <div className="chooseus-container">
        <div className="chooseus-left-section">
          <div className="chooseus-heading font-robot-sarif text-light">
            Why Choose Us
          </div>
          <div className="points-list-container">
            {Points.map((point, index) => (
              <div className="chooseus-point" key={point.id}>
                <Image
                  src="/choose-mark.png"
                  width={50}
                  height={50}
                  className="mark-icon"
                  alt={`Point ${index + 1}`}
                />
                <p className="point-description font-inter text-light">
                  {point.point}
                </p>
              </div>
            ))}
          </div>
        </div>
        <div className="chooseus-right-section">
          <Image
            src="/our-motto.png"
            width={550}
            height={550}
            className="our-motto-img"
          />
        </div>
      </div>
    </>
  );
}
