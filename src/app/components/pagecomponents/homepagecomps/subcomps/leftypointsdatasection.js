import leftdata from "../data/homepagebenefitsleftdata.json";
import Image from "next/image";

export default function LeftPointsDataSection() {
  return (
    <>
      {leftdata.map((lefty, index) => (
        <div className="homepage-benefits-point-container" key={index}>
          <div className="homepage-left-section-benefits-listing-container">
            <Image
              src="https://i.postimg.cc/gkbrmYYC/benefits-bullet.webp"
              width={60}
              height={60}
              className=""
              alt="bullet"
            />
            <div className="benefits-point font-inter text-light">
              {lefty.benefitspoint}
            </div>
          </div>
        </div>
      ))}
    </>
  );
}
