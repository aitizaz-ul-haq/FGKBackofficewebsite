import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import { getHeroData } from "@/app/utils/gethreodata";
import DataMagGridSection from "@/app/components/subpagecomponenets/datamag/datamaggridsection";
import SecondSectionRightSided from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontyperightsided";
import textdata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagtextdata.json";
import rightstripcarddata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagrightstripdata.json";
import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import DatamagThirdSectionTextData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectiontextdata.json";
import DatamagThirdSectionLeftCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionleftcarddata.json";
import DatamagThirdSectionRightCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionrightcarddata.json";
import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import HumresIndustriesData from "@/app/data/subpagedata/humresdata/industriesectionhumresdata/industrieshumresdata.json";
import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import assadvtextdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/accadvtextdata.json";
import leftadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/lefsideadvdata.json";
import rightadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/rightsideadvdata.json";
import SubPagesGetStartedSection from "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection";

export default function DataManagement() {
  const data = getHeroData("data-management");
  return (
    <>
      <SubPageHeroSection data={data} />
      <DataMagGridSection />
      <SecondSectionRightSided
        textdata={textdata}
        rightstripcarddata={rightstripcarddata}
      />
      <ThirdProcessSection
        textdata={DatamagThirdSectionTextData}
        leftstripcarddata={DatamagThirdSectionLeftCardData}
        rightstripcarddata={DatamagThirdSectionRightCardData}
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
      <SubPagesGetStartedSection />
    </>
  );
}
