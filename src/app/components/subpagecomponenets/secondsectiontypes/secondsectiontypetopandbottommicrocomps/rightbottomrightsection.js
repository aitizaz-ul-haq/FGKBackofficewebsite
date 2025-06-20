import SecondSectionRightStripCard from "../secondsectionrightstripcard/secondsectionrightstripcard";

export default function RIghtBottomRightSection({rightstripcarddata}) {
    return(
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
    );
}