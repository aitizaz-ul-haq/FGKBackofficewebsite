import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import DataMagGridSection from "@/app/components/subpagecomponenets/datamag/datamaggridsection";

export default function DataManagement() {
  const data = getHeroData("data-management");
  return (
    <>
      <SubPageHeroSection data={data} />
      <DataMagGridSection />
    </>
  );
}
