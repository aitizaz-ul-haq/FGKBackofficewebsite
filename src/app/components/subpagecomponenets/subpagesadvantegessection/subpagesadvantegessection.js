import "./subpagesadvantegessection.css";
import SubPagesPointCard from "../subpagespointcard/subpagespointcard";

export default function SubPagesAdvantegesSection() {
  return (
    <>
      <div className="subpagesadvantegessection-container">
        <div className="subpagesadvantegessection-leftsection-container">
          <div className="subpagesadvantegessection-heading font-inter">
            Advantages of Our Accounting & Reporting Services
          </div>
          <div className="subpagesadvantegessection-description font-inter">
            Choosing us for project management brings numerous benefits that
            drive the success of your projects. By leveraging our expertise,
            commitment to excellence, and client-focused approach, you will see
            significant improvements in both project outcomes and operational
            efficiency.
          </div>
        </div>

        <div className="subpagesadvantegessection-rightsection-container">
          <div className="advantegespoints-container">
            <div className="left-list">
              <SubPagesPointCard />
              <SubPagesPointCard />
              <SubPagesPointCard />
              <SubPagesPointCard />
            </div>
            <div className="right-list">
              <SubPagesPointCard />
              <SubPagesPointCard />
              <SubPagesPointCard />
              <SubPagesPointCard />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
