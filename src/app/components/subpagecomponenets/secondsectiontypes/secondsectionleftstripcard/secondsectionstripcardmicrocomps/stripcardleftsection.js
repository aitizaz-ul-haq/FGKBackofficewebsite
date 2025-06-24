import StripTitle from "./striptitle";
import StripDesc from "./stripdesc";

export default function StripCardLeftSection({ striptitle, stripdesc }) {
  return (
    <div className="secondsectionstripcard-leftsection">
      <StripTitle striptitle={striptitle} />
      <StripDesc stripdesc={stripdesc} />
    </div>
  );
}
