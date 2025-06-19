import SecondSectionRightStripCard from "../secondsectionrightstripcard/secondsectionrightstripcard";

export default function RightSidedRIghtSection({ rightstripcarddata }) {
  return (
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
  );
}
