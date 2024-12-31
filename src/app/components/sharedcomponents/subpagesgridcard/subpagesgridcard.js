import "./subpagesgridcard.css";
import Image from "next/image";

export default function SubPagesGridCard({
  gridcardicon,
  gridcardheading,
  gridcarddescription,
}) {
  return (
    <div className="subpagesgridcard-container">
      <Image
        src={gridcardicon}
        width={70}
        height={70}
        className="subpagesgridcard-icon"
      />
      <div className="subpagesgridcard-card-heading font-inter">
        {gridcardheading}
      </div>
      <div className="subpagesgridcard-card-description font-inter">
        {gridcarddescription}
      </div>
    </div>
  );
}
