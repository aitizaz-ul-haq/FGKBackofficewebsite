import dynamic from "next/dynamic";
import "./subpagesgetstartedsection.css";

const GetStartedTextContainer = dynamic(() =>
  import("./getstartedmicrocomps/getstartedtextcontainer")
);

const GetStartedSectionButton = dynamic(() =>
  import("./getstartedmicrocomps/getstartedsectionbutton")
);

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
