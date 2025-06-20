import RoundedCardButton from "./roundedcardbutton";
import RoundedCardDescription from "./roundedcarddescription";
import RoundedCardHeading from "./roundedcardheading";

export default function RoundedCardTextSection({
  roundedcardheading,
  roundedcarddescription,
  roundedcardtext,
}) {
  return (
    <div className="right-details-section rounded-cards-details-margin">
      <RoundedCardHeading roundedcardheading={roundedcardheading} />
      <RoundedCardDescription roundedcarddescription={roundedcarddescription} />
      <RoundedCardButton roundedcardtext={roundedcardtext} />
    </div>
  );
}
