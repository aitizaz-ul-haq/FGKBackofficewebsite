import "./styles/thirdprocesssection.css";
import SecondSectionLeftStripCard from "./secondsectionleftstripcard/secondsectionleftstripcard";
import SecondSectionRightStripCard from "./secondsectionrightstripcard/secondsectionrightstripcard";

export default function ThirdProcessSection({
  textdata,
  leftstripcarddata,
  rightstripcarddata,
}) {
  return (
    <div
      className="thirdprocesssection-container"
      style={{
        backgroundImage: `url(${textdata.thirdsectionpagebackground})`,
      }}
    >
      <div className="thirdprocesssection-sections-container">
        <div className="thirdprocesssection-leftsection-text-container">
          <div className="thirdprocesssection-leftsection-text-heading font-inter">
            {textdata.thirdsectiontitle}
          </div>
          <div className="thirdprocesssection-leftsection-text-description font-inter">
            {textdata.thirdsectionparaone}
          </div>
          <div className="thirdprocesssection-leftsection-text-description font-inter">
            {textdata.thirdtextsectionparatwo}
          </div>
          <button className="thirdprocesssection-leftsection-text-button font-inter">
            Hire A Professional
          </button>
        </div>
      </div>
      <div className="thirdprocesssection-bottom-container">
        <div className="thirdprocesssection-leftsection-strips-container">
          {leftstripcarddata.map((strip) => (
            <SecondSectionLeftStripCard
              key={strip.id}
              striptitle={strip.striptitle}
              stripdesc={strip.stripdesc}
              stripicon={strip.stripicon}
            />
          ))}
        </div>
        <div className="thirdprocesssection-rightsection">
          {rightstripcarddata.map((rightstrip) => (
            <SecondSectionRightStripCard
              key={rightstrip.id}
              striptitle={rightstrip.striptitle}
              stripdesc={rightstrip.stripdesc}
              stripicon={rightstrip.stripicon}
            />
          ))}
        </div>
      </div>
      <button className="thirdprocesssection-bottom-button font-inter">
        Hire A Professional
      </button>
    </div>
  );
}
