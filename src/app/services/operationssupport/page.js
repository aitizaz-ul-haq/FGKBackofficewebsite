import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";

export default function OperationsSupport() {
  const data = getHeroData("operations-support");
  return (
    <>
      <SubPageHeroSection data={data} />
    </>
  );
}
