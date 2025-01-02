import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import HumResGridSection from "@/app/components/subpagecomponenets/humres/humresgridsection";

export default function HumanResources() {
  const data = getHeroData("human-resources");
  return (
    <>
      <SubPageHeroSection data={data} />
      <HumResGridSection />
    </>
  );
}
