import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import DataMagGridSection from "@/app/components/subpagecomponenets/datamag/datamaggridsection";
import SecondSectionRightSided from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontyperightsided";
import textdata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagtextdata.json";
import rightstripcarddata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagrightstripdata.json";

import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import DatamagThirdSectionTextData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectiontextdata.json";
import DatamagThirdSectionLeftCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionleftcarddata.json";
import DatamagThirdSectionRightCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionrightcarddata.json";

export default function DataManagement() {
  const data = getHeroData("data-management");
  return (
    <>
      <SubPageHeroSection data={data} />
      <DataMagGridSection />
      <SecondSectionRightSided
        textdata={textdata}
        rightstripcarddata={rightstripcarddata}
      />
      <ThirdProcessSection
        textdata={DatamagThirdSectionTextData}
        leftstripcarddata={DatamagThirdSectionLeftCardData}
        rightstripcarddata={DatamagThirdSectionRightCardData}
      />
    </>
  );
}
