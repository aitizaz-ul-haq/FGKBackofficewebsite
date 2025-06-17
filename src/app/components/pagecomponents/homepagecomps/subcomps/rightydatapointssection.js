import rightdata from "../data/homepagebenefitsrightdata.json";
import Image from "next/image";

export default function RightyDataPointsSection() {
  return (
    <>
      {" "}
      {rightdata.map((righty, index) => (
        <div className="homepage-benefits-point-container" key={index}>
          <div className="homepage-right-section-benefits-listing-container">
            <Image
              src="https://i.postimg.cc/gkbrmYYC/benefits-bullet.webp"
              width={60}
              height={60}
              className=""
              alt="bullet"
            />
            <div className="benefits-point font-inter text-light">
              {righty.benefitspoint}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
