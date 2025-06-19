import GetStartedHeadingSection from "./getstartedheadingsection";
import GetStartedDescriptionSection from "./getstarteddescriptionsection";

export default function GetStartedTextContainer({
  getstartedheading,
  getstarteddescription,
}) {
  return (
    <div className="subpagesgetstartedsection-text-container">
      <GetStartedHeadingSection heading={getstartedheading} />
      <GetStartedDescriptionSection description={getstarteddescription} />
    </div>
  );
}
