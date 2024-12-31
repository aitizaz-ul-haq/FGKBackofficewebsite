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
        // src={gridcardicon}
        src="/end_to_end_project_management_icon.png"
        width={70}
        height={70}
        className="subpagesgridcard-icon"
      />
      <div className="subpagesgridcard-card-heading font-inter">
        {/* {gridcardheading} */}
        End-to-End Project Management
      </div>
      <div className="subpagesgridcard-card-description font-inter">
        {/* {gridcarddescription} */}
        Partner with us to develop and implement effective HR strategies that
        align with your company’s goals. From workforce planning and talent
        acquisition to employee retention and performance management, we offer
        tailored solutions that drive sustainable growth.
      </div>
    </div>
  );
}
