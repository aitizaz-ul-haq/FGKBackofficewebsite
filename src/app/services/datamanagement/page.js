import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import DataMagGridSection from "@/app/components/subpagecomponenets/datamag/datamaggridsection";
import SecondSectionRightSided from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontyperightsided";
import textdata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagtextdata.json";
import rightstripcarddata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagrightstripdata.json";

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
    </>
  );
}
