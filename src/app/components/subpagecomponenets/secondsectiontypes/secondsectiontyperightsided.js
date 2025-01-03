import "./styles/secondsectiontyperightsided.css";
import SecondSectionRightStripCard from "./secondsectionrightstripcard/secondsectionrightstripcard";

export default function SecondSectionRightSided({
  textdata,
  leftstripcarddata,
  rightstripcarddata,
}) {
  return (
    <>
      <div
        className="secondsectionrightsided-container"
        style={{
          backgroundImage: `url(${textdata.pagebackground})`,
        }}
      >
        <div className="secondsectionrightsided-leftsection">
          <div className="secondsectionrightsided-leftsection-text-container">
            <div className="secondsectionrightsided-leftsection-text-heading font-inter">
              {textdata.textsectiontitle}
            </div>
            <div className="secondsectionrightsided-leftsection-text-description font-inter">
              {textdata.textsectionparaone}
            </div>
            <div className="secondsectionrightsided-leftsection-text-description font-inter">
              {textdata.textsectionparatwo}
            </div>
            <button className="secondsectionrightsided-leftsection-text-button font-inter">
              Hire A Professional
            </button>
          </div>
        </div>
        <div className="secondsectionrightsided-rightsection">
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
    </>
  );
}
