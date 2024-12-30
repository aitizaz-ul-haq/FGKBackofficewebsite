import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";

export default function DataManagement() {
  const data = getHeroData("data-management");
  return (
    <>
      <SubPageHeroSection data={data} />
    </>
  );
}
