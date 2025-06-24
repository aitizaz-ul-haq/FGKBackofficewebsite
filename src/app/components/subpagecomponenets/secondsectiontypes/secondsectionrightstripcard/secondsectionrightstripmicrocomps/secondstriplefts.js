import LeftyTitle from "./leftytitle";
import LeftyDesc from "./leftydesc";

export default function SecondStripLeft({ striptitle, stripdesc }) {
  return (
    <div className="secondsectionstripcardright-leftsection">
     <LeftyTitle striptitle={striptitle} />
     <LeftyDesc stripdesc={stripdesc} />
    </div>
  );
}
