import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import AccRepGridSection from "@/app/components/subpagecomponenets/accandrep/accrepgridsection";

export default function AccountingAndReporting() {
  const data = getHeroData("accounting-&-reporting");
  return (
    <>
      <SubPageHeroSection data={data} />
      <AccRepGridSection />
    </>
  );
}
