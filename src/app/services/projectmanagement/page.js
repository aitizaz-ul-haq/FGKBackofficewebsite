import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";

export default function ProjectManagement() {
  const data = getHeroData("project-management");
  return (
    <>
      <SubPageHeroSection data={data} />
    </>
  );
}
