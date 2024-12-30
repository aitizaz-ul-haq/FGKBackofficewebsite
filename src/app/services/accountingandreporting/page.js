import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";

export default function AccountingAndReporting() {
  const data = getHeroData("accounting-&-reporting");
  return (
    <>
      <SubPageHeroSection data={data} />
    </>
  );
}
