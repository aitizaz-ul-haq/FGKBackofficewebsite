import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import AccRepGridSection from "@/app/components/subpagecomponenets/accandrep/accrepgridsection";
import SecondSectionTypeTopAndBottom from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypetopandbottom";
import accreptextdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accreptextdata.json";
import accrepleftstripdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accrepleftstripdata.json";
import accreprightstripdata from "@/app/data/subpagedata/accandrepdata/secondsectionaccrep/accreprightstripdata.json";

import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import AccrepThirdSectionTextData from "@/app/data/subpagedata/accandrepdata/thirdsectionaccrep/accrepthirdsectiontextdata.json";
import AccrepThirdSectionLeftCardData from "@/app/data/subpagedata/accandrepdata/thirdsectionaccrep/accrepthirdsectionleftcarddata.json";
import AccrepThirdSectionRightCardData from "@/app/data/subpagedata/accandrepdata/thirdsectionaccrep/accrepthirdsectionrightcarddata.json";

import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import HumresIndustriesData from "@/app/data/subpagedata/humresdata/industriesectionhumresdata/industrieshumresdata.json";

export default function AccountingAndReporting() {
  const data = getHeroData("accounting-&-reporting");
  return (
    <>
      <SubPageHeroSection data={data} />
      <AccRepGridSection />
      <SecondSectionTypeTopAndBottom
        textdata={accreptextdata}
        leftstripcarddata={accrepleftstripdata}
        rightstripcarddata={accreprightstripdata}
      />
      <ThirdProcessSection
        textdata={AccrepThirdSectionTextData}
        leftstripcarddata={AccrepThirdSectionLeftCardData}
        rightstripcarddata={AccrepThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={HumresIndustriesData.heading}
        text={HumresIndustriesData.text}
      />
    </>
  );
}
