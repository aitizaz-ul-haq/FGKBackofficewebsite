import SecondSectionRightStripCard from "../secondsectionrightstripcard/secondsectionrightstripcard";

export default function RightSectionStrip({rightstripcarddata}) {
    return(
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
    );
}