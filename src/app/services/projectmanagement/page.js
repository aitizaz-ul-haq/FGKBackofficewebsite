import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import ProgMagGridSection from "@/app/components/subpagecomponenets/projmanag/promaggridsection";

export default function ProjectManagement() {
  const data = getHeroData("project-management");
  return (
    <>
      <SubPageHeroSection data={data} />
      <ProgMagGridSection />
    </>
  );
}
