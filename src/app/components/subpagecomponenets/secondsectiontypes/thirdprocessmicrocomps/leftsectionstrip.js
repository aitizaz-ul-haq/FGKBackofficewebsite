import SecondSectionLeftStripCard from "../secondsectionleftstripcard/secondsectionleftstripcard";

export default function LeftSectionStrip({leftstripcarddata}) {
    return(
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
    );
}