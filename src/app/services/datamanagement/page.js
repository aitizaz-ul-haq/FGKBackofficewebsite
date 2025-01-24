// importing data management pages services subcomponents
import SubPageHeroSection from "@/app/components/subpagecomponenets/subpageherosection/subpageherosection";
import DataMagGridSection from "@/app/components/subpagecomponenets/datamag/datamaggridsection";
import SecondSectionRightSided from "@/app/components/subpagecomponenets/secondsectiontypes/secondsectiontyperightsided";
import ThirdProcessSection from "@/app/components/subpagecomponenets/secondsectiontypes/thirdprocesssection";
import SubPagesIndustriesSection from "@/app/components/subpagecomponenets/subpagesindustriessection/subpagesindustriessection";
import SubPagesAdvantegesSection from "@/app/components/subpagecomponenets/subpagesadvantegessection/subpagesadvantegessection";
import SubPagesGetStartedSection from "@/app/components/subpagecomponenets/subpagesgetstartedsection/subpagesgetstartedsection";

// importing data management service page data
import textdata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagtextdata.json";
import rightstripcarddata from "@/app/data/subpagedata/datamanagementdata/secondsectiondatamanagementdata/datamagrightstripdata.json";
import DatamagThirdSectionTextData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectiontextdata.json";
import DatamagThirdSectionLeftCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionleftcarddata.json";
import DatamagThirdSectionRightCardData from "@/app/data/subpagedata/datamanagementdata/thirdsectiondatamag/datamagthirdsectionrightcarddata.json";
import HumresIndustriesData from "@/app/data/subpagedata/humresdata/industriesectionhumresdata/industrieshumresdata.json";
import assadvtextdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/accadvtextdata.json";
import leftadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/lefsideadvdata.json";
import rightadvdata from "@/app/data/subpagedata/accandrepdata/accadvantegessectiondata/rightsideadvdata.json";

// importing utility menthods
import { getHeroData } from "@/app/utils/gethreodata";

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
