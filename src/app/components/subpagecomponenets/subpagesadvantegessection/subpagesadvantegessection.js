import "./subpagesadvantegessection.css";
import SubPagesPointCard from "../subpagespointcard/subpagespointcard";

export default function SubPagesAdvantegesSection({
  advtitle,
  advdesc,
  leftdata,
  rightdata,
}) {
  return (
    <div className="subpagesadvantegessection-container">
      <div className="subpagesadvantegessection-leftsection-container">
        <div className="subpagesadvantegessection-heading font-inter">
          {advtitle}
        </div>
        <div className="subpagesadvantegessection-description font-inter">
          {advdesc}
        </div>
      </div>

      <div className="subpagesadvantegessection-rightsection-container">
        <div className="advantegespoints-container">
          <div className="left-list">
            {leftdata.map((lefty) => (
              <SubPagesPointCard
                key={lefty.id}
                advtitle={lefty.advlefttitle}
                advdesc={lefty.advdesc}
                advicon={lefty.advicon}
              />
            ))}
          </div>
          <div className="right-list">
            {rightdata.map((righty) => (
              <SubPagesPointCard
                key={righty.id}
                advtitle={righty.advrighttitle}
                advdesc={righty.advdesc}
                advicon={righty.advicon}
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}
