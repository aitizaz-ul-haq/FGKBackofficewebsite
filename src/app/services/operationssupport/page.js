import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import OperatSupGridSection from "@/app/components/subpagecomponenets/operatsup/operatsupgridsection";
import SecondSectionTypeMixed from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypemixed";
import operatetextdata from "@/app/data/subpagedata/operatsup/secondsectionoperatsudata/operatsupsecondsectiontextdata.json";
import operateleftstripdata from "@/app/data/subpagedata/operatsup/secondsectionoperatsudata/operatesupleftstripdata.json";
import operaterightstripdata from "@/app/data/subpagedata/operatsup/secondsectionoperatsudata/operatesuprightstripdata.json";

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
    </>
  );
}
