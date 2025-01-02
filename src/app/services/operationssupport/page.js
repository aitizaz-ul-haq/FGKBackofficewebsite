import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import OperatSupGridSection from "@/app/components/subpagecomponenets/operatsup/operatsupgridsection";

export default function OperationsSupport() {
  const data = getHeroData("operations-support");
  return (
    <>
      <SubPageHeroSection data={data} />
      <OperatSupGridSection />
    </>
  );
}
