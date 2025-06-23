import Image from "next/image";

export default function PointsListContainer({ Points }) {
  return (
    <div className="points-list-container">
      {Points.map((point, index) => (
        <div className="chooseus-point" key={point.id}>
          <Image
            src="https://i.postimg.cc/x82YD1Kg/choose-mark.webp"
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
  );
}
