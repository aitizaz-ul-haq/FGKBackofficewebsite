import "./subpagesgetstartedsection.css";
import GetStartedTextContainer from "./getstartedmicrocomps/getstartedtextcontainer";
import GetStartedSectionButton from "./getstartedmicrocomps/getstartedsectionbutton";

export default function SubPagesGetStartedSection({
  headinggetstarted,
  descriptiongetstarted,
}) {
  return (
    <div className="subpagesgetstartedsection-container">
      <GetStartedTextContainer
        getstartedheading={headinggetstarted}
        getstarteddescription={descriptiongetstarted}
      />
      <GetStartedSectionButton />
    </div>
  );
}
