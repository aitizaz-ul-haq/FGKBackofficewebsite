import "./styles/secondsectiontypetopandbottom.css";
import SecondSectionLeftStripCard from "./secondsectionleftstripcard/secondsectionleftstripcard";
import SecondSectionRightStripCard from "./secondsectionrightstripcard/secondsectionrightstripcard";

export default function SecondSectionTypeTopAndBottom({
  textdata,
  leftstripcarddata,
  rightstripcarddata,
}) {
  return (
    <>
      <div
        className="secondsectiontypetopandbottom-container"
        style={{
          backgroundImage: `url(${textdata.pagebackground})`,
        }}
      >
        <div className="secondsectiontypetopandbottom-container">
          <div className="secondsectiontypetopandbottom-leftsection-text-container">
            <div className="secondsectiontypetopandbottom-leftsection-text-heading font-inter">
              {textdata.textsectiontitle}
            </div>
            <div className="secondsectiontypetopandbottom-leftsection-text-description font-inter">
              {textdata.textsectionparaone}
            </div>
            <div className="secondsectiontypetopandbottom-leftsection-text-description font-inter">
              {textdata.textsectionparatwo}
            </div>
            <button className="secondsectiontypetopandbottom-leftsection-text-button font-inter">
              Hire A Professional
            </button>
          </div>
        </div>
        <div className="secondsectiontypetopandbottom-bottom-container">
          <div className="secondsectiontypetopandbottom-leftsection-strips-container">
            {leftstripcarddata.map((strip) => (
              <SecondSectionLeftStripCard
                key={strip.id}
                striptitle={strip.striptitle}
                stripdesc={strip.stripdesc}
                stripicon={strip.stripicon}
              />
            ))}
          </div>
          <div className="secondsectiontypetopandbottom-rightsection">
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
      </div>
    </>
  );
}
