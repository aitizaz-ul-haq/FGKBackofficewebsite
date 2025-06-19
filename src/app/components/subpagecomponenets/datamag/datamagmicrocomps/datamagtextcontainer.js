import DataMagDescription from "./datamagdescriotion";
import DataMagDescriptionTwo from "./datamagdescriptiontwo";
import DataMagHeading from "./datamagheading";
import DataMagButton from "./datamagbutton";

export default function DataMagTextContainer({
  heading,
  description,
  descriptiontwo,
}) {
  return (
    <div className="datamag-text-container">
      <DataMagHeading heading={heading} />
      <DataMagDescription description={description} />
      <DataMagDescriptionTwo descriptiontwo={descriptiontwo} />
      <DataMagButton />
    </div>
  );
}
