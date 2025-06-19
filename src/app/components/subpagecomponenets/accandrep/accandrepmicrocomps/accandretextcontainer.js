import AccHeading from "./accheading";
import AccDescription from "./accdescription";
import AccDescriptionTwo from "./accdescriptiontwo";
import AccButton from "./accbutton";

export default function AccandreTextContainer({
  accheading,
  accdescription,
  accdescriptiontwo,
}) {
  return (
    <div className="accandre-text-container">
      <AccHeading accheading={accheading} />
      <AccDescription accdescription={accdescription} />
      <AccDescriptionTwo accdescriptiontwo={accdescriptiontwo} />
      <AccButton />
    </div>
  );
}
