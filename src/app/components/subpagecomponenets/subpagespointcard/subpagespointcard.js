import "./subpagespointcard.css";
import Image from "next/image";

export default function SubPagesPointCard({ advtitle, advdesc, advicon }) {
  return (
    <>
      <div className="subpagespointcard-container">
        <div className="subpagespointcard-uppersection">
          <Image
            src={advicon}
            width={20}
            height={20}
            className="subpagespointcard-bullet"
          />
          <div className="subpagespointcard-heading font-inter">{advtitle}</div>
        </div>
        <div className="subpagespointcard-description font-inter">
          {advdesc}
        </div>
      </div>
    </>
  );
}
