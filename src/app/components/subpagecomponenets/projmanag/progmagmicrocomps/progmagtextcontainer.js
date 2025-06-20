import ProgMagHeading from "./progmagheading";
import ProgMagDescription from "./progmagdescription";
import ProgMagDescriptionTwo from "./progmagdescriptiontwo";
import ProgMagButton from "./progmagbutton";

export default function ProgMagTextContainer({
  progmagheading,
  progmagdescription,
  progmagdescriptiontwo,
}) {
  return (
    <div className="progmag-text-container">
      <ProgMagHeading progmagheading={progmagheading} />
      <ProgMagDescription progmagdescription={progmagdescription} />
      <ProgMagDescriptionTwo progmagdescriptiontwo={progmagdescriptiontwo} />
      <ProgMagButton />
    </div>
  );
}
