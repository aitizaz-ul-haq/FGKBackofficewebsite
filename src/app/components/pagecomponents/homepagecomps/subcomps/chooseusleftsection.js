import Points from "../data/choosepoints.json";
import Image from "next/image";

export default function ChooseUsLeftSection() {
  return (
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
  );
}
