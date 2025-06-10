import "./styles/secondsectiontypemixed.css";
import SecondSectionLeftStripCard from "./secondsectionleftstripcard/secondsectionleftstripcard";
import SecondSectionRightStripCard from "./secondsectionrightstripcard/secondsectionrightstripcard";

export default function SecondSectionTypeMixed({
  textdata,
  leftstripcarddata,
  rightstripcarddata,
}) {
  return (
    <div
      className="secondsectionmixed-container"
      style={{
        backgroundImage: `url(${textdata.pagebackground})`,
      }}
    >
      <div className="secondsectionmixed-leftsection">
        <div className="secondsectionmixed-leftsection-text-container">
          <div className="secondsectionmixed-leftsection-text-heading font-inter">
            {textdata.textsectiontitle}
          </div>
          <div className="secondsectionmixed-leftsection-text-description font-inter">
            {textdata.textsectionparaone}
          </div>
          <div className="secondsectionmixed-leftsection-text-description font-inter">
            {textdata.textsectionparatwo}
          </div>
          <div className="secondsectionmixed-leftsection-text-description font-inter">
            {textdata.textsectionparathree}
          </div>
          <button className="secondsectionmixed-leftsection-text-button font-inter">
            Hire A Professional
          </button>
        </div>
        <div className="secondsectionmixed-leftsection-strips-container">
          {leftstripcarddata.map((strip) => (
            <SecondSectionLeftStripCard
              key={strip.id}
              striptitle={strip.striptitle}
              stripdesc={strip.stripdesc}
              stripicon={strip.stripicon}
            />
          ))}
        </div>
      </div>
      <div className="secondsectionmixed-rightsection">
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
  );
}
