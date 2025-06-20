import SecondSectionLeftStripCard from "../secondsectionleftstripcard/secondsectionleftstripcard";

export default function LeftBottomLeftSection({leftstripcarddata}) {
    return(
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
    );
}