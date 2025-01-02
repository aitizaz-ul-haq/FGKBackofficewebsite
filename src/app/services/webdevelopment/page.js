import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import WebDevGridSection from "@/app/components/subpagecomponenets/webdev/webdevgridsection";

export default function WebDevelopment() {
  const data = getHeroData("web-development");
  return (
    <>
      <SubPageHeroSection data={data} />
      <WebDevGridSection />
    </>
  );
}
