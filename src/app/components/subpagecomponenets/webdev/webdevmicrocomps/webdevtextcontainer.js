import WebDevHeading from "./webdevheading";
import WebDevDescription from "./webdevdescription";
import WebDevDescriptionTwo from "./webdevdescriptiontwo";
import WebDevButton from "./webdevbutton";

export default function WebDevTextContainer({
  webdevheading,
  webdevdescription,
  webdevdescriptiontwo,
}) {
  return (
    <div className="webdev-text-container">
      <WebDevHeading webdevheading={webdevheading} />
      <WebDevDescription webdevdescription={webdevdescription} />
      <WebDevDescriptionTwo webdevdescriptiontwo={webdevdescriptiontwo} />
      <WebDevButton />
    </div>
  );
}
