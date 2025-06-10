// importing project management service page subcomponents
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import ProgMagGridSection from "@/app/components/subpagecomponenets/projmanag/promaggridsection";
import SecondSectionTypeMixed from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontypemixed";
import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import SubPagesGetStartedSection from "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection";

// importing project management service page data
import textdata from "@/app/data/subpagedata/projectmanagementdata/secondsectiondata/textdata.json";
import leftstripcarddata from "@/app/data/subpagedata/projectmanagementdata/secondsectiondata/leftstripdata.json";
import rightstripcarddata from "@/app/data/subpagedata/projectmanagementdata/secondsectiondata/rightstripdata.json";
import ProjMangThirdSectionTextData from "@/app/data/subpagedata/projectmanagementdata/thirdsectionprojectmanagement/projmangthirdsectiontextdata.json";
import ProjMangThirdSectionLeftCardData from "@/app/data/subpagedata/projectmanagementdata/thirdsectionprojectmanagement/projmangthirdsectionleftcarddata.json";
import ProjMangThirdSectionRightCardData from "@/app/data/subpagedata/projectmanagementdata/thirdsectionprojectmanagement/projmangthirdsectionrightcarddata.json";
import ProjectIndustriesData from "@/app/data/subpagedata/projectmanagementdata/industriesectionprojdata/industriesprojdata.json";
import projadvtextdata from "@/app/data/subpagedata/projectmanagementdata/projmanagementadvantegessectiondata/projmangadvtextdata.json";
import leftprojmangdata from "@/app/data/subpagedata/projectmanagementdata/projmanagementadvantegessectiondata/lefsideadvdataprojmang.json";
import rightprojmangdata from "@/app/data/subpagedata/projectmanagementdata/projmanagementadvantegessectiondata/rightsideadvdataprojmang.json";
import projmanggetstarteddata from "@/app/data/subpagedata/projectmanagementdata/projmanggetstarted.json";

// importing utility method
import { getHeroData } from "@/app/utils/gethreodata";

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
        heading={ProjectIndustriesData.heading}
        text={ProjectIndustriesData.text}
      />
      <SubPagesAdvantegesSection
        advtitle={projadvtextdata.advtitle}
        advdesc={projadvtextdata.advdesc}
        leftdata={leftprojmangdata}
        rightdata={rightprojmangdata}
      />
      <SubPagesGetStartedSection
        headinggetstarted={projmanggetstarteddata.proggridheadinggetstarted}
        descriptiongetstarted={
          projmanggetstarteddata.proggriddescriptiongetstarted
        }
      />
    </>
  );
}
