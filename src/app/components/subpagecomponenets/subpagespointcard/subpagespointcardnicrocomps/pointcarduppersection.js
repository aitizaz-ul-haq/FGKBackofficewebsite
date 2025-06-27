import UpperSectionImageContainer from "./uppersectionimagecontiner";

export default function PointCardUpperSection({advicon, advtitle}) {
    return(
        <div className="subpagespointcard-uppersection">
        <UpperSectionImageContainer advicon={advicon} />
        <div className="subpagespointcard-heading font-inter">{advtitle}</div>
      </div>
    );
}