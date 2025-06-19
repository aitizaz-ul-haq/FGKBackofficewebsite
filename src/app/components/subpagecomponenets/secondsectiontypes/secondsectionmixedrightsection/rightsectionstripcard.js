import SecondSectionRightStripCard from "../secondsectionrightstripcard/secondsectionrightstripcard";

export default function RightSectionStripCard({rightstripcarddata}) {
    return(
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
    );
}