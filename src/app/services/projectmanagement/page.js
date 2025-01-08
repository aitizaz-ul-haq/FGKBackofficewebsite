import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import ProgMagGridSection from "@/app/components/subpagecomponenets/projmanag/promaggridsection";
import SecondSectionTypeMixed from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypemixed";
import textdata from "@/app/data/subpagedata/projectmanagementdata/secondsectiondata/textdata.json";
import leftstripcarddata from "@/app/data/subpagedata/projectmanagementdata/secondsectiondata/leftstripdata.json";
import rightstripcarddata from "@/app/data/subpagedata/projectmanagementdata/secondsectiondata/rightstripdata.json";

import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import ProjMangThirdSectionTextData from "@/app/data/subpagedata/projectmanagementdata/thirdsectionprojectmanagement/projmangthirdsectiontextdata.json";
import ProjMangThirdSectionLeftCardData from "@/app/data/subpagedata/projectmanagementdata/thirdsectionprojectmanagement/projmangthirdsectionleftcarddata.json";
import ProjMangThirdSectionRightCardData from "@/app/data/subpagedata/projectmanagementdata/thirdsectionprojectmanagement/projmangthirdsectionrightcarddata.json";

import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import HumresIndustriesData from "@/app/data/subpagedata/humresdata/industriesectionhumresdata/industrieshumresdata.json";

import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import assadvtextdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/accadvtextdata.json";

import leftadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/lefsideadvdata.json";
import rightadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/rightsideadvdata.json";

export default function ProjectManagement() {
  const data = getHeroData("project-management");
  return (
    <>
      <SubPageHeroSection data={data} />
      <ProgMagGridSection />
      <SecondSectionTypeMixed
        textdata={textdata}
        leftstripcarddata={leftstripcarddata}
        rightstripcarddata={rightstripcarddata}
      />
      <ThirdProcessSection
        textdata={ProjMangThirdSectionTextData}
        leftstripcarddata={ProjMangThirdSectionLeftCardData}
        rightstripcarddata={ProjMangThirdSectionRightCardData}
      />
      <SubPagesIndustriesSection
        heading={HumresIndustriesData.heading}
        text={HumresIndustriesData.text}
      />
      <SubPagesAdvantegesSection
        advtitle={assadvtextdata.advtitle}
        advdesc={assadvtextdata.advdesc}
        leftdata={leftadvdata}
        rightdata={rightadvdata}
      />
    </>
  );
}
