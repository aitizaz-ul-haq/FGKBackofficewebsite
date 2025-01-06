import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import HumResGridSection from "@/app/components/subpagecomponenets/humres/humresgridsection";
import SecondSectionRightSided from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontyperightsided";
import humrestextdata from "@/app/data/subpagedata/humresdata/secondsectionhumanresourcesdata/humrestextdata.json";
import humresrightsidestripdata from "@/app/data/subpagedata/humresdata/secondsectionhumanresourcesdata/humresrightstripdata.json";

export default function HumanResources() {
  const data = getHeroData("human-resources");
  return (
    <>
      <SubPageHeroSection data={data} />
      <HumResGridSection />
      <SecondSectionRightSided
        textdata={humrestextdata}
        rightstripcarddata={humresrightsidestripdata}
      />
    </>
  );
}
