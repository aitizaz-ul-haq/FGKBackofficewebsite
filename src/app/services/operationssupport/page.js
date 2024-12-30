import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";

export default function OperationsSupport() {
  const data = getHeroData("web-development");
  return (
    <>
      <SubPageHeroSection data={data} />
      {/* Other page content */}
    </>
  );
}
