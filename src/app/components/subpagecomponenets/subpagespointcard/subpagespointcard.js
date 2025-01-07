import "./subpagespointcard.css";
import Image from "next/image";

export default function SubPagesPointCard() {
  return (
    <>
      <div className="subpagespointcard-container">
        <div className="subpagespointcard-uppersection">
          <Image
            // src={}
            width={20}
            height={20}
            className="subpagespointcard-bullet"
          />
          <div className="subpagespointcard-heading font-inter">
            Improved Project Efficiency
          </div>
        </div>
        <div className="subpagespointcard-description font-inter">
          We don’t believe in a one-size-fits-all approach. Every business is
          unique, so we tailor our web development solutions to meet your
          specific goals, whether you need a sleek portfolio site, a powerful
          e-commerce platform, or an interactive web application.
        </div>
      </div>
    </>
  );
}
