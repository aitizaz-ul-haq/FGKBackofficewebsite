import IndustriesCardRightSectionImageCont from "./industriescardrightsectionimagecont";
import IndustriesCardRightSectionHeading from "./industriescardrightsectionheading";
import IndustriesCardRightSectionDescription from "./industriescardrightsectiondescription";
import IndustriesCardRightSectionButtonCont from "./industriescardrightsectionbuttoncont";

export default function IndustriesCardRightSection({
  cardicon,
  cardheading,
  carddescription,
  cardlink,
  cardhint,
}) {
  return (
    <div className="industriescard-rightsection">
      <IndustriesCardRightSectionImageCont cardicon={cardicon} />
      <IndustriesCardRightSectionHeading cardheading={cardheading} />
      <IndustriesCardRightSectionDescription
        carddescription={carddescription}
      />
      <IndustriesCardRightSectionButtonCont cardlink={cardlink} cardhint={cardhint}/>
    </div>
  );
}
