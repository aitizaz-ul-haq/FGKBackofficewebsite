// importing operations support service pages subcomponents
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import OperatSupGridSection from "@/app/components/subpagecomponenets/operatsup/operatsupgridsection";
import SecondSectionTypeMixed from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypemixed";
import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import SubPagesGetStartedSection from "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection";

// importing operations support service page data
import operatetextdata from "@/app/data/subpagedata/operatsup/secondsectionoperatsudata/operatsupsecondsectiontextdata.json";
import operateleftstripdata from "@/app/data/subpagedata/operatsup/secondsectionoperatsudata/operatesupleftstripdata.json";
import operaterightstripdata from "@/app/data/subpagedata/operatsup/secondsectionoperatsudata/operatesuprightstripdata.json";
import OperatsupThirdSectionTextData from "@/app/data/subpagedata/operatsup/thirdsectionoperatsup/operatsupthirdsectiontextdata.json";
import OperatsupThirdSectionLeftCardData from "@/app/data/subpagedata/operatsup/thirdsectionoperatsup/operatsupthirdsectionleftcarddata.json";
import OperatsupThirdSectionRightCardData from "@/app/data/subpagedata/operatsup/thirdsectionoperatsup/operatsupthirdsectionrightcarddata.json";
import Operatesupindustriesdata from "@/app/data/subpagedata/operatsup/industriesoperatesupdata.json";
import Operatesupadvtextdata from "@/app/data/subpagedata/operatsup/operatesupvantegessectiondata/operatesupdvtextdata.json";
import Operatesupleftdata from "@/app/data/subpagedata/operatsup/operatesupvantegessectiondata/operatesuplefsideadvdata.json";
import Operatesuprightdata from "@/app/data/subpagedata/operatsup/operatesupvantegessectiondata/operatesuprightsideadvdata.json";
import Operatesupgetstarteddata from "@/app/data/subpagedata/operatsup/operatesupgettingstarted.json";

// importing utility methods
import { getHeroData } from "@/app/utils/gethreodata";

export default function OperationsSupport() {
  const data = getHeroData("operations-support");
  return (
    <>
      <SubPageHeroSection data={data} />
      <OperatSupGridSection />
      <SecondSectionTypeMixed
        textdata={operatetextdata}
        leftstripcarddata={operateleftstripdata}
        rightstripcarddata={operaterightstripdata}
      />
      <ThirdProcessSection
        textdata={OperatsupThirdSectionTextData}
        leftstripcarddata={OperatsupThirdSectionLeftCardData}
        rightstripcarddata={OperatsupThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={Operatesupindustriesdata.heading}
        text={Operatesupindustriesdata.text}
      />
      <SubPagesAdvantegesSection
        advtitle={Operatesupadvtextdata.advtitle}
        advdesc={Operatesupadvtextdata.advdesc}
        leftdata={Operatesupleftdata}
        rightdata={Operatesuprightdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={Operatesupgetstarteddata.heading}
        descriptiongetstarted={Operatesupgetstarteddata.text}
      />
    </>
  );
}
