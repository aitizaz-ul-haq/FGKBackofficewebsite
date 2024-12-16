import Image from "next/image";
import "./styles/homepagebenefitsleftsection.css";
import leftdata from "./data/homepagebenefitsleftdata.json";
import rightdata from "./data/homepagebenefitsrightdata.json";

export default function HomepageBenefitsSection() {
  return (
    <>
      <div className="homepage-benefits-section-heading font-roboto-serif">
        Benefits of FGK Back Office
      </div>
      <div className="homepage-benefits-section">
        <div className="homepage-benefits-left-section">
          {leftdata.map((lefty, index) => (
            <div className="homepage-benefits-point-container" key={index}>
              <div className="homepage-left-section-benefits-listing-container">
                <Image
                  src="/benefits_bullet.png"
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

          <div className="homepage-left-section-image-container">
            <Image
              src="/homepage_left_section.png"
              width={240}
              height={240}
              className="homepage-benefits-left-image"
              alt="benefits-image"
            />
          </div>
        </div>
        <div className="homepage-benefits-right-section">
          <div className="homepage-right-section-image-container">
            <Image
              src="/homepage_right_section.png"
              width={240}
              height={240}
              className="homepage-benefits-left-image"
              alt="benefits-image"
            />
          </div>

          {rightdata.map((righty, index) => (
            <div className="homepage-benefits-point-container" key={index}>
              <div className="homepage-right-section-benefits-listing-container">
                <Image
                  src="/benefits_bullet.png"
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
        </div>
      </div>
    </>
  );
}
