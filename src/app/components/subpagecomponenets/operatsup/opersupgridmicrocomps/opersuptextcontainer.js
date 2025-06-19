import OpersupTextHeading from "./opersuptextheading";
import OpersupTextDescription from "./opersuptextdescription";
import OpersupTextDescriptionTwo from "./opersuptextdescriptiontwo";
import OpersupSectionButton from "./opersupsectionbutton";

export default function OpersupTextContainer({
  heading,
  description,
  descriptontwo,
}) {
  return (
    <div className="operatsup-text-container">
      <OpersupTextHeading heading={heading} />
      <OpersupTextDescription description={description} />
      <OpersupTextDescriptionTwo descriptontwo={descriptontwo}/>
      <OpersupSectionButton />
    </div>
  );
}
